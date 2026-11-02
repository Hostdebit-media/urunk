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
      className="hidden lg:flex items-center self-stretch gap-7 xl:gap-8 text-[15px] font-medium shrink-0"
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
              className="py-2 whitespace-nowrap shrink-0 text-primary no-underline hover:text-accent hover:underline underline-offset-4 rounded-sm transition-colors"
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
                className={`flex items-center gap-1 py-2 whitespace-nowrap shrink-0 no-underline hover:text-accent rounded-sm transition-colors cursor-pointer ${
                  isOpen ? 'text-accent font-semibold' : 'text-primary'
                }`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span>{isFrench ? group.title.fr : group.title.en}</span>
                <ChevronDown
                  size={14}
                  className={`shrink-0 transition-transform duration-150 ${
                    isOpen ? 'rotate-180 text-accent' : 'text-primary/65'
                  }`}
                />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActiveDropdown(isOpen ? null : group.id)}
                className={`flex items-center gap-1 py-2 whitespace-nowrap shrink-0 hover:text-accent rounded-sm transition-colors cursor-pointer ${
                  isOpen ? 'text-accent font-semibold' : 'text-primary'
                }`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span>{isFrench ? group.title.fr : group.title.en}</span>
                <ChevronDown
                  size={14}
                  className={`shrink-0 transition-transform duration-150 ${
                    isOpen ? 'rotate-180 text-accent' : 'text-primary/65'
                  }`}
                />
              </button>
            )}

            {isOpen && group.columns ? (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-[min(92vw,58rem)] z-50">
                <div className="bg-bg-card rounded-sm p-7 border border-border-subtle w-full grid grid-cols-1 md:grid-cols-3 gap-7 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
                  {group.columns.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      <p className="text-xs font-semibold text-primary/70 border-b border-border-subtle pb-2 m-0">
                        {isFrench ? col.heading.fr : col.heading.en}
                      </p>
                      <div className="divide-y divide-border-subtle/50">
                        {col.items.map((item, itemIdx) => {
                          const href = isFrench ? item.link.fr : item.link.en;
                          return (
                            <Link
                              key={itemIdx}
                              to={href}
                              className="group/item block py-2.5 px-2 rounded-sm no-underline hover:bg-bg-alt transition-colors"
                            >
                              <span className="font-medium text-[15px] text-primary group-hover/item:text-accent transition-colors block">
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
              <div className="absolute top-full left-0 pt-1 z-50">
                <div
                  className={`bg-bg-card rounded-sm p-4 border border-border-subtle max-h-[calc(100vh-5.5rem)] overflow-y-auto ${
                    isMultiColumnSimple
                      ? 'w-[min(90vw,540px)] grid grid-cols-1 md:grid-cols-2 gap-x-4 divide-y md:divide-y-0'
                      : 'min-w-[300px] max-w-[360px] divide-y divide-border-subtle/50'
                  }`}
                >
                  {group.simpleItems.map((item, itemIdx) => {
                    const href = isFrench ? item.link.fr : item.link.en;
                    return (
                      <Link
                        key={itemIdx}
                        to={href}
                        className="group/item block py-2.5 px-2 rounded-sm no-underline hover:bg-bg-alt transition-colors"
                      >
                        <span className="font-medium text-[15px] text-primary group-hover/item:text-accent transition-colors block">
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
