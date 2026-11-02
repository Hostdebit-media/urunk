import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';
import Section from '../ui/Section';
import Hairline from '../ui/Hairline';

export default function PricingSection() {
  const monthlyRows = [
    {
      name: 'Local SEO and Google Maps',
      price: '4,000 MAD / mo',
      euro: 'approx. €370',
      scope: 'Google Business Profile management, EN/FR local pages, technical fixes, and monthly report.',
      href: '/en/seo-agency-morocco',
    },
    {
      name: 'Google Ads management',
      price: '4,000 MAD / mo',
      euro: 'approx. €370',
      scope: 'Search campaign setup and weekly keyword filtering directly inside your own Google Ads account.',
      href: '/en/google-ads-morocco',
    },
    {
      name: 'Meta Ads management',
      price: '4,000 MAD / mo',
      euro: 'approx. €370',
      scope: 'Instagram and Facebook campaigns to your website or WhatsApp plus recent-visitor retargeting.',
      href: '/en/services/meta-ads',
    },
    {
      name: 'TripAdvisor Ads sponsorship',
      price: '3,000 MAD / mo',
      euro: 'approx. €280',
      scope: 'Sponsored city placement management and regular updates to your property listing.',
      href: '/en/services/tripadvisor-ads',
    },
  ];

  return (
    <Section tone="light" id="pricing-section" className="border-t border-border-subtle">
      <div className="max-w-2xl mb-12">
        <h2 className="mb-4">
          Fixed pricing in Moroccan dirhams and written contract terms
        </h2>
        <p className="text-primary/80 leading-relaxed m-0">
          Our fees are published upfront excluding media spend. Every project starts with a written quote specifying exact deliverables and launch dates.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-10">
        {/* Main Bordered Package Card */}
        <div
          className="lg:col-span-5 bg-bg-card border border-border-subtle rounded-sm p-7 sm:p-8 flex flex-col justify-between"
          id="pricing-card-web"
        >
          <div>
            <p className="text-xs font-medium text-primary/70 mb-2 m-0">
              Delivered in 4 to 6 weeks, one-time fixed fee
            </p>
            <h3 className="mb-3">
              Complete website build
            </h3>
            <p className="font-serif text-3xl text-accent tabular-nums mb-4">
              From 12,000 MAD{' '}
              <span className="font-sans text-xs font-normal text-primary/70">(approx. €1,100)</span>
            </p>
            <p className="text-[15px] text-primary/80 leading-relaxed mb-6">
              Custom bilingual design (English and French), compressed mobile imagery, integration with your PMS booking engine (Cloudbeds, Mews, Sirvoy, Little Hotelier) or inquiry forms, and full admin handover.
            </p>
          </div>
          <div className="pt-4 border-t border-border-subtle">
            <Link
              to="/en/pricing"
              onClick={() => trackEvent('pricing_view', { package: 'Full Rate Card' })}
              className="text-sm font-medium"
            >
              View full rate card and Website + Ads package details
            </Link>
          </div>
        </div>

        {/* Ledger Rows with Dotted Leaders */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4">
            <h3 className="m-0">Month-to-month retainers</h3>
            <span className="text-xs text-primary/70">Cancel anytime with 15 days written notice</span>
          </div>
          <Hairline />
          <div className="divide-y divide-border-subtle border-b border-border-subtle">
            {monthlyRows.map((row) => (
              <div key={row.href} className="py-5 space-y-2">
                <div className="flex items-baseline gap-3">
                  <Link
                    to={row.href}
                    onClick={() => trackEvent('pricing_view', { package: row.name })}
                    className="font-serif text-lg text-primary hover:text-accent shrink-0"
                  >
                    {row.name}
                  </Link>
                  <span className="flex-1 border-b border-dotted border-border-subtle min-w-[24px]" aria-hidden="true" />
                  <span className="tabular-nums text-right shrink-0">
                    <span className="font-semibold text-accent">{row.price}</span>{' '}
                    <span className="text-xs text-primary/65">({row.euro})</span>
                  </span>
                </div>
                <p className="text-sm text-primary/75 leading-relaxed m-0">
                  {row.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p
        className="pt-6 border-t border-border-subtle text-sm text-primary/80 leading-relaxed m-0 max-w-4xl"
        id="contractual-terms"
      >
        <strong className="font-semibold text-primary">Written contract guarantees: </strong>
        you retain 100% ownership of your domain name, source code, hosting, and ad accounts with zero software lock-in. We charge 0 MAD in account setup fees: your ad spend is paid directly by card to Google, Meta, or TripAdvisor, and every monthly service can be canceled with 15 days written notice.
      </p>
    </Section>
  );
}
