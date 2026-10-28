import {
  SITE, WHO_WE_HELP, FRICTION, DIFFERENCE, USE_CASES, TECH, PRINCIPLES, SERVICES, FINCRIME, COMPLIANCE,
  AI_GOV, AIRTABLE, INDUSTRIES, CASES, INSIGHTS, FOUNDER, ABOUT_PRINCIPLES, ENGAGEMENTS, CONTACT_TYPES,
} from './content.mjs';
import {
  page, hero, section, card, ctaBand, icon, esc, stepFlow, layerStack, loopDiagram, heroProcessPanel,
  breadcrumbNav, faqSchema, lifecycleRing,
} from './components.mjs';

const faqBlock = (faq) => `<div class="faq">${faq
  .map((f) => `<details class="faq-item reveal"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`)
  .join('')}</div>`;

const btn = (href, label, kind = 'primary') => `<a class="btn btn-${kind}" href="${href}">${label}</a>`;

const articleSchema = (a) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.summary,
  datePublished: a.date,
  dateModified: a.date,
  author: { '@type': 'Person', name: SITE.founder.name },
  publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/assets/logo.svg` } },
  mainEntityOfPage: `${SITE.url}/insights/${a.slug}.html`,
  articleSection: a.category,
  inLanguage: 'en-GB',
});

const serviceSchema = (s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  description: s.summary,
  provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
  areaServed: 'GB',
});

// ---------------------------------------------------------------------------
// Contact form (shared by Contact page)
// ---------------------------------------------------------------------------
function contactForm() {
  return `<form class="form" id="contact-form" novalidate data-endpoint="${esc(SITE.formEndpoint)}" data-email="${esc(SITE.email)}">
  <div class="form-grid">
    <div class="field">
      <label for="f-name">Full name <span class="req" aria-hidden="true">*</span></label>
      <input id="f-name" name="name" type="text" autocomplete="name" required aria-describedby="e-name">
      <p class="field-error" id="e-name" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="f-email">Work email <span class="req" aria-hidden="true">*</span></label>
      <input id="f-email" name="email" type="email" autocomplete="email" required aria-describedby="e-email">
      <p class="field-error" id="e-email" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="f-company">Organisation <span class="req" aria-hidden="true">*</span></label>
      <input id="f-company" name="company" type="text" autocomplete="organization" required aria-describedby="e-company">
      <p class="field-error" id="e-company" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="f-role">Role or function</label>
      <input id="f-role" name="role" type="text" autocomplete="organization-title">
    </div>
    <div class="field field-full">
      <label for="f-type">What would you like to discuss? <span class="req" aria-hidden="true">*</span></label>
      <select id="f-type" name="type" required aria-describedby="e-type">
        <option value="">Select an option</option>
        ${CONTACT_TYPES.map((t) => `<option value="${t.value}">${esc(t.label)}</option>`).join('')}
      </select>
      <p class="field-error" id="e-type" aria-live="polite"></p>
    </div>
    <div class="field field-full">
      <label for="f-message">Tell us about the process or challenge <span class="req" aria-hidden="true">*</span></label>
      <textarea id="f-message" name="message" rows="6" required minlength="20" aria-describedby="h-message e-message"></textarea>
      <p class="field-hint" id="h-message">Include the function, the process and what has made it hard to run. Do not include customer personal data.</p>
      <p class="field-error" id="e-message" aria-live="polite"></p>
    </div>
    <div class="field field-full field-check">
      <input id="f-consent" name="consent" type="checkbox" required aria-describedby="e-consent">
      <label for="f-consent">I agree that Zi Cloud may contact me about this enquiry. I have read the <a href="/privacy.html">privacy notice</a>. <span class="req" aria-hidden="true">*</span></label>
      <p class="field-error" id="e-consent" aria-live="polite"></p>
    </div>
  </div>
  <div class="form-actions">
    <button class="btn btn-primary" type="submit">Send enquiry</button>
    <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
  </div>
  <p class="form-fine">We respond to qualified enquiries within two working days. Enquiries are handled under our <a href="/privacy.html">privacy notice</a>.</p>
