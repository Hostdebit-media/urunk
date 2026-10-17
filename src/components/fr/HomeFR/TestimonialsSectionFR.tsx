import React from 'react';
import { ShieldCheck, Zap, BarChart3, CheckCircle } from 'lucide-react';

export default function TestimonialsSectionFR() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-b border-primary/10 text-primary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            Nos Engagements Techniques
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Standards de Qualité & Exigence Technique
          </h2>
          <p className="text-lg text-primary/75 max-w-2xl mx-auto font-light leading-relaxed">
            Nous basons notre accompagnement sur des performances techniques mesurables, des abonnements transparents sans frais cachés et une indépendance totale vis-à-vis des OTA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Engagements 1 */}
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Architecture 0% Commission</h3>
              <p className="text-sm text-primary/80 leading-relaxed mb-6 font-light">
                Chaque moteur de réservation directe est la propriété exclusive de votre établissement. Aucune commission prélevée sur vos séjours et zéro dépendance envers les tiers.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-primary/10 text-xs text-primary/80">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Propriété intégrale des données clients</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Intégration directe WhatsApp & PMS</span>
              </li>
            </ul>
          </div>

          {/* Engagement 2 */}
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Vitesse Core Web Vitals</h3>
              <p className="text-sm text-primary/80 leading-relaxed mb-6 font-light">
                La vitesse impacte directement le taux de conversion. Tous nos sites sont optimisés pour un affichage en moins de 2 secondes sur réseau mobile 4G/5G.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-primary/10 text-xs text-primary/80">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Affichage initial (FCP) sous 1.5 seconde</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Interface mobile-first ergonomique</span>
              </li>
            </ul>
          </div>

          {/* Engagement 3 */}
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Rapports & Transparence</h3>
              <p className="text-sm text-primary/80 leading-relaxed mb-6 font-light">
                Pas de métriques superficielles. Nous mesurons le volume de demandes qualifiées, le taux de conversion en direct et le coût par prospect.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-primary/10 text-xs text-primary/80">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Suivi d'événements Google Analytics 4</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Facturation claire à forfait fixe</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
