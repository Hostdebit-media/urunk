import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';
import OptimizedImage from '../../components/OptimizedImage';
import SectorsAndHubsFR from '../../components/fr/HomeFR/SectorsAndHubsFR';
import PricingSectionFR from '../../components/fr/HomeFR/PricingSectionFR';
import FaqSectionFR from '../../components/fr/HomeFR/FaqSectionFR';
import BottomFormSectionFR from '../../components/fr/HomeFR/BottomFormSectionFR';

export default function HomeFR() {
  const blueprints = [
    {
      sector: 'Excursions et circuits privés',
      title: 'Réduire les commissions Viator et GetYourGuide grâce au site mobile et WhatsApp',
      summary: 'Pages d’itinéraires rapides sur 4G (Marrakech, Atlas, Merzouga), balisage TourOperator et annonces de recherche ciblées pour traiter les demandes en direct.',
      href: '/realisations/services-voyage-maroc'
    },
    {
      sector: 'Traiteurs et événements B2B',
      title: 'Capter les demandes de devis d’entreprises à Casablanca et Marrakech',
      summary: 'Pages dédiées aux séminaires et réceptions, formulaire court de chiffrage par convive et campagnes Google Search diffusées sur les horaires de bureau.',
      href: '/realisations/nomad-eats-traiteur'
    },
    {
      sector: 'Ateliers et activités touristiques',
      title: 'Attirer les voyageurs sur place en Médina via Google Maps et Instagram',
      summary: 'Optimisation de la fiche Google Business Profile, réservation mobile directe et ciblage publicitaire dans un rayon proche à Marrakech.',
      href: '/realisations/art-house-marrakech'
    }
  ];

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
                "name": "Référencement naturel et Google Maps au Maroc",
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

      {/* Chapitre 1A : Hero éditorial asymétrique */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 px-6 bg-bg-light" id="hero-section-fr">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-accent mb-4" id="hero-kicker-fr">
              Casablanca et Marrakech · Hôtellerie, tourisme et PME
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-serif font-bold text-primary leading-[1.1] mb-6"
              id="hero-h1-fr"
            >
              Agence web et SEO pour hôtels, riads et PME au Maroc
            </h1>
            <p
              className="text-lg md:text-xl text-primary/80 leading-relaxed max-w-2xl mb-8"
              id="hero-subtext-fr"
            >
              Nous créons des sites rapides connectés à votre moteur de réservation, optimisons votre présence sur Google Maps et gérons vos campagnes Google Ads pour générer des réservations directes sans commission et des demandes de devis qualifiées.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6" id="hero-actions-fr">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                id="hero-cta-btn-fr"
              >
                <span>Demander un audit gratuit</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/212668802096?text=Bonjour%2C%20je%20souhaite%20un%20audit%20gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-accent underline underline-offset-4 px-2 py-2 transition-colors"
                id="hero-whatsapp-btn-fr"
              >
                Écrire sur WhatsApp (+212 668-802096)
              </a>
            </div>

            <p className="text-xs text-primary/65 leading-relaxed pt-4 border-t border-primary/10 max-w-xl">
              Sites livrés en 4 à 6 semaines · Suivi mensuel avec 15 jours de préavis · Propriété complète du code et des comptes
            </p>
          </div>

          <figure className="lg:col-span-5 rounded-2xl overflow-hidden border border-primary/10 bg-bg-alt" id="hero-image-container-fr">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/6] w-full">
              <ImageWithSkeleton
                src="/images/optimized/art-house-hero-800.jpg"
                imageName="art-house-hero"
                alt="Artisan potier dans un atelier traditionnel à Marrakech"
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
              Accompagnement des riads, maisons d'hôtes, ateliers et entreprises de services au Maroc.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Chapitre 1B : Le problème des commissions OTA vs réservations directes */}
      <section className="bg-primary text-white py-20 px-6" id="ota-dependence-section-fr">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-yellow-400 mb-3">
              Économie d'un établissement hôtelier
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5 leading-tight text-white">
              Reprenez une part de vos nuitées vendues sur les plateformes OTA
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
              Booking.com, Expedia et les revendeurs d'activités prélèvent entre 15 % et 25 % sur chaque réservation. Lorsque votre site officiel est lent sur téléphone ou absent de Google Maps, même les voyageurs qui connaissent déjà le nom de votre riad finissent par réserver via un intermédiaire.
            </p>
            <Link
              to="/marketing-digital-hotelier"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:underline underline-offset-4"
            >
              <span>Consulter notre approche pour l'hôtellerie</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-6 border-t border-white/15 divide-y divide-white/15">
            <div className="py-6 grid sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5">
                <h3 className="font-serif font-bold text-lg text-white">Via une plateforme OTA</h3>
                <p className="text-xs text-white/60 mt-1">Booking.com, Expedia, Viator</p>
              </div>
              <div className="sm:col-span-7 text-sm text-white/80 space-y-1.5 leading-relaxed">
                <p><strong className="text-white font-semibold">15 à 25 % de commission</strong> retenue sur chaque séjour ou excursion (selon contrat).</p>
                <p>Relation client intermédiée et affichage des établissements concurrents sur votre fiche.</p>
              </div>
            </div>

            <div className="py-6 grid sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5">
                <h3 className="font-serif font-bold text-lg text-yellow-400">Sur votre site officiel</h3>
                <p className="text-xs text-white/60 mt-1">Moteur PMS ou contact direct</p>
              </div>
              <div className="sm:col-span-7 text-sm text-white/85 space-y-1.5 leading-relaxed">
                <p><strong className="text-yellow-400 font-semibold">0 % de commission OTA</strong> sur les réservations directes enregistrées sur votre domaine.</p>
                <p>Synchronisation directe avec votre PMS (Cloudbeds, Mews, Sirvoy, Little Hotelier) et contact immédiat avec le voyageur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapitre 2 : Pôles d'intervention, méthode en 3 étapes et plans d'action */}
      <section className="py-20 md:py-28 bg-white border-t border-primary/10" id="thematic-blocks-fr">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium text-accent mb-3">
              Services et méthode de travail
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5" id="services-title-fr">
              Création de sites web, référencement local et campagnes d'annonces
            </h2>
            <p className="text-base md:text-lg text-primary/75 leading-relaxed">
              Chaque levier répond à un objectif précis : disposer d'un site rapide qui convertit sur mobile, ressortir sur Google et Google Maps dans votre ville, et capter les recherches immédiates par la publicité lorsque la saison le demande.
            </p>
          </div>

          {/* 4 colonnes éditoriales à filets fins (zéro boîte redondante) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" id="thematic-quad-grid-fr">
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                01. Sites web et réservation
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Sites bilingues rapides sur mobile, raccordés à votre moteur de réservation ou à WhatsApp.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/creation-site-web" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Création de site web au Maroc</Link></li>
                <li><Link to="/site-web-hotel" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Sites web pour hôtels</Link></li>
                <li><Link to="/site-web-riad-marrakech" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Site web riad à Marrakech</Link></li>
                <li><Link to="/agence-web-casablanca" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Agence web à Casablanca</Link></li>
                <li><Link to="/reservation-directe" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Stratégie de réservation directe</Link></li>
              </ul>
            </div>

            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                02. SEO et Google Maps
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Positionnement durable sur les recherches locales et optimisation complète des fiches d'établissement.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/agence-seo-maroc" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Agence SEO Maroc</Link></li>
                <li><Link to="/seo-riad-marrakech" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">SEO pour riads à Marrakech</Link></li>
                <li><Link to="/referencement-local-casablanca" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Référencement local Casablanca</Link></li>
                <li><Link to="/services/google-business-profile" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Fiche Google Business Profile</Link></li>
              </ul>
            </div>

            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                03. Campagnes payantes
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Annonces ciblées sur vos propres comptes pour générer des réservations directes ou des devis.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/google-ads-maroc" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Gestion Google Ads Maroc</Link></li>
                <li><Link to="/services/gestion-publicites-meta" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Campagnes Meta Ads (Instagram)</Link></li>
                <li><Link to="/services/tripadvisor-ads" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Sponsoring TripAdvisor Ads</Link></li>
                <li><Link to="/services" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Tous nos services marketing</Link></li>
              </ul>
            </div>

            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                04. Spécialités et guides
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed mb-4">
                Prestations techniques complémentaires et ressources pratiques pour hôteliers et dirigeants.
              </p>
              <ul className="space-y-2 text-sm font-medium text-primary">
                <li><Link to="/services/wordpress-seo" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Audit et SEO WordPress</Link></li>
                <li><Link to="/services/ecommerce-seo" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">SEO E-commerce</Link></li>
                <li><Link to="/services/ai-seo-optimization" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Optimisation SEO sémantique</Link></li>
                <li><Link to="/blog/reduire-commissions-ota" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Guide : réduire les commissions OTA</Link></li>
                <li><Link to="/blog/tripadvisor-vs-google-ads" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Comparatif TripAdvisor vs Google Ads</Link></li>
                <li><Link to="/blog/guide-seo-hotellerie-maroc" className="hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4">Guide du SEO hôtelier au Maroc</Link></li>
              </ul>
            </div>
          </div>

          {/* Déroulement en 3 étapes + Exemples de plans d'action appliqués */}
          <div className="pt-16 border-t border-primary/15 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                  Déroulement d'un projet en trois étapes
                </h3>
                <ol className="divide-y divide-primary/10 border-y border-primary/10 text-sm">
                  <li className="py-4">
                    <span className="font-serif font-bold text-base text-primary block mb-1">
                      1. Diagnostic gratuit sous 24 à 48 h
                    </span>
                    <span className="text-primary/75 leading-relaxed block">
                      Vérification de la vitesse mobile actuelle, de votre visibilité Google Maps et du parcours de réservation ou de prise de contact.
                    </span>
                  </li>
                  <li className="py-4">
                    <span className="font-serif font-bold text-base text-primary block mb-1">
                      2. Mise en place sous 4 à 6 semaines
                    </span>
                    <span className="text-primary/75 leading-relaxed block">
                      Développement du site, connexion au PMS hôtelier ou aux formulaires de devis, balisage SEO et configuration du suivi analytique GA4.
                    </span>
                  </li>
                  <li className="py-4">
                    <span className="font-serif font-bold text-base text-primary block mb-1">
                      3. Pilotage mensuel sans engagement captif
                    </span>
                    <span className="text-primary/75 leading-relaxed block">
                      Optimisation continue des mots-clés, des annonces et des pages selon les réservations directes et demandes réellement reçues.
                    </span>
                  </li>
                </ol>
              </div>

              <figure className="rounded-2xl overflow-hidden border border-primary/10 bg-bg-alt">
                <div className="aspect-[16/10] w-full">
                  <OptimizedImage
                    src="/images/optimized/moroccan-riad-hospitality-800.jpg"
                    imageName="moroccan-riad-hospitality"
                    alt="Cour intérieure paisible d'un riad marocain"
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
                  Parcours de réservation pensé pour les voyageurs consultant votre établissement sur smartphone.
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    Plans d'action types par métier
                  </h3>
                  <p className="text-sm text-primary/75 mt-1">
                    Trois cadres d'intervention détaillant l'architecture technique et publicitaire mise en place selon le secteur.
                  </p>
                </div>
                <Link
                  to="/realisations"
                  className="text-sm font-semibold text-accent hover:underline shrink-0"
                >
                  Voir tous les dossiers
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

      {/* Chapitre 3 : Secteurs et villes au Maroc unifiés */}
      <SectorsAndHubsFR />

      {/* Chapitre 4 : Tarifs fixes et engagements contractuels unifiés */}
      <PricingSectionFR />

      {/* Chapitre 5 : Questions fréquentes et demande d'audit */}
      <FaqSectionFR />
      <BottomFormSectionFR />
    </div>
  );
}
