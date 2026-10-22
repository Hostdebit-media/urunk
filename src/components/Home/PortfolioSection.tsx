import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Target, Check } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import ImageWithSkeleton from '../ImageWithSkeleton';

const getImageName = (slug: string) => {
  if (slug === "travel-morocco-services") return "sahara-camel";
  if (slug === "nomad-eats-catering") return "moroccan-catering";
  if (slug === "art-house-marrakech") return "marrakech-pottery";
  return undefined;
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-bg-alt py-20 md:py-28 px-6 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Compass size={14} />
            Case Studies & Frameworks
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-primary">Applied Strategy Examples</h2>
          <p className="text-base md:text-lg text-primary/75 max-w-3xl font-light leading-relaxed">
            These typical scenarios illustrate how tailored digital infrastructures operate in the Moroccan market. Each framework integrates high-speed web development, direct PMS connectivity, local search engine optimization, and targeted paid acquisition designed to structurally decrease reliance on third-party online travel agencies and intermediary commission fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <ImageWithSkeleton 
                  src={study.heroImage} 
                  imageName={getImageName(study.slug)}
                  alt={study.topicName}
                  width={400}
                  height={250}
                  loading="lazy"
                  className="w-full h-full"
                  imgClassName="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-accent font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Target size={12} />
                  Typical Scenario Blueprint
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1">{study.industry}</span>
                <h3 className="font-serif font-bold text-lg text-primary mb-3 leading-snug">{study.topicName}</h3>
                
                <div className="space-y-2 mb-6 pt-3 border-t border-primary/10 flex-grow">
                  {study.digitalChallenges.slice(0, 2).map((ch, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-primary/80">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/en/work/${study.slug}`} 
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-hover transition-colors mt-auto pt-2"
                >
                  <span>Read Strategy Blueprint</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
