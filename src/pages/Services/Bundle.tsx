import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Design & Ads Bundle",
    "description": "Comprehensive digital marketing package combining a high-converting website with targeted ad campaigns.",
    "provider": {
      "@type": "Organization",
      "name": "Urunk"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Morocco"
      },
      {
        "@type": "Country",
        "name": "Worldwide"
      }
    ],
    "url": "https://urunk.com/en/services/bundle-site-ads"
  };

export default function Bundle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website and Ads Bundle",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Urunk"
    },
    "description": "Complete direct-booking engine bundle including custom WordPress website and ad management."
  };

  const faqs = [
    { q: "Why is bundling website and ads better?", a: "Traffic sent to a poorly converting website wastes your ad budget. A beautiful website with no traffic generates zero bookings. By handling both, we ensure a seamless, high-converting funnel from the first click to the final booking confirmation." },
    { q: "Which ad channel should I choose?", a: "We usually recommend Google Ads for properties looking to capture immediate, high-intent searches (e.g., 'hotel in Casablanca'). We recommend TripAdvisor for properties that have exceptional reviews but struggle with organic visibility on the platform." },
    { q: "How quickly can we launch?", a: "The website build takes roughly 3 to 5 weeks. We structure the ad campaigns concurrently so that the moment the new site goes live, we flip the switch on the traffic, resulting in immediate impact." }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Hotel Website + Ads Bundle | Urunk" 
        description="Combined package pairing a high-speed hotel website with targeted search ads to maximize direct booking return on investment." 
        schema={[schema, serviceSchema]}
      />
      
      {/* Hero & AI Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Growth Bundle
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Hotel Website + Ads Bundle</h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            The complete direct-booking engine. A high-converting site fueled by immediate, targeted traffic.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>What we do:</strong> The Urunk Bundle pairs a brand new, custom WordPress direct-booking website with one channel of dedicated Ad Management (Google or TripAdvisor). This integrated approach ensures you don't just get a pretty website, but a functional booking engine fueled by qualified traffic from day one.
            </Callout>
          </div>
          <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
            Get a Custom Bundle Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The danger of siloed marketing.</h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              When you hire one agency to build your website and another to run your ads, things get messy. Ad campaigns send traffic to broken landing pages. Conversion tracking tags get lost in the shuffle. If bookings don't materialize, both agencies point the finger at each other.
            </p>
            <p className="text-primary/80 leading-relaxed">
              We solve this by taking full ownership of your direct booking funnel. From the ad copy that catches a traveler's eye to the 'Book Now' button they click on your new site, we ensure a frictionless journey.
            </p>
          </div>
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10">
             <h3 className="text-xl font-bold mb-4">Why the bundle wins:</h3>
             <ul className="space-y-4">
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Single point of accountability</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Immediate ROI upon website launch</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Flawless conversion tracking integration</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Cohesive messaging from ad to booking engine</li>
             </ul>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-primary/5 py-20 px-6 border-y border-primary/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">What's included in the bundle?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. New Custom Website</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Mobile-first WordPress design</li>
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Direct booking engine integration</li>
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Fast loading speeds & technical SEO</li>
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Easy-to-use content editor</li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Ad Management (Pick 1)</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Google Ads OR TripAdvisor Ads setup</li>
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Extensive keyword/competitor research</li>
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Continuous monthly optimization</li>
                <li className="flex gap-3 text-primary/80 text-sm"><span className="text-accent">→</span> Transparent performance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">The Launch Process</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-bold mb-1">Dual Strategy</h3>
                  <p className="text-sm text-primary/80">We map out your website structure and your ad campaign architecture simultaneously.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">Build Phase</h3>
                  <p className="text-sm text-primary/80">While developers build the site, our ad specialists configure the tracking and draft the ad copy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">Synchronized Launch</h3>
                  <p className="text-sm text-primary/80">The moment the site goes live and passes QA, we turn on the traffic. Instant impact.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-white p-10 rounded-2xl shadow-md flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">LIMITED CAPACITY</div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Bundle Pricing</span>
            <h3 className="text-2xl font-bold mb-2">Custom Quote Required</h3>
            <p className="text-white/80 text-sm mb-6">Because every property's needs are different, we provide a unified, tailored quote for the entire project.</p>
            <div className="bg-white/10 p-4 rounded-xl mb-8 w-full">
              <p className="text-sm text-accent font-medium">Only 3 new bundle clients accepted per month to ensure quality.</p>
            </div>
            <Link to="/en/contact" className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl font-medium transition-colors">Check Availability</Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Explore the strategic model</h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          We designed a comprehensive Web + Ads blueprint for corporate gastronomy and catering concepts, illustrating high-performance acquisition structures.
        </p>
        <Link to="/en/work/nomad-eats-catering" className="text-accent hover:text-accent-hover font-medium flex items-center justify-center gap-2 transition-colors">
          Explore Strategy Example <ArrowRight size={18} />
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg-alt border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col border-t border-primary/20">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-primary/20">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-4 text-lg">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-accent">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-primary/70 pb-6 pr-4 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Take full control of your bookings.</h2>
        <p className="text-xl text-primary/80 mb-8">One agency. One cohesive strategy. Serious results.</p>
        <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
          Get Your Free Proposal <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
