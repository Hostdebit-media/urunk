import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getEquivalentRoute } from '../data/slugMappings';

export { getEquivalentRoute };

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
  variant?: 'light' | 'dark';
}

export default function LanguageSwitcher({
  className = '',
  variant = 'light',
}: LanguageSwitcherProps) {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const nextPath = getEquivalentRoute(location.pathname);
  const targetRoute = nextPath + location.search + location.hash;

  const handleClick = () => {
    const newLang = isFrench ? 'en' : 'fr';
    try {
      localStorage.setItem('urunk-lang', newLang);
    } catch {
      // ignore
    }
    window.scrollTo(0, 0);
  };

  const isDark = variant === 'dark';

  return (
    <Link
      to={targetRoute}
      onClick={handleClick}
      className={`inline-flex items-center px-3 py-1.5 min-h-[38px] rounded-sm text-[13px] font-medium whitespace-nowrap shrink-0 no-underline transition-colors border cursor-pointer ${
        isDark
          ? 'border-bg-light/25 text-bg-light hover:border-bg-light bg-transparent'
          : 'border-border-subtle text-primary hover:border-accent bg-bg-card'
      } ${className}`.trim()}
      aria-label={isFrench ? 'Switch to English' : 'Passer en Français'}
      title={isFrench ? 'Switch to English' : 'Passer en Français'}
      hrefLang={isFrench ? 'en' : 'fr'}
    >
      <span>
        {isFrench ? (
          <>
            <span className={isDark ? 'text-bg-light font-semibold' : 'text-accent font-semibold'}>FR</span>
            <span className={isDark ? 'text-bg-light/50 mx-1' : 'text-primary/50 mx-1'}>/</span>
            <span className={isDark ? 'text-bg-light/80' : 'text-primary/80'}>EN</span>
          </>
        ) : (
          <>
            <span className={isDark ? 'text-bg-light/80' : 'text-primary/80'}>FR</span>
            <span className={isDark ? 'text-bg-light/50 mx-1' : 'text-primary/50 mx-1'}>/</span>
            <span className={isDark ? 'text-bg-light font-semibold' : 'text-accent font-semibold'}>EN</span>
          </>
        )}
      </span>
    </Link>
  );
}
