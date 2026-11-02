import React from 'react';

export type SectionTone = 'light' | 'alt' | 'dark';

export interface SectionProps {
  children: React.ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  containerClassName?: string;
  'aria-labelledby'?: string;
}

const toneStyles: Record<SectionTone, string> = {
  light: 'bg-bg-light text-primary',
  alt: 'bg-bg-alt text-primary',
  dark: 'bg-primary text-bg-light',
};

export default function Section({
  children,
  tone = 'light',
  id,
  className = '',
  containerClassName = '',
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${toneStyles[tone]} py-[clamp(72px,10vw,136px)] px-[clamp(20px,5vw,56px)] ${className}`.trim()}
    >
      <div className={`max-w-[1240px] mx-auto w-full ${containerClassName}`.trim()}>
        {children}
      </div>
    </section>
  );
}
