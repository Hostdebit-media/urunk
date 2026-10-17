import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'direct-booking',
      question: 'How do you help Moroccan riads and hotels reduce OTA commissions?',
      answer: 'We engineer high-performance, ultra-fast direct booking websites (starting at 12,000 MAD / ≈€1,100) integrated directly with your Property Management System (PMS) like Cloudbeds or Mews. Combined with targeted Google Search Ads (4,000 MAD/mo / ≈€370 management retainer) and local SEO, we intercept high-intent travelers before they book on Booking.com or Expedia, slashing OTA commissions from 15-25% down to zero and driving up to a +40% increase in direct revenue.'
    },
    {
      category: 'seo',
      question: 'How long does it take for hotel SEO to rank on Google in Morocco?',
      answer: 'Initial technical SEO fixes, mobile speed optimization, and Google Business Profile enhancements yield measurable local map pack improvements within 30 to 45 days. Comprehensive organic ranking for high-value competitive travel keywords (such as "luxury riad Marrakech" or "boutique hotel Fes") typically matures over a 4 to 6 week execution period followed by 3 to 6 months of ongoing content authority building.'
    },
    {
      category: 'pricing',
      question: 'What is included in Urunk\'s hospitality website design packages?',
      answer: 'Every website project (12,000 MAD / ≈€1,100 fixed investment) includes custom luxury UI/UX responsive design, ultra-fast Jamstack/React performance engineering with under 1.5s load times, multi-language architecture (English, French, Arabic), native booking engine API integration, and complete technical SEO setup. We deliver fully operational assets within 4 to 6 weeks, backed by our 90-day growth guarantee.'
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
      answer: 'Urunk maintains primary operational offices in Marrakech (Guéliz) and Casablanca (Anfa), providing local presence for Moroccan property owners alongside global service standards. We partner with luxury riads, boutique hotels, and tour operators across Morocco and internationally, offering remote consultations via Google Meet and flexible monthly retainers with a 15 days\' notice policy.'
    },
    {
      category: 'seo',
      question: 'Why is page speed so crucial for hotel direct booking websites?',
      answer: 'Over 70% of luxury travel research occurs on mobile devices where slow load times directly cause booking abandonment. If a hotel website takes longer than 2.5 seconds to load, potential guests return to OTAs. Our custom sites load in under 1 second, preserving user intent and boosting direct conversion rates by up to +40%.'
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
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
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
    <div className="w-full bg-bg text-primary pb-24">
      <SEO 
        title="FAQ | Hospitality Digital Marketing & SEO Questions | Urunk"
        description="Find expert answers about hotel direct booking strategies, SEO for Moroccan riads, website design costs, PMS integration, and Google Ads management."
        schema={schema}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-15">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Knowledge Base
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Frequently Asked <span className="text-yellow-400 italic">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Everything you need to know about our digital marketing, direct booking engineering, and SEO methodologies for Moroccan hotels and riads.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. OTA commissions, PMS, Google Ads)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-primary text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      {/* Introductory Overview Section (150 words framework) */}
      <section className="py-12 bg-white px-6 border-b border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-8 bg-primary/5 rounded-3xl border border-primary/10">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0 mt-1">
              <BookOpen size={24} />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-primary">About Our Hospitality Knowledge Base</h2>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Welcome to the Urunk Hospitality & Digital Growth Knowledge Base. Navigating digital marketing, hotel search engine optimization, and website engineering can present complex technical and financial decisions for property owners, general managers, and revenue directors across Morocco. This comprehensive FAQ repository is designed to provide complete operational transparency regarding our direct booking strategies, custom web development frameworks, and multi-channel acquisition campaigns. Whether you manage a luxury riad in Marrakech, a seaside resort in Agadir, or a boutique desert camp in Merzouga, our goal is to help you eliminate high OTA commissions (which range from 15% to 25%), regain ownership of your guest relationships, and achieve a 40% increase in direct booking revenue. Below you will find detailed answers regarding our 4-to-6 week project timelines, technical PMS integrations (including Cloudbeds and Mews), transparent fixed pricing models (12,000 MAD website creation / 4,000 MAD/mo ad retainer), and risk-free 90-day growth guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-5xl mx-auto px-6 pt-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-primary/70 border border-primary/10 hover:border-primary/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-primary/10 p-8">
              <HelpCircle size={40} className="mx-auto text-primary/30 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">No matching questions found</h3>
              <p className="text-primary/70 text-sm font-light mb-6">Try searching with different keywords or reach out to our team directly.</p>
              <Link to="/en/contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold text-sm">
                Ask Our Experts <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-primary hover:text-accent transition-colors"
                  >
                    <span className="text-base md:text-lg">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-primary/70 font-light text-sm md:text-base leading-relaxed border-t border-primary/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Section Direct Insights (AEO) */}
      <section className="max-w-3xl mx-auto px-6 mt-16 pt-16 border-t border-primary/10 text-left" id="aeo-directes-en">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-primary">Direct answers</h2>
        <div className="space-y-6">
          <div className="p-8 bg-white border border-primary/10 rounded-2xl shadow-xs">
            <h3 className="font-serif font-bold text-lg md:text-xl text-primary mb-3">What does a digital growth agency in Morocco do?</h3>
            <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
              A digital growth agency in Morocco like Urunk builds and optimizes high-performance websites, manages search engine optimization (SEO) and local search campaigns on Google Maps, and runs targeted Google and Meta advertising. By focusing on technical speed, search authority, and direct-to-consumer acquisition, we help Moroccan companies and hospitality brands scale their revenue and bypass expensive intermediary commissions.
            </p>
          </div>
          <div className="p-8 bg-white border border-primary/10 rounded-2xl shadow-xs">
            <h3 className="font-serif font-bold text-lg md:text-xl text-primary mb-3">What is Urunk's approach to local SEO and digital growth in Casablanca?</h3>
            <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
              As Morocco’s commercial capital, Casablanca is home to highly competitive markets where organic search ranking is critical. Urunk provides specialized local SEO, Google Maps optimization, and lead generation campaigns tailored to businesses in Casablanca. We optimize your Google Business Profile, target high-intent B2B and consumer keywords, and implement performance-first web development to place your brand directly in front of active local searchers.
            </p>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <div className="bg-primary text-white p-10 md:p-14 rounded-3xl text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,110,85,0.2),transparent_60%)]"></div>
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-white/10 text-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <MessageSquare size={28} />
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Have a specific question about your property?</h2>
            <p className="text-white/80 font-light max-w-xl mx-auto text-sm md:text-base">
              Our hospitality strategists are ready to analyze your hotel or riad's digital performance and answer any technical questions you may have.
            </p>
            <div className="pt-4">
              <Link
                to="/en/contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg text-sm"
              >
                Schedule a Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
