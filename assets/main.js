/* Zi Cloud site behaviour. Progressive enhancement: the site reads correctly without this file. */
(function () {
  'use strict';

  var doc = document;
  var body = doc.body;
  var CONSENT_KEY = 'zc-consent';
  var CALENDLY_SRC = 'https://assets.calendly.com/assets/external/widget.js';

  function safe(fn) {
    try { return fn(); } catch (e) { return undefined; }
  }

  // ---------- Sticky header shadow ----------
  var header = doc.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 4);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile menu ----------
  var toggle = doc.querySelector('.menu-toggle');
  var nav = doc.getElementById('primary-nav');
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  // ---------- Dropdowns (keyboard and touch accessible) ----------
  var triggers = doc.querySelectorAll('.nav-trigger');
  function closeAll(except) {
    triggers.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      var menu = doc.getElementById(t.getAttribute('aria-controls'));
      if (menu) menu.classList.remove('is-open');
    });
  }
  triggers.forEach(function (t) {
    var menu = doc.getElementById(t.getAttribute('aria-controls'));
    t.addEventListener('click', function () {
      var open = t.getAttribute('aria-expanded') !== 'true';
      closeAll(t);
      t.setAttribute('aria-expanded', String(open));
      if (menu) menu.classList.toggle('is-open', open);
    });
  });
  doc.addEventListener('click', function (e) {
    if (!e.target.closest('.has-children')) closeAll(null);
  });
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });

  // ---------- Reveal on scroll ----------
  var reveals = doc.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---------- Cookie consent ----------
  var banner = doc.getElementById('cookie-banner');
  function getConsent() {
    return safe(function () { return window.localStorage.getItem(CONSENT_KEY); });
  }
  function setConsent(value) {
    safe(function () { window.localStorage.setItem(CONSENT_KEY, value); });
    window.zcConsent = value;
    doc.dispatchEvent(new CustomEvent('zc:consent', { detail: { analytics: value === 'all' } }));
    if (banner) banner.hidden = true;
  }
  var stored = getConsent();
  if (stored) {
    window.zcConsent = stored;
  } else if (banner) {
    banner.hidden = false;
  }
  if (banner) {
    banner.querySelectorAll('[data-consent]').forEach(function (btn) {
      btn.addEventListener('click', function () { setConsent(btn.getAttribute('data-consent')); });
    });
  }

  // ---------- Calendly (only when a URL is configured in content.mjs) ----------
  var calendlySlot = doc.querySelector('[data-calendly]');
  if (calendlySlot && calendlySlot.getAttribute('data-calendly')) {
    var url = calendlySlot.getAttribute('data-calendly');
    var s = doc.createElement('script');
    s.src = CALENDLY_SRC;
    s.async = true;
    s.onload = function () {
      if (window.Calendly) {
        calendlySlot.innerHTML = '';
        window.Calendly.initInlineWidget({ url: url, parentElement: calendlySlot });
      }
    };
    doc.head.appendChild(s);
  }

  // ---------- Contact form ----------
  var form = doc.getElementById('contact-form');
  if (form) {
    var status = doc.getElementById('form-status');
    var endpoint = form.getAttribute('data-endpoint');
    var email = form.getAttribute('data-email');

    // Pre-select enquiry type from the card that linked here (#discovery, #partner, #vendor).
    var typeMap = { discovery: 'discovery', partner: 'partner', vendor: 'vendor' };
    var hash = (window.location.hash || '').replace('#', '');
    var sel = form.querySelector('#f-type');
    if (sel && typeMap[hash]) sel.value = typeMap[hash];

    var rules = {
      name: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your full name.'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid work email address.'; },
      company: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your organisation.'; },
      type: function (v) { return v ? '' : 'Please choose what you would like to discuss.'; },
      message: function (v) { return v.trim().length >= 20 ? '' : 'Please give a little more detail, at least 20 characters.'; },
      consent: function (v, el) { return el.checked ? '' : 'Please confirm you are happy for us to contact you.'; },
    };

    function validateField(name) {
      var el = form.elements[name];
      if (!el) return true;
      var msg = rules[name](el.type === 'checkbox' ? '' : el.value, el);
      var wrap = el.closest('.field');
      var err = doc.getElementById('e-' + name);
      if (err) err.textContent = msg;
      if (wrap) wrap.classList.toggle('is-invalid', !!msg);
      el.setAttribute('aria-invalid', String(!!msg));
      return !msg;
    }

    Object.keys(rules).forEach(function (name) {
      var el = form.elements[name];
      if (el) el.addEventListener('blur', function () { if (el.value || el.type === 'checkbox') validateField(name); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      var firstBad = null;
      Object.keys(rules).forEach(function (name) {
        if (!validateField(name)) {
          ok = false;
          if (!firstBad) firstBad = form.elements[name];
        }
      });
      if (!ok) {
        status.className = 'form-status is-error';
        status.textContent = 'Please correct the highlighted fields.';
        if (firstBad) firstBad.focus();
        return;
      }

      var data = {};
      Array.prototype.forEach.call(form.elements, function (el) {
        if (el.name) data[el.name] = el.type === 'checkbox' ? el.checked : el.value.trim();
      });
      data.submittedAt = new Date().toISOString();
      data.source = window.location.pathname;

      if (endpoint) {
        status.className = 'form-status';
        status.textContent = 'Sending your enquiry…';
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        }).then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          form.reset();
          status.className = 'form-status is-success';
          status.textContent = 'Thank you. Your enquiry has been sent and we will reply within two working days.';
        }).catch(function () {
          status.className = 'form-status is-error';
          status.textContent = 'We could not send your enquiry just now. Please email ' + email + ' directly.';
        });
      } else {
        // No backend configured: open a prefilled email so nothing is lost.
        var subject = 'Enquiry via website: ' + data.type;
        var lines = [
          'Name: ' + data.name,
          'Organisation: ' + data.company,
          'Role: ' + (data.role || '-'),
          'Work email: ' + data.email,
          '',
          data.message,
        ];
        window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
        status.className = 'form-status is-success';
        status.textContent = 'Your email app should open with the enquiry ready to send. If it does not, email ' + email + ' directly.';
      }
    });
  }

  // ---------- Smooth focus management for in-page anchors ----------
  doc.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      var target = id && doc.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var typeSel = doc.getElementById('f-type');
      if (typeSel && (id === 'discovery' || id === 'partner' || id === 'vendor')) typeSel.value = id;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (history.replaceState) history.replaceState(null, '', '#' + id);
    });
  });
})();
