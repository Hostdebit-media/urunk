import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';
import OptimizedImage from '../../components/OptimizedImage';
import PricingSectionFR from '../../components/fr/HomeFR/PricingSectionFR';
import FaqSectionFR from '../../components/fr/HomeFR/FaqSectionFR';
import BottomFormSectionFR from '../../components/fr/HomeFR/BottomFormSectionFR';

export default function HomeFR() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Agence Web & SEO Maroc pour Hôtels et Riads | Urunk</title>
        <meta
          name="description"
          content="Agence web et SEO au Maroc pour hôtels, riads et PME : sites rapides, Google Ads et référencement local à Casablanca et Marrakech. Audit gratuit."
        />
        <link rel="canonical" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="en" href="https://urunk.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://urunk.com/" />
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://urunk.com/#organization",
                "name": "Urunk",
                "url": "https://urunk.com/",
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
                "@id": "https://urunk.com/#localbusiness",
                "name": "Urunk",
                "url": "https://urunk.com/",
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
                "name": "Création de site web pour hôtels, riads et PME",
                "provider": { "@id": "https://urunk.com/#organization" },
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
                "name": "Référencement local et Google Maps au Maroc",
                "provider": { "@id": "https://urunk.com/#organization" },
                "areaServed": "MA"
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Gestion Google Ads au Maroc",
                "provider": { "@id": "https://urunk.com/#organization" },
                "areaServed": "MA"
              }
            ]
          `}
        </script>
      </Helmet>

      {/* 1. Promesse principale et aperçu annoté d'une page d'établissement livrée */}
      <section className="pt-12 pb-16 md:pt-18 md:pb-22 px-6 bg-bg-light" id="hero-section-fr">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6 lg:pt-4">
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-serif font-bold text-primary leading-[1.1] mb-6 [text-wrap:balance]"
              id="hero-h1-fr"
            >
              Sites web, SEO local et annonces Google pour hôtels, riads et PME au Maroc
            </h1>
            <p
              className="text-base sm:text-lg text-primary/80 leading-relaxed max-w-xl mb-4"
              id="hero-subtext-fr"
            >
              Depuis notre bureau de Casablanca, nous créons des sites rapides reliés à votre moteur de réservation, améliorons votre classement sur Google Maps et lançons vos annonces de recherche pour vous aider à recevoir plus de réservations directes ou de demandes de devis.
            </p>
            <p className="text-base text-primary/75 leading-relaxed max-w-xl mb-8">
              Un site complet est livré en 4 à 6 semaines dès 12 000 MAD, et chaque suivi mensuel reste résiliable avec 15 jours de préavis.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-6" id="hero-actions-fr">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                id="hero-cta-btn-fr"
              >
                <span>Demander un audit gratuit</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/212668802096?text=Bonjour%2C%20je%20souhaite%20demander%20un%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary/85 hover:text-accent underline underline-offset-4 transition-colors"
                id="hero-whatsapp-btn-fr"
              >
                WhatsApp : +212 668-802096
              </a>
            </div>

            <p className="text-xs text-primary/65 leading-relaxed">
              3 Rue El Kadi Lass, Maarif, Casablanca · Intervention à Casablanca, Marrakech, Rabat et Agadir
            </p>
          </div>

          {/* Aperçu annoté de l'architecture livrée */}
          <figure
            className="lg:col-span-6 bg-white rounded-xl border border-primary/15 overflow-hidden"
            id="hero-image-container-fr"
          >
            <div className="px-4 py-2.5 bg-bg-alt border-b border-primary/10 flex items-center justify-between gap-4 text-xs text-primary/75">
              <span className="font-mono text-[11px] truncate">Architecture type · Page officielle d’hébergement</span>
              <span className="font-mono text-[11px] shrink-0">FR / EN · 4G mobile</span>
            </div>

            <div className="relative aspect-[16/10] w-full bg-bg-alt">
              <ImageWithSkeleton
                src="/images/optimized/moroccan-riad-architecture-800.jpg"
                imageName="moroccan-riad-architecture"
                alt="Cour intérieure d'un riad marocain traditionnel avec arches et zelliges"
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
                    <p className="text-xs text-white/80">Parcours direct sur le domaine de l'établissement</p>
                    <p className="font-serif font-bold text-base sm:text-lg">Chambres, tarifs en temps réel et contact immédiat</p>
                  </div>
                  <span className="text-xs font-medium bg-white/15 backdrop-blur-xs border border-white/25 px-3 py-1.5 rounded-md">
                    Vérifier les disponibilités
                  </span>
                </div>
              </div>
            </div>

            <figcaption className="p-4 sm:p-5 grid sm:grid-cols-3 gap-4 text-xs text-primary/80 divide-y sm:divide-y-0 sm:divide-x divide-primary/10">
              <div className="pt-2 sm:pt-0 sm:pr-3 first:pt-0">
                <strong className="font-semibold text-primary block mb-0.5">Chargement léger</strong>
                <span>Photos converties en AVIF/WebP et lecture claire sur smartphone.</span>
              </div>
              <div className="pt-2 sm:pt-0 sm:px-3">
                <strong className="font-semibold text-primary block mb-0.5">Connexion PMS</strong>
                <span>Calendrier relié à Cloudbeds, Mews, Sirvoy ou Little Hotelier.</span>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-3">
                <strong className="font-semibold text-primary block mb-0.5">Contact direct</strong>
                <span>Lien WhatsApp, formulaire court et fiche Google Maps reliée.</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. Problème des commissions OTA et comparaison honnête des coûts */}
      <section className="bg-primary text-white py-14 md:py-16 px-6" id="ota-dependence-section-fr">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-snug text-white [text-wrap:balance]">
              Pourquoi vos futurs clients passent encore par les plateformes à commission
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-4">
              Lorsqu'un voyageur repère le nom de votre riad ou de votre hôtel mais tombe sur un site lent sur téléphone ou une fiche Google Maps incomplète, il retourne réserver sur Booking.com, Expedia ou Viator. Ces intermédiaires retiennent en général entre 15 % et 25 % du montant du séjour selon contrat.
            </p>
            <p className="text-xs text-white/65 leading-relaxed">
              Source et repère tarifaire : le taux de base moyen documenté par{' '}
              <a
                href="https://partner.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white/85 hover:text-white"
              >
                Booking.com Partner Hub
              </a>{' '}
              s'établit autour de 15 % hors options de visibilité additionnelles (programme Preferred Partner, Visibility Booster) ou revendeurs d'activités (documentation partenaires consultée en octobre 2026 ; vérifiez le taux exact inscrit à votre contrat).
            </p>
          </div>

          <div className="lg:col-span-7 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/20 text-xs text-white/70">
                  <th className="py-3 pr-4 font-semibold w-1/3">Canal de réservation</th>
                  <th className="py-3 px-4 font-semibold">Frais appliqués par séjour</th>
                  <th className="py-3 pl-4 font-semibold">Relation avec le client</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/15">
                <tr>
                  <td className="py-4 pr-4 align-top font-serif font-bold text-base text-white">
                    Plateforme OTA
                    <span className="block font-sans font-normal text-xs text-white/60 mt-0.5">
                      Booking.com, Expedia, Viator
                    </span>
                  </td>
                  <td className="py-4 px-4 align-top text-white/85 leading-relaxed tabular-nums">
                    15 % à 25 % de commission selon votre contrat et les programmes de mise en avant activés.
                  </td>
                  <td className="py-4 pl-4 align-top text-white/80 leading-relaxed">
                    Échanges filtrés par la plateforme et présentation d'établissements concurrents sous vos chambres.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 align-top font-serif font-bold text-base text-yellow-400">
                    Votre site officiel
                    <span className="block font-sans font-normal text-xs text-white/60 mt-0.5">
                      Domaine propre + moteur PMS
                    </span>
                  </td>
                  <td className="py-4 px-4 align-top text-white/90 leading-relaxed">
                    Aucune commission d'agence en ligne. Vous réglez uniquement vos frais habituels de logiciel PMS, d'encaissement bancaire et votre éventuel budget publicitaire.
                  </td>
                  <td className="py-4 pl-4 align-top text-white/85 leading-relaxed">
                    Confirmation directe avec le voyageur par e-mail ou WhatsApp avant son arrivée.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Trois services rédigés en prose naturelle (sans listes d'inventaire SEO) */}
      <section className="py-16 md:py-20 px-6 bg-white border-t border-primary/10" id="thematic-blocks-fr">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 leading-snug [text-wrap:balance]" id="services-title-fr">
              Trois services complémentaires selon votre besoin
            </h2>
            <p className="text-sm sm:text-base text-primary/75 leading-relaxed mb-5">
              Vous pouvez nous confier uniquement la refonte de votre site, ou y associer un travail mensuel sur Google Maps et les annonces payantes. Nous accompagnons aussi bien les hébergements touristiques que les agences d'excursions, les traiteurs et les PME de services.
            </p>
            <p className="text-sm">
              <Link to="/realisations" className="font-semibold text-accent hover:underline underline-offset-4">
                Consulter nos exemples d'architectures par métier
              </Link>
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-primary/15 border-y border-primary/15">
            <article className="py-6">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                Création de site web et réservation en ligne
              </h3>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed mb-3">
                Nous concevons des sites bilingues en français et en anglais qui chargent vite sur réseau mobile. Pour un hôtel ou un riad, nous connectons directement votre calendrier PMS (Cloudbeds, Mews, Sirvoy, Little Hotelier). Pour une agence d'excursions, un traiteur ou une PME, nous mettons en place des pages claires avec demande de devis rapide et contact WhatsApp.{' '}
                <Link to="/creation-site-web" className="font-semibold text-accent hover:underline underline-offset-4">
                  Détail de la création web
                </Link>
              </p>
            </article>

            <article className="py-6">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                Référencement local et fiche Google Maps
              </h3>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed mb-3">
                Nous structurons vos pages par service et par quartier, corrigeons les lenteurs techniques et tenons à jour votre fiche Google Business Profile. L'objectif est d'améliorer durablement votre classement local lorsqu'un voyageur ou un acheteur professionnel cherche un établissement fiable dans votre ville.{' '}
                <Link to="/agence-seo-maroc" className="font-semibold text-accent hover:underline underline-offset-4">
                  Détail du suivi SEO local
                </Link>
              </p>
            </article>

            <article className="py-6">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                Annonces Google Ads, Meta et TripAdvisor
              </h3>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                Lorsque vous souhaitez lancer des annonces pour soutenir une ouverture, remplir une basse saison ou obtenir des devis rapidement, nous créons et gérons vos campagnes sur vos propres comptes publicitaires. Nous écartons chaque semaine les requêtes hors sujet pour concentrer vos dépenses sur des demandes concrètes.{' '}
                <Link to="/google-ads-maroc" className="font-semibold text-accent hover:underline underline-offset-4">
                  Détail de la gestion d'annonces
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Méthode de travail illustrée (diptyque photo + déroulement en 3 étapes sans double numérotation) */}
      <section className="py-16 md:py-20 px-6 bg-bg-alt border-t border-primary/10" id="process-section-fr">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            <figure className="bg-white rounded-xl overflow-hidden border border-primary/10">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/art-house-hero-800.jpg"
                  imageName="art-house-hero"
                  alt="Artisan potier dans son atelier traditionnel au Maroc"
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
                Ateliers, excursions et commerces : faciliter la réservation sur mobile.
              </figcaption>
            </figure>

            <figure className="bg-white rounded-xl overflow-hidden border border-primary/10 sm:mt-8">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/moroccan-riad-hospitality-800.jpg"
                  imageName="moroccan-riad-hospitality"
                  alt="Patio calme avec piscine au sein d'un riad marocain"
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
                Hôtels et maisons d'hôtes : relier le site officiel au planning des chambres.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 leading-snug [text-wrap:balance]">
              Comment se déroule un projet avec notre équipe
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-bold text-lg text-primary mb-1">
                  Première étape : diagnostic écrit sous 24 heures ouvrées
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                  Nous testons votre site actuel sur téléphone, vérifions votre fiche Google Maps et identifions les freins à la prise de contact. Vous recevez un constat clair accompagné d'un devis forfaitaire chiffré.
                </p>
              </div>

              <div className="pt-5 border-t border-primary/15">
                <h3 className="font-serif font-bold text-lg text-primary mb-1">
                  Deuxième étape : mise en ligne sous 4 à 6 semaines
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                  Nous rédigeons et intégrons vos pages en français et en anglais, optimisons le poids des photos, connectons votre moteur PMS ou vos formulaires de devis et installons la mesure des contacts sur Google Analytics.
                </p>
              </div>

              <div className="pt-5 border-t border-primary/15">
                <h3 className="font-serif font-bold text-lg text-primary mb-1">
                  Troisième étape : suivi mensuel libre et résiliable
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                  Lorsque nous assurons votre référencement local ou la gestion de vos annonces, nous vous envoyons chaque mois un relevé simple des actions menées et des demandes reçues. Vous pouvez arrêter le suivi à tout moment avec 15 jours de préavis écrit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tarifs en dirhams et garanties contractuelles */}
      <PricingSectionFR />

      {/* 6. FAQ concise (4 questions pratiques non redondantes) */}
      <FaqSectionFR />

      {/* 7. Appel concret à demander un audit */}
      <BottomFormSectionFR />
    </div>
  );
}
