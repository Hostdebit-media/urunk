import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';

export default function PricingSectionFR() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white" id="pricing-section-fr">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            Tarification Transparente
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Forfaits Clairs & Tarifs Fixes</h2>
          <p className="text-lg text-primary/75 max-w-2xl font-light">
            Aucun frais de gestion caché ni supplément imprévu. Chaque forfait comprend des directives claires et des livrables contractuels.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" id="pricing-cards-grid-fr">
          {/* Création de Site Web - Full Width inside the grid */}
          <div className="md:col-span-2 lg:col-span-4 bg-bg-light border border-primary/10 rounded-3xl p-8 md:p-10 shadow-sm hover:border-accent/30 transition-all flex flex-col md:flex-row gap-8 items-center relative" id="pricing-card-web-fr">
            <div className="flex-1 space-y-4">
              <div className="sticky top-20 md:relative md:top-0 bg-bg-light/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none z-10 py-4 -mx-8 px-8 md:p-0 border-b border-primary/5 md:border-b-0">
                <span className="bg-accent/10 text-accent font-bold text-xs px-3 py-1 rounded-full inline-block mb-2">Forfait Web Principal</span>
                <h3 className="text-3xl font-serif font-bold text-primary">Création de Site Web</h3>
              </div>
              <div className="pt-4 md:pt-0 space-y-4">
                <p className="text-accent font-bold text-2xl">
                  À partir de 12 000 MAD <span className="text-xs font-normal text-primary/85">(approx. 1 100 €)</span>
                  <span className="block text-xs font-normal text-primary/85 mt-1">Devis fixe unique (MAD : Dirham Marocain)</span>
                </p>
                <p className="text-sm text-primary/75 font-light leading-relaxed">
                  Un site WordPress moderne et responsive conçu pour votre hôtel, riad ou agence de services. Inclut un design visuel sur mesure, une optimisation de la vitesse mobile, des formulaires de réservation directe et un référencement SEO de base.
                </p>
                <Link 
                  to="/contact" 
                  onClick={() => trackEvent('pricing_view', { package: 'Création de Site Web' })}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-sm w-full sm:w-auto justify-center"
                  id="web-quote-btn-fr"
                >
                  <span>Demander un Devis Web</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full bg-white p-6 rounded-2xl border border-primary/10 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Conception WordPress personnalisée axée sur la conversion</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Optimisation mobile avancée pour d'excellents Core Web Vitals</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Intégration de formulaires de contact directs & boutons WhatsApp</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Configuration SEO On-Page de base & balisage Schema.org hôtelier</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-accent shrink-0" /> Accès d'administration complet pour modifier librement vos contenus</div>
            </div>
          </div>

          {/* SEO & Référencement Local Package */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6 lg:p-5 xl:p-6 shadow-[0_4px_20px_rgba(15,45,37,0.03)] hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative group" id="pricing-card-seo-fr">
            <div className="flex flex-col flex-1">
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 w-fit">
                Référencement Naturel
              </span>
              <h3 className="font-serif font-bold text-xl lg:text-[1.35rem] text-primary mb-2 min-h-[3.25rem] flex items-center leading-tight">
                SEO &amp; Référencement
              </h3>
              <div className="pt-1 pb-4 mb-5 border-b border-primary/10 min-h-[4.25rem] flex flex-col justify-end">
                <div className="text-accent font-bold text-2xl tracking-tight leading-none mb-1">
                  4 000 MAD <span className="text-xs font-normal text-primary/85">/mois</span>
                </div>
                <span className="block text-xs font-medium text-primary/80">approx. 370 €/mois · Sans engagement</span>
              </div>
              <ul className="space-y-3.5 text-xs text-primary/80 font-normal mb-8 leading-relaxed flex-1">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Optimisation Google Business Profile &amp; fiches Google Maps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Recherche approfondie &amp; ciblage de mots-clés d'intention locale</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Création de citations locales &amp; audits de cohérence d'adresses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Rapports mensuels transparents sur vos positions &amp; trafic</span>
                </li>
              </ul>
            </div>
            <Link 
              to="/agence-seo-maroc" 
              onClick={() => trackEvent('pricing_view', { package: 'SEO & Référencement' })}
              className="w-full py-3 px-4 rounded-xl bg-accent/10 hover:bg-accent text-accent hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 border border-accent/20 hover:border-accent mt-auto shadow-sm group-hover:shadow-md active:scale-[0.99]"
            >
              <span>Découvrir l'Offre SEO</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Google Ads */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6 lg:p-5 xl:p-6 shadow-[0_4px_20px_rgba(15,45,37,0.03)] hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative group" id="pricing-card-google-ads-fr">
            <div className="flex flex-col flex-1">
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 w-fit">
                Acquisition Immédiate
              </span>
              <h3 className="font-serif font-bold text-xl lg:text-[1.35rem] text-primary mb-2 min-h-[3.25rem] flex items-center leading-tight">
                Google Ads
              </h3>
              <div className="pt-1 pb-4 mb-5 border-b border-primary/10 min-h-[4.25rem] flex flex-col justify-end">
                <div className="text-accent font-bold text-2xl tracking-tight leading-none mb-1">
                  4 000 MAD <span className="text-xs font-normal text-primary/85">/mois</span>
                </div>
                <span className="block text-xs font-medium text-primary/80">approx. 370 €/mois · Sans engagement</span>
              </div>
              <ul className="space-y-3.5 text-xs text-primary/80 font-normal mb-8 leading-relaxed flex-1">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Ciblage de mots-clés d'intention forte (« hôtel à Marrakech »)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Rédaction d'annonces de recherche axées sur la réservation directe</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Listes de mots-clés négatifs pour éliminer le trafic hors cible</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Suivi mensuel transparent du retour sur investissement publicitaire</span>
                </li>
              </ul>
            </div>
            <Link 
              to="/google-ads-maroc" 
              onClick={() => trackEvent('pricing_view', { package: 'Google Ads' })}
              className="w-full py-3 px-4 rounded-xl bg-accent/10 hover:bg-accent text-accent hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 border border-accent/20 hover:border-accent mt-auto shadow-sm group-hover:shadow-md active:scale-[0.99]"
            >
              <span>Détails Google Ads</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Meta Ads */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6 lg:p-5 xl:p-6 shadow-[0_4px_20px_rgba(15,45,37,0.03)] hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative group" id="pricing-card-meta-ads-fr">
            <div className="flex flex-col flex-1">
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 w-fit">
                Réseaux Sociaux
              </span>
              <h3 className="font-serif font-bold text-xl lg:text-[1.35rem] text-primary mb-2 min-h-[3.25rem] flex items-center leading-tight">
                Meta Ads
              </h3>
              <div className="pt-1 pb-4 mb-5 border-b border-primary/10 min-h-[4.25rem] flex flex-col justify-end">
                <div className="text-accent font-bold text-2xl tracking-tight leading-none mb-1">
                  4 000 MAD <span className="text-xs font-normal text-primary/85">/mois</span>
                </div>
                <span className="block text-xs font-medium text-primary/80">approx. 370 €/mois · Sans engagement</span>
              </div>
              <ul className="space-y-3.5 text-xs text-primary/80 font-normal mb-8 leading-relaxed flex-1">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Conception de campagnes visuelles Instagram Reels &amp; Facebook</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Campagnes de retargeting pour convertir les visiteurs de votre site</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Ciblage fin par centre d'intérêt, pouvoir d'achat &amp; pays émetteurs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">A/B testing continu des visuels et optimisations hebdomadaires</span>
                </li>
              </ul>
            </div>
            <Link 
              to="/services/gestion-publicites-meta" 
              onClick={() => trackEvent('pricing_view', { package: 'Meta Ads' })}
              className="w-full py-3 px-4 rounded-xl bg-accent/10 hover:bg-accent text-accent hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 border border-accent/20 hover:border-accent mt-auto shadow-sm group-hover:shadow-md active:scale-[0.99]"
            >
              <span>Détails Meta Ads</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* TripAdvisor Ads */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6 lg:p-5 xl:p-6 shadow-[0_4px_20px_rgba(15,45,37,0.03)] hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative group" id="pricing-card-tripadvisor-ads-fr">
            <div className="flex flex-col flex-1">
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 w-fit">
                Notoriété &amp; Avis
              </span>
              <h3 className="font-serif font-bold text-xl lg:text-[1.35rem] text-primary mb-2 min-h-[3.25rem] flex items-center leading-tight">
                TripAdvisor Ads
              </h3>
              <div className="pt-1 pb-4 mb-5 border-b border-primary/10 min-h-[4.25rem] flex flex-col justify-end">
                <div className="text-accent font-bold text-2xl tracking-tight leading-none mb-1">
                  3 000 MAD <span className="text-xs font-normal text-primary/85">/mois</span>
                </div>
                <span className="block text-xs font-medium text-primary/80">approx. 280 €/mois · Sans engagement</span>
              </div>
              <ul className="space-y-3.5 text-xs text-primary/80 font-normal mb-8 leading-relaxed flex-1">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Positionnement sponsorisé en tête des classements de votre ville</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Optimisation complète de la fiche établissement (photos, descriptions)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Mise en place de stratégies de collecte d'avis clients positifs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Gestion rigoureuse du budget d'enchères pour maximiser le ROI</span>
                </li>
              </ul>
            </div>
            <Link 
              to="/services/tripadvisor-ads" 
              onClick={() => trackEvent('pricing_view', { package: 'TripAdvisor Ads' })}
              className="w-full py-3 px-4 rounded-xl bg-accent/10 hover:bg-accent text-accent hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 border border-accent/20 hover:border-accent mt-auto shadow-sm group-hover:shadow-md active:scale-[0.99]"
            >
              <span>Détails TripAdvisor Ads</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Bundle Highlight */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg relative overflow-hidden mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-accent text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
              Meilleur Rapport Qualité-Prix
            </span>
            <h3 className="text-3xl font-serif font-bold text-white">Pack Site Web + Optimisation de Recherche</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Associez un site internet haute performance avec une stratégie active de référencement. Idéal pour les riads, hôtels et entreprises marocaines souhaitant accroître rapidement leur part de marché de proximité.
            </p>
            <p className="text-xs text-yellow-400 font-medium bg-white/10 px-4 py-2 rounded-xl inline-block border border-white/10">
              Capacité d'accueil limitée. Nous n'acceptons qu'un petit nombre de nouveaux projets par mois pour garantir un niveau de qualité optimal.
            </p>
          </div>
          
          <Link 
            to="/contact" 
            onClick={() => trackEvent('pricing_view', { package: 'Bundle' })}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-sm shrink-0 transition-colors shadow-md"
          >
            Demander un Devis Pack
          </Link>
        </div>

        {/* Explicit Pricing & Terms Disclaimer */}
        <div className="p-6 bg-bg-light border border-primary/10 rounded-2xl text-xs text-primary/75 space-y-2 leading-relaxed">
          <p className="font-bold text-primary">Conditions Importantes et Avertissements Tarifaires :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Les frais de gestion n'incluent pas le budget publicitaire, sauf indication contraire dans votre contrat.</li>
            <li>Votre budget publicitaire est payé directement à Google, Meta ou TripAdvisor via la facturation de votre propre compte.</li>
            <li>Les projets web nécessitent un devis détaillé, un contrat écrit et un cahier des charges validé avant de commencer.</li>
            <li>Les contrats de gestion de campagnes publicitaires peuvent être mis en pause ou résiliés à tout moment avec un préavis écrit de 15 jours.</li>
            <li>Le pack Site Web + Canal publicitaire convient aux entreprises ayant besoin d'une nouvelle plateforme web ET d'un trafic qualifié immédiat.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
