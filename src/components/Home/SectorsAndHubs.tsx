import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';

export default function SectorsAndHubs() {
  const sectors = [
    {
      title: 'Riads and boutique stays',
      href: '/en/industries/riads-boutique-hotels',
      desc: 'Bilingual websites connected to your room calendar and Google Maps optimization to generate more direct bookings.'
    },
    {
      title: 'Hotels and resorts',
      href: '/en/industries/hotels-resorts',
      desc: 'PMS booking engine integration (Cloudbeds, Mews, Sirvoy, Little Hotelier) and Google Search campaigns for room reservations.'
    },
    {
      title: 'Tour operators and excursions',
      href: '/en/industries/tour-operators',
      desc: 'Fast mobile itinerary pages and instant WhatsApp routing so travelers book directly without aggregator commissions.'
    },
    {
      title: 'Restaurants and catering',
      href: '/en/industries/restaurants-catering',
      desc: 'Local Google Business Profile management for dining rooms and structured quote forms for corporate catering events.'
    },
    {
      title: 'SMEs and B2B firms',
      href: '/en/industries/corporate-smes',
      desc: 'Clear corporate websites, local search visibility by trade, and Google Search ads built around qualified quote inquiries.'
    }
  ];

  const cities = [
    {
      city: 'Casablanca',
      href: '/en/locations/casablanca',
      meta: 'Office: 3 Rue El Kadi Lass, Maarif',
      desc: 'Supporting SMEs, professional firms, corporate caterers, and business hotels across Greater Casablanca.'
    },
    {
      city: 'Marrakech',
      href: '/en/locations/marrakech',
      meta: 'Medina, Gueliz, and Palmeraie',
      desc: 'Direct booking websites, Google Maps rankings, and international search ads for riads, villas, and guest houses.'
    },
    {
      city: 'Rabat',
      href: '/en/locations/rabat',
      meta: 'Agdal, Hay Riad, and Hassan',
      desc: 'Institutional websites, local Google search visibility, and qualified client inquiries for companies and hotels.'
    },
    {
      city: 'Agadir',
      href: '/en/locations/agadir',
      meta: 'Beachfront and Taghazout',
      desc: 'Multilingual destination SEO and seasonal paid search campaigns for seaside hotels, residences, and surf camps.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-alt border-t border-primary/10" id="sectors-hubs-section-en">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column: overview + real documentary photography */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-sm font-medium text-accent mb-3">
                Sectors and Moroccan locations
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-5 leading-tight">
                Businesses we serve and cities we cover
              </h2>
              <p className="text-base text-primary/80 leading-relaxed">
                From our Casablanca office in Maarif, we work with hospitality properties and growing SMEs across Morocco. Each project matches local demand: B2B quote inquiries in Casablanca and Rabat, and direct bookings for stays and excursions in Marrakech and Agadir.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden border border-primary/10">
              <div className="aspect-[4/3] lg:aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/moroccan-riad-architecture-800.jpg"
                  imageName="moroccan-riad-architecture"
                  alt="Authentic Moroccan riad courtyard with zellige tilework and Moorish arches"
                  width={600}
                  height={750}
                  priority={true}
                  loading="eager"
                  className="w-full h-full"
                  imgClassName="object-cover"
                  sizes="(max-width: 1024px) 100vw, 460px"
                />
              </div>
              <figcaption className="px-4 py-3 bg-white/80 text-xs text-primary/70 border-t border-primary/10">
                Moroccan riad courtyard: presenting the property on its own official website before third-party directories.
              </figcaption>
            </figure>
          </div>

          {/* Right column: unified hairline index without stacked white cards */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary pb-3 border-b border-primary/20">
                By sector
              </h3>
              <div className="divide-y divide-primary/10 border-b border-primary/10">
                {sectors.map((sect) => (
                  <Link
                    key={sect.href}
                    to={sect.href}
                    className="group py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 hover:bg-white/50 -mx-3 px-3 rounded-lg transition-colors"
                  >
                    <div className="sm:w-56 shrink-0 flex items-center gap-1.5 font-serif font-bold text-base text-primary group-hover:text-accent transition-colors">
                      <span>{sect.title}</span>
                      <ArrowUpRight size={15} className="text-accent opacity-75 group-hover:opacity-100 shrink-0" />
                    </div>
                    <p className="text-sm text-primary/75 leading-relaxed flex-1">
                      {sect.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between pb-3 border-b border-primary/20">
                <h3 className="text-xl font-serif font-bold text-primary">
                  By city in Morocco
                </h3>
                <Link to="/en/locations" className="text-xs font-semibold text-accent hover:underline">
                  View all locations
                </Link>
              </div>
              <div className="divide-y divide-primary/10 border-b border-primary/10">
                {cities.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 hover:bg-white/50 -mx-3 px-3 rounded-lg transition-colors"
                  >
                    <div className="sm:w-56 shrink-0">
                      <span className="font-serif font-bold text-base text-primary group-hover:text-accent transition-colors inline-flex items-center gap-1.5">
                        {item.city}
                        <ArrowUpRight size={15} className="text-accent opacity-75 group-hover:opacity-100 shrink-0" />
                      </span>
                      <span className="block text-xs text-primary/60 mt-0.5">{item.meta}</span>
                    </div>
                    <p className="text-sm text-primary/75 leading-relaxed flex-1">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
