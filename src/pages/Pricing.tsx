import React from "react";
import Callout from "../components/Callout";
import SEO from "../components/SEO";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { pricingCopyEN } from "../data/copy/pricing.en";

export default function Pricing() {
  const { seo, hero, callout, packages, faq, cta } = pricingCopyEN;
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

  return (
    <div className="w-full">
      <SEO
        title={seo.title}
        description={seo.description}
        schema={faqSchema}
      />

      {/* Hero & AI Answer Block */}
      <section className="bg-primary pt-32 pb-16 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {hero.title}<span className="text-yellow-400 italic">{hero.titleItalic}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {hero.subtext}
          </p>
          <div className="max-w-3xl mx-auto text-left">
            <Callout variant="dark">
              <strong className="text-yellow-400 font-semibold">{callout.title}</strong> {callout.body}
            </Callout>
          </div>
        </div>
      </section>

      {/* Pricing Grids */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Website Design */}
          <div className="bg-white border border-primary/10 rounded-2xl p-8 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold mb-2">{packages.web.title}</h2>
            <p className="text-accent font-semibold text-3xl mb-2">
              {packages.web.price}
            </p>
            <p className="text-sm text-primary/70 mb-8">
              {packages.web.subtitle}
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {packages.web.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-primary/80">
                  <Check size={18} className="text-accent shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/en/contact"
              className="w-full block text-center bg-primary text-white py-3.5 rounded-xl font-medium hover:bg-primary-light transition-colors mt-auto"
            >
              {packages.web.cta}
            </Link>
          </div>

          {/* Bundle (Best Value) */}
          <div className="bg-primary text-white border-2 border-yellow-400 rounded-2xl p-8 shadow-md relative transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 right-0 bg-yellow-400 text-primary text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              {packages.bundle.badge}
            </div>
            <h2 className="text-xl font-bold mb-2">
              {packages.bundle.title}
            </h2>
            <p className="text-yellow-400 font-semibold text-3xl mb-2">{packages.bundle.price}</p>
            <p className="text-sm text-white/60 mb-8">
              {packages.bundle.subtitle}
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {packages.bundle.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/90">
                  <Check size={18} className="text-yellow-400 shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/en/contact"
              className="w-full block text-center bg-yellow-400 text-primary py-3.5 rounded-xl font-bold hover:bg-yellow-500 transition-colors mt-auto shadow-lg"
            >
              {packages.bundle.cta}
            </Link>
          </div>

          {/* Ad Management */}
          <div className="bg-white border border-primary/10 rounded-2xl p-8 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold mb-2">{packages.ads.title}</h2>
            <p className="text-accent font-semibold text-3xl mb-2">
              {packages.ads.price}
              <span className="text-base font-normal">{packages.ads.priceSuffix}</span>
            </p>
            <p className="text-sm text-primary/70 mb-8">
              {packages.ads.subtitle}
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {packages.ads.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-primary/80">
                  <Check size={18} className="text-accent shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/en/contact"
              className="w-full block text-center border-2 border-primary text-primary py-3.5 rounded-xl font-medium hover:bg-primary/5 transition-colors mt-auto"
            >
              {packages.ads.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Investment ROI Breakdown */}
      <section className="py-24 px-6 bg-primary/5 border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Financial Analysis & ROI</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">The Direct Booking Financial Model</h2>
            <p className="text-primary/70 font-light mt-3">Understanding the long-term impact of your digital marketing and engineering investment.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-primary/80 leading-relaxed font-light text-sm">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Direct Bookings vs. Third-Party Channels (OTAs)</h3>
              <p className="mb-4">
                Operating a premium hospitality business in Morocco (Casablanca, Marrakech, Rabat, Agadir) without an optimized direct reservation platform is highly inefficient. Online Travel Agencies (OTAs) charge anywhere from 15% to 25% on every booking you receive. If your hotel or luxury riad generates €20,000 in gross revenue monthly, you could be losing up to €5,000 in commission fees every single month.
              </p>
              <p>
                Our high-performance websites starting at 12,000 MAD (€1,100) are engineered to capture this traffic directly. By integrating seamless booking engines (PMS) and streamlining direct payment routes, our clients see an average increase of +40% in direct bookings, recapturing thousands in lost commission fees month after month.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Performance Metrics & Investment Timeline</h3>
              <p className="mb-4">
                All of our digital solutions are designed with clear commercial milestones. Our typical design and build timeline spans 4 to 6 weeks, taking your project from strategic planning to a fully-optimized live launch. When combined with our monthly search and ad campaign management (starting at 4,000 MAD/month), properties achieve a -35% reduction in their overall cost per booking inquiry.
              </p>
              <p>
                To ensure complete peace of mind, we back all of our core development projects with a 90-day technical guarantee, combined with a flexible 15 days' notice cancellation policy on monthly marketing agreements. This allows you to scale up or optimize your marketing spend as your booking numbers grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg-alt border-y border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {faq.title}
          </h2>
          <div className="flex flex-col border-t border-primary/20">
            {faq.items.map((item, i) => (
              <details key={i} className="group border-b border-primary/20">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-4 text-lg">
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-180 text-accent">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-primary/70 pb-6 pr-4 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          {cta.title}
        </h2>
        <p className="text-xl text-primary/80 mb-8">
          {cta.subtitle}
        </p>
        <Link
          to="/en/contact"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
        >
          {cta.button} <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
