import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

interface FooterNavProps {
  isFrench: boolean;
}

export default function FooterNav({ isFrench }: FooterNavProps) {
  const homeLink = isFrench ? '/' : '/en';

  return (
    <footer className="print:hidden bg-bg-alt border-t border-primary/10 pt-14 pb-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 pb-10 border-b border-primary/10">
          {/* Column 1-2: Brand & Direct Casablanca Office Contact */}
          <div className="sm:col-span-2 space-y-3">
            <Link to={homeLink} className="text-2xl font-serif font-bold text-primary tracking-tight hover:text-accent transition-colors inline-block">
              Urunk
            </Link>
            <p className="text-sm text-primary/80 max-w-sm leading-relaxed">
              {isFrench
                ? 'Agence de création de sites web, référencement local et campagnes publicitaires pour hôtels, riads, voyagistes et PME au Maroc.'
                : 'Web design, local SEO, and paid search agency for hotels, riads, tour operators, and SMEs in Morocco.'}
            </p>
            <address className="not-italic pt-2 text-xs text-primary/75 space-y-1 leading-relaxed">
              <p>3 Rue El Kadi Lass, Maarif, Casablanca, {isFrench ? 'Maroc' : 'Morocco'}</p>
              <p>
                <a href="tel:+212668802096" className="hover:text-accent transition-colors">+212 668-802096</a>
                {' · '}
                <a href="mailto:contact@urunk.com" className="hover:text-accent transition-colors">contact@urunk.com</a>
              </p>
              <p className="text-primary/60">
                {isFrench ? 'Lundi au vendredi, 09h00 à 18h00 · Réponse sous 24h ouvrées' : 'Monday to Friday, 09:00 to 18:00 · Reply within 24 business hours'}
              </p>
            </address>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="font-semibold text-xs text-primary mb-3">{isFrench ? 'Services' : 'Services'}</p>
            <ul className="space-y-1.5 text-xs text-primary/80">
              <li>
                <Link to={isFrench ? '/services/creation-site-web' : '/en/services/website-design'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Création de site web' : 'Website design'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-web-maroc' : '/en/web-design-morocco'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Agence web Maroc' : 'Web design Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-web-casablanca' : '/en/web-design-casablanca'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Agence web Casablanca' : 'Web design Casablanca'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/site-web-hotel' : '/en/hotel-website-design'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Site web hôtel' : 'Hotel website design'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-seo-maroc' : '/en/seo-agency-morocco'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Agence SEO Maroc' : 'SEO agency Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-seo-casablanca' : '/en/seo-agency-casablanca'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'SEO Casablanca' : 'SEO Casablanca'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/seo-hotel' : '/en/hotel-seo'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'SEO hôtelier' : 'Hotel SEO'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/google-ads-maroc' : '/en/google-ads-morocco'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Google Ads Maroc' : 'Google Ads Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/reservation-directe' : '/en/direct-booking'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Réservation directe' : 'Direct booking'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <p className="font-semibold text-xs text-primary mb-3">{isFrench ? 'Secteurs' : 'Industries'}</p>
            <ul className="space-y-1.5 text-xs text-primary/80">
              <li>
                <Link to={isFrench ? '/secteurs/hotels-resorts' : '/en/industries/hotels-resorts'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Hôtels et complexes' : 'Hotels & resorts'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/secteurs/riads-maisons-hotes' : '/en/industries/riads-boutique-hotels'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? "Riads et maisons d'hôtes" : 'Riads & guesthouses'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/secteurs/tour-operateurs' : '/en/industries/tour-operators'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Tour-opérateurs' : 'Tour operators'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/secteurs/restaurants-traiteurs' : '/en/industries/restaurants-catering'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Restaurants et traiteurs' : 'Restaurants & catering'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/secteurs/pme-entreprises' : '/en/industries/corporate-smes'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'PME et entreprises B2B' : 'Corporate & SMEs'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Locations */}
          <div>
            <p className="font-semibold text-xs text-primary mb-3">
              <Link to={isFrench ? '/zones' : '/en/locations'} className="hover:text-accent transition-colors">
                {isFrench ? 'Villes au Maroc' : 'Locations'}
              </Link>
            </p>
            <ul className="space-y-1.5 text-xs text-primary/80">
              <li>
                <Link to={isFrench ? '/zones' : '/en/locations'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Toutes les zones' : 'All locations'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/zones/maroc' : '/en/locations/morocco'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Maroc' : 'Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/zones/casablanca' : '/en/locations/casablanca'} className="hover:text-accent transition-colors block py-0.5">
                  Casablanca
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/zones/marrakech' : '/en/locations/marrakech'} className="hover:text-accent transition-colors block py-0.5">
                  Marrakech
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/zones/rabat' : '/en/locations/rabat'} className="hover:text-accent transition-colors block py-0.5">
                  Rabat
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/zones/agadir' : '/en/locations/agadir'} className="hover:text-accent transition-colors block py-0.5">
                  Agadir
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Company & Legal */}
          <div>
            <p className="font-semibold text-xs text-primary mb-3">{isFrench ? 'Agence' : 'Company'}</p>
            <ul className="space-y-1.5 text-xs text-primary/80">
              <li>
                <Link to={isFrench ? '/a-propos' : '/en/about'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'À propos' : 'About'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/realisations' : '/en/work'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Dossiers métiers' : 'Project dossiers'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/blog' : '/en/blog'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Blog et guides' : 'Blog & guides'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/tarifs' : '/en/pricing'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Tarifs' : 'Pricing'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/faq' : '/en/faq'} className="hover:text-accent transition-colors block py-0.5">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/contact' : '/en/contact'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Contact' : 'Contact'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/plan-du-site' : '/en/sitemap'} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Plan du site' : 'Sitemap'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Copyright & Legal Row */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary/75">
          <p>© {new Date().getFullYear()} Urunk. {isFrench ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to={isFrench ? '/politique-de-confidentialite' : '/en/privacy-policy'} className="hover:text-primary transition-colors">
              {isFrench ? 'Confidentialité' : 'Privacy policy'}
            </Link>
            <Link to={isFrench ? '/conditions-generales' : '/en/terms-of-service'} className="hover:text-primary transition-colors">
              {isFrench ? 'Conditions générales' : 'Terms of service'}
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open_cookie_banner'))}
              className="hover:text-primary transition-colors cursor-pointer underline underline-offset-2"
            >
              {isFrench ? 'Cookies' : 'Cookies'}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
