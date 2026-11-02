import React from 'react';

interface CalloutProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

export default function Callout({ children, variant = 'light' }: CalloutProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-sm p-6 md:p-7 text-left mb-8 border ${
        isDark
          ? 'bg-primary-light border-bg-light/20 text-bg-light'
          : 'bg-bg-alt border-border-subtle text-primary'
      }`}
    >
      <div className="text-[17px] leading-relaxed min-w-0 break-words">
        {children}
      </div>
    </div>
  );
}
