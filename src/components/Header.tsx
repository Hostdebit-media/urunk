import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import Button from './ui/Button';

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
        className={`print:hidden sticky top-0 left-0 right-0 z-50 w-full bg-bg-light px-[clamp(20px,5vw,56px)] transition-colors duration-200 ${
          isScrolled ? 'border-b border-border-subtle shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <div className="relative h-[76px] flex justify-between items-center gap-8 max-w-[1240px] mx-auto w-full">
          <Link
            to={isFrench ? '/' : '/en'}
            aria-label="Urunk"
            className="font-serif text-[26px] leading-none font-normal text-primary no-underline hover:text-accent transition-colors whitespace-nowrap shrink-0"
          >
            Urunk
          </Link>

          <DesktopNav isFrench={isFrench} />

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <LanguageSwitcher />
            <Button
              href={contactLink}
              variant="primary"
              className="!px-5 !py-2.5 text-[15px] whitespace-nowrap shrink-0"
            >
              {ctaText}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <button
              type="button"
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm text-primary hover:bg-bg-alt transition-colors cursor-pointer"
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
