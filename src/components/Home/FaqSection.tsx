import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: "How long does local SEO take to show results on Google?",
      a: "Technical fixes and Google Maps updates usually show initial movement on neighborhood searches within 30 to 45 days. Ranking on competitive city-wide hotel or B2B keywords builds progressively over 3 to 6 months."
    },
    {
      q: "Do we need to replace our existing hotel PMS software?",
      a: "No. We keep your current setup and connect the new website directly to your existing booking engine (Cloudbeds, Mews, Little Hotelier, Sirvoy, or Amenitiz) so availability and room rates stay synchronized."
    },
    {
      q: "How should we choose between Google Ads, Instagram, and TripAdvisor?",
      a: "Google Ads reaches people actively searching for a hotel, tour, or service in a specific Moroccan city. Instagram and Facebook (Meta Ads) showcase your property visually and retarget recent website visitors. TripAdvisor Ads suits properties wanting top placement on city comparison lists."
    },
    {
      q: "How is monthly ad spend billed?",
      a: "All campaigns run under your own Google, Meta, or TripAdvisor accounts. You pay media spend directly to the platforms by company card, while our flat monthly fee covers setup and ongoing management."
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
    <section className="py-14 md:py-16 px-6 bg-bg-light border-t border-primary/10" id="faq-section-element">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
            Practical questions
          </h2>
          <p className="text-sm text-primary/75 leading-relaxed mb-4">
            Straightforward answers on SEO timelines, PMS compatibility, and media billing.
          </p>
          <Link
            to="/en/faq"
            className="text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            Read all FAQs
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
