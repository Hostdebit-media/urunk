import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'How do you help Moroccan riads and hotels get more direct bookings?',
      a: 'We build a fast official website (starting at 12,000 MAD) connected directly to your booking engine, pair it with an optimized Google Business Profile, and run targeted Google Search campaigns (4,000 MAD/month management fee) when immediate demand capture is needed. Guests searching for your property or neighborhood book on your site with zero OTA commission.'
    },
    {
      q: 'What timelines should we expect for website launch and SEO results?',
      a: 'A complete website launches in 4 to 6 weeks. Local improvements on Google Maps and mobile page speed typically appear within 30 to 45 days, while organic search rankings for competitive hospitality keywords build steadily over 3 to 6 months.'
    },
    {
      q: 'Can you connect the website to my existing hotel PMS?',
      a: 'Yes. We connect your website directly to widely used Property Management Systems and booking engines including Cloudbeds, Mews, Little Hotelier, Sirvoy, and Amenitiz so room availability and rates stay synchronized.'
    },
    {
      q: 'Should we start with Google Ads, Meta Ads, or TripAdvisor Ads?',
      a: 'Google Ads captures travelers or B2B buyers already searching for a specific location or service in Morocco. Meta Ads (Instagram and Facebook) works well for visual discovery and retargeting past website visitors. TripAdvisor Ads places your property at the top of city comparison lists while travelers read reviews.'
    },
    {
      q: 'How is ad spend billed and who owns the ad accounts?',
      a: 'All campaigns run inside your own Google, Meta, or TripAdvisor accounts. You pay media spend directly to the platforms via your company card, while our flat monthly retainer covers campaign setup, keyword filtering, and ongoing management.'
    },
    {
      q: 'Where is Urunk based and how do we collaborate?',
      a: 'Our office is at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco, and we work with properties and businesses in Casablanca, Marrakech, Rabat, and Agadir. We meet in person or over Google Meet and share straightforward monthly progress reports.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <section className="py-20 md:py-24 px-6 bg-bg-light border-t border-primary/10" id="faq-section-en-element">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium text-accent mb-3">
            Frequently asked questions
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Practical answers before you start
          </h2>
          <p className="text-sm text-primary/75 leading-relaxed mb-6">
            Delivery timelines, PMS integrations, ad account billing, and day-to-day collaboration.
          </p>
          <Link
            to="/en/faq"
            className="text-sm font-semibold text-accent hover:underline"
          >
            View all frequently asked questions
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
