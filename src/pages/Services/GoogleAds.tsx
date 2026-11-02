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

export default function GoogleAds() {
  const faqs = [
    {
      q: "What is a realistic starting budget for Google Ads in Morocco?",
      a: "For a single riad or small hotel in Morocco running Search & Brand Protection, we recommend a minimum Google media spend of 3,500 to 6,000 MAD per month (paid directly to Google) plus our 4,000 MAD/month flat management fee. For combined Google Ads + Meta Ads hotel budgets, see our Hotel Digital Marketing guide.",
    },
    {
      q: "How do you track direct booking ROI?",
      a: "We configure Google Tag Manager and GA4 cross-domain tracking on your PMS booking engine, phone click events, and WhatsApp inquiries so you see exact cost-per-booking and direct room revenue—not vanity impressions.",
    },
    {
      q: "Am I locked into a long-term contract?",
      a: "No. Our ad management operates month-to-month with 100% client ownership of the Google Ads account and a simple 15-day cancellation notice.",
    },
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

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">Search engine marketing</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Google Ads Management
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Stop burning money on bad clicks. Capture guests right when they are searching for a place to stay.
          </p>
          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">What we do:</strong> Urunk provides specialized Google Ads management for Moroccan hospitality businesses from 4,000 MAD/month flat fee (0% markup on media spend). Looking for an <strong className="text-bg-light font-semibold">integrated strategy combining Hotel SEO, Google Ads, Meta Ads, and monthly budget benchmarks</strong>? Read our{' '}
              <Link to="/en/hotel-digital-marketing">
                Hotel Digital Marketing in Morocco guide
              </Link>.
            </Callout>
          </div>
          <Button href="/en/contact" variant="primary">
            Request an ads audit
          </Button>
        </div>
      </Section>

      {/* Problem Section */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-6 text-balance">
              Are you buying clicks, or bookings?
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                Many hotels run Google Ads but fail to track conversions properly. They bid on broad terms like "Morocco vacation" and wonder why their budget vanishes with zero direct bookings to show for it.
              </p>
              <p>
                Without proper keyword negative lists, precise match types, and tight conversion tracking, Google Ads is a fast way to lose money. We flip the script by focusing only on search intent that signals readiness to book.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Common Google Ads Mistakes:
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 m-0">Bidding on competitor names unnecessarily</p>
              <p className="py-3.5 m-0">No conversion tracking installed</p>
              <p className="py-3.5 m-0">Sending all traffic to the homepage instead of specific offers</p>
              <p className="py-3.5 pb-0 m-0">Letting Google "auto-apply" broad match recommendations</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            Data-driven ad management.
          </h2>
        </div>

        <div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">01</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Keyword Strategy</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We identify the exact phrases your ideal guests are searching for, separating high-intent bookers from casual browsers.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">02</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Compelling Ad Copy</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We write engaging search ads that highlight your unique amenities, current promotions, and direct-booking perks to maximize click-through rates.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">03</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Continuous Optimization</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We monitor search terms daily, adding negative keywords and adjusting bids to ensure your cost-per-acquisition keeps dropping.
              </p>
            </div>
          </div>
          <Hairline />
        </div>
      </Section>

      {/* Process & Pricing */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-8">How it works</h2>
            <div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">1</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Audit &amp; Tracking Setup</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We review past data and ensure strict conversion tracking is correctly firing on your site.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">2</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Campaign Build</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We structure campaigns, ad groups, and keywords tailored to your specific property and goals.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">3</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Monthly Reporting</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    You receive a plain-English report every month showing exactly how much you spent and how many bookings resulted.
                  </p>
                </div>
              </div>
              <Hairline />
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-5">
            <p className="text-sm text-accent font-medium m-0">Management fee</p>
            <h3 className="font-serif text-3xl text-primary tabular-nums m-0">
              From 4,000 MAD<span className="text-lg text-primary/70">/mo</span>
            </h3>
            <p className="text-primary/80 leading-relaxed m-0">
              Plus your chosen Google Ad spend. No long-term contracts.
            </p>
            <Button href="/en/contact" variant="dark" className="w-full">
              Start growing today
            </Button>
          </div>
        </div>
      </Section>

      {/* Case Study Proof */}
      <Section tone="light">
        <div className="max-w-3xl">
          <h2 className="font-serif text-primary mb-4">Strategic Campaign Design</h2>
          <p className="text-primary/85 leading-relaxed mb-6 max-w-[65ch]">
            Explore our strategic framework illustrating how to structure search campaigns for maximum visibility while targeting high-ticket corporate inquiries.
          </p>
          <p className="m-0">
            <Link to="/en/work/nomad-eats-catering">
              Search campaign framework for corporate inquiries
            </Link>
          </p>
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker="Regional paid search hubs"
        title="Google Ads & Direct Booking Specializations Across Morocco"
        subtitle="Explore localized paid search, hospitality advertising, and direct booking strategies in Casablanca, Marrakech, and Agadir."
        links={getMatrixLinksForService('google-ads-morocco', 'en')}
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
            Ready for measurable growth?
          </h2>
          <p className="text-lg text-bg-light/85 mb-8">
            Let's turn search traffic into direct revenue.
          </p>
          <Button href="/en/contact" variant="primary">
            Get a free campaign proposal
          </Button>
        </div>
      </Section>
    </div>
  );
}
