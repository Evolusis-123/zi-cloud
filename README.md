# Zi Cloud website

Static, dependency-free site for Zi Cloud Ltd. Eleven core pages, twelve insight articles, two legal notices and a 404 page, all generated from one content file.

## Run and build

```
node build.mjs          # writes dist/
python3 make_og.py      # optional: regenerates assets/og-image.png (needs Pillow)
```

Deploy the contents of `dist/` to any static host (Cloudflare Pages, Netlify, Vercel static, S3 with CloudFront, or your existing web server). No build server or database is needed.

## Where to edit

| What | File |
| --- | --- |
| Company details, contact email, Calendly URL, form endpoint, founder name | `src/content.mjs` (`SITE`) |
| Navigation | `src/content.mjs` (`NAV`) |
| Services, financial crime, compliance, AI governance, Airtable, industries, case studies | `src/content.mjs` |
| Insight articles (CMS-ready) | `src/content.mjs` (`INSIGHTS`). Adding an entry creates `/insights/<slug>.html`, adds it to the index and sitemap. |
| Page layouts | `src/pages.mjs` |
| Header, footer, cookie banner, SEO head, icons, diagrams | `src/components.mjs` |
| Design tokens and responsive rules | `assets/styles.css` (`:root` variables) |
| Behaviour: menu, dropdowns, reveal motion, cookie choice, form, Calendly | `assets/main.js` |

Copy is written in UK English and contains no placeholder text. The only deliberately configurable items are the Calendly URL and the form endpoint, which are empty until you set them.

## Enabling the contact form

The form works without a backend. When `formEndpoint` is empty, submitting opens a prefilled email to `SITE.email`. To send submissions directly, set `formEndpoint` to a URL that accepts a JSON POST (for example a form service or a serverless function that forwards to your CRM). Validation and error messages run in the browser before any request is sent.

## Enabling Calendly

Set `calendlyUrl` in `src/content.mjs` to your scheduling link, for example `https://calendly.com/<your-name>/discovery`. The widget is injected on the Contact page only when this value is set.

## Cookies and analytics

The consent banner stores the visitor's choice in `localStorage` and fires a `zc:consent` event with `{ analytics: true | false }`. No third-party scripts load by default. If you add analytics, load it only inside a listener for that event when `analytics` is true.

## SEO, schema and social

Every page has a unique title, meta description, canonical URL, Open Graph and Twitter card tags, and a `robots` directive. JSON-LD covers the organisation (ProfessionalService with knowsAbout terms), WebSite, BreadcrumbList, Service (each service section), Article (insights), Blog (insights index), FAQPage (financial crime, compliance, AI governance and Airtable), AboutPage and ContactPage. `sitemap.xml` and `robots.txt` are generated at build time.

Before launch, set `SITE.url` to the live domain and rebuild, since canonicals, schema and the sitemap all use it.

## Accessibility

Semantic landmarks, a skip link, one `h1` per page, labelled form fields with `aria-invalid` and live error regions, keyboard-operable dropdowns and mobile menu with Escape handling, visible focus rings, `prefers-reduced-motion` respected for motion, and decorative SVGs marked `aria-hidden`. Run a full audit with axe or Lighthouse on the deployed URLs before go-live, because automated tools cannot judge every case.

## Performance

No framework, one stylesheet and one deferred script. Images are not used on content pages. The only external request is Google Fonts for Inter. For UK GDPR reasons you may prefer to self-host Inter; the font loads from the Google Fonts CDN at present, which passes visitor IP addresses to Google.

## Before launch: open items

1. Confirm `hello@zicloud.uk` is the correct public address, or change `SITE.email`.
2. Confirm the founder biography and experience list with Asif Saraiya. Write it only in terms he is comfortable being published under, and confirm his public-facing profile is appropriate given his other commitments.
3. Have counsel review the privacy notice and cookie policy. The privacy notice states that enquiry content is not used to train third-party AI models; make sure your vendors are configured to match that.
4. Confirm the case studies remain clearly labelled as illustrative composites, and do not replace them with real client material without written permission.
5. Set `calendlyUrl` and `formEndpoint`, then test a real submission end to end.
6. Replace `assets/og-image.png` with a brand-approved image if you have one.
7. Add the company registration details your legal team requires in the footer.
