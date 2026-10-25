import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import OptimizedImage from '../components/OptimizedImage';
import SectorsAndHubs from '../components/Home/SectorsAndHubs';
import PricingSection from '../components/Home/PricingSection';
import FaqSection from '../components/Home/FaqSection';
import BottomFormSection from '../components/Home/BottomFormSection';

export default function Home() {
  const blueprints = [
    {
      sector: 'Private tours and desert excursions',
      title: 'Lowering Viator and GetYourGuide commissions with fast mobile pages and WhatsApp',
      summary: 'Lightweight 4G route pages (Marrakech, High Atlas, Merzouga), TourOperator schema, and targeted search ads built to capture direct bookings.',
      href: '/en/work/travel-morocco-services'
    },
    {
      sector: 'Corporate catering and events',
      title: 'Capturing B2B event quote inquiries in Casablanca and Marrakech',
      summary: 'Dedicated seminar and reception menu pages, per-guest cost estimator forms, and weekday business-hour Google Search campaigns.',
      href: '/en/work/nomad-eats-catering'
    },
    {
      sector: 'Cultural workshops and local activities',
      title: 'Reaching travelers already in the Marrakech Medina via Google Maps and Instagram',
      summary: 'Google Business Profile optimization, mobile booking calendar setup, and radius-targeted social ads around Marrakech.',
      href: '/en/work/art-house-marrakech'
    }
  ];

  return (
    <div className="w-full">
      <Helmet>
        <title>Morocco Web & SEO Agency for Hotels & Riads | Urunk EN</title>
        <meta
          name="description"
          content="Web design and SEO agency in Morocco for hotels, riads, and SMEs: fast booking websites, Google Ads, and local SEO in Casablanca and Marrakech. Free audit."
        />
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
                  "https://linkedin.com/company/urunk",
                  "https://facebook.com/urunk",
                  "https://instagram.com/urunk"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://urunk.com/en/#localbusiness",
                "name": "Urunk",
                "url": "https://urunk.com/en",
                "telephone": "+212668802096",
                "email": "contact@urunk.com",
                "priceRange": "3000 MAD - 12000 MAD",
                "areaServed": "MA",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3 Rue El Kadi Lass, Maarif",
                  "addressLocality": "Casablanca",
                  "addressRegion": "Casablanca-Settat",
                  "postalCode": "20330",
                  "addressCountry": "MA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 33.5855,
                  "longitude": -7.6365
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Website Design for Hotels, Riads, and SMEs",
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
                "name": "Local SEO and Google Maps Optimization Morocco",
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

      {/* Chapter 1A: Asymmetric Editorial Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 px-6 bg-bg-light" id="hero-section">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-accent mb-4" id="hero-kicker">
              Casablanca and Marrakech · Hospitality, tourism, and SMEs
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-serif font-bold text-primary leading-[1.1] mb-6"
              id="hero-h1"
            >
              Web and SEO Agency for Hotels, Riads, and SMEs in Morocco
            </h1>
            <p
              className="text-lg md:text-xl text-primary/80 leading-relaxed max-w-2xl mb-8"
              id="hero-subtext"
            >
              We build fast websites connected to your booking engine, optimize your Google Maps presence, and manage Google Ads campaigns to generate commission-free direct bookings and qualified quote inquiries.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6" id="hero-actions">
              <Link
                to="/en/contact"
                className="bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                id="hero-cta-btn"
              >
                <span>Request a free audit</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/212668802096?text=Hello%20Urunk%2C%20I%20would%20like%20a%20free%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-accent underline underline-offset-4 px-2 py-2 transition-colors"
                id="hero-whatsapp-btn"
              >
                Message on WhatsApp (+212 668-802096)
              </a>
            </div>

            <p className="text-xs text-primary/65 leading-relaxed pt-4 border-t border-primary/10 max-w-xl">
              Websites delivered in 4 to 6 weeks · Monthly retainers with 15 days notice · Full code and account ownership
            </p>
          </div>

          <figure className="lg:col-span-5 rounded-2xl overflow-hidden border border-primary/10 bg-bg-alt" id="hero-image-container">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/6] w-full">
              <ImageWithSkeleton
                src="/images/optimized/art-house-hero-800.jpg"
                imageName="art-house-hero"
                alt="Traditional pottery artisan working in a Marrakech craft studio"
                className="w-full h-full"
                imgClassName="object-cover"
                priority={true}
                loading="eager"
                fetchPriority="high"
                width={800}
                height={960}
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
            <figcaption className="px-4 py-3 bg-white text-xs text-primary/70 border-t border-primary/10">
              Working with independent riads, boutique hotels, tour operators, and Moroccan SMEs.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Chapter 1B: OTA Commission Problem vs Direct Bookings */}
      <section className="bg-primary text-white py-20 px-6" id="ota-dependence-section">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-yellow-400 mb-3">
              Hospitality margin economics
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5 leading-tight text-white">
              Keep more room revenue by shifting stays toward direct bookings
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
              Booking.com, Expedia, and activity aggregators retain 15% to 25% on every reservation. When your official website loads slowly on mobile or lacks visibility on Google Maps, even guests searching for your property by name end up booking through an intermediary.
            </p>
            <Link
              to="/en/hotel-digital-marketing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:underline underline-offset-4"
            >
              <span>Explore our hospitality marketing approach</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-6 border-t border-white/15 divide-y divide-white/15">
            <div className="py-6 grid sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5">
                <h3 className="font-serif font-bold text-lg text-white">Via third-party OTA</h3>
                <p className="text-xs text-white/60 mt-1">Booking.com, Expedia, Viator</p>
              </div>
              <div className="sm:col-span-7 text-sm text-white/80 space-y-1.5 leading-relaxed">
                <p><strong className="text-white font-semibold">15% to 25% commission</strong> deducted per room night or excursion seat (varies by contract).</p>
                <p>Intermediated guest contact details and competing properties promoted beside your listing.</p>
              </div>
            </div>

            <div className="py-6 grid sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5">
                <h3 className="font-serif font-bold text-lg text-yellow-400">On your official website</h3>
                <p className="text-xs text-white/60 mt-1">PMS booking engine or direct inquiry</p>
              </div>
              <div className="sm:col-span-7 text-sm text-white/85 space-y-1.5 leading-relaxed">
                <p><strong className="text-yellow-400 font-semibold">0% OTA commission</strong> on direct bookings completed on your own domain.</p>
                <p>Live availability synced with your PMS (Cloudbeds, Mews, Sirvoy, Little Hotelier) and direct guest communication from the start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Core Capabilities, 3-Step Workflow & Applied Strategy Blueprints */}
      <section className="py-20 md:py-28 bg-white border-t border-primary/10" id="thematic-blocks">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium text-accent mb-3">
              Services and workflow
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5" id="services-title">
              Websites, local search optimization, and paid search campaigns
            </h2>
            <p className="text-base md:text-lg text-primary/75 leading-relaxed">
              Each service solves a concrete operational need: a fast mobile website connected to your booking flow, strong visibility on Google and Google Maps in your city, and targeted search ads when immediate bookings or inquiries are needed.
            </p>
          </div>

          {/* 4 Hairline Editorial Columns (Zero redundant card boxes) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" id="thematic-quad-grid">
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                01. Websites and booking
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Fast bilingual websites on mobile, connected directly to your PMS booking engine or WhatsApp.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/en/services/website-design" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Website design in Morocco</Link></li>
                <li><Link to="/en/hotel-website-design" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Hotel website design</Link></li>
                <li><Link to="/en/riad-website-design-marrakech" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Marrakech riad websites</Link></li>
                <li><Link to="/en/web-design-casablanca" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Web design Casablanca</Link></li>
                <li><Link to="/en/direct-booking" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Direct booking setup</Link></li>
              </ul>
            </div>

            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                02. SEO and Google Maps
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Long-term organic rankings for local queries and complete Google Business Profile management.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/en/seo-agency-morocco" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">SEO agency Morocco</Link></li>
                <li><Link to="/en/riad-seo-marrakech" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Marrakech riad SEO</Link></li>
                <li><Link to="/en/local-seo-casablanca" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Local SEO Casablanca</Link></li>
                <li><Link to="/en/services/google-business-profile" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Google Business Profile</Link></li>
              </ul>
            </div>

            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                03. Paid ad management
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Targeted search and social ads inside your own accounts to generate direct bookings or quotes.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/en/google-ads-morocco" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Google Ads Morocco</Link></li>
                <li><Link to="/en/services/meta-ads" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Meta Ads (Instagram &amp; Facebook)</Link></li>
                <li><Link to="/en/services/tripadvisor-ads" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">TripAdvisor Sponsored Ads</Link></li>
                <li><Link to="/en/services" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">All marketing services</Link></li>
              </ul>
            </div>

            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                04. Technical SEO and guides
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Platform-specific SEO audits and practical guides for Moroccan hoteliers and business owners.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/en/services/wordpress-seo" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">WordPress SEO audits</Link></li>
                <li><Link to="/en/services/ecommerce-seo" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">E-commerce SEO</Link></li>
                <li><Link to="/en/services/ai-seo-optimization" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Semantic &amp; AI search SEO</Link></li>
                <li><Link to="/en/blog/reduce-ota-commissions" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Guide: reducing OTA commissions</Link></li>
                <li><Link to="/en/blog/tripadvisor-vs-google-ads" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">TripAdvisor Ads vs Google Ads</Link></li>
                <li><Link to="/en/blog/hotel-seo-morocco-guide" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Morocco hotel SEO guide</Link></li>
              </ul>
            </div>
          </div>

          {/* 3-Step Project Workflow + Applied Strategy Blueprints */}
          <div className="pt-16 border-t border-primary/15 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                  How a project runs in three steps
                </h3>
                <ol className="divide-y divide-primary/10 border-y border-primary/10 text-sm">
                  <li className="py-4">
                    <span className="font-serif font-bold text-base text-primary block mb-1">
                      1. Free diagnostic within 24 to 48 hours
                    </span>
                    <span className="text-primary/75 leading-relaxed block">
                      Review of current mobile load speed, Google Maps rankings, and friction points in your room booking or quote form.
                    </span>
                  </li>
                  <li className="py-4">
                    <span className="font-serif font-bold text-base text-primary block mb-1">
                      2. Build and launch in 4 to 6 weeks
                    </span>
                    <span className="text-primary/75 leading-relaxed block">
                      Custom website build, PMS booking engine or inquiry integration, on-page SEO markup, and GA4 conversion tracking setup.
                    </span>
                  </li>
                  <li className="py-4">
                    <span className="font-serif font-bold text-base text-primary block mb-1">
                      3. Month-to-month management
                    </span>
                    <span className="text-primary/75 leading-relaxed block">
                      Ongoing keyword updates, ad bid filtering, and landing page refinements measured against actual direct bookings and inquiries.
                    </span>
                  </li>
                </ol>
              </div>

              <figure className="rounded-2xl overflow-hidden border border-primary/10 bg-bg-alt">
                <div className="aspect-[16/10] w-full">
                  <OptimizedImage
                    src="/images/optimized/moroccan-riad-hospitality-800.jpg"
                    imageName="moroccan-riad-hospitality"
                    alt="Quiet interior courtyard of a traditional Moroccan riad"
                    width={640}
                    height={400}
                    priority={true}
                    loading="eager"
                    className="w-full h-full"
                    imgClassName="object-cover"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                </div>
                <figcaption className="px-4 py-3 bg-bg-light text-xs text-primary/70 border-t border-primary/10">
                  Mobile-first booking paths built for international guests researching stays on their phones.
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    Applied strategy blueprints
                  </h3>
                  <p className="text-sm text-primary/75 mt-1">
                    Three documented implementation plans detailing the web, SEO, and paid search setup by industry.
                  </p>
                </div>
                <Link
                  to="/en/work"
                  className="text-sm font-semibold text-accent hover:underline shrink-0"
                >
                  View all blueprints
                </Link>
              </div>

              <div className="divide-y divide-primary/15 border-y border-primary/15">
                {blueprints.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group py-6 block hover:bg-bg-light/70 -mx-3 px-3 rounded-lg transition-colors"
                  >
                    <p className="text-xs font-semibold text-accent mb-1.5">
                      {item.sector}
                    </p>
                    <h4 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors mb-2 flex items-start justify-between gap-4">
                      <span>{item.title}</span>
                      <ArrowUpRight size={18} className="text-accent shrink-0 mt-1" />
                    </h4>
                    <p className="text-sm text-primary/75 leading-relaxed">
                      {item.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Unified Sectors and Moroccan Locations */}
      <SectorsAndHubs />

      {/* Chapter 4: Fixed Pricing and Consolidated Contractual Commitments */}
      <PricingSection />

      {/* Chapter 5: Concise FAQ and Audit Request Form */}
      <FaqSection />
      <BottomFormSection />
    </div>
  );
}
