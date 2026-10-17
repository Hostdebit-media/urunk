import React from 'react';
import { ShieldCheck, Calendar, DollarSign, Key, FileText, UserCheck, Briefcase } from 'lucide-react';
import OptimizedImage from '../../OptimizedImage';

export default function ProofSectionFR() {
  return (
    <section className="py-24 bg-white border-t border-primary/10" id="proof-section-fr">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
            Garanties & Preuves
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Nos Engagements Contractuels
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
            Une collaboration transparente encadrée par des garanties de performance de niveau professionnel.
          </p>
        </div>

        {/* 5 Proof Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="proof-grid-fr">
          {/* Card 1: Garantie 90 jours */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Garantie 90 Jours</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Si vos indicateurs d'acquisition ou vos réservations ne s'améliorent pas après 90 jours, nous gérons vos campagnes gratuitement jusqu'à l'atteinte des objectifs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Engagement de Performance
            </div>
          </div>

          {/* Card 2: Date de mise en ligne (4-6 weeks) */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Mise en Ligne sous 4 à 6 Semaines</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Une date de livraison ferme est contractuellement définie. En cas de retard de livraison de notre fait, nous renonçons au versement final du projet.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Respect des Délais Réels
            </div>
          </div>

          {/* Card 3: 0 frais cachés */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">0 Frais Cachés</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Zéro frais d'installation de compte, aucune commission masquée. Vous connaissez à l'avance chaque centime investi dans vos prestations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Transparence Budgétaire
            </div>
          </div>

          {/* Card 4: Propriété totale */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <Key size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Propriété Totale</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Vous êtes l'unique propriétaire légal de votre nom de domaine, de vos comptes publicitaires, de vos statistiques et de l'intégralité du code.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Indépendance Assurée
            </div>
          </div>

          {/* Card 5: Résiliation 15 jours */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Résiliation sous 15 Jours</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Tous nos abonnements mensuels de gestion publicitaire sont flexibles et peuvent être résiliés avec un simple préavis de 15 jours.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Souplesse Opérationnelle
            </div>
          </div>
        </div>

        {/* Bottom grid for Founder, Case studies and Moody Image */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Founder Credential Block */}
          <div className="p-8 rounded-3xl bg-bg border border-primary/10 flex flex-col justify-between" id="founder-block-fr">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <UserCheck size={14} /> Profil de Direction
              </span>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Parcours du Fondateur</h3>
              <p className="text-sm text-primary/70 leading-relaxed font-light">
                Notre agence applique des méthodes d'ingénierie et de marketing de précision. Pour garantir un niveau d'excellence constant, nos méthodologies d'audit et de suivi de performance s'appuient sur des standards validés.
              </p>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-primary/5 text-xs text-primary/70">
              <span className="font-bold text-accent block mb-1">Certifications de l'Équipe Fondatrice</span>
              Dirigé par des experts certifiés Google Ads (Search & Performance Max), Google Analytics 4 (GA4) et architecture de recherche locale avancée, cumulant plus de 8 ans de savoir-faire en hôtellerie de luxe au Maroc.
            </div>
          </div>

          {/* Case Studies Slot */}
          <div className="p-8 rounded-3xl bg-bg border border-primary/10 flex flex-col justify-between" id="case-studies-block-fr">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <Briefcase size={14} /> Études de Cas
              </span>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Résultats Réels</h3>
              <p className="text-sm text-primary/70 leading-relaxed font-light">
                Nous analysons rigoureusement la progression du trafic organique et l'évolution des réservations directes de nos partenaires hôteliers et clients corporate.
              </p>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-primary/5 text-xs text-primary/70">
              <span className="font-bold text-accent block mb-1">Indicateurs de Performance Clés</span>
              Hausse moyenne de 94% de la part de réservations directes pour nos riads partenaires à Marrakech et plus de 150% de gain de trafic SEO organique après 6 mois de collaboration.
            </div>
          </div>

          {/* Moody Riad Image */}
          <div className="h-full min-h-[320px] rounded-3xl overflow-hidden relative border border-primary/10 shadow-xs">
            <OptimizedImage 
              src="/images/optimized/moroccan-riad-hospitality-800.jpg" 
              imageName="moroccan-riad-hospitality"
              alt="Architecture traditionnelle de Riad au Maroc" 
              width={600}
              height={450}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              imgClassName="object-cover filter brightness-[0.95] contrast-[1.05]"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
