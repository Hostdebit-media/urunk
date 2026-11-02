import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import Section from '../../ui/Section';
import Hairline from '../../ui/Hairline';

export default function FaqSectionFR() {
  const faqItems = [
    {
      q: 'En combien de temps voit-on les effets du référencement local sur Google ?',
      a: 'Les corrections techniques et la mise à jour de votre fiche Google Maps produisent généralement leurs premiers effets sous 30 à 45 jours sur les recherches de proximité. Pour des mots-clés hôteliers ou B2B très disputés, le travail éditorial porte ses fruits progressivement sur 3 à 6 mois.',
    },
    {
      q: 'Devez-vous remplacer notre logiciel hôtelier (PMS) actuel ?',
      a: 'Non. Nous conservons votre outil actuel et connectons le nouveau site à votre moteur de réservation existant (Cloudbeds, Mews, Little Hotelier, Sirvoy ou Amenitiz) afin que vos disponibilités et vos tarifs restent synchronisés.',
    },
    {
      q: 'Comment choisir entre Google Ads, Instagram et TripAdvisor ?',
      a: "Google Ads s'adresse aux personnes qui cherchent déjà un hôtel, une excursion ou un prestataire dans une ville précise. Instagram et Facebook (Meta Ads) servent surtout à montrer vos lieux en image et à relancer les visiteurs récents de votre site. TripAdvisor Ads convient aux hébergements qui veulent apparaître en tête des listes comparatives de leur ville.",
    },
    {
      q: 'Comment se règle le budget publicitaire chaque mois ?',
      a: 'Toutes les campagnes sont ouvertes à votre nom sur vos propres comptes Google, Meta ou TripAdvisor. Vous réglez vos dépenses de diffusion directement aux plateformes par carte bancaire, tandis que notre forfait fixe rémunère uniquement le paramétrage et le suivi.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <Section tone="alt" id="faq-section-fr-element" className="border-t border-border-subtle">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-4">
          <h2 className="mb-3">Questions pratiques</h2>
          <p className="text-primary/80 leading-relaxed mb-5">
            Précisions techniques sur les délais SEO, la compatibilité PMS et la facturation média.
          </p>
          <Link to="/faq" className="font-medium">
            Voir toutes les questions
          </Link>
        </div>

        <div className="lg:col-span-8">
          <Hairline />
          <div className="divide-y divide-border-subtle border-b border-border-subtle">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                open={idx === 0}
                onToggle={(e) => {
                  if ((e.currentTarget as HTMLDetailsElement).open) {
                    trackEvent('faq_expand', { question: item.q });
                  }
                }}
                className="group"
              >
                <summary className="list-none [&::-webkit-details-marker]:hidden py-5 font-serif text-lg sm:text-xl text-primary flex justify-between items-center gap-4 hover:text-accent transition-colors cursor-pointer">
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-primary/60 group-open:rotate-180 group-open:text-accent transition-transform duration-150"
                  />
                </summary>
                <div className="pb-5 text-primary/80 leading-relaxed pr-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
