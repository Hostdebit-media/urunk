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

export default function TripadvisorAds() {
  const faqs = [
    {
      q: "How do TripAdvisor Sponsored Placements work?",
      a: "Sponsored Placements push your property to the top of the search results for your destination (e.g., 'Hotels in Marrakech'). You only pay when a user clicks on your ad.",
    },
    {
      q: "Is it worth it if I already have good reviews?",
      a: "Yes. If your destination is highly competitive, even a 5-star rating might leave you on page 2 or 3 of the organic rankings. Ads guarantee visibility so travelers actually see those great reviews.",
    },
    {
      q: "Can you help improve our ranking organically too?",
      a: "Yes. Part of our service involves auditing your listing, advising on photo order, amenity tags, and implementing a strategy to generate more consistent, high-quality guest reviews.",
    },
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

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">Marketplace advertising</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            TripAdvisor Ads for Hotels in Morocco
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Jump to the top of your local destination page and capture travelers during their planning phase.
          </p>
          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">What we do:</strong> Urunk manages TripAdvisor Sponsored Placements and listing optimization for hospitality brands. We help hotels and riads secure premium visibility in competitive markets, turning their strong reputation into a consistent driver of direct bookings.
            </Callout>
          </div>
          <Button href="/en/contact" variant="primary">
            Start dominating TripAdvisor
          </Button>
        </div>
      </Section>

      {/* Problem Section */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-6 text-balance">
              Great reviews don't matter if no one sees them.
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                You work hard to provide an exceptional guest experience, earning glowing 5-star reviews. But in markets like Marrakech or Casablanca, hundreds of properties are competing for attention. If you are stuck on page 3, travelers simply won't find you.
              </p>
              <p>
                TripAdvisor ads allow you to bypass the algorithm. By securing top placements, you ensure that high-intent travelers see your property first when they are building their itineraries.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Signs you need TripAdvisor Ads:
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 m-0">You have a high rating, but low page traffic</p>
              <p className="py-3.5 m-0">Competitors with worse reviews are outranking you</p>
              <p className="py-3.5 pb-0 m-0">You are highly dependent on Booking.com for visibility</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            Comprehensive Listing Growth.
          </h2>
        </div>

        <div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">01</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Sponsored Placements</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We manage your bidding strategy to ensure you appear in the top sponsored slots for your specific destination and property type, maximizing impressions without overspending.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">02</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Listing Optimization</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We optimize your primary photo selections, amenity tags, and descriptions to ensure that when travelers click your ad, they are convinced to book.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">03</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Review Strategy Consulting</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                We provide templates and processes to help your on-the-ground staff generate more positive reviews, bolstering both your organic rank and ad conversion rate.
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
                  <h3 className="font-serif text-primary mb-2">Profile Audit</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We review your current ranking, competitor positioning, and listing quality.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">2</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Campaign Launch</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We set up targeted campaigns, allocating budget intelligently across high-traffic days.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">3</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Performance Tracking</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    We monitor click-through rates and provide simple monthly reports on visibility and direct inquiry growth.
                  </p>
                </div>
              </div>
              <Hairline />
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-5">
            <p className="text-sm text-accent font-medium m-0">Management fee</p>
            <h3 className="font-serif text-3xl text-primary tabular-nums m-0">
              From 3,000 MAD<span className="text-lg text-primary/70">/mo</span>
            </h3>
            <p className="text-primary/80 leading-relaxed m-0">
              Plus your chosen ad spend. No long-term contracts.
            </p>
            <Button href="/en/contact" variant="dark" className="w-full">
              Boost your visibility
            </Button>
          </div>
        </div>
      </Section>

      {/* Case Study Proof */}
      <Section tone="light">
        <div className="max-w-3xl">
          <h2 className="font-serif text-primary mb-4">Strategic Ad Modeling</h2>
          <p className="text-primary/85 leading-relaxed mb-6 max-w-[65ch]">
            Explore our strategic framework illustrating how TripAdvisor ad placement and custom web funnels can elevate a tour operator's visibility and acquisition structure.
          </p>
          <p className="m-0">
            <Link to="/en/work/travel-morocco-services">
              Tour operator TripAdvisor and web funnel framework
            </Link>
          </p>
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker="Hospitality acquisition hubs"
        title="TripAdvisor Ads & Direct Booking Specializations in Morocco"
        subtitle="Explore destination-specific TripAdvisor Sponsored Placements, Google Hotel Ads, and direct booking strategies across Marrakech and Agadir."
        links={getMatrixLinksForService('tripadvisor-ads', 'en')}
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
            Ready to stand out?
          </h2>
          <p className="text-lg text-bg-light/85 mb-8">
            Get the visibility your reviews deserve.
          </p>
          <Button href="/en/contact" variant="primary">
            Get a free ads proposal
          </Button>
        </div>
      </Section>
    </div>
  );
}
