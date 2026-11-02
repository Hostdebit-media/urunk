import React from 'react';

export interface HairlineProps {
  className?: string;
}

export default function Hairline({ className = '' }: HairlineProps) {
  return (
    <hr
      className={`border-0 border-t border-border-subtle w-full m-0 ${className}`.trim()}
    />
  );
}
