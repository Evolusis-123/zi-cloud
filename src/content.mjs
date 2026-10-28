// Single source of truth for all site copy and configuration.
// Edit here, then run `node build.mjs`. Keep en-GB spelling.

export const SITE = {
  name: 'Zi Cloud Ltd',
  shortName: 'Zi Cloud',
  url: 'https://www.zicloud.uk',
  tagline: 'Controlled AI & Workflow Automation for Regulated Operations',
  positioning: 'We build controlled AI and workflow systems for regulated operations.',
  supporting:
    'We help compliance, risk and operations teams automate manual work, introduce AI safely and maintain the auditability regulators expect.',
  description:
    'Zi Cloud is a specialist boutique consultancy for regulated operations. We design controlled workflow automation and AI-enabled processes for financial crime, compliance, risk and operations teams, with auditability built in.',
  email: 'hello@zicloud.uk',
  // Set to a Calendly scheduling URL to render the live booking widget on the Contact page.
  calendlyUrl: '',
  // Set to a form backend URL that accepts JSON POST to enable direct submission.
  // When empty, the contact form opens a prefilled email to SITE.email instead.
  formEndpoint: '',
  founder: { name: 'Asif Saraiya', role: 'Founder' },
  ogImage: '/assets/og-image.png',
  locale: 'en_GB',
  year: 2026,
  areas: ['United Kingdom', 'Europe', 'Financial services and FinTech'],
};

export const NAV = [
  { label: 'Services', href: '/services.html' },
  {
    label: 'Solutions',
    children: [
      { label: 'Financial Crime Operations', href: '/financial-crime-operations.html', desc: 'AML, KYC, investigations and SAR workflows' },
      { label: 'Compliance Operations', href: '/compliance-operations.html', desc: 'Controls, evidence and audit readiness' },
      { label: 'AI Governance', href: '/ai-governance.html', desc: 'Human oversight, controls and decision traceability' },
      { label: 'Airtable for Regulated Organisations', href: '/airtable-regulated-organisations.html', desc: 'Operational control platform design' },
    ],
  },
  { label: 'Industries', href: '/industries.html' },
  { label: 'Case Studies', href: '/case-studies.html' },
  { label: 'Insights', href: '/insights.html' },
  { label: 'About', href: '/about.html' },
];

export const WHO_WE_HELP = [
  {
    icon: 'shield',
    title: 'Financial Crime',
    text: 'AML, KYC, investigations, screening and case management.',
    href: '/financial-crime-operations.html',
  },
  {
    icon: 'scale',
    title: 'Risk & Compliance',
    text: 'Governance, controls, auditability and regulatory readiness.',
    href: '/compliance-operations.html',
  },
  {
    icon: 'settings',
    title: 'Operations Teams',
    text: 'Operational excellence through workflow redesign and automation.',
    href: '/services.html',
  },
  {
    icon: 'layers',
    title: 'FinTech & RegTech',
    text: 'Scaling regulated operations without scaling headcount.',
    href: '/industries.html',
  },
];

export const FRICTION = [
  { title: 'Critical processes hidden in spreadsheets', text: 'The logic lives in one person’s head and one unversioned workbook. When that person leaves, the control leaves with them.' },
  { title: 'Investigations tracked through email', text: 'Evidence is scattered across inboxes with no single record of who decided what, and when.' },
  { title: 'Manual evidence collection', text: 'Analysts rebuild the same evidence pack for every review cycle, at the cost of time that should go to judgement.' },
  { title: 'Reporting assembled by hand', text: 'Regulatory returns are compiled in the final days and reconciled by eye, which is where errors enter.' },
  { title: 'Disconnected systems', text: 'Re-keying between tools creates discrepancies that tend to surface only during an audit or examination.' },
  { title: 'Lack of audit trails', text: 'Decisions cannot be reconstructed, so every examination becomes an expensive reconstruction exercise.' },
  { title: 'AI experiments without governance', text: 'Models and copilots are trialled in isolation, with no owner, no approval route and no evidence trail.' },
];

export const DIFFERENCE = {
  typical: {
    title: 'Typical automation firm',
    points: ['Automates tasks in isolation', 'Leads with the technology', 'Limited focus on governance and control design', 'Measures success by tasks removed'],
  },
  zicloud: {
    title: 'Zi Cloud',
    points: ['Designs controlled workflows end to end', 'Builds auditability into every process', 'Enables AI within defined risk boundaries', 'Understands regulated environments and their supervisors', 'Balances automation with human oversight', 'Measures success by control quality and cycle time'],
  },
};

export const USE_CASES = [
  {
    slug: 'financial-crime-case-management',
    title: 'Financial Crime Case Management',
    text: 'A single case record for alerts, investigations, decisions and escalations, with defined stages, SLAs and reviewer sign-off.',
    href: '/financial-crime-operations.html',
  },
  {
    slug: 'kyc-client-onboarding',
    title: 'KYC & Client Onboarding',
    text: 'Structured collection of customer documents, risk-rated review routing, and a clear record of what was checked and by whom.',
    href: '/financial-crime-operations.html',
  },
  {
    slug: 'regulatory-reporting',
    title: 'Regulatory Reporting',
    text: 'Controlled data assembly for returns, with source lineage, reconciliation checks and a sign-off trail before submission.',
    href: '/compliance-operations.html',
  },
  {
    slug: 'investigations-management',
    title: 'Investigations Management',
    text: 'Tasking, evidence linking and findings capture for internal and external investigations, with access restricted to need-to-know.',
    href: '/financial-crime-operations.html',
  },
  {
    slug: 'compliance-evidence-management',
    title: 'Compliance Evidence Management',
    text: 'Evidence requested, collected, reviewed and retained against each control, so audit requests are answered from the record.',
    href: '/compliance-operations.html',
  },
  {
    slug: 'ai-assisted-operations',
    title: 'AI-Assisted Operations',
    text: 'Drafting, summarisation and extraction tasks where the model proposes and a named reviewer approves, with every output logged.',
    href: '/ai-governance.html',
  },
  {
    slug: 'vendor-governance',
    title: 'Vendor Governance',
    text: 'Due diligence, periodic review and performance tracking for third parties, with issues escalated to the right owner automatically.',
    href: '/compliance-operations.html',
  },
  {
    slug: 'approval-workflows',
    title: 'Approval Workflows',
    text: 'Role-based approval routes with delegation rules, time limits and escalation, replacing approvals by email and chat.',
    href: '/services.html',
  },
];

export const TECH = [
  { name: 'Airtable', group: 'Workflow and case platform' },
  { name: 'Make', group: 'Automation' },
  { name: 'n8n', group: 'Automation' },
  { name: 'Zapier', group: 'Automation' },
  { name: 'Workato', group: 'Enterprise integration' },
  { name: 'OpenAI', group: 'AI services' },
  { name: 'Anthropic', group: 'AI services' },
  { name: 'APIs', group: 'Integration' },
  { name: 'Databases', group: 'Systems of record' },
];

