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

// Client Reviews component hidden by default and powered by empty array (Rule 4 & Task 5)
function ClientReviews() {
  const reviews: { author: string; text: string; rating: number }[] = [];
  if (reviews.length === 0) return null;
  return <div className="hidden" aria-hidden="true"></div>;
}

export default function Home() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Morocco Web & SEO Agency for Hotels & Riads | Urunk EN</title>
        <meta name="description" content="Web design and SEO agency in Morocco for hotels, riads, and SMEs: fast booking engines, Google Ads, and local SEO in Casablanca and Marrakech. Free audit." />
        <link rel="canonical" href="https://urunk.com/en" />
        <link rel="alternate" hrefLang="en" href="https://urunk.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://urunk.com/" />
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://urunk.com/en/#organization",
                "name": "Urunk",
                "url": "https://urunk.com/en",
                "logo": "https://urunk.com/logo.png",
                "sameAs": [
                  "[URL_LINKEDIN]",
                  "[URL_FACEBOOK]",
                  "[URL_INSTAGRAM]"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://urunk.com/en/#localbusiness-casablanca",
                "name": "Urunk Casablanca",
                "url": "https://urunk.com/en/locations/casablanca",
                "telephone": "[TELEPHONE]",
                "priceRange": "4000 MAD - 12000 MAD",
                "areaServed": "MA",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "[ADRESSE_CASABLANCA_ANFA]",
                  "addressLocality": "Casablanca",
                  "addressRegion": "Casablanca-Settat",
                  "postalCode": "20000",
                  "addressCountry": "MA"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://urunk.com/en/#localbusiness-marrakech",
                "name": "Urunk Marrakech",
                "url": "https://urunk.com/en/locations/marrakech",
                "telephone": "[TELEPHONE]",
                "priceRange": "4000 MAD - 12000 MAD",
                "areaServed": "MA",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "[ADRESSE_MARRAKECH_GUELIZ]",
                  "addressLocality": "Marrakech",
                  "addressRegion": "Marrakech-Safi",
                  "postalCode": "40000",
                  "addressCountry": "MA"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Website Design for Hotels and Riads",
                "provider": { "@id": "https://urunk.com/en/#organization" },
                "areaServed": "MA",
                "offers": {
                  "@type": "Offer",
                  "price": "12000",
                  "priceCurrency": "MAD"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Hospitality Search Engine Optimization Morocco",
                "provider": { "@id": "https://urunk.com/en/#organization" },
                "areaServed": "MA"
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Google Ads Campaign Management Morocco",
                "provider": { "@id": "https://urunk.com/en/#organization" },
                "areaServed": "MA"
              }
            ]
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
            Digital Growth for Hospitality in Morocco
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary max-w-5xl leading-tight md:leading-tight mb-8" id="hero-h1">
            Web & SEO Agency for Hotels, Riads and SMEs in Morocco
          </h1>
          <p className="text-lg md:text-xl text-primary/70 max-w-3xl font-light leading-relaxed mb-12" id="hero-subtext">
            We assist hotels, riads, and Moroccan businesses in establishing profitable digital channels: commission-free direct booking engines, top local search visibility, and high-conversion paid acquisition campaigns.
          </p>
          
          <div className="flex flex-col items-center gap-4" id="hero-actions-container">
            <div className="flex flex-col sm:flex-row items-center gap-4" id="hero-actions">
              <Link 
                to="/en/contact" 
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5"
                id="hero-cta-btn"
              >
                Request a Free Audit <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/[NUMERO_SANS_ESPACES]?text=Bonjour%2C%20je%20souhaite%20un%20audit%20gratuit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-accent/30 hover:text-accent transition-all"
                id="hero-whatsapp-btn"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="mt-4 text-xs text-primary/60 font-medium tracking-wide flex flex-wrap justify-center gap-x-4 gap-y-1" id="hero-trust-strip">
              <span>✓ 90-Day Growth Guarantee [CONDITIONS_GARANTIE]</span>
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

      {/* 3. Thematic Capabilities / 4 Thematic Blocks */}
      <section className="py-24 bg-white relative border-t border-primary/10" id="thematic-blocks">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20" id="services-eyebrow">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6" id="services-title">
              Web Design and SEO for Hotels and Riads in Morocco
            </h2>
            <p className="text-lg text-primary/75 max-w-4xl mx-auto font-light leading-relaxed" id="services-intro-paragraph">
              Hotel website design and organic SEO enable Moroccan riads and boutique hotels to attract travelers directly via search engines. By pairing a commission-free booking engine with fast page speeds and local search optimization, properties capture direct guests while preserving room revenue without paying intermediary booking platform fees.
            </p>
          </div>

          {/* 4 Thematic Blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="thematic-quad-grid">
            {/* Block 1: Hospitality */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/en/industries/riads-boutique-hotels" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">Hospitality</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  Riads, boutique guest houses, and hotels across Morocco.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/en/riad-seo-marrakech" className="hover:text-accent transition-colors block py-0.5">
                      Marrakech Riad SEO
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/hotel-website-design" className="hover:text-accent transition-colors block py-0.5">
                      Hotel Website Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/direct-booking" className="hover:text-accent transition-colors block py-0.5">
                      Direct Booking Strategy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Hospitality & Riads Hub &rarr;
              </div>
            </div>

            {/* Block 2: Acquisition */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/en/services" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">Acquisition</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  Paid advertising channels engineered for direct bookings.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/en/google-ads-morocco" className="hover:text-accent transition-colors block py-0.5">
                      Google Ads Morocco
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/services/meta-ads" className="hover:text-accent transition-colors block py-0.5">
                      Hospitality Meta Ads
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/services/tripadvisor-ads" className="hover:text-accent transition-colors block py-0.5">
                      TripAdvisor Ads
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Paid Acquisition Hub &rarr;
              </div>
            </div>

            {/* Block 3: Local SEO */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/en/locations/casablanca" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">Local SEO</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  Google Maps authority and local discovery.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/en/local-seo-casablanca" className="hover:text-accent transition-colors block py-0.5">
                      Local SEO Casablanca
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/riad-seo-marrakech" className="hover:text-accent transition-colors block py-0.5">
                      Local SEO Marrakech
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/services/google-business-profile" className="hover:text-accent transition-colors block py-0.5">
                      Google Business Profile
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Casablanca Local Hub &rarr;
              </div>
            </div>

            {/* Block 4: Web Design */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/en/locations/marrakech" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">Web Design</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  High-converting websites connected to direct booking engines.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/en/services/website-design" className="hover:text-accent transition-colors block py-0.5">
                      Website Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/web-design-casablanca" className="hover:text-accent transition-colors block py-0.5">
                      Web Design Casablanca
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/riad-website-design-marrakech" className="hover:text-accent transition-colors block py-0.5">
                      Riad Website Marrakech
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Marrakech Web Hub &rarr;
              </div>
            </div>
          </div>

          {/* Section Presence in Casablanca and Marrakech (Tâche 2) */}
          <div className="bg-bg p-8 md:p-12 rounded-3xl border border-primary/10 mb-16" id="presence-casa-marrakech">
            <div className="max-w-3xl mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/20">
                <MapPin size={14} /> Regional Footprint
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">
                Presence in Casablanca and Marrakech
              </h2>
              <p className="text-base text-primary/75 font-light leading-relaxed">
                Our agency operates across Casablanca and Marrakech to support Moroccan businesses and hospitality brands. In Casablanca, we build corporate platforms and local B2B search visibility. In Marrakech, we support Medina riads and boutique hotels with direct booking architecture, Google Maps positioning, and targeted international search campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/en/locations/casablanca" className="p-6 bg-white rounded-2xl border border-primary/10 hover:border-accent/40 transition-all block group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">
                    Casablanca
                  </h3>
                  <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-primary/65 font-light mb-3">
                  B2B corporate hub, law firms, and growing Moroccan SMEs.
                </p>
                <p className="text-xs font-mono text-primary/70">
                  [ADRESSE_CASABLANCA_ANFA]
                </p>
              </Link>

              <Link to="/en/locations/marrakech" className="p-6 bg-white rounded-2xl border border-primary/10 hover:border-accent/40 transition-all block group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">
                    Marrakech
                  </h3>
                  <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-primary/65 font-light mb-3">
                  Boutique hospitality, Medina guest houses, and tour operators.
                </p>
                <p className="text-xs font-mono text-primary/70">
                  [ADRESSE_MARRAKECH_GUELIZ]
                </p>
              </Link>
            </div>
          </div>

          {/* Section Other Services & Resources (Tâche 4) */}
          <div className="grid lg:grid-cols-2 gap-8 pt-8 border-t border-primary/10" id="secondary-links">
            {/* Other Services */}
            <div className="p-6 rounded-2xl bg-bg border border-primary/10">
              <h3 className="font-serif font-bold text-lg text-primary mb-3">
                Other Digital Services
              </h3>
              <p className="text-xs text-primary/65 font-light mb-4">
                Specialized engineering and technical optimization services.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link to="/en/services/wordpress-seo" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  WordPress SEO
                </Link>
                <Link to="/en/services/ecommerce-seo" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  E-commerce SEO
                </Link>
                <Link to="/en/services/ai-seo-optimization" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  AI SEO Optimization
                </Link>
                <Link to="/en/services/bundle-site-ads" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  Website & Ads Bundle
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="p-6 rounded-2xl bg-bg border border-primary/10">
              <h3 className="font-serif font-bold text-lg text-primary mb-3">
                Strategic Guides & Resources
              </h3>
              <p className="text-xs text-primary/65 font-light mb-4">
                Actionable analyses to optimize your hospitality revenue and direct margin.
              </p>
              <ul className="space-y-2 text-xs font-medium text-primary/80">
                <li>
                  <Link to="/en/blog/reduce-ota-commissions" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Reduce OTA Commissions: Direct Strategy Guide</span>
                  </Link>
                </li>
                <li>
                  <Link to="/en/blog/tripadvisor-vs-google-ads" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>TripAdvisor Ads vs Google Ads for Hotels Compared</span>
                  </Link>
                </li>
                <li>
                  <Link to="/en/blog/hotel-seo-morocco-guide" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Complete Morocco Hotel SEO Playbook</span>
                  </Link>
                </li>
              </ul>
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
                  If we do not increase your direct bookings or organic search reach within 90 days, we apply our growth guarantee subject to [CONDITIONS_GARANTIE].
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                90-Day Guarantee [CONDITIONS_GARANTIE]
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

      {/* Client Reviews (Hidden / No fake reviews) */}
      <ClientReviews />
    </div>
  );
}
