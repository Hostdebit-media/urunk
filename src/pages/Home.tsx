import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Search, TrendingUp, Smartphone, Globe, Star, MapPin, Compass, Zap, ShieldCheck, Percent, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const ProofSection = lazy(() => import('../components/Home/ProofSection'));
const SectorsAndHubs = lazy(() => import('../components/Home/SectorsAndHubs'));
const PortfolioSection = lazy(() => import('../components/Home/PortfolioSection'));
const PricingSection = lazy(() => import('../components/Home/PricingSection'));
const FaqSection = lazy(() => import('../components/Home/FaqSection'));
const BottomFormSection = lazy(() => import('../components/Home/BottomFormSection'));

function SectionSkeleton() {
  return (
    <div className="py-20 flex justify-center items-center min-h-[400px]">
      <div className="w-8 h-8 border-4 border-primary/20 border-t-accent rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Digital Growth Agency Morocco | Web Design & SEO | Urunk</title>
        <meta name="description" content="Urunk is a digital growth agency in Morocco. We deliver high-speed web design, advanced Local SEO, Google Ads, and custom acquisition channels for businesses and hospitality brands." />
        <link rel="canonical" href="https://urunk.com/en/" />
        <link rel="alternate" hrefLang="en" href="https://urunk.com/en/" />
        <link rel="alternate" hrefLang="fr" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://urunk.com/en/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Urunk",
              "image": "https://urunk.com/og-image.jpg",
              "@id": "https://urunk.com/en/#organization",
              "url": "https://urunk.com/en/",
              "telephone": "+212500000000",
              "priceRange": "4000 MAD - 12000 MAD",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gueliz",
                "addressLocality": "Marrakech",
                "addressRegion": "Marrakech-Safi",
                "postalCode": "40000",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.629472,
                "longitude": -7.981111
              },
              "sameAs": [
                "https://www.linkedin.com/company/urunk"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "department": [
                {
                  "@type": "ProfessionalService",
                  "name": "Urunk Casablanca",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Anfa",
                    "addressLocality": "Casablanca",
                    "addressRegion": "Casablanca-Settat",
                    "postalCode": "20000",
                    "addressCountry": "MA"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.5731,
                    "longitude": -7.5898
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden bg-bg" id="hero-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-8 border border-accent/20" id="hero-badge">
            Digital Growth Agency for Moroccan Businesses & Hospitality
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary max-w-5xl leading-tight md:leading-tight mb-8" id="hero-h1">
            Increase your <span className="text-accent italic font-semibold">direct bookings</span> — Web Agency, SEO & Digital Marketing in Morocco
          </h1>
          <p className="text-lg md:text-xl text-primary/70 max-w-3xl font-light leading-relaxed mb-12" id="hero-subtext">
            Urunk is a Morocco-based digital growth agency specializing in high-performance websites, SEO, Google Maps optimization, and digital acquisition for hotels, riads, tour operators, and businesses across Morocco to bypass high OTA commissions.
          </p>
          
          <div className="flex flex-col items-center gap-4" id="hero-actions-container">
            <div className="flex flex-col sm:flex-row items-center gap-4" id="hero-actions">
              <Link 
                to="/en/contact" 
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5"
                id="hero-cta-btn"
              >
                Get My Free Quote <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/212668802096" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-accent/30 hover:text-accent transition-all"
                id="hero-whatsapp-btn"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            {/* Phase 4 item 2: Trust strip under CTAs */}
            <div className="mt-4 text-xs text-primary/60 font-medium tracking-wide flex flex-wrap justify-center gap-x-4 gap-y-1" id="hero-trust-strip">
              <span>✓ 90-Day Performance Guarantee</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ 100% Asset Ownership</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Month-to-Month Retainers</span>
            </div>
          </div>

          {/* Majestic Hero Image Showcase */}
          <div className="mt-16 w-full max-w-5xl rounded-2xl overflow-hidden border border-primary/10 shadow-2xl relative group aspect-video md:aspect-[21/9]" id="hero-image-container">
            <ImageWithSkeleton 
              src="/images/optimized/art-house-hero-800.jpg"
              imageName="art-house-hero"
              alt="Urunk Moroccan Digital Growth Agency Hero" 
              className="w-full h-full"
              imgClassName="object-cover group-hover:scale-102 transition-transform duration-700"
              priority={true}
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={514}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-center gap-4 text-white">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium tracking-wide drop-shadow-sm">High-Performance Web Development & Advanced SEO</span>
              </div>
              <span className="text-xs text-white/75 font-mono drop-shadow-sm">EST. 2026 / MOROCCO</span>
            </div>
          </div>          <div className="mt-20 pt-10 border-t border-primary/10 w-full max-w-4xl flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale" id="hero-quick-capabilities">
             <div className="flex items-center gap-2 font-bold text-primary/80"><Globe size={20} /> High-Speed Web Design</div>
             <div className="flex items-center gap-2 font-bold text-primary/80"><Search size={20} /> Local & National SEO</div>
             <div className="flex items-center gap-2 font-bold text-primary/80"><TrendingUp size={20} /> Google Ads Management</div>
          </div>
        </div>
      </section>

      {/* 2. OTA-Dependency Section (Alternative Directe) */}
      <section className="bg-primary text-white py-24 px-6 relative overflow-hidden" id="ota-dependence-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_60%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
                Hospitality Specialization
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Reduce Your Dependency on <span className="text-yellow-400 italic font-semibold">OTA Commissions</span>
              </h2>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Relying solely on Booking.com or Expedia limits your net profitability. At Urunk, we build digital systems that help you increase your share of direct bookings.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Custom integrations with booking engines (Cloudbeds, Mews, etc.)",
                  "Mobile-first, intuitive user experiences for global travelers",
                  "Fully optimized for outstanding Core Web Vitals performance",
                  "Local SEO to optimize Google Maps and showcase TripAdvisor reviews"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 font-light">
                    <Check className="text-yellow-400 mt-0.5 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/en/hotel-digital-marketing" 
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-bg-alt transition-colors"
              >
                Discover Our Solutions <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6" id="ota-panels-container">
              {/* LEFT Panel (Muted Red) */}
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">Via OTA</h3>
                  <p className="text-sm text-white/85 font-light leading-relaxed">
                    15–25% commission per booking.
                  </p>
                </div>
                <span className="text-[11px] text-red-300/60 mt-4 block italic">
                  Rates vary by platform and contract.
                </span>
              </div>

              {/* RIGHT Panel (Muted Green) */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-emerald-300 mb-2">Direct with Urunk</h3>
                  <p className="text-sm text-white/95 font-medium leading-relaxed">
                    0% OTA commission.
                  </p>
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-4 block font-semibold uppercase tracking-wider">
                  Optimized direct channel
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center border-t border-white/10 pt-8">
            <p className="text-sm text-white/70">
              We design direct acquisition strategies to capture demand at the source.{" "}
              <Link to="/en/work" className="text-accent hover:underline font-semibold inline-flex items-center gap-1.5 ml-1">
                View our portfolio <ArrowRight size={14} />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Services / "What We Do" */}
      <section className="py-24 bg-white relative border-t border-primary/10" id="services-block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20" id="services-eyebrow">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6" id="services-title">
              Web Design, SEO & Digital Marketing in Morocco
            </h2>
            <p className="text-lg text-primary/70 max-w-4xl mx-auto font-light leading-relaxed" id="services-intro-paragraph">
              Urunk provides website design, technical SEO, local SEO, Google Business Profile optimization, Google Ads, Meta Ads and conversion optimization for businesses across Morocco. Our strongest expertise is helping hotels, riads, tour operators and hospitality brands increase qualified traffic, leads and direct bookings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
            {[
              {
                title: "Web Design & WordPress",
                desc: "We design high-speed, high-converting websites, fully integrated with your direct booking tools for optimal Core Web Vitals.",
                icon: <Smartphone size={24} />,
                link: "/en/services/website-design"
              },
              {
                title: "Local SEO & Google Maps",
                desc: "Dominate local Google search results and capture travelers and local leads exactly when they are looking for your services.",
                icon: <Search size={24} />,
                link: "/en/seo-agency-morocco"
              },
              {
                title: "Google Ads & Meta Ads",
                desc: "Generate an immediate and measurable stream of direct business opportunities and bookings through targeted ad campaigns.",
                icon: <Globe size={24} />,
                link: "/en/google-ads-morocco"
              }
            ].map((service, idx) => (
              <Link key={idx} to={service.link} className="block group" id={`service-link-${idx}`}>
                <div className="bg-bg p-8 rounded-2xl border border-primary/10 hover:border-accent/40 transition-all h-full shadow-xs hover:shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-primary/70 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <span className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore this Service <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Region/niche intent as chip row below */}
          <div className="mt-16 text-center border-t border-primary/5 pt-10" id="city-intent-chips">
            <p className="text-xs text-primary/50 font-bold uppercase tracking-wider mb-4">Popular Searches & Regional Expertise</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Marrakech Riad SEO", path: "/en/riad-seo-marrakech" },
                { name: "Casablanca SEO", path: "/en/local-seo-casablanca" },
                { name: "Hotel SEO", path: "/en/hotel-seo" },
                { name: "TripAdvisor Ads", path: "/en/services/tripadvisor-ads" }
              ].map((chip, idx) => (
                <Link 
                  key={idx}
                  to={chip.path}
                  className="px-4 py-2 rounded-full bg-bg border border-primary/10 hover:border-accent hover:text-accent text-sm font-semibold text-primary/80 transition-all shadow-xs hover:scale-[1.03]"
                >
                  {chip.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3b. 3 Simple Steps Section (Horizontal Steps) */}
      <section className="py-24 bg-bg border-t border-primary/10" id="three-steps-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Your Direct Transition in <span className="text-accent italic font-semibold">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
              A transparent, high-precision path designed to protect and maximize your investment at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                step: "01",
                title: "Technical Performance Audit",
                desc: "A comprehensive, complimentary review of your current conversion paths, organic search reach, and speed optimizations."
              },
              {
                step: "02",
                title: "Infrastructure Deployment",
                desc: "Design of your responsive direct booking portal or high-precision campaigns, seamlessly connected to your hospitality engine."
              },
              {
                step: "03",
                title: "Conversion Optimization",
                desc: "Continuous multi-variant adjustments and bid management to scale direct revenues commission-free."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:shadow-sm transition-all relative">
                <div>
                  <span className="text-5xl font-serif font-bold text-accent/20 block mb-6">{item.step}</span>
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">{item.title}</h3>
                  <p className="text-sm text-primary/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why-Us Section (Redesigned Editorial Bento Grid) */}
      <section className="py-24 bg-white border-t border-primary/10 relative overflow-hidden" id="why-urunk-block">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-5 border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Advantages
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              Built for <span className="text-accent italic font-semibold">Measurable Revenue</span>, Not Vanity Metrics
            </h2>
            <p className="text-lg text-primary/70 font-light leading-relaxed">
              We combine precision web engineering, technical local SEO, and conversion architecture designed exclusively to expand your direct customer acquisition in Morocco.
            </p>
          </div>

          {/* Cards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8" id="why-urunk-list">
            {/* Card 1: Results-oriented (lg:col-span-7) */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                    01 • ROI FOCUS
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  Results-Oriented Acquisition Architecture
                </h3>
                <p className="text-base text-primary/70 font-light leading-relaxed mb-8">
                  We focus strictly on commercial outcomes: high-intent lead generation, direct hotel bookings, and measurable top-line revenue growth. Every deliverable is tied directly to your business bottom line.
                </p>
              </div>
              <div className="pt-6 border-t border-primary/10 flex flex-wrap gap-2 text-xs font-medium text-primary/80">
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Direct Booking Engines</span>
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">High-Intent Funnels</span>
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Audited ROI Analytics</span>
              </div>
            </div>

            {/* Card 2: Local presence (lg:col-span-5) */}
            <div className="lg:col-span-5 p-8 md:p-10 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                    02 • REGIONAL REACH
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  Native Moroccan Market Intelligence
                </h3>
                <p className="text-base text-primary/70 font-light leading-relaxed mb-8">
                  Deep mastery of regional search trends across Marrakech, Casablanca, Tangier, and Agadir. We optimize for localized multi-lingual behavior across French, English, and Arabic search ecosystems.
                </p>
              </div>
              <div className="pt-6 border-t border-primary/10 flex flex-wrap gap-2 text-xs font-medium text-primary/80">
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Multi-Hub Geotargeting</span>
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Local Search Dominance</span>
              </div>
            </div>

            {/* Card 3: Technical excellence (lg:col-span-4) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    03 • SPEED
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Technical Excellence
                </h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed mb-6">
                  Ultra-fast, lightweight code engineered for sub-second page loads. We strictly achieve 95+ Core Web Vitals to maximize search rankings and mobile conversion rates.
                </p>
              </div>
              <div className="pt-4 border-t border-primary/10 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>95+ Lighthouse Score</span>
              </div>
            </div>

            {/* Card 4: Transparency & Integrity (lg:col-span-4) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    04 • AUTONOMY
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Transparency & 100% Ownership
                </h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed mb-6">
                  No proprietary vendor lock-in, no hidden setup fees, and clear flat-rate billing. You retain 100% legal ownership of your domain names, code repositories, and analytics data.
                </p>
              </div>
              <div className="pt-4 border-t border-primary/10 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Zero Lock-In Contract</span>
              </div>
            </div>

            {/* Card 5: Commission-free channels (lg:col-span-4) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    05 • MARGINS
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <Percent className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Commission-Free Channels
                </h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed mb-6">
                  We build and scale your private direct booking and lead generation channels, reducing your reliance on 15%–25% third-party commissions and aggregator fees.
                </p>
              </div>
              <div className="pt-4 border-t border-primary/10 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Keep 100% Of Booking Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. New PROOF Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProofSection />
      </Suspense>

      {/* 5b. Testimonials & Guarantees Section */}
      <section className="py-24 bg-white border-t border-primary/10" id="testimonials-guarantees-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
              Contractual Guarantees
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Our Commitment: <span className="text-accent italic font-semibold">Zero Risk</span>
            </h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
              Because we are certain of our strategy's efficiency, every collaboration is protected by strict legal and business guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between shadow-xs" id="guarantee-card-1">
              <div>
                <span className="text-accent font-serif font-bold text-lg block mb-4">Performance Guarantee</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">90-Day Growth Period</h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed">
                  If we do not increase your direct bookings or organic search reach within 90 days, we refund 100% of our service fees.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                90-Day Guarantee
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between shadow-xs" id="guarantee-card-2">
              <div>
                <span className="text-accent font-serif font-bold text-lg block mb-4">Total Flexibility</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">15 Days' Notice</h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed">
                  No long-term lock-in or forced retainers. You are free to suspend or stop our services with a simple 15 days' notice.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                Cancel Anytime
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between shadow-xs" id="guarantee-card-3">
              <div>
                <span className="text-accent font-serif font-bold text-lg block mb-4">Zero Setup Fee</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">0 MAD Setup Fees</h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed">
                  We stand by the long-term value we build. We charge no hidden setup or onboarding fees to start.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                0 Setup Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Merged Sectors + Zones Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <SectorsAndHubs />
      </Suspense>

      {/* 7. Strategy Examples */}
      <Suspense fallback={<SectionSkeleton />}>
        <PortfolioSection />
      </Suspense>

      {/* 8. Pricing */}
      <Suspense fallback={<SectionSkeleton />}>
        <PricingSection />
      </Suspense>

      {/* 9. FAQ */}
      <Suspense fallback={<SectionSkeleton />}>
        <FaqSection />
      </Suspense>

      {/* 10. CTA */}
      <Suspense fallback={<SectionSkeleton />}>
        <BottomFormSection />
      </Suspense>
    </div>
  );
}