</form>`;
}

// ---------------------------------------------------------------------------
// HOME
// ---------------------------------------------------------------------------
export function home() {
  const heroBlock = hero({
    eyebrow: 'Specialist consultancy for regulated operations',
    title: 'Controlled AI &amp; Workflow Automation for Regulated Operations',
    lead: esc(SITE.supporting),
    actions: btn('/contact.html#discovery', 'Book Discovery Call') + btn('#use-cases', 'Explore Use Cases', 'outline'),
    visual: heroProcessPanel(),
    tone: 'dark',
  });

  const trust = `<section class="trust-strip" aria-label="Areas of focus">
    <div class="container trust-inner">
      <p>Built for teams running</p>
      <ul>
        <li>Financial crime operations</li><li>KYC and AML</li><li>Regulatory reporting</li><li>Compliance controls</li><li>AI governance</li><li>Operational transformation</li>
      </ul>
    </div></section>`;

  const who = section({
    id: 'who-we-help',
    eyebrow: 'Who we help',
    title: 'Teams accountable for control outcomes',
    lead: 'We work with the people who answer to regulators, boards and audit committees, and who need operations that can withstand their scrutiny.',
    body: `<div class="grid grid-4">${WHO_WE_HELP.map((w) => card({ icon: w.icon, title: w.title, text: w.text, href: w.href, linkText: 'See how we work' })).join('')}</div>`,
  });

  const friction = section({
    id: 'friction',
    eyebrow: 'The cost of operational friction',
    title: 'Most regulatory risk starts in ordinary operations',
    lead: 'The problems regulators find are rarely dramatic. They are the accumulated result of processes that depend on workarounds, individuals and unrecorded decisions.',
    tone: 'mist',
    body: `<ul class="friction-grid">${FRICTION.map((f, i) => `<li class="friction-item reveal"><span class="friction-num">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div></li>`).join('')}</ul>`,
  });

  const diff = section({
    id: 'difference',
    eyebrow: 'What makes Zi Cloud different',
    title: 'Automation that your regulator can follow',
    lead: 'Most automation firms are judged by the tasks they remove. We are judged by whether the control still works afterwards.',
    body: `<div class="compare">
      <div class="compare-col compare-typical reveal">
        <h3>${esc(DIFFERENCE.typical.title)}</h3>
        <ul>${DIFFERENCE.typical.points.map((p) => `<li>${icon('close', 'icon-xs')}<span>${esc(p)}</span></li>`).join('')}</ul>
      </div>
      <div class="compare-col compare-zi reveal">
        <h3>${esc(DIFFERENCE.zicloud.title)}</h3>
        <ul>${DIFFERENCE.zicloud.points.map((p) => `<li>${icon('check', 'icon-xs')}<span>${esc(p)}</span></li>`).join('')}</ul>
      </div>
    </div>`,
  });

  const useCases = section({
    id: 'use-cases',
    eyebrow: 'Use cases',
    title: 'Where controlled workflow earns its keep',
    lead: 'Each use case is designed around the control it must satisfy, then automated or augmented with AI within that boundary.',
    tone: 'mist',
    body: `<div class="grid grid-4 uc-grid">${USE_CASES.map((u) => card({ title: u.title, text: u.text, href: u.href, linkText: 'Read more' })).join('')}</div>`,
  });

  const approach = section({
    id: 'approach',
    eyebrow: 'How we work',
    title: 'One programme, from process to proof',
    lead: 'We do not hand over a set of automations and leave. We design the control, build the workflow and leave your team able to operate it.',
    body: `<div class="grid grid-4">${ENGAGEMENTS.map((e, i) => `<div class="card step-card reveal"><span class="card-icon">${icon(e.icon)}</span><span class="step-badge">Stage ${i + 1}</span><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p></div>`).join('')}</div>`,
  });

  const tech = section({
    id: 'technology',
    eyebrow: 'Technology ecosystem',
    title: 'Technology is the implementation layer.',
    lead: '<strong>The workflow is the asset.</strong> We select tools against the control requirement, then build the workflow so it can survive a change of platform.',
    tone: 'mist',
    body: `<ul class="tech-grid" aria-label="Technologies we work with">${TECH.map((t) => `<li class="tech-chip reveal"><span class="tech-mark" aria-hidden="true">${esc(t.name.slice(0, 2).toUpperCase())}</span><div><strong>${esc(t.name)}</strong><span>${esc(t.group)}</span></div></li>`).join('')}</ul>`,
  });

  const founder = section({
    id: 'founder',
    eyebrow: 'About the founder',
    title: 'A practitioner who has designed and delivered operational change',
    body: `<div class="split">
      <div class="split-copy reveal">
        <p class="lead-sm">${esc(FOUNDER.intro)}</p>
        <p>${esc(FOUNDER.paragraphs[0])}</p>
        <p><a class="text-link" href="/about.html">Read the founder profile ${icon('arrow', 'icon-xs')}</a></p>
      </div>
      <aside class="quote-card reveal" aria-label="Founder principles">
        <h3>${esc(FOUNDER.name)}</h3>
        <p class="muted">${esc(FOUNDER.role)}</p>
        <ul class="check-list">${FOUNDER.experience.map((e) => `<li>${icon('check', 'icon-xs')}<span>${esc(e)}</span></li>`).join('')}</ul>
      </aside>
    </div>`,
  });

  const insightsTeaser = section({
    id: 'insights-teaser',
    eyebrow: 'Insights',
    title: 'Perspectives for risk, compliance and operations leaders',
    tone: 'mist',
    body: `<div class="grid grid-3">${INSIGHTS.slice(0, 3).map((a) => card({ title: a.title, text: a.summary, href: `/insights/${a.slug}.html`, linkText: `${a.readMinutes} min read` })).join('')}</div>
      <p class="center-link"><a class="btn btn-outline" href="/insights.html">View all insights</a></p>`,
  });

  const principles = section({
    id: 'principles',
    eyebrow: 'Our principles',
    title: 'Governance first, not governance last',
    body: `<div class="grid grid-4">${PRINCIPLES.map((p) => card({ icon: p.icon, title: p.title, text: p.text })).join('')}</div>`,
  });

  const cta = ctaBand({
    title: 'Start with one process that your regulator already asks about.',
    text: 'A four-week discovery will show you where manual work, unrecorded decisions and AI experiments sit, and what it would take to control them.',
    primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' },
    secondary: { href: '/contact.html#partner', label: 'Partner with us' },
  });

  return page({
    meta: {
      title: SITE.tagline,
      description: SITE.description,
      path: '/',
      includeOrg: true,
      schema: [{ '@context': 'https://schema.org', '@type': 'WebPage', name: SITE.tagline, url: SITE.url }],
    },
    activePath: '/',
    body: heroBlock + trust + who + friction + diff + useCases + approach + tech + principles + founder + insightsTeaser + cta,
  });
}

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
export function services() {
  const body = `${hero({
    eyebrow: 'Services',
    title: 'Ten disciplines for controlled operations',
    lead: 'Our services cover the full path from understanding how work really happens, through designing controlled workflows and AI use, to assuring delivery. Each can be bought on its own or as part of a programme.',
    actions: btn('/contact.html#discovery', 'Book Discovery Call') + btn('#service-index', 'Browse services', 'outline'),
    visual: stepFlow(['Discover', 'Design', 'Build', 'Govern', 'Assure'], { label: 'Engagement stages' }),
  })}
  <section class="section" id="service-index" aria-label="Service index">
    <div class="container"><ul class="index-list reveal">${SERVICES.map((s) => `<li><a href="#${s.id}">${esc(s.name)}</a></li>`).join('')}</ul></div>
  </section>
  ${SERVICES.map((s, i) => `<section class="section ${i % 2 ? 'section-mist' : ''} service" id="${s.id}" aria-labelledby="${s.id}-title">
    <div class="container service-grid">
      <header class="service-head reveal">
        <span class="card-icon">${icon(s.icon)}</span>
        <p class="eyebrow">Service ${String(i + 1).padStart(2, '0')}</p>
        <h2 id="${s.id}-title">${esc(s.name)}</h2>
        <p class="lead-sm">${esc(s.summary)}</p>
      </header>
      <div class="service-body">
        <div class="service-block reveal"><h3>Overview</h3><p>${esc(s.overview)}</p></div>
        <div class="service-block reveal"><h3>Benefits</h3><ul class="check-list">${s.benefits.map((b) => `<li>${icon('check', 'icon-xs')}<span>${esc(b)}</span></li>`).join('')}</ul></div>
        <div class="service-block reveal"><h3>Typical challenges</h3><ul class="dash-list">${s.challenges.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
        <div class="service-block reveal"><h3>Engagement model</h3><p>${esc(s.engagement)}</p></div>
        <div class="service-block reveal"><h3>Expected outcomes</h3><ul class="check-list">${s.outcomes.map((o) => `<li>${icon('arrow', 'icon-xs')}<span>${esc(o)}</span></li>`).join('')}</ul></div>
      </div>
    </div>
    <script type="application/ld+json">${JSON.stringify(serviceSchema(s))}</script>
  </section>`).join('')}
  ${ctaBand({ title: 'Not sure which service fits?', text: 'Most engagements begin with a short discovery conversation. We will tell you honestly whether we are the right partner for the problem.', primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' }, secondary: { href: '/contact.html', label: 'Send an enquiry' } })}`;

  return page({
    meta: {
      title: 'Services',
      description: 'Regulatory workflow automation, controlled AI workflows, operational transformation, system integration and AI governance design for regulated operations.',
      path: '/services.html',
      schema: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Services', url: `${SITE.url}/services.html` }],
    },
    activePath: '/services.html',
    breadcrumbs: [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services.html' }],
    body: breadcrumbNav([{ name: 'Home', href: '/' }, { name: 'Services', href: '/services.html' }]) + body,
  });
}

// ---------------------------------------------------------------------------
// FINANCIAL CRIME OPERATIONS
// ---------------------------------------------------------------------------
export function financialCrime() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Financial Crime Operations', href: '/financial-crime-operations.html' }];
  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Solution',
    title: 'Financial Crime Operations',
    lead: esc(FINCRIME.intro),
    actions: btn('/contact.html#discovery', 'Book Discovery Call') + btn('#fc-workflow', 'See the workflow', 'outline'),
    visual: stepFlow(FINCRIME.flow.slice(0, 5), { label: 'Financial crime workflow' }),
  })}
  ${section({
    id: 'fc-capabilities',
    eyebrow: 'Capabilities',
    title: 'From onboarding to SAR, controlled end to end',
    lead: 'We design the workflows across the financial crime lifecycle, using the screening and monitoring engines you already run as inputs to controlled operations.',
    body: `<div class="grid grid-3">${FINCRIME.topics.map((t) => card({ icon: t.icon, title: t.title, text: t.text })).join('')}</div>`,
  })}
  ${section({
    id: 'fc-workflow',
    eyebrow: 'Reference workflow',
    title: 'Every stage has an owner, a clock and a record',
    lead: esc(FINCRIME.flowNote),
    tone: 'mist',
    body: `<div class="reveal">${stepFlow(FINCRIME.flow, { label: 'Financial crime case flow' })}</div>`,
  })}
  ${section({
    id: 'fc-challenges',
    eyebrow: 'Typical challenges',
    title: 'Where financial crime operations come under pressure',
    body: `<ul class="dash-list dash-list-lg reveal">${FINCRIME.challenges.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`,
  })}
  ${section({
    id: 'fc-outcomes',
    eyebrow: 'Expected outcomes',
    title: 'What a controlled financial crime operation looks like',
    tone: 'mist',
    body: `<div class="grid grid-2">${FINCRIME.outcomes.map((o) => `<div class="card reveal">${icon('check')}<p class="card-plain">${esc(o)}</p></div>`).join('')}</div>`,
  })}
  ${section({
    id: 'fc-faq',
    eyebrow: 'Questions',
    title: 'Financial crime operations: common questions',
    body: faqBlock(FINCRIME.faq),
  })}
  ${ctaBand({ title: 'Bring us one financial crime workflow.', text: 'We will map it, identify the control gaps and show you what a controlled redesign would involve.', primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' }, secondary: { href: '/case-studies.html', label: 'View illustrative examples' } })}`;

  return page({
    meta: {
      title: 'Financial Crime Operations: AML, KYC and Case Management Workflows',
      description: 'Controlled workflow automation for AML, KYC, CDD, EDD, screening, investigations, case management and SAR processes in regulated financial services.',
      path: '/financial-crime-operations.html',
      schema: [faqSchema(FINCRIME.faq), { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Financial Crime Operations', url: `${SITE.url}/financial-crime-operations.html` }],
    },
    activePath: '/financial-crime-operations.html',
    body,
  });
}

// ---------------------------------------------------------------------------
// COMPLIANCE OPERATIONS
// ---------------------------------------------------------------------------
export function compliance() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Compliance Operations', href: '/compliance-operations.html' }];
  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Solution',
    title: 'Compliance Operations',
    lead: esc(COMPLIANCE.intro),
    actions: btn('/contact.html#discovery', 'Book Discovery Call') + btn('#cp-lifecycle', 'See the control lifecycle', 'outline'),
    visual: stepFlow(COMPLIANCE.lifecycle.slice(0, 5), { label: 'Control lifecycle' }),
  })}
  ${section({
    id: 'cp-topics',
    eyebrow: 'Capabilities',
    title: 'Managing risk through better operational process',
    body: `<div class="grid grid-3">${COMPLIANCE.topics.map((t) => card({ icon: t.icon, title: t.title, text: t.text })).join('')}</div>`,
  })}
  ${section({
    id: 'cp-lifecycle',
    eyebrow: 'Control lifecycle',
    title: 'Evidence is a by-product of operating the control',
    lead: esc(COMPLIANCE.lifecycleNote),
    tone: 'mist',
    body: `<div class="reveal">${lifecycleRing(COMPLIANCE.lifecycle)}</div>`,
  })}
  ${section({
    id: 'cp-challenges',
    eyebrow: 'Typical challenges',
    title: 'Why compliance operations struggle to show control',
    body: `<ul class="dash-list dash-list-lg reveal">${COMPLIANCE.challenges.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`,
  })}
  ${section({
    id: 'cp-outcomes',
    eyebrow: 'Expected outcomes',
    title: 'What good looks like',
    tone: 'mist',
    body: `<div class="grid grid-2">${COMPLIANCE.outcomes.map((o) => `<div class="card reveal">${icon('check')}<p class="card-plain">${esc(o)}</p></div>`).join('')}</div>`,
  })}
  ${section({ id: 'cp-faq', eyebrow: 'Questions', title: 'Compliance operations: common questions', body: faqBlock(COMPLIANCE.faq) })}
  ${ctaBand({ title: 'Find out how ready your controls really are.', text: 'A readiness review tests evidence quality against the examination scope you are most likely to face.', primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' }, secondary: { href: '/services.html', label: 'Explore services' } })}`;

  return page({
    meta: {
      title: 'Compliance Operations: Controls, Evidence and Audit Readiness',
      description: 'Compliance operations redesign covering controls, regulatory evidence, governance, audit readiness, policy management and assurance workflows.',
      path: '/compliance-operations.html',
      schema: [faqSchema(COMPLIANCE.faq), { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Compliance Operations', url: `${SITE.url}/compliance-operations.html` }],
    },
    activePath: '/compliance-operations.html',
    body,
  });
}

// ---------------------------------------------------------------------------
// AI GOVERNANCE (pillar)
// ---------------------------------------------------------------------------
export function aiGovernance() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'AI Governance', href: '/ai-governance.html' }];
  const tierTable = `<div class="table-wrap reveal" role="region" aria-label="Risk tiers and oversight" tabindex="0"><table class="data-table">
    <caption class="sr-only">Risk tiers and the oversight each requires</caption>
    <thead><tr><th scope="col">Tier</th><th scope="col">Model of oversight</th><th scope="col">Oversight required</th><th scope="col">Example</th></tr></thead>
    <tbody>${AI_GOV.tiers.map((t) => `<tr><th scope="row">${esc(t.tier)}<span class="tier-label">${esc(t.label)}</span></th><td>${esc(t.label)}</td><td>${esc(t.oversight)}</td><td>${esc(t.example)}</td></tr>`).join('')}</tbody>
  </table></div>`;

  const traceList = `<ol class="trace-list reveal">${AI_GOV.traceFields.map((f) => `<li><strong>${esc(f.label)}</strong><span>${esc(f.text)}</span></li>`).join('')}</ol>`;

  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Pillar',
    title: 'AI is Easy.<br><span class="accent-text">Governance is Hard.</span>',
    lead: esc(AI_GOV.intro),
    actions: btn('/contact.html#discovery', 'Book Discovery Call') + btn('#ai-loop', 'See the decision loop', 'outline'),
    visual: loopDiagram(AI_GOV.loopSteps.slice(0, 3)),
  })}
  ${section({
    id: 'ai-topics',
    eyebrow: 'What we design',
    title: 'The operating mechanisms behind controlled AI',
    body: `<div class="grid grid-3">${AI_GOV.topics.map((t) => card({ icon: t.icon, title: t.title, text: t.text })).join('')}</div>`,
  })}
  ${section({
    id: 'ai-loop',
    eyebrow: 'Human-in-the-loop',
    title: 'A decision loop with a named accountable person',
    lead: 'The model proposes. Rules gate the output. A person accepts, edits or rejects it. Exceptions escalate, and every step is recorded.',
    tone: 'mist',
    body: `<div class="reveal">${loopDiagram(AI_GOV.loopSteps)}</div>`,
  })}
  ${section({
    id: 'ai-tiers',
    eyebrow: 'Approval and oversight',
    title: 'Risk-tiered oversight, not one rule for everything',
    lead: 'Oversight is set by the consequence of error and how reversible the action is. The tier governs the review model, the sampling and the approval route.',
    body: tierTable,
  })}
  ${section({
    id: 'ai-trace',
    eyebrow: 'Decision traceability',
    title: 'What a single AI-assisted decision should be able to show',
    lead: 'If you cannot reconstruct one decision in minutes, the traceability is not operating. These are the fields we design into every consequential AI step.',
    tone: 'mist',
    body: `<div class="trace-wrap">${traceList}<div class="trace-note reveal"><h3>Test it</h3><p>Pick five AI-assisted decisions at random and rebuild each from the record. Time the exercise. The result tells you more about your governance than any policy review.</p></div></div>`,
  })}
  ${section({
    id: 'ai-challenges',
    eyebrow: 'Common failure patterns',
    title: 'Where AI governance breaks down in practice',
    body: `<ul class="dash-list dash-list-lg reveal">${AI_GOV.challenges.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`,
  })}
  ${section({ id: 'ai-faq', eyebrow: 'Questions', title: 'AI governance: common questions', tone: 'mist', body: faqBlock(AI_GOV.faq) })}
  ${ctaBand({ title: 'Govern the AI you already use before you add more.', text: 'We start with a use-case register and a tiering exercise. Most organisations find more AI in use than they expected.', primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' }, secondary: { href: '/insights.html', label: 'Read AI governance insights' } })}`;

  return page({
    meta: {
      title: 'AI Governance Consulting: Human-in-the-Loop, Auditability and Controls',
      description: 'AI governance design for regulated organisations: human-in-the-loop workflows, AI controls, approval models, escalation, auditability and decision traceability.',
      path: '/ai-governance.html',
      schema: [faqSchema(AI_GOV.faq), { '@context': 'https://schema.org', '@type': 'WebPage', name: 'AI Governance', url: `${SITE.url}/ai-governance.html` }],
    },
    activePath: '/ai-governance.html',
    body,
  });
}

// ---------------------------------------------------------------------------
// AIRTABLE
// ---------------------------------------------------------------------------
export function airtable() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Airtable for Regulated Organisations', href: '/airtable-regulated-organisations.html' }];
  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Platform',
    title: 'Airtable for Regulated Organisations',
    lead: esc(AIRTABLE.intro),
    actions: btn('/contact.html#discovery', 'Book Discovery Call') + btn('#at-architecture', 'See the architecture', 'outline'),
    visual: stepFlow(['Workflow', 'Controls', 'Case records', 'Governance'], { label: 'Airtable roles in regulated operations' }),
  })}
  ${section({
    id: 'at-roles',
    eyebrow: 'Positioning',
    title: 'Not a database. An operational control platform.',
    lead: esc(AIRTABLE.principle),
    body: `<div class="grid grid-4">${AIRTABLE.roles.map((r) => card({ icon: r.icon, title: r.title, text: r.text })).join('')}</div>`,
  })}
  ${section({
    id: 'at-usecases',
    eyebrow: 'Use cases',
    title: 'Where regulated teams run work on Airtable',
    tone: 'mist',
    body: `<div class="grid grid-3">${AIRTABLE.useCases.map((u) => card({ title: u.title, text: u.text })).join('')}</div>`,
  })}
  ${section({
    id: 'at-architecture',
    eyebrow: 'Architecture',
    title: 'A layered design with clear system boundaries',
    lead: 'Airtable sits in the workflow and control layer. Systems of record stay where they are, and AI services sit behind an approval gate.',
    body: `<div class="reveal">${layerStack(AIRTABLE.architecture)}</div>`,
  })}
  ${section({
    id: 'at-ai',
    eyebrow: 'AI integrations',
    title: 'AI that proposes inside a controlled base',
    tone: 'mist',
    body: `<ul class="dash-list dash-list-lg reveal">${AIRTABLE.aiIntegrations.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>`,
  })}
  ${section({
    id: 'at-workflows',
    eyebrow: 'Workflow examples',
    title: 'How controlled workflows look on the platform',
    body: `<div class="grid grid-3">${AIRTABLE.workflowExamples.map((w) => `<div class="card reveal"><h3>${esc(w.title)}</h3><ol class="mini-steps">${w.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol></div>`).join('')}</div>`,
  })}
  ${section({
    id: 'at-governance',
    eyebrow: 'Governance examples',
    title: 'The controls that make the platform defensible',
    tone: 'mist',
    body: `<div class="grid grid-2">${AIRTABLE.governanceExamples.map((g) => `<div class="card reveal">${icon('shield')}<p class="card-plain">${esc(g)}</p></div>`).join('')}</div>`,
  })}
  ${section({
    id: 'at-limits',
    eyebrow: 'Honest boundaries',
    title: 'Where Airtable should not be used',
    lead: 'We will tell you if your design asks the platform to do something it should not. That conversation protects you during supervisory review.',
    body: `<ul class="dash-list dash-list-lg reveal">${AIRTABLE.whenNot.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>`,
  })}
  ${section({ id: 'at-faq', eyebrow: 'Questions', title: 'Airtable in regulated environments: common questions', tone: 'mist', body: faqBlock(AIRTABLE.faq) })}
  ${ctaBand({ title: 'Design the control layer before you configure the base.', text: 'We run a platform-fit review that checks data classification, permissions, audit export and ownership before anything is built.', primary: { href: '/contact.html#vendor', label: 'Talk to us about Airtable' }, secondary: { href: '/contact.html#discovery', label: 'Book Discovery Call' } })}`;

  return page({
    meta: {
      title: 'Airtable for Regulated Organisations: Workflow and Control Platform Design',
      description: 'Airtable consulting for regulated organisations: workflow, operational control, case management and governance design, with AI integrations and audit-ready architecture.',
      path: '/airtable-regulated-organisations.html',
      schema: [faqSchema(AIRTABLE.faq), { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Airtable for Regulated Organisations', url: `${SITE.url}/airtable-regulated-organisations.html` }],
    },
    activePath: '/airtable-regulated-organisations.html',
    body,
  });
}

// ---------------------------------------------------------------------------
// INDUSTRIES
// ---------------------------------------------------------------------------
export function industries() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries.html' }];
  const nav = `<nav class="jump-nav reveal" aria-label="Jump to industry"><ul>${INDUSTRIES.map((i) => `<li><a href="#${i.id}">${esc(i.name)}</a></li>`).join('')}</ul></nav>`;
  const blocks = INDUSTRIES.map((i, idx) => `<section class="section ${idx % 2 ? 'section-mist' : ''} industry" id="${i.id}" aria-labelledby="${i.id}-title">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow">Industry ${String(idx + 1).padStart(2, '0')}</p>
        <h2 id="${i.id}-title">${esc(i.name)}</h2>
        <p class="section-lead">${esc(i.summary)}</p>
      </header>
      <div class="grid grid-4 industry-grid">
        <div class="card reveal"><h3>Challenges</h3><ul class="dash-list">${i.challenges.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
        <div class="card reveal"><h3>Workflows</h3><ul class="dash-list">${i.workflows.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
        <div class="card reveal"><h3>AI opportunities</h3><ul class="dash-list">${i.aiOpportunities.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
        <div class="card reveal"><h3>Governance requirements</h3><ul class="dash-list">${i.governance.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
      </div>
    </div>
  </section>`).join('');

  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Industries',
    title: 'Regulated sectors, specific operational realities',
    lead: 'Each sector has its own operational pressures and supervisory expectations. We adjust the workflow, the AI opportunities and the governance requirements to fit, rather than applying one template.',
    actions: btn('/contact.html#discovery', 'Book Discovery Call'),
  })}${nav}${blocks}${ctaBand({ title: 'Tell us which sector and which process.', text: 'We will respond with the governance questions your sector is likely to raise, and the controls that answer them.', primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' }, secondary: { href: '/case-studies.html', label: 'Read illustrative case studies' } })}`;

  return page({
    meta: {
      title: 'Industries: Financial Services, FinTech, Payments, Insurance, RegTech and Professional Services',
      description: 'Controlled workflow and AI governance for financial services, FinTech, payments, insurance, RegTech and professional services, with sector-specific governance requirements.',
      path: '/industries.html',
    },
    activePath: '/industries.html',
    breadcrumbs: crumbs,
    body,
  });
}

// ---------------------------------------------------------------------------
// CASE STUDIES
// ---------------------------------------------------------------------------
export function caseStudies() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Case Studies', href: '/case-studies.html' }];
  const items = CASES.map((c, i) => `<article class="case reveal" id="${c.id}" aria-labelledby="${c.id}-title">
    <header class="case-head">
      <p class="label-pill">Illustrative Example ${String(i + 1).padStart(2, '0')}</p>
      <p class="eyebrow">${esc(c.sector)}</p>
      <h2 id="${c.id}-title">${esc(c.title)}</h2>
      <ul class="tag-list">${c.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </header>
    <div class="case-grid">
      <div class="case-block"><h3>Situation</h3><p>${esc(c.situation)}</p></div>
      <div class="case-block"><h3>Problem</h3><p>${esc(c.problem)}</p></div>
      <div class="case-block"><h3>Approach</h3><p>${esc(c.approach)}</p></div>
      <div class="case-block"><h3>Workflow design</h3><p>${esc(c.workflowDesign)}</p></div>
      <div class="case-block"><h3>Automation design</h3><p>${esc(c.automationDesign)}</p></div>
      <div class="case-block"><h3>Outcomes</h3><p>${esc(c.outcomes)}</p></div>
    </div>
    <div class="metrics" role="list" aria-label="Metrics for ${esc(c.title)}">${c.metrics.map((m) => `<div class="metric" role="listitem"><span class="metric-value">${esc(m.value)}</span><span class="metric-label">${esc(m.label)}</span></div>`).join('')}</div>
  </article>`).join('');

  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Case studies',
    title: 'Illustrative examples, not customer references',
    lead: 'The examples below are fictional composites built to show our method. They are labelled as illustrative because they do not describe named clients. Figures are indicative and exist to show the shape of the outcomes we design for.',
    actions: btn('/contact.html#discovery', 'Discuss a similar situation'),
  })}
  <section class="section" aria-label="Case study examples"><div class="container case-list">${items}</div></section>
  ${ctaBand({ title: 'Want an example based on your operation?', text: 'We will walk through the method on your process and give you an honest estimate of what is achievable.', primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' }, secondary: { href: '/services.html', label: 'Explore services' } })}`;

  return page({
    meta: {
      title: 'Case Studies: Illustrative Examples in Regulated Operations',
      description: 'Six illustrative examples of controlled workflow, AI governance and compliance operations redesign in regulated financial services. Fictional composites for method illustration.',
      path: '/case-studies.html',
    },
    activePath: '/case-studies.html',
    breadcrumbs: crumbs,
    body,
  });
}

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------
export function about() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'About', href: '/about.html' }];
  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'About Zi Cloud',
    title: 'A boutique consultancy with a practitioner’s standards',
    lead: esc(FOUNDER.intro),
    actions: btn('/contact.html#discovery', 'Book Discovery Call') + btn('#founder', 'Read the founder profile', 'outline'),
  })}
  ${section({
    id: 'founder',
    eyebrow: 'Founder',
    title: `${FOUNDER.name}, ${FOUNDER.role.split(',')[0]}`,
    body: `<div class="split">
      <div class="split-copy reveal">${FOUNDER.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
      <aside class="quote-card reveal" aria-label="Areas of experience">
        <h3>Experience</h3>
        <ul class="check-list">${FOUNDER.experience.map((e) => `<li>${icon('check', 'icon-xs')}<span>${esc(e)}</span></li>`).join('')}</ul>
        <p class="muted">Experience described across large financial institutions. Zi Cloud Ltd is the vehicle through which this work is delivered.</p>
      </aside>
    </div>`,
  })}
  ${section({
    id: 'principles',
    eyebrow: 'How we operate',
    title: 'Principles we hold ourselves to',
    tone: 'mist',
    body: `<ul class="principle-list reveal">${ABOUT_PRINCIPLES.map((p, i) => `<li><span class="friction-num">${String(i + 1).padStart(2, '0')}</span><p>${esc(p)}</p></li>`).join('')}</ul>`,
  })}
  ${section({
    id: 'ways',
    eyebrow: 'Ways of working',
    title: 'How an engagement runs',
    body: `<div class="grid grid-4">${ENGAGEMENTS.map((e) => card({ icon: e.icon, title: e.title, text: e.text })).join('')}</div>`,
  })}
  ${section({
    id: 'who',
    eyebrow: 'Who we work with',
    title: 'Partners for the people accountable for outcomes',
    tone: 'mist',
    body: `<div class="grid grid-3">${WHO_WE_HELP.map((w) => card({ icon: w.icon, title: w.title, text: w.text })).join('')}</div>`,
  })}
  ${ctaBand({ title: 'Speak with us about a process that needs control.', text: 'A short discovery conversation will tell both of us whether there is a fit.', primary: { href: '/contact.html#discovery', label: 'Book Discovery Call' }, secondary: { href: '/contact.html#partner', label: 'Partner with us' } })}`;

  return page({
    meta: {
      title: 'About Zi Cloud: Specialist Consultancy for Regulated Operations',
      description: 'Zi Cloud is a specialist boutique consultancy for regulated operations, founded by Asif Saraiya, a practitioner in banking, financial crime, regulatory reporting and operational transformation.',
      path: '/about.html',
      includeOrg: true,
      schema: [{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Zi Cloud', url: `${SITE.url}/about.html` }],
    },
    activePath: '/about.html',
    breadcrumbs: crumbs,
    body,
  });
}

// ---------------------------------------------------------------------------
// INSIGHTS
// ---------------------------------------------------------------------------
export function insightsIndex() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights.html' }];
  const cards = INSIGHTS.map((a) => `<article class="insight-card reveal">
    <p class="insight-meta"><span class="label-pill">${esc(a.category)}</span><time datetime="${a.date}">${formatDate(a.date)}</time><span>${a.readMinutes} min read</span></p>
    <h2><a href="/insights/${a.slug}.html">${esc(a.title)}</a></h2>
    <p>${esc(a.summary)}</p>
    <a class="card-link" href="/insights/${a.slug}.html">Read article ${icon('arrow', 'icon-xs')}<span class="sr-only"> ${esc(a.title)}</span></a>
  </article>`).join('');

  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Insights',
    title: 'Writing on controlled operations and AI governance',
    lead: 'Short, practical articles for risk, compliance, financial crime and operations leaders who need to make automation and AI defensible.',
  })}
  <section class="section" aria-label="Articles"><div class="container insight-grid">${cards}</div></section>
  ${ctaBand({ title: 'Have a question this article does not answer?', text: 'Send it to us. We reply to specific operational questions and will tell you if we are not the right people to help.', primary: { href: '/contact.html', label: 'Send an enquiry' }, secondary: { href: '/services.html', label: 'Explore services' } })}`;

  return page({
    meta: {
      title: 'Insights: AI Governance, Audit-Ready Automation and Financial Crime Operations',
      description: 'Articles on human-in-the-loop AI, audit-ready automation, AI governance, workflow design, manual compliance cost and financial crime operations.',
      path: '/insights.html',
      schema: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Zi Cloud Insights', url: `${SITE.url}/insights.html`, blogPost: INSIGHTS.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: `${SITE.url}/insights/${a.slug}.html` })) }],
    },
    activePath: '/insights.html',
    breadcrumbs: crumbs,
    body,
  });
}

