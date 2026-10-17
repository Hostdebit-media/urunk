import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { getEquivalentRoute } from '../data/slugMappings';

export { getEquivalentRoute };

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
}

export default function LanguageSwitcher({ className = '', showIcon = true }: LanguageSwitcherProps) {
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

  return (
    <Link 
      to={targetRoute}
      onClick={handleClick}
      className={`flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full text-xs font-semibold transition-all border border-primary/15 hover:border-accent hover:text-accent bg-white shadow-2xs cursor-pointer ${className}`}
      aria-label={isFrench ? "Switch to English" : "Passer en Français"}
      title={isFrench ? "Switch to English" : "Passer en Français"}
      hrefLang={isFrench ? "en" : "fr"}
    >
      {showIcon && <Globe size={14} className="text-accent shrink-0" />}
      <span>
        {isFrench ? (
          <>
            <span className="text-accent font-bold">FR</span>
            <span className="text-primary/60 mx-1">/</span>
            <span className="text-primary/90 hover:text-primary">EN</span>
          </>
        ) : (
          <>
            <span className="text-primary/90 hover:text-primary">FR</span>
            <span className="text-primary/60 mx-1">/</span>
            <span className="text-accent font-bold">EN</span>
          </>
        )}
      </span>
    </Link>
  );
}

