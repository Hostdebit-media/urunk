# URUNK — Premium hospitality growth agency blueprint (2 November 2026)

## North-star
Primary audience: owner/operators of independent Moroccan hotels, riads, boutique stays and guesthouses. Secondary audience: tour operators, destination experiences, select restaurants and SMEs. Main conversion: qualified request for a free digital audit. Secondary: WhatsApp conversation. Positioning: premium website engineering + booking-system integration + local search + measurable advertising for direct guest enquiries. Never promise guaranteed direct-booking uplift or claim fabricated client results.

## Verified baseline — Ubersuggest, November 2026
Technical crawl: 175 pages, 99.87/100 health score, 0 errors, 2 low-impact non-friendly URL warnings. Organic estimates: 8 organic keywords, 0 estimated monthly visits, domain authority 6, 106 backlinks from 45 referring domains. Mobile laboratory LCP 3.8s; desktop 0.97s. These numbers are estimates; check Google Search Console and GA4 before interpreting actual traffic.

## Keyword priorities — Morocco, French, Ubersuggest
- création site web maroc — 1000/month, SD22 — /creation-site-web — broader commercial gateway
- agence seo maroc — 880/month, SD22 — /agence-seo-maroc — broad commercial gateway
- agence web maroc — 390/month, SD22 — /agence-web-maroc
- agence seo marrakech — 320/month, SD22 — existing Marrakech/location SEO landing page; location specificity must be meaningful
- agence digitale maroc — 320/month, SD22 — existing home/agency content; avoid a near-duplicate doorway
- agence digitale casablanca — 260/month, SD22 — /zones/casablanca or relevant agency page
- agence marketing digital maroc — 210/month, SD22 — /marketing-digital-hotelier only if intent matches; general agency angle for broader term
- agence seo casablanca — 170/month, SD22 — /agence-seo-casablanca
- agence digitale marrakech — 140/month, SD22 — /zones/marrakech
- agence google ads maroc — 110/month, SD22 — /google-ads-maroc
- création site internet maroc — 70/month, SD22 — supporting phrase on /creation-site-web
- référencement naturel maroc — 50/month, SD22 — supporting phrase on /agence-seo-maroc
- création site web hôtel — 10/month, SD22 — /site-web-hotel (higher-fit buyer intent)
- site web hôtel — 10/month, SD22 — /site-web-hotel
Additional candidate phrases requiring validation: création site web riad Marrakech, site internet maison d'hôtes, système de réservation directe hôtel, intégration Cloudbeds site web, SEO riad Marrakech, optimisation Google Business Profile hôtel, référencement hôtel Maroc, gestion Google Ads riad. Zero reported volume can reflect sparse data; do not claim proven demand.

## Recommended navigation and content architecture
1. Home: precise hospitality promise, proof, three services, method, pricing overview, audit CTA.
2. Solutions (core commercial landing pages):
   - /site-web-hotel — hotel/riad website design, booking integration, before-after UX, scope, timeline.
   - /reservation-directe — direct booking architecture, PMS integrations, real fee model, user journey.
   - /seo-hotel — hospitality SEO + local search: Maps, page optimization, reporting.
   - /google-ads-maroc — accountable Google Ads management, appropriate conversion tracking.
   - /services/gestion-publicites-meta — Meta campaigns, creative, measurable outcomes.
   - /agence-seo-maroc and /agence-web-maroc — broad search entry points, genuinely differentiated copy.
3. Sectors: hotels/riads first, tour operators second, others via footer.
4. Selected Work: verified client case studies separated clearly from illustrative strategy scenarios. Do not label hypothetical examples as delivered results.
5. Insights/Resources: problem-led editorial content linked to services and CTA; publication and update dates; author credentials and source citations.
6. About: actual team, process, ownership model, contact/address verified.
7. Pricing: transparent starting rates and what is included/excluded, no unsupported refund or time guarantees.
8. Contact: short form with property type, website URL, main challenge, preferred contact; privacy note and thank-you confirmation.
Keep FR on / and EN on /en, maintain route-specific reciprocal hreflang.

