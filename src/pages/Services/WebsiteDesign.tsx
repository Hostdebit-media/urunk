import React from 'react';
import Callout from '../../components/Callout';
import SEO from '../../components/SEO';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Design for Hotels",
    "description": "Custom WordPress websites designed specifically for hotels, riads, and tour operators to increase direct bookings.",
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
    "url": "https://urunk.com/services/website-design"
  };

export default function WebsiteDesign() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hotel Website Design",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Urunk"
    },
    "description": "Fast, conversion-optimized WordPress websites for hotels and riads in Morocco."
  };

  const faqs = [
    {
      q: "How long does it take to build a hotel website?",
      a: "A complete custom website development project for a hotel or riad typically takes 4 to 6 weeks. This timeline covers all stages of our comprehensive methodology: starting from deep strategic mapping and user flow blueprinting, to customized UI/UX wireframing, high-converting copy creation in multiple languages, seamless PMS widgets integration, and extensive mobile responsiveness and speed testing before final launch.",
    },
    {
      q: "Do you integrate with my existing booking engine?",
      a: "Yes, absolutely. We design and build our architectures to integrate seamlessly with any major Property Management System (PMS) and Channel Manager, including Cloudbeds, SiteMinder, Guesty, Mews, Sirvoy, Little Hotelier, and Opera. Room availability, rates, minimum stay requirements, and promotions are synchronized automatically in real-time, and guest booking information is safely processed via secure merchant gateways like Stripe or CMI in Morocco.",
    },
    {
      q: "Will my website be mobile-friendly and fast on local networks?",
      a: "Yes. Since over 70% of travelers search and complete bookings directly on their smartphones while in transit, we implement a strict 'Mobile-First' philosophy. We optimize every front-end resource (by using modern AVIF/WebP image compressions, lazy-loading all images, deferring non-critical scripts, and optimizing layout shift) to guarantee load times under 1.5 seconds even on standard 4G/5G mobile connections.",
    },
    {
      q: "Who owns the website and domain after the project is completed?",
      a: "You retain 100% exclusive ownership of your website, domain name, hosting plan, all source code, databases, copy, and media assets once the project is launched. We do not lock you into any proprietary platforms, mandatory monthly licensing fees, or restrictive long-term agency subscriptions. We build on open standards like WordPress or clean React, giving you complete freedom.",
    },
    {
      q: "Can the website support multiple languages like English, French, and Spanish?",
      a: "Yes, multi-language support is a fundamental pillar of our design strategy to help you capture high-ticket international tourism. We construct robust language switches with dynamic HTML lang attributes to satisfy international SEO best practices. Visitors can toggle instantly between languages, and each linguistic version is individually optimized to rank and appear on local search results pages (Google.fr, Google.co.uk, Google.de, etc.).",
    },
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Hotel Website Design Services | Direct Booking Sites | Urunk" 
        description="Stop losing direct bookings to OTAs. We build fast, mobile-friendly WordPress websites for hotels and riads in Morocco, optimized for conversions." 
        schema={[schema, serviceSchema]}
      />
      
      {/* Hero & AI Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Digital Transformation
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Hotel & Riad Website Design</h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Turn lookers into bookers with a fast, mobile-first WordPress site designed to bypass OTAs.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>What we do:</strong> Urunk designs and develops custom, direct-booking WordPress websites for hotels, riads, and tour operators in Morocco and worldwide. Our websites are mobile-optimized, load in under 3 seconds, and integrate directly with your property management system (PMS) to reduce reliance on OTA commissions like Booking.com and Expedia.
            </Callout>
          </div>
          <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
            Get a Website Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Your website is losing you money.</h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              OTAs spend millions optimizing their platforms to make booking frictionless. If your official hotel website is slow, hard to navigate on a phone, or makes it difficult to find rates, guests will abandon it.
            </p>
            <p className="text-primary/80 leading-relaxed">
              When they bounce back to an OTA to complete the booking, you lose 15-25% of that revenue in commissions. An outdated website isn't just a branding problem; it's a direct leak in your profit margin.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
             <h3 className="text-xl font-bold mb-4">Signs you need a new site:</h3>
             <ul className="space-y-4">
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Takes more than 3 seconds to load</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> Requires pinching and zooming on mobile</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> No clear "Book Now" buttons</li>
                <li className="flex gap-3 text-primary/80"><Check size={20} className="text-accent shrink-0" /> You can't easily update text or photos yourself</li>
             </ul>
          </div>
        </div>
      </section>

      {/* Technical Performance & Architecture Deep-Dive */}
      <section className="py-20 px-6 bg-white border-y border-primary/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-mono">Technical Specifications</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Hospitality Web Architecture & Core Web Vitals</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              A slow website is the single biggest cause of booking abandonment to OTAs. Our engineering meets Google's strictest performance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 1.2s</div>
              <h3 className="font-bold text-primary text-sm">LCP (Largest Contentful Paint)</h3>
              <p className="text-xs font-light text-primary/70">Ultra-fast loading of high-resolution hero imagery without sacrificing visual fidelity.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">0.00</div>
              <h3 className="font-bold text-primary text-sm">CLS (Cumulative Layout Shift)</h3>
              <p className="text-xs font-light text-primary/70">Perfect visual stability. Zero layout shifts while guests interact with room options.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 80ms</div>
              <h3 className="font-bold text-primary text-sm">INP (Interaction to Next Paint)</h3>
              <p className="text-xs font-light text-primary/70">Instant touch responsiveness when selecting travel dates and checking live availability.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">100 / 100</div>
              <h3 className="font-bold text-primary text-sm">Google Mobile Lighthouse</h3>
              <p className="text-xs font-light text-primary/70">Engineered specifically for 4G/5G mobile networks used by international travelers in transit.</p>
            </div>
          </div>

          {/* New Technologies Section */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Modern Tech Stack</span>
              <h3 className="text-2xl font-serif font-bold text-primary mt-1">High-Performance Technologies</h3>
              <p className="text-primary/70 font-light text-xs mt-2 leading-relaxed">
                We combine the modern web's best tools to provide your guests with a fast, secure, and environmentally friendly online experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary text-base mb-2">WordPress or Headless React</h4>
                <p className="text-xs text-primary/80 font-light leading-relaxed">
                  Choose between a custom-coded WordPress CMS for full content management independence, or a fully headless React / Vite stack deployed at the network edge for instantaneous sub-millisecond response times.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary text-base mb-2">Tailwind CSS & Motion Animations</h4>
                <p className="text-xs text-primary/80 font-light leading-relaxed">
                  We use Tailwind CSS to maintain highly optimized style bundle sizes. Elegant, smooth animations crafted via motion/react provide a luxurious boutique aesthetic that enhances your brand's digital presentation.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary text-base mb-2">Edge Hosting on Cloudflare Workers</h4>
                <p className="text-xs text-primary/80 font-light leading-relaxed">
                  Your HTML pages, static assets, and media files are deployed globally near your key target visitors on Cloudflare's server network. This guarantees minimal latencies whether your guests book from Paris, London, or New York.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Integration PMS */}
          <div className="grid lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Flawless PMS Connection</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Booking Engine & PMS Synchronization</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Maintain your existing management workflow. We integrate your new website directly with your Property Management System (PMS) and Channel Manager via secure widgets and REST APIs.
              </p>
              <ul className="space-y-3 text-xs text-primary/80 font-light">
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> <strong>Cloudbeds, Mews, SiteMinder, Sirvoy, Little Hotelier, Opera & Guesty</strong>.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Automatic real-time sync of room rates, minimum stay rules, and special packages.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Instant guest email confirmations and direct credit card deposit processing.</li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-primary text-white p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-accent">Scope of Deliverables & Guarantees</h3>
              <ul className="space-y-3 text-xs text-white/90 font-light">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Fixed Investment:</strong> From 12,000 MAD (≈€1,100) for complete custom website engineering.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Execution Timeline:</strong> 4 to 6 weeks from initial kickoff to live domain launch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Growth Guarantee:</strong> Backed by our 90-day direct booking performance guarantee.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>100% Asset Ownership:</strong> You retain complete legal ownership of code, domain, and media.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built for direct bookings */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Built for direct bookings.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Conversion-Focused Design</h3>
              <p className="text-white/80 text-sm leading-relaxed">Clear calls-to-action, intuitive mobile-optimized navigation, and beautiful high-performance galleries showcase your property. We guide visitors seamlessly from browsing to direct booking.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Seamless Tech Integrations</h3>
              <p className="text-white/80 text-sm leading-relaxed">Whether you use Cloudbeds, SiteMinder, or a streamlined direct WhatsApp inquiry flow, we integrate your booking engine flawlessly into a cohesive user experience.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">Technical SEO Foundation</h3>
              <p className="text-white/80 text-sm leading-relaxed">Lightning-fast load times, semantic HTML tags, dynamic language management, structured JSON-LD schemas, and responsive layout rules ensure search engines easily rank your hotel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-bg-alt border-b border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Process & Pricing</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-1">Our Timeline & Development Method</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              We apply a strict, phase-gated execution process to ensure projects are delivered on-schedule and exactly within the agreed-upon budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <div className="relative pl-8 border-l border-primary/10 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Weeks 1-2: Strategic Mapping & Audit</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    We define conversion goals, analyze direct competitors in your destination, and architect the site structure (sitemap). We design the user paths specifically to minimize any friction standing between a visiting guest and a completed direct booking.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Weeks 3-4: UI/UX Wireframing & Multilingual Copy</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Our interface designers establish a bespoke visual language celebrating the unique luxury and heritage of your hotel or riad. Simultaneously, we write and refine multi-lingual content to engage premium guests and appeal to regional Google indexers.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Weeks 5-6: Engineering, PMS Sync, & Secure Launch</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Our frontend developers turn approved mockups into clean, high-speed static code. We hook up booking widgets, map APIs, and connect gateway systems. Following rigorous cross-device compatibility checks, we establish SSL certificates and deploy your site securely.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-10 rounded-3xl border border-primary/10 shadow-sm space-y-6 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/15">
                Pricing Approach
              </span>
              <h3 className="text-3xl font-serif font-bold text-primary">Transparent Flat Rates</h3>
              <p className="text-sm text-primary/80 font-light leading-relaxed">
                We invoice projects using clear, fixed milestone pricing with zero hidden commissions, recurring service premiums, or unexpected monthly platform fees.
              </p>
              <div className="py-4 border-y border-primary/5">
                <div className="text-3xl font-serif font-bold text-accent">From 12,000 MAD</div>
                <p className="text-xs text-primary/60 mt-1">Payable in equal milestones: 50% upon project kickoff and 50% upon live launch.</p>
              </div>
              <ul className="space-y-2.5 text-xs text-primary/70 font-light">
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Competitor analysis and complete sitemap design</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Custom PMS & Channel Manager widgets setup</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Speed-tuning under 2 seconds (Core Web Vitals)</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Google Analytics 4 and Tag Manager configuration</li>
              </ul>
              <Link
                to="/en/contact"
                className="w-full bg-primary hover:bg-primary-light text-white py-3.5 rounded-xl font-bold transition-all text-center block text-sm"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">User-Centric Architecture</h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          Explore our strategic design model illustrating how a fast, mobile-first layout combined with direct messaging pathways can improve overall digital engagement and drive record levels of independent, zero-commission reservations.
        </p>
        <Link to="/en/work/art-house-marrakech" className="text-accent hover:text-accent-hover font-medium flex items-center justify-center gap-2 transition-colors">
          Explore Marrakech Case Study <ArrowRight size={18} />
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
        <h2 className="text-4xl font-bold mb-6">Ready to stop paying OTA commissions?</h2>
        <p className="text-xl text-primary/80 mb-8">Let's build a website that works as hard as you do.</p>
        <Link to="/en/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
          Start Your Project Today <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
