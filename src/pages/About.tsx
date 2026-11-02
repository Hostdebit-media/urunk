import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import Hairline from '../components/ui/Hairline';
import Button from '../components/ui/Button';

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Urunk | Hospitality Digital Growth Agency in Morocco',
    url: 'https://urunk.com/en/about',
    description: 'Meet Urunk, the Casablanca-based digital growth agency built for Moroccan hotels, riads, and guesthouses: direct-booking websites, local SEO, and paid media.'
  };

  return (
    <div className="w-full bg-bg-light text-primary" id="about-page">
      <SEO
        title="About Urunk | Hospitality Digital Agency Morocco"
        description="Meet Urunk, the Casablanca-based digital agency built for Moroccan hotels and riads: fast direct-booking websites, local SEO, GBP, and paid media."
        schema={aboutSchema}
      />

      {/* Hero Section */}
      <Section tone="dark" id="about-hero" className="pt-28 md:pt-36">
        <div className="max-w-[68ch]">
          <p className="text-sm font-medium text-bg-light/75 mb-5" id="about-hero-tag">
            About Urunk Agency
          </p>
          <h1 className="mb-8 text-bg-light" id="about-hero-title">
            Engineered for <span className="italic">Hospitality Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 leading-relaxed" id="about-hero-desc">
            We are not a traditional, slow-moving advertising agency. We are a specialized team of developers, SEO engineers, and conversion strategists dedicated to helping Moroccan hotels, luxury riads, and boutique travel brands break free from OTA dependency and capture direct booking revenue.
          </p>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section tone="light" id="about-philosophy">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7 max-w-[68ch]">
            <h2 className="mb-8 text-primary" id="about-phil-title">
              Why We Focus Exclusively on Hospitality & High-End Tourism
            </h2>
            <div className="space-y-6 text-primary/85 leading-relaxed" id="about-phil-content">
              <p>
                Morocco's tourism sector is experiencing a historic renaissance. From the vibrant alleyways of the Marrakech Medina to the majestic dunes of Merzouga and the elegant coastal retreats of Taghazout, travelers from around the globe are seeking authentic Moroccan experiences. Yet, many independent riads, boutique hotels, and luxury desert camps continue to lose [À CONFIRMER] of their gross revenue to online travel agencies (OTAs) simply because their own digital architecture is inadequate.
              </p>
              <p>
                We founded Urunk because we observed a profound disconnect in the Moroccan digital landscape. Property owners were routinely sold generic, slow, or outdated WordPress templates by generalist marketing agencies. These templates had zero understanding of hotel property management systems (PMS), direct booking engine integrations, multi-currency payment gateways, or competitive travel SEO. The result was high web traffic but incredibly low conversion rates, forcing properties to remain entirely dependent on OTAs for occupancy.
              </p>
              <p>
                Our mission is unambiguous: To provide luxury riads, boutique hotels, and premium tour operators with the sovereign digital infrastructure required to capture high-intent international travelers, streamline direct reservations, and dramatically expand their net operating margins. We believe that your website should not be a static brochure; it must be the single most profitable sales channel in your entire business.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/en/services/website-design"
                className="font-medium text-accent"
                id="about-phil-cta"
              >
                Website Design & Booking Engines
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 divide-y divide-border-subtle border-y border-border-subtle" id="about-pillars-cards">
            <div className="py-7" id="phil-card-1">
              <h3 className="text-primary mb-2">Data-Driven Precision</h3>
              <p className="text-primary/80 text-base leading-relaxed">
                We never guess. Every visual layout, keyword target, and programmatic ad bid is informed by rigorous user telemetry, conversion path analysis, and search intent modeling tailored specifically to the luxury travel sector.
              </p>
            </div>
            <div className="py-7" id="phil-card-2">
              <h3 className="text-primary mb-2">Bilingual & Cross-Cultural Mastery</h3>
              <p className="text-primary/80 text-base leading-relaxed">
                Headquartered in Morocco with deep international fluency, we bridge the gap between local Moroccan hospitality charm and the exacting digital and UX expectations of European, British, North American, and Gulf travelers.
              </p>
            </div>
            <div className="py-7" id="phil-card-3">
              <h3 className="text-primary mb-2">Sovereign Performance First</h3>
              <p className="text-primary/80 text-base leading-relaxed">
                We build fast, mobile-first web assets engineered to pass Google's Core Web Vitals benchmarks so prospective guests can compare rooms, verify availability, and book without friction.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The OTA Trap Section */}
      <Section tone="dark" id="about-ota-trap">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-medium text-bg-light/75 mb-3">
              The Real Economics of Booking
            </p>
            <h2 className="mb-6 text-bg-light">The True Cost of the OTA Trap</h2>
            <p className="text-bg-light/85 leading-relaxed">
              Many hoteliers view OTA commissions as a simple, unavoidable cost of marketing. Let's look at the actual numbers.
            </p>
          </div>
          <div className="md:col-span-7 max-w-[68ch] space-y-6 text-bg-light/90 leading-relaxed">
            <p>
              Suppose a boutique property with 10 rooms generates <strong>400,000 MAD</strong> in monthly booking revenue. If 85% of those bookings come through OTAs like Booking.com, Expedia, or TripAdvisor, the property pays roughly 18% to 22% in commissions.
            </p>
            <div className="border-y border-bg-light/20 py-6 my-4">
              <p className="font-semibold text-lg text-bg-light mb-2">The Annual Commission Drain</p>
              <p className="text-bg-light/85">
                That equals over <strong>75,000 MAD</strong> paid out in commissions every single month—or a staggering <strong>900,000 MAD</strong> lost every year. This is capital that could have funded physical property expansions, lavish guest amenities, staff salary increases, or direct profit.
              </p>
            </div>
            <p>
              Urunk exists to rewrite this balance sheet. By establishing a professional, high-converting digital footprint, we systematically divert travelers away from third-party channels directly onto your website. A guest booking directly with you costs a fraction of an OTA fee, instantly boosting your net profit margins.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Core Pillars */}
      <Section tone="alt" id="about-pillars">
        <div className="max-w-[68ch] mb-14">
          <p className="text-sm font-medium text-accent mb-3">The Urunk Standard</p>
          <h2 className="text-primary mb-4">Our Four Pillars of Hospitality Digital Engineering</h2>
          <p className="text-primary/80">
            How we transform underperforming hotel websites into automated direct revenue generation engines.
          </p>
        </div>

        <Hairline className="mb-10" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="pb-8 border-b border-border-subtle" id="pillar-card-1">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">01</p>
            <h3 className="text-primary mb-3">Architectural Speed</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Slow sites kill bookings. We completely eliminate sluggish pages by optimizing server stacks, compressing media assets, and building with lightweight code. Our websites load in [À CONFIRMER], significantly decreasing booking abandonment and boosting conversion rates on mobile devices.
            </p>
          </div>
          <div className="pb-8 border-b border-border-subtle" id="pillar-card-2">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">02</p>
            <h3 className="text-primary mb-3">Organic Search Visibility</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Through comprehensive local keyword strategies and technical SEO audits, we position your hotel or riad at the top of organic search results for travelers looking for high-intent queries like "luxury riad in marrakech" or "best desert camp in merzouga." We capture organic traffic without paid ads.
            </p>
          </div>
          <div className="pb-8 border-b border-border-subtle md:border-b-0 md:pb-0" id="pillar-card-3">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">03</p>
            <h3 className="text-primary mb-3">Seamless PMS Sync</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              An isolated website is useless. We seamlessly integrate frictionless booking engines directly with industry-leading Property Management Systems (PMS) like Cloudbeds, Mews, Little Hotelier, or custom APIs. Your live room availability and real-time rates remain perfectly synchronized across all systems.
            </p>
          </div>
          <div id="pillar-card-4">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">04</p>
            <h3 className="text-primary mb-3">High-ROAS Paid Media</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              We design and manage highly focused Google Ads, Meta Ads (Instagram and Facebook), and TripAdvisor campaigns. By targeting active travelers at the precise moment of booking intent or re-engaging past website visitors, we maintain exceptional return on ad spend (ROAS).
            </p>
          </div>
        </div>
      </Section>

      {/* Multi-Language & International Strategy Section */}
      <Section tone="light" id="about-multilang">
        <div className="max-w-[68ch] mb-14">
          <p className="text-sm font-medium text-accent mb-3">Global Reach</p>
          <h2 className="text-primary mb-4">Bespoke Multi-Language Architecture</h2>
          <p className="text-primary/80">
            We engineer authentic multi-language experiences that speak directly to international visitors, build trust, and drive cross-border conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-t border-border-subtle pt-10">
          <div>
            <h3 className="text-primary mb-3">Cultural Copywriting</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Automated translation widgets (like Google Translate) look unprofessional and dilute trust. We write human-translated, elegant copy that respects regional nuances and communicates the luxury and heritage of your Moroccan property perfectly.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">Localized Multilingual SEO</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              We configure perfect hreflang tags, localized meta descriptions, and regional keyword structures. Whether a guest is searching in French from Paris, English from London, or Arabic from Dubai, they will find the exact version of your site tailored to them.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">Dynamic Multi-Currency Display</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              We eliminate booking friction by allowing prospective guests to view pricing in their local currency (MAD, EUR, USD, GBP) and securely pay using Moroccan credit cards, international visas, Mastercards, or modern Apple Pay and PayPal systems.
            </p>
          </div>
        </div>
      </Section>

      <Hairline />

      {/* Strategic Framework Sections: Methodology & The Urunk Difference */}
      <Section tone="light" id="about-methodology-framework">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7 space-y-6 max-w-[68ch]">
            <p className="text-sm font-medium text-accent">Engineering Blueprint</p>
            <h2 className="text-primary">
              Our Methodology: Blending High-End Design & Technical SEO
            </h2>
            <p className="text-primary/85 leading-relaxed">
              Most agencies force hoteliers to choose between a visually stunning site that fails to generate search traffic, or an SEO-optimized site that looks generic and outdated. At Urunk, we bridge this divide through our 4 to 6 week execution methodology.
            </p>
            <div className="divide-y divide-border-subtle border-y border-border-subtle text-base text-primary/85">
              <div className="py-4">
                <strong>Phase 1: Conversion Architecture (Weeks 1-2):</strong> Custom WordPress engineering starting at 12,000 MAD (≈€1,100) with custom booking engine integration, multi-currency support, and Core Web Vitals optimization ([À CONFIRMER]).
              </div>
              <div className="py-4">
                <strong>Phase 2: Intent-Driven Local SEO (Weeks 3-4):</strong> Structured schema markup, localized multilingual keyword modeling, and Google Business Profile optimization to capture high-intent travelers.
              </div>
              <div className="py-4">
                <strong>Phase 3: Targeted Paid Acquisition (Weeks 5-6):</strong> High-ROAS Google Ads & Meta Ads management at 4,000 MAD/mo (≈€370) or TripAdvisor Ads at 3,000 MAD/mo to capture immediate direct bookings.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-6">
            <h3 className="text-primary">The Urunk Difference</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Generalist digital agencies treat a boutique riad the same way they treat a local retail store. Hospitality requires deep domain knowledge of Property Management Systems (Cloudbeds, Mews), room availability inventory, dynamic seasonal pricing, and international guest booking behavior.
            </p>
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-border-subtle">
              <div>
                <span className="text-2xl font-serif text-accent block tabular-nums mb-1">[À CONFIRMER]</span>
                <span className="text-xs font-medium text-primary/75">OTA Commission Saved Direct</span>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent block tabular-nums mb-1">0%</span>
                <span className="text-xs font-medium text-primary/75">Agency Fee on Ad Spend</span>
              </div>
            </div>
            <p className="text-sm text-primary/75 leading-relaxed">
              By reducing reliance on [À CONFIRMER] OTA commissions and charging transparent flat fees with zero ad-spend markup, our hospitality infrastructure strengthens net operating margins for independent Moroccan properties.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership & Expertise Section */}
      <Section tone="alt" id="about-leadership">
        <div className="grid md:grid-cols-12 gap-14 items-start">
          <div className="md:col-span-7 space-y-6 max-w-[68ch]">
            <p className="text-sm font-medium text-accent">Rooted in Morocco</p>
            <h2 className="text-primary">
              Operating at the Intersection of Culture & Digital Innovation
            </h2>
            <p className="text-primary/85 leading-relaxed">
              Headquartered at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco and operating across Marrakech and Rabat, our team combines deep local immersion in Morocco's legendary hospitality ecosystem with world-class software engineering discipline. We understand the unique operational and marketing challenges faced by riad owners in the historic medinas, luxury resort operators along the Atlantic coast, desert camp managers in the Sahara, and specialized tour companies navigating seasonal travel fluctuations.
            </p>
            <p className="text-primary/85 leading-relaxed">
              By eliminating reliance on third-party intermediaries and digital middlemen, we empower Moroccan hospitality brands to reclaim absolute control over their guest relationships, guest data ownership, and net profit margins. We build permanent digital assets that grow in value over time.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 pt-4 border-t border-border-subtle text-sm font-medium text-primary/80" id="about-locations-tags">
              <span>3 Rue El Kadi Lass, Maarif, Casablanca</span>
              <span>Marrakech Hub</span>
              <span>International Standards</span>
            </div>
          </div>

          <div className="md:col-span-5 bg-primary text-bg-light p-8 md:p-10 rounded-sm" id="transparency-box">
            <h3 className="text-bg-light mb-6">Our Commitment to Transparency</h3>
            <ul className="divide-y divide-bg-light/15 text-bg-light/90 text-base leading-relaxed">
              <li className="pb-4">
                <strong>90-Day Guarantee & 15 Days' Notice:</strong> Our retainer services are backed by a 90-day performance guarantee. Cancel anytime with a simple 15 days' notice—no lock-in.
              </li>
              <li className="py-4">
                <strong>100% Asset & Ad-Account Ownership:</strong> You retain complete ownership of your website source code, Google Ads, Meta Ads, and TripAdvisor ad accounts. If you ever pause our collaboration, all data and campaigns remain entirely yours.
              </li>
              <li className="pt-4">
                <strong>Direct Senior Access:</strong> You work directly with senior software engineers and seasoned hospitality growth strategists—never outsourced junior account managers.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section tone="dark" id="about-cta-section">
        <div className="max-w-[68ch]">
          <h2 className="mb-6 text-bg-light">Ready to scale your direct bookings?</h2>
          <p className="text-lg text-bg-light/85 mb-10 leading-relaxed">
            Stop losing your hard-earned margins to online travel agencies. Let our specialized team audit your current digital presence and build a roadmap for direct booking growth.
          </p>
          <Button href="/en/contact" variant="primary" id="about-cta-btn">
            Get Your Free Direct Booking Audit
          </Button>
        </div>
      </Section>
    </div>
  );
}
