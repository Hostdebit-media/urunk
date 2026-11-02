import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { buildServiceProviderSchema } from '../../components/SEO/StructuredData';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import Hairline from '../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bundle() {
  const faqs = [
    {
      q: "Why combine website creation and ad management in a single bundle?",
      a: "Traffic sent to a slow or disconnected website wastes ad spend, while a new website without initial demand takes months to ramp up organically. Handling your PMS website build, dedicated campaign landing flows, cross-domain GA4/GTM attribution, and paid launch under one team eliminates tracking gaps between vendors.",
    },
    {
      q: "Which ad channel is included in the 16,000 MAD + 4,000 MAD/mo bundle?",
      a: "You choose one primary paid channel—Google Ads, Meta Ads, or TripAdvisor Sponsored Placements—based on your property's goals (media spend paid directly to the ad platform with 0% markup). Multi-channel Google + Meta management can also be scoped.",
    },
    {
      q: "How quickly can we launch?",
      a: "The custom website and PMS integration take 4 to 6 weeks. We build your ad campaigns and conversion tracking in parallel so qualified traffic goes live the day your new website launches.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://urunk.com/en/services/bundle-site-ads#service",
    "name": "Hotel Website + Paid Ads Bundle in Morocco",
    "serviceType": "Website Design & Ads Bundle for Hospitality",
    "description": "Combined direct-booking package in Morocco: custom hotel website with PMS sync + paid ad management starting at 16,000 MAD initial + 4,000 MAD/mo.",
    "provider": buildServiceProviderSchema(),
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/en/services/bundle-site-ads",
    "offers": {
      "@type": "Offer",
      "price": "16000",
      "priceCurrency": "MAD",
      "url": "https://urunk.com/en/services/bundle-site-ads"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <div className="w-full">
      <SEO
        title="Hotel Website + Ads Bundle Morocco | Urunk"
        description="Combined direct-booking website + paid ads package for Moroccan hotels & riads: from 16,000 MAD initial + 4,000 MAD/mo with 100% asset ownership."
        schema={[serviceSchema, faqSchema]}
      />

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">Growth bundle</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Hotel Website + Ads Bundle
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            The complete direct-booking engine. A high-converting site fueled by immediate, targeted traffic.
          </p>
          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">What we do:</strong> The Urunk Bundle pairs a brand new, custom WordPress direct-booking website with one channel of dedicated Ad Management (Google or TripAdvisor). This integrated approach ensures you don't just get a pretty website, but a functional booking engine fueled by qualified traffic from day one.
            </Callout>
          </div>
          <Button href="/en/contact" variant="primary">
            Get a custom bundle quote
          </Button>
        </div>
      </Section>

      {/* Problem Section */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-6 text-balance">
              The danger of siloed marketing.
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                When you hire one agency to build your website and another to run your ads, things get messy. Ad campaigns send traffic to broken landing pages. Conversion tracking tags get lost in the shuffle. If bookings don't materialize, both agencies point the finger at each other.
              </p>
              <p>
                We solve this by taking full ownership of your direct booking funnel. From the ad copy that catches a traveler's eye to the 'Book Now' button they click on your new site, we ensure a frictionless journey.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Why the bundle wins:
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 m-0">Single point of accountability</p>
              <p className="py-3.5 m-0">Immediate ROI upon website launch</p>
              <p className="py-3.5 m-0">Flawless conversion tracking integration</p>
              <p className="py-3.5 pb-0 m-0">Cohesive messaging from ad to booking engine</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            What's included in the bundle?
          </h2>
        </div>

        <div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">01</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">New Custom Website</h3>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-2.5 text-primary/85">
                <li>Mobile-first WordPress design</li>
                <li>Direct booking engine integration</li>
                <li>Fast loading speeds &amp; technical SEO</li>
                <li>Easy-to-use content editor</li>
              </ul>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">02</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Ad Management (Pick 1)</h3>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-2.5 text-primary/85">
                <li>Google Ads OR TripAdvisor Ads setup</li>
                <li>Extensive keyword/competitor research</li>
                <li>Continuous monthly optimization</li>
                <li>Transparent performance reporting</li>
              </ul>
            </div>
          </div>
          <Hairline />
        </div>
      </Section>

      {/* Process & Pricing */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-8">The Launch Process</h2>
            <div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">1</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Dual Strategy</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We map out your website structure and your ad campaign architecture simultaneously.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">2</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Build Phase</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    While developers build the site, our ad specialists configure the tracking and draft the ad copy.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">3</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Synchronized Launch</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    The moment the site goes live and passes QA, we turn on the traffic. Instant impact.
                  </p>
                </div>
              </div>
              <Hairline />
            </div>
          </div>

          <div className="lg:col-span-5 bg-primary text-bg-light p-8 md:p-10 rounded-sm space-y-5">
            <p className="text-sm text-bg-light/75 m-0">
              Published bundle pricing, limited capacity
            </p>
            <h3 className="font-serif text-3xl text-bg-light tabular-nums m-0">
              From 16,000 MAD + 4,000 MAD/mo
            </h3>
            <p className="text-bg-light/85 leading-relaxed m-0">
              Includes custom direct-booking website build (16,000 MAD initial) + monthly management of 1 paid ad channel (4,000 MAD/mo, excl. media spend).
            </p>
            <p className="text-sm text-bg-light/90 pt-4 border-t border-white/15 m-0">
              100% website &amp; ad-account ownership, 15-day notice on ad management.
            </p>
            <Button href="/en/contact" variant="primary" className="w-full">
              Check availability
            </Button>
          </div>
        </div>
      </Section>

      {/* Case Study Proof */}
      <Section tone="light">
        <div className="max-w-3xl">
          <h2 className="font-serif text-primary mb-4">Explore the strategic model</h2>
          <p className="text-primary/85 leading-relaxed mb-6 max-w-[65ch]">
            We designed a comprehensive Web + Ads blueprint for corporate gastronomy and catering concepts, illustrating high-performance acquisition structures.
          </p>
          <p className="m-0">
            <Link to="/en/work/nomad-eats-catering">
              Web + Ads blueprint for corporate gastronomy and catering
            </Link>
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="alt">
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
            Take full control of your bookings.
          </h2>
          <p className="text-lg text-bg-light/85 mb-8">
            One agency. One cohesive strategy. Serious results.
          </p>
          <Button href="/en/contact" variant="primary">
            Get your free proposal
          </Button>
        </div>
      </Section>
    </div>
  );
}
