import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { navData } from './NavData';
import LanguageSwitcher from '../LanguageSwitcher';
import Button from '../ui/Button';
import Hairline from '../ui/Hairline';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  isFrench: boolean;
}

export default function MobileNav({ isOpen, onClose, isFrench }: MobileNavProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    onClose();
    setOpenSection(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const contactLink = isFrench ? '/contact' : '/en/contact';
  const ctaText = isFrench ? 'Demandez un Audit SEO Gratuit' : 'Get a Free SEO Audit';

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-bg-light flex flex-col justify-between overflow-y-auto w-full">
      <div className="px-[clamp(20px,5vw,56px)]">
        {/* Top bar */}
        <div className="h-[76px] flex items-center justify-between">
          <Link
            to={isFrench ? '/' : '/en'}
            onClick={onClose}
            className="font-serif text-[26px] leading-none font-normal text-primary no-underline"
          >
            Urunk
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-sm hover:bg-bg-alt text-primary min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label={isFrench ? 'Fermer le menu' : 'Close menu'}
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <Hairline />

        {/* Navigation rows separated by hairlines */}
        <nav aria-label={isFrench ? 'Menu mobile' : 'Mobile menu'}>
          {navData.map((group) => {
            const isSectionOpen = openSection === group.id;
            const isSimpleLink = group.link && !group.columns && !group.simpleItems;

            if (isSimpleLink) {
              return (
                <div key={group.id} className="border-b border-border-subtle">
                  <Link
                    to={isFrench ? group.link!.fr : group.link!.en}
                    onClick={onClose}
                    className="text-[17px] font-medium text-primary no-underline hover:text-accent transition-colors block py-4"
                  >
                    {isFrench ? group.title.fr : group.title.en}
                  </Link>
                </div>
              );
            }

            return (
              <div key={group.id} className="border-b border-border-subtle">
                <div className="flex items-center justify-between min-h-[56px]">
                  {group.link ? (
                    <Link
                      to={isFrench ? group.link.fr : group.link.en}
                      onClick={onClose}
                      className="text-[17px] font-medium text-primary no-underline hover:text-accent transition-colors flex-grow py-4"
                    >
                      {isFrench ? group.title.fr : group.title.en}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpenSection(isSectionOpen ? null : group.id)}
                      className="text-left text-[17px] font-medium text-primary py-4 flex-grow cursor-pointer"
                    >
                      {isFrench ? group.title.fr : group.title.en}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpenSection(isSectionOpen ? null : group.id)}
                    className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-primary/70 hover:text-accent cursor-pointer"
                    aria-label={`Toggle ${isFrench ? group.title.fr : group.title.en}`}
                    aria-expanded={isSectionOpen}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${isSectionOpen ? 'rotate-180 text-accent' : ''}`}
                    />
                  </button>
                </div>

                {isSectionOpen && (
                  <div className="pb-5 space-y-5">
                    {group.columns ? (
                      group.columns.map((col, colIdx) => (
                        <div key={colIdx}>
                          <p className="text-xs font-semibold text-primary/65 pb-2 m-0 border-b border-border-subtle">
                            {isFrench ? col.heading.fr : col.heading.en}
                          </p>
                          <div className="divide-y divide-border-subtle/60">
                            {col.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={isFrench ? item.link.fr : item.link.en}
                                onClick={onClose}
                                className="block py-3 text-[15px] text-primary no-underline hover:text-accent transition-colors"
                              >
                                {isFrench ? item.title.fr : item.title.en}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : group.simpleItems ? (
                      <div className="divide-y divide-border-subtle/60 border-t border-border-subtle">
                        {group.simpleItems.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={isFrench ? item.link.fr : item.link.en}
                            onClick={onClose}
                            className="block py-3 text-[15px] text-primary no-underline hover:text-accent transition-colors"
                          >
                            {isFrench ? item.title.fr : item.title.en}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom CTA & Direct Contact */}
      <div className="px-[clamp(20px,5vw,56px)] py-8 bg-bg-alt border-t border-border-subtle space-y-5 mt-8">
        <Button href={contactLink} onClick={onClose} variant="primary" className="w-full">
          {ctaText}
        </Button>

        <div className="text-sm text-primary/80 space-y-1.5">
          <p className="font-medium text-primary m-0">Casablanca, Marrakech</p>
          <p className="m-0">
            <a href="mailto:contact@urunk.com">contact@urunk.com</a>
          </p>
          <p className="m-0">
            <a href="tel:+212668802096">(+212)0668802096</a>
          </p>
        </div>
      </div>
    </div>
  );
}
