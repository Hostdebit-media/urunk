import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';

export default function NotFound() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const isFrench = !isEnglish;

  return (
    <Section tone="light">
      <SEO
        title={isFrench ? "Page Non Trouvée | Urunk" : "Page Not Found | Urunk"}
        description={isFrench ? "La page que vous recherchez n'existe pas." : "The page you are looking for does not exist."}
        noindex={true}
      />

      <div className="max-w-[68ch] py-12">
        <h1 className="mb-8">
          {isFrench ? "Page introuvable" : "Page not found"}
        </h1>

        <div className="flex flex-wrap items-center gap-8 text-base">
          <Link to={isFrench ? "/" : "/en"}>
            {isFrench ? "Retour à l'accueil" : "Back to Home"}
          </Link>
          <Link to={isFrench ? "/contact" : "/en/contact"}>
            {isFrench ? "Nous contacter" : "Contact Us"}
          </Link>
        </div>
      </div>
    </Section>
  );
}
