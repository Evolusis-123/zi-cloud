// Static site generator for Zi Cloud. No dependencies. Run: node build.mjs
import { mkdirSync, writeFileSync, rmSync, cpSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, INSIGHTS } from './src/content.mjs';
import * as P from './src/pages.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const write = (rel, html) => {
  const file = join(out, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, 'utf8');
};

// Static pages
const pages = {
  'index.html': P.home(),
  'services.html': P.services(),
  'financial-crime-operations.html': P.financialCrime(),
  'compliance-operations.html': P.compliance(),
  'ai-governance.html': P.aiGovernance(),
  'airtable-regulated-organisations.html': P.airtable(),
  'industries.html': P.industries(),
  'case-studies.html': P.caseStudies(),
  'about.html': P.about(),
  'insights.html': P.insightsIndex(),
  'contact.html': P.contact(),
  '404.html': P.notFound(),
  'privacy.html': P.legal({
    slug: 'privacy',
    title: 'Privacy Notice',
    description: 'How Zi Cloud Ltd collects, uses and protects personal information submitted through this website and in the course of enquiries.',
    sections: [
      { h: 'Who we are', p: [`${SITE.name} is a specialist consultancy for regulated operations. This notice explains how we handle personal information you provide through this website, including enquiries, discovery call requests and partnership or vendor approaches.`] },
      { h: 'What we collect', p: ['Name, work email address, organisation, role and the content of your message when you submit an enquiry. Technical information such as browser type and approximate location, collected through essential cookies that keep the site running.', 'We ask you not to include personal data about your customers or other individuals in enquiries. Where a process you describe contains personal data, we will discuss the appropriate handling before any further information is shared.'] },
      { h: 'How we use it', p: ['We use enquiry information to respond to you, to arrange discovery calls, and to manage the relationship that follows. We do not sell personal information, and we do not use enquiry content to train third-party AI models.'] },
      { h: 'Legal basis and retention', p: ['Where you contact us, we rely on taking steps at your request before entering a relationship. Enquiry records are kept for no longer than necessary to respond and to manage any resulting engagement, and are then deleted or anonymised.'] },
      { h: 'Your rights', p: [`You may request access to, correction of, or deletion of your personal information, and you may object to processing or withdraw consent for optional cookies at any time. Contact ${SITE.email} to exercise these rights.`] },
      { h: 'Changes to this notice', p: ['We update this notice when our practices change. The date of the latest version is shown on the cookie policy page.'] },
    ],
  }),
  'cookies.html': P.legal({
    slug: 'cookies',
    title: 'Cookie Policy',
    description: 'The cookies this website uses, why we use them, and how you can change your choice.',
    sections: [
      { h: 'Essential cookies', p: ['These are needed for the site to function, for example to remember your cookie choice. They do not track you across other sites and cannot be switched off.'] },
      { h: 'Analytics cookies', p: ['With your consent, we may use analytics cookies to understand which pages are useful and where visitors have difficulty. Analytics are not loaded until you accept them.'] },
      { h: 'Changing your choice', p: ['Use the cookie banner settings or clear this site’s stored data in your browser. Your choice is kept on your device so that the banner does not reappear on every visit.'] },
      { h: 'Last updated', p: ['This policy was last updated on 16 October 2026.'] },
    ],
  }),
};

for (const [file, html] of Object.entries(pages)) write(file, html);

// Insight articles (CMS-ready: driven entirely by INSIGHTS in src/content.mjs)
for (const a of INSIGHTS) write(`insights/${a.slug}.html`, P.insightArticle(a));

// Crawl files
const urls = [
  '/',
  '/services.html',
  '/financial-crime-operations.html',
  '/compliance-operations.html',
  '/ai-governance.html',
  '/airtable-regulated-organisations.html',
  '/industries.html',
  '/case-studies.html',
  '/about.html',
  '/insights.html',
  ...INSIGHTS.map((a) => `/insights/${a.slug}.html`),
  '/contact.html',
  '/privacy.html',
  '/cookies.html',
];
const today = new Date().toISOString().slice(0, 10);
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
);
write(
  'robots.txt',
  `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`
);

// Static assets
const assetsSrc = join(root, 'assets');
if (existsSync(assetsSrc)) cpSync(assetsSrc, join(out, 'assets'), { recursive: true });

const pageCount = Object.keys(pages).length + INSIGHTS.length;
console.log(`Built ${pageCount} HTML pages and ${urls.length} sitemap entries into ${out}`);
