import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';

export default function FaqSectionFR() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: "Comment aidez-vous un hôtel ou un riad à obtenir plus de réservations directes ?",
      a: "Nous mettons en place un site rapide (à partir de 12 000 MAD) relié directement à votre moteur de réservation, complété par une fiche Google Business Profile soignée et, selon vos besoins, des campagnes Google Ads (4 000 MAD/mois de gestion). Les voyageurs qui cherchent votre établissement ou votre quartier réservent ainsi sur votre site sans commission OTA."
    },
    {
      q: "Quels délais prévoir pour la création du site et les résultats SEO ?",
      a: "Un site web complet est livré en 4 à 6 semaines. Les optimisations locales (vitesse mobile et fiche Google Maps) produisent généralement leurs premiers effets sous 30 à 45 jours, tandis que le positionnement organique sur des requêtes concurrentielles se construit sur 3 à 6 mois."
    },
    {
      q: "Pouvez-vous connecter le site à mon logiciel hôtelier (PMS) actuel ?",
      a: "Oui. Nous raccordons votre site aux principaux PMS et moteurs de réservation utilisés au Maroc, notamment Cloudbeds, Mews, Little Hotelier, Sirvoy et Amenitiz, afin de synchroniser automatiquement vos disponibilités et vos tarifs."
    },
    {
      q: "Faut-il privilégier Google Ads, Meta Ads ou TripAdvisor Ads ?",
      a: "Google Ads cible les personnes qui tapent déjà une recherche précise d'hôtel ou de prestataire au Maroc. Meta Ads (Instagram et Facebook) permet de présenter vos chambres ou vos services en image et de relancer les visiteurs du site. TripAdvisor Ads renforce votre visibilité auprès des voyageurs qui comparent les avis avant de réserver."
    },
    {
      q: "Qui paie le budget publicitaire et à qui appartiennent les comptes ?",
      a: "Vos campagnes sont créées directement sur vos propres comptes Google, Meta ou TripAdvisor. Vous réglez le budget média directement aux plateformes par carte bancaire, et nos honoraires fixes couvrent uniquement le paramétrage et le pilotage mensuel."
    },
    {
      q: "Où êtes-vous situés et comment se passe le suivi ?",
      a: "Notre agence est située au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc, et nous accompagnons des clients à Casablanca, Marrakech, Rabat et Agadir. Les points d'avancement se font sur place ou en visioconférence avec un rapport mensuel lisible."
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
    <section className="py-20 md:py-24 px-6 bg-bg-light border-t border-primary/10" id="faq-section-fr-element">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium text-accent mb-3">
            Questions fréquentes
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Réponses pratiques avant de démarrer
          </h2>
          <p className="text-sm text-primary/75 leading-relaxed mb-6">
            Délais, connexion PMS, fonctionnement des budgets publicitaires et suivi au quotidien.
          </p>
          <Link
            to="/faq"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Consulter toutes les questions fréquentes
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
                className="w-full text-left py-5 font-serif font-bold text-lg text-primary flex justify-between items-center gap-4 hover:text-accent transition-colors cursor-pointer"
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-accent' : 'text-primary/60'}`}
                />
              </button>
              {openFaq === idx && (
                <div className="pb-5 text-sm text-primary/80 leading-relaxed pr-6">
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
