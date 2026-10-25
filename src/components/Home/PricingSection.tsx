import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

export default function PricingSection() {
  const monthlyRows = [
    {
      name: 'Local SEO and Google Maps',
      price: '4,000 MAD / mo',
      euro: 'approx. €370',
      scope: 'Google Business Profile management, EN/FR local pages, technical fixes, and monthly report.',
      href: '/en/seo-agency-morocco'
    },
    {
      name: 'Google Ads management',
      price: '4,000 MAD / mo',
      euro: 'approx. €370',
      scope: 'Search campaign setup and weekly keyword filtering directly inside your own Google Ads account.',
      href: '/en/google-ads-morocco'
    },
    {
      name: 'Meta Ads management',
      price: '4,000 MAD / mo',
      euro: 'approx. €370',
      scope: 'Instagram and Facebook campaigns to your website or WhatsApp plus recent-visitor retargeting.',
      href: '/en/services/meta-ads'
    },
    {
      name: 'TripAdvisor Ads sponsorship',
      price: '3,000 MAD / mo',
      euro: 'approx. €280',
      scope: 'Sponsored city placement management and regular updates to your property listing.',
      href: '/en/services/tripadvisor-ads'
    }
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-white border-t border-primary/10" id="pricing-section">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-primary [text-wrap:balance]">
            Fixed pricing in Moroccan dirhams and written contract terms
          </h2>
          <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
            Our fees are published upfront excluding media spend. Every project starts with a written quote specifying exact deliverables and launch dates.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* One-Time Website Project */}
          <div
            className="lg:col-span-5 bg-bg-light border border-primary/15 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            id="pricing-card-web"
          >
            <div>
              <p className="text-xs font-medium text-primary/65 mb-2">
                Delivered in 4 to 6 weeks · One-time fixed fee
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2">
                Complete website build
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-accent tabular-nums mb-4">
                From 12,000 MAD{' '}
                <span className="text-xs font-normal text-primary/70">(approx. €1,100)</span>
              </p>
              <p className="text-sm text-primary/80 leading-relaxed mb-4">
                Custom bilingual design (English and French), compressed mobile imagery, integration with your PMS booking engine (Cloudbeds, Mews, Sirvoy, Little Hotelier) or inquiry forms, and full admin handover.
              </p>
            </div>
            <p className="text-xs pt-4 border-t border-primary/10">
              <Link
                to="/en/pricing"
                onClick={() => trackEvent('pricing_view', { package: 'Full Rate Card' })}
                className="font-semibold text-accent hover:underline underline-offset-4"
              >
                View full rate card and Website + Ads package details
              </Link>
            </p>
          </div>

          {/* Unified Monthly Rate Sheet Table */}
          <div className="lg:col-span-7 border border-primary/15 rounded-xl overflow-hidden bg-white">
            <div className="px-5 py-3.5 bg-bg-alt border-b border-primary/10 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif font-bold text-base text-primary">
                Month-to-month retainers
              </h3>
              <span className="text-xs text-primary/70">Cancel anytime with 15 days written notice</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <tbody className="divide-y divide-primary/10">
                  {monthlyRows.map((row) => (
                    <tr key={row.href} className="hover:bg-bg-light/60 transition-colors">
                      <td className="py-4 pl-5 pr-3 align-top sm:w-48">
                        <Link
                          to={row.href}
                          onClick={() => trackEvent('pricing_view', { package: row.name })}
                          className="font-serif font-bold text-primary hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4 block"
                        >
                          {row.name}
                        </Link>
                      </td>
                      <td className="py-4 px-3 align-top whitespace-nowrap tabular-nums sm:w-40">
                        <span className="font-bold text-accent block">{row.price}</span>
                        <span className="text-xs text-primary/60">{row.euro}</span>
                      </td>
                      <td className="py-4 pl-3 pr-5 align-top text-xs sm:text-sm text-primary/80 leading-relaxed">
                        {row.scope}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Single Cohesive Contractual Guarantees Strip */}
        <div
          className="bg-bg-alt/70 border border-primary/10 rounded-xl p-5 sm:p-6 text-sm text-primary/85 leading-relaxed"
          id="contractual-terms"
        >
          <strong className="font-serif font-bold text-primary">Written contract guarantees: </strong>
          you retain 100% ownership of your domain name, source code, hosting, and ad accounts with zero software lock-in. We charge 0 MAD in account setup fees: your ad spend is paid directly by card to Google, Meta, or TripAdvisor, and every monthly service can be canceled with 15 days written notice.
        </div>
      </div>
    </section>
  );
}
