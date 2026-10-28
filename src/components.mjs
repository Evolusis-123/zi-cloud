import { SITE, NAV } from './content.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------------------------------------------------------------------------
// Icons: 24px stroke icons, currentColor. Decorative by default.
// ---------------------------------------------------------------------------
const ICONS = {
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  alert: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  flow: '<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h4a2 2 0 0 1 2 2v8a2 2 0 0 0 2 2h0"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  scale: '<path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  trend: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  chevron: '<polyline points="6 9 12 15 18 9"/>',
};

export function icon(name, cls = 'icon') {
  const body = ICONS[name] || ICONS.layers;
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

// ---------------------------------------------------------------------------
// Brand mark (decorative lattice, no text in SVG so it scales cleanly)
// ---------------------------------------------------------------------------
export const brandMark = () => `<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
  <rect x="1" y="1" width="30" height="30" rx="7" fill="#0B1F3A"/>
  <path d="M9 10h14L9 22h14" fill="none" stroke="#2EC4B6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="23" cy="10" r="1.8" fill="#2EC4B6"/></svg>`;

// Decorative lattice illustration used behind hero and CTA bands.
export const lattice = () => `<svg class="lattice" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <path d="M0 60 H600 M0 140 H600 M0 220 H600 M0 300 H600 M0 380 H600"/>
    <path d="M60 0 V400 M180 0 V400 M300 0 V400 M420 0 V400 M540 0 V400"/>
  </g>
  <g fill="currentColor"><circle cx="180" cy="140" r="3"/><circle cx="300" cy="220" r="3"/><circle cx="420" cy="140" r="3"/><circle cx="540" cy="300" r="3"/><circle cx="60" cy="300" r="3"/></g>
  <path d="M60 300 L180 140 L300 220 L420 140 L540 300" fill="none" stroke="#2EC4B6" stroke-width="1.6"/>
</svg>`;

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------
export function jsonLd(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo.svg`,
    description: SITE.description,
    email: SITE.email,
    founder: { '@type': 'Person', name: SITE.founder.name, jobTitle: SITE.founder.role },
    areaServed: SITE.areas,
    knowsAbout: [
      'Regulatory workflow automation',
      'AI governance consulting',
      'Financial crime operations',
      'Compliance automation',
      'AML workflow automation',
      'KYC workflow automation',
      'Airtable consulting for regulated industries',
      'RegTech consulting',
      'Human-in-the-loop AI',
      'AI auditability',
    ],
    serviceType: 'Specialist management consultancy for regulated operations',
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE.url}${it.href}` })),
  };
}

