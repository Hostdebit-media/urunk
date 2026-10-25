import React from 'react';
import SEO from '../../components/SEO';
import { buildArticleSchema } from '../../components/SEO/StructuredData';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { ArrowRight, Compass, Target } from 'lucide-react';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';

const getImageName = (slug: string) => {
  if (slug === "travel-morocco-services" || slug === "circuit-sahara-maroc") return "sahara-camel";
  if (slug === "nomad-eats-catering" || slug === "traiteur-casablanca") return "moroccan-catering";
  if (slug === "art-house-marrakech" || slug === "atelier-poterie-marrakech") return "marrakech-pottery";
  return undefined;
};

export default function WorkIndex() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://urunk.com/en/work#webpage",
      "name": "Industry Strategy Examples | Urunk Digital Agency",
      "description": "Explore Urunk's strategic frameworks and digital growth methodologies for Moroccan tourism, hospitality, and catering businesses.",
      "url": "https://urunk.com/en/work",
      "inLanguage": "en-US"
    },
    buildArticleSchema({
      type: 'Article',
      url: 'https://urunk.com/en/work',
      headline: 'Industry Strategy Examples & Frameworks | Urunk',
      description: "Explore Urunk's strategic digital frameworks and direct booking architectures for Moroccan hotels, riads, tour operators, and catering services.",
      datePublished: '2026-01-18',
      lang: 'en'
    })
  ];

  return (
    <div className="w-full pb-20 bg-bg text-primary">
      <SEO 
        title="Industry Strategy Examples & Frameworks | Urunk" 
        description="Explore Urunk's strategic digital frameworks and direct booking architectures for Moroccan hotels, riads, tour operators, and catering services." 
        schema={schema}
      />
      
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            <Compass size={14} />
            Digital Growth Frameworks
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Strategy <span className="text-accent italic font-semibold">Examples</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Transparent, actionable digital blueprints designed specifically for Moroccan tourism, hospitality, and corporate services. Learn how we structure direct booking systems and multi-channel acquisition engines.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary/5 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">Methodology & Execution Standards</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">How Urunk Architectures Drive Direct Growth</h2>
            <p className="text-sm text-primary/80 leading-relaxed font-light mb-6">
              Our strategy models serve as educational and planning benchmarks for Moroccan tourism, hospitality, and corporate enterprises. We do not believe in superficial digital marketing or generic visual redesigns. True digital growth is engineered from the ground up by combining ultra-fast, server-side optimized frontend software with high-precision regional search intent analysis.
            </p>
            <p className="text-sm text-primary/80 leading-relaxed font-light mb-8">
              By establishing direct, commission-free booking funnels, our hospitality models are specifically designed to reduce third-party OTA commissions (which typically range from 15% to 25% per booking) and increase direct booking revenues by up to +40%. For corporate and B2B enterprises, we construct highly structured organic search campaigns that drive qualified leads directly to your sales teams, reducing your cost per inquiry by -35% on average. Explore our specialized industry strategic frameworks below to see our methodology in action.
            </p>

            <div className="border-t border-primary/5 pt-8">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">Our Agency Capabilities & Pillars</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-accent mb-2">1. Direct Booking Optimizations</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    We connect and synchronize PMS and Channel Managers directly to customized frontend structures. This eliminates intermediary commissions, speeds up reservation workflows, and provides secure checkout forms natively.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">2. Localized Search Authority</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    We capture high-intent multi-lingual queries (English, French, Arabic, German) across key target markets. Our local schema generation and structured indexing guarantee premium positioning on maps and search engines.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">3. Responsive Edge Engineering</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    By compiling code to lightweight bundles and routing assets via Cloudflare's server edge, we deliver instant content paint under 1.5 seconds, ensuring mobile users never bounce due to poor connectivity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">4. Data Auditing & Compliance</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    Every design is fully WCAG AA compliant and secured using modern Content Security Policies. We configure Google Consent Mode v2 natively, protecting user privacy while tracking direct business metrics accurately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {caseStudies.map((study, index) => (
            <Link to={`/en/work/${study.slug}`} key={index} className="group bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                <ImageWithSkeleton 
                  src={study.heroImage} 
                  imageName={getImageName(study.slug)}
                  alt={study.topicName}
                  width={400}
                  height={250}
                  loading="lazy"
                  className="w-full h-full"
                  imgClassName="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-accent font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Target size={12} />
                  Strategy Example
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                  {study.industry}
                </span>
                <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-accent transition-colors text-primary line-clamp-2">
                  {study.topicName}
                </h2>
                <p className="text-xs text-primary/75 mb-6 line-clamp-3 font-light leading-relaxed">
                  {study.businessScenario}
                </p>

                <div className="mt-auto pt-4 border-t border-primary/10">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60 block mb-1">Target Metric Benchmark:</span>
                    <span className="text-xs font-bold text-accent bg-accent/5 px-2.5 py-1 rounded border border-accent/10 inline-block">
                      {study.recommendedKPIs[0].metric}
                    </span>
                  </div>
                  <span className="text-xs font-bold flex items-center gap-1 text-accent group-hover:text-accent-hover transition-all">
                    <span>Explore Full Strategy</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
    );
}
