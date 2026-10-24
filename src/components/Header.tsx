import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollTop > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const contactLink = isFrench ? '/contact' : '/en/contact';
  const ctaText = isFrench ? 'Demander un Audit Gratuit' : 'Request a Free Audit';

  return (
    <>
      <header 
        className={`print:hidden sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-sm'
            : 'bg-bg-light/95 backdrop-blur-md border-b border-primary/10'
        }`}
      >
        <div className="relative h-[72px] px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4 max-w-7xl mx-auto w-full">
          
          {/* Brand Logo */}
          <Link 
            to={isFrench ? "/" : "/en"} 
            aria-label="Urunk Homepage" 
            className="text-2xl font-serif font-bold text-primary tracking-tight hover:text-accent transition-colors shrink-0"
          >
            Urunk
          </Link>
          
          {/* Desktop Information Architecture Navigation */}
          <DesktopNav isFrench={isFrench} />
          
          {/* Desktop Right Actions: Language Switcher & Primary CTA */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
            <LanguageSwitcher />
            <Link 
              to={contactLink} 
              className="bg-accent hover:bg-accent-hover text-white px-4 xl:px-5 py-2.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap shrink-0 transition-all shadow-xs flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{ctaText}</span>
              <ArrowRight size={14} className="shrink-0" />
            </Link>
            <a
              href="https://wa.me/212668802096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isFrench ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}
              className="bg-emerald-600 hover:bg-emerald-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-xs shrink-0 hover:scale-[1.05] active:scale-[0.95]"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <button 
              type="button"
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-primary hover:bg-primary/5 focus:outline-none transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} className="text-primary" /> : <Menu size={26} className="text-primary" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        isFrench={isFrench} 
      />
    </>
  );
}
