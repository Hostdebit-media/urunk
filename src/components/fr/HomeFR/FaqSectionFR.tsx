import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';

export default function FaqSectionFR() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: "En combien de temps voit-on les effets du référencement local sur Google ?",
      a: "Les corrections techniques et la mise à jour de votre fiche Google Maps produisent généralement leurs premiers effets sous 30 à 45 jours sur les recherches de proximité. Pour des mots-clés hôteliers ou B2B très disputés, le travail éditorial porte ses fruits progressivement sur 3 à 6 mois."
    },
    {
      q: "Devez-vous remplacer notre logiciel hôtelier (PMS) actuel ?",
      a: "Non. Nous conservons votre outil actuel et connectons le nouveau site à votre moteur de réservation existant (Cloudbeds, Mews, Little Hotelier, Sirvoy ou Amenitiz) afin que vos disponibilités et vos tarifs restent synchronisés."
    },
    {
      q: "Comment choisir entre Google Ads, Instagram et TripAdvisor ?",
      a: "Google Ads s'adresse aux personnes qui cherchent déjà un hôtel, une excursion ou un prestataire dans une ville précise. Instagram et Facebook (Meta Ads) servent surtout à montrer vos lieux en image et à relancer les visiteurs récents de votre site. TripAdvisor Ads convient aux hébergements qui veulent apparaître en tête des listes comparatives de leur ville."
    },
    {
      q: "Comment se règle le budget publicitaire chaque mois ?",
      a: "Toutes les campagnes sont ouvertes à votre nom sur vos propres comptes Google, Meta ou TripAdvisor. Vous réglez vos dépenses de diffusion directement aux plateformes par carte bancaire, tandis que notre forfait fixe rémunère uniquement le paramétrage et le suivi."
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
    <section className="py-14 md:py-16 px-6 bg-bg-light border-t border-primary/10" id="faq-section-fr-element">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
            Questions pratiques
          </h2>
          <p className="text-sm text-primary/75 leading-relaxed mb-4">
            Précisions techniques sur les délais SEO, la compatibilité PMS et la facturation média.
          </p>
          <Link
            to="/faq"
            className="text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            Voir toutes les questions
          </Link>
        </div>

        <div className="lg:col-span-8 divide-y divide-primary/15 border-y border-primary/15">
          {faqItems.map((item, idx) => (
            <div key={idx}>
              <button
                type="button"
                onClick={() => {
                  const isOpening = openFaq !== idx;
                  setOpenFaq(isOpening ? idx : null);
                  if (isOpening) trackEvent('faq_expand', { question: item.q });
                }}
                aria-expanded={openFaq === idx}
                className="w-full text-left py-4 font-serif font-bold text-base sm:text-lg text-primary flex justify-between items-center gap-4 hover:text-accent transition-colors cursor-pointer"
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-150 ${openFaq === idx ? 'rotate-180 text-accent' : 'text-primary/60'}`}
                />
              </button>
              {openFaq === idx && (
                <div className="pb-4 text-sm text-primary/80 leading-relaxed pr-6">
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
