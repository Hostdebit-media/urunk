import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navData } from './NavData';

interface DesktopNavProps {
  isFrench: boolean;
}

export default function DesktopNav({ isFrench }: DesktopNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      id="main-navigation"
      className="hidden lg:flex items-center self-stretch gap-6 xl:gap-8 text-[13.5px] xl:text-sm font-medium shrink-0"
      aria-label={isFrench ? 'Navigation principale' : 'Main Navigation'}
    >
      {navData.map((group) => {
        const isOpen = activeDropdown === group.id;
        const isSimpleLink = group.link && !group.columns && !group.simpleItems;

        if (isSimpleLink) {
          return (
            <Link
              key={group.id}
              to={isFrench ? group.link!.fr : group.link!.en}
              className="py-2 whitespace-nowrap shrink-0 text-primary/90 hover:text-accent hover:underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-sm transition-colors"
            >
              {isFrench ? group.title.fr : group.title.en}
            </Link>
          );
        }

        const isMultiColumnSimple = Boolean(group.simpleItems && group.simpleItems.length > 4);

        return (
          <div
            key={group.id}
            className={`${group.columns ? '' : 'relative '}self-stretch flex items-center`}
            onMouseEnter={() => setActiveDropdown(group.id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {group.link ? (
              <Link
                to={isFrench ? group.link.fr : group.link.en}
                className={`flex items-center gap-1 py-2 whitespace-nowrap shrink-0 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-sm transition-colors cursor-pointer text-primary/90 ${isOpen ? 'text-accent font-semibold' : ''}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span>{isFrench ? group.title.fr : group.title.en}</span>
                <ChevronDown size={14} className={`shrink-0 transition-transform duration-150 text-primary/60 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActiveDropdown(isOpen ? null : group.id)}
                className={`flex items-center gap-1 py-2 whitespace-nowrap shrink-0 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-sm transition-colors cursor-pointer text-primary/90 ${isOpen ? 'text-accent font-semibold' : ''}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span>{isFrench ? group.title.fr : group.title.en}</span>
                <ChevronDown size={14} className={`shrink-0 transition-transform duration-150 text-primary/60 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
              </button>
            )}

            {isOpen && group.columns ? (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(92vw,52rem)] z-50">
                <div className="bg-white shadow-lg rounded-xl p-6 border border-primary/10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
                  {group.columns.map((col, idx) => (
                    <div key={idx} className="space-y-2.5">
                      <p className="text-xs font-semibold text-primary/60 border-b border-primary/10 pb-2">
                        {isFrench ? col.heading.fr : col.heading.en}
                      </p>
                      <div className="space-y-1">
                        {col.items.map((item, itemIdx) => {
                          const href = isFrench ? item.link.fr : item.link.en;
                          return (
                            <Link
                              key={itemIdx}
                              to={href}
                              className="group/item block p-2 rounded-lg hover:bg-bg-alt focus-visible:bg-bg-alt outline-none transition-colors"
                            >
                              <span className="font-semibold text-sm text-primary group-hover/item:text-accent transition-colors block">
                                {isFrench ? item.title.fr : item.title.en}
                              </span>
                              <span className="text-xs text-primary/70 leading-relaxed block">
                                {isFrench ? item.desc.fr : item.desc.en}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : isOpen && group.simpleItems ? (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div
                  className={`bg-white shadow-lg rounded-xl p-3 border border-primary/10 max-h-[calc(100vh-5.5rem)] overflow-y-auto ${
                    isMultiColumnSimple
                      ? 'w-[min(90vw,540px)] grid grid-cols-1 md:grid-cols-2 gap-1.5'
                      : 'min-w-[300px] max-w-[360px] flex flex-col gap-1'
                  }`}
                >
                  {group.simpleItems.map((item, itemIdx) => {
                    const href = isFrench ? item.link.fr : item.link.en;
                    return (
                      <Link
                        key={itemIdx}
                        to={href}
                        className="group/item block p-2 rounded-lg hover:bg-bg-alt focus-visible:bg-bg-alt outline-none transition-colors"
                      >
                        <span className="font-semibold text-sm text-primary group-hover/item:text-accent transition-colors block">
                          {isFrench ? item.title.fr : item.title.en}
                        </span>
                        <span className="text-xs text-primary/70 leading-relaxed block">
                          {isFrench ? item.desc.fr : item.desc.en}
                        </span>
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
