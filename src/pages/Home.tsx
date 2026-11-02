import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import OptimizedImage from '../components/OptimizedImage';
import PricingSection from '../components/Home/PricingSection';
import FaqSection from '../components/Home/FaqSection';
import BottomFormSection from '../components/Home/BottomFormSection';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Hairline from '../components/ui/Hairline';

const homeServiceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Design for Hotels, Riads, and SMEs',
    provider: { '@id': 'https://urunk.com/#service' },
    areaServed: 'MA',
    offers: {
      '@type': 'Offer',
      price: '12000',
      priceCurrency: 'MAD',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Local SEO and Google Maps Optimization Morocco',
    provider: { '@id': 'https://urunk.com/#service' },
    areaServed: 'MA',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Google Ads Campaign Management Morocco',
    provider: { '@id': 'https://urunk.com/#service' },
    areaServed: 'MA',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <SEO
        title="Hotel Website Design & SEO in Morocco | Urunk"
        description="Premium hotel and riad websites in Morocco, connected booking engines, local SEO, and Google Ads. Grow direct enquiries. Request a free audit."
        schema={homeServiceSchemas}
      />

      {/* 1. Editorial Hero */}
      <Section tone="light" id="hero-section" className="pt-12 md:pt-20">
        <div className="space-y-12">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-5">Independent digital studio · Hospitality & tourism · Morocco</p>
            <h1
              className="text-[clamp(38px,4.6vw,68px)] leading-[1.04] max-w-[26ch] mb-6"
              id="hero-h1"
            >
              Hotel and riad websites built for direct bookings in Morocco
            </h1>
            <p
              className="text-lg text-primary/85 leading-relaxed max-w-[65ch] mb-4"
              id="hero-subtext"
            >
              Your property deserves more than a digital brochure. We pair refined website design and booking-engine integration with local SEO and focused advertising to turn more qualified searches into direct guest enquiries.
            </p>
            <p className="text-base text-primary/75 leading-relaxed max-w-[65ch] mb-8">
              Based in Casablanca, we work with independent hotels, riads, and boutique stays across Morocco. Bilingual websites from 12,000 MAD, with a defined scope and transparent quote.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6" id="hero-actions">
              <Button href="/en/contact" variant="primary" id="hero-cta-btn">
                Request a free audit
              </Button>
              <Button
                href="https://wa.me/212668802096?text=Hello%2C%20I%20would%20like%20to%20request%20an%20audit"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
              >
                WhatsApp: +212 668-802096
              </Button>
            </div>

            <nav aria-label="Explore our expertise" className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
              <Link to="/en/hotel-website-design" className="font-semibold">Hotel website design</Link>
              <Link to="/en/hotel-seo" className="font-semibold">Hotel SEO</Link>
              <Link to="/en/direct-booking" className="font-semibold">Direct bookings</Link>
            </nav>

            <p className="text-sm text-primary/70 leading-relaxed m-0">
              3 Rue El Kadi Lass, Maarif, Casablanca. Serving Casablanca, Marrakech, Rabat, and Agadir.
            </p>
          </div>

          <figure
            className="bg-bg-card rounded-sm border border-border-subtle overflow-hidden m-0"
            id="hero-image-container"
          >
            <div className="aspect-[16/9] w-full bg-bg-alt">
              <ImageWithSkeleton
                src="/images/optimized/moroccan-riad-architecture-800.jpg"
                imageName="moroccan-riad-architecture"
                alt="Traditional Moroccan riad courtyard with carved arches and tilework"
                className="w-full h-full"
                imgClassName="object-cover"
                priority={true}
                loading="eager"
                fetchPriority="high"
                width={1200}
                height={675}
                sizes="(max-width: 1240px) 100vw, 1240px"
              />
            </div>

            <figcaption className="p-6 sm:p-8 grid sm:grid-cols-3 gap-6 text-sm text-primary/80 border-t border-border-subtle">
              <div>
                <strong className="font-semibold text-primary block mb-1">Lightweight mobile pages</strong>
                <span>AVIF/WebP photography compressed for fast loading on smartphones.</span>
              </div>
              <div>
                <strong className="font-semibold text-primary block mb-1">PMS calendar sync</strong>
                <span>Connected directly to Cloudbeds, Mews, Sirvoy, or Little Hotelier.</span>
              </div>
              <div>
                <strong className="font-semibold text-primary block mb-1">Direct guest contact</strong>
                <span>WhatsApp button, short inquiry form, and verified Google Maps pin.</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* 2. OTA Commission Problem & Cost Comparison */}
      <Section tone="dark" id="ota-dependence-section">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <h2 className="mb-5 text-bg-light">
              Why guests who already know your name still book through OTA platforms
            </h2>
            <p className="text-bg-light/85 leading-relaxed mb-4">
              When a traveler looks up your riad or hotel by name and finds a slow mobile website or an incomplete Google Maps listing, they may return to platforms such as Booking.com or Expedia. Commissions vary by provider, your agreement, and any optional visibility programmes.
            </p>
            <p className="text-sm text-bg-light/70 leading-relaxed m-0">
              For the terms that apply to your property, review the{' '}
              <a
                href="https://partner.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bg-light hover:text-white"
              >
                Booking.com Partner Hub
              </a>{' '}
              partner documentation and your signed agreement, including any optional promotional programmes.
            </p>
          </div>

          <div className="lg:col-span-7 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-bg-light/20 text-xs text-bg-light/75">
                  <th className="py-3 pr-4 font-semibold w-1/3">Booking channel</th>
                  <th className="py-3 px-4 font-semibold">Per-stay fees</th>
                  <th className="py-3 pl-4 font-semibold">Guest relationship</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bg-light/15">
                <tr>
                  <td className="py-5 pr-4 align-top font-serif text-lg text-bg-light">
                    OTA platform
                    <span className="block font-sans text-xs text-bg-light/65 mt-1">
                      Booking.com, Expedia, Viator
                    </span>
                  </td>
                  <td className="py-5 px-4 align-top text-bg-light/85 leading-relaxed tabular-nums">
                    Commission varies according to your agreement and optional visibility add-ons.
                  </td>
                  <td className="py-5 pl-4 align-top text-bg-light/80 leading-relaxed">
                    Intermediated messaging and competing properties displayed alongside your rooms.
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 align-top font-serif text-lg text-bg-light">
                    Your official website
                    <span className="block font-sans text-xs text-bg-light/65 mt-1">
                      Own domain + PMS engine
                    </span>
                  </td>
                  <td className="py-5 px-4 align-top text-bg-light leading-relaxed">
                    No online travel agency commission. You pay only your standard PMS subscription, payment gateway fees, and any optional ad budget.
                  </td>
                  <td className="py-5 pl-4 align-top text-bg-light/85 leading-relaxed">
                    Direct email or WhatsApp confirmation with the guest before arrival.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 3. Three Core Services as Editorial Rows */}
      <Section tone="light" id="thematic-blocks">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <h2 className="mb-4" id="services-title">
              Three practical services tailored to your stage
            </h2>
            <p className="text-primary/80 leading-relaxed mb-5">
              You can hire us strictly for a standalone website build, or pair it with ongoing Google Maps optimization and paid search management. We work with boutique hotels, riads, tour operators, caterers, and service SMEs across Morocco.
            </p>
            <p className="text-base m-0">
              <Link to="/en/work" className="font-medium">
                Browse technical setups by sector
              </Link>
            </p>
          </div>

          <div className="lg:col-span-8">
            <Hairline />
            <div className="divide-y divide-border-subtle border-b border-border-subtle">
              <article className="py-7">
                <h3 className="mb-2">
                  Website design and online booking setup
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  We build bilingual French and English websites that load quickly on mobile networks. For hotels and riads, we connect your live PMS calendar (Cloudbeds, Mews, Sirvoy, Little Hotelier). For tour operators, caterers, and B2B firms, we set up clear service pages with short quote inquiry forms and direct WhatsApp contact.{' '}
                  <Link to="/en/services/website-design" className="font-medium">
                    Website design details
                  </Link>
                </p>
              </article>

              <article className="py-7">
                <h3 className="mb-2">
                  Local SEO and Google Maps management
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  We organize your pages by service and neighborhood, fix mobile speed bottlenecks, and keep your Google Business Profile accurate. This helps improve your local ranking when travelers or corporate buyers search for a reliable provider in your city.{' '}
                  <Link to="/en/seo-agency-morocco" className="font-medium">
                    Local SEO details
                  </Link>
                </p>
              </article>

              <article className="py-7">
                <h3 className="mb-2">
                  Google Ads, Meta, and TripAdvisor campaigns
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  When you want to launch ads to fill low-season dates or bring in new quote inquiries, we set up and manage campaigns directly inside your own ad accounts. Every week we filter out irrelevant search terms so your ad spend goes toward genuine inquiries.{' '}
                  <Link to="/en/google-ads-morocco" className="font-medium">
                    Ad management details
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Photographed Process Story */}
      <Section tone="alt" id="process-section" className="border-t border-border-subtle">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            <figure className="bg-bg-card rounded-sm overflow-hidden border border-border-subtle m-0">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/art-house-hero-800.jpg"
                  imageName="art-house-hero"
                  alt="Artisan potter working in a traditional Moroccan workshop"
                  width={500}
                  height={625}
                  className="w-full h-full"
                  imgClassName="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
              <figcaption className="p-4 text-xs text-primary/75 border-t border-border-subtle leading-relaxed">
                Workshops, tours, and local businesses: simple mobile booking and inquiry flows.
              </figcaption>
            </figure>

            <figure className="bg-bg-card rounded-sm overflow-hidden border border-border-subtle m-0 sm:mt-8">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/moroccan-riad-hospitality-800.jpg"
                  imageName="moroccan-riad-hospitality"
                  alt="Calm interior courtyard pool inside a Moroccan riad"
                  width={500}
                  height={625}
                  className="w-full h-full"
                  imgClassName="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
              <figcaption className="p-4 text-xs text-primary/75 border-t border-border-subtle leading-relaxed">
                Hotels and guesthouses: direct connection between your domain and room calendar.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <h2 className="mb-8">
              How a project works from start to launch
            </h2>

            <Hairline />
            <ol className="divide-y divide-border-subtle border-b border-border-subtle list-none p-0 m-0">
              <li className="py-6">
                <p className="text-xs font-semibold text-accent mb-1 m-0">01</p>
                <h3 className="mb-2">
                  First step: a written audit and clear proposal
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  We test your current website on mobile, check your Google Maps listing, and point out what is slowing down bookings or inquiries, alongside a fixed-price written quote.
                </p>
              </li>

              <li className="py-6">
                <p className="text-xs font-semibold text-accent mb-1 m-0">02</p>
                <h3 className="mb-2">
                  Second step: website launch in 4 to 6 weeks
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  We write and build your pages in English and French, compress photography, connect your PMS booking engine or quote forms, and configure Google Analytics conversion tracking.
                </p>
              </li>

              <li className="py-6">
                <p className="text-xs font-semibold text-accent mb-1 m-0">03</p>
                <h3 className="mb-2">
                  Third step: month-to-month support with 15 days notice
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  If we manage your local SEO or ad campaigns, we send a plain monthly report covering work completed and inquiries received. You can stop any monthly service with 15 days written notice.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* 5. Fixed Pricing in MAD + Contractual Guarantees */}
      <PricingSection />

      {/* 6. Concise 4-Question FAQ */}
      <FaqSection />

      {/* 7. Concrete Closing Audit Form */}
      <BottomFormSection />
    </div>
  );
}