export function insightArticle(a) {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights.html' }, { name: a.title, href: `/insights/${a.slug}.html` }];
  const related = INSIGHTS.filter((x) => x.slug !== a.slug).slice(0, 3);
  const body = `${breadcrumbNav(crumbs)}
  <article class="article">
    <header class="article-head container reveal">
      <p class="insight-meta"><span class="label-pill">${esc(a.category)}</span><time datetime="${a.date}">${formatDate(a.date)}</time><span>${a.readMinutes} min read</span></p>
      <h1>${esc(a.title)}</h1>
      <p class="lead">${esc(a.summary)}</p>
    </header>
    <div class="container article-body reveal">
      ${a.body.map((p) => `<p>${esc(p)}</p>`).join('')}
      <aside class="article-cta" aria-label="Next step">
        <p><strong>Applying this to your operation?</strong> Start with a discovery conversation focused on one process.</p>
        <a class="btn btn-primary btn-sm" href="/contact.html#discovery">Book Discovery Call</a>
      </aside>
    </div>
  </article>
  <section class="section section-mist" aria-labelledby="related-title">
    <div class="container">
      <h2 id="related-title" class="h3">Related insights</h2>
      <div class="grid grid-3">${related.map((r) => card({ title: r.title, text: r.summary, href: `/insights/${r.slug}.html`, linkText: `${r.readMinutes} min read` })).join('')}</div>
    </div>
  </section>`;

  return page({
    meta: {
      title: a.title,
      description: a.summary,
      path: `/insights/${a.slug}.html`,
      ogType: 'article',
      schema: [articleSchema(a)],
    },
    activePath: '/insights.html',
    breadcrumbs: crumbs,
    body,
  });
}

