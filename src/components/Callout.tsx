import React from 'react';
import { Lightbulb } from 'lucide-react';

interface CalloutProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

export default function Callout({ children, variant = 'light' }: CalloutProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 md:p-8 text-left mb-8 flex gap-4 md:gap-6 items-start transition-all hover:shadow-sm ${
      isDark 
        ? 'bg-white/5 border border-white/10 text-white/90 shadow-md backdrop-blur-sm' 
        : 'bg-white border border-primary/5 text-primary/90 shadow-md'
    }`}>
      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent"></div>
      
      <div className={`shrink-0 p-3 rounded-xl ${isDark ? 'bg-white/10 text-yellow-400' : 'bg-accent/10 text-accent'}`}>
        <Lightbulb size={28} strokeWidth={1.5} />
      </div>
      
      <div className="text-[1.05rem] md:text-lg leading-relaxed pt-1 min-w-0 flex-1 break-words">
        {children}
      </div>
    </div>
  );
}
