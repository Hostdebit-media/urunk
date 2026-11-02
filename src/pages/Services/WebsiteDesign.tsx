import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { buildServiceProviderSchema } from '../../components/SEO/StructuredData';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import Hairline from '../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebsiteDesign() {
  const faqs = [
    {
      q: "Which hotel website creation package offers the best value for money for a small hotel or riad in Morocco?",
      a: "For an independent small hotel, riad, or guesthouse (4 to 25 rooms) in Morocco, the strongest 24-to-36-month value comes from a one-time flat-fee build that gives you 100% code ownership and includes direct PMS integration with 0% agency booking commission. At Urunk, our Essential Hotel Website Package starts at 12,000 MAD one-time (50% on kickoff, 50% at launch) and covers custom mobile-first UX, bilingual EN/FR SEO architecture, PMS booking engine sync (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy), and GA4 tracking. Properties wanting an immediate website + paid acquisition launch can choose our Website + Ads Bundle from 16,000 MAD initial + 4,000 MAD/month.",
    },
    {
      q: "Is a one-time website build (from 12,000 MAD) better value than a monthly SaaS website builder?",
      a: "Rented SaaS website builders appear inexpensive upfront, but you never own the theme or source code—switching PMS providers two years later forces you to rebuild your website from scratch and risk your organic rankings. A one-time 12,000 MAD build is typically recouped after saving [À CONFIRMER] OTA commissions on a modest number of direct bookings, while leaving your property in permanent control of its domain and SEO equity.",
    },
    {
      q: "How long does it take to build and launch a hotel website?",
      a: "A complete custom website for an independent hotel or riad takes 4 to 6 weeks: weeks 1–2 for discovery and bilingual SEO architecture, weeks 3–4 for mobile-first UI/UX design and copy structuring, and weeks 5–6 for engineering, PMS/payment gateway integration, GA4 setup, and launch.",
    },
    {
      q: "Which booking engines (PMS) and Moroccan payment gateways are supported?",
      a: "Technical integration with major PMS and Channel Manager platforms—including Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy, and Guesty—is included starting from our 12,000 MAD package. Third-party PMS subscriptions and payment gateway fees (CMI or Payzone in MAD, or Stripe for eligible entities) are billed directly by those providers with zero markup from Urunk.",
    },
    {
      q: "Who owns the website, domain, and source code after completion?",
      a: "You retain 100% exclusive ownership of your domain name, hosting account, source code, copy, and visual assets upon project completion, with zero mandatory monthly licensing fees.",
    },
    {
      q: "Does the package include bilingual English and French SEO?",
      a: "Yes. Every hospitality build includes clean English/French URL architecture (with additional languages available on custom quote), reciprocal hreflang tags, Hotel Schema.org JSON-LD markup, and AVIF/WebP media optimization for fast mobile loading across international 4G/5G networks.",
    },
    {
      q: "How many direct room nights pay back a 12,000 MAD website build?",
      a: "As an illustrative example (not a guaranteed outcome, since results depend on ADR and occupancy), if your property averages 1,500 MAD per night and saves a 20% OTA commission (300 MAD per room night), shifting 40 room nights onto your official website recovers the 12,000 MAD build cost.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://urunk.com/en/services/website-design#service",
    "name": "Hotel Website Creation Packages in Morocco",
    "serviceType": "Website Design & PMS Integration for Hotels and Riads",
    "description": "Transparent hotel and riad website packages in Morocco starting at 12,000 MAD one-time: mobile-first UX, PMS booking engine sync, bilingual SEO, and 0% agency commission.",
    "provider": buildServiceProviderSchema(),
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/en/services/website-design",
    "offers": {
      "@type": "Offer",
      "price": "12000",
      "priceCurrency": "MAD",
      "url": "https://urunk.com/en/services/website-design"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const packageRows = [
    {
      name: "Essential Hotel & Riad Website (Urunk)",
      fit: "Small independent hotels, riads & guesthouses (4–25 rooms)",
      cost: "From 12,000 MAD (one-time build, 0% commission)",
      ownership: "100% client-owned (code, domain, SEO)",
      verdict: "Strongest 24–36 month value-for-money"
    },
    {
      name: "Website + Paid Ads Launch Bundle (Urunk)",
      fit: "Properties wanting a new direct site + immediate Google/Meta demand",
      cost: "From 16,000 MAD initial + 4,000 MAD/mo (excl. ad spend)",
      ownership: "100% ownership of website & ad accounts",
      verdict: "Best for new openings or rapid occupancy recovery"
    },
    {
      name: "Bespoke / Multi-Property Architecture",
      fit: "30+ room boutique hotels, resorts, groups & custom portals",
      cost: "From 25,000 MAD (fixed quote based on scope)",
      ownership: "100% client-owned (custom WordPress or React)",
      verdict: "Tailored for dining/spa outlets & custom multi-language scope"
    },
    {
      name: "Rented SaaS Website Builders",
      fit: "Micro-properties prioritizing zero upfront capex",
      cost: "Ongoing monthly subscription for life of site",
      ownership: "0% code ownership (site lost if you switch PMS)",
      verdict: "Higher 3-year total cost & vendor lock-in"
    },
    {
      name: "OTA-Only Reliance (Status Quo)",
      fit: "Properties without an instant-booking official website",
      cost: "[À CONFIRMER] commission on every booked room night",
      ownership: "Guest data & relationship controlled by OTAs",
      verdict: "Severely erodes net operating margin as occupancy grows"
    }
  ];

  const relatedGuides = [
    {
      to: '/en/hotel-website-design',
      title: 'Choosing a Hotel Web Provider',
      desc: 'Technical vendor scorecard for hotel websites with integrated PMS.',
    },
    {
      to: '/en/direct-booking',
      title: 'Direct Booking Without OTAs',
      desc: 'Compare PMS, Channel Manager, and Moroccan payment gateway setups.',
    },
    {
      to: '/en/blog/direct-booking-website-cost-morocco',
      title: 'Guide: Direct Website Break-Even',
      desc: 'Calculate how quickly OTA commission savings pay back your build.',
    },
    {
      to: '/en/work/art-house-marrakech',
      title: 'Marrakech Case Study',
      desc: 'Explore our mobile-first hospitality conversion architecture.',
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Hotel Website Packages Morocco: From 12,000 MAD | Urunk"
        description="Compare value-for-money hotel website creation packages in Morocco: flat-fee builds from 12,000 MAD with PMS booking engine sync, bilingual SEO & 0% commission."
        schema={[serviceSchema, faqSchema]}
      />

      {/* Editorial Hero & Direct Answer Block */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">
            Hospitality website packages and value comparison
          </p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Hotel &amp; Riad Website Packages in Morocco
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Compare flat-fee website creation packages built for small Moroccan hotels, riads, and guesthouses: starting at 12,000 MAD one-time with PMS integration and 0% booking commission.
          </p>

          <div className="max-w-3xl mb-8 border border-white/20 p-6 md:p-8 rounded-sm space-y-4">
            <p className="text-sm font-semibold text-bg-light m-0">
              Which hotel website package offers the best value for money for a small hotel in Morocco?
            </p>
            <p className="text-base leading-relaxed text-bg-light/90 m-0">
              For a small independent hotel, riad, or guesthouse (4–25 rooms) in Morocco, the highest value-for-money model is a <strong className="text-bg-light font-semibold">one-time flat-fee website you own 100%</strong> rather than a rented monthly template or commission-sharing site. At <strong className="text-bg-light font-semibold">Urunk</strong>, the <strong className="text-bg-light font-semibold">Essential Hotel Website Package starts at 12,000 MAD</strong> (50% kickoff, 50% launch) and includes mobile-first UX, bilingual EN/FR SEO structure, PMS booking engine integration, and GA4 revenue tracking.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-white/15 text-sm text-bg-light/85">
              <li>From 12,000 MAD one-time (no mandatory web retainer)</li>
              <li>0% agency commission on direct room bookings</li>
              <li>PMS sync included (Amenitiz, Cloudbeds, SiteMinder, Mews…)</li>
              <li>4–6 week delivery &amp; 100% code/domain ownership</li>
            </ul>
          </div>

          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">Helpful distinction:</strong> This page compares <strong className="text-bg-light font-semibold">package tiers, deliverables, and 3-year total cost of ownership</strong> for small hotels and riads. To evaluate how to choose a Moroccan hotel web provider and PMS architecture, see our{' '}
              <Link to="/en/hotel-website-design">
                Hotel Website Design &amp; Booking Engine Integration guide
              </Link>.
            </Callout>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button href="/en/contact" variant="primary">
              Request a package quote
            </Button>
            <Button href="/en/pricing" variant="secondary">
              View full pricing schedule
            </Button>
          </div>
        </div>
      </Section>

      {/* Package Comparison Table */}
      <Section tone="light">
        <div className="max-w-3xl mb-10">
          <p className="text-sm text-accent font-medium mb-2">
            3-year total cost comparison
          </p>
          <h2 className="font-serif text-primary mb-3 text-balance">
            Comparing Website Options for Small Moroccan Hotels &amp; Riads
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            Evaluating value-for-money means comparing upfront cost, recurring lock-in, mobile booking conversion, and long-term SEO ownership.
          </p>
        </div>

        <p className="md:hidden text-xs text-primary/70 mb-2">
          Swipe horizontally to compare all columns
        </p>
        <div className="overflow-x-auto border border-border-subtle rounded-sm bg-bg-card">
          <table className="w-full text-left border-collapse tabular-nums min-w-[720px]">
            <thead>
              <tr className="bg-primary text-bg-light text-sm">
                <th className="py-4 px-5 font-medium border-b border-white/15">Package / Model</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Ideal Property Fit</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Pricing Structure</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Asset Ownership</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Value Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-sm">
              {packageRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-bg-card' : 'bg-bg-light'}>
                  <td className="py-4 px-5 align-top font-semibold text-primary">{row.name}</td>
                  <td className="py-4 px-5 align-top text-primary/85">{row.fit}</td>
                  <td className="py-4 px-5 align-top text-primary font-medium">{row.cost}</td>
                  <td className="py-4 px-5 align-top text-primary/85">{row.ownership}</td>
                  <td className="py-4 px-5 align-top text-primary/85">{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-primary/70 leading-relaxed max-w-[68ch]">
          Note: Third-party PMS / Channel Manager software subscriptions and merchant gateway processing fees (CMI, Payzone, or Stripe) are billed directly by those providers according to room count.
        </p>
      </Section>

      {/* Value Criteria Section */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-2">
              Objective buyer checklist
            </p>
            <h2 className="font-serif text-primary mb-6 text-balance">
              What Makes a Small-Hotel Website Package Pay for Itself?
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                When international travelers bounce back to Booking.com or Expedia because a hotel site is slow or lacks live rates, you forfeit [À CONFIRMER] of that reservation in commission.
              </p>
              <p>
                For a 6-to-20-room property, shifting even a handful of multi-night stays per month from OTAs to your direct booking engine recovers a 12,000 MAD build while building a repeat-guest email/WhatsApp list you own.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Non-negotiable package inclusions:
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 leading-relaxed m-0">
                <strong className="text-primary font-semibold">Sticky mobile availability bar</strong> connected directly to live PMS rates
              </p>
              <p className="py-3.5 leading-relaxed m-0">
                <strong className="text-primary font-semibold">Direct WhatsApp fallback</strong> for airport transfers, group buyouts &amp; pre-arrival questions
              </p>
              <p className="py-3.5 leading-relaxed m-0">
                <strong className="text-primary font-semibold">Bilingual EN/FR SEO foundation</strong> with reciprocal hreflang &amp; Hotel JSON-LD
              </p>
              <p className="py-3.5 pb-0 leading-relaxed m-0">
                <strong className="text-primary font-semibold">100% ownership &amp; self-editable CMS</strong> so your team updates photos and seasonal offers freely
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Performance & Architecture Deep-Dive */}
      <Section tone="light">
        <div className="space-y-16">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium mb-2">Technical specifications</p>
            <h2 className="font-serif text-primary mb-3 text-balance">
              Hospitality Web Architecture &amp; Core Web Vitals
            </h2>
            <p className="text-primary/80 leading-relaxed max-w-[65ch]">
              Every Urunk hospitality package is engineered around Google's mobile Core Web Vitals thresholds to prevent checkout abandonment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-y border-border-subtle py-8 tabular-nums">
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">Target Mobile LCP</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Fast rendering of high-resolution room galleries compressed in AVIF/WebP.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">CLS (Visual Stability)</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Zero layout jumps while guests browse suites and select travel dates.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">INP (Touch Response)</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Responsive date pickers and room filters on mobile devices.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">PageSpeed Benchmark</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Lightweight code tuned for 4G/5G networks used by international travelers.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm text-accent font-medium m-0">PMS sync included</p>
              <h3 className="font-serif text-primary m-0">
                Booking Engine &amp; Payment Gateway Integration
              </h3>
              <p className="text-primary/85 leading-relaxed max-w-[60ch]">
                Keep your front-desk workflow intact. We connect your website directly to your existing PMS and Channel Manager—or help you select the right system for your room count.
              </p>
              <ul className="space-y-3 text-sm text-primary/85 pt-2 border-t border-border-subtle">
                <li><strong>Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy &amp; Guesty</strong>.</li>
                <li>Real-time sync of room availability, minimum-stay rules, and direct perks.</li>
                <li>Secure deposit &amp; card-guarantee compatibility (CMI / Payzone in Morocco or Stripe).</li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-primary text-bg-light p-8 md:p-10 rounded-sm space-y-5">
              <h3 className="font-serif text-bg-light m-0">Clear Contractual Commitments</h3>
              <div className="divide-y divide-white/15 text-sm text-bg-light/90">
                <p className="py-3 pt-0 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">Fixed Milestone Pricing:</strong> From 12,000 MAD (≈€1,100), payable 50% on kickoff and 50% at launch.
                </p>
                <p className="py-3 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">Predictable Timeline:</strong> 4 to 6 weeks from initial scoping to live production deployment.
                </p>
                <p className="py-3 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">Handover &amp; QA Support:</strong> Staff CMS walkthrough and post-launch technical verification included.
                </p>
                <p className="py-3 pb-0 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">100% Asset Ownership:</strong> You retain full legal ownership of code, domain, hosting, and GA4 data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process & Pricing */}
      <Section tone="alt">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">Timeline and investment</p>
          <h2 className="font-serif text-primary mb-3 text-balance">
            4-to-6-Week Delivery Schedule
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            A structured three-phase build process that keeps small-hotel projects on schedule and on budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Hairline />
            <div className="py-7 flex gap-6 items-baseline">
              <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">01</span>
              <div>
                <h3 className="font-serif text-primary mb-2">Weeks 1–2: Funnel Audit &amp; Bilingual Architecture</h3>
                <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                  We map your room categories, feeder markets, and PMS flow to design an intuitive bilingual sitemap focused on direct conversion.
                </p>
              </div>
            </div>
            <Hairline />
            <div className="py-7 flex gap-6 items-baseline">
              <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">02</span>
              <div>
                <h3 className="font-serif text-primary mb-2">Weeks 3–4: Bespoke Mobile UI/UX &amp; Copy</h3>
                <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                  We craft a responsive visual identity tailored to your property's character alongside search-optimized English and French copy.
                </p>
              </div>
            </div>
            <Hairline />
            <div className="py-7 flex gap-6 items-baseline">
              <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">03</span>
              <div>
                <h3 className="font-serif text-primary mb-2">Weeks 5–6: Engineering, PMS Sync &amp; Launch</h3>
                <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                  Clean front-end implementation, live PMS booking widget integration, 301 redirect protection, GA4/GTM tracking, and team handover.
                </p>
              </div>
            </div>
            <Hairline />
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-5 lg:sticky lg:top-28">
            <p className="text-sm text-accent font-medium m-0">
              Essential small-hotel and riad package
            </p>
            <h3 className="font-serif text-primary m-0">Transparent Flat Rate</h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0">
              Engineered for independent Moroccan hotels, riads, and guesthouses seeking maximum direct-booking ROI without recurring web fees.
            </p>
            <div className="py-4 border-y border-border-subtle tabular-nums">
              <div className="font-serif text-3xl text-accent">From 12,000 MAD</div>
              <p className="text-xs text-primary/70 mt-1 m-0">
                50% upon kickoff, 50% upon launch, 0% booking commission.
              </p>
            </div>
            <ul className="space-y-2.5 text-sm text-primary/85">
              <li>Bilingual (EN/FR) SEO structure &amp; Hotel JSON-LD</li>
              <li>PMS &amp; Channel Manager booking engine integration</li>
              <li>Core Web Vitals tuning &amp; AVIF/WebP image compression</li>
              <li>Google Analytics 4 &amp; Tag Manager setup</li>
            </ul>
            <Button href="/en/contact" variant="dark" className="w-full">
              Request custom quote
            </Button>
            <p className="text-xs text-primary/70 m-0">
              Need a website + immediate paid traffic? See our{' '}
              <Link to="/en/services/bundle-site-ads">
                Website + Ads Bundle from 16,000 MAD
              </Link>.
            </p>
          </div>
        </div>
      </Section>

      {/* Related Hospitality Links */}
      <Section tone="light">
        <div className="max-w-3xl mb-10">
          <p className="text-sm text-accent font-medium mb-2">
            Related hospitality guides
          </p>
          <h2 className="font-serif text-primary text-balance">
            Compare Providers, Direct Booking Tech &amp; ROI Math
          </h2>
        </div>

        <div>
          <Hairline />
          {relatedGuides.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="py-6 grid md:grid-cols-12 gap-3 md:gap-8 items-baseline">
                <div className="md:col-span-5">
                  <h3 className="font-serif text-xl text-primary m-0">
                    <Link to={item.to}>{item.title}</Link>
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm text-primary/80 leading-relaxed m-0">{item.desc}</p>
                </div>
              </div>
              <Hairline />
            </React.Fragment>
          ))}
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker="Regional web engineering"
        title="Specialized Web Design & Direct Booking Hubs Across Morocco"
        subtitle="Explore our city-specific web engineering and direct booking roadmaps across Marrakech, Casablanca, Agadir, and Rabat."
        links={getMatrixLinksForService('hotel-website-design', 'en')}
        isFrench={false}
        bgVariant="alt"
      />

      {/* FAQ */}
      <Section tone="light">
        <div className="max-w-3xl">
          <p className="text-sm text-accent font-medium mb-2">FAQ</p>
          <h2 className="font-serif text-primary mb-10">Frequently Asked Questions</h2>
          <div>
            <Hairline />
            {faqs.map((faq, i) => (
              <React.Fragment key={i}>
                <details open={i === 0} className="group py-5">
                  <summary className="flex justify-between items-center gap-6 cursor-pointer list-none font-serif text-xl text-primary">
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="pt-4 text-primary/85 leading-relaxed max-w-[65ch]">
                    {faq.a}
                  </div>
                </details>
                <Hairline />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            Ready to stop overpaying OTA commissions?
          </h2>
          <p className="text-lg text-bg-light/85 mb-8 max-w-[60ch] leading-relaxed">
            Share your room count and current PMS—we'll send a clear flat-rate recommendation within [À CONFIRMER].
          </p>
          <Button href="/en/contact" variant="primary">
            Request my flat-rate quote
          </Button>
        </div>
      </Section>
    </div>
  );
}
