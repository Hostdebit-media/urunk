import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import Hairline from '../ui/Hairline';

interface FooterNavProps {
  isFrench: boolean;
}

export default function FooterNav({ isFrench }: FooterNavProps) {
  const homeLink = isFrench ? '/' : '/en';

  const linkClass =
    'text-bg-light/85 hover:text-bg-light underline underline-offset-4 decoration-bg-light/30 hover:decoration-bg-light transition-colors inline-block py-0.5';

  return (
    <footer className="print:hidden bg-primary text-bg-light pt-16 pb-12 px-[clamp(20px,5vw,56px)] mt-auto">
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Brand & Casablanca Office */}
          <div className="space-y-4">
            <Link
              to={homeLink}
              className="font-serif text-[26px] leading-none font-normal text-bg-light no-underline hover:text-bg-light/85 transition-colors inline-block"
            >
              Urunk
            </Link>
            <p className="text-[15px] text-bg-light/85 leading-relaxed m-0">
              {isFrench
                ? 'Agence de création de sites web, référencement local et campagnes publicitaires pour hôtels, riads, voyagistes et PME au Maroc.'
                : 'Web design, local SEO, and paid search agency for hotels, riads, tour operators, and SMEs in Morocco.'}
            </p>
            <address className="not-italic pt-1 text-sm text-bg-light/80 space-y-1.5 leading-relaxed">
              <p className="m-0">3 Rue El Kadi Lass, Maarif, Casablanca, {isFrench ? 'Maroc' : 'Morocco'}</p>
              <p className="m-0 flex flex-col gap-1">
                <a href="tel:+212668802096" className={linkClass}>
                  +212 668-802096
                </a>
                <a href="mailto:contact@urunk.com" className={linkClass}>
                  contact@urunk.com
                </a>
              </p>
              <p className="text-bg-light/70 m-0">
                {isFrench
                  ? 'Lundi au vendredi, 09h00 à 18h00, réponse sous [À CONFIRMER]'
                  : 'Monday to Friday, 09:00 to 18:00, reply within [À CONFIRMER]'}
              </p>
            </address>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="font-semibold text-sm text-bg-light mb-4 m-0">
              {isFrench ? 'Services' : 'Services'}
            </p>
            <ul className="space-y-2 text-sm list-none p-0 m-0">
              <li>
                <Link to={isFrench ? '/services/creation-site-web' : '/en/services/website-design'} className={linkClass}>
                  {isFrench ? 'Création de site web' : 'Website design'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-web-maroc' : '/en/web-design-morocco'} className={linkClass}>
                  {isFrench ? 'Agence web Maroc' : 'Web design Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-web-casablanca' : '/en/web-design-casablanca'} className={linkClass}>
                  {isFrench ? 'Agence web Casablanca' : 'Web design Casablanca'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/site-web-hotel' : '/en/hotel-website-design'} className={linkClass}>
                  {isFrench ? 'Site web hôtel' : 'Hotel website design'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-seo-maroc' : '/en/seo-agency-morocco'} className={linkClass}>
                  {isFrench ? 'Agence SEO Maroc' : 'SEO agency Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/agence-seo-casablanca' : '/en/seo-agency-casablanca'} className={linkClass}>
                  {isFrench ? 'SEO Casablanca' : 'SEO Casablanca'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/seo-hotel' : '/en/hotel-seo'} className={linkClass}>
                  {isFrench ? 'SEO hôtelier' : 'Hotel SEO'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/google-ads-maroc' : '/en/google-ads-morocco'} className={linkClass}>
                  {isFrench ? 'Google Ads Maroc' : 'Google Ads Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/reservation-directe' : '/en/direct-booking'} className={linkClass}>
                  {isFrench ? 'Réservation directe' : 'Direct booking'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries & Locations */}
          <div className="space-y-8">
            <div>
              <p className="font-semibold text-sm text-bg-light mb-4 m-0">
                <Link to={isFrench ? '/secteurs' : '/en/industries'} className="text-bg-light no-underline hover:underline">
                  {isFrench ? 'Secteurs' : 'Industries'}
                </Link>
              </p>
              <ul className="space-y-2 text-sm list-none p-0 m-0">
                <li>
                  <Link to={isFrench ? '/secteurs/hotels-resorts' : '/en/industries/hotels-resorts'} className={linkClass}>
                    {isFrench ? 'Hôtels et complexes' : 'Hotels & resorts'}
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/secteurs/riads-maisons-hotes' : '/en/industries/riads-boutique-hotels'} className={linkClass}>
                    {isFrench ? "Riads et maisons d'hôtes" : 'Riads & guesthouses'}
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/secteurs/tour-operateurs' : '/en/industries/tour-operators'} className={linkClass}>
                    {isFrench ? 'Tour-opérateurs' : 'Tour operators'}
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/secteurs/restaurants-traiteurs' : '/en/industries/restaurants-catering'} className={linkClass}>
                    {isFrench ? 'Restaurants et traiteurs' : 'Restaurants & catering'}
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/secteurs/pme-entreprises' : '/en/industries/corporate-smes'} className={linkClass}>
                    {isFrench ? 'PME et entreprises B2B' : 'Corporate & SMEs'}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm text-bg-light mb-4 m-0">
                <Link to={isFrench ? '/zones' : '/en/locations'} className="text-bg-light no-underline hover:underline">
                  {isFrench ? 'Villes au Maroc' : 'Locations'}
                </Link>
              </p>
              <ul className="space-y-2 text-sm list-none p-0 m-0">
                <li>
                  <Link to={isFrench ? '/zones' : '/en/locations'} className={linkClass}>
                    {isFrench ? 'Toutes les zones' : 'All locations'}
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/zones/maroc' : '/en/locations/morocco'} className={linkClass}>
                    {isFrench ? 'Maroc' : 'Morocco'}
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/zones/casablanca' : '/en/locations/casablanca'} className={linkClass}>
                    Casablanca
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/zones/marrakech' : '/en/locations/marrakech'} className={linkClass}>
                    Marrakech
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/zones/rabat' : '/en/locations/rabat'} className={linkClass}>
                    Rabat
                  </Link>
                </li>
                <li>
                  <Link to={isFrench ? '/zones/agadir' : '/en/locations/agadir'} className={linkClass}>
                    Agadir
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Company */}
          <div>
            <p className="font-semibold text-sm text-bg-light mb-4 m-0">
              {isFrench ? 'Agence' : 'Company'}
            </p>
            <ul className="space-y-2 text-sm list-none p-0 m-0">
              <li>
                <Link to={isFrench ? '/a-propos' : '/en/about'} className={linkClass}>
                  {isFrench ? 'À propos' : 'About'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/realisations' : '/en/work'} className={linkClass}>
                  {isFrench ? 'Réalisations' : 'Work'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/blog' : '/en/blog'} className={linkClass}>
                  {isFrench ? 'Blog et guides' : 'Blog & guides'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/tarifs' : '/en/pricing'} className={linkClass}>
                  {isFrench ? 'Tarifs' : 'Pricing'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/faq' : '/en/faq'} className={linkClass}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/contact' : '/en/contact'} className={linkClass}>
                  {isFrench ? 'Contact' : 'Contact'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? '/plan-du-site' : '/en/sitemap'} className={linkClass}>
                  {isFrench ? 'Plan du site' : 'Sitemap'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Hairline className="!border-bg-light/20" />

        {/* Legal Row */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-bg-light/75">
          <p className="m-0">
            © {new Date().getFullYear()} Urunk. {isFrench ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to={isFrench ? '/politique-de-confidentialite' : '/en/privacy-policy'} className={linkClass}>
              {isFrench ? 'Confidentialité' : 'Privacy policy'}
            </Link>
            <Link to={isFrench ? '/conditions-generales' : '/en/terms-of-service'} className={linkClass}>
              {isFrench ? 'Conditions générales' : 'Terms of service'}
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open_cookie_banner'))}
              className="text-bg-light/85 hover:text-bg-light underline underline-offset-4 decoration-bg-light/30 hover:decoration-bg-light transition-colors cursor-pointer"
            >
              {isFrench ? 'Cookies' : 'Cookies'}
            </button>
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
