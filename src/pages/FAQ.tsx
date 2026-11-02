import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Hairline from '../components/ui/Hairline';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs: FaqItem[] = [
    {
      category: 'direct-booking',
      question: 'How do you help Moroccan riads and hotels reduce OTA commissions?',
      answer: 'We engineer high-performance, ultra-fast direct booking websites (starting at 12,000 MAD / ≈€1,100) integrated directly with your Property Management System (PMS) like Cloudbeds or Mews. Combined with targeted Google Search Ads (4,000 MAD/mo / ≈€370 management retainer) and local SEO, we intercept high-intent travelers before they book on Booking.com or Expedia, slashing OTA commissions from [À CONFIRMER] down to zero and driving up to a +40% increase in direct revenue.'
    },
    {
      category: 'seo',
      question: 'How long does it take for hotel SEO to rank on Google in Morocco?',
      answer: 'Initial technical SEO fixes, mobile speed optimization, and Google Business Profile enhancements yield measurable local map pack improvements within 30 to 45 days. Comprehensive organic ranking for high-value competitive travel keywords (such as "luxury riad Marrakech" or "boutique hotel Fes") typically matures over a 4 to 6 week execution period followed by 3 to 6 months of ongoing content authority building.'
    },
    {
      category: 'pricing',
      question: 'What is included in Urunk\'s hospitality website design packages?',
      answer: 'Every website project (12,000 MAD / ≈€1,100 fixed investment) includes custom luxury UI/UX responsive design, ultra-fast Jamstack/React performance engineering ([À CONFIRMER] load times), multi-language architecture (English, French, Arabic), native booking engine API integration, and complete technical SEO setup. We deliver fully operational assets within 4 to 6 weeks, backed by our 90-day growth guarantee.'
    },
    {
      category: 'ads',
      question: 'Which paid advertising channel works best for Moroccan hotels: Google Ads or Meta Ads?',
      answer: 'Google Ads (managed at 4,000 MAD/mo / ≈€370) capture active travelers with immediate booking intent searching for accommodations in specific Moroccan destinations. Meta Ads (Instagram and Facebook) excel at visual storytelling, showcasing room architecture and amenities to European and North American travelers in the inspiration phase, delivering an average -35% reduction in cost per guest inquiry when combined.'
    },
    {
      category: 'pms',
      question: 'Can you integrate your websites with my existing hotel PMS?',
      answer: 'Yes, we seamlessly integrate direct booking engines with all leading Property Management Systems including Cloudbeds, Mews, Little Hotelier, Sirvoy, and Opera via secure API connections. This ensures real-time room availability, automatic rate synchronization, and instant booking confirmation without manual inventory management.'
    },
    {
      category: 'general',
      question: 'Where is Urunk located and do you work with international clients?',
      answer: 'Urunk is headquartered at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco, with regional presence in Marrakech, providing local proximity for Moroccan property owners alongside global service standards. We partner with luxury riads, boutique hotels, and tour operators across Morocco and internationally, offering remote consultations via Google Meet and flexible monthly retainers with a 15 days\' notice policy.'
    },
    {
      category: 'seo',
      question: 'Why is page speed so crucial for hotel direct booking websites?',
      answer: 'Over 70% of luxury travel research occurs on mobile devices where slow load times directly cause booking abandonment. If a hotel website takes longer than 2.5 seconds to load, potential guests return to OTAs. Our custom sites load in [À CONFIRMER], preserving user intent and boosting direct conversion rates by up to +40%.'
    },
    {
      category: 'direct-booking',
      question: 'How do you handle multi-language support for international guests?',
      answer: 'We build native multi-language structures using canonical tags and hreflang annotations to target high-value feeder markets in Europe, North America, and the Middle East. Every page is translated into commercial-grade English, French, and Arabic with localized currency displays to eliminate conversion friction.'
    },
    {
      category: 'general',
      question: 'What does a digital growth agency in Morocco do?',
      answer: 'A digital growth agency in Morocco like Urunk builds and optimizes high-performance websites, manages search engine optimization (SEO) and local search campaigns on Google Maps, and runs targeted Google and Meta advertising. By focusing on technical speed, search authority, and direct-to-consumer acquisition, we help Moroccan companies and hospitality brands scale their revenue and bypass expensive intermediary commissions.'
    },
    {
      category: 'seo',
      question: 'What is Urunk\'s approach to local SEO and digital growth in Casablanca?',
      answer: 'As Morocco’s commercial capital, Casablanca is home to highly competitive markets where organic search ranking is critical. Urunk provides specialized local SEO, Google Maps optimization, and lead generation campaigns tailored to businesses in Casablanca. We optimize your Google Business Profile, target high-intent B2B and consumer keywords, and implement performance-first web development to place your brand directly in front of active local searchers.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="FAQ | Hospitality Digital Marketing & SEO Questions | Urunk"
        description="Find expert answers about hotel direct booking strategies, SEO for Moroccan riads, website design costs, PMS integration, and Google Ads management."
        schema={schema}
      />

      {/* Hero Section */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-[68ch]">
          <p className="text-sm font-medium text-bg-light/75 mb-4">Knowledge Base</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Frequently Asked <span className="italic">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 leading-relaxed mb-10">
            Everything you need to know about our digital marketing, direct booking engineering, and SEO methodologies for Moroccan hotels and riads.
          </p>

          <div className="max-w-lg">
            <label htmlFor="faq-search-en" className="block text-sm text-bg-light/85 mb-2">
              Filter questions by keyword
            </label>
            <input
              id="faq-search-en"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. OTA commissions, PMS, Google Ads"
              className="w-full px-4 py-3 rounded-sm bg-bg-light text-primary border border-border-subtle text-base"
            />
          </div>
        </div>
      </Section>

      {/* Introductory Overview */}
      <Section tone="alt" className="border-b border-border-subtle">
        <div className="max-w-[68ch] space-y-4">
          <h2 className="font-serif text-primary">
            About Our Hospitality Knowledge Base
          </h2>
          <p className="text-primary/85 leading-relaxed">
            Welcome to the Urunk Hospitality &amp; Digital Growth Knowledge Base. Navigating digital marketing, hotel search engine optimization, and website engineering can present complex technical and financial decisions for property owners, general managers, and revenue directors across Morocco. This comprehensive FAQ repository is designed to provide complete operational transparency regarding our direct booking strategies, custom web development frameworks, and multi-channel acquisition campaigns. Whether you manage a luxury riad in Marrakech, a seaside resort in Agadir, or a boutique desert camp in Merzouga, our goal is to help you eliminate high OTA commissions (which range from [À CONFIRMER]), regain ownership of your guest relationships, and achieve a 40% increase in direct booking revenue. Below you will find detailed answers regarding our 4-to-6 week project timelines, technical PMS integrations (including Cloudbeds and Mews), transparent fixed pricing models (12,000 MAD website creation / 4,000 MAD/mo ad retainer), and risk-free 90-day growth guarantees.
          </p>
        </div>
      </Section>

      {/* Category Filter + Accordion */}
      <Section tone="light">
        <div className="max-w-[68ch]">
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'direct-booking', label: 'Direct Booking' },
              { id: 'seo', label: 'SEO & Google' },
              { id: 'ads', label: 'Paid Advertising' },
              { id: 'pms', label: 'PMS Integration' },
              { id: 'general', label: 'General Agency' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary text-bg-light'
                    : 'bg-bg-card text-primary/75 border border-border-subtle hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="py-12 border-y border-border-subtle">
              <h3 className="font-serif text-primary mb-2">No matching questions found</h3>
              <p className="text-primary/75 mb-6">
                Try searching with different keywords or reach out to our team directly.
              </p>
              <Button variant="primary" href="/en/contact">
                Ask Our Experts
              </Button>
            </div>
          ) : (
            <div className="border-t border-border-subtle">
              {filteredFaqs.map((faq, idx) => (
                <details
                  key={faq.question}
                  open={idx === 0 && searchQuery === '' && activeCategory === 'all'}
                  className="group border-b border-border-subtle"
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-2 text-lg text-primary">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180 text-accent shrink-0 ml-4">
                      <ChevronDown size={20} />
                    </span>
                  </summary>
                  <div className="text-primary/80 pb-6 pr-4 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          )}

          {/* Direct Insights (AEO) */}
          <div className="mt-16 pt-12 border-t border-border-subtle space-y-10" id="aeo-directes-en">
            <h2 className="font-serif text-primary">Direct answers</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-primary mb-3">
                  What does a digital growth agency in Morocco do?
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  A digital growth agency in Morocco like Urunk builds and optimizes high-performance websites, manages search engine optimization (SEO) and local search campaigns on Google Maps, and runs targeted Google and Meta advertising. By focusing on technical speed, search authority, and direct-to-consumer acquisition, we help Moroccan companies and hospitality brands scale their revenue and bypass expensive intermediary commissions.
                </p>
              </div>
              <Hairline />
              <div>
                <h3 className="font-serif text-primary mb-3">
                  What is Urunk&apos;s approach to local SEO and digital growth in Casablanca?
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  As Morocco’s commercial capital, Casablanca is home to highly competitive markets where organic search ranking is critical. Urunk provides specialized local SEO, Google Maps optimization, and lead generation campaigns tailored to businesses in Casablanca. We optimize your Google Business Profile, target high-intent B2B and consumer keywords, and implement performance-first web development to place your brand directly in front of active local searchers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark">
        <div className="max-w-[68ch]">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            Have a specific question about your property?
          </h2>
          <p className="text-bg-light/85 text-lg mb-8 leading-relaxed">
            Our hospitality strategists are ready to analyze your hotel or riad&apos;s digital performance and answer any technical questions you may have.
          </p>
          <Button variant="dark" href="/en/contact">
            Schedule a Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
}
