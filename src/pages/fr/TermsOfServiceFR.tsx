import React from "react";
import Callout from "../../components/fr/CalloutFR";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";
import Section from "../../components/ui/Section";
import Hairline from "../../components/ui/Hairline";

export default function TermsOfServiceFR() {
  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="Conditions Générales d'Utilisation | Urunk Agency"
        description="Conditions générales d'utilisation d’Urunk. Découvrez nos engagements, nos conditions de paiement et le transfert de propriété de vos projets."
        noindex={false}
      />

      <Section tone="alt" className="pt-28 md:pt-36 border-b border-border-subtle">
        <div className="max-w-[68ch]">
          <h1 className="font-serif text-primary mb-6">Conditions Générales</h1>
          <p className="text-lg text-primary/80 mb-8 leading-relaxed">
            Des règles claires pour une collaboration sereine et fructueuse.
          </p>
          <Callout>
            <strong>En résumé :</strong> En faisant appel aux services de création web et de publicité d’Urunk, vous acceptez nos conditions de paiement standard : un acompte de 50 % au lancement des projets web et une facturation mensuelle sans engagement pour la gestion des publicités. Vous conservez la pleine propriété de votre site et de vos comptes publicitaires une fois le paiement final effectué, et vous pouvez interrompre la gestion publicitaire avec un simple préavis de 15 jours.
          </Callout>
        </div>
      </Section>

      <Section tone="light">
        <div className="max-w-[68ch] space-y-8 text-primary/85 leading-relaxed">
          <p className="text-sm text-primary/65">Dernière mise à jour : 1er Octobre 2026</p>
          <p>
            Les présentes Conditions Générales constituent un accord contractuel entre vous et Urunk concernant l&apos;accès et l&apos;utilisation de nos services. En travaillant avec notre agence, vous reconnaissez avoir lu, compris et accepté l&apos;ensemble de ces dispositions.
          </p>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">1. Services fournis</h2>
            <p>
              Urunk propose des services hautement spécialisés de marketing digital et d’ingénierie web spécialement conçus pour le secteur de l&apos;hôtellerie, du tourisme, des PME et des entreprises au Maroc et à l&apos;international. Cela comprend notamment la{" "}
              <Link to="/services/creation-site-web">
                création de sites web WordPress sur-mesure
              </Link>{" "}
              et d&apos;interfaces de réservation directe hautement performantes, la{" "}
              <Link to="/google-ads-maroc">gestion de campagnes Google Ads</Link> et Meta Ads, le référencement naturel (SEO) local et technique, ainsi que la{" "}
              <Link to="/services/tripadvisor-ads">
                gestion des annonces TripAdvisor
              </Link>{" "}
              et l&apos;optimisation des profils d&apos;établissements. Chaque prestation fait l&apos;objet d&apos;un cahier des charges ou d&apos;un devis initial écrit détaillant précisément les livrables.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              2. Conditions de paiement &amp; Facturation
            </h2>
            <p className="mb-3">
              Afin de garantir un engagement optimal et un déroulement fluide de chaque projet, notre structure de facturation s&apos;établit de manière transparente :
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                <strong>Projets de Sites Web (Forfait) :</strong> Un acompte de 50 % est requis et facturé au lancement officiel du projet pour initier les travaux d’architecture et de conception. Le solde restant de 50 % est facturé et payable au moment de la mise en ligne finale sur votre nom de domaine de production.
              </li>
              <li>
                <strong>Gestion Publicitaire &amp; SEO (Abonnement) :</strong> Nos frais de gestion mensuelle sont facturés à terme à échoir (en début de chaque période). Veuillez noter que ces frais de gestion d&apos;agence n&apos;incluent pas les budgets publicitaires de diffusion, qui sont payés directement par le client via sa carte bancaire aux régies concernées (Google Ads, Meta, TripAdvisor).
              </li>
              <li>
                <strong>Modes de Paiement :</strong> Les règlements s&apos;effectuent par virement bancaire sur notre compte d&apos;entreprise au Maroc, par virement international ou par carte bancaire.
              </li>
            </ul>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              3. Propriété et Propriété Intellectuelle
            </h2>
            <p>
              Dès encaissement complet de la totalité des factures liées à un projet de création web, Urunk transfère la pleine et entière propriété du site web, du code personnalisé, de la mise en page, des bases de données et des visuels créés spécifiquement pour le client. De même, vous conservez la propriété et l&apos;accès d&apos;administration exclusif de vos comptes publicitaires et fiches d&apos;établissement (Google Business Profile, TripAdvisor). Urunk conserve les droits de propriété intellectuelle sur ses outils de développement internes et ses frameworks propriétaires préexistants.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              4. Responsabilités du Client et Délais de Livraison
            </h2>
            <p>
              Le succès et le respect des délais d&apos;un projet web dépendent d&apos;une collaboration active. Le client s&apos;engage à fournir rapidement l&apos;ensemble des éléments nécessaires aux travaux : photographies haute résolution, logos vectorisés, textes descriptifs, accès techniques au domaine existant et aux moteurs de réservation (PMS). Urunk ne pourra être tenu responsable des retards causés par un manque de réactivité ou de transmission des données requises.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              5. Politique d&apos;Annulation et de Résiliation
            </h2>
            <p>
              Pour nos services d&apos;accompagnement mensuel (SEO et campagnes publicitaires), nous privilégions la flexibilité et la confiance : aucun engagement à long terme n&apos;est imposé. Vous pouvez suspendre ou résilier la gestion mensuelle à tout moment, sous réserve d&apos;un simple préavis de 15 jours transmis par écrit avant la date de renouvellement de la facturation. Les prestations déjà initiées et facturées restent dues.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              6. Limitation de Responsabilité
            </h2>
            <p>
              Urunk met en œuvre ses meilleures compétences pour assurer la performance de vos campagnes et de votre site web. Toutefois, l&apos;agence ne saurait être tenue pour responsable des fluctuations d&apos;algorithmes des moteurs de recherche (Google SEO), des suspensions de comptes par les plateformes tierces (Google Ads, Meta) ou des interruptions de service dues aux hébergeurs ou aux systèmes de réservation tiers (PMS). Notre responsabilité financière globale est strictement plafonnée au montant cumulé facturé et perçu lors des trois derniers mois d&apos;accompagnement.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              7. Loi applicable et Juridiction compétente
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation sont régies et interprétées conformément aux lois en vigueur dans le Royaume du Maroc. Tout litige relatif à leur interprétation, leur exécution ou leur validité, qui ne pourrait être résolu à l&apos;amiable, sera soumis à la compétence exclusive des tribunaux de commerce de Casablanca ou de Marrakech.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">8. Nous contacter</h2>
            <p className="mb-3">
              Pour toute demande d&apos;éclaircissement ou question concernant nos conditions contractuelles, vous pouvez joindre notre direction :
            </p>
            <p>
              <strong>Adresse :</strong> 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc
              <br />
              <strong>E-mail :</strong> contact@urunk.com
              <br />
              <strong>Téléphone :</strong> +212 668-802096
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
