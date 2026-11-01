import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { buildServiceProviderSchema } from '../../components/SEO/StructuredData';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function MetaAds() {
  const faqs = [
    { q: "Do Meta Ads really drive direct bookings for hotels and riads?", a: "Yes—when paired with conversion tracking and search brand defense. While Google captures travelers actively typing hotel queries, Instagram and Facebook inspire international guests with vertical video and retarget visitors who checked dates on your PMS without completing checkout." },
    { q: "What is a realistic starting budget for Meta Ads in Morocco?", a: "For single-channel retargeting and seasonal offers, we recommend 3,000 to 6,000 MAD/month in media spend paid directly to Meta, alongside our 4,000 MAD/month flat management fee (0% ad-spend commission). For combined Google + Meta hotel budgets, see our Hotel Digital Marketing guide." },
    { q: "Do you handle creative formatting and ad copy?", a: "Yes, structuring vertical Reels/Stories edits from your property's visual assets and writing bilingual conversion copy are included in our monthly management retainer." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Meta Ads (Instagram & Facebook) for Hotels and Riads",
    "serviceType": "Meta Ads Management for Hospitality",
    "description": "Targeted Facebook and Instagram ad funnels for Moroccan hotels and riads starting at 4,000 MAD/mo flat fee (0% commission on ad spend).",
    "provider": buildServiceProviderSchema(),
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/en/services/meta-ads",
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
        title="Meta Ads for Hotels & Riads Morocco | Urunk" 
        description="Instagram and Facebook advertising for Moroccan hotels and riads: dynamic PMS retargeting and flat-fee management from 4,000 MAD/mo." 
        schema={[serviceSchema, faqSchema]}
      />
      
      {/* Hero & AI Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Paid Social Media
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Meta Ads for Hotels and Riads</h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Stop losing potential guests. Inspire travelers on Facebook and Instagram, and retarget them until they book.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>What we do:</strong> Urunk manages Meta (Facebook &amp; Instagram) funnels for Moroccan hotels and riads from 4,000 MAD/month flat fee. Looking for an <strong>integrated strategy combining Hotel SEO, Google Ads, Meta Ads, and monthly budget benchmarks</strong>? Explore our{" "}
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
            <h2 className="text-3xl font-bold mb-6">Are you just "boosting posts"?</h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Many hotel owners click the tempting "Boost Post" button on Instagram, hoping for bookings. But "likes" don't pay the bills. That button is designed to get engagement, not revenue.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Real ROI comes from the Meta Ads Manager. We build complex funnels: cold audiences see your best aesthetic videos, warm audiences see your amenities, and hot audiences (who visited your booking page) see a final push to book directly.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
             <h3 className="text-xl font-bold mb-4">Common Meta Ads Mistakes:</h3>
             <ul className="space-y-4">
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Boosting posts instead of running conversion campaigns</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Failing to install the Meta Pixel for retargeting</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Using boring, text-heavy images instead of vertical video</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Running the exact same ad to everyone, regardless of their awareness level</li>
             </ul>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Full-funnel social strategy.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Audience Targeting</h3>
              <p className="text-white/80 text-sm leading-relaxed">We target travelers who have shown interest in your destination, utilizing lookalike audiences based on your past guests.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Creative & Copy</h3>
              <p className="text-white/80 text-sm leading-relaxed">We craft scroll-stopping visuals and persuasive copy that highlights the unique experience and emotion of staying at your property.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Aggressive Retargeting</h3>
              <p className="text-white/80 text-sm leading-relaxed">We set up tracking pixels to "follow" users who left your site without booking, reminding them to finish their reservation.</p>
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
                  <h3 className="font-bold mb-1">Pixel Setup & Asset Review</h3>
                  <p className="text-sm text-primary/80">We ensure the Meta Pixel is correctly installed on your site and review your photos/videos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">Campaign & Creative Build</h3>
                  <p className="text-sm text-primary/80">We design the ad creatives, write the copy, and build the audience funnels in Ads Manager.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">Monthly Optimization</h3>
                  <p className="text-sm text-primary/80">We refresh fatigued creatives and shift budget toward the campaigns driving the cheapest bookings.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10 flex flex-col justify-center items-center text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Management Fee</span>
            <h3 className="text-4xl font-bold mb-2">From 4,000 MAD<span className="text-xl font-normal text-primary/70">/mo</span></h3>
            <p className="text-primary/70 text-sm mb-8">Plus your chosen Meta Ad spend. No long-term contracts.</p>
            <Link to="/en/contact" className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-medium transition-colors">Start Growing Today</Link>
          </div>
        </div>
      </section>

      <RelatedExpertiseSection
        kicker="Regional Paid Social & Funnels"
        title="Meta Ads & Direct Acquisition Across Moroccan Hubs"
        subtitle="Discover how we pair Instagram and Facebook visual funnels with search and direct booking systems across Marrakech, Casablanca, and Agadir."
        links={getMatrixLinksForService('meta-ads', 'en')}
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
        <h2 className="text-4xl font-bold mb-6">Ready to stop scrolling and start booking?</h2>
        <p className="text-xl text-primary/80 mb-8">Let's build a profitable social media funnel for your property.</p>
        <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
          Get a Free Campaign Proposal <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