export const PRINCIPLES = [
  { icon: 'shield', title: 'Governance first', text: 'Controls are designed before automation is built, so nothing goes live that second line cannot test.' },
  { icon: 'users', title: 'Human oversight by design', text: 'People remain accountable for consequential decisions. Automation handles volume, not judgement.' },
  { icon: 'file', title: 'Auditability as a requirement', text: 'Every automated step, AI output and human approval leaves a record that can be reconstructed later.' },
  { icon: 'layers', title: 'Workflow is the asset', text: 'The process design is what you own. Tools change, and a well-designed workflow survives the change.' },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export const SERVICES = [
  {
    id: 'regulatory-workflow-automation',
    name: 'Regulatory Workflow Automation',
    icon: 'zap',
    summary: 'Automate the high-volume, rules-driven steps of regulated work without removing the controls that make them defensible.',
    overview:
      'Most regulated workflows are a sequence of checks, approvals and evidence requests that people perform by hand, across several tools, under time pressure. We map that sequence, separate deterministic steps from judgement steps, and automate the former with controls built into the flow: mandatory fields, versioned rules, role-based approvals and an immutable record of each action.',
    benefits: [
      'Fewer manual touchpoints in high-volume processes such as screening reviews and periodic reviews',
      'Consistent application of documented rules across teams and locations',
      'A complete activity record generated as a by-product of doing the work',
    ],
    challenges: [
      'Rules that exist only in procedure documents or in individual experience',
      'Automation that bypasses control owners and surprises second line',
      'Tool sprawl that splits evidence across systems nobody reconciles',
    ],
    engagement: 'A fixed-scope design sprint followed by a build phase with control owners involved throughout. Delivered in staged releases, so each automated step is tested against the procedure it replaces.',
    outcomes: [
      'Measurable reduction in cycle time for in-scope processes',
      'Automated steps documented to a standard second line can test',
      'A ranked backlog of automation candidates by control value and effort',
    ],
  },
  {
    id: 'controlled-ai-workflows',
    name: 'Controlled AI Workflows',
    icon: 'cpu',
    summary: 'Introduce AI into operational processes with defined scope, review points and evidence at every decision.',
    overview:
      'We design AI-enabled workflows in which the model proposes and a named person or rule disposes. Each use case is scoped to a specific task, given explicit confidence thresholds and escalation routes, and logged so that outputs can be reconstructed months later. The aim is practical productivity for analysts without handing consequential decisions to an uncontrolled tool.',
    benefits: [
      'Faster first drafts of case narratives, summaries and document extraction, with reviewer sign-off',
      'Clear boundaries on what AI may and may not decide',
      'Evidence that holds up when a model output is challenged',
    ],
    challenges: [
      'Pilots that were never designed to move into production controls',
      'Unclear accountability for AI-assisted decisions',
      'Data handling questions that surface late and stall adoption',
    ],
    engagement: 'A use-case assessment, a controlled pilot with a defined exit criterion, then production design with the governance framework applied. Each stage ends with a recorded go or no-go decision.',
    outcomes: [
      'AI use cases approved for production with documented risk tiering',
      'Reviewer effort reduced on routine items, with exceptions routed to people',
      'A reusable pattern library for future AI workflows',
    ],
  },
  {
    id: 'operational-transformation',
    name: 'Operational Transformation',
    icon: 'activity',
    summary: 'Redesign how operations work end to end, so that controls, technology and people change together rather than in sequence.',
    overview:
      'Operational change in regulated firms often fails because the process, the control framework and the system configuration are redesigned by different groups at different times. We run transformation as one programme anchored in the operating model: who does what, which controls apply where, and which system holds the record.',
    benefits: [
      'Fewer handoffs and rework loops across operational teams',
      'Target operating models that second line can assess',
      'Realistic transition plans that keep business as usual running',
    ],
    challenges: [
      'Sponsors focused on headcount rather than control outcomes',
      'Legacy process variants that have accumulated over years',
      'Change fatigue in teams already absorbing regulatory change',
    ],
    engagement: 'A phased programme with a discovery baseline, target operating model design and transition waves. We work alongside your transformation office rather than replacing it.',
    outcomes: [
      'A documented target operating model with control mapping',
      'Fewer process variants and clear ownership for each step',
      'Transition risk managed through staged cutovers',
    ],
  },
  {
    id: 'system-integration',
    name: 'System Integration',
    icon: 'link',
    summary: 'Connect the systems that hold regulated data so information moves once, under controls, with an audit trail at each hop.',
    overview:
      'Integration in regulated environments is less about connectors and more about data lineage, access control and failure handling. We design integrations between core systems, case tools, data stores and AI services, with explicit data contracts, reconciliation checks and monitoring for failed or partial transfers.',
    benefits: [
      'Reduced re-keying and the errors it introduces',
      'Visible data lineage that supports regulatory queries',
      'Failure handling that reports exceptions rather than hiding them',
    ],
    challenges: [
      'Point-to-point integrations built by individuals with no documentation',
      'Unclear system of record for key data entities',
      'Vendor APIs with rate limits or inconsistent error behaviour',
    ],
    engagement: 'Integration assessment, a reference architecture, then build and test in environments that mirror production controls. Handover includes runbooks and monitoring.',
    outcomes: [
      'An integration map with owners and data classifications',
      'Reconciliation controls with exception queues',
      'Fewer manual data transfers between operational systems',
    ],
  },
  {
    id: 'workflow-discovery',
    name: 'Workflow Discovery',
    icon: 'search',
    summary: 'Establish what actually happens in your operations, as distinct from what the procedure says happens.',
    overview:
      'Discovery combines process mapping, observation, system log analysis and control walkthroughs. We identify the real variants, the workarounds that carry risk, and the points where evidence is created or lost. The output is a fact base that everyone, from analysts to the risk committee, can challenge.',
    benefits: [
      'An evidence-based view of current state rather than assumption',
      'Early identification of control gaps and workaround risk',
      'A prioritised shortlist of where automation or redesign creates most value',
    ],
    challenges: [
      'Stakeholders reluctant to show workarounds',
      'Process documentation that is years out of date',
      'Volumes of data across tools that are hard to interpret without context',
    ],
    engagement: 'A fixed-duration discovery of four to six weeks, closed with a validation workshop. Scope is agreed before the first interview.',
    outcomes: [
      'Validated current-state process maps',
      'A register of risks and workarounds',
      'A prioritised opportunity list with effort and control impact',
    ],
  },
  {
    id: 'workflow-teardown',
    name: 'Workflow Teardown',
    icon: 'scissors',
    summary: 'A focused, time-boxed examination of one broken workflow, with a clear view of what to remove, simplify or protect.',
    overview:
      'A teardown examines a single process in depth: every step, handoff, system touch and approval, and whether each one earns its place. We separate value-adding steps from defensive steps added after incidents, and identify where complexity is compensating for poor design elsewhere.',
    benefits: [
      'A clear view of which steps can be removed without control impact',
      'Recognition of defensive steps that should be redesigned rather than repeated',
      'A fast and credible starting point for redesign',
    ],
    challenges: [
      'Reluctance to remove steps someone once added for a good reason',
      'Process owners who read the exercise as a judgement on their team',
      'Hidden dependencies on individuals rather than designed controls',
    ],
    engagement: 'A two to three week teardown of one process with a small working group. The deliverable is a teardown report and a redesign options paper.',
    outcomes: [
      'A step-by-step inventory with keep, simplify or remove decisions',
      'Quantified effort and cycle time impact',
      'Redesign options with control implications stated',
    ],
  },
  {
    id: 'automation-architecture',
    name: 'Automation Architecture',
    icon: 'layers',
    summary: 'A target architecture for automation that technology, risk and operations teams can all sign.',
    overview:
      'We define how automation tools, data stores, AI services and integration layers fit together. That includes where workflow logic lives, how changes are released, who can edit what, and how the platform is monitored and recovered. Tool choice follows from control requirements, not the reverse.',
    benefits: [
      'A shared architecture that reduces duplicated tooling',
      'Explicit change control for workflow logic',
      'Scalability plans that do not depend on heroic individuals',
    ],
    challenges: [
      'Several automation tools added by different teams without governance',
      'Business-built workflows with no release discipline',
      'Unclear ownership between IT, operations and risk',
    ],
    engagement: 'An architecture review, a reference design and a governance pack covering change, access and resilience. Can be run standalone or as the first phase of implementation.',
    outcomes: [
      'A reference architecture and recorded design decisions',
      'An access and change control model',
      'A platform roadmap aligned to risk appetite',
    ],
  },
  {
    id: 'ai-governance-design',
    name: 'AI Governance Design',
    icon: 'eye',
    summary: 'Design the controls, approvals and evidence that let your organisation use AI in regulated work with confidence.',
    overview:
      'AI governance is not a policy document placed on a shelf. We translate policy into operational mechanisms: a use-case register, risk tiering, approval gates, human review thresholds, monitoring, incident escalation and evidence capture. Each mechanism is designed to be run by the people who will operate it.',
    benefits: [
      'Clear approval routes for new AI use cases',
      'Risk-tiered oversight that avoids both over-control and gaps',
      'Evidence available for internal audit and supervisory engagement',
    ],
    challenges: [
      'Policies that do not translate into daily operational steps',
      'AI tools adopted through individual subscriptions outside governance',
      'Disagreement between innovation teams and second line on acceptable risk',
    ],
    engagement: 'Framework design over four to six weeks, followed by operational rollout support. Designed to align with recognised frameworks and your existing model risk and operational risk policies.',
    outcomes: [
      'An AI use-case register and tiering methodology',
      'Approval, escalation and monitoring procedures',
      'Evidence templates ready for audit',
    ],
  },
  {
    id: 'process-optimisation',
    name: 'Process Optimisation',
    icon: 'trend',
    summary: 'Reduce cycle time, rework and cost in operational processes, with control outcomes protected throughout.',
    overview:
      'We apply lean and measurement-led methods to operational processes, using baseline data to identify waste, queueing and rework. Every optimisation is tested against control requirements. A faster process is not an improvement if it weakens evidence quality.',
    benefits: [
      'Measured reduction in queue time and rework',
      'Capacity released for higher-value investigation work',
      'Control-tested changes that second line can accept',
    ],
    challenges: [
      'Metrics that measure activity rather than outcome',
      'Backlogs hidden through prioritisation shortcuts',
      'Optimisation that moves work elsewhere rather than removing it',
    ],
    engagement: 'Baseline measurement, targeted redesign of prioritised processes, and a measurement framework the client team keeps running after we leave.',
    outcomes: [
      'Baseline and target metrics for in-scope processes',
      'Reduced rework and queue times',
      'Sustained performance monitoring',
    ],
  },
  {
    id: 'delivery-assurance',
    name: 'Delivery Assurance',
    icon: 'check',
    summary: 'Independent-minded assurance over automation and transformation delivery, so problems surface while they are still cheap to fix.',
    overview:
      'Delivery assurance provides a structured check on scope, quality, control design, testing and readiness across automation programmes. We review at defined gates, test controls where they are built, and report findings to the sponsor and risk committee in plain language.',
    benefits: [
      'Early warning on scope creep and control gaps',
      'Evidence of testing and sign-off for audit',
      'Confidence for executives signing off go-live',
    ],
    challenges: [
      'Programmes that rely on internal self-assessment',
      'Testing focused on functionality rather than control effectiveness',
      'Go-live pressure overriding unresolved findings',
    ],
    engagement: 'Gate-based reviews aligned to your delivery lifecycle, with a standing assurance cadence for longer programmes.',
    outcomes: [
      'Gate review reports with risk-rated findings',
      'Tested control evidence',
      'Documented readiness decisions',
    ],
  },
];

// ---------------------------------------------------------------------------
// Financial Crime Operations
// ---------------------------------------------------------------------------
export const FINCRIME = {
  intro:
    'Financial crime operations generate some of the highest-stakes work in regulated firms. Alerts arrive in volume, cases move between teams, and every decision has to be explainable to a supervisor. We design the workflows that connect screening, investigation, decisioning and reporting, so that analysts spend their time on judgement and the record builds itself.',
  topics: [
    { icon: 'users', title: 'Anti-money laundering (AML)', text: 'Alert generation, triage and disposition workflows, with thresholds, tuning evidence and quality assurance sampling built into the process.' },
    { icon: 'check', title: 'Know your customer (KYC)', text: 'Structured document collection, identity verification steps and refresh cycles, with a record of what was checked, by whom and against which standard.' },
    { icon: 'file', title: 'Customer due diligence (CDD)', text: 'Risk-rated onboarding journeys that route cases to the right depth of review and capture beneficial ownership and source of funds consistently.' },
    { icon: 'search', title: 'Enhanced due diligence (EDD)', text: 'Escalation paths for high-risk relationships, with defined evidence requirements, senior approval and documented rationale for each decision.' },
    { icon: 'briefcase', title: 'Case management', text: 'A single case record for alerts and investigations, with stages, service levels, ownership, linked evidence and an activity log that cannot be edited after the fact.' },
    { icon: 'eye', title: 'Investigations', text: 'Tasking, hypothesis tracking and findings capture for complex investigations, with access restricted to people with a need to know.' },
    { icon: 'alert', title: 'Screening', text: 'Sanctions, PEP and adverse media screening workflows, including potential-match review queues, dispositions and rescreening schedules.' },
    { icon: 'layers', title: 'Workflow orchestration', text: 'Coordinated movement of work across screening, KYC, case and reporting tools, with routing rules that are versioned and reviewable.' },
    { icon: 'database', title: 'Evidence management', text: 'Evidence linked to decisions at the point of decision, with retention rules, version control and retrieval that works under examination pressure.' },
    { icon: 'lock', title: 'SAR processes', text: 'Suspicious activity reporting workflows with restricted access, tipping-off controls, MLRO review gates and a complete record of filing decisions.' },
  ],
  flow: [
    'Alert or referral',
    'Triage and risk rating',
    'Investigation',
    'Analyst decision',
    'Second-line QA',
    'Disposition or SAR',
    'Evidence retained',
  ],
  flowNote:
    'Each stage has a named owner, a service level, defined inputs and a mandatory record. Work cannot move forward without the evidence the next stage requires.',
  challenges: [
    'Alert volumes that outpace analyst capacity, creating backlogs and prioritisation by intuition',
    'Investigation notes spread across email, documents and case tools, making the decision trail hard to reconstruct',
    'Quality assurance that samples after the fact, rather than controlling the process as it runs',
    'Model and rule changes made without a documented approval route or back-testing evidence',
    'Restricted SAR information leaking into general case channels, creating tipping-off risk',
  ],
  outcomes: [
    'Shorter time from alert to disposition, with service levels that are measured rather than estimated',
    'Consistent decision records that can be produced for a supervisory request within hours',
    'Quality assurance built into the workflow, with defect rates visible to team leads',
    'A controlled change process for rules, thresholds and routing logic',
  ],
  faq: [
    { q: 'Do you replace our screening or transaction monitoring system?', a: 'No. We design the workflows around the systems you already run and connect them with controlled integrations. Core monitoring engines remain systems of record, and our work sits in the operational layer where cases, evidence and decisions are managed.' },
    { q: 'Can AI be used in investigations?', a: 'Yes, within defined boundaries. Typical uses are drafting case summaries, extracting information from documents and surfacing relevant adverse media for review. The analyst remains accountable for the disposition, and every AI output is logged with its reviewer.' },
    { q: 'How do you handle SAR confidentiality?', a: 'SAR workflows are designed with restricted visibility, separate evidence stores where required, and gating controls that prevent the subject of a report being notified through routine case communications. Design choices are reviewed with your MLRO before build.' },
    { q: 'How long does a typical engagement take?', a: 'A focused workflow redesign for one process usually runs eight to twelve weeks. Broader programmes covering several processes are phased over several quarters, with each phase delivering working controls.' },
  ],
};

// ---------------------------------------------------------------------------
// Compliance Operations
// ---------------------------------------------------------------------------
export const COMPLIANCE = {
  intro:
    'Compliance operations are where regulatory expectations become daily work: controls to operate, evidence to collect, policies to maintain and issues to close. When this work runs on spreadsheets and inbox chasers, control effectiveness is hard to demonstrate. We redesign compliance operations so that managing risk is a property of the process itself.',
  topics: [
    { icon: 'shield', title: 'Controls', text: 'Control inventories linked to obligations, with clear design, owners, frequency and testing requirements that operate in the workflow rather than alongside it.' },
    { icon: 'file', title: 'Regulatory evidence', text: 'Evidence requested, collected, reviewed and retained against each control, so that examination requests are answered from the record.' },
    { icon: 'scale', title: 'Governance', text: 'Committee calendars, decision logs, action tracking and escalation paths that show how oversight actually operates.' },
    { icon: 'check', title: 'Audit readiness', text: 'Continuous evidence capture and pre-audit reviews, so preparation is a steady state rather than a scramble before each visit.' },
    { icon: 'book', title: 'Policy management', text: 'Policy lifecycle workflows covering drafting, approval, attestation, review cycles and the link from each policy to the controls it requires.' },
    { icon: 'settings', title: 'Compliance operations', text: 'Monitoring, issue management and remediation workflows, with root cause captured and recurring issues surfaced to the right forum.' },
    { icon: 'refresh', title: 'Assurance workflows', text: 'Second-line and independent testing workflows with sampling logic, test documentation and finding ownership through to closure.' },
  ],
  lifecycle: [
    'Obligation mapped',
    'Control designed',
    'Owner assigned',
    'Evidence captured',
    'Control tested',
    'Issues remediated',
    'Attestation recorded',
  ],
  lifecycleNote:
    'The loop runs continuously. Each pass produces the evidence for the next assurance cycle, so the regulator-ready record is a by-product of normal operation.',
  challenges: [
    'Control libraries that drift from actual practice because nobody owns the link between them',
    'Evidence held by individuals, making continuity dependent on who is available',
    'Issues tracked in multiple trackers, with ageing and root cause invisible to committees',
    'Policy attestation run as an annual email exercise with low completion assurance',
  ],
  outcomes: [
    'A control inventory that second line can test and first line can operate without interpretation',
    'Evidence requests answered from a single record, with reduced preparation time before reviews',
    'Issue ageing and root cause visible to governance forums in a consistent format',
    'Attestation completion tracked with escalation for overdue responses',
  ],
  faq: [
    { q: 'Do you provide compliance advice?', a: 'We design operations and controls to support your compliance framework. Regulatory interpretation and legal advice remain the responsibility of your compliance, legal and risk functions. We work to the obligations you define.' },
    { q: 'Can you work with our GRC platform?', a: 'Yes. Where a GRC platform is your system of record, we design the operational workflows around it and integrate evidence and issue data without duplicating the record. Where no platform exists, we build the operational layer on a controlled workflow platform.' },
    { q: 'How do you approach audit readiness?', a: 'We move evidence capture into the process so it is collected at the point of control operation. Readiness reviews then check completeness and quality against the examination scope, rather than attempting to reconstruct history.' },
  ],
};

// ---------------------------------------------------------------------------
// AI Governance (pillar page)
// ---------------------------------------------------------------------------
export const AI_GOV = {
  headline: 'AI is Easy. Governance is Hard.',
  intro:
    'Getting a model to produce a useful output takes an afternoon. Getting an organisation to use that output in regulated work, with clear accountability, proportionate oversight and evidence that holds up to scrutiny, takes deliberate design. Our AI governance work focuses on the operational mechanisms that make AI safe to use, not on principles alone.',
  topics: [
    { icon: 'users', title: 'Human-in-the-loop workflows', text: 'Defined points where a person reviews, edits or approves an AI output before it has effect, with the reviewer recorded and the review standard written down.' },
    { icon: 'shield', title: 'AI controls', text: 'Input restrictions, output checks, confidence thresholds, prohibited-use rules and data handling controls, implemented in the workflow rather than in policy alone.' },
    { icon: 'eye', title: 'Auditability', text: 'Logs that capture the input, model and configuration version, output, reviewer action and timestamp for every consequential AI-assisted step.' },
    { icon: 'search', title: 'Explainability', text: 'Documentation and interfaces that let a reviewer understand why an output was produced and what it relied on, proportionate to the risk tier.' },
    { icon: 'check', title: 'Approval models', text: 'Tiered approval routes for new use cases and material changes, with clear criteria for who signs off and what evidence they receive.' },
    { icon: 'refresh', title: 'Escalation workflows', text: 'Routes for model errors, unexpected outputs, customer complaints and control breaches, with ownership, timescales and root-cause capture.' },
    { icon: 'flow', title: 'Controlled AI adoption', text: 'A staged path from pilot to production, with exit criteria at each stage and a register that shows every AI use case and its status.' },
    { icon: 'file', title: 'Evidence generation', text: 'Evidence packs produced as part of normal operation: testing results, approval records, monitoring summaries and incident logs.' },
    { icon: 'link', title: 'Decision traceability', text: 'The ability to trace a specific decision back through the AI output, the human review and the source data it relied on.' },
  ],
  loopSteps: [
    { title: 'Propose', text: 'The model drafts an output within a defined task scope.' },
    { title: 'Gate', text: 'Rules check confidence, risk tier and data restrictions.' },
    { title: 'Review', text: 'A named person accepts, edits or rejects the output.' },
    { title: 'Escalate', text: 'Exceptions and disagreements route to the accountable owner.' },
    { title: 'Record', text: 'Input, output, decision and rationale are stored immutably.' },
  ],
  tiers: [
    { tier: 'Tier 1', label: 'Assistive', oversight: 'Human reviews every output before use. Logged, sampled for quality each period.', example: 'Drafting a case summary that an analyst edits and signs.' },
    { tier: 'Tier 2', label: 'Supervised', oversight: 'Outputs above a defined confidence threshold proceed with sampling. Below threshold, a person decides.', example: 'Prioritising a review queue, with analysts reviewing the bottom of the ranking.' },
    { tier: 'Tier 3', label: 'Constrained autonomy', oversight: 'Automated action within tight bounds, with real-time monitoring, automatic halt conditions and periodic independent testing.', example: 'Routine document classification with defined error tolerance and a reversal path.' },
  ],
  traceFields: [
    { label: 'Input snapshot', text: 'The data the model received, captured as it stood at the time.' },
    { label: 'Model and version', text: 'The provider, model identifier and configuration in use.' },
    { label: 'Prompt or rule set', text: 'The instructions and rules applied, under version control.' },
    { label: 'Output', text: 'What the model produced, unedited.' },
    { label: 'Reviewer action', text: 'Accepted, edited or rejected, with the person identified.' },
    { label: 'Rationale', text: 'Why the decision was taken, recorded where the outcome departed from the output.' },
    { label: 'Timestamps and approvals', text: 'When each step occurred and which approval gate applied.' },
  ],
  challenges: [
    'Enthusiasm for AI outpacing the controls needed to run it, creating shadow use across teams',
    'Policies that state principles but leave operational questions unanswered, such as who reviews what and how often',
    'Oversight applied uniformly, which either smothers low-risk use or leaves high-risk use under-controlled',
    'Vendor models updated without notice, changing behaviour that was previously tested',
  ],
  faq: [
    { q: 'Do you help us write an AI policy?', a: 'We can, but our focus is on the operating model that gives the policy effect: the use-case register, approval routes, tiering, monitoring and evidence. A policy that cannot be operated is a liability, so we design the mechanisms first and align the wording to them.' },
    { q: 'How does this relate to model risk management?', a: 'Where you have a model risk framework, we align tiering and validation expectations to it and extend it to cover generative and workflow-embedded AI, which often falls outside traditional model inventories.' },
    { q: 'Is human-in-the-loop always the right answer?', a: 'No. Human review adds cost and can become a rubber stamp if the reviewer lacks time or information. We set oversight by risk tier, and we measure whether reviewers are genuinely catching errors.' },
    { q: 'Can you assess AI tools that our teams already use?', a: 'Yes. Shadow use is common, and it is usually the first thing we surface in discovery. We help you bring existing tools into the register, classify them and decide which should be governed, restricted or retired.' },
  ],
};

// ---------------------------------------------------------------------------
// Airtable for Regulated Organisations
// ---------------------------------------------------------------------------
export const AIRTABLE = {
  intro:
    'Airtable is often described as a database, which undersells it and misleads buyers in regulated environments. In our work it functions as a workflow platform, an operational control layer, a case management environment and a governance record, provided it is designed and governed with the discipline a regulated process requires.',
  roles: [
    { icon: 'flow', title: 'Workflow platform', text: 'Stages, ownership, routing and service levels for operational processes, with automations that move work between teams.' },
    { icon: 'shield', title: 'Operational control platform', text: 'Mandatory fields, validation, role-based permissions and approval gates that enforce how work is done.' },
    { icon: 'briefcase', title: 'Case management platform', text: 'Linked records for alerts, cases, clients, evidence and decisions, with views tailored to each role.' },
    { icon: 'file', title: 'Governance platform', text: 'Decision logs, control registers and action trackers that committees and auditors can interrogate.' },
  ],
  useCases: [
    { title: 'Alert and case queues', text: 'Structured case records with SLAs, ownership and escalation, replacing shared spreadsheets and inbox tracking.' },
    { title: 'KYC refresh management', text: 'Scheduled review cycles per customer segment, document requests, and a completion record for each refresh.' },
    { title: 'Control testing', text: 'Test plans, sampling records, results and remediation tracked against each control in the register.' },
    { title: 'Vendor due diligence', text: 'Questionnaire workflows, evidence collection and periodic review schedules for third parties.' },
    { title: 'Policy attestation', text: 'Policy versions linked to attestation campaigns, with reminders and escalation for non-responders.' },
    { title: 'Regulatory change tracking', text: 'Horizon scanning inputs, impact assessment workflows and implementation actions linked to affected controls.' },
  ],
  aiIntegrations: [
    'Case narrative drafting from structured fields, with the analyst editing and approving before the record is saved',
    'Document extraction into structured fields, with confidence scores and a verification queue for low-confidence items',
    'Summarisation of long evidence threads for reviewers, linked back to the source messages',
    'Classification and routing of incoming requests, with rules that override the model for defined categories',
  ],
  workflowExamples: [
    { title: 'Screening potential match', steps: ['Screening tool posts a potential match via API', 'Record created with risk category and due date', 'Analyst disposition with mandatory rationale', 'Second-line sample selected by rule', 'Closed record written to audit log'] },
    { title: 'Periodic KYC review', steps: ['Refresh schedule generates tasks by risk rating', 'Customer document request issued through a controlled form', 'Documents received and verified against checklist', 'Decision approved at the level set by risk rating', 'Next review date set automatically'] },
    { title: 'Regulatory return sign-off', steps: ['Source data loaded and reconciled against control totals', 'Exceptions raised to named data owners', 'Preparer submits, reviewer approves, senior sign-off recorded', 'Submission reference and evidence stored against the return'] },
  ],
  governanceExamples: [
    'Role-based permissions with field-level restrictions on sensitive data, reviewed quarterly',
    'Change control for automations and field definitions, with a release log and test evidence',
    'Immutable activity history exported to a separate audit store on a schedule',
    'Data retention rules applied by table, with deletion logged and approved',
  ],
  architecture: [
    { layer: 'Experience', items: ['Role-specific views', 'Forms for controlled data capture', 'Dashboards for committees'] },
    { layer: 'Workflow and control', items: ['Airtable bases with defined schemas', 'Validation, permissions and approval gates', 'Versioned automation logic'] },
    { layer: 'Orchestration', items: ['Automation platform such as Make, n8n, Zapier or Workato', 'Retry, failure and exception handling', 'Monitoring of runs and errors'] },
    { layer: 'AI services', items: ['Model APIs behind an approval gate', 'Prompt and rule versioning', 'Output logging with reviewer identity'] },
    { layer: 'Systems of record', items: ['Core banking, KYC and screening engines', 'Data warehouse for reporting', 'Document and evidence stores'] },
    { layer: 'Audit and assurance', items: ['Exported activity logs', 'Control evidence index', 'Independent testing access'] },
  ],
  whenNot: [
    'As the system of record for transactions, balances or regulatory data that other systems must treat as authoritative',
    'For high-volume, low-latency processing that belongs in an engine designed for throughput',
    'Where access requirements cannot be met through permissions and the data must be partitioned at a deeper level',
    'Where no owner will govern the base, its automations and its change history',
  ],
  principle:
    'Airtable is a strong place to run the workflow and hold the operational record around regulated processes. It should not be asked to be the bank’s ledger, and we will say so during discovery if your design asks it to be.',
  faq: [
    { q: 'Is Airtable acceptable for regulated data?', a: 'That depends on your data classification, your vendor due diligence and how the platform is configured. We include vendor assessment, permission design, data retention and audit export in every regulated deployment, and we document the residual risks for your risk committee.' },
    { q: 'Why not build this in a case management suite?', a: 'Sometimes you should. Where a dedicated case platform fits your process, we will recommend it. Airtable is a good choice when processes change frequently, when business teams need to maintain workflows, and when the control layer needs to be designed around your specific requirements.' },
    { q: 'Do you build Airtable bases for clients?', a: 'We design and build the workflow, control and integration layers, and we hand over the governance model so your team can operate it. We do not replace your internal capability with a permanent dependency on us.' },
  ],
};

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------
export const INDUSTRIES = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    summary: 'Banks, building societies, wealth managers and asset managers facing growing operational and regulatory load.',
    challenges: ['Legacy processes spanning multiple business lines', 'Regulatory change arriving faster than operations can absorb it', 'Quality and evidence gaps exposed in supervisory reviews'],
    workflows: ['Financial crime alert and case management', 'Client onboarding and periodic review', 'Complaints handling and root cause analysis'],
    aiOpportunities: ['Case summarisation for investigators', 'Document extraction for onboarding packs', 'Complaint theme detection with human review'],
    governance: ['Model and AI use-case registers aligned to model risk policy', 'Consumer duty and fair treatment considerations in customer-facing automation', 'Evidence standards agreed with internal audit'],
  },
  {
    id: 'fintech',
    name: 'FinTech',
    summary: 'Scaling lenders, neobanks and digital platforms that must grow operations as fast as their customer base.',
    challenges: ['Operations built for launch rather than for licence conditions', 'Manual processes that scale poorly with customer growth', 'Regulators asking for controls that were never formally designed'],
    workflows: ['Onboarding and identity verification', 'Transaction monitoring alert handling', 'Customer support escalations with compliance impact'],
    aiOpportunities: ['Automated document checks with exception queues', 'Support triage and suggested responses for agents', 'Monitoring alert enrichment'],
    governance: ['Controls designed before scale-up, not after', 'Clear ownership between product, operations and compliance', 'Regulator-ready evidence from day one of each licence activity'],
  },
  {
    id: 'payments',
    name: 'Payments',
    summary: 'Payment institutions and merchant acquirers handling high volumes, tight timelines and intense financial crime scrutiny.',
    challenges: ['Volume spikes that overwhelm manual review', 'Merchant risk decisions made inconsistently across teams', 'Sanctions and fraud signals arriving in separate queues'],
    workflows: ['Merchant onboarding and enhanced due diligence', 'Dispute and chargeback case management', 'Sanctions alert disposition'],
    aiOpportunities: ['Merchant document extraction and verification', 'Dispute narrative drafting', 'Alert clustering to reduce duplicate review'],
    governance: ['Thresholds and routing rules under version control', 'Decision rationale required for every merchant exit', 'Sampling and QA designed into high-volume queues'],
  },
  {
    id: 'insurance',
    name: 'Insurance',
    summary: 'Insurers and intermediaries with complex claims, distribution oversight and growing fraud and conduct obligations.',
    challenges: ['Claims processes with long manual tails', 'Intermediary oversight evidenced through periodic spreadsheets', 'Fraud referral handling split across claims and compliance'],
    workflows: ['Claims triage and referral', 'Intermediary monitoring and remediation', 'Fraud investigation case management'],
    aiOpportunities: ['Claims document summarisation', 'Referral prioritisation with reviewer override', 'Intermediary complaint pattern detection'],
    governance: ['Fair outcome evidence for customer-facing decisions', 'Audit trails for referral and decline decisions', 'Clear limits on automated claims decisions'],
  },
  {
    id: 'regtech',
    name: 'RegTech',
    summary: 'Technology providers whose products must themselves operate to the controls they help clients meet.',
    challenges: ['Product roadmaps moving faster than internal operational controls', 'Client implementations that depend on custom services work', 'Customer-facing commitments without matching internal evidence'],
    workflows: ['Client implementation and change control', 'Support escalation with data access governance', 'Internal control testing for product claims'],
    aiOpportunities: ['Implementation documentation drafting', 'Support triage with access-aware routing', 'Release note and change impact analysis'],
    governance: ['Internal controls evidenced for each client-facing assurance claim', 'Data access logged and reviewed', 'Vendor and sub-processor governance aligned to client requirements'],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    summary: 'Law, accounting and advisory firms with client acceptance, conflicts and anti-money laundering obligations.',
    challenges: ['Client acceptance processes split across partners and support teams', 'Conflict checks run inconsistently', 'AML supervision evidence assembled at renewal time'],
    workflows: ['Client and matter acceptance', 'Conflict clearance', 'Periodic AML review and training records'],
    aiOpportunities: ['Entity research summaries for acceptance reviews', 'Conflict search result triage', 'Policy question answering for staff, with citations'],
    governance: ['Partner sign-off recorded for high-risk acceptances', 'Supervisory evidence maintained continuously', 'Client confidentiality controls on AI tools'],
  },
];

