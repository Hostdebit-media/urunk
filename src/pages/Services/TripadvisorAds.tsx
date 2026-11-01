import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { buildServiceProviderSchema } from '../../components/SEO/StructuredData';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TripadvisorAds() {
  const faqs = [
    { q: "How do TripAdvisor Sponsored Placements work?", a: "Sponsored Placements push your property to the top of the search results for your destination (e.g., 'Hotels in Marrakech'). You only pay when a user clicks on your ad." },
    { q: "Is it worth it if I already have good reviews?", a: "Yes. If your destination is highly competitive, even a 5-star rating might leave you on page 2 or 3 of the organic rankings. Ads guarantee visibility so travelers actually see those great reviews." },
    { q: "Can you help improve our ranking organically too?", a: "Yes. Part of our service involves auditing your listing, advising on photo order, amenity tags, and implementing a strategy to generate more consistent, high-quality guest reviews." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://urunk.com/en/services/tripadvisor-ads#service",
    "name": "TripAdvisor Ads for Hotels in Morocco",
    "serviceType": "TripAdvisor Ads Management",
    "description": "TripAdvisor Sponsored Placements management at 3,000 MAD/mo (approx. €280/mo), month-to-month with 15 days notice, to generate direct bookings.",
    "provider": buildServiceProviderSchema(),
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/en/services/tripadvisor-ads",
    "offers": {
      "@type": "Offer",
      "price": "3000",
      "priceCurrency": "MAD",
      "url": "https://urunk.com/en/services/tripadvisor-ads",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "3000",
        "priceCurrency": "MAD",
        "unitText": "MONTH"
      }
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
        title="TripAdvisor Ads for Hotels in Morocco | Urunk" 
        description="Drive ready-to-book travelers to your booking engine. Our TripAdvisor advertising experts capture high-intent users planning their Moroccan stays." 
        schema={[serviceSchema, faqSchema]}
      />
      
      {/* Hero & AI Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Marketplace Advertising
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">TripAdvisor Ads for Hotels in Morocco</h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Jump to the top of your local destination page and capture travelers during their planning phase.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>What we do:</strong> Urunk manages TripAdvisor Sponsored Placements and listing optimization for hospitality brands. We help hotels and riads secure premium visibility in competitive markets, turning their strong reputation into a consistent driver of direct bookings.
            </Callout>
          </div>
          <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
            Start Dominating TripAdvisor <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Great reviews don't matter if no one sees them.</h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              You work hard to provide an exceptional guest experience, earning glowing 5-star reviews. But in markets like Marrakech or Casablanca, hundreds of properties are competing for attention. If you are stuck on page 3, travelers simply won't find you.
            </p>
            <p className="text-primary/80 leading-relaxed">
              TripAdvisor ads allow you to bypass the algorithm. By securing top placements, you ensure that high-intent travelers see your property first when they are building their itineraries.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
             <h3 className="text-xl font-bold mb-4">Signs you need TripAdvisor Ads:</h3>
             <ul className="space-y-4">
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> You have a high rating, but low page traffic</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Competitors with worse reviews are outranking you</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> You are highly dependent on Booking.com for visibility</li>
             </ul>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Comprehensive Listing Growth.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Sponsored Placements</h3>
              <p className="text-white/80 text-sm leading-relaxed">We manage your bidding strategy to ensure you appear in the top sponsored slots for your specific destination and property type, maximizing impressions without overspending.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Listing Optimization</h3>
              <p className="text-white/80 text-sm leading-relaxed">We optimize your primary photo selections, amenity tags, and descriptions to ensure that when travelers click your ad, they are convinced to book.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Review Strategy Consulting</h3>
              <p className="text-white/80 text-sm leading-relaxed">We provide templates and processes to help your on-the-ground staff generate more positive reviews, bolstering both your organic rank and ad conversion rate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-bg-alt">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">How it works</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-bold mb-1">Profile Audit</h3>
                  <p className="text-sm text-primary/80">We review your current ranking, competitor positioning, and listing quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">Campaign Launch</h3>
                  <p className="text-sm text-primary/80">We set up targeted campaigns, allocating budget intelligently across high-traffic days.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">Performance Tracking</h3>
                  <p className="text-sm text-primary/80">We monitor click-through rates and provide simple monthly reports on visibility and direct inquiry growth.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10 flex flex-col justify-center items-center text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Management Fee</span>
            <h3 className="text-4xl font-bold mb-2">From 3,000 MAD<span className="text-xl font-normal text-primary/70">/mo</span></h3>
            <p className="text-primary/70 text-sm mb-8">Plus your chosen ad spend. No long-term contracts.</p>
            <Link to="/en/contact" className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-medium transition-colors">Boost Your Visibility</Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Strategic Ad Modeling</h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          Explore our strategic framework illustrating how TripAdvisor ad placement and custom web funnels can elevate a tour operator's visibility and acquisition structure.
        </p>
        <Link to="/en/work/travel-morocco-services" className="text-accent hover:text-accent-hover font-medium flex items-center justify-center gap-2 transition-colors">
          Explore Strategy Example <ArrowRight size={18} />
        </Link>
      </section>

      <RelatedExpertiseSection
        kicker="Hospitality Acquisition Hubs"
        title="TripAdvisor Ads & Direct Booking Specializations in Morocco"
        subtitle="Explore destination-specific TripAdvisor Sponsored Placements, Google Hotel Ads, and direct booking strategies across Marrakech and Agadir."
        links={getMatrixLinksForService('tripadvisor-ads', 'en')}
        isFrench={false}
        bgVariant="white"
      />

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg-alt border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col border-t border-primary/20">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-primary/20">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-4 text-lg">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-accent">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-primary/70 pb-6 pr-4 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to stand out?</h2>
        <p className="text-xl text-primary/80 mb-8">Get the visibility your reviews deserve.</p>
        <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
          Get a Free Ads Proposal <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
