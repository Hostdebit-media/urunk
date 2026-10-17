import React from 'react';
import { Target, MapPin } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';

export default function SectorsAndHubs() {
  const sectors = [
    {
      title: "Hotels & Resorts",
      desc: "We build direct booking systems connected to your PMS to capture and convert web traffic into commission-free stays."
    },
    {
      title: "Luxury Riads",
      desc: "As experts of the Marrakech Medina, we optimize your local SEO and Google Maps profiles to connect you with international travelers."
    },
    {
      title: "Travel Agencies & Excursions",
      desc: "Seamless conversion funnels and targeted organic search marketing by destination to turn searches into direct bookings."
    },
    {
      title: "Restaurants & Catering",
      desc: "Google Maps visibility, local search authority, and acquisition strategies designed to attract guests and generate quality inquiries."
    },
    {
      title: "SMEs & Service Businesses",
      desc: "Fast professional websites, local search authority, and lead generation campaigns tailored to your sales team."
    }
  ];

  const hubs = [
    {
      city: "Casablanca",
      desc: "B2B client acquisition, corporate portals, local search optimization, and marketing for high-end dining."
    },
    {
      city: "Marrakech",
      desc: "Local positioning in the Medina, priority Google Maps optimization, and direct booking funnels for luxury properties."
    },
    {
      city: "Rabat",
      desc: "Institutional web portals, high-authority branding, tourism communication, and search authority for local companies."
    },
    {
      city: "Agadir",
      desc: "Targeted destination SEO, international leisure traveler acquisition for seaside resorts and premium surf camps."
    },
    {
      city: "Morocco & Global",
      desc: "Multi-regional search optimization and multi-language acquisition strategies to attract global travelers to national brands."
    }
  ];

  return (
    <section className="py-24 bg-bg border-t border-primary/10 relative overflow-hidden" id="sectors-hubs-section-en">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
            Sectors & Hubs
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Target Industries & Regional Hubs
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
            Specialized industry expertise combined with strategic geographic presence in Morocco.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: Sectors */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                <Target size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Who We Serve</h3>
            </div>
            <div className="space-y-4">
              {sectors.map((sect, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-primary/5 shadow-xs hover:border-accent/20 transition-all">
                  <h4 className="text-lg font-serif font-bold text-primary mb-2">{sect.title}</h4>
                  <p className="text-sm text-primary/70 font-light leading-relaxed">{sect.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Hubs */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Our Regions</h3>
            </div>
            <div className="space-y-4">
              {hubs.map((hub, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-primary/5 shadow-xs hover:border-accent/20 transition-all">
                  <h4 className="text-lg font-serif font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {hub.city}
                  </h4>
                  <p className="text-sm text-primary/70 font-light leading-relaxed">{hub.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Moody Moroccan Architecture Image */}
          <div className="hidden lg:block h-full min-h-[450px] rounded-3xl overflow-hidden relative border border-primary/10 shadow-xs">
            <OptimizedImage 
              src="/images/optimized/moroccan-riad-architecture-800.jpg"
              imageName="moroccan-riad-architecture"
              alt="Architectural detail of authentic Moroccan riad courtyard with zellige tilework and Moorish arches" 
              width={600}
              height={800}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              imgClassName="object-cover filter brightness-[0.9] contrast-[1.05]"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
