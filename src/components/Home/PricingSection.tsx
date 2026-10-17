import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export default function PricingSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white" id="pricing-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Clear Service Packages & Fixed Pricing</h2>
          <p className="text-lg text-primary/75 max-w-2xl font-light">
            No hidden management surcharges or unexpected add-ons. Every package includes clear scope guidelines and contract deliverables.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" id="pricing-cards-grid">
          {/* Website Package - Full Width Header inside the grid */}
          <div className="md:col-span-2 lg:col-span-4 bg-bg-light border border-primary/10 rounded-3xl p-8 md:p-10 shadow-sm hover:border-accent/30 transition-all flex flex-col md:flex-row gap-8 items-center relative" id="pricing-card-web">
            <div className="flex-1 space-y-4">
              <div className="sticky top-20 md:relative md:top-0 bg-bg-light/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none z-10 py-4 -mx-8 px-8 md:p-0 border-b border-primary/5 md:border-b-0">
                <span className="bg-accent/10 text-accent font-bold text-xs px-3 py-1 rounded-full inline-block mb-2">Core Web Package</span>
                <h3 className="text-3xl font-serif font-bold text-primary">Website Package</h3>
              </div>
              <div className="pt-4 md:pt-0 space-y-4">
                <p className="text-accent font-bold text-2xl">
                  Starting at 12,000 MAD <span className="text-xs font-normal text-primary/60">(approx. €1,100)</span>
                  <span className="block text-xs font-normal text-primary/60 mt-1">One-time fixed quote (MAD: Moroccan Dirham)</span>
                </p>
                <p className="text-sm text-primary/75 font-light leading-relaxed">
                  A modern, mobile-responsive WordPress site built specifically for your hotel, riad, or company. Includes custom visual design, mobile speed optimization, direct booking forms, and basic SEO.
                </p>
                <Link 
                  to="/en/contact" 
                  onClick={() => trackEvent('pricing_view', { package: 'Website Package' })}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-sm w-full sm:w-auto justify-center"
                  id="web-quote-btn"
                >
                  <span>Get Website Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full bg-white p-6 rounded-2xl border border-primary/10 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Custom layouts built for conversion</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Mobile speed optimization & Core Web Vitals focus</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Direct WhatsApp & booking inquiry integration</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> On-page SEO setup & structured schema markup</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Full client admin access & easy room content editing</div>
            </div>
          </div>

          {/* SEO & Local Search Package */}
          <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm flex flex-col hover:border-accent/20 transition-all relative" id="pricing-card-seo">
            <div className="sticky top-20 md:relative md:top-0 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none z-10 py-4 -mx-6 px-6 md:p-0 border-b border-primary/5 md:border-b-0">
              <h3 className="font-serif font-bold text-2xl text-primary mb-1">SEO & Local Search</h3>
              <p className="text-accent font-bold text-xl">
                Starting at 4,000 MAD<span className="text-xs font-normal text-primary/60">/month</span>
                <span className="block text-xs font-normal text-primary/60 mt-0.5">(approx. €370/mo)</span>
              </p>
            </div>
            <div className="pt-4 md:pt-0 flex flex-col flex-grow">
              <ul className="space-y-3 text-xs text-primary/75 font-light mb-8 flex-grow">
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Google Business Profile & Google Maps optimization</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> High-intent local keyword mapping & search optimization</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Local citation building & structured business audits</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Monthly ranking updates & organic traffic analysis</li>
              </ul>
              <Link to="/en/seo-agency-morocco" className="text-xs font-bold text-accent hover:underline flex items-center gap-1 mt-auto">
                <span>View SEO Service</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Google Ads */}
          <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm flex flex-col hover:border-accent/20 transition-all relative" id="pricing-card-google-ads">
            <div className="sticky top-20 md:relative md:top-0 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none z-10 py-4 -mx-6 px-6 md:p-0 border-b border-primary/5 md:border-b-0">
              <h3 className="font-serif font-bold text-2xl text-primary mb-1">Google Ads</h3>
              <p className="text-accent font-bold text-xl">
                Starting at 4,000 MAD<span className="text-xs font-normal text-primary/60">/month</span>
                <span className="block text-xs font-normal text-primary/60 mt-0.5">(approx. €370/mo)</span>
              </p>
            </div>
            <div className="pt-4 md:pt-0 flex flex-col flex-grow">
              <ul className="space-y-3 text-xs text-primary/75 font-light mb-8 flex-grow">
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Intent keyword targeting ("hotel in marrakech")</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> High-converting search ad copywriting</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Negative keyword filters to prevent wasted spend</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Monthly transparent acquisition reports</li>
              </ul>
              <Link to="/en/services/google-ads" className="text-xs font-bold text-accent hover:underline flex items-center gap-1 mt-auto">
                <span>View Google Ads Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Meta Ads */}
          <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm flex flex-col hover:border-accent/20 transition-all relative" id="pricing-card-meta-ads">
            <div className="sticky top-20 md:relative md:top-0 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none z-10 py-4 -mx-6 px-6 md:p-0 border-b border-primary/5 md:border-b-0">
              <h3 className="font-serif font-bold text-2xl text-primary mb-1">Meta Ads</h3>
              <p className="text-accent font-bold text-xl">
                Starting at 4,000 MAD<span className="text-xs font-normal text-primary/60">/month</span>
                <span className="block text-xs font-normal text-primary/60 mt-0.5">(approx. €370/mo)</span>
              </p>
            </div>
            <div className="pt-4 md:pt-0 flex flex-col flex-grow">
              <ul className="space-y-3 text-xs text-primary/75 font-light mb-8 flex-grow">
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Visual Instagram & Facebook campaign design</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Custom retargeting for previous website visitors</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Audience targeting by travel intent & region</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Performance monitoring & monthly split tests</li>
              </ul>
              <Link to="/en/services/meta-ads" className="text-xs font-bold text-accent hover:underline flex items-center gap-1 mt-auto">
                <span>View Meta Ads Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* TripAdvisor Ads */}
          <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm flex flex-col hover:border-accent/20 transition-all relative" id="pricing-card-tripadvisor-ads">
            <div className="sticky top-20 md:relative md:top-0 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none z-10 py-4 -mx-6 px-6 md:p-0 border-b border-primary/5 md:border-b-0">
              <h3 className="font-serif font-bold text-2xl text-primary mb-1">TripAdvisor Ads</h3>
              <p className="text-accent font-bold text-xl">
                Starting at 3,000 MAD<span className="text-xs font-normal text-primary/60">/month</span>
                <span className="block text-xs font-normal text-primary/60 mt-0.5">(approx. €280/mo)</span>
              </p>
            </div>
            <div className="pt-4 md:pt-0 flex flex-col flex-grow">
              <ul className="space-y-3 text-xs text-primary/75 font-light mb-8 flex-grow">
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Sponsored listing placements above competitors</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Profile optimization (photos, descriptions, amenities)</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Review prompt strategy to boost organic search rank</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-accent shrink-0 mt-0.5" /> Bid cap controls so you never overspend</li>
              </ul>
              <Link to="/en/services/tripadvisor-ads" className="text-xs font-bold text-accent hover:underline flex items-center gap-1 mt-auto">
                <span>View TripAdvisor Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bundle Highlight */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg relative overflow-hidden mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-accent text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
              Best Value Bundle
            </span>
            <h3 className="text-3xl font-serif font-bold text-white">Website + Search Optimization Bundle</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Combine a high-performance, custom-built website with an active search strategy. Ideal for riads, hotels, and businesses looking to grow local market share quickly.
            </p>
            <p className="text-xs text-yellow-400 font-medium bg-white/10 px-4 py-2 rounded-xl inline-block border border-white/10">
              Limited client capacity. We accept only a small number of new projects each month. Contact us to check availability.
            </p>
          </div>
          
          <Link 
            to="/en/contact" 
            onClick={() => trackEvent('pricing_view', { package: 'Bundle' })}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-sm shrink-0 transition-colors shadow-md"
          >
            Get Bundle Quote
          </Link>
        </div>

        {/* Explicit Pricing & Terms Disclaimer */}
        <div className="p-6 bg-bg-light border border-primary/10 rounded-2xl text-xs text-primary/75 space-y-2 leading-relaxed">
          <p className="font-bold text-primary">Important Pricing & Terms Disclaimers:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ad management fees do not include ad budget unless confirmed otherwise in your contract.</li>
            <li>Your ad budget is paid directly to Google, Meta, or TripAdvisor via your own account billing.</li>
            <li>Website projects require a detailed quote, written contract, and agreed scope before work starts.</li>
            <li>Ad management contracts can be paused or cancelled at any time with 15 days' written notice.</li>
            <li>The Website + Ad Channel bundle is best suited for businesses requiring both a new web platform and immediate qualified traffic.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
