import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { navData, NavGroup } from './NavData';
import LanguageSwitcher from '../LanguageSwitcher';

interface DesktopNavProps {
  isFrench: boolean;
}

export default function DesktopNav({ isFrench }: DesktopNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle ESC key to close open dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const contactLink = isFrench ? '/contact' : '/en/contact';
  const ctaText = isFrench ? 'Demandez un Audit SEO Gratuit' : 'Get a Free SEO Audit';
  const aboutLink = isFrench ? '/a-propos' : '/en/about';
  const aboutText = isFrench ? 'À Propos' : 'About Us';

  return (
    <nav id="main-navigation" className="hidden lg:flex items-center self-stretch gap-4 xl:gap-7 text-[13.5px] xl:text-sm font-medium shrink-0" aria-label="Main Navigation">
      {navData.map((group) => {
        const isOpen = activeDropdown === group.id;
        const isSimpleLink = group.link && !group.columns && !group.simpleItems;

        if (isSimpleLink) {
          return (
            <Link
              key={group.id}
              to={isFrench ? group.link!.fr : group.link!.en}
              className="py-2 px-1 whitespace-nowrap text-primary/90 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md transition-colors"
            >
              {isFrench ? group.title.fr : group.title.en}
            </Link>
          );
        }

        const isMultiColumnSimple = Boolean(group.simpleItems && group.simpleItems.length > 4);

        return (
          <div 
            key={group.id}
            className={`${group.columns ? '' : 'relative '}group self-stretch flex items-center`}
            onMouseEnter={() => setActiveDropdown(group.id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {group.link ? (
              <Link
                to={isFrench ? group.link.fr : group.link.en}
                className={`flex items-center gap-1 py-2 px-1 whitespace-nowrap hover:text-accent focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md transition-colors cursor-pointer text-primary/90 hover:text-primary ${isOpen ? 'text-accent font-semibold' : ''}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span>{isFrench ? group.title.fr : group.title.en}</span>
                <ChevronDown size={14} className={`shrink-0 transition-transform duration-200 text-primary/60 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActiveDropdown(isOpen ? null : group.id)}
                className={`flex items-center gap-1 py-2 px-1 whitespace-nowrap hover:text-accent focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md transition-colors cursor-pointer text-primary/90 hover:text-primary ${isOpen ? 'text-accent font-semibold' : ''}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span>{isFrench ? group.title.fr : group.title.en}</span>
                <ChevronDown size={14} className={`shrink-0 transition-transform duration-200 text-primary/60 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
              </button>
            )}

            {/* Mega Menu Overlay Dropdown */}
            {group.columns ? (
              <div 
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(92vw,54rem)] opacity-0 invisible transition-all duration-200 z-50 pointer-events-none group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto ${isOpen ? 'opacity-100 visible pointer-events-auto' : ''}`}
              >
                <div className="bg-white/98 shadow-xl rounded-2xl p-6 border border-primary/10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 backdrop-blur-lg max-h-[calc(100vh-5.5rem)] overflow-y-auto">
                  {group.columns.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent border-b border-primary/10 pb-2">
                        {isFrench ? col.heading.fr : col.heading.en}
                      </p>
                      <div className="space-y-1">
                        {col.items.map((item, itemIdx) => {
                          const Icon = item.icon;
                          const href = isFrench ? item.link.fr : item.link.en;
                          const badge = item.badge ? (isFrench ? item.badge.fr : item.badge.en) : null;

                          return (
                            <Link
                              key={itemIdx}
                              to={href}
                              className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-bg-alt focus-visible:bg-bg-alt outline-none transition-all"
                            >
                              {Icon && (
                                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-white group-focus-visible/item:bg-accent group-focus-visible/item:text-white transition-colors shrink-0 mt-0.5">
                                  <Icon size={16} />
                                </div>
                              )}
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-semibold text-sm text-primary group-hover/item:text-accent transition-colors">
                                    {isFrench ? item.title.fr : item.title.en}
                                  </span>
                                  {badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-accent/10 text-accent uppercase tracking-wider whitespace-nowrap">
                                      {badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-primary/70 line-clamp-2 leading-relaxed">
                                  {isFrench ? item.desc.fr : item.desc.en}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : group.simpleItems ? (
              <div 
                className={`absolute top-full left-0 pt-2 opacity-0 invisible transition-all duration-200 z-50 pointer-events-none group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto ${isOpen ? 'opacity-100 visible pointer-events-auto' : ''}`}
              >
                <div className={`bg-white/98 shadow-xl rounded-2xl p-3 border border-primary/10 backdrop-blur-lg max-h-[calc(100vh-5.5rem)] overflow-y-auto ${
                  isMultiColumnSimple
                    ? 'w-[min(90vw,580px)] grid grid-cols-1 md:grid-cols-2 gap-1.5'
                    : 'min-w-[320px] max-w-[380px] flex flex-col gap-1'
                }`}>
                  {group.simpleItems.map((item, itemIdx) => {
                    const Icon = item.icon;
                    const href = isFrench ? item.link.fr : item.link.en;
                    const badge = item.badge ? (isFrench ? item.badge.fr : item.badge.en) : null;

                    return (
                      <Link
                        key={itemIdx}
                        to={href}
                        className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-bg-alt focus-visible:bg-bg-alt outline-none transition-all"
                      >
                        {Icon && (
                          <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                            <Icon size={16} />
                          </div>
                        )}
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-sm text-primary group-hover/item:text-accent transition-colors">
                              {isFrench ? item.title.fr : item.title.en}
                            </span>
                            {badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-accent/10 text-accent uppercase tracking-wider whitespace-nowrap">
                                {badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-primary/70 line-clamp-2 leading-relaxed">
                            {isFrench ? item.desc.fr : item.desc.en}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
