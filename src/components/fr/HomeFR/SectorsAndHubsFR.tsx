import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import OptimizedImage from '../../OptimizedImage';

export default function SectorsAndHubsFR() {
  const sectors = [
    {
      title: "Riads et maisons d'hôtes",
      href: "/secteurs/riads-maisons-hotes",
      desc: "Sites bilingues connectés à votre planning de chambres et référencement sur Google Maps pour recevoir plus de réservations directes."
    },
    {
      title: "Hôtels et complexes",
      href: "/secteurs/hotels-resorts",
      desc: "Intégration de moteurs PMS (Cloudbeds, Mews, Sirvoy, Little Hotelier) et campagnes Google Ads sur les recherches de séjours."
    },
    {
      title: "Agences de voyage et excursions",
      href: "/secteurs/tour-operateurs",
      desc: "Pages d'itinéraires rapides sur mobile et prise de contact directe sur WhatsApp sans passer par les revendeurs à commission."
    },
    {
      title: "Restaurants et traiteurs",
      href: "/secteurs/restaurants-traiteurs",
      desc: "Fiches locales Google Business Profile pour le service en salle et pages de demande de devis pour les événements d'entreprise."
    },
    {
      title: "PME et cabinets B2B",
      href: "/secteurs/pme-entreprises",
      desc: "Sites professionnels clairs, référencement local par métier et campagnes de recherche Google orientées demandes de devis."
    }
  ];

  const cities = [
    {
      city: "Casablanca",
      href: "/zones/casablanca",
      meta: "Siège : 3 Rue El Kadi Lass, Maarif",
      desc: "Accompagnement des PME, cabinets, traiteurs corporate et hôtels d'affaires sur le Grand Casablanca."
    },
    {
      city: "Marrakech",
      href: "/zones/marrakech",
      meta: "Médina, Guéliz et Palmeraie",
      desc: "Sites de réservations directes, fiches Google Maps et campagnes internationales pour riads, villas et maisons d'hôtes."
    },
    {
      city: "Rabat",
      href: "/zones/rabat",
      meta: "Agdal, Hay Riad et Hassan",
      desc: "Sites institutionnels, visibilité locale sur Google et acquisition de demandes qualifiées pour entreprises et hôtels."
    },
    {
      city: "Agadir",
      href: "/zones/agadir",
      meta: "Zone balnéaire et Taghazout",
      desc: "Référencement touristique multilingue et campagnes saisonnières pour hôtels, résidences et surf camps."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-alt border-t border-primary/10" id="sectors-hubs-section-fr">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Colonne gauche : présentation + photographie réelle */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-sm font-medium text-accent mb-3">
                Secteurs et implantation au Maroc
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-5 leading-tight">
                Établissements accompagnés et villes d'intervention
              </h2>
              <p className="text-base text-primary/80 leading-relaxed">
                Depuis notre bureau de Casablanca (Maarif), nous travaillons avec les établissements touristiques et les PME à travers le Maroc. Le travail s'adapte à la réalité commerciale de chaque ville : demandes de devis B2B à Casablanca et Rabat, réservations directes de nuitées et d'excursions à Marrakech et Agadir.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden border border-primary/10">
              <div className="aspect-[4/3] lg:aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/moroccan-riad-architecture-800.jpg"
                  imageName="moroccan-riad-architecture"
                  alt="Patio d'un riad marocain traditionnel avec arches et zelliges"
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
                Architecture de riad au Maroc : valoriser l'établissement sur son propre site avant les annuaires tiers.
              </figcaption>
            </figure>
          </div>

          {/* Colonne droite : listes éditoriales unifiées sans empilement de cartes */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary pb-3 border-b border-primary/20">
                Par activité
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
                  Par ville au Maroc
                </h3>
                <Link to="/zones" className="text-xs font-semibold text-accent hover:underline">
                  Voir toutes les zones
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
