import React from 'react';
import { Link } from 'react-router-dom';
import { MatrixLinkItem } from '../data/matrixRelations';
import Section from './ui/Section';
import Hairline from './ui/Hairline';

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
  bgVariant = 'default',
}: RelatedExpertiseSectionProps) {
  if (!links || links.length === 0) return null;

  const tone = bgVariant === 'alt' ? 'alt' : 'light';

  return (
    <Section tone={tone} className="border-t border-border-subtle">
      <div className="max-w-3xl mb-12 space-y-3">
        {kicker && (
          <p className="text-sm font-medium text-accent m-0">
            {kicker}
          </p>
        )}
        <h2 className="m-0">{title}</h2>
        <p className="text-primary/80 leading-relaxed m-0">
          {subtitle}
        </p>
      </div>

      <Hairline />
      <div className="divide-y divide-border-subtle border-b border-border-subtle">
        {links.map((item) => (
          <div
            key={item.id}
            className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
          >
            <div className="md:col-span-5 space-y-1">
              <p className="text-xs text-primary/65 font-medium m-0">
                {item.contextLabel}
              </p>
              <h3 className="m-0">
                <Link to={item.path} className="text-primary hover:text-accent">
                  {item.anchor}
                </Link>
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0">
                {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
