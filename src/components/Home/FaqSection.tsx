import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "How do you help Moroccan riads and hotels reduce OTA commissions?",
      a: "We build high-performance, ultra-fast direct booking websites (starting at 12,000 MAD / ≈1,100 €) integrated with your Property Management System. Combined with targeted Google Search campaigns (4,000 MAD/month / ≈370 €/month management retainer) and local SEO, we intercept travelers before they book on third-party channels, reducing dependency and increasing your direct bookings."
    },
    {
      q: "How long does it take for an SEO strategy to show results?",
      a: "Technical SEO fixes, page speed optimization, and Google Business Profile updates yield visible local search improvements within 30 to 45 days. Organic authority for competitive search keywords (such as 'luxury riad Marrakech') typically matures over a 4 to 6 week implementation period followed by 3 to 6 months of ongoing growth."
    },
    {
      q: "What is included in your website creation package?",
      a: "Every project (12,000 MAD / ≈1,100 € fixed investment) includes custom luxury user experience design, rapid React performance engineering, bilingual structure (English, French), native booking engine API integration, and complete technical SEO. We deliver in 4 to 6 weeks, backed by our 90-day growth guarantee subject to [CONDITIONS_GARANTIE]."
    },
    {
      q: "Which advertising channel is more effective: Google Ads or Meta Ads?",
      a: "Google Ads (managed at 4,000 MAD/month / ≈370 €/month) capture high-intent travelers actively searching for specific Moroccan destinations. Meta Ads (Instagram and Facebook) excel at showcasing room architecture and amenities to qualified audiences in Europe and North America, optimizing your direct inquiry acquisition costs."
    },
    {
      q: "Can you connect the website to my existing PMS?",
      a: "Yes, we seamlessly integrate direct booking engines with leading Property Management Systems including Cloudbeds, Mews, Little Hotelier, Sirvoy, and Opera via secure API connections. This ensures real-time rate synchronization and availability."
    },
    {
      q: "Where is Urunk located and how do you work with clients?",
      a: "Urunk maintains operational offices in Marrakech (Gueliz) and Casablanca (Anfa) for local presence in Morocco. We collaborate via remote consultations on Google Meet and offer flexible monthly agreements with a 15-day notice policy."
    },
    {
      q: "Are there setup fees for Google, Meta, or TripAdvisor campaigns?",
      a: "No, we charge zero setup fees for standard onboarding of your monthly advertising accounts."
    },
    {
      q: "Do you require long-term contracts?",
      a: "No. All our recurring SEO and ad management services are billed on a monthly basis without long-term commitments."
    },
    {
      q: "Are there recurring license fees for our website?",
      a: "No. We build websites using open-source platforms that you own 100%. There are no recurring software fees or monthly licensing costs from our end."
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
    <section className="py-20 md:py-28 px-6" id="faq-section-en-element">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            Clear Answers
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Frequently Asked Questions About SEO, Websites, and OTA Commissions
          </h2>
          <p className="text-base md:text-lg text-primary/75 max-w-3xl mx-auto font-light leading-relaxed">
            This frequently asked questions section provides factual details regarding search engine optimization, hospitality web design in Morocco, and lowering commission costs from online travel agents. Answers cover typical investment budgets, implementation timelines, property management software integration, and contractual terms without long-term lock-in or hidden licensing fees.
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
