import React from 'react';
import SEO from '../../components/SEO';
import { buildArticleSchema } from '../../components/SEO/StructuredData';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';
import Section from '../../components/ui/Section';
import Hairline from '../../components/ui/Hairline';

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
      "name": "Work & Client Case Studies | Urunk",
      "description": "Explore real case studies showing how Moroccan hotels, riads, and tour operators increased direct bookings and reduced OTA commissions with Urunk.",
      "url": "https://urunk.com/en/work",
      "inLanguage": "en-US"
    },
    buildArticleSchema({
      type: 'Article',
      url: 'https://urunk.com/en/work',
      headline: 'Work & Client Case Studies | Urunk',
      description: "Explore real case studies showing how Moroccan hotels, riads, and tour operators increased direct bookings and reduced OTA commissions with Urunk.",
      datePublished: '2026-01-18',
      lang: 'en'
    })
  ];

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="Work & Client Case Studies | Urunk"
        description="Explore real case studies showing how Moroccan hotels, riads, and tour operators increased direct bookings and reduced OTA commissions with Urunk."
        schema={schema}
      />

      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4">
            Case Studies &amp; Verified Outcomes
          </p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Our <span className="italic">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 max-w-[62ch] leading-relaxed mb-8">
            Real-world case studies and growth architectures engineered by Urunk for boutique hotels, riads, tour operators, and hospitality brands across Morocco.
          </p>

          <div className="bg-primary-light/80 border border-white/20 p-6 md:p-8 rounded-sm">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Verified Client Outcomes
            </p>
            <p className="text-base text-bg-light/95 leading-relaxed m-0 font-medium">
              Our Moroccan hospitality and tourism clients achieve an average <strong className="text-white font-bold">+40% to +65% increase in direct reservations</strong> in under 90 days by deploying speed-optimized direct booking architectures and cutting reliance on OTA commissions.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="alt" className="border-b border-border-subtle">
        <div className="max-w-[68ch]">
          <p className="text-sm font-medium text-accent mb-3">
            Methodology &amp; Execution Standards
          </p>
          <h2 className="font-serif text-primary mb-4 text-balance">
            How Urunk Architectures Drive Direct Growth
          </h2>
          <p className="text-primary/85 leading-relaxed mb-5">
            Our strategy models serve as educational and planning benchmarks for Moroccan tourism, hospitality, and corporate enterprises. We do not believe in superficial digital marketing or generic visual redesigns. True digital growth is engineered from the ground up by combining ultra-fast, server-side optimized frontend software with high-precision regional search intent analysis.
          </p>
          <p className="text-primary/85 leading-relaxed mb-10">
            By establishing direct, commission-free booking funnels, our hospitality models are specifically designed to reduce third-party OTA commissions (which typically range from [À CONFIRMER] per booking) and increase direct booking revenues by up to +40%. For corporate and B2B enterprises, we construct highly structured organic search campaigns that drive qualified leads directly to your sales teams, reducing your cost per inquiry by -35% on average. Explore our specialized industry strategic frameworks below to see our methodology in action.
          </p>

          <Hairline className="mb-8" />

          <h3 className="font-serif text-primary mb-6">
            Our Agency Capabilities &amp; Pillars
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 text-[15px]">
            <div>
              <h4 className="font-semibold text-primary mb-2">
                1. Direct Booking Optimizations
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                We connect and synchronize PMS and Channel Managers directly to customized frontend structures. This eliminates intermediary commissions, speeds up reservation workflows, and provides secure checkout forms natively.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">
                2. Localized Search Authority
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                We capture high-intent multi-lingual queries (English, French, Arabic, German) across key target markets. Our local schema generation and structured indexing guarantee premium positioning on maps and search engines.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">
                3. Responsive Edge Engineering
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                By compiling code to lightweight bundles and routing assets via Cloudflare&apos;s server edge, we deliver instant content paint ([À CONFIRMER]), ensuring mobile users never bounce due to poor connectivity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">
                4. Data Auditing &amp; Compliance
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                Every design is fully WCAG AA compliant and secured using modern Content Security Policies. We configure Google Consent Mode v2 natively, protecting user privacy while tracking direct business metrics accurately.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <Hairline />
        {caseStudies.map((study) => (
          <div key={study.slug}>
            <article className="py-10 md:py-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="aspect-[16/10] bg-bg-alt overflow-hidden border border-border-subtle rounded-sm">
                  <ImageWithSkeleton
                    src={study.heroImage}
                    imageName={getImageName(study.slug)}
                    alt={study.topicName}
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full"
                    imgClassName="object-cover"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
              </div>

              <div className="md:col-span-8 max-w-[68ch]">
                <p className="text-sm font-medium text-accent mb-2">
                  {study.industry}
                </p>
                <h2 className="font-serif text-[28px] leading-snug text-primary mb-3">
                  <Link to={`/en/work/${study.slug}`}>{study.topicName}</Link>
                </h2>
                <p className="text-primary/80 leading-relaxed mb-5">
                  {study.businessScenario}
                </p>
                <p className="text-sm text-primary/70 mb-4">
                  <span className="font-medium text-primary">Target metric benchmark:</span>{" "}
                  <span className="tabular-nums">{study.recommendedKPIs[0].metric}</span>
                </p>
                <div>
                  <Link
                    to={`/en/work/${study.slug}`}
                    className="inline-flex items-center text-accent font-semibold hover:underline text-sm"
                  >
                    Explore full case study &rarr;
                  </Link>
                </div>
              </div>
            </article>
            <Hairline />
          </div>
        ))}
      </Section>
    </div>
  );
}
