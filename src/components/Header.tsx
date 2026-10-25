import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const ctaText = isFrench ? 'Demander un audit' : 'Request an audit';

  return (
    <>
      <header
        className={`print:hidden sticky top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-primary/10'
            : 'bg-bg-light/95 backdrop-blur-md border-b border-primary/10'
        }`}
      >
        <div className="relative h-[72px] px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-8 max-w-7xl mx-auto w-full">
          <Link
            to={isFrench ? '/' : '/en'}
            aria-label="Urunk"
            className="text-2xl font-serif font-bold text-primary tracking-tight hover:text-accent transition-colors whitespace-nowrap shrink-0"
          >
            Urunk
          </Link>

          <DesktopNav isFrench={isFrench} />

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Link
              to={contactLink}
              className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap shrink-0 transition-colors"
            >
              {ctaText}
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <button
              type="button"
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-primary hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-accent focus:outline-none transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isFrench={isFrench}
      />
    </>
  );
}