export function faqSchema(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

// ---------------------------------------------------------------------------
// <head>
// ---------------------------------------------------------------------------
export function head({ title, description, path, ogType = 'website', schema = [], noindex = false, image, includeOrg = false }) {
  const canonical = `${SITE.url}${path}`;
  const fullTitle = title === SITE.tagline ? `${SITE.name} | ${SITE.tagline}` : `${title} | ${SITE.name}`;
  const img = `${SITE.url}${image || SITE.ogImage}`;
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<meta name="theme-color" content="#0B1F3A">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/styles.css">
<script>document.documentElement.classList.add('js');</script>
${jsonLd(includeOrg ? orgSchema() : { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url })}
${schema.map(jsonLd).join('\n')}
</head>`;
}

// ---------------------------------------------------------------------------
// Header / navigation
// ---------------------------------------------------------------------------
export function header(activePath = '') {
  const isActive = (href) => activePath === href;
  const navItems = NAV.map((item, i) => {
    if (item.children) {
      const childActive = item.children.some((c) => isActive(c.href));
      return `<li class="nav-item has-children">
        <button class="nav-link nav-trigger${childActive ? ' is-active' : ''}" type="button" aria-expanded="false" aria-controls="menu-${i}">${esc(item.label)} ${icon('chevron', 'icon-xs')}</button>
        <div class="dropdown" id="menu-${i}">
          <ul>${item.children.map((c) => `<li><a href="${c.href}"${isActive(c.href) ? ' aria-current="page"' : ''}><span class="dd-title">${esc(c.label)}</span><span class="dd-desc">${esc(c.desc)}</span></a></li>`).join('')}</ul>
        </div>
      </li>`;
    }
    return `<li class="nav-item"><a class="nav-link${isActive(item.href) ? ' is-active' : ''}" href="${item.href}"${isActive(item.href) ? ' aria-current="page"' : ''}>${esc(item.label)}</a></li>`;
  }).join('');

  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" id="top">
  <div class="container header-inner">
    <a class="brand" href="/" aria-label="${esc(SITE.name)} home">${brandMark()}<span class="brand-text">Zi Cloud</span></a>
    <nav class="primary-nav" id="primary-nav" aria-label="Primary">
      <ul class="nav-list">${navItems}</ul>
      <div class="nav-cta-mobile"><a class="btn btn-primary" href="/contact.html#discovery">Book Discovery Call</a></div>
    </nav>
    <div class="header-actions">
      <a class="btn btn-primary btn-sm header-cta" href="/contact.html#discovery">Book Discovery Call</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">${icon('menu')}<span class="sr-only">Menu</span></button>
    </div>
  </div>
</header>`;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export function footer() {
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand brand-light" href="/" aria-label="${esc(SITE.name)} home">${brandMark()}<span class="brand-text">Zi Cloud</span></a>
      <p class="footer-tag">${esc(SITE.positioning)}</p>
      <p class="footer-small">Zi Cloud Ltd is a UK-registered specialist consultancy for regulated operations.</p>
    </div>
    <nav aria-label="Services and solutions">
      <h2 class="footer-h">Solutions</h2>
      <ul>
        <li><a href="/financial-crime-operations.html">Financial Crime Operations</a></li>
        <li><a href="/compliance-operations.html">Compliance Operations</a></li>
        <li><a href="/ai-governance.html">AI Governance</a></li>
        <li><a href="/airtable-regulated-organisations.html">Airtable for Regulated Organisations</a></li>
        <li><a href="/services.html">All Services</a></li>
      </ul>
    </nav>
    <nav aria-label="Company">
      <h2 class="footer-h">Company</h2>
      <ul>
        <li><a href="/industries.html">Industries</a></li>
        <li><a href="/case-studies.html">Case Studies</a></li>
        <li><a href="/insights.html">Insights</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
    <div>
      <h2 class="footer-h">Get in touch</h2>
      <ul class="footer-contact">
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li><a href="/contact.html#discovery">Book a discovery call</a></li>
        <li><a href="/contact.html#partner">Partner with us</a></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>&copy; ${SITE.year} ${esc(SITE.name)}. All rights reserved.</p>
    <ul class="legal">
      <li><a href="/privacy.html">Privacy notice</a></li>
      <li><a href="/cookies.html">Cookie policy</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </div>
</footer>
<div class="cookie-banner" id="cookie-banner" role="region" aria-label="Cookie consent" hidden>
  <div class="cookie-inner">
    <p>We use essential cookies to run this site. With your permission we also use analytics cookies to understand how the site is used. You can read more in our <a href="/cookies.html">cookie policy</a>.</p>
    <div class="cookie-actions">
      <button class="btn btn-ghost btn-sm" type="button" data-consent="essential">Essential only</button>
      <button class="btn btn-primary btn-sm" type="button" data-consent="all">Accept all</button>
    </div>
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// Layout helpers
// ---------------------------------------------------------------------------
export function page({ meta, activePath, body, breadcrumbs }) {
  const crumbs = breadcrumbs ? breadcrumbSchema(breadcrumbs) : null;
  const headHtml = head({ ...meta, schema: [...(meta.schema || []), ...(crumbs ? [crumbs] : [])] });
  return `${headHtml}
<body>
${header(activePath)}
<main id="main" tabindex="-1">
${body}
</main>
${footer()}
<script src="/assets/main.js" defer></script>
</body>
</html>
`;
}

export function breadcrumbNav(items) {
  return `<nav class="breadcrumbs container" aria-label="Breadcrumb"><ol>${items
    .map((it, i) => (i === items.length - 1 ? `<li aria-current="page">${esc(it.name)}</li>` : `<li><a href="${it.href}">${esc(it.name)}</a></li>`))
    .join('')}</ol></nav>`;
}

export function hero({ eyebrow, title, lead, actions = '', visual = '', tone = 'dark', id = '' }) {
  return `<section class="hero hero-${tone}"${id ? ` id="${id}"` : ''}>
  <div class="hero-bg" aria-hidden="true">${lattice()}</div>
  <div class="container hero-grid">
    <div class="hero-copy reveal">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
      ${actions ? `<div class="hero-actions">${actions}</div>` : ''}
    </div>
    ${visual ? `<div class="hero-visual reveal">${visual}</div>` : ''}
  </div>
</section>`;
}

export function section({ id = '', eyebrow = '', title = '', lead = '', body = '', tone = '' }) {
  const cls = ['section', tone ? `section-${tone}` : ''].filter(Boolean).join(' ');
  return `<section class="${cls}"${id ? ` id="${id}" aria-labelledby="${id}-title"` : ''}>
  <div class="container">
    <header class="section-head reveal">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      ${title ? `<h2 id="${id ? id + '-title' : ''}">${title}</h2>` : ''}
      ${lead ? `<p class="section-lead">${lead}</p>` : ''}
    </header>
    ${body}
  </div>
</section>`;
}

export function card({ icon: ic, title, text, href = '', linkText = 'Explore', extra = '' }) {
  const inner = `${ic ? `<span class="card-icon">${icon(ic)}</span>` : ''}
    <h3>${esc(title)}</h3>
    <p>${esc(text)}</p>${extra}
    ${href ? `<span class="card-link">${linkText} ${icon('arrow', 'icon-xs')}</span>` : ''}`;
  return href
    ? `<a class="card card-link-wrap reveal" href="${href}">${inner}</a>`
    : `<div class="card reveal">${inner}</div>`;
}

export function ctaBand({ title, text, primary, secondary }) {
  return `<section class="cta-band" aria-labelledby="cta-title">
  <div class="cta-bg" aria-hidden="true">${lattice()}</div>
  <div class="container cta-inner reveal">
    <div>
      <h2 id="cta-title">${title}</h2>
      <p>${text}</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-light" href="${primary.href}">${primary.label}</a>
      ${secondary ? `<a class="btn btn-outline-light" href="${secondary.href}">${secondary.label}</a>` : ''}
    </div>
  </div>
</section>`;
}

// ---------------------------------------------------------------------------
// CSS diagrams (responsive, no SVG text)
// ---------------------------------------------------------------------------
export function stepFlow(steps, { label = 'Process flow' } = {}) {
  return `<ol class="step-flow" style="--n:${steps.length}" aria-label="${esc(label)}">${steps
    .map((s, i) => `<li class="step-flow-item"><span class="step-num">${String(i + 1).padStart(2, '0')}</span><span class="step-label">${esc(s)}</span></li>`)
    .join('')}</ol>`;
}

export function layerStack(layers) {
  return `<div class="layer-stack" role="list">${layers
    .map((l) => `<div class="layer" role="listitem"><h4>${esc(l.layer)}</h4><ul>${l.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`)
    .join('')}</div>`;
}

export function loopDiagram(steps) {
  return `<ol class="loop" aria-label="Human-in-the-loop decision cycle">${steps
    .map((s, i) => `<li class="loop-node"><span class="loop-index">${i + 1}</span><strong>${esc(s.title)}</strong><span>${esc(s.text)}</span></li>`)
    .join('')}</ol>`;
}

export function lifecycleRing(steps) {
  return stepFlow(steps, { label: 'Control lifecycle' }).replace('class="step-flow"', 'class="step-flow step-flow-cycle"');
}

export function heroProcessPanel() {
  const items = [
    ['Process', 'Map the real workflow and its variants'],
    ['Controls', 'Define owners, thresholds and evidence'],
    ['Automation', 'Automate deterministic steps inside the controls'],
    ['Human Oversight', 'Named reviewers for consequential decisions'],
    ['Auditability', 'Immutable record of every step'],
    ['AI Enablement', 'Model use within a tiered approval model'],
  ];
  return `<figure class="process-panel" aria-label="Controlled workflow model: process, controls, automation, human oversight, auditability, AI enablement">
    <div class="panel-top"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="panel-title">Controlled workflow model</span></div>
    <ol class="process-track">${items
      .map(
        ([t, d], i) => `<li class="track-item"><span class="track-index">${i + 1}</span><div><strong>${t}</strong><span>${d}</span></div></li>`
      )
      .join('')}</ol>
    <figcaption class="panel-foot">Each stage passes forward only the evidence the next stage needs.</figcaption>
  </figure>`;
}
