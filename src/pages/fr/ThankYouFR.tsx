import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import Section from "../../components/ui/Section";
import Hairline from "../../components/ui/Hairline";
import Button from "../../components/ui/Button";
import { trackEvent } from "../../utils/analytics";

export default function ThankYouFR() {
  useEffect(() => {
    trackEvent('conversion_thank_you_view', { page: '/merci', language: 'fr' });
  }, []);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Bonjour Urunk, je viens de demander un devis sur votre site et je souhaite échanger directement.")}`;

  return (
    <Section tone="light" className="pt-28 md:pt-36">
      <SEO title="Merci | Urunk" description="Votre demande de devis a été bien reçue." noindex={true} />

      <div className="max-w-[68ch] space-y-8">
        <div>
          <p className="text-sm font-medium text-accent mb-4">Demande enregistrée</p>
          <h1 className="mb-6 text-primary">
            Merci ! Votre demande a été bien reçue.
          </h1>
          <p className="text-lg text-primary/85 leading-relaxed">
            Nous avons bien reçu vos informations. Notre équipe de stratégie digitale touristique va analyser votre site et vos besoins et vous envoyer un devis personnalisé sous [À CONFIRMER].
          </p>
        </div>

        <Hairline />

        <div className="bg-bg-alt border border-border-subtle rounded-sm p-6 md:p-8 space-y-4">
          <h2 className="text-primary text-2xl">Que se passe-t-il ensuite ?</h2>
          <ol className="space-y-3 text-base text-primary/85 list-decimal list-inside leading-relaxed">
            <li><strong>Analyse initiale :</strong> Nous analysons la vitesse de votre site actuel, votre positionnement OTA et vos performances publicitaires.</li>
            <li><strong>Devis personnalisé :</strong> Nous préparons une proposition claire à prix fixe avec des livrables définis.</li>
            <li><strong>Échange rapide :</strong> Nous vous envoyons le devis par e-mail ou WhatsApp avec possibilité de fixer un rendez-vous téléphonique.</li>
          </ol>
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-2">
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'thank_you_page_fr' })}
            variant="primary"
          >
            Une réponse plus rapide ? Discuter sur WhatsApp
          </Button>

          <Link to="/realisations" className="font-medium text-accent">
            Nos exemples de stratégies
          </Link>
        </div>
      </div>
    </Section>
  );
}
