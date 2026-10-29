import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import OptimizedImage from '../components/OptimizedImage';
import PricingSection from '../components/Home/PricingSection';
import FaqSection from '../components/Home/FaqSection';
import BottomFormSection from '../components/Home/BottomFormSection';

const homeServiceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Design for Hotels, Riads, and SMEs",
    "provider": { "@id": "https://urunk.com/#service" },
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
    "provider": { "@id": "https://urunk.com/#service" },
    "areaServed": "MA"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads Campaign Management Morocco",
    "provider": { "@id": "https://urunk.com/#service" },
    "areaServed": "MA"
  }
];

export default function Home() {
  return (
    <div className="w-full">
      <SEO
        title="Morocco Web & SEO Agency for Hotels & Riads | Urunk EN"
        description="Web design and SEO agency in Morocco for hotels, riads, and SMEs: fast booking websites, Google Ads, and local SEO in Casablanca and Marrakech. Free audit."
        schema={homeServiceSchemas}
      />

      {/* 1. Core Promise + Annotated Delivered Page Preview */}
      <section className="pt-12 pb-16 md:pt-18 md:pb-22 px-6 bg-bg-light" id="hero-section">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6 lg:pt-4">
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-serif font-bold text-primary leading-[1.1] mb-6 [text-wrap:balance]"
              id="hero-h1"
            >
              Websites, local SEO, and Google Ads for hotels, riads, and SMEs in Morocco
            </h1>
            <p
              className="text-base sm:text-lg text-primary/80 leading-relaxed max-w-xl mb-4"
              id="hero-subtext"
            >
              From our office in Casablanca, we build fast websites connected to your booking engine, improve your local Google Maps rankings, and run search ads so you receive more direct bookings and quote inquiries.
            </p>
            <p className="text-base text-primary/75 leading-relaxed max-w-xl mb-8">
              Complete websites launch in 4 to 6 weeks starting at 12,000 MAD, and monthly services can be canceled anytime with 15 days notice.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-6" id="hero-actions">
              <Link
                to="/en/contact"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                id="hero-cta-btn"
              >
                <span>Request a free audit</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/212668802096?text=Hello%2C%20I%20would%20like%20to%20request%20an%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary/85 hover:text-accent underline underline-offset-4 transition-colors"
                id="hero-whatsapp-btn"
              >
                WhatsApp: +212 668-802096
              </a>
            </div>

            <p className="text-xs text-primary/65 leading-relaxed">
              3 Rue El Kadi Lass, Maarif, Casablanca · Serving Casablanca, Marrakech, Rabat, and Agadir
            </p>
          </div>

          {/* Annotated Site Deliverable Preview */}
          <figure
            className="lg:col-span-6 bg-white rounded-xl border border-primary/15 overflow-hidden"
            id="hero-image-container"
          >
            <div className="px-4 py-2.5 bg-bg-alt border-b border-primary/10 flex items-center justify-between gap-4 text-xs text-primary/75">
              <span className="font-mono text-[11px] truncate">Deliverable layout · Official property page</span>
              <span className="font-mono text-[11px] shrink-0">EN / FR · 4G mobile</span>
            </div>

            <div className="relative aspect-[16/10] w-full bg-bg-alt">
              <ImageWithSkeleton
                src="/images/optimized/moroccan-riad-architecture-800.jpg"
                imageName="moroccan-riad-architecture"
                alt="Traditional Moroccan riad courtyard with carved arches and tilework"
                className="w-full h-full"
                imgClassName="object-cover"
                priority={true}
                loading="eager"
                fetchPriority="high"
                width={800}
                height={500}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-4 sm:p-5 text-white">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-white/80">Direct booking flow on your own domain</p>
                    <p className="font-serif font-bold text-base sm:text-lg">Live room availability, rates, and direct guest contact</p>
                  </div>
                  <span className="text-xs font-medium bg-white/15 backdrop-blur-xs border border-white/25 px-3 py-1.5 rounded-md">
                    Check availability
                  </span>
                </div>
              </div>
            </div>

            <figcaption className="p-4 sm:p-5 grid sm:grid-cols-3 gap-4 text-xs text-primary/80 divide-y sm:divide-y-0 sm:divide-x divide-primary/10">
              <div className="pt-2 sm:pt-0 sm:pr-3 first:pt-0">
                <strong className="font-semibold text-primary block mb-0.5">Lightweight mobile pages</strong>
                <span>AVIF/WebP photography compressed for fast loading on smartphones.</span>
              </div>
              <div className="pt-2 sm:pt-0 sm:px-3">
                <strong className="font-semibold text-primary block mb-0.5">PMS calendar sync</strong>
                <span>Connected directly to Cloudbeds, Mews, Sirvoy, or Little Hotelier.</span>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-3">
                <strong className="font-semibold text-primary block mb-0.5">Direct guest contact</strong>
                <span>WhatsApp button, short inquiry form, and verified Google Maps pin.</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. OTA Commission Problem & Honest Cost Comparison */}
      <section className="bg-primary text-white py-14 md:py-16 px-6" id="ota-dependence-section">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-snug text-white [text-wrap:balance]">
              Why guests who already know your name still book through OTA platforms
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-4">
              When a traveler looks up your riad or hotel by name and finds a slow mobile website or an incomplete Google Maps listing, they fall back to Booking.com, Expedia, or Viator. Those platforms typically deduct between 15% and 25% of each stay depending on your contract.
            </p>
            <p className="text-xs text-white/65 leading-relaxed">
              Industry rate reference: standard base commission averages 15% before optional visibility programs (such as Preferred Partner or Visibility Booster) or activity reseller fees, per public{' '}
              <a
                href="https://partner.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white/85 hover:text-white"
              >
                Booking.com Partner Hub
              </a>{' '}
              partner documentation (reviewed October 2026; check your property agreement for your exact rate).
            </p>
          </div>

          <div className="lg:col-span-7 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/20 text-xs text-white/70">
                  <th className="py-3 pr-4 font-semibold w-1/3">Booking channel</th>
                  <th className="py-3 px-4 font-semibold">Per-stay fees</th>
                  <th className="py-3 pl-4 font-semibold">Guest relationship</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/15">
                <tr>
                  <td className="py-4 pr-4 align-top font-serif font-bold text-base text-white">
                    OTA platform
                    <span className="block font-sans font-normal text-xs text-white/60 mt-0.5">
                      Booking.com, Expedia, Viator
                    </span>
                  </td>
                  <td className="py-4 px-4 align-top text-white/85 leading-relaxed tabular-nums">
                    15% to 25% commission depending on your contract terms and optional visibility add-ons.
                  </td>
                  <td className="py-4 pl-4 align-top text-white/80 leading-relaxed">
                    Intermediated messaging and competing properties displayed alongside your rooms.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 align-top font-serif font-bold text-base text-yellow-400">
                    Your official website
                    <span className="block font-sans font-normal text-xs text-white/60 mt-0.5">
                      Own domain + PMS engine
                    </span>
                  </td>
                  <td className="py-4 px-4 align-top text-white/90 leading-relaxed">
                    No online travel agency commission. You pay only your standard PMS subscription, payment gateway fees, and any optional ad budget.
                  </td>
                  <td className="py-4 pl-4 align-top text-white/85 leading-relaxed">
                    Direct email or WhatsApp confirmation with the guest before arrival.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Three Core Services Written in Natural Prose (No SEO Inventory Matrices) */}
      <section className="py-16 md:py-20 px-6 bg-white border-t border-primary/10" id="thematic-blocks">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 leading-snug [text-wrap:balance]" id="services-title">
              Three practical services tailored to your stage
            </h2>
            <p className="text-sm sm:text-base text-primary/75 leading-relaxed mb-5">
              You can hire us strictly for a standalone website build, or pair it with ongoing Google Maps optimization and paid search management. We work with boutique hotels, riads, tour operators, caterers, and service SMEs across Morocco.
            </p>
            <p className="text-sm">
              <Link to="/en/work" className="font-semibold text-accent hover:underline underline-offset-4">
                Browse technical setups by sector
              </Link>
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-primary/15 border-y border-primary/15">
            <article className="py-6">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                Website design and online booking setup
              </h3>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed mb-3">
                We build bilingual French and English websites that load quickly on mobile networks. For hotels and riads, we connect your live PMS calendar (Cloudbeds, Mews, Sirvoy, Little Hotelier). For tour operators, caterers, and B2B firms, we set up clear service pages with short quote inquiry forms and direct WhatsApp contact.{' '}
                <Link to="/en/services/website-design" className="font-semibold text-accent hover:underline underline-offset-4">
                  Website design details
                </Link>
              </p>
            </article>

            <article className="py-6">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                Local SEO and Google Maps management
              </h3>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed mb-3">
                We organize your pages by service and neighborhood, fix mobile speed bottlenecks, and keep your Google Business Profile accurate. This helps improve your local ranking when travelers or corporate buyers search for a reliable provider in your city.{' '}
                <Link to="/en/seo-agency-morocco" className="font-semibold text-accent hover:underline underline-offset-4">
                  Local SEO details
                </Link>
              </p>
            </article>

            <article className="py-6">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                Google Ads, Meta, and TripAdvisor campaigns
              </h3>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                When you want to launch ads to fill low-season dates or bring in new quote inquiries, we set up and manage campaigns directly inside your own ad accounts. Every week we filter out irrelevant search terms so your ad spend goes toward genuine inquiries.{' '}
                <Link to="/en/google-ads-morocco" className="font-semibold text-accent hover:underline underline-offset-4">
                  Ad management details
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Photographed Process Story (Diptych + 3 Plain Stages, Zero Double Numbering) */}
      <section className="py-16 md:py-20 px-6 bg-bg-alt border-t border-primary/10" id="process-section">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            <figure className="bg-white rounded-xl overflow-hidden border border-primary/10">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/art-house-hero-800.jpg"
                  imageName="art-house-hero"
                  alt="Artisan potter working in a traditional Moroccan workshop"
                  width={500}
                  height={625}
                  priority={true}
                  loading="eager"
                  className="w-full h-full"
                  imgClassName="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
              <figcaption className="p-3 text-xs text-primary/75 border-t border-primary/10 leading-snug">
                Workshops, tours, and local businesses: simple mobile booking and inquiry flows.
              </figcaption>
            </figure>

            <figure className="bg-white rounded-xl overflow-hidden border border-primary/10 sm:mt-8">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/moroccan-riad-hospitality-800.jpg"
                  imageName="moroccan-riad-hospitality"
                  alt="Calm interior courtyard pool inside a Moroccan riad"
                  width={500}
                  height={625}
                  priority={true}
                  loading="eager"
                  className="w-full h-full"
                  imgClassName="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
              <figcaption className="p-3 text-xs text-primary/75 border-t border-primary/10 leading-snug">
                Hotels and guesthouses: direct connection between your domain and room calendar.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 leading-snug [text-wrap:balance]">
              How a project works from start to launch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-bold text-lg text-primary mb-1">
                  First step: written audit within 24 business hours
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                  We test your current website on mobile, check your Google Maps listing, and point out what is slowing down bookings or inquiries, alongside a fixed-price written quote.
                </p>
              </div>

              <div className="pt-5 border-t border-primary/15">
                <h3 className="font-serif font-bold text-lg text-primary mb-1">
                  Second step: website launch in 4 to 6 weeks
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                  We write and build your pages in English and French, compress photography, connect your PMS booking engine or quote forms, and configure Google Analytics conversion tracking.
                </p>
              </div>

              <div className="pt-5 border-t border-primary/15">
                <h3 className="font-serif font-bold text-lg text-primary mb-1">
                  Third step: month-to-month support with 15 days notice
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                  If we manage your local SEO or ad campaigns, we send a plain monthly report covering work completed and inquiries received. You can stop any monthly service with 15 days written notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fixed Pricing in MAD + Contractual Guarantees */}
      <PricingSection />

      {/* 6. Concise 4-Question FAQ */}
      <FaqSection />

      {/* 7. Concrete Closing Audit Form */}
      <BottomFormSection />
    </div>
  );
}
