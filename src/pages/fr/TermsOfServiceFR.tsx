import React from "react";
import Callout from "../../components/fr/CalloutFR";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

export default function TermsOfServiceFR() {
  return (
    <div className="w-full pb-20">
      <SEO
        title="Conditions Générales d'Utilisation | Urunk Agency"
        description="Conditions générales d'utilisation d’Urunk. Découvrez nos engagements, nos conditions de paiement et le transfert de propriété de vos projets."
        noindex={false}
      />

      <section className="bg-bg-alt py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conditions Générales
          </h1>
          <p className="text-xl text-primary/80 mb-8">
            Des règles claires pour une collaboration sereine et fructueuse.
          </p>
          <Callout>
            <strong>En résumé :</strong> En faisant appel aux services de
            création web et de publicité d’Urunk, vous acceptez nos conditions
            de paiement standard : un acompte de 50 % au lancement des projets
            web et une facturation mensuelle sans engagement pour la gestion des
            publicités. Vous conservez la pleine propriété de votre site et de
            vos comptes publicitaires une fois le paiement final effectué, et
            vous pouvez interrompre la gestion publicitaire avec un simple
            préavis de 15 jours.
          </Callout>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-p:text-primary/80 prose-li:text-primary/80">
          <p>Dernière mise à jour : 1er Octobre 2026</p>{" "}
          <p>
            Les présentes Conditions Générales constituent un accord contractuel
            entre vous et Urunk concernant l'accès et l'utilisation de nos
            services. En travaillant avec notre agence, vous reconnaissez avoir
            lu, compris et accepté l'ensemble de ces dispositions.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Services fournis</h2>
          <p>
            Urunk propose des services hautement spécialisés de marketing digital et d’ingénierie web spécialement conçus pour le secteur de l'hôtellerie, du tourisme, des PME et des entreprises au Maroc et à l'international. Cela comprend notamment la{" "}
            <Link
              to="/services/creation-site-web"
              className="text-accent hover:underline"
            >
              création de sites web WordPress sur-mesure
            </Link>{" "}
            et d'interfaces de réservation directe hautement performantes, la{" "}
            <Link
              to="/google-ads-maroc"
              className="text-accent hover:underline"
            >
              gestion de campagnes Google Ads
            </Link>{" "}
            et Meta Ads, le référencement naturel (SEO) local et technique, ainsi que la{" "}
            <Link
              to="/services/tripadvisor-ads"
              className="text-accent hover:underline"
            >
              gestion des annonces TripAdvisor
            </Link>{" "}
            et l'optimisation des profils d'établissements. Chaque prestation fait l'objet d'un cahier des charges ou d'un devis initial écrit détaillant précisément les livrables.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            2. Conditions de paiement & Facturation
          </h2>
          <p>
            Afin de garantir un engagement optimal et un déroulement fluide de chaque projet, notre structure de facturation s'établit de manière transparente :
          </p>
          <ul>
            <li>
              <strong>Projets de Sites Web (Forfait) :</strong> Un acompte de 50 % est requis et facturé au lancement officiel du projet pour initier les travaux d’architecture et de conception. Le solde restant de 50 % est facturé et payable au moment de la mise en ligne finale sur votre nom de domaine de production.
            </li>
            <li>
              <strong>Gestion Publicitaire & SEO (Abonnement) :</strong> Nos frais de gestion mensuelle sont facturés à terme à échoir (en début de chaque période). Veuillez noter que ces frais de gestion d'agence n'incluent pas les budgets publicitaires de diffusion, qui sont payés directement par le client via sa carte bancaire aux régies concernées (Google Ads, Meta, TripAdvisor).
            </li>
            <li>
              <strong>Modes de Paiement :</strong> Les règlements s'effectuent par virement bancaire sur notre compte d'entreprise au Maroc, par virement international ou par carte bancaire.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            3. Propriété et Propriété Intellectuelle
          </h2>
          <p>
            Dès encaissement complet de la totalité des factures liées à un projet de création web, Urunk transfère la pleine et entière propriété du site web, du code personnalisé, de la mise en page, des bases de données et des visuels créés spécifiquement pour le client. De même, vous conservez la propriété et l'accès d'administration exclusif de vos comptes publicitaires et fiches d'établissement (Google Business Profile, TripAdvisor). Urunk conserve les droits de propriété intellectuelle sur ses outils de développement internes et ses frameworks propriétaires préexistants.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            4. Responsabilités du Client et Délais de Livraison
          </h2>
          <p>
            Le succès et le respect des délais d'un projet web dépendent d'une collaboration active. Le client s'engage à fournir rapidement l'ensemble des éléments nécessaires aux travaux : photographies haute résolution, logos vectorisés, textes descriptifs, accès techniques au domaine existant et aux moteurs de réservation (PMS). Urunk ne pourra être tenu responsable des retards causés par un manque de réactivité ou de transmission des données requises.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            5. Politique d'Annulation et de Résiliation
          </h2>
          <p>
            Pour nos services d'accompagnement mensuel (SEO et campagnes publicitaires), nous privilégions la flexibilité et la confiance : aucun engagement à long terme n'est imposé. Vous pouvez suspendre ou résilier la gestion mensuelle à tout moment, sous réserve d'un simple préavis de 15 jours transmis par écrit avant la date de renouvellement de la facturation. Les prestations déjà initiées et facturées restent dues.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            6. Limitation de Responsabilité
          </h2>
          <p>
            Urunk met en œuvre ses meilleures compétences pour assurer la performance de vos campagnes et de votre site web. Toutefois, l'agence ne saurait être tenue pour responsable des fluctuations d'algorithmes des moteurs de recherche (Google SEO), des suspensions de comptes par les plateformes tierces (Google Ads, Meta) ou des interruptions de service dues aux hébergeurs ou aux systèmes de réservation tiers (PMS). Notre responsabilité financière globale est strictement plafonnée au montant cumulé facturé et perçu lors des trois derniers mois d'accompagnement.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            7. Loi applicable et Juridiction compétente
          </h2>
          <p>
            Les présentes Conditions Générales d'Utilisation sont régies et interprétées conformément aux lois en vigueur dans le Royaume du Maroc. Tout litige relatif à leur interprétation, leur exécution ou leur validité, qui ne pourrait être résolu à l'amiable, sera soumis à la compétence exclusive des tribunaux de commerce de Casablanca ou de Marrakech.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Nous contacter</h2>
          <p>
            Pour toute demande d'éclaircissement ou question concernant nos conditions contractuelles, vous pouvez joindre notre direction :
          </p>
          <p>
            <strong>E-mail :</strong> contact@urunk.com
            <br />
            <strong>Téléphone :</strong> (+212)0668802096
          </p>
        </div>
      </section>
    </div>
  );
}
