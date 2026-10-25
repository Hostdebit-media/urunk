import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export default function PricingSection() {
  const monthlyOffers = [
    {
      id: 'pricing-card-seo',
      name: 'SEO and Google Maps',
      price: '4,000 MAD',
      euro: 'approx. €370 / mo',
      href: '/en/seo-agency-morocco',
      cta: 'View SEO service',
      track: 'SEO & Local Search',
      items: [
        'Google Business Profile and Google Maps listing optimization',
        'Local keyword targeting across English and French searches',
        'Technical fixes, schema markup, and business citation consistency',
        'Clear monthly report on search rankings and direct inquiries'
      ]
    },
    {
      id: 'pricing-card-google-ads',
      name: 'Google Ads',
      price: '4,000 MAD',
      euro: 'approx. €370 / mo',
      href: '/en/services/google-ads',
      cta: 'View Google Ads details',
      track: 'Google Ads',
      items: [
        'Search campaigns targeting active stay or B2B service queries',
        'Ad copy written around direct bookings or quote requests',
        'Negative keyword filtering to prevent wasted clicks',
        'Monthly tracking of conversions and cost per inquiry'
      ]
    },
    {
      id: 'pricing-card-meta-ads',
      name: 'Meta Ads',
      price: '4,000 MAD',
      euro: 'approx. €370 / mo',
      href: '/en/services/meta-ads',
      cta: 'View Meta Ads details',
      track: 'Meta Ads',
      items: [
        'Instagram and Facebook visual campaigns to your site or WhatsApp',
        'Retargeting visitors who viewed rooms or rates without booking',
        'Geographic audience targeting by traveler origin markets',
        'Ongoing creative testing and weekly bid adjustments'
      ]
    },
    {
      id: 'pricing-card-tripadvisor-ads',
      name: 'TripAdvisor Ads',
      price: '3,000 MAD',
      euro: 'approx. €280 / mo',
      href: '/en/services/tripadvisor-ads',
      cta: 'View TripAdvisor details',
      track: 'TripAdvisor Ads',
      items: [
        'Sponsored placements above competing properties in your city',
        'Full property profile update (photos, descriptions, amenities)',
        'Guest review collection workflow to strengthen organic visibility',
        'Strict monthly bid caps so spend stays within budget'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-primary/10" id="pricing-section">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium text-accent mb-3">
            Pricing and contractual terms
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-primary">
            Fixed-price packages with zero commission on bookings
          </h2>
          <p className="text-base md:text-lg text-primary/75 leading-relaxed">
            Our fees are published upfront in Moroccan Dirhams. Every project starts with a written quote detailing exact deliverables and launch dates.
          </p>
        </div>

        {/* Core Website Offer */}
        <div
          className="bg-bg-light border border-border-subtle rounded-2xl p-7 md:p-10 mb-6 grid lg:grid-cols-12 gap-8 items-center"
          id="pricing-card-web"
        >
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold text-accent">
              Delivered turnkey in 4 to 6 weeks
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Hotel, Riad, or SME Website Package
            </h3>
            <div className="pt-1">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                Starting at 12,000 MAD{' '}
                <span className="text-sm font-normal text-primary/70">(approx. €1,100, one-time fixed quote)</span>
              </p>
            </div>
            <p className="text-sm text-primary/80 leading-relaxed">
              Complete design and development of a fast mobile website for your riad, hotel, or company, ready to capture direct bookings or quote inquiries from day one.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/en/contact"
                onClick={() => trackEvent('pricing_view', { package: 'Website Package' })}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                id="web-quote-btn"
              >
                <span>Request website quote</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/en/services/bundle-site-ads"
                className="text-sm font-semibold text-primary hover:text-accent underline underline-offset-4 transition-colors"
              >
                Compare the Website + Ads bundle
              </Link>
            </div>
          </div>

          <ul className="lg:col-span-6 bg-white p-6 rounded-xl border border-primary/10 space-y-3 text-sm text-primary/85">
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Custom bilingual design (English and French) built for fast mobile browsing</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Direct connection to your booking engine (Cloudbeds, Mews, Sirvoy, Little Hotelier) or WhatsApp</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Compressed AVIF/WebP imagery and clean code for reliable loading on mobile networks</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>On-page SEO setup, Schema.org hospitality markup, and full client admin access</span>
            </li>
          </ul>
        </div>

        {/* 4 Side-by-Side Monthly Retainer Comparisons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" id="pricing-cards-grid">
          {monthlyOffers.map((offer) => (
            <div
              key={offer.id}
              id={offer.id}
              className="bg-white border border-border-subtle rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3">
                  {offer.name}
                </h3>
                <div className="pb-4 mb-5 border-b border-primary/10">
                  <p className="text-2xl font-bold text-accent leading-none mb-1">
                    {offer.price} <span className="text-xs font-normal text-primary/75">/ mo</span>
                  </p>
                  <span className="text-xs text-primary/65">{offer.euro} · Month-to-month</span>
                </div>
                <ul className="space-y-3 text-xs text-primary/80 leading-relaxed mb-6">
                  {offer.items.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={offer.href}
                onClick={() => trackEvent('pricing_view', { package: offer.track })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover pt-3 border-t border-primary/10"
              >
                <span>{offer.cta}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Single Consolidated Contractual Commitments Section */}
        <div className="pt-12 border-t border-primary/15" id="contractual-terms">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">
              Contractual commitments
            </h3>
            <p className="text-sm text-primary/75 leading-relaxed">
              Four clear terms written into every agreement to protect your budget and technical independence.
            </p>
          </div>

          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                100% asset ownership
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                You retain full legal ownership of your domain name, source code, hosting environment, and ad accounts. Zero recurring software license fees.
              </dd>
            </div>

            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                15 days written notice
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                Monthly SEO and ad management retainers carry no long-term lock-in. You can pause or stop at any time with 15 days written notice.
              </dd>
            </div>

            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                0 MAD onboarding fees
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                No hidden setup charges. Your media budget is billed directly by Google, Meta, or TripAdvisor to your own account card.
              </dd>
            </div>

            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                Written timeline and 90-day review
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                Your 4 to 6 week website launch schedule and initial 90-day tracking milestones are defined in writing in your project quote before work begins.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
