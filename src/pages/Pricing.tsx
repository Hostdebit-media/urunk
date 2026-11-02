import React from "react";
import Callout from "../components/Callout";
import SEO from "../components/SEO";
import { buildServiceProviderSchema } from "../components/SEO/StructuredData";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { pricingCopyEN } from "../data/copy/pricing.en";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Hairline from "../components/ui/Hairline";

export default function Pricing() {
  const { seo, hero, callout, packages, faq, cta } = pricingCopyEN;
  const bundleKicker =
    packages.bundle.badge.charAt(0) + packages.bundle.badge.slice(1).toLowerCase();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Urunk Pricing & Packages",
    "provider": buildServiceProviderSchema(),
    "areaServed": "Morocco",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Urunk Offers",
      "itemListElement": [
        {
          "@type": "Offer",
          "price": "12000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Hotel Website",
            "description": "Custom hotel & riad websites with direct booking engine."
          }
        },
        {
          "@type": "Offer",
          "price": "4000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Local Search",
            "description": "SEO optimization and local Google Maps visibility."
          }
        },
        {
          "@type": "Offer",
          "price": "4000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": "High-intent Google Ads campaigns."
          }
        },
        {
          "@type": "Offer",
          "price": "4000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads Management",
            "description": "Facebook and Instagram campaigns for direct booking."
          }
        },
        {
          "@type": "Offer",
          "price": "3000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "TripAdvisor Ads Management",
            "description": "TripAdvisor metasearch campaign management."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const rateSchedule = [
    {
      name: "Custom Hotel Website",
      note: "Custom hotel & riad websites with direct booking engine",
      rate: "12,000 MAD"
    },
    {
      name: "SEO & Local Search",
      note: "SEO optimization and local Google Maps visibility",
      rate: "4,000 MAD/mo"
    },
    {
      name: "Google Ads Management",
      note: "High-intent Google Ads campaigns",
      rate: "4,000 MAD/mo"
    },
    {
      name: "Meta Ads Management",
      note: "Facebook and Instagram campaigns for direct booking",
      rate: "4,000 MAD/mo"
    },
    {
      name: "TripAdvisor Ads Management",
      note: "TripAdvisor metasearch campaign management",
      rate: "3,000 MAD/mo"
    }
  ];

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={seo.title}
        description={seo.description}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero & Summary Callout */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4">
            {hero.badge}
          </p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            {hero.title}{hero.titleItalic}
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[62ch] leading-relaxed">
            {hero.subtext}
          </p>
          <div className="max-w-3xl">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">{callout.title}</strong>{" "}
              {callout.body}
            </Callout>
          </div>
        </div>
      </Section>

      {/* Editorial Pricing: One Featured Package Card + Dotted-Leader Ledger */}
      <Section tone="light">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Single Bordered Package Card */}
          <div className="lg:col-span-5 bg-bg-card border border-border-subtle rounded-sm p-8 md:p-10">
            <p className="text-sm font-medium text-accent mb-2">{bundleKicker}</p>
            <h2 className="font-serif text-[32px] leading-tight text-primary mb-3">
              {packages.bundle.title}
            </h2>
            <p className="font-serif text-2xl text-accent tabular-nums mb-2">
              {packages.bundle.price}
            </p>
            <p className="text-sm text-primary/70 mb-8">
              {packages.bundle.subtitle}
            </p>
            <Hairline className="mb-6" />
            <ul className="space-y-3 mb-8">
              {packages.bundle.features.map((feature, i) => (
                <li key={i} className="text-sm text-primary/85 leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="primary" href="/en/contact" className="w-full">
              {packages.bundle.cta}
            </Button>
          </div>

          {/* Unboxed Ledger Rows with Dotted Leaders */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="font-serif text-[28px] leading-tight text-primary shrink-0">
                  {packages.web.title}
                </h2>
                <span
                  className="flex-1 border-b border-dotted border-border-subtle"
                  aria-hidden="true"
                />
                <span className="font-medium text-accent tabular-nums shrink-0">
                  {packages.web.price}
                </span>
              </div>
              <p className="text-sm text-primary/70 mb-4">{packages.web.subtitle}</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary/80 mb-5">
                {packages.web.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/en/contact" className="text-sm font-medium">
                {packages.web.cta}
              </Link>
            </div>

            <Hairline />

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="font-serif text-[28px] leading-tight text-primary shrink-0">
                  {packages.ads.title}
                </h2>
                <span
                  className="flex-1 border-b border-dotted border-border-subtle"
                  aria-hidden="true"
                />
                <span className="font-medium text-accent tabular-nums shrink-0">
                  {packages.ads.price}
                  {packages.ads.priceSuffix}
                </span>
              </div>
              <p className="text-sm text-primary/70 mb-4">{packages.ads.subtitle}</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary/80 mb-5">
                {packages.ads.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/en/contact" className="text-sm font-medium">
                {packages.ads.cta}
              </Link>
            </div>

            <Hairline />

            <div>
              <h3 className="font-serif text-[26px] text-primary mb-6">
                Individual Service Schedule
              </h3>
              <div className="space-y-4">
                {rateSchedule.map((row, idx) => (
                  <div key={idx}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-medium text-primary">{row.name}</span>
                      <span
                        className="flex-1 border-b border-dotted border-border-subtle"
                        aria-hidden="true"
                      />
                      <span className="tabular-nums font-medium text-primary shrink-0">
                        {row.rate}
                      </span>
                    </div>
                    <p className="text-xs text-primary/65 mt-1">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment ROI Breakdown */}
      <Section tone="alt" className="border-t border-border-subtle">
        <div className="max-w-5xl">
          <div className="mb-12 max-w-[68ch]">
            <p className="text-accent font-medium text-sm mb-2">
              Financial Analysis &amp; ROI
            </p>
            <h2 className="font-serif text-primary mb-3 text-balance">
              The Direct Booking Financial Model
            </h2>
            <p className="text-primary/75">
              Understanding the long-term impact of your digital marketing and engineering investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-primary/85 leading-relaxed">
            <div className="max-w-[68ch]">
              <h3 className="font-serif text-primary mb-4">
                Direct Bookings vs. Third-Party Channels (OTAs)
              </h3>
              <p className="mb-4">
                Operating a premium hospitality business in Morocco (Casablanca, Marrakech, Rabat, Agadir) without an optimized direct reservation platform is highly inefficient. Online Travel Agencies (OTAs) charge anywhere from [À CONFIRMER] on every booking you receive. If your hotel or luxury riad generates €20,000 in gross revenue monthly, you could be losing up to €5,000 in commission fees every single month.
              </p>
              <p>
                Our high-performance websites starting at 12,000 MAD (€1,100) are engineered to capture this traffic directly. By integrating seamless booking engines (PMS) and streamlining direct payment routes, our clients see an average increase of +40% in direct bookings, recapturing thousands in lost commission fees month after month.
              </p>
            </div>
            <div className="max-w-[68ch]">
              <h3 className="font-serif text-primary mb-4">
                Performance Metrics &amp; Investment Timeline
              </h3>
              <p className="mb-4">
                All of our digital solutions are designed with clear commercial milestones. Our typical design and build timeline spans 4 to 6 weeks, taking your project from strategic planning to a fully-optimized live launch. When combined with our monthly search and ad campaign management (starting at 4,000 MAD/month), properties achieve a -35% reduction in their overall cost per booking inquiry.
              </p>
              <p>
                To ensure complete peace of mind, we back all of our core development projects with a 90-day technical guarantee, combined with a flexible 15 days&apos; notice cancellation policy on monthly marketing agreements. This allows you to scale up or optimize your marketing spend as your booking numbers grow.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light" className="border-t border-border-subtle">
        <div className="max-w-[68ch]">
          <h2 className="font-serif text-primary mb-10">{faq.title}</h2>
          <div className="border-t border-border-subtle">
            {faq.items.map((item, i) => (
              <details key={i} className="group border-b border-border-subtle">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-2 text-lg text-primary">
                  <span>{item.q}</span>
                  <span className="transition-transform group-open:rotate-180 text-accent shrink-0 ml-4">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="text-primary/80 pb-6 pr-4 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark">
        <div className="max-w-2xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">{cta.title}</h2>
          <p className="text-lg text-bg-light/85 mb-8 leading-relaxed">
            {cta.subtitle}
          </p>
          <Button variant="dark" href="/en/contact">
            {cta.button}
          </Button>
        </div>
      </Section>
    </div>
  );
}
