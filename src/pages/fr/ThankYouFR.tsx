import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO";
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { trackEvent } from "../../utils/analytics";

export default function ThankYouFR() {
  useEffect(() => {
    trackEvent('conversion_thank_you_view', { page: '/merci', language: 'fr' });
  }, []);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Bonjour Urunk, je viens de demander un devis sur votre site et je souhaite échanger directement.")}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-6 max-w-3xl mx-auto">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <SEO title="Merci | Urunk" description="Votre demande de devis a été bien reçue." />
      
      <div className="bg-green-50 text-accent p-4 rounded-full mb-6">
        <CheckCircle2 size={48} />
      </div>

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
        Merci ! Votre demande a été bien reçue.
      </h1>
      
      <p className="text-lg text-primary/80 text-center mb-8 max-w-lg font-light leading-relaxed">
        Nous avons bien reçu vos informations. Notre équipe de stratégie digitale touristique va analyser votre site et vos besoins et vous envoyer un devis personnalisé sous 24h.
      </p>

      {/* Next Steps Card */}
      <div className="w-full bg-bg-alt border border-primary/10 rounded-2xl p-6 md:p-8 mb-8 space-y-4">
        <h2 className="font-serif font-bold text-xl text-primary flex items-center gap-2">
          <Clock size={20} className="text-accent" /> Que se passe-t-il ensuite ?
        </h2>
        <ol className="space-y-3 text-sm text-primary/80 list-decimal list-inside leading-relaxed">
          <li><strong>Analyse initiale :</strong> Nous analysons la vitesse de votre site actuel, votre positionnement OTA et vos performances publicitaires.</li>
          <li><strong>Devis personnalisé :</strong> Nous préparons une proposition claire à prix fixe avec des livrables définis.</li>
          <li><strong>Échange rapide :</strong> Nous vous envoyons le devis par e-mail ou WhatsApp avec possibilité de fixer un rendez-vous téléphonique.</li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { source: 'thank_you_page_fr' })}
          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <MessageCircle size={20} />
          <span>Une réponse plus rapide ? Discuter sur WhatsApp</span>
        </a>
        
        <Link 
          to="/realisations" 
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <span>Découvrir nos exemples de stratégies</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
