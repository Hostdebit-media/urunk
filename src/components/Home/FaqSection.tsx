import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import Section from '../ui/Section';
import Hairline from '../ui/Hairline';

export default function FaqSection() {
  const faqItems = [
    {
      q: 'How long does local SEO take to show results on Google?',
      a: 'Technical fixes and Google Maps updates usually show initial movement on neighborhood searches within 30 to 45 days. Ranking on competitive city-wide hotel or B2B keywords builds progressively over 3 to 6 months.',
    },
    {
      q: 'Do we need to replace our existing hotel PMS software?',
      a: 'No. We keep your current setup and connect the new website directly to your existing booking engine (Cloudbeds, Mews, Little Hotelier, Sirvoy, or Amenitiz) so availability and room rates stay synchronized.',
    },
    {
      q: 'How should we choose between Google Ads, Instagram, and TripAdvisor?',
      a: 'Google Ads reaches people actively searching for a hotel, tour, or service in a specific Moroccan city. Instagram and Facebook (Meta Ads) showcase your property visually and retarget recent website visitors. TripAdvisor Ads suits properties wanting top placement on city comparison lists.',
    },
    {
      q: 'How is monthly ad spend billed?',
      a: 'All campaigns run under your own Google, Meta, or TripAdvisor accounts. You pay media spend directly to the platforms by company card, while our flat monthly fee covers setup and ongoing management.',
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
    <Section tone="alt" id="faq-section-element" className="border-t border-border-subtle">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-4">
          <h2 className="mb-3">Practical questions</h2>
          <p className="text-primary/80 leading-relaxed mb-5">
            Straightforward answers on SEO timelines, PMS compatibility, and media billing.
          </p>
          <Link to="/en/faq" className="font-medium">
            Read all FAQs
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
