import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';

export default function PricingSectionFR() {
  const monthlyOffers = [
    {
      id: 'pricing-card-seo-fr',
      name: 'SEO et Google Maps',
      price: '4 000 MAD',
      euro: 'env. 370 € / mois',
      href: '/agence-seo-maroc',
      cta: "Détails de l'offre SEO",
      track: 'SEO & Référencement',
      items: [
        'Optimisation de votre fiche Google Business Profile et Google Maps',
        'Ciblage des recherches locales en français et en anglais',
        'Corrections techniques, balisage et cohérence des coordonnées',
        'Compte rendu mensuel sur vos positions et demandes reçues'
      ]
    },
    {
      id: 'pricing-card-google-ads-fr',
      name: 'Google Ads',
      price: '4 000 MAD',
      euro: 'env. 370 € / mois',
      href: '/google-ads-maroc',
      cta: 'Détails Google Ads',
      track: 'Google Ads',
      items: [
        'Campagnes Search sur les requêtes directes de séjour ou de service',
        'Annonces orientées vers vos réservations directes ou devis',
        'Filtrage des mots-clés hors cible pour préserver votre budget',
        'Suivi mensuel des conversions et du coût par demande'
      ]
    },
    {
      id: 'pricing-card-meta-ads-fr',
      name: 'Meta Ads',
      price: '4 000 MAD',
      euro: 'env. 370 € / mois',
      href: '/services/gestion-publicites-meta',
      cta: 'Détails Meta Ads',
      track: 'Meta Ads',
      items: [
        'Campagnes Instagram et Facebook vers votre site ou WhatsApp',
        'Relance des visiteurs ayant consulté vos chambres ou tarifs',
        'Ciblage géographique des voyageurs par pays émetteurs',
        'Tests réguliers des visuels et ajustement hebdomadaire'
      ]
    },
    {
      id: 'pricing-card-tripadvisor-ads-fr',
      name: 'TripAdvisor Ads',
      price: '3 000 MAD',
      euro: 'env. 280 € / mois',
      href: '/services/tripadvisor-ads',
      cta: 'Détails TripAdvisor Ads',
      track: 'TripAdvisor Ads',
      items: [
        'Emplacements sponsorisés en tête de liste dans votre ville',
        'Mise à jour complète de la fiche établissement et des photos',
        'Méthode simple de collecte d’avis auprès des clients sur place',
        'Plafonnement strict des enchères selon votre budget mensuel'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-primary/10" id="pricing-section-fr">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium text-accent mb-3">
            Tarifs et conditions contractuelles
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-primary">
            Forfaits à prix fixes, sans commission sur vos ventes
          </h2>
          <p className="text-base md:text-lg text-primary/75 leading-relaxed">
            Nos tarifs sont affichés clairement en dirhams marocains. Chaque prestation fait l'objet d'un devis écrit précisant le périmètre exact et le calendrier de livraison.
          </p>
        </div>

        {/* Offre principale : Création de site web */}
        <div
          className="bg-bg-light border border-border-subtle rounded-2xl p-7 md:p-10 mb-6 grid lg:grid-cols-12 gap-8 items-center"
          id="pricing-card-web-fr"
        >
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold text-accent">
              Projet livré clé en main en 4 à 6 semaines
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Création de site web hôtelier ou PME
            </h3>
            <div className="pt-1">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                À partir de 12 000 MAD{' '}
                <span className="text-sm font-normal text-primary/70">(env. 1 100 €, tarif fixe unique)</span>
              </p>
            </div>
            <p className="text-sm text-primary/80 leading-relaxed">
              Conception complète d'un site rapide sur mobile pour votre riad, hôtel ou entreprise, préparé pour recevoir des réservations directes ou des demandes de devis dès sa mise en ligne.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                onClick={() => trackEvent('pricing_view', { package: 'Création de Site Web' })}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                id="web-quote-btn-fr"
              >
                <span>Demander un devis site web</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services/bundle-site-ads"
                className="text-sm font-semibold text-primary hover:text-accent underline underline-offset-4 transition-colors"
              >
                Voir aussi le pack Site web + Publicité
              </Link>
            </div>
          </div>

          <ul className="lg:col-span-6 bg-white p-6 rounded-xl border border-primary/10 space-y-3 text-sm text-primary/85">
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Design sur mesure bilingue (français et anglais) pensé pour la lecture sur téléphone</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Connexion à votre moteur de réservation (Cloudbeds, Mews, Sirvoy, Little Hotelier) ou WhatsApp</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Images compressées AVIF/WebP et pages légères pour un chargement rapide sur réseau mobile</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Structure SEO propre, balisage Schema.org et accès administrateur complet à la livraison</span>
            </li>
          </ul>
        </div>

        {/* Grille comparative des 4 accompagnements mensuels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" id="pricing-cards-grid-fr">
          {monthlyOffers.map((offer) => (
            <div
              key={offer.id}
              id={offer.id}
              className="bg-white border border-border-subtle rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3">
                  {offer.name}
                </h3>
                <div className="pb-4 mb-5 border-b border-primary/10">
                  <p className="text-2xl font-bold text-accent leading-none mb-1">
                    {offer.price} <span className="text-xs font-normal text-primary/75">/ mois</span>
                  </p>
                  <span className="text-xs text-primary/65">{offer.euro} · Sans engagement</span>
                </div>
                <ul className="space-y-3 text-xs text-primary/80 leading-relaxed mb-6">
                  {offer.items.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={offer.href}
                onClick={() => trackEvent('pricing_view', { package: offer.track })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover pt-3 border-t border-primary/10"
              >
                <span>{offer.cta}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Section unique regroupant les engagements et conditions contractuelles */}
        <div className="pt-12 border-t border-primary/15" id="contractual-terms-fr">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">
              Nos engagements contractuels
            </h3>
            <p className="text-sm text-primary/75 leading-relaxed">
              Quatre règles simples inscrites dans nos contrats pour protéger votre trésorerie et votre indépendance technique.
            </p>
          </div>

          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                Propriété intégrale à 100 %
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                Vous êtes l'unique titulaire du nom de domaine, du code source, de l'hébergement et des comptes publicitaires. Aucun loyer logiciel.
              </dd>
            </div>

            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                Préavis simple de 15 jours
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                Nos forfaits mensuels de SEO et de gestion publicitaire n'imposent aucune durée minimale. Vous pouvez les arrêter avec 15 jours de préavis écrit.
              </dd>
            </div>

            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                0 DH de frais d'ouverture
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                Aucun frais caché de mise en route. Pour les annonces, votre budget média est payé directement à Google, Meta ou TripAdvisor depuis votre compte.
              </dd>
            </div>

            <div className="border-t border-primary/15 pt-4">
              <dt className="font-serif font-bold text-base text-primary mb-2">
                Délais et suivi sur 90 jours écrits
              </dt>
              <dd className="text-sm text-primary/75 leading-relaxed">
                La date de mise en ligne (4 à 6 semaines) et les indicateurs suivis sur les 90 premiers jours sont fixés par écrit dans votre devis avant tout démarrage.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
