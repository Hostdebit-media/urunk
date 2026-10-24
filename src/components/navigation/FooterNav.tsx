import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

interface FooterNavProps {
  isFrench: boolean;
}

export default function FooterNav({ isFrench }: FooterNavProps) {
  const homeLink = isFrench ? '/' : '/en';
  const contactLink = isFrench ? '/contact' : '/en/contact';
  const ctaText = isFrench ? 'Demandez un Audit SEO Gratuit' : 'Get a Free SEO Audit';

  return (
    <footer className="print:hidden bg-bg-alt border-t border-primary/10 pt-16 pb-28 md:pb-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Top 6-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b border-primary/10">
          
          {/* Column 1: Brand & Strategic Positioning */}
          <div className="sm:col-span-2 space-y-4">
            <Link to={homeLink} className="text-2xl font-serif font-bold text-primary tracking-tight hover:text-accent transition-colors block">
              Urunk
            </Link>
            <p className="text-sm text-primary/80 max-w-sm leading-relaxed">
              {isFrench 
                ? "Agence spécialisée en création web, SEO et publicité digitale pour entreprises, hôtels, riads et voyagistes au Maroc. Augmentez vos réservations directes." 
                : "Specialized web design, SEO and digital marketing agency for Moroccan businesses, hotels, riads, and tour operators. Maximize direct revenue."}
            </p>
            <div className="pt-1 text-xs font-semibold text-primary/80 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent shrink-0" />
                <span>Casablanca · Marrakech · Rabat · Agadir</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Globe size={14} className="shrink-0" />
                <span>{isFrench ? "Clients au Maroc & à l'International" : "Serving Clients Across Morocco & Worldwide"}</span>
              </div>
            </div>
            <div className="pt-2">
              <Link 
                to={contactLink}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent-hover transition-all shadow-xs"
              >
                <span>{ctaText}</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="font-bold text-xs uppercase tracking-wider text-accent mb-4">{isFrench ? 'Services' : 'Services'}</p>
            <ul className="space-y-2 text-xs font-medium text-primary/80">
              <li>
                <Link to={isFrench ? "/services/creation-site-web" : "/en/services/website-design"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Création Site Web' : 'Website Design'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/agence-web-maroc" : "/en/web-design-morocco"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Agence Web Maroc' : 'Web Design Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/site-web-hotel" : "/en/hotel-website-design"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Site Web Hôtel' : 'Hotel Website Design'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/agence-seo-maroc" : "/en/seo-agency-morocco"} className="hover:text-accent transition-colors block py-0.5 font-semibold text-primary">
                  {isFrench ? 'Agence SEO Maroc' : 'SEO Agency Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/agence-seo-casablanca" : "/en/seo-agency-casablanca"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'SEO Casablanca' : 'SEO Agency Casablanca'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/seo-hotel" : "/en/hotel-seo"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'SEO Hôtelier' : 'Hotel SEO'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/google-ads-maroc" : "/en/google-ads-morocco"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Google Ads Maroc' : 'Google Ads Morocco'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/reservation-directe" : "/en/direct-booking"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Réservation Directe' : 'Direct Booking Strategy'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <p className="font-bold text-xs uppercase tracking-wider text-accent mb-4">{isFrench ? 'Secteurs' : 'Industries'}</p>
            <ul className="space-y-2 text-xs font-medium text-primary/80">
              <li>
                <Link to={isFrench ? "/secteurs/hotels-resorts" : "/en/industries/hotels-resorts"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Hôtels & Resorts' : 'Hotels & Resorts'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/secteurs/riads-maisons-hotes" : "/en/industries/riads-boutique-hotels"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Riads & Maisons d\'Hôtes' : 'Riads & Boutique Stays'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/secteurs/tour-operateurs" : "/en/industries/tour-operators"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Tour-Opérateurs' : 'Tour Operators'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/secteurs/restaurants-traiteurs" : "/en/industries/restaurants-catering"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Restaurants & Traiteurs' : 'Restaurants & Catering'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/secteurs/pme-entreprises" : "/en/industries/corporate-smes"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'PME & Entreprises B2B' : 'Corporate & Local SMEs'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Locations */}
          <div>
            <p className="font-bold text-xs uppercase tracking-wider text-accent mb-4">
              <Link to={isFrench ? "/zones" : "/en/locations"} className="hover:underline">
                {isFrench ? "Zones d'intervention" : 'Locations'}
              </Link>
            </p>
            <ul className="space-y-2 text-xs font-medium text-primary/80">
              <li>
                <Link to={isFrench ? "/zones" : "/en/locations"} className="hover:text-accent transition-colors block py-0.5 font-semibold">
                  {isFrench ? 'Toutes nos zones' : 'All Locations'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/zones/maroc" : "/en/locations/morocco"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Maroc (Hub National)' : 'Morocco (National Hub)'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/zones/casablanca" : "/en/locations/casablanca"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Casablanca' : 'Casablanca Hub'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/zones/marrakech" : "/en/locations/marrakech"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Marrakech' : 'Marrakech Hub'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/zones/rabat" : "/en/locations/rabat"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Rabat' : 'Rabat Capital Hub'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/zones/agadir" : "/en/locations/agadir"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Agadir' : 'Agadir Coastal Hub'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Legal */}
          <div>
            <p className="font-bold text-xs uppercase tracking-wider text-accent mb-4">{isFrench ? 'Agence' : 'Company'}</p>
            <ul className="space-y-2 text-xs font-medium text-primary/80">
              <li>
                <Link to={isFrench ? "/a-propos" : "/en/about"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'À Propos' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/realisations" : "/en/work"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Études de Cas' : 'Case Studies'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/blog" : "/en/blog"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Blog & Guides' : 'Blog & Resources'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/tarifs" : "/en/pricing"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Tarifs' : 'Pricing & Plans'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/faq" : "/en/faq"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'FAQ' : 'FAQ'}
                </Link>
              </li>
              <li>
                <Link to={isFrench ? "/contact" : "/en/contact"} className="hover:text-accent transition-colors block py-0.5">
                  {isFrench ? 'Contact & Devis' : 'Contact Us'}
                </Link>
              </li>
              <li className="pt-2 border-t border-primary/5">
                <Link to={isFrench ? "/plan-du-site" : "/en/sitemap"} className="hover:text-accent transition-colors block py-0.5 text-primary/85">
                  {isFrench ? 'Plan du Site' : 'HTML Sitemap'}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Local NAP Block (Casablanca & Marrakech) */}
        <div className="py-8 border-b border-primary/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-primary/80">
          <div>
            <p className="font-bold uppercase tracking-wider text-accent mb-2">Casablanca</p>
            <p className="leading-relaxed font-mono text-[11px]">[ADRESSE_CASABLANCA_ANFA]</p>
            <p className="text-primary/60 mt-1">Casablanca, Maroc</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-wider text-accent mb-2">Marrakech</p>
            <p className="leading-relaxed font-mono text-[11px]">[ADRESSE_MARRAKECH_GUELIZ]</p>
            <p className="text-primary/60 mt-1">Marrakech, Maroc</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-wider text-accent mb-2">{isFrench ? "Téléphone" : "Phone"}</p>
            <p className="font-mono text-[11px]">[TELEPHONE]</p>
            <p className="text-primary/60 mt-1">{isFrench ? "Lun - Ven: 09:00 - 18:00" : "Mon - Fri: 09:00 - 18:00"}</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-wider text-accent mb-2">Email</p>
            <p className="font-mono text-[11px]">
              <a href="mailto:urunkagency@gmail.com" className="hover:text-accent transition-colors">
                urunkagency@gmail.com
              </a>
            </p>
            <p className="text-primary/60 mt-1">{isFrench ? "Réponse sous 24h ouvrées" : "Reply within 24 business hours"}</p>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary/85">
          <p>© {new Date().getFullYear()} Urunk. {isFrench ? "Tous droits réservés." : "All rights reserved."}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to={isFrench ? "/politique-de-confidentialite" : "/en/privacy-policy"} className="hover:text-primary transition-colors">
              {isFrench ? "Confidentialité" : "Privacy Policy"}
            </Link>
            <Link to={isFrench ? "/conditions-generales" : "/en/terms-of-service"} className="hover:text-primary transition-colors">
              {isFrench ? "Conditions Générales" : "Terms of Service"}
            </Link>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open_cookie_banner'))}
              className="hover:text-primary transition-colors cursor-pointer underline underline-offset-2"
            >
              {isFrench ? "Gérer les cookies" : "Cookie Settings"}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
