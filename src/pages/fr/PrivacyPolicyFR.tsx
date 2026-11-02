import React from "react";
import Callout from "../../components/Callout";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";
import Section from "../../components/ui/Section";
import Hairline from "../../components/ui/Hairline";

export default function PrivacyPolicyFR() {
  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="Politique de confidentialité | Urunk Agency"
        description="Consultez la politique de confidentialité de l'agence Urunk, détaillant la collecte, le stockage et la protection de vos données personnelles."
        noindex={false}
      />

      <Section tone="alt" className="pt-28 md:pt-36 border-b border-border-subtle">
        <div className="max-w-[68ch]">
          <h1 className="font-serif text-primary mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-primary/80 mb-8 leading-relaxed">
            Comment nous collectons, utilisons et protégeons vos données.
          </p>
          <Callout>
            <strong>En résumé :</strong> Urunk collecte vos informations de contact de base uniquement pour vous fournir des devis et nos services. Nous ne vendons jamais vos données personnelles, et vous pouvez demander leur suppression à tout moment.
          </Callout>
        </div>
      </Section>

      <Section tone="light">
        <div className="max-w-[68ch] space-y-8 text-primary/85 leading-relaxed">
          <p className="text-sm text-primary/65">Dernière mise à jour : 1er Octobre 2026</p>
          <p>
            Chez Urunk, nous prenons votre vie privée très au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données.
          </p>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              1. Informations que nous collectons
            </h2>
            <p className="mb-3">
              Nous collectons uniquement les informations strictement nécessaires pour vous proposer nos services professionnels d&apos;acquisition client et d&apos;optimisation de réservations directes. Les données récoltées sur notre site web (urunk.com) comprennent :
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                <strong>Données Personnelles :</strong> Informations d&apos;identification nominatives telles que votre nom complet, l&apos;adresse de courrier électronique, le numéro de téléphone portable ou WhatsApp, ainsi que le nom de votre établissement touristique, riad ou entreprise. Ces informations nous sont fournies volontairement et de manière explicite lorsque vous soumettez une demande d’audit de performance ou de devis personnalisé via notre{" "}
                <Link to="/contact">formulaire de contact</Link>.
              </li>
              <li>
                <strong>Données Techniques et Dérivées :</strong> Informations de navigation collectées automatiquement par nos systèmes pour optimiser l&apos;affichage de notre site web. Cela comprend l&apos;adresse IP abrégée, le type de navigateur web utilisé, le système d&apos;exploitation de votre appareil, vos heures d&apos;accès et les pages spécifiques consultées.
              </li>
            </ul>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              2. Comment nous utilisons vos informations
            </h2>
            <p className="mb-3">
              La collecte et le traitement de vos données nous permettent de vous fournir un service d&apos;accompagnement de premier ordre. Nous utilisons vos données exclusivement pour :
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                Établir un audit technique approfondi de votre site web actuel (vitesse de chargement mobile, positionnement sur le pack local Google Maps, détection des fuites de commissions vers les OTA).
              </li>
              <li>
                Élaborer et vous envoyer une proposition commerciale sur-mesure et un devis fixe adapté à votre établissement.
              </li>
              <li>
                Communiquer de manière efficace avec vous durant toute la phase de conception technique ou de gestion publicitaire (lancement des campagnes Google Ads et Meta Ads).
              </li>
              <li>
                Améliorer l&apos;accessibilité numérique de nos pages et optimiser l&apos;ergonomie générale du parcours utilisateur.
              </li>
            </ul>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              3. Cookies et technologies de suivi
            </h2>
            <p>
              Notre site internet utilise des cookies pour analyser notre trafic de manière anonyme et mémoriser vos préférences de navigation. Les cookies sont de petits fichiers texte stockés temporairement sur votre terminal. Nous utilisons des cookies techniques essentiels pour le bon fonctionnement du site et des cookies d&apos;analyse d&apos;audience pour comprendre le comportement des internautes et améliorer la réactivité de notre site. Vous pouvez à tout moment configurer votre navigateur pour bloquer les cookies, bien que cela puisse impacter l&apos;interactivité de certains formulaires de contact.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              4. Conformité à la Loi marocaine 09-08 et au RGPD
            </h2>
            <p className="mb-3">
              Urunk s&apos;engage à assurer la sécurité et la confidentialité de vos données personnelles conformément à la <strong>Loi n° 09-08</strong> du Royaume du Maroc relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel, réglementée par la CNDP, ainsi qu&apos;aux exigences européennes du <strong>RGPD</strong> (Règlement Général sur la Protection des Données).
            </p>
            <p className="mb-3">
              À ce titre, vous disposez des droits fondamentaux suivants concernant vos données à caractère personnel :
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>
                <strong>Droit d&apos;accès :</strong> Vous pouvez demander à recevoir une copie intégrale des informations nominatives détenues à votre sujet par nos services.
              </li>
              <li>
                <strong>Droit de rectification :</strong> Vous pouvez demander à tout moment la mise à jour ou la correction d&apos;informations inexactes, incomplètes ou obsolètes.
              </li>
              <li>
                <strong>Droit de suppression (« droit à l&apos;oubli ») :</strong> Vous pouvez exiger l&apos;effacement définitif de vos coordonnées de nos bases de données lorsque leur conservation n&apos;est plus justifiée par l&apos;exécution d&apos;un projet.
              </li>
            </ul>
            <p>
              Pour exercer l&apos;un de ces droits, vous pouvez envoyer une demande par courrier électronique à notre délégué à la protection des données à l&apos;adresse :{" "}
              <a href="mailto:contact@urunk.com">contact@urunk.com</a>. Notre équipe s&apos;engage à traiter votre demande sous un délai maximal de 30 jours.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              5. Sécurité de vos informations
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité administratives, physiques et logicielles strictes pour protéger vos données contre toute perte, altération ou divulgation non autorisée. Les transmissions d&apos;informations sur notre site web s&apos;effectuent via des protocoles de connexion hautement sécurisés (HTTPS / SSL). L&apos;accès à vos informations est strictement réservé au personnel qualifié d&apos;Urunk impliqué dans l&apos;élaboration de vos devis et l&apos;exécution de vos campagnes d&apos;acquisition.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">6. Nous contacter</h2>
            <p className="mb-3">
              Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, n&apos;hésitez pas à nous contacter :
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