## Architecture change discipline
Keep existing URLs unless they are truly duplicates. Existing French and English routes have many closely related intents, so audit their Google indexation, content distinctiveness and internal links before merging. Use redirect maps for any consolidation and update sitemap, canonicals, breadcrumb JSON-LD and internal navigation together. Site already prerenders content; do not replace this with purely client-side rendering.

## Content formats to produce, by commercial value
P0: 5 fully detailed service pages with actual process, integrations and deliverables; 2 verified case studies once actual client permission and evidence exist; audit landing page; comparison of direct vs OTA total costs with explicit assumptions.
P1: original technical tutorials (Cloudbeds/Mews website integration, booking UX/mobile speed); grounded hotel SEO guides, local visibility checklists; before/after diagnostics, downloadable website-audit checklist.
P2: location guides for Marrakech/Casablanca/Agadir/Rabat (only with genuinely local material), expert interviews, buyer questions, glossary, short explainer video and original photography.
Do not create templated city × service × sector combinations without unique value: doorway/thin content risk.

## Premium design system direction
Editorial luxury hospitality aesthetic: warm ivory #FAF9F6, deep evergreen #0F2D25, restrained ochre #8A5A12, charcoal text and thin borders. Existing Gloock + Hanken Grotesk typography is a strong base. Large image-led sections with real Moroccan hospitality context, generous white space, concise copy and restrained motion. Distinguish from template SaaS dashboards, icon walls, stock-photo overload and fabricated stat counters. Prioritize mobile contrast, touch targets, reduced-motion preferences, responsive images and accessible forms.

## Page template — priority service
Hero: single clear proposition + proof + CTA.
Buyer pain: credible real-world issues.
Solution: deliverables, features and integrations, with a tangible diagram/screenshot.
How it works: discovery > architecture/design > launch > optimization.
Proof: permissioned actual work, metrics definitions, screenshots and testimonials; otherwise clearly labelled illustrative examples.
Packages: starting price and scope.
FAQ: grounded questions, no stuffing or unsupported rich-results promises.
CTA: free audit and outcome expectations, GDPR/privacy wording appropriate to operations.
Related links: sector, city, service, relevant guide.

## Technical SEO checklist
Verify GSC sitemap ingestion, excluded/indexed page report, canonical uniqueness, 200 status, robots/noindex, rendered HTML and hreflang reciprocity. Review 175 crawled pages and the 2 URL warnings but do not rename URLs just to satisfy a cosmetic warning. Improve mobile LCP from 3.8s by checking critical hero image, redirects, preload, fonts and JS hydration; use lab + field measurement. Avoid forcing descriptions to arbitrary lengths at the expense of natural copy. Structured data: Organization/ProfessionalService, breadcrumbs, Article where appropriate; only true applicable properties. Verify entity details and schema claims before publication. GA4 event measurement: form_submit_success, audit_request, whatsapp_click, phone_click, consultation_booked, qualified_lead; do not send personal form data to analytics.

## Conversion / business measurement
Primary: qualified audit enquiries/month and qualified lead-to-customer conversion. Secondary: service-page organic clicks, non-brand impressions, form completion rates, WhatsApp contacts, cost per qualified lead and signed project value. Separate paid vs organic. Track meaningful baseline before setting targets.

## Verification and publish
Review copy and legal/commercial promises against actual contract. Run npm run lint, npm run build, unit tests, inspect bilingual pages at 375px/768px/desktop and mobile Lighthouse; examine rendered title/canonical/hreflang/schema. Confirm form + Resend delivery, consent and spam protection, and Cloudflare deploy preview. Merge only after checks. Never claim deployment or measured results without evidence.

## Editorial sprint
Week 1: audit indexing + consolidate keyword ownership + fix homepage placeholders + instrument conversion baseline.
Weeks 2-3: improve service landing pages and create proven project portfolio assets.
Weeks 4-5: publish two genuinely expert hotel content guides, improve internal links, get editorial mentions or relevant hospitality partnerships.
Week 6: review GSC query/page data, CRO behaviour and revise based on evidence.
