import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';

export default function FaqSectionFR() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Comment aidez-vous les riads et hôtels marocains à réduire les commissions des OTA ?",
      a: "Nous concevons des sites internet haut de gamme et ultra-rapides (dès 12 000 MAD / ≈1 100 €) connectés directement à votre PMS (Cloudbeds, Mews, etc.). Associés à des campagnes Google Ads ciblées (4 000 MAD/mois / ≈370 €/mois de frais de gestion) et du référencement local, nous interceptons les voyageurs avant qu'ils ne réservent sur les plateformes tierces, réduisant la dépendance aux OTA et augmentant vos réservations directes."
    },
    {
      q: "Combien de temps faut-il pour qu'une stratégie SEO porte ses fruits ?",
      a: "Les optimisations techniques de base, l'accélération de la vitesse mobile et le paramétrage Google Business Profile génèrent des résultats visibles sur Google Maps sous 30 à 45 jours. Pour les mots-clés hôteliers très compétitifs (ex: 'riad de luxe marrakech'), l'autorité organique complète s'établit sur un cycle de 4 à 6 semaines d'implémentation suivi de 3 à 6 mois de montée en puissance."
    },
    {
      q: "Qu'est-ce qui est inclus dans l'offre de création de site web ?",
      a: "Chaque projet (12 000 MAD / ≈1 100 € investissement fixe) comprend : design UX sur-mesure de standing, développement performance Jamstack/React (vitesse de chargement optimale), architecture bilingue (français, anglais), raccordement API de votre moteur de réservation et configuration SEO technique intégrale. Livraison sous 4 à 6 semaines, avec garantie de performance sous 90 jours soumise aux [CONDITIONS_GARANTIE]."
    },
    {
      q: "Quel levier est le plus efficace : Google Ads ou Meta Ads ?",
      a: "Google Ads (frais de gestion à 4 000 MAD/mois / ≈370 €/mois) capte les voyageurs ayant une intention d'achat immédiate pour une destination marocaine spécifique. Meta Ads (Instagram/Facebook) excelle dans la mise en valeur visuelle de l'architecture et de l'expérience de votre établissement auprès de cibles qualifiées en Europe ou Amérique du Nord, optimisant le coût d'acquisition de vos réservations."
    },
    {
      q: "Pouvez-vous connecter le site web à mon PMS existant ?",
      a: "Oui, nous intégrons sans couture les moteurs de réservation directe avec les principaux PMS du marché (Cloudbeds, Mews, Little Hotelier, Sirvoy, Opera, etc.) via des API sécurisées. Cela garantit la synchronisation en temps réel de vos tarifs et de vos disponibilités."
    },
    {
      q: "Où êtes-vous basés et comment collaborez-vous avec vos clients ?",
      a: "Urunk dispose de bureaux opérationnels à Marrakech (Guéliz) et à Casablanca (Anfa), assurant une proximité physique pour nos clients au Maroc. Nous collaborons à distance via des points réguliers sur Google Meet et proposons des contrats mensuels flexibles sans engagement abusif avec un préavis de résiliation de 15 jours."
    },
    {
      q: "Y a-t-il des frais de configuration pour les campagnes Google, Meta ou TripAdvisor ?",
      a: "Non, aucun frais de dossier de départ n'est facturé pour nos prestations standard de prise en main mensuelle de vos comptes publicitaires."
    },
    {
      q: "Proposez-vous des contrats à engagement de durée minimale ?",
      a: "Non. Tous nos services récurrents d'optimisation SEO ou de gestion de campagnes publicitaires sont facturés sans engagement forcé à long terme."
    },
    {
      q: "Y a-t-il des frais de licence récurrents pour notre site web ?",
      a: "Non. Nous concevons vos sites web sous des technologies ouvertes dont vous êtes propriétaire à 100 %. Vous ne payez aucun abonnement logiciel de notre part."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="py-20 md:py-28 px-6" id="faq-section-fr-element">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            Réponses Claires
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Questions fréquentes sur le SEO, les sites web et les commissions OTA
          </h2>
          <p className="text-base md:text-lg text-primary/75 max-w-3xl mx-auto font-light leading-relaxed">
            Cette foire aux questions rassemble les réponses pratiques sur le référencement naturel, la création de sites internet pour l'hôtellerie au Maroc et la réduction des commissions prélevées par les plateformes de réservation en ligne. Les réponses détaillent les coûts, les délais de livraison et le fonctionnement opérationnel.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-primary/10 rounded-2xl overflow-hidden transition-colors">
              <button
                onClick={() => {
                  const isOpening = openFaq !== idx;
                  setOpenFaq(isOpening ? idx : null);
                  if (isOpening) trackEvent('faq_expand', { question: item.q });
                }}
                className="w-full text-left p-6 font-serif font-bold text-lg text-primary flex justify-between items-center gap-4 hover:text-accent transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown size={20} className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-accent' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm text-primary/75 font-light leading-relaxed border-t border-primary/5 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