function formatDate(iso) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export function contact() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact.html' }];
  const calendly = SITE.calendlyUrl
    ? `<div class="calendly-embed" data-calendly="${esc(SITE.calendlyUrl)}" aria-label="Book a discovery call"></div>`
    : `<div class="calendly-slot" data-calendly="" aria-label="Scheduling widget">
         <p class="calendly-label">Scheduling calendar</p>
         <p>Choose a 30-minute discovery slot. The calendar opens here once scheduling is connected. Until then, send the enquiry form and we will reply with times.</p>
         <a class="btn btn-outline btn-sm" href="mailto:${SITE.email}?subject=Discovery%20call%20request">Request a call by email</a>
       </div>`;

  const body = `${breadcrumbNav(crumbs)}${hero({
    eyebrow: 'Contact',
    title: 'Start with a conversation about one process',
    lead: 'Tell us what is hard to run, what your regulator or auditor has asked about, and where AI is already in use. We will reply with an honest view of whether and how we can help.',
  })}
  <section class="section" aria-label="Contact options">
    <div class="container contact-grid">
      <div class="contact-main">
        <div class="cta-tabs" role="list">
          <a class="option-card reveal" role="listitem" href="#discovery"><span class="card-icon">${icon('calendar')}</span><h2 class="h3">Discovery call</h2><p>A 30-minute conversation to understand the process and the control question.</p></a>
          <a class="option-card reveal" role="listitem" href="#partner"><span class="card-icon">${icon('users')}</span><h2 class="h3">Partner</h2><p>Advisory firms, RegTech providers and consultancies who want to refer or co-deliver.</p></a>
          <a class="option-card reveal" role="listitem" href="#vendor"><span class="card-icon">${icon('link')}</span><h2 class="h3">Technology vendor</h2><p>Platforms and AI providers who want to be part of a controlled implementation.</p></a>
        </div>
        <section id="discovery" class="form-section reveal" aria-labelledby="discovery-title">
          <h2 id="discovery-title" class="h2">Send an enquiry</h2>
          <p class="muted">Choose the option that fits best. The form is pre-set when you arrive from one of the cards above.</p>
          ${contactForm()}
        </section>
      </div>
      <aside class="contact-side">
        <div class="side-card reveal" id="scheduling">
          <h2 class="h3">Book a discovery call</h2>
          ${calendly}
        </div>
        <div class="side-card reveal" id="partner">
          <h2 class="h3">Partner with Zi Cloud</h2>
          <p>We work with advisory firms, RegTech and FinTech providers, and specialist consultancies that need a delivery partner for controlled workflow and AI work.</p>
        </div>
        <div class="side-card reveal" id="vendor">
          <h2 class="h3">Technology vendors</h2>
          <p>If you provide a platform or model that regulated customers use in operations, we can assess how it fits a controlled design and where its governance evidence needs strengthening.</p>
        </div>
        <div class="side-card reveal">
          <h2 class="h3">Direct contact</h2>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          <p class="muted">For confidential matters, use the form above and mark the enquiry as sensitive in the message.</p>
        </div>
      </aside>
    </div>
  </section>`;

  return page({
    meta: {
      title: 'Contact Zi Cloud: Book a Discovery Call',
      description: 'Book a discovery call with Zi Cloud, or contact us about partnerships and technology integrations for controlled workflow and AI in regulated operations.',
      path: '/contact.html',
      schema: [{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Zi Cloud', url: `${SITE.url}/contact.html` }],
    },
    activePath: '/contact.html',
    breadcrumbs: crumbs,
    body,
  });
}

// ---------------------------------------------------------------------------
// LEGAL (short notices; have counsel review before launch)
// ---------------------------------------------------------------------------
export function legal({ slug, title, description, sections }) {
  const crumbs = [{ name: 'Home', href: '/' }, { name: title, href: `/${slug}.html` }];
  const body = `${breadcrumbNav(crumbs)}${hero({ eyebrow: 'Legal', title, lead: esc(description) })}
  <section class="section"><div class="container prose">${sections.map((s) => `<h2>${esc(s.h)}</h2>${s.p.map((p) => `<p>${esc(p)}</p>`).join('')}`).join('')}</div></section>`;
  return page({ meta: { title, description, path: `/${slug}.html` }, activePath: '', breadcrumbs: crumbs, body });
}

export function notFound() {
  const body = `${hero({
    eyebrow: 'Error 404',
    title: 'This page is not part of the controlled path',
    lead: 'The page you requested does not exist or has moved. Use the navigation or return to the home page.',
    actions: btn('/', 'Return to home') + btn('/services.html', 'View services', 'outline'),
  })}`;
  return page({ meta: { title: 'Page not found', description: 'The requested page could not be found.', path: '/404.html', noindex: true }, activePath: '', body });
}
