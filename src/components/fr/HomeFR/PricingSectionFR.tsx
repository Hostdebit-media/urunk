import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics';
import Section from '../../ui/Section';
import Hairline from '../../ui/Hairline';

export default function PricingSectionFR() {
  const monthlyRows = [
    {
      name: 'SEO local et Google Maps',
      price: '4 000 MAD / mois',
      euro: 'env. 370 €',
      scope: 'Suivi de la fiche Google Business Profile, pages locales FR/EN, corrections techniques et bilan mensuel.',
      href: '/agence-seo-maroc',
    },
    {
      name: 'Gestion Google Ads',
      price: '4 000 MAD / mois',
      euro: 'env. 370 €',
      scope: 'Création et tri hebdomadaire des annonces de recherche Google sur votre propre compte publicitaire.',
      href: '/google-ads-maroc',
    },
    {
      name: 'Gestion Meta Ads',
      price: '4 000 MAD / mois',
      euro: 'env. 370 €',
      scope: 'Campagnes Instagram et Facebook vers votre site ou WhatsApp et relance des visiteurs récents.',
      href: '/services/gestion-publicites-meta',
    },
    {
      name: 'Sponsoring TripAdvisor Ads',
      price: '3 000 MAD / mois',
      euro: 'env. 280 €',
      scope: 'Gestion des emplacements sponsorisés dans votre ville et mise à jour régulière de votre fiche.',
      href: '/services/tripadvisor-ads',
    },
  ];

  return (
    <Section tone="light" id="pricing-section-fr" className="border-t border-border-subtle">
      <div className="max-w-2xl mb-12">
        <h2 className="mb-4">
          Tarifs fixes en dirhams et conditions contractuelles
        </h2>
        <p className="text-primary/80 leading-relaxed m-0">
          Nos prix sont publics et indiqués hors budget média. Chaque prestation fait l'objet d'un devis écrit précisant le périmètre et la date de livraison.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-10">
        {/* Main Bordered Package Card */}
        <div
          className="lg:col-span-5 bg-bg-card border border-border-subtle rounded-sm p-7 sm:p-8 flex flex-col justify-between"
          id="pricing-card-web-fr"
        >
          <div>
            <p className="text-xs font-medium text-primary/70 mb-2 m-0">
              Projet livré en 4 à 6 semaines, tarif fixe unique
            </p>
            <h3 className="mb-3">
              Création de site web complet
            </h3>
            <p className="font-serif text-3xl text-accent tabular-nums mb-4">
              À partir de 12 000 MAD{' '}
              <span className="font-sans text-xs font-normal text-primary/70">(env. 1 100 €)</span>
            </p>
            <p className="text-[15px] text-primary/80 leading-relaxed mb-6">
              Conception sur mesure en français et en anglais, optimisation des images pour le réseau mobile, raccordement à votre moteur PMS (Cloudbeds, Mews, Sirvoy, Little Hotelier) ou à vos formulaires de devis, et remise complète des accès administrateur.
            </p>
          </div>
          <div className="pt-4 border-t border-border-subtle">
            <Link
              to="/tarifs"
              onClick={() => trackEvent('pricing_view', { package: 'Grille Tarifaire Complète' })}
              className="text-sm font-medium"
            >
              Consulter le détail complet des prestations et du pack Site + Annonces
            </Link>
          </div>
        </div>

        {/* Ledger Rows with Dotted Leaders */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4">
            <h3 className="m-0">Suivis mensuels sans durée minimale</h3>
            <span className="text-xs text-primary/70">Résiliables avec 15 jours de préavis écrit</span>
          </div>
          <Hairline />
          <div className="divide-y divide-border-subtle border-b border-border-subtle">
            {monthlyRows.map((row) => (
              <div key={row.href} className="py-5 space-y-2">
                <div className="flex items-baseline gap-3">
                  <Link
                    to={row.href}
                    onClick={() => trackEvent('pricing_view', { package: row.name })}
                    className="font-serif text-lg text-primary hover:text-accent shrink-0"
                  >
                    {row.name}
                  </Link>
                  <span className="flex-1 border-b border-dotted border-border-subtle min-w-[24px]" aria-hidden="true" />
                  <span className="tabular-nums text-right shrink-0">
                    <span className="font-semibold text-accent">{row.price}</span>{' '}
                    <span className="text-xs text-primary/65">({row.euro})</span>
                  </span>
                </div>
                <p className="text-sm text-primary/75 leading-relaxed m-0">
                  {row.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p
        className="pt-6 border-t border-border-subtle text-sm text-primary/80 leading-relaxed m-0 max-w-4xl"
        id="contractual-terms-fr"
      >
        <strong className="font-semibold text-primary">Garanties inscrites au devis : </strong>
        vous restez propriétaire à 100 % de votre nom de domaine, du code source, de l'hébergement et de vos comptes publicitaires, sans loyer logiciel. Nous ne facturons aucun frais d'ouverture (0 MAD) : votre budget publicitaire est réglé directement par carte bancaire à Google, Meta ou TripAdvisor, et chaque suivi mensuel peut être arrêté avec un simple préavis écrit de 15 jours.
      </p>
    </Section>
  );
}
