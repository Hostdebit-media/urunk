import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';
import OptimizedImage from '../../components/OptimizedImage';
import PricingSectionFR from '../../components/fr/HomeFR/PricingSectionFR';
import FaqSectionFR from '../../components/fr/HomeFR/FaqSectionFR';
import BottomFormSectionFR from '../../components/fr/HomeFR/BottomFormSectionFR';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Hairline from '../../components/ui/Hairline';

const homeFrServiceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de site web pour hôtels, riads et PME',
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
    name: 'Référencement local et Google Maps au Maroc',
    provider: { '@id': 'https://urunk.com/#service' },
    areaServed: 'MA',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gestion Google Ads au Maroc',
    provider: { '@id': 'https://urunk.com/#service' },
    areaServed: 'MA',
  },
];

export default function HomeFR() {
  return (
    <div className="w-full">
      <SEO
        title="Agence Web Hôtels & Riads Maroc | Réservation Directe | Urunk"
        description="Sites web premium pour hôtels et riads au Maroc, SEO local et Google Ads. Développez vos réservations directes. Audit offert."
        schema={homeFrServiceSchemas}
      />

      {/* 1. Promesse principale */}
      <Section tone="light" id="hero-section-fr" className="pt-12 md:pt-20">
        <div className="space-y-12">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-5">Studio digital spécialisé · Hôtellerie & tourisme · Maroc</p>
            <h1
              className="text-[clamp(38px,4.6vw,68px)] leading-[1.04] max-w-[26ch] mb-6"
              id="hero-h1-fr"
            >
              Agence web & SEO pour hôtels et riads au Maroc
            </h1>
            <p
              className="text-lg text-primary/85 leading-relaxed max-w-[65ch] mb-4"
              id="hero-subtext-fr"
            >
              Votre établissement mérite mieux qu'une simple vitrine. Nous concevons des sites élégants reliés à votre système de réservation et associons SEO local et campagnes ciblées pour transformer davantage de recherches en contacts directs.
            </p>
            <p className="text-base text-primary/75 leading-relaxed max-w-[65ch] mb-8">
              Depuis Casablanca, nous accompagnons les hôtels indépendants, riads et maisons d'hôtes au Maroc. Sites bilingues dès 12 000 MAD, avec un périmètre et un devis clairs.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6" id="hero-actions-fr">
              <Button href="/contact" variant="primary" id="hero-cta-btn-fr">
                Demander un audit gratuit
              </Button>
              <Button
                href="https://wa.me/212668802096?text=Bonjour%2C%20je%20souhaite%20demander%20un%20audit"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn-fr"
              >
                WhatsApp : +212 668-802096
              </Button>
            </div>

            <nav aria-label="Explorer nos expertises" className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
              <Link to="/site-web-hotel" className="font-semibold">Sites web hôteliers</Link>
              <Link to="/seo-hotel" className="font-semibold">SEO hôtelier</Link>
              <Link to="/reservation-directe" className="font-semibold">Réservation directe</Link>
            </nav>

            <p className="text-sm text-primary/70 leading-relaxed m-0">
              3 Rue El Kadi Lass, Maarif, Casablanca. Intervention à Casablanca, Marrakech, Rabat et Agadir.
            </p>
          </div>

          <figure
            className="bg-bg-card rounded-sm border border-border-subtle overflow-hidden m-0"
            id="hero-image-container-fr"
          >
            <div className="aspect-[16/9] w-full bg-bg-alt">
              <ImageWithSkeleton
                src="/images/optimized/moroccan-riad-architecture-800.jpg"
                imageName="moroccan-riad-architecture"
                alt="Cour intérieure d'un riad marocain traditionnel avec arches et zelliges"
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
                <strong className="font-semibold text-primary block mb-1">Chargement léger</strong>
                <span>Photos converties en AVIF/WebP et lecture claire sur smartphone.</span>
              </div>
              <div>
                <strong className="font-semibold text-primary block mb-1">Connexion PMS</strong>
                <span>Calendrier relié à Cloudbeds, Mews, Sirvoy ou Little Hotelier.</span>
              </div>
              <div>
                <strong className="font-semibold text-primary block mb-1">Contact direct</strong>
                <span>Lien WhatsApp, formulaire court et fiche Google Maps reliée.</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* 2. Problème des commissions OTA et comparaison honnête des coûts */}
      <Section tone="dark" id="ota-dependence-section-fr">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <h2 className="mb-5 text-bg-light">
              Pourquoi vos futurs clients passent encore par les plateformes à commission
            </h2>
            <p className="text-bg-light/85 leading-relaxed mb-4">
              Lorsqu'un voyageur repère le nom de votre riad ou de votre hôtel mais tombe sur un site lent sur téléphone ou une fiche Google Maps incomplète, il peut retourner réserver sur une plateforme comme Booking.com ou Expedia. Les commissions varient selon la plateforme, votre contrat et les options de visibilité choisies.
            </p>
            <p className="text-sm text-bg-light/70 leading-relaxed m-0">
              Pour connaître les conditions applicables à votre établissement, consultez la documentation de{' '}
              <a
                href="https://partner.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bg-light hover:text-white"
              >
                Booking.com Partner Hub
              </a>{' '}
              et vérifiez les frais prévus dans votre contrat, y compris les programmes de visibilité optionnels.
            </p>
          </div>

          <div className="lg:col-span-7 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-bg-light/20 text-xs text-bg-light/75">
                  <th className="py-3 pr-4 font-semibold w-1/3">Canal de réservation</th>
                  <th className="py-3 px-4 font-semibold">Frais appliqués par séjour</th>
                  <th className="py-3 pl-4 font-semibold">Relation avec le client</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bg-light/15">
                <tr>
                  <td className="py-5 pr-4 align-top font-serif text-lg text-bg-light">
                    Plateforme OTA
                    <span className="block font-sans text-xs text-bg-light/65 mt-1">
                      Booking.com, Expedia, Viator
                    </span>
                  </td>
                  <td className="py-5 px-4 align-top text-bg-light/85 leading-relaxed tabular-nums">
                    Commissions variables selon votre contrat et les programmes de mise en avant activés.
                  </td>
                  <td className="py-5 pl-4 align-top text-bg-light/80 leading-relaxed">
                    Échanges filtrés par la plateforme et présentation d'établissements concurrents sous vos chambres.
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 align-top font-serif text-lg text-bg-light">
                    Votre site officiel
                    <span className="block font-sans text-xs text-bg-light/65 mt-1">
                      Domaine propre + moteur PMS
                    </span>
                  </td>
                  <td className="py-5 px-4 align-top text-bg-light leading-relaxed">
                    Aucune commission d'agence en ligne. Vous réglez uniquement vos frais habituels de logiciel PMS, d'encaissement bancaire et votre éventuel budget publicitaire.
                  </td>
                  <td className="py-5 pl-4 align-top text-bg-light/85 leading-relaxed">
                    Confirmation directe avec le voyageur par e-mail ou WhatsApp avant son arrivée.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 3. Trois services rédigés en prose naturelle */}
      <Section tone="light" id="thematic-blocks-fr">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <h2 className="mb-4" id="services-title-fr">
              Trois services complémentaires selon votre besoin
            </h2>
            <p className="text-primary/80 leading-relaxed mb-5">
              Vous pouvez nous confier uniquement la refonte de votre site, ou y associer un travail mensuel sur Google Maps et les annonces payantes. Nous accompagnons aussi bien les hébergements touristiques que les agences d'excursions, les traiteurs et les PME de services.
            </p>
            <p className="text-base m-0">
              <Link to="/realisations" className="font-medium">
                Consulter nos exemples d'architectures par métier
              </Link>
            </p>
          </div>

          <div className="lg:col-span-8">
            <Hairline />
            <div className="divide-y divide-border-subtle border-b border-border-subtle">
              <article className="py-7">
                <h3 className="mb-2">
                  Création de site web et réservation en ligne
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  Nous concevons des sites bilingues en français et en anglais qui chargent vite sur réseau mobile. Pour un hôtel ou un riad, nous connectons directement votre calendrier PMS (Cloudbeds, Mews, Sirvoy, Little Hotelier). Pour une agence d'excursions, un traiteur ou une PME, nous mettons en place des pages claires avec demande de devis rapide et contact WhatsApp.{' '}
                  <Link to="/services/creation-site-web" className="font-medium">
                    Détail de la création web
                  </Link>
                </p>
              </article>

              <article className="py-7">
                <h3 className="mb-2">
                  Référencement local et fiche Google Maps
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  Nous structurons vos pages par service et par quartier, corrigeons les lenteurs techniques et tenons à jour votre fiche Google Business Profile. L'objectif est d'améliorer durablement votre classement local lorsqu'un voyageur ou un acheteur professionnel cherche un établissement fiable dans votre ville.{' '}
                  <Link to="/agence-seo-maroc" className="font-medium">
                    Détail du suivi SEO local
                  </Link>
                </p>
              </article>

              <article className="py-7">
                <h3 className="mb-2">
                  Annonces Google Ads, Meta et TripAdvisor
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  Lorsque vous souhaitez lancer des annonces pour soutenir une ouverture, remplir une basse saison ou obtenir des devis rapidement, nous créons et gérons vos campagnes sur vos propres comptes publicitaires. Nous écartons chaque semaine les requêtes hors sujet pour concentrer vos dépenses sur des demandes concrètes.{' '}
                  <Link to="/google-ads-maroc" className="font-medium">
                    Détail de la gestion d'annonces
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Méthode de travail illustrée */}
      <Section tone="alt" id="process-section-fr" className="border-t border-border-subtle">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            <figure className="bg-bg-card rounded-sm overflow-hidden border border-border-subtle m-0">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/art-house-hero-800.jpg"
                  imageName="art-house-hero"
                  alt="Artisan potier dans son atelier traditionnel au Maroc"
                  width={500}
                  height={625}
                  className="w-full h-full"
                  imgClassName="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
              <figcaption className="p-4 text-xs text-primary/75 border-t border-border-subtle leading-relaxed">
                Ateliers, excursions et commerces : faciliter la réservation sur mobile.
              </figcaption>
            </figure>

            <figure className="bg-bg-card rounded-sm overflow-hidden border border-border-subtle m-0 sm:mt-8">
              <div className="aspect-[4/5] w-full">
                <OptimizedImage
                  src="/images/optimized/moroccan-riad-hospitality-800.jpg"
                  imageName="moroccan-riad-hospitality"
                  alt="Patio calme avec piscine au sein d'un riad marocain"
                  width={500}
                  height={625}
                  className="w-full h-full"
                  imgClassName="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
              <figcaption className="p-4 text-xs text-primary/75 border-t border-border-subtle leading-relaxed">
                Hôtels et maisons d'hôtes : relier le site officiel au planning des chambres.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <h2 className="mb-8">
              Comment se déroule un projet avec notre équipe
            </h2>

            <Hairline />
            <ol className="divide-y divide-border-subtle border-b border-border-subtle list-none p-0 m-0">
              <li className="py-6">
                <p className="text-xs font-semibold text-accent mb-1 m-0">01</p>
                <h3 className="mb-2">
                  Première étape : diagnostic écrit et proposition claire
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  Nous testons votre site actuel sur téléphone, vérifions votre fiche Google Maps et identifions les freins à la prise de contact. Vous recevez un constat clair accompagné d'un devis forfaitaire chiffré.
                </p>
              </li>

              <li className="py-6">
                <p className="text-xs font-semibold text-accent mb-1 m-0">02</p>
                <h3 className="mb-2">
                  Deuxième étape : mise en ligne sous 4 à 6 semaines
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  Nous rédigeons et intégrons vos pages en français et en anglais, optimisons le poids des photos, connectons votre moteur PMS ou vos formulaires de devis et installons la mesure des contacts sur Google Analytics.
                </p>
              </li>

              <li className="py-6">
                <p className="text-xs font-semibold text-accent mb-1 m-0">03</p>
                <h3 className="mb-2">
                  Troisième étape : suivi mensuel libre et résiliable
                </h3>
                <p className="text-primary/80 leading-relaxed m-0">
                  Lorsque nous assurons votre référencement local ou la gestion de vos annonces, nous vous envoyons chaque mois un relevé simple des actions menées et des demandes reçues. Vous pouvez arrêter le suivi à tout moment avec 15 jours de préavis écrit.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* 5. Tarifs en dirhams et garanties contractuelles */}
      <PricingSectionFR />

      {/* 6. FAQ concise */}
      <FaqSectionFR />

      {/* 7. Appel concret à demander un audit */}
      <BottomFormSectionFR />
    </div>
  );
}
