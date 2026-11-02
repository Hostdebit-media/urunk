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

export default function MetaAds() {
  const faqs = [
    {
      q: "Do Meta Ads really drive direct bookings for hotels and riads?",
      a: "Yes—when paired with conversion tracking and search brand defense. While Google captures travelers actively typing hotel queries, Instagram and Facebook inspire international guests with vertical video and retarget visitors who checked dates on your PMS without completing checkout.",
    },
    {
      q: "What is a realistic starting budget for Meta Ads in Morocco?",
      a: "For single-channel retargeting and seasonal offers, we recommend 3,000 to 6,000 MAD/month in media spend paid directly to Meta, alongside our 4,000 MAD/month flat management fee (0% ad-spend commission). For combined Google + Meta hotel budgets, see our Hotel Digital Marketing guide.",
    },
    {
      q: "Do you handle creative formatting and ad copy?",
      a: "Yes, structuring vertical Reels/Stories edits from your property's visual assets and writing bilingual conversion copy are included in our monthly management retainer.",
    },
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

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">Paid social media</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Meta Ads for Hotels and Riads
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Stop losing potential guests. Inspire travelers on Facebook and Instagram, and retarget them until they book.
          </p>
          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">What we do:</strong> Urunk manages Meta (Facebook &amp; Instagram) funnels for Moroccan hotels and riads from 4,000 MAD/month flat fee. Looking for an <strong className="text-bg-light font-semibold">integrated strategy combining Hotel SEO, Google Ads, Meta Ads, and monthly budget benchmarks</strong>? Explore our{' '}
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
              Are you just "boosting posts"?
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                Many hotel owners click the tempting "Boost Post" button on Instagram, hoping for bookings. But "likes" don't pay the bills. That button is designed to get engagement, not revenue.
              </p>
              <p>
                Real ROI comes from the Meta Ads Manager. We build complex funnels: cold audiences see your best aesthetic videos, warm audiences see your amenities, and hot audiences (who visited your booking page) see a final push to book directly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Common Meta Ads Mistakes:
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 m-0">Boosting posts instead of running conversion campaigns</p>
              <p className="py-3.5 m-0">Failing to install the Meta Pixel for retargeting</p>
              <p className="py-3.5 m-0">Using boring, text-heavy images instead of vertical video</p>
              <p className="py-3.5 pb-0 m-0">Running the exact same ad to everyone, regardless of their awareness level</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            Full-funnel social strategy.
          </h2>
        </div>

        <div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">01</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Audience Targeting</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We target travelers who have shown interest in your destination, utilizing lookalike audiences based on your past guests.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">02</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Creative &amp; Copy</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We craft scroll-stopping visuals and persuasive copy that highlights the unique experience and emotion of staying at your property.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">03</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Aggressive Retargeting</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We set up tracking pixels to "follow" users who left your site without booking, reminding them to finish their reservation.
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
                  <h3 className="font-serif text-primary mb-2">Pixel Setup &amp; Asset Review</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We ensure the Meta Pixel is correctly installed on your site and review your photos/videos.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">2</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Campaign &amp; Creative Build</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We design the ad creatives, write the copy, and build the audience funnels in Ads Manager.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">3</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Monthly Optimization</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We refresh fatigued creatives and shift budget toward the campaigns driving the cheapest bookings.
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
              Plus your chosen Meta Ad spend. No long-term contracts.
            </p>
            <Button href="/en/contact" variant="dark" className="w-full">
              Start growing today
            </Button>
          </div>
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker="Regional paid social and funnels"
        title="Meta Ads & Direct Acquisition Across Moroccan Hubs"
        subtitle="Discover how we pair Instagram and Facebook visual funnels with search and direct booking systems across Marrakech, Casablanca, and Agadir."
        links={getMatrixLinksForService('meta-ads', 'en')}
        isFrench={false}
        bgVariant="default"
      />

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
            Ready to stop scrolling and start booking?
          </h2>
          <p className="text-lg text-bg-light/85 mb-8">
            Let's build a profitable social media funnel for your property.
          </p>
          <Button href="/en/contact" variant="primary">
            Get a free campaign proposal
          </Button>
        </div>
      </Section>
    </div>
  );
}
