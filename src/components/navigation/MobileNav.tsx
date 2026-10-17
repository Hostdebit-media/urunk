import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, MapPin, Mail, Phone, ArrowRight, X } from 'lucide-react';
import { navData } from './NavData';
import LanguageSwitcher from '../LanguageSwitcher';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  isFrench: boolean;
}

export default function MobileNav({ isOpen, onClose, isFrench }: MobileNavProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    onClose();
    setOpenSection(null);
  }, [location.pathname]);

  // Handle ESC key
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
  const aboutLink = isFrench ? '/a-propos' : '/en/about';
  const aboutText = isFrench ? 'À Propos' : 'About Us';

  return (
    <div 
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div 
        className={`absolute top-0 right-0 bottom-0 w-[88vw] max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-50 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-primary/10">
            <Link to={isFrench ? "/" : "/en"} onClick={onClose} className="text-2xl font-serif font-bold text-primary">
              Urunk
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button 
                type="button" 
                onClick={onClose}
                className="p-2.5 rounded-xl hover:bg-bg-alt text-primary min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Accordion Sections */}
          <div className="py-4 space-y-1">
            {navData.map((group) => {
              const isSectionOpen = openSection === group.id;
              const isSimpleLink = group.link && !group.columns && !group.simpleItems;

              if (isSimpleLink) {
                return (
                  <div key={group.id} className="border-b border-primary/5 py-2">
                    <Link 
                      to={isFrench ? group.link!.fr : group.link!.en}
                      onClick={onClose}
                      className="text-base font-bold text-primary hover:text-accent transition-colors block py-3"
                    >
                      {isFrench ? group.title.fr : group.title.en}
                    </Link>
                  </div>
                );
              }

              return (
                <div key={group.id} className="border-b border-primary/5 py-2">
                  <div className="flex items-center justify-between min-h-[48px]">
                    {group.link ? (
                      <Link 
                        to={isFrench ? group.link.fr : group.link.en}
                        onClick={onClose}
                        className="text-base font-bold text-primary hover:text-accent transition-colors flex-grow py-2"
                      >
                        {isFrench ? group.title.fr : group.title.en}
                      </Link>
                    ) : (
                      <span className="text-base font-bold text-primary py-2 flex-grow">
                        {isFrench ? group.title.fr : group.title.en}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => setOpenSection(isSectionOpen ? null : group.id)}
                      className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-primary/70 hover:text-accent"
                      aria-label={`Toggle ${isFrench ? group.title.fr : group.title.en}`}
                      aria-expanded={isSectionOpen}
                    >
                      <ChevronDown size={18} className={`transition-transform duration-300 ${isSectionOpen ? 'rotate-180 text-accent' : ''}`} />
                    </button>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isSectionOpen ? 'max-h-[800px] opacity-100 my-2' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-2 space-y-3 bg-bg-alt rounded-2xl p-4 border border-primary/5">
                      {group.columns ? (
                        group.columns.map((col, colIdx) => (
                          <div key={colIdx} className="space-y-2">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-accent border-b border-primary/10 pb-1">
                              {isFrench ? col.heading.fr : col.heading.en}
                            </p>
                            <div className="space-y-1">
                              {col.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  to={isFrench ? item.link.fr : item.link.en}
                                  onClick={onClose}
                                  className="block py-2 px-2.5 rounded-lg hover:bg-white text-sm font-medium text-primary hover:text-accent transition-colors"
                                >
                                  {isFrench ? item.title.fr : item.title.en}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : group.simpleItems ? (
                        <div className="space-y-1">
                          {group.simpleItems.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={isFrench ? item.link.fr : item.link.en}
                              onClick={onClose}
                              className="block py-2 px-2.5 rounded-lg hover:bg-white text-sm font-medium text-primary hover:text-accent transition-colors"
                            >
                              {isFrench ? item.title.fr : item.title.en}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Drawer Bottom Actions & Contact */}
        <div className="p-6 bg-bg-alt border-t border-primary/10 space-y-4">
          <Link
            to={contactLink}
            onClick={onClose}
            className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-full font-semibold shadow-md text-center flex items-center justify-center gap-2 transition-all min-h-[48px]"
          >
            <span>{ctaText}</span>
            <ArrowRight size={16} />
          </Link>

          <div className="p-4 bg-white rounded-2xl border border-primary/10 text-xs text-primary/80 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <MapPin size={14} className="text-accent shrink-0" />
              <span>Casablanca · Marrakech</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary/70 shrink-0" />
              <a href="mailto:contact@urunk.com" className="hover:text-accent">contact@urunk.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary/70 shrink-0" />
              <a href="tel:+212668802096" className="hover:text-accent">(+212)0668802096</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
