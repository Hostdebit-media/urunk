import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Target, Check } from 'lucide-react';
import { caseStudies } from '../../../data/caseStudies';
import ImageWithSkeleton from '../../ImageWithSkeleton';

const getImageName = (slug: string) => {
  if (slug === "travel-morocco-services") return "sahara-camel";
  if (slug === "nomad-eats-catering") return "moroccan-catering";
  if (slug === "art-house-marrakech") return "marrakech-pottery";
  return undefined;
};

export default function PortfolioSectionFR() {
  return (
    <section id="portfolio" className="bg-bg-alt py-20 md:py-28 px-6 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Compass size={14} />
            Exemples de Stratégies Sectorielles
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Modèles Stratégiques pour la Croissance Digitale</h2>
          <p className="text-lg text-primary/75 max-w-2xl font-light leading-relaxed">
            Découvrez nos cadres d'action conçus pour le tourisme, l'hôtellerie et les services au Maroc. Apprenez comment nous structurons les canaux de réservation directe et les moteurs d'acquisition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <ImageWithSkeleton 
                  src={study.heroImage} 
                  imageName={getImageName(study.slug)}
                  alt={study.frTopicName}
                  width={400}
                  height={250}
                  loading="lazy"
                  className="w-full h-full"
                  imgClassName="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-accent font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Target size={12} />
                  Modèle stratégique illustratif
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1">{study.frIndustry}</span>
                <h3 className="font-serif font-bold text-lg text-primary mb-3 leading-snug">{study.frTopicName}</h3>
                
                <div className="space-y-2 mb-6 pt-3 border-t border-primary/10 flex-grow">
                  {study.frDigitalChallenges.slice(0, 2).map((ch, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-primary/80">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/realisations/${study.frSlug}`} 
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-hover transition-colors mt-auto pt-2"
                >
                  <span>Consulter le plan stratégique</span>
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
