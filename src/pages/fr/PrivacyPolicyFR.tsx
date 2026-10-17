import React from "react";
import Callout from "../../components/Callout";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

export default function PrivacyPolicyFR() {
  return (
    <div className="w-full pb-20">
      <SEO
        title="Politique de confidentialité | Urunk Agency"
        description="Politique de confidentialité d'Urunk, détaillant la façon dont nous gérons les données de nos clients."
        noindex={false}
      />

      <section className="bg-bg-alt py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-primary/80 mb-8">
            Comment nous collectons, utilisons et protégeons vos données.
          </p>
          <Callout>
            <strong>En résumé :</strong> Urunk collecte vos informations de
            contact de base uniquement pour vous fournir des devis et nos
            services. Nous ne vendons jamais vos données personnelles, et vous
            pouvez demander leur suppression à tout moment.
          </Callout>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-p:text-primary/80 prose-li:text-primary/80">
          <p>Dernière mise à jour : 1er Octobre 2026</p>{" "}
          <p>
            Chez Urunk, nous prenons votre vie privée très au sérieux. Cette
            politique de confidentialité explique comment nous collectons,
            utilisons et protégeons vos données.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            1. Informations que nous collectons
          </h2>
          <p>
            Nous collectons uniquement les informations strictement nécessaires pour vous proposer nos services professionnels d'acquisition client et d'optimisation de réservations directes. Les données récoltées sur notre site web (urunk.com) comprennent :
          </p>
          <ul>
            <li>
              <strong>Données Personnelles :</strong> Informations d'identification nominatives telles que votre nom complet, l'adresse de courrier électronique, le numéro de téléphone portable ou WhatsApp, ainsi que le nom de votre établissement touristique, riad ou entreprise. Ces informations nous sont fournies volontairement et de manière explicite lorsque vous soumettez une demande d’audit de performance ou de devis personnalisé via notre{" "}
              <Link to="/contact" className="text-accent hover:underline">
                formulaire de contact
              </Link>
              .
            </li>
            <li>
              <strong>Données Techniques et Dérivées :</strong> Informations de navigation collectées automatiquement par nos systèmes pour optimiser l'affichage de notre site web. Cela comprend l'adresse IP abrégée, le type de navigateur web utilisé, le système d'exploitation de votre appareil, vos heures d'accès et les pages spécifiques consultées.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            2. Comment nous utilisons vos informations
          </h2>
          <p>
            La collecte et le traitement de vos données nous permettent de vous fournir un service d'accompagnement de premier ordre. Nous utilisons vos données exclusivement pour :
          </p>
          <ul>
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
              Améliorer l'accessibilité numérique de nos pages et optimiser l'ergonomie générale du parcours utilisateur.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            3. Cookies et technologies de suivi
          </h2>
          <p>
            Notre site internet utilise des cookies pour analyser notre trafic de manière anonyme et mémoriser vos préférences de navigation. Les cookies sont de petits fichiers texte stockés temporairement sur votre terminal. Nous utilisons des cookies techniques essentiels pour le bon fonctionnement du site et des cookies d'analyse d'audience pour comprendre le comportement des internautes et améliorer la réactivité de notre site. Vous pouvez à tout moment configurer votre navigateur pour bloquer les cookies, bien que cela puisse impacter l'interactivité de certains formulaires de contact.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            4. Conformité à la Loi marocaine 09-08 et au RGPD
          </h2>
          <p>
            Urunk s'engage à assurer la sécurité et la confidentialité de vos données personnelles conformément à la <strong>Loi n° 09-08</strong> du Royaume du Maroc relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, réglementée par la CNDP, ainsi qu'aux exigences européennes du <strong>RGPD</strong> (Règlement Général sur la Protection des Données). 
          </p>
          <p>
            À ce titre, vous disposez des droits fondamentaux suivants concernant vos données à caractère personnel :
          </p>
          <ul>
            <li><strong>Droit d'accès :</strong> Vous pouvez demander à recevoir une copie intégrale des informations nominatives détenues à votre sujet par nos services.</li>
            <li><strong>Droit de rectification :</strong> Vous pouvez demander à tout moment la mise à jour ou la correction d'informations inexactes, incomplètes ou obsolètes.</li>
            <li><strong>Droit de suppression (« droit à l'oubli ») :</strong> Vous pouvez exiger l'effacement définitif de vos coordonnées de nos bases de données lorsque leur conservation n'est plus justifiée par l'exécution d'un projet.</li>
          </ul>
          <p>
            Pour exercer l'un de ces droits, vous pouvez envoyer une demande par courrier électronique à notre délégué à la protection des données à l'adresse : <a href="mailto:contact@urunk.com" className="text-accent hover:underline font-bold">contact@urunk.com</a>. Notre équipe s'engage à traiter votre demande sous un délai maximal de 30 jours.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            5. Sécurité de vos informations
          </h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité administratives, physiques et logicielles strictes pour protéger vos données contre toute perte, altération ou divulgation non autorisée. Les transmissions d'informations sur notre site web s'effectuent via des protocoles de connexion hautement sécurisés (HTTPS / SSL). L'accès à vos informations est strictement réservé au personnel qualifié d'Urunk impliqué dans l'élaboration de vos devis et l'exécution de vos campagnes d'acquisition.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Nous contacter</h2>
          <p>
            Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, n'hésitez pas à nous contacter :
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
