import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const isFrench = !isEnglish;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <SEO 
        title={isFrench ? "Page Non Trouvée | Urunk" : "Page Not Found | Urunk"}
        description={isFrench ? "La page que vous recherchez n'existe pas." : "The page you are looking for does not exist."}
        noindex={true}
      />
      
      <h1 className="text-8xl font-serif font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-medium text-primary mb-6">
        {isFrench ? "Page introuvable" : "Page not found"}
      </h2>
      <p className="text-lg text-primary/70 max-w-md mb-8">
        {isFrench 
          ? "Désolé, nous ne trouvons pas la page que vous recherchez. Elle a peut-être été déplacée ou supprimée." 
          : "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted."}
      </p>
      
      <div className="flex gap-4">
        <Link 
          to={isFrench ? "/" : "/en"} 
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          {isFrench ? "Retour à l'accueil" : "Back to Home"}
        </Link>
        <Link 
          to={isFrench ? "/contact" : "/en/contact"} 
          className="bg-bg-alt text-primary px-6 py-3 rounded-full hover:bg-bg-alt/80 transition-colors"
        >
          {isFrench ? "Nous contacter" : "Contact Us"}
        </Link>
      </div>
    </div>
  );
}
