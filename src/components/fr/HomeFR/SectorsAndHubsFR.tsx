import React from 'react';
import { Target, MapPin } from 'lucide-react';
import OptimizedImage from '../../OptimizedImage';

export default function SectorsAndHubsFR() {
  const sectors = [
    {
      title: "Hôtels & Complexes",
      desc: "Nous concevons des plateformes de réservation directe connectées à votre PMS pour capter et convertir l'audience en séjours sans commission d'intermédiaire."
    },
    {
      title: "Riads de Luxe",
      desc: "Experts de la Médina de Marrakech, nous optimisons votre SEO local et fiches de cartes Google pour vous connecter directement aux voyageurs internationaux."
    },
    {
      title: "Agences de Voyage & Excursions",
      desc: "Des tunnels de conversion fluides et du référencement naturel ciblé par destination pour transformer la recherche organique en ventes directes."
    },
    {
      title: "Restaurants & Traiteurs",
      desc: "Référencement Maps de proximité, visibilité locale et stratégies d'acquisition ciblées pour attirer les clients en salle et générer des leads qualifiés."
    },
    {
      title: "PME & Entreprises de Services",
      desc: "Des sites professionnels rapides, du référencement naturel d'autorité locale et des campagnes de lead gen conçues pour votre force commerciale."
    }
  ];

  const hubs = [
    {
      city: "Casablanca",
      desc: "Acquisition de prospects B2B, création de portails d'entreprises, référencement local et marketing pour la restauration haut de gamme."
    },
    {
      city: "Marrakech",
      desc: "Positionnement local dans la Médina, visibilité Google Maps prioritaire et tunnels de réservation directe pour riads d'exception."
    },
    {
      city: "Rabat",
      desc: "Sites web institutionnels, image de marque d'autorité, communication touristique et visibilité de recherche pour administrations et PME."
    },
    {
      city: "Agadir",
      desc: "SEO de destination ciblé, acquisition de clientèles internationales de loisirs pour resorts balnéaires et surf camps haut de gamme."
    },
    {
      city: "Maroc & Global",
      desc: "Optimisation de recherche multi-régionale et stratégies d'acquisition multilingues pour attirer les voyageurs mondiaux vers les marques nationales."
    }
  ];

  return (
    <section className="py-24 bg-bg border-t border-primary/10 relative overflow-hidden" id="sectors-hubs-section-fr">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
            Secteurs & Zones
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Secteurs Cibles & Hubs d'Intervention
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
            Une expertise sectorielle de pointe alliée à une présence géographique stratégique au Maroc.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: Sectors */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                <Target size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">À Qui Nous Nous Adressons</h3>
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
              <h3 className="text-2xl font-serif font-bold text-primary">Zones d'Intervention</h3>
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
              alt="Détail architectural authentique d'un riad marocain avec zelliges et arches mauresques" 
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