// ---------------------------------------------------------------------------
// Case studies (all illustrative, not real customers)
// ---------------------------------------------------------------------------
export const CASES = [
  {
    id: 'alert-triage-payments',
    title: 'Alert triage backlog at a payments institution',
    sector: 'Payments',
    tags: ['AML', 'Case management', 'QA sampling'],
    situation: 'A UK-regulated payments institution processing several million transactions a month had built its alert review process across a shared spreadsheet, a case tool and email. Alert volumes had grown after a product expansion, and the review queue was measured in weeks rather than days.',
    problem: 'Analysts prioritised alerts by instinct. Duplicate alerts were reviewed separately, quality assurance sampled randomly after closure, and the reasoning behind dispositions was often recorded in free text that was hard to retrieve. Senior managers could not see which alerts were aging or why.',
    approach: 'We ran a four-week discovery to map the real alert journey, identify duplicate generation patterns and quantify rework. We then redesigned triage around risk-based queues, with the rules for queue assignment set and approved by the MLRO function.',
    workflowDesign: 'A single case record per customer and risk theme replaced per-alert tracking. Stages were defined with service levels, mandatory disposition fields and a rationale standard. QA moved from post-closure random sampling to risk-weighted sampling at the point of disposition.',
    automationDesign: 'Alerts were clustered by customer and typology before reaching analysts. Document and transaction summaries were drafted automatically for each case, with the analyst editing and approving the summary before it became part of the record. All draft and final versions were logged.',
    outcomes: 'The queue was brought within the internal service level within two quarters. The QA team gained a view of defect patterns by analyst and typology, which led to targeted training. Supervisory information became available on demand from the case record.',
    metrics: [
      { value: '42%', label: 'Reduction in median time to disposition (illustrative)' },
      { value: '31%', label: 'Fewer duplicate alerts reaching analysts (illustrative)' },
      { value: '100%', label: 'Dispositions with a recorded rationale (illustrative)' },
    ],
  },
  {
    id: 'kyc-refresh',
    title: 'Periodic KYC refresh for a challenger bank',
    sector: 'Financial services',
    tags: ['KYC', 'Refresh cycles', 'Document workflows'],
    situation: 'A challenger bank had onboarded a large retail customer base quickly and was now facing a backlog of periodic reviews. Refresh schedules were held in a data extract that was updated manually each month.',
    problem: 'Review tasks were allocated unevenly, documents arrived through several channels, and the completion record for each refresh was split between the customer file and an operations tracker. The bank could not evidence timely reviews for higher-risk segments.',
    approach: 'We designed a risk-segmented refresh model with defined cadences and decision authorities, then built the operational workflow around it. The change was phased by customer segment to keep the backlog under control.',
    workflowDesign: 'Refresh tasks were generated automatically from risk rating and last review date. Customers received a controlled document request with a checklist. Each stage captured who acted, what was checked and what decision was taken, with escalation to a senior reviewer where the risk rating required it.',
    automationDesign: 'Document receipt triggered automatic classification and completeness checks. Documents that failed checks were routed to a verification queue with the specific gap identified. Reminder and escalation messages followed the approved template set.',
    outcomes: 'Higher-risk reviews became timely and measurable. The bank could show a completion record for each refresh that matched the risk-based policy, and the backlog was cleared in a phased plan agreed with the regulator through the normal supervisory dialogue.',
    metrics: [
      { value: '3 months', label: 'Time to clear the legacy review backlog (illustrative)' },
      { value: '60%', label: 'Reduction in manual document chasing (illustrative)' },
      { value: '100%', label: 'Higher-risk reviews on schedule after phase two (illustrative)' },
    ],
  },
  {
    id: 'third-party-governance',
    title: 'Third-party governance for an investment platform',
    sector: 'Asset and wealth management',
    tags: ['Vendor governance', 'Due diligence', 'Issue management'],
    situation: 'An investment platform used more than forty third-party providers across administration, data, custody support and technology. Due diligence was completed at onboarding, and periodic reviews were tracked in spreadsheets maintained by different teams.',
    problem: 'Nobody held a complete view of provider risk. Issues raised during reviews were tracked in email and rarely closed. Contract renewal dates were missed, and the evidence for provider oversight was not available in a form the risk committee could use.',
    approach: 'We mapped providers by criticality and data access, then designed a governance model with differentiated review cycles. The operational workflow was built to make the right review happen at the right time with a named owner.',
    workflowDesign: 'Each provider record linked to its services, data flows, contract terms and risk rating. Review cycles were scheduled by criticality. Findings created actions with owners and due dates, and actions that passed their due date escalated automatically to the relevant committee.',
    automationDesign: 'Questionnaire responses were ingested and summarised against the risk framework, with the reviewer confirming the summary. Contract renewal alerts were generated from the record, and performance data from providers was collected through a standard template.',
    outcomes: 'The risk committee received a single, current view of provider risk each quarter. Overdue actions reduced sharply once escalation was automatic, and the team spent less time chasing responses.',
    metrics: [
      { value: '40+', label: 'Providers under a single governance model (illustrative)' },
      { value: '80%', label: 'Reduction in overdue review actions (illustrative)' },
      { value: 'Quarterly', label: 'Committee reporting from a single record (illustrative)' },
    ],
  },
  {
    id: 'regulatory-return-assembly',
    title: 'Regulatory return assembly for a RegTech-supported lender',
    sector: 'Consumer lending',
    tags: ['Regulatory reporting', 'Reconciliation', 'Sign-off controls'],
    situation: 'A specialist consumer lender prepared its periodic regulatory returns from several source systems. Each cycle required a small team to extract data, reconcile it manually and assemble the return in a shared workbook over several days.',
    problem: 'Reconciliations were performed by individuals with no shared control standard. Late corrections were applied directly in the workbook, and there was no reliable record of which adjustments had been made or approved.',
    approach: 'We documented the return logic, identified the control totals that should reconcile each cycle, and designed a controlled assembly process with explicit sign-off points. Data owners were engaged to fix the source issues that drove most exceptions.',
    workflowDesign: 'Source data was loaded into a controlled environment and reconciled against control totals before assembly began. Exceptions were raised to named data owners. The preparer, reviewer and senior approver each signed off in sequence, and any post-submission correction followed a defined amendment route.',
    automationDesign: 'Extraction and reconciliation checks were automated, with reconciliation breaks listed by owner. Submission packs were generated from the approved data set, and the full version history was retained with the return.',
    outcomes: 'The assembly cycle moved from several days to a fraction of that time, and the sign-off trail for each return could be produced on request. The number of late adjustments fell because most exceptions were resolved at source.',
    metrics: [
      { value: '70%', label: 'Reduction in assembly effort per cycle (illustrative)' },
      { value: '0', label: 'Unapproved adjustments in the final two cycles (illustrative)' },
      { value: '3 days', label: 'Saved from each reporting cycle (illustrative)' },
    ],
  },
  {
    id: 'control-evidence-asset-manager',
    title: 'Control evidence management for an asset manager',
    sector: 'Asset management',
    tags: ['Compliance operations', 'Evidence', 'Audit readiness'],
    situation: 'An asset manager operating across several fund ranges maintained a control library of around two hundred controls. Evidence for each control was collected by the owning teams at different times, and external audit requests arrived with short deadlines.',
    problem: 'Evidence was often reconstructed rather than retrieved. Control owners disagreed on what evidence was required, and the audit preparation team spent weeks each year assembling packs from email and shared drives.',
    approach: 'We aligned the control library to the evidence each control should generate, agreed the evidence standard with internal audit, and designed the collection workflow so that evidence was captured as controls operated.',
    workflowDesign: 'Each control record stated its frequency, owner, evidence type and test method. Evidence submissions were time-stamped and linked to the control. Missed submissions triggered reminders and escalation to the control owner’s manager.',
    automationDesign: 'Evidence requests were generated from the control calendar. Submissions were checked for completeness against the evidence standard. Audit packs were produced from the record by filter, with an index for the auditor.',
    outcomes: 'Audit preparation moved from a seasonal project to a monthly review. Internal audit reported fewer evidence exceptions, and control owners spent less time responding to ad hoc requests.',
    metrics: [
      { value: '200', label: 'Controls with defined evidence standards (illustrative)' },
      { value: '75%', label: 'Reduction in audit preparation time (illustrative)' },
      { value: '90%', label: 'Evidence submitted on time after escalation design (illustrative)' },
    ],
  },
  {
    id: 'ai-adverse-media',
    title: 'AI-assisted adverse media review for a consumer lender',
    sector: 'Consumer lending',
    tags: ['AI governance', 'Screening', 'Human-in-the-loop'],
    situation: 'A consumer lender wanted to reduce the time analysts spent reviewing adverse media hits during onboarding. An initial pilot had been run by an innovation team without a governance framework, and the risk function had not approved its continuation.',
    problem: 'The pilot produced summaries that analysts trusted without checking, and there was no record of which summaries had been relied on. The use case had no owner, no risk tier and no monitoring for error rates.',
    approach: 'We reset the use case within an AI governance framework. We assessed the risk, set the oversight model, defined the review standard and built the monitoring. The pilot was paused until the controls were in place, then restarted in a controlled form.',
    workflowDesign: 'Adverse media results were summarised for each hit with source links. Analysts recorded a disposition for each hit, and the summary was marked as accepted, edited or rejected. Low-confidence summaries were routed to a senior reviewer automatically.',
    automationDesign: 'The summarisation step ran behind an approval gate with the model version and prompt set recorded for each output. Monthly sampling compared analyst dispositions with the summaries to measure reliance and error rates.',
    outcomes: 'The risk function approved the use case as Tier 2 with defined sampling. Analysts saved time on routine hits while complex matches received fuller review. The use case became the reference pattern for the firm’s AI register.',
    metrics: [
      { value: '35%', label: 'Reduction in review time for routine hits (illustrative)' },
      { value: '4%', label: 'Sampled summaries requiring material correction, trending down (illustrative)' },
      { value: '100%', label: 'Outputs traceable to model version and reviewer (illustrative)' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Insights (CMS-ready: each entry becomes /insights/<slug>.html)
// ---------------------------------------------------------------------------
export const INSIGHTS = [
  {
    slug: 'human-in-the-loop-ai',
    title: 'Human-in-the-Loop AI: Where Oversight Adds Value and Where It Becomes Theatre',
    summary: 'Human review is the most common control proposed for AI and often the least well designed. This piece sets out when a reviewer adds real assurance and when they simply add delay.',
    category: 'AI Governance',
    date: '2026-09-02',
    readMinutes: 6,
    body: [
      'Human-in-the-loop is usually presented as the answer to AI risk. In practice it is a design choice with its own failure modes. A reviewer who has time, information and authority to change an output provides real assurance. A reviewer who sees two hundred outputs an hour and clicks accept on each one provides a signature, not a control.',
      'The test is whether the review changes outcomes. Measure how often reviewers edit or reject outputs, and check whether errors that reached production were ones a reviewer should have caught. If reviewers never disagree with the model, either the model is excellent or the review is not working.',
      'Set oversight by risk tier. Low-consequence, reversible tasks can run with sampling. High-consequence decisions need a reviewer who understands what the output relied on and has the authority to stop it. Design the interface around that reviewer’s needs, not around the vendor’s demo.',
    ],
  },
  {
    slug: 'design-audit-ready-automation',
    title: 'How to Design Audit-Ready Automation',
    summary: 'An automated process is only as defensible as its record. A practical method for building the logs, controls and change history that an auditor will ask for.',
    category: 'Automation',
    date: '2026-08-19',
    readMinutes: 5,
    body: [
      'Start with the question an auditor will ask: show me what happened to this item, who approved it, and whether the rule that applied was the rule you said applied. If the automation cannot answer that for a single item, it is not audit-ready regardless of how well it performs.',
      'Design the record first. For each automated step, define the inputs captured, the logic version applied, the output, the actor (person or system identity) and the timestamp. Store the record outside the automation tool where practical, so that changes to the tool do not rewrite history.',
      'Then design change control. Every change to logic, thresholds or routing should have an owner, a test result and an approval. Automation built by business teams needs the same release discipline as code, scaled to the risk of what it does.',
    ],
  },
  {
    slug: 'future-of-ai-governance',
    title: 'The Future of AI Governance',
    summary: 'Governance is moving from policy documents to operating mechanisms. What that shift means for risk, compliance and operations leaders over the next two years.',
    category: 'AI Governance',
    date: '2026-07-28',
    readMinutes: 6,
    body: [
      'The first generation of AI governance was largely a policy exercise. Organisations wrote principles, set up committees and published statements. Supervisors are now asking a different question: how do you know the principles are operating?',
      'The next phase is operational. Expect use-case registers that are current, risk tiers that drive different controls, monitoring that detects drift and error, and evidence that can be produced without a project team. The organisations that build these mechanisms early will find supervisory conversations easier.',
      'The practical implication is to start with the operating model, not the policy. Decide who approves a new use case, how it is monitored and what evidence is kept. Then write the policy to describe what you actually do.',
    ],
  },
  {
    slug: 'workflow-design-over-technology',
    title: 'Why Workflow Design Matters More Than Technology',
    summary: 'Tools change every few years. The workflow underneath them is the durable asset, and most automation disappointment traces back to skipping its design.',
    category: 'Operations',
    date: '2026-07-10',
    readMinutes: 4,
    body: [
      'Technology selection is the most visible decision in an automation programme, so it attracts the most attention. It is rarely the reason programmes succeed or fail. The usual cause is a process nobody redesigned: the same steps, the same handoffs and the same workarounds, now running faster.',
      'Design the workflow in terms of stages, decisions, owners, service levels and evidence. Once that is clear, the choice of tool becomes a matching exercise. Without it, the tool choice becomes the design, and the process inherits the tool’s assumptions.',
      'A well-designed workflow survives a platform change. A poorly designed one is expensive to migrate because the logic was never written down anywhere except inside the tool.',
    ],
  },
  {
    slug: 'hidden-cost-manual-compliance',
    title: 'The Hidden Cost of Manual Compliance Processes',
    summary: 'Manual compliance work looks cheap because its cost is spread across many salaries. Here is how to make it visible and build the business case for change.',
    category: 'Compliance',
    date: '2026-06-22',
    readMinutes: 5,
    body: [
      'Manual compliance processes rarely appear as a line in the budget. Their cost is distributed across analysts re-keying data, managers chasing evidence, and senior staff reviewing work that should have been controlled upstream. Because the cost is diffuse, the process looks cheap.',
      'Count the hidden costs: time spent on rework, time spent reconstructing evidence for reviews, the premium paid for key-person dependency, and the exposure created when a control depends on memory. Each has a rough value that can be estimated from baseline data.',
      'The business case for change is usually stronger on control quality and resilience than on headcount. Frame it that way, and the conversation with risk and audit becomes considerably easier.',
    ],
  },
  {
    slug: 'financial-crime-lessons-from-modern-operations',
    title: 'What Financial Crime Teams Can Learn From Modern Operations',
    summary: 'Operations teams in manufacturing and logistics solved queueing, quality and flow problems decades ago. Several of those methods transfer directly to financial crime.',
    category: 'Financial Crime',
    date: '2026-06-05',
    readMinutes: 6,
    body: [
      'Financial crime teams are operations teams. They receive work in variable volumes, route it by complexity, apply standards, and measure quality. Yet many still run on queues without flow measurement and quality checks that happen after the fact.',
      'Borrow from modern operations practice. Measure work in progress, not just volume. Set service levels by work type. Build quality checks into the flow so that defects are caught where they are created. Use root cause analysis on recurring defects rather than retraining individuals.',
      'Applied with care for the regulatory context, these methods reduce backlogs without lowering standards. The result is faster, more consistent investigations with a clearer record of why each decision was made.',
    ],
  },
  {
    slug: 'decision-traceability-regulators-ask',
    title: 'Decision Traceability: What a Regulator Will Actually Ask For',
    summary: 'Supervisory requests on automated and AI-assisted decisions follow a predictable pattern. Designing for those questions in advance is far cheaper than answering them under pressure.',
    category: 'AI Governance',
    date: '2026-05-20',
    readMinutes: 5,
    body: [
      'When supervisors examine a decision, they ask for the inputs, the rule or model applied, the person who approved it and the reason it was taken. They ask for a sample, not every decision, and they expect to see the same answer for similar cases.',
      'Build the record to answer those questions for any single decision within minutes. That means capturing the input state, the version of the logic, the output, the reviewer and the rationale, linked together rather than stored in separate systems.',
      'Test the design by picking five decisions at random and reconstructing them. If the reconstruction takes more than a few minutes each, the traceability is not yet operational.',
    ],
  },
  {
    slug: 'airtable-is-not-a-database',
    title: 'Airtable Is Not a Database: Designing Controls Into Operational Platforms',
    summary: 'Describing Airtable as a database leads to weak designs in regulated work. Treating it as a workflow and control platform changes what you build and how you govern it.',
    category: 'Airtable',
    date: '2026-04-30',
    readMinutes: 5,
    body: [
      'Airtable stores structured data, but its value in regulated operations comes from what sits around the data: stages, permissions, validation, automations and views. Treating it as a database leads teams to model data well but leave the control logic undefined.',
      'Design controls explicitly. Required fields, validation rules, approval fields and restricted views should map to the control framework. Automations should be versioned and tested like any other operational change.',
      'Be honest about the boundaries. Airtable should not be the system of record for transactions or regulatory data that other systems rely on. Where it is used for the workflow and the operational record around those processes, governance is what makes it defensible.',
    ],
  },
  {
    slug: 'escalation-paths-survive-audit',
    title: 'Escalation Paths That Survive an Audit',
    summary: 'Most escalation routes exist in someone’s head or in an email thread. An escalation design that holds under audit needs owners, timescales, triggers and records.',
    category: 'Operations',
    date: '2026-04-08',
    readMinutes: 4,
    body: [
      'An escalation path is a control. It determines whether an issue reaches someone with authority in time to act. Yet many escalation routes are informal, and their operation cannot be evidenced after the event.',
      'Design each route with a trigger, a named owner at each level, a timescale for response and a record of the outcome. Make the default path automatic: if a response is overdue, the next level is notified without anyone having to decide to do it.',
      'Test escalations as you test controls. Run a sample of past escalations and check whether the route operated as designed. The gaps you find are usually the ones an auditor would have found.',
    ],
  },
  {
    slug: 'risk-tiering-ai-operations',
    title: 'Risk-Tiering AI Use Cases in Operations',
    summary: 'A tiering model turns a long list of AI use cases into proportionate controls. A simple three-tier structure that works in operational environments.',
    category: 'AI Governance',
    date: '2026-03-17',
    readMinutes: 5,
    body: [
      'Without tiering, every AI use case receives the same scrutiny or none. Both outcomes are poor. Tiering allocates oversight in proportion to the consequences of error and the reversibility of the action.',
      'A workable model uses three tiers: assistive use where a person reviews every output, supervised use where confidence thresholds and sampling govern review, and constrained autonomy where automated action operates within tight bounds and real-time monitoring.',
      'Score each use case on consequence, reversibility, data sensitivity and the population affected. Review the tier when the use case changes, not only at approval. A small change in scope can move a use case from assistive to constrained autonomy.',
    ],
  },
  {
    slug: 'vendor-governance-automation-tools',
    title: 'Vendor Governance for Automation Tools',
    summary: 'Automation platforms hold operational data and run critical logic. They need the same due diligence and oversight as any material outsourcing arrangement.',
    category: 'Compliance',
    date: '2026-02-24',
    readMinutes: 4,
    body: [
      'Automation platforms and AI services process regulated data and run logic that affects customers. Yet they are often adopted by business teams through standard subscriptions, outside the vendor management process applied to other suppliers.',
      'Assess them on data location, access controls, sub-processor arrangements, service resilience, exit options and their ability to provide audit logs. Record the assessment and set a review cycle proportionate to the criticality of what the platform does.',
      'Track platform changes as part of ongoing oversight. Vendor models and automation features change frequently, and a change can alter the behaviour of a control you tested last quarter.',
    ],
  },
  {
    slug: 'ai-use-case-register',
    title: 'Maintaining an AI Use-Case Register Regulators Recognise',
    summary: 'The use-case register is the first thing a supervisor will request on AI. A practical structure for a register that stays current and answers the questions that matter.',
    category: 'AI Governance',
    date: '2026-01-29',
    readMinutes: 4,
    body: [
      'A use-case register lists every AI use in the organisation, including tools adopted by individual teams. It records the purpose, the owner, the data used, the risk tier, the approval status and the monitoring arrangements.',
      'Keep it current by making registration part of the approval process and by running periodic discovery for tools that were not registered. A register that is accurate on the day it was produced but unmaintained will mislead anyone who relies on it.',
      'Make it useful to the people who use it. Risk committees need tiering and approval status. Operations teams need the procedures. Auditors need evidence links. One structured register can serve all three if it is designed for them from the start.',
    ],
  },
];

// ---------------------------------------------------------------------------
// About / Founder
// ---------------------------------------------------------------------------
export const FOUNDER = {
  name: 'Asif Saraiya',
  role: 'Founder, Zi Cloud Ltd',
  intro:
    'Asif is a practitioner who has designed and delivered large-scale operational change inside major financial institutions. Zi Cloud exists because the gap he saw repeatedly was not a lack of technology. It was a lack of workflow design that could hold up to regulatory scrutiny.',
  paragraphs: [
    'Asif’s career has spanned banking, financial crime operations, regulatory reporting, data transformation and operational transformation. Across those areas, the same pattern recurred: processes that worked on the day they were designed and then drifted, controls that existed on paper and not in practice, and automation that solved a local problem while creating a new governance one.',
    'That experience shapes how Zi Cloud works. We start with the process and the control framework, because that is where regulated organisations are judged. We design automation and AI into the workflow only when the oversight and evidence requirements are clear. We measure success by control quality and operational performance together, not by the number of tasks automated.',
    'Asif leads Zi Cloud’s strategy and client relationships, and he is personally involved in discovery and design on each engagement. The firm is built to work alongside your transformation, risk and technology teams, and to leave them with the capability to operate what was built.',
  ],
  experience: [
    'Banking and large financial institution operations',
    'Financial crime operations, including AML, KYC and investigations',
    'Regulatory reporting and control assurance',
    'Data transformation and operational redesign programmes',
  ],
};

export const ABOUT_PRINCIPLES = [
  'We design the control before we design the automation.',
  'We say what technology cannot do, and where it should not be used.',
  'We leave capability behind, so you are not dependent on us to run what we built.',
  'We treat evidence as a product of good design, not a clean-up task.',
];

export const ENGAGEMENTS = [
  { icon: 'search', title: 'Discovery', text: 'A fixed-scope diagnostic of one or more processes, producing a validated current state and prioritised opportunities.' },
  { icon: 'layers', title: 'Design', text: 'Target workflows, control mapping, architecture and governance, designed with the people who will operate them.' },
  { icon: 'zap', title: 'Build and Deliver', text: 'Controlled build in staged releases, with testing against the control requirements and handover to your team.' },
  { icon: 'check', title: 'Assure', text: 'Independent review at key gates, so go-live decisions rest on tested evidence rather than confidence.' },
];

// ---------------------------------------------------------------------------
// Legal (draft wording, flagged for legal review in README)
// ---------------------------------------------------------------------------
export const CONTACT_TYPES = [
  { value: 'discovery', label: 'Discovery call or project enquiry' },
  { value: 'partner', label: 'Partnership or referral' },
  { value: 'vendor', label: 'Technology vendor or integration partner' },
  { value: 'other', label: 'Something else' },
];
