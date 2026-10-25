import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics';

export default function PricingSectionFR() {
  const monthlyRows = [
    {
      name: 'SEO local et Google Maps',
      price: '4 000 MAD / mois',
      euro: 'env. 370 €',
      scope: 'Suivi de la fiche Google Business Profile, pages locales FR/EN, corrections techniques et bilan mensuel.',
      href: '/agence-seo-maroc'
    },
    {
      name: 'Gestion Google Ads',
      price: '4 000 MAD / mois',
      euro: 'env. 370 €',
      scope: 'Création et tri hebdomadaire des annonces de recherche Google sur votre propre compte publicitaire.',
      href: '/google-ads-maroc'
    },
    {
      name: 'Gestion Meta Ads',
      price: '4 000 MAD / mois',
      euro: 'env. 370 €',
      scope: 'Campagnes Instagram et Facebook vers votre site ou WhatsApp et relance des visiteurs récents.',
      href: '/services/gestion-publicites-meta'
    },
    {
      name: 'Sponsoring TripAdvisor Ads',
      price: '3 000 MAD / mois',
      euro: 'env. 280 €',
      scope: 'Gestion des emplacements sponsorisés dans votre ville et mise à jour régulière de votre fiche.',
      href: '/services/tripadvisor-ads'
    }
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-white border-t border-primary/10" id="pricing-section-fr">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-primary [text-wrap:balance]">
            Tarifs fixes en dirhams et conditions contractuelles
          </h2>
          <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
            Nos prix sont publics et indiqués hors budget média. Chaque prestation fait l'objet d'un devis écrit précisant le périmètre et la date de livraison.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Projet ponctuel : Création de site web */}
          <div
            className="lg:col-span-5 bg-bg-light border border-primary/15 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            id="pricing-card-web-fr"
          >
            <div>
              <p className="text-xs font-medium text-primary/65 mb-2">
                Projet livré en 4 à 6 semaines · Tarif fixe unique
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2">
                Création de site web complet
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-accent tabular-nums mb-4">
                À partir de 12 000 MAD{' '}
                <span className="text-xs font-normal text-primary/70">(env. 1 100 €)</span>
              </p>
              <p className="text-sm text-primary/80 leading-relaxed mb-4">
                Conception sur mesure en français et en anglais, optimisation des images pour le réseau mobile, raccordement à votre moteur PMS (Cloudbeds, Mews, Sirvoy, Little Hotelier) ou à vos formulaires de devis, et remise complète des accès administrateur.
              </p>
            </div>
            <p className="text-xs pt-4 border-t border-primary/10">
              <Link
                to="/tarifs"
                onClick={() => trackEvent('pricing_view', { package: 'Grille Tarifaire Complète' })}
                className="font-semibold text-accent hover:underline underline-offset-4"
              >
                Consulter le détail complet des prestations et du pack Site + Annonces
              </Link>
            </p>
          </div>

          {/* Tableau unique des forfaits mensuels (remplace les 4 cartes clonées) */}
          <div className="lg:col-span-7 border border-primary/15 rounded-xl overflow-hidden bg-white">
            <div className="px-5 py-3.5 bg-bg-alt border-b border-primary/10 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif font-bold text-base text-primary">
                Suivis mensuels sans durée minimale
              </h3>
              <span className="text-xs text-primary/70">Résiliables avec 15 jours de préavis écrit</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <tbody className="divide-y divide-primary/10">
                  {monthlyRows.map((row) => (
                    <tr key={row.href} className="hover:bg-bg-light/60 transition-colors">
                      <td className="py-4 pl-5 pr-3 align-top sm:w-48">
                        <Link
                          to={row.href}
                          onClick={() => trackEvent('pricing_view', { package: row.name })}
                          className="font-serif font-bold text-primary hover:text-accent underline decoration-primary/25 hover:decoration-accent underline-offset-4 block"
                        >
                          {row.name}
                        </Link>
                      </td>
                      <td className="py-4 px-3 align-top whitespace-nowrap tabular-nums sm:w-40">
                        <span className="font-bold text-accent block">{row.price}</span>
                        <span className="text-xs text-primary/60">{row.euro}</span>
                      </td>
                      <td className="py-4 pl-3 pr-5 align-top text-xs sm:text-sm text-primary/80 leading-relaxed">
                        {row.scope}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bandeau compact des garanties contractuelles (zéro grille 4 colonnes répétitive) */}
        <div
          className="bg-bg-alt/70 border border-primary/10 rounded-xl p-5 sm:p-6 text-sm text-primary/85 leading-relaxed"
          id="contractual-terms-fr"
        >
          <strong className="font-serif font-bold text-primary">Garanties inscrites au devis : </strong>
          vous restez propriétaire à 100 % de votre nom de domaine, du code source, de l'hébergement et de vos comptes publicitaires, sans loyer logiciel. Nous ne facturons aucun frais d'ouverture (0 MAD) : votre budget publicitaire est réglé directement par carte bancaire à Google, Meta ou TripAdvisor, et chaque suivi mensuel peut être arrêté avec un simple préavis écrit de 15 jours.
        </div>
      </div>
    </section>
  );
}
