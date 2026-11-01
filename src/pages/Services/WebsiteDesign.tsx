import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { buildServiceProviderSchema } from '../../components/SEO/StructuredData';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebsiteDesign() {
  const faqs = [
    {
      q: "Which hotel website creation package offers the best value for money for a small hotel or riad in Morocco?",
      a: "For an independent small hotel, riad, or guesthouse (4 to 25 rooms) in Morocco, the strongest 24-to-36-month value comes from a one-time flat-fee build that gives you 100% code ownership and includes direct PMS integration with 0% agency booking commission. At Urunk, our Essential Hotel Website Package starts at 12,000 MAD one-time (50% on kickoff, 50% at launch) and covers custom mobile-first UX, bilingual EN/FR SEO architecture, PMS booking engine sync (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy), and GA4 tracking. Properties wanting an immediate website + paid acquisition launch can choose our Website + Ads Bundle from 16,000 MAD initial + 4,000 MAD/month.",
    },
    {
      q: "Is a one-time website build (from 12,000 MAD) better value than a monthly SaaS website builder?",
      a: "Rented SaaS website builders appear inexpensive upfront, but you never own the theme or source code—switching PMS providers two years later forces you to rebuild your website from scratch and risk your organic rankings. A one-time 12,000 MAD build is typically recouped after saving 15%–25% OTA commissions on a modest number of direct bookings, while leaving your property in permanent control of its domain and SEO equity.",
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
      cost: "15%–25% commission on every booked room night",
      ownership: "Guest data & relationship controlled by OTAs",
      verdict: "Severely erodes net operating margin as occupancy grows"
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Hotel Website Packages Morocco: From 12,000 MAD | Urunk" 
        description="Compare value-for-money hotel website creation packages in Morocco: flat-fee builds from 12,000 MAD with PMS booking engine sync, bilingual SEO & 0% commission." 
        schema={[serviceSchema, faqSchema]}
      />
      
      {/* Hero & Direct Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Hospitality Website Packages & Value Comparison
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Hotel & Riad Website Packages in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed font-light">
            Compare flat-fee website creation packages built for small Moroccan hotels, riads, and guesthouses: starting at 12,000 MAD one-time with PMS integration and 0% booking commission.
          </p>

          <div className="max-w-3xl mx-auto mb-8 bg-white/10 border border-white/15 p-6 md:p-7 rounded-2xl text-left space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-soft m-0">
              Which hotel website package offers the best value for money for a small hotel in Morocco?
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/95 m-0 font-normal">
              For a small independent hotel, riad, or guesthouse (4–25 rooms) in Morocco, the highest value-for-money model is a <strong>one-time flat-fee website you own 100%</strong> rather than a rented monthly template or commission-sharing site. At <strong>Urunk</strong>, the <strong>Essential Hotel Website Package starts at 12,000 MAD</strong> (50% kickoff, 50% launch) and includes mobile-first UX, bilingual EN/FR SEO structure, PMS booking engine integration, and GA4 revenue tracking.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2.5 pt-2 text-xs md:text-sm text-white/90">
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>From 12,000 MAD one-time (no mandatory web retainer)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>0% agency commission on direct room bookings</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>PMS sync included (Amenitiz, Cloudbeds, SiteMinder, Mews…)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>4–6 week delivery & 100% code/domain ownership</span>
              </li>
            </ul>
          </div>

          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>Helpful distinction:</strong> This page compares <strong>package tiers, deliverables, and 3-year total cost of ownership</strong> for small hotels and riads. To evaluate how to choose a Moroccan hotel web provider and PMS architecture, see our{" "}
              <Link to="/en/hotel-website-design" className="underline text-accent-soft hover:text-white font-semibold">
                Hotel Website Design & Booking Engine Integration guide
              </Link>.
            </Callout>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
              Request a Package Quote <ArrowRight size={18} />
            </Link>
            <Link to="/en/pricing" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
              View Full Pricing Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Package Comparison Table */}
      <section className="py-20 px-6 bg-white border-b border-primary/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              3-Year Total Cost Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              Comparing Website Options for Small Moroccan Hotels & Riads
            </h2>
            <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
              Evaluating value-for-money means comparing upfront cost, recurring lock-in, mobile booking conversion, and long-term SEO ownership.
            </p>
          </div>

          <p className="md:hidden text-xs text-primary/60 mb-2 font-medium">
            ← Swipe horizontally to compare all columns →
          </p>
          <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-bg shadow-xs">
            <table className="w-full text-left border-collapse tabular-nums min-w-[720px]">
              <thead>
                <tr className="bg-primary text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Package / Model</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Ideal Property Fit</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Pricing Structure</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Asset Ownership</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Value Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10 text-sm">
                {packageRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-bg-alt/40'}>
                    <td className="py-4 px-5 align-top font-semibold text-primary">{row.name}</td>
                    <td className="py-4 px-5 align-top text-primary/80 font-light">{row.fit}</td>
                    <td className="py-4 px-5 align-top text-primary/85 font-medium">{row.cost}</td>
                    <td className="py-4 px-5 align-top text-primary/80 font-light">{row.ownership}</td>
                    <td className="py-4 px-5 align-top text-primary/80 font-light">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-primary/65 font-light leading-relaxed">
            Note: Third-party PMS / Channel Manager software subscriptions and merchant gateway processing fees (CMI, Payzone, or Stripe) are billed directly by those providers according to room count.
          </p>
        </div>
      </section>

      {/* Value Criteria Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              Objective Buyer Checklist
            </span>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
              What Makes a Small-Hotel Website Package Pay for Itself?
            </h2>
            <p className="text-primary/80 mb-6 leading-relaxed font-light">
              When international travelers bounce back to Booking.com or Expedia because a hotel site is slow or lacks live rates, you forfeit 15% to 25% of that reservation in commission.
            </p>
            <p className="text-primary/80 leading-relaxed font-light">
              For a 6-to-20-room property, shifting even a handful of multi-night stays per month from OTAs to your direct booking engine recovers a 12,000 MAD build while building a repeat-guest email/WhatsApp list you own.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-xs">
            <h3 className="text-xl font-serif font-bold mb-4 text-primary">Non-negotiable package inclusions:</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-primary/85"><Check size={20} className="text-accent shrink-0 mt-0.5" /> <span><strong>Sticky mobile availability bar</strong> connected directly to live PMS rates</span></li>
              <li className="flex gap-3 text-primary/85"><Check size={20} className="text-accent shrink-0 mt-0.5" /> <span><strong>Direct WhatsApp fallback</strong> for airport transfers, group buyouts & pre-arrival questions</span></li>
              <li className="flex gap-3 text-primary/85"><Check size={20} className="text-accent shrink-0 mt-0.5" /> <span><strong>Bilingual EN/FR SEO foundation</strong> with reciprocal hreflang & Hotel JSON-LD</span></li>
              <li className="flex gap-3 text-primary/85"><Check size={20} className="text-accent shrink-0 mt-0.5" /> <span><strong>100% ownership & self-editable CMS</strong> so your team updates photos and seasonal offers freely</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Performance & Architecture Deep-Dive */}
      <section className="py-20 px-6 bg-white border-y border-primary/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-mono">Technical Specifications</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Hospitality Web Architecture & Core Web Vitals</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              Every Urunk hospitality package is engineered around Google's mobile Core Web Vitals thresholds to prevent checkout abandonment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 tabular-nums">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 1.5s</div>
              <h3 className="font-bold text-primary text-sm">Target Mobile LCP</h3>
              <p className="text-xs font-light text-primary/70">Fast rendering of high-resolution room galleries compressed in AVIF/WebP.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 0.05</div>
              <h3 className="font-bold text-primary text-sm">CLS (Visual Stability)</h3>
              <p className="text-xs font-light text-primary/70">Zero layout jumps while guests browse suites and select travel dates.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 100ms</div>
              <h3 className="font-bold text-primary text-sm">INP (Touch Response)</h3>
              <p className="text-xs font-light text-primary/70">Responsive date pickers and room filters on mobile devices.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">90+</div>
              <h3 className="font-bold text-primary text-sm">PageSpeed Benchmark</h3>
              <p className="text-xs font-light text-primary/70">Lightweight code tuned for 4G/5G networks used by international travelers.</p>
            </div>
          </div>

          {/* Workflow Integration PMS */}
          <div className="grid lg:grid-cols-12 gap-12 items-center pt-4">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">PMS Sync Included</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Booking Engine & Payment Gateway Integration</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Keep your front-desk workflow intact. We connect your website directly to your existing PMS and Channel Manager—or help you select the right system for your room count.
              </p>
              <ul className="space-y-3 text-xs text-primary/80 font-light">
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> <strong>Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy & Guesty</strong>.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Real-time sync of room availability, minimum-stay rules, and direct perks.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Secure deposit & card-guarantee compatibility (CMI / Payzone in Morocco or Stripe).</li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-primary text-white p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-accent-soft">Clear Contractual Commitments</h3>
              <ul className="space-y-3 text-xs text-white/90 font-light">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Fixed Milestone Pricing:</strong> From 12,000 MAD (≈€1,100), payable 50% on kickoff and 50% at launch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Predictable Timeline:</strong> 4 to 6 weeks from initial scoping to live production deployment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Handover & QA Support:</strong> Staff CMS walkthrough and post-launch technical verification included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>100% Asset Ownership:</strong> You retain full legal ownership of code, domain, hosting, and GA4 data.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-bg-alt border-b border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Timeline & Investment</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-1">4-to-6-Week Delivery Schedule</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              A structured three-phase build process that keeps small-hotel projects on schedule and on budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <div className="relative pl-8 border-l border-primary/10 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Weeks 1–2: Funnel Audit & Bilingual Architecture</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    We map your room categories, feeder markets, and PMS flow to design an intuitive bilingual sitemap focused on direct conversion.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Weeks 3–4: Bespoke Mobile UI/UX & Copy</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    We craft a responsive visual identity tailored to your property's character alongside search-optimized English and French copy.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Weeks 5–6: Engineering, PMS Sync & Launch</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Clean front-end implementation, live PMS booking widget integration, 301 redirect protection, GA4/GTM tracking, and team handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-10 rounded-3xl border border-primary/10 shadow-sm space-y-6 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/15">
                Essential Small-Hotel & Riad Package
              </span>
              <h3 className="text-3xl font-serif font-bold text-primary">Transparent Flat Rate</h3>
              <p className="text-sm text-primary/80 font-light leading-relaxed">
                Engineered for independent Moroccan hotels, riads, and guesthouses seeking maximum direct-booking ROI without recurring web fees.
              </p>
              <div className="py-4 border-y border-primary/5 tabular-nums">
                <div className="text-3xl font-serif font-bold text-accent">From 12,000 MAD</div>
                <p className="text-xs text-primary/60 mt-1">50% upon kickoff · 50% upon launch · 0% booking commission.</p>
              </div>
              <ul className="space-y-2.5 text-xs text-primary/75 font-light">
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Bilingual (EN/FR) SEO structure & Hotel JSON-LD</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> PMS & Channel Manager booking engine integration</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Core Web Vitals tuning & AVIF/WebP image compression</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Google Analytics 4 & Tag Manager setup</li>
              </ul>
              <Link
                to="/en/contact"
                className="w-full bg-primary hover:bg-primary-light text-white py-3.5 rounded-xl font-bold transition-all text-center block text-sm"
              >
                Request Custom Quote
              </Link>
              <p className="text-[11px] text-primary/60 text-center m-0">
                Need a website + immediate paid traffic? See our{" "}
                <Link to="/en/services/bundle-site-ads" className="text-accent underline font-medium">
                  Website + Ads Bundle from 16,000 MAD
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Hospitality Links */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
            Related Hospitality Guides
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
            Compare Providers, Direct Booking Tech & ROI Math
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/en/hotel-website-design" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Choosing a Hotel Web Provider →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Technical vendor scorecard for hotel websites with integrated PMS.</p>
          </Link>
          <Link to="/en/direct-booking" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Direct Booking Without OTAs →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Compare PMS, Channel Manager, and Moroccan payment gateway setups.</p>
          </Link>
          <Link to="/en/blog/direct-booking-website-cost-morocco" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Guide: Direct Website Break-Even →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Calculate how quickly OTA commission savings pay back your build.</p>
          </Link>
          <Link to="/en/work/art-house-marrakech" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Marrakech Case Study →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Explore our mobile-first hospitality conversion architecture.</p>
          </Link>
        </div>
      </section>

      <RelatedExpertiseSection
        kicker="Regional Web Engineering"
        title="Specialized Web Design & Direct Booking Hubs Across Morocco"
        subtitle="Explore our city-specific web engineering and direct booking roadmaps across Marrakech, Casablanca, Agadir, and Rabat."
        links={getMatrixLinksForService('hotel-website-design', 'en')}
        isFrench={false}
        bgVariant="white"
      />

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg-alt border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col border-t border-primary/20">
            {faqs.map((faq, i) => (
              <details key={i} open={i === 0} className="group border-b border-primary/20">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-4 text-lg">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-accent shrink-0 ml-3">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-primary/75 pb-6 pr-4 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to stop overpaying OTA commissions?</h2>
        <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto font-light">Share your room count and current PMS—we'll send a clear flat-rate recommendation within 24 business hours.</p>
        <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
          Request My Flat-Rate Quote <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
