import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Shield, ArrowRight, CheckCircle2, Building, Globe, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full bg-bg text-primary" id="about-page">
      <Helmet>
        <title>About Urunk | Hospitality Digital Marketing Agency</title>
        <meta name="description" content="Meet Urunk: A specialized digital growth agency engineered for Moroccan hotels and riads. We turn organic searchers into direct guests with high-performance web engineering and advanced SEO." />
        <link rel="canonical" href="https://urunk.com/en/about" />
        <link rel="alternate" hrefLang="en" href="https://urunk.com/en/about" />
        <link rel="alternate" hrefLang="fr" href="https://urunk.com/a-propos" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative bg-primary text-white" id="about-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10" id="about-hero-tag">
            About Urunk Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6" id="about-hero-title">
            Engineered for <span className="text-yellow-400 italic">Hospitality Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed" id="about-hero-desc">
            We are not a traditional, slow-moving advertising agency. We are a specialized team of developers, SEO engineers, and conversion strategists dedicated to helping Moroccan hotels, luxury riads, and boutique travel brands break free from OTA dependency and capture direct booking revenue.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="about-philosophy">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6" id="about-phil-title">
              Why We Focus Exclusively on Hospitality & High-End Tourism
            </h2>
            <div className="space-y-6 text-primary/80 font-light leading-relaxed" id="about-phil-content">
              <p>
                Morocco's tourism sector is experiencing a historic renaissance. From the vibrant alleyways of the Marrakech Medina to the majestic dunes of Merzouga and the elegant coastal retreats of Taghazout, travelers from around the globe are seeking authentic Moroccan experiences. Yet, many independent riads, boutique hotels, and luxury desert camps continue to lose 18% to 25% of their gross revenue to online travel agencies (OTAs) simply because their own digital architecture is inadequate.
              </p>
              <p>
                We founded Urunk because we observed a profound disconnect in the Moroccan digital landscape. Property owners were routinely sold generic, slow, or outdated WordPress templates by generalist marketing agencies. These templates had zero understanding of hotel property management systems (PMS), direct booking engine integrations, multi-currency payment gateways, or competitive travel SEO. The result was high web traffic but incredibly low conversion rates, forcing properties to remain entirely dependent on OTAs for occupancy.
              </p>
              <p>
                Our mission is unambiguous: To provide luxury riads, boutique hotels, and premium tour operators with the sovereign digital infrastructure required to capture high-intent international travelers, streamline direct reservations, and dramatically expand their net operating margins. We believe that your website should not be a static brochure; it must be the single most profitable sales channel in your entire business.
              </p>
            </div>
            <Link 
              to="/en/services/website-design" 
              className="mt-8 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
              id="about-phil-cta"
            >
              Learn about our Website Design & Booking Engines <ArrowRight size={18} />
            </Link>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6" id="about-pillars-cards">
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm" id="phil-card-1">
              <Target className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-2">Data-Driven Precision</h3>
              <p className="text-primary/70 text-sm leading-relaxed">We never guess. Every visual layout, keyword target, and programmatic ad bid is informed by rigorous user telemetry, conversion path analysis, and search intent modeling tailored specifically to the luxury travel sector.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm" id="phil-card-2">
              <Users className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-2">Bilingual & Cross-Cultural Mastery</h3>
              <p className="text-primary/70 text-sm leading-relaxed">Headquartered in Morocco with deep international fluency, we bridge the gap between local Moroccan hospitality charm and the exacting digital and UX expectations of European, British, North American, and Gulf travelers.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm" id="phil-card-3">
              <Shield className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-2">Sovereign Performance First</h3>
              <p className="text-primary/70 text-sm leading-relaxed">We build lightning-fast web assets powered by cutting-edge frontend stacks that Google's core Web Vitals algorithms rank #1 and that prospective guests find frictionless to navigate and book on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The OTA Trap Section (New) */}
      <section className="py-20 bg-primary text-white px-6" id="about-ota-trap">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider block mb-2">The Real Economics of Booking</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The True Cost of the OTA Trap</h2>
              <p className="text-white/80 font-light text-sm leading-relaxed">
                Many hoteliers view OTA commissions as a simple, unavoidable cost of marketing. Let's look at the actual numbers.
              </p>
            </div>
            <div className="md:col-span-7 space-y-6 text-white/90 font-light leading-relaxed text-sm">
              <p>
                Suppose a boutique property with 10 rooms generates <strong>400,000 MAD</strong> in monthly booking revenue. If 85% of those bookings come through OTAs like Booking.com, Expedia, or TripAdvisor, the property pays roughly 18% to 22% in commissions.
              </p>
              <div className="bg-white/5 border-l-4 border-yellow-400 p-6 rounded-r-xl my-4">
                <p className="font-semibold text-lg text-yellow-400 mb-2">The Annual Commission Drain</p>
                <p className="text-white/80">
                  That equals over <strong>75,000 MAD</strong> paid out in commissions every single month—or a staggering <strong>900,000 MAD</strong> lost every year. This is capital that could have funded physical property expansions, lavish guest amenities, staff salary increases, or direct profit.
                </p>
              </div>
              <p>
                Urunk exists to rewrite this balance sheet. By establishing a professional, high-converting digital footprint, we systematically divert travelers away from third-party channels directly onto your website. A guest booking directly with you costs a fraction of an OTA fee, instantly boosting your net profit margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Depth Section: Our Core Pillars */}
      <section className="py-24 bg-primary/5 px-6 border-b border-primary/10" id="about-pillars">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Urunk Standard</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-4">Our Four Pillars of Hospitality Digital Engineering</h2>
            <p className="text-primary/70 font-light">How we transform underperforming hotel websites into automated direct revenue generation engines.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-1">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><Zap size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">Architectural Speed</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                Slow sites kill bookings. We completely eliminate sluggish pages by optimizing server stacks, compressing media assets, and building with lightweight code. Our websites load in under one second, significantly decreasing booking abandonment and boosting conversion rates on mobile devices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><Globe size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">Organic Search Visibility</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                Through comprehensive local keyword strategies and technical SEO audits, we position your hotel or riad at the top of organic search results for travelers looking for high-intent queries like "luxury riad in marrakech" or "best desert camp in merzouga." We capture organic traffic without paid ads.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><Building size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">Seamless PMS Sync</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                An isolated website is useless. We seamlessly integrate frictionless booking engines directly with industry-leading Property Management Systems (PMS) like Cloudbeds, Mews, Little Hotelier, or custom APIs. Your live room availability and real-time rates remain perfectly synchronized across all systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><BarChart3 size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">High-ROAS Paid Media</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                We design and manage highly focused Google Ads, Meta Ads (Instagram and Facebook), and TripAdvisor campaigns. By targeting active travelers at the precise moment of booking intent or re-engaging past website visitors, we maintain exceptional return on ad spend (ROAS).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Language & International Strategy Section (New) */}
      <section className="py-24 bg-white px-6" id="about-multilang">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Global Reach</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Bespoke Multi-Language Architecture</h2>
            <p className="text-primary/70 font-light mt-3">
              We engineer authentic multi-language experiences that speak directly to international visitors, build trust, and drive cross-border conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-primary/5 bg-primary/5">
              <h3 className="font-bold text-lg text-primary mb-3">Cultural Copywriting</h3>
              <p className="text-primary/75 text-sm leading-relaxed">
                Automated translation widgets (like Google Translate) look unprofessional and dilute trust. We write human-translated, elegant copy that respects regional nuances and communicates the luxury and heritage of your Moroccan property perfectly.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-primary/5 bg-primary/5">
              <h3 className="font-bold text-lg text-primary mb-3">Localized Multilingual SEO</h3>
              <p className="text-primary/75 text-sm leading-relaxed">
                We configure perfect hreflang tags, localized meta descriptions, and regional keyword structures. Whether a guest is searching in French from Paris, English from London, or Arabic from Dubai, they will find the exact version of your site tailored to them.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-primary/5 bg-primary/5">
              <h3 className="font-bold text-lg text-primary mb-3">Dynamic Multi-Currency Display</h3>
              <p className="text-primary/75 text-sm leading-relaxed">
                We eliminate booking friction by allowing prospective guests to view pricing in their local currency (MAD, EUR, USD, GBP) and securely pay using Moroccan credit cards, international visas, Mastercards, or modern Apple Pay and PayPal systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Framework Sections: Methodology, The Urunk Difference & Transparency */}
      <section className="py-24 bg-white px-6 border-t border-primary/10" id="about-methodology-framework">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* 1. Our Methodology */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Engineering Blueprint</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Our Methodology: Blending High-End Design & Technical SEO</h2>
              <p className="text-primary/80 font-light leading-relaxed">
                Most agencies force hoteliers to choose between a visually stunning site that fails to generate search traffic, or an SEO-optimized site that looks generic and outdated. At Urunk, we bridge this divide through our 4 to 6 week execution methodology.
              </p>
              <div className="space-y-4 text-sm font-light text-primary/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                  <span><strong>Phase 1: Conversion Architecture (Weeks 1-2):</strong> Custom WordPress engineering starting at 12,000 MAD (≈€1,100) with custom booking engine integration, multi-currency support, and Core Web Vitals optimization under 1 second.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                  <span><strong>Phase 2: Intent-Driven Local SEO (Weeks 3-4):</strong> Structured schema markup, localized multilingual keyword modeling, and Google Business Profile optimization to capture high-intent travelers.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                  <span><strong>Phase 3: Targeted Paid Acquisition (Weeks 5-6):</strong> High-ROAS Google Ads & Meta Ads management at 4,000 MAD/mo (≈€370) or TripAdvisor Ads at 3,000 MAD/mo to capture immediate direct bookings.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary">The Urunk Difference</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Generalist digital agencies treat a boutique riad the same way they treat a local retail store. Hospitality requires deep domain knowledge of Property Management Systems (Cloudbeds, Mews), room availability inventory, dynamic seasonal pricing, and international guest booking behavior.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-primary/10 text-center">
                  <span className="text-3xl font-serif font-bold text-accent block">+40%</span>
                  <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Direct Bookings Boost</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-primary/10 text-center">
                  <span className="text-3xl font-serif font-bold text-accent block">-35%</span>
                  <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Lower Cost Per Inquiry</span>
                </div>
              </div>
              <p className="text-xs text-primary/60 font-light leading-relaxed">
                By bypassing OTA commissions of 15% to 25%, our specialized approach delivers an immediate, compound return on investment for independent Moroccan properties.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership & Expertise Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-primary/10" id="about-leadership">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Rooted in Morocco</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Operating at the Intersection of Culture & Digital Innovation
            </h2>
            <p className="text-primary/80 font-light leading-relaxed">
              Based between Marrakech, Casablanca, and Rabat, our team combines deep local immersion in Morocco's legendary hospitality ecosystem with world-class software engineering discipline. We understand the unique operational and marketing challenges faced by riad owners in the historic medinas, luxury resort operators along the Atlantic coast, desert camp managers in the Sahara, and specialized tour companies navigating seasonal travel fluctuations.
            </p>
            <p className="text-primary/80 font-light leading-relaxed">
              By eliminating reliance on third-party intermediaries and digital middlemen, we empower Moroccan hospitality brands to reclaim absolute control over their guest relationships, guest data ownership, and net profit margins. We build permanent digital assets that grow in value over time.
            </p>
            <div className="flex flex-wrap gap-4 pt-2" id="about-locations-tags">
              <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg">
                <CheckCircle2 size={16} className="text-accent" /> Marrakech Hub
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg">
                <CheckCircle2 size={16} className="text-accent" /> Casablanca Office
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg">
                <CheckCircle2 size={16} className="text-accent" /> International Standards
              </div>
            </div>
          </div>
          <div className="bg-primary text-white p-10 rounded-3xl relative overflow-hidden shadow-xl" id="transparency-box">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-serif font-bold mb-6">Our Commitment to Transparency</h3>
            <ul className="space-y-4 font-light text-white/90 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                <span><strong>90-Day Guarantee & 15 Days' Notice:</strong> Our retainer services are backed by a 90-day performance guarantee. Cancel anytime with a simple 15 days' notice—no lock-in.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                <span><strong>100% Asset & Ad-Account Ownership:</strong> You retain complete ownership of your website source code, Google Ads, Meta Ads, and TripAdvisor ad accounts. If you ever pause our collaboration, all data and campaigns remain entirely yours.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                <span><strong>Direct Senior Access:</strong> You work directly with senior software engineers and seasoned hospitality growth strategists—never outsourced junior account managers.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center px-6" id="about-cta-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to scale your direct bookings?</h2>
          <p className="text-lg text-white/80 font-light mb-10">Stop losing your hard-earned margins to online travel agencies. Let our specialized team audit your current digital presence and build a roadmap for direct booking growth.</p>
          <Link 
            to="/en/contact" 
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg"
            id="about-cta-btn"
          >
            Get Your Free Direct Booking Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
