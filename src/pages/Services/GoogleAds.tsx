import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { buildServiceProviderSchema } from '../../components/SEO/StructuredData';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function GoogleAds() {
  const faqs = [
    { q: "What is a realistic starting budget for Google Ads in Morocco?", a: "For a single riad or small hotel in Morocco running Search & Brand Protection, we recommend a minimum Google media spend of 3,500 to 6,000 MAD per month (paid directly to Google) plus our 4,000 MAD/month flat management fee. For combined Google Ads + Meta Ads hotel budgets, see our Hotel Digital Marketing guide." },
    { q: "How do you track direct booking ROI?", a: "We configure Google Tag Manager and GA4 cross-domain tracking on your PMS booking engine, phone click events, and WhatsApp inquiries so you see exact cost-per-booking and direct room revenue—not vanity impressions." },
    { q: "Am I locked into a long-term contract?", a: "No. Our ad management operates month-to-month with 100% client ownership of the Google Ads account and a simple 15-day cancellation notice." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads Management for Hotels & Businesses in Morocco",
    "serviceType": "Google Ads Management",
    "description": "Data-driven Google Search, Brand Defense, and Hotel Ads management in Morocco starting at 4,000 MAD/mo flat fee (0% ad-spend commission).",
    "provider": buildServiceProviderSchema(),
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/en/services/google-ads",
    "offers": {
      "@type": "Offer",
      "price": "4000",
      "priceCurrency": "MAD"
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
        title="Google Ads Management for Hotels & Riads | Urunk" 
        description="Capture high-intent searches with Google Ads management in Morocco from 4,000 MAD/mo flat fee (0% commission on ad spend). GA4 & PMS revenue tracking." 
        schema={[serviceSchema, faqSchema]}
      />
      
      {/* Hero & AI Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Search Engine Marketing
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Google Ads Management</h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Stop burning money on bad clicks. Capture guests right when they are searching for a place to stay.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>What we do:</strong> Urunk provides specialized Google Ads management for Moroccan hospitality businesses from 4,000 MAD/month flat fee (0% markup on media spend). Looking for an <strong>integrated strategy combining Hotel SEO, Google Ads, Meta Ads, and monthly budget benchmarks</strong>? Read our{" "}
              <Link to="/en/hotel-digital-marketing" className="underline text-accent-soft hover:text-white font-semibold">
                Hotel Digital Marketing in Morocco guide
              </Link>.
            </Callout>
          </div>
          <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
            Request an Ads Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Are you buying clicks, or bookings?</h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Many hotels run Google Ads but fail to track conversions properly. They bid on broad terms like "Morocco vacation" and wonder why their budget vanishes with zero direct bookings to show for it.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Without proper keyword negative lists, precise match types, and tight conversion tracking, Google Ads is a fast way to lose money. We flip the script by focusing only on search intent that signals readiness to book.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
             <h3 className="text-xl font-bold mb-4">Common Google Ads Mistakes:</h3>
             <ul className="space-y-4">
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Bidding on competitor names unnecessarily</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> No conversion tracking installed</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Sending all traffic to the homepage instead of specific offers</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Letting Google "auto-apply" broad match recommendations</li>
             </ul>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Data-driven ad management.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Keyword Strategy</h3>
              <p className="text-white/80 text-sm leading-relaxed">We identify the exact phrases your ideal guests are searching for, separating high-intent bookers from casual browsers.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Compelling Ad Copy</h3>
              <p className="text-white/80 text-sm leading-relaxed">We write engaging search ads that highlight your unique amenities, current promotions, and direct-booking perks to maximize click-through rates.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Continuous Optimization</h3>
              <p className="text-white/80 text-sm leading-relaxed">We monitor search terms daily, adding negative keywords and adjusting bids to ensure your cost-per-acquisition keeps dropping.</p>
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
                  <h3 className="font-bold mb-1">Audit & Tracking Setup</h3>
                  <p className="text-sm text-primary/80">We review past data and ensure strict conversion tracking is correctly firing on your site.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">Campaign Build</h3>
                  <p className="text-sm text-primary/80">We structure campaigns, ad groups, and keywords tailored to your specific property and goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">Monthly Reporting</h3>
                  <p className="text-sm text-primary/80">You receive a plain-English report every month showing exactly how much you spent and how many bookings resulted.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10 flex flex-col justify-center items-center text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Management Fee</span>
            <h3 className="text-4xl font-bold mb-2">From 4,000 MAD<span className="text-xl font-normal text-primary/70">/mo</span></h3>
            <p className="text-primary/70 text-sm mb-8">Plus your chosen Google Ad spend. No long-term contracts.</p>
            <Link to="/en/contact" className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-medium transition-colors">Start Growing Today</Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Strategic Campaign Design</h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          Explore our strategic framework illustrating how to structure search campaigns for maximum visibility while targeting high-ticket corporate inquiries.
        </p>
        <Link to="/en/work/nomad-eats-catering" className="text-accent hover:text-accent-hover font-medium flex items-center justify-center gap-2 transition-colors">
          Explore Strategy Example <ArrowRight size={18} />
        </Link>
      </section>

      <RelatedExpertiseSection
        kicker="Regional Paid Search Hubs"
        title="Google Ads & Direct Booking Specializations Across Morocco"
        subtitle="Explore localized paid search, hospitality advertising, and direct booking strategies in Casablanca, Marrakech, and Agadir."
        links={getMatrixLinksForService('google-ads-morocco', 'en')}
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
        <h2 className="text-4xl font-bold mb-6">Ready for measurable growth?</h2>
        <p className="text-xl text-primary/80 mb-8">Let's turn search traffic into direct revenue.</p>
        <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
          Get a Free Campaign Proposal <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
