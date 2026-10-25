import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MatrixLinkItem } from '../data/matrixRelations';

interface RelatedExpertiseSectionProps {
  title: string;
  subtitle: string;
  kicker?: string;
  links: MatrixLinkItem[];
  isFrench: boolean;
  bgVariant?: 'default' | 'alt' | 'white';
}

export default function RelatedExpertiseSection({
  title,
  subtitle,
  kicker,
  links,
  isFrench,
  bgVariant = 'default'
}: RelatedExpertiseSectionProps) {
  if (!links || links.length === 0) return null;

  const bgClass =
    bgVariant === 'alt'
      ? 'bg-bg-alt border-y border-primary/10'
      : bgVariant === 'white'
      ? 'bg-white border-y border-primary/10'
      : 'bg-bg border-y border-primary/10';

  return (
    <section className={`py-16 md:py-20 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          {kicker && (
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
              {kicker}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-primary/75 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group bg-white p-6 rounded-2xl border border-primary/10 hover:border-accent transition-all flex flex-col justify-between"
            >
              <div>
                <p className="text-xs text-primary/60 font-medium mb-2">
                  {item.contextLabel}
                </p>
                <h3 className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors mb-2">
                  {item.anchor}
                </h3>
                <p className="text-xs sm:text-sm text-primary/75 font-light leading-relaxed">
                  {item.summary}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-primary/5 flex items-center justify-between text-xs font-bold text-accent">
                <span>{isFrench ? 'Consulter cette expertise' : 'Explore expertise'}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
