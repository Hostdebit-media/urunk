import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import Hairline from '../../components/ui/Hairline';
import Button from '../../components/ui/Button';

export default function AboutFR() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'À Propos d’Urunk | Agence Digitale Hôtelière au Maroc',
    url: 'https://urunk.com/a-propos',
    description: 'Découvrez Urunk, agence digitale basée à Casablanca dédiée aux hôtels et riads au Maroc : sites web de réservation directe, SEO local et campagnes Ads.'
  };

  return (
    <div className="w-full bg-bg-light text-primary" id="about-page-fr">
      <SEO
        title="À Propos d'Urunk | Agence Digitale Hôtelière Maroc"
        description="Découvrez Urunk, agence basée à Casablanca dédiée aux hôtels et riads au Maroc : sites web avec réservation directe, SEO local et campagnes Ads."
        schema={aboutSchema}
      />

      {/* Hero Section */}
      <Section tone="dark" id="about-hero-fr" className="pt-28 md:pt-36">
        <div className="max-w-[68ch]">
          <p className="text-sm font-medium text-bg-light/75 mb-5" id="about-hero-tag-fr">
            À Propos de l'Agence Urunk
          </p>
          <h1 className="mb-8 text-bg-light" id="about-hero-title-fr">
            Conçus pour la <span className="italic">Croissance Hôtelière</span>
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 leading-relaxed" id="about-hero-desc-fr">
            Nous ne sommes pas une agence de publicité traditionnelle et lente. Nous sommes une équipe spécialisée de développeurs, d'ingénieurs SEO et de stratèges en conversion, dédiés à aider les hôtels marocains, les riads de luxe et les marques de voyage indépendantes à s'affranchir de la dépendance aux OTA pour capter des réservations directes.
          </p>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section tone="light" id="about-philosophy-fr">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7 max-w-[68ch]">
            <h2 className="mb-8 text-primary" id="about-phil-title-fr">
              Pourquoi nous nous concentrons exclusivement sur l'Hôtellerie et le Tourisme Haut de Gamme
            </h2>
            <div className="space-y-6 text-primary/85 leading-relaxed" id="about-phil-content-fr">
              <p>
                Le secteur du tourisme au Maroc vit une renaissance historique. Des ruelles vibrantes de la médina de Marrakech aux dunes majestueuses de Merzouga, en passant par les retraites côtières de Taghazout, les voyageurs du monde entier recherchent des expériences marocaines authentiques. Pourtant, de nombreux riads indépendants, hôtels-boutiques et camps de luxe dans le désert continuent de perdre [À CONFIRMER] de leur chiffre d'affaires brut au profit des agences de voyage en ligne (OTA), simplement parce que leur propre infrastructure digitale est inadaptée.
              </p>
              <p>
                Nous avons fondé Urunk après avoir constaté un décalage profond sur le marché marocain. Les propriétaires d'établissements achetaient régulièrement des modèles de sites web lents, génériques et dépassés auprès d'agences généralistes. Ces prestataires n'avaient aucune compréhension des systèmes de gestion hôtelière (PMS), des intégrations de moteurs de réservation directe, des passerelles de paiement multidevises ou des exigences spécifiques du SEO touristique. En conséquence, malgré un trafic web parfois correct, les taux de conversion restaient désespérément bas, maintenant les établissements sous la dépendance totale des OTA.
              </p>
              <p>
                Notre mission est sans ambiguïté : fournir aux riads de luxe, hôtels de charme et voyagistes l'infrastructure technologique souveraine nécessaire pour capter les voyageurs internationaux qualifiés, simplifier les réservations directes et optimiser significativement leurs marges nettes. Nous pensons que votre site web ne doit pas être une simple brochure en ligne, mais le canal de vente le plus rentable de votre entreprise.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/services/creation-site-web"
                className="font-medium text-accent"
                id="about-phil-cta-fr"
              >
                Conception de Sites Web & Moteurs de Réservation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 divide-y divide-border-subtle border-y border-border-subtle" id="about-pillars-cards-fr">
            <div className="py-7" id="phil-card-1-fr">
              <h3 className="text-primary mb-2">Précision Basée sur les Données</h3>
              <p className="text-primary/80 text-base leading-relaxed">
                Nous ne devinons jamais. Chaque choix de design, chaque mot-clé ciblé et chaque campagne publicitaire est étayé par une analyse rigoureuse des données et un suivi des conversions, adaptés spécifiquement au secteur hôtelier de luxe.
              </p>
            </div>
            <div className="py-7" id="phil-card-2-fr">
              <h3 className="text-primary mb-2">Expertise Bilingue & Interculturelle</h3>
              <p className="text-primary/80 text-base leading-relaxed">
                Basés au Maroc et dotés d'une grande fluidité internationale, nous faisons le pont entre le charme de l'hospitalité marocaine et les standards technologiques exigeants des voyageurs européens, américains et du Golfe.
              </p>
            </div>
            <div className="py-7" id="phil-card-3-fr">
              <h3 className="text-primary mb-2">La Performance Souveraine Avant Tout</h3>
              <p className="text-primary/80 text-base leading-relaxed">
                Nous créons des actifs numériques ultra-rapides basés sur les meilleures technologies modernes. Cela garantit une vitesse de chargement optimale appréciée par Google et une expérience fluide pour vos clients.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The OTA Trap Section */}
      <Section tone="dark" id="about-ota-trap-fr">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-medium text-bg-light/75 mb-3">
              L'économie réelle de la réservation
            </p>
            <h2 className="mb-6 text-bg-light">Le coût réel du piège des OTA</h2>
            <p className="text-bg-light/85 leading-relaxed">
              De nombreux hôteliers considèrent les commissions des plateformes comme un coût inévitable. Jetons un coup d'œil aux chiffres réels.
            </p>
          </div>
          <div className="md:col-span-7 max-w-[68ch] space-y-6 text-bg-light/90 leading-relaxed">
            <p>
              Imaginez un établissement de charme de 10 chambres générant <strong>400 000 MAD</strong> de chiffre d'affaires par mois. Si 85 % de ses réservations proviennent d'OTA comme Booking.com, Expedia ou TripAdvisor, la propriété reverse environ 18 % à 22 % de commissions.
            </p>
            <div className="border-y border-bg-light/20 py-6 my-4">
              <p className="font-semibold text-lg text-bg-light mb-2">Une fuite financière annuelle massive</p>
              <p className="text-bg-light/85">
                Cela représente plus de <strong>75 000 MAD</strong> versés en commissions chaque mois—soit un montant phénoménal de <strong>900 000 MAD</strong> perdus chaque année. Ce capital pourrait financer des travaux d'extension, l'ajout d'équipements de luxe, une meilleure rémunération du personnel, ou se transformer directement en bénéfice net.
              </p>
            </div>
            <p>
              Urunk a été créée pour rééquilibrer ce bilan. En concevant des parcours numériques performants, nous convertissons les visiteurs de votre site en clients directs. Une réservation directe ne coûte qu'une fraction des frais d'une OTA, ce qui augmente immédiatement vos bénéfices.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Core Pillars */}
      <Section tone="alt" id="about-pillars-fr">
        <div className="max-w-[68ch] mb-14">
          <p className="text-sm font-medium text-accent mb-3">Le Standard Urunk</p>
          <h2 className="text-primary mb-4">Nos quatre piliers d'ingénierie digitale hôtelière</h2>
          <p className="text-primary/80">
            Comment nous transformons les sites web hôteliers sous-performants en moteurs automatisés de réservation directe.
          </p>
        </div>

        <Hairline className="mb-10" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="pb-8 border-b border-border-subtle" id="pillar-card-1-fr">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">01</p>
            <h3 className="text-primary mb-3">Vitesse Architecturale</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              La lenteur tue les réservations. Nous éliminons les ralentissements en optimisant la configuration des serveurs, en compressant les médias et en écrivant un code ultra-léger. Nos sites chargent en [À CONFIRMER], ce qui réduit considérablement les abandons et booste la conversion sur mobile.
            </p>
          </div>
          <div className="pb-8 border-b border-border-subtle" id="pillar-card-2-fr">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">02</p>
            <h3 className="text-primary mb-3">Visibilité de la Recherche Organique</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Grâce à une recherche de mots-clés rigoureuse et un SEO technique sans faille, nous positionnons votre établissement en haut des résultats de recherche Google pour les requêtes à forte intention d'achat comme "riad de luxe à Marrakech" ou "meilleur désert camp à Merzouga".
            </p>
          </div>
          <div className="pb-8 border-b border-border-subtle md:border-b-0 md:pb-0" id="pillar-card-3-fr">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">03</p>
            <h3 className="text-primary mb-3">Synchronisation PMS Transparente</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Un site web isolé est inefficace. Nous intégrons des moteurs de réservation fluides directement connectés aux meilleurs PMS du marché (Cloudbeds, Mews, Little Hotelier, ou des APIs sur mesure). Vos disponibilités réelles et vos tarifs sont synchronisés en temps réel et sans erreur.
            </p>
          </div>
          <div id="pillar-card-4-fr">
            <p className="text-sm font-medium text-accent tabular-nums mb-2">04</p>
            <h3 className="text-primary mb-3">Publicité à fort ROAS</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Nous concevons et gérons des campagnes hautement ciblées sur Google Ads, Meta Ads (Instagram et Facebook) et TripAdvisor. En captant l'intention des voyageurs actifs ou en réengageant les anciens visiteurs, nous assurons un excellent retour sur investissement publicitaire (ROAS).
            </p>
          </div>
        </div>
      </Section>

      {/* Multi-Language & International Strategy Section */}
      <Section tone="light" id="about-multilang-fr">
        <div className="max-w-[68ch] mb-14">
          <p className="text-sm font-medium text-accent mb-3">Portée Mondiale</p>
          <h2 className="text-primary mb-4">Architecture Multilingue sur Mesure</h2>
          <p className="text-primary/80">
            Nous concevons des expériences multilingues authentiques qui s'adressent directement aux voyageurs internationaux, renforcent la confiance et stimulent les réservations transfrontalières.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-t border-border-subtle pt-10">
          <div>
            <h3 className="text-primary mb-3">Rédaction Multilingue Culturelle</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Les widgets de traduction automatique (comme Google Translate) manquent de professionnalisme et nuisent à la confiance. Nous rédigeons des textes soignés, traduits par des humains, qui respectent les codes du luxe et retransmettent à la perfection l'essence de votre établissement.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">Référencement Multilingue Localisé</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Nous configurons les balises hreflang, les métadescriptions localisées et les mots-clés régionaux. Qu'un client potentiel effectue sa recherche en français depuis Paris, en anglais depuis Londres ou en arabe depuis Dubaï, il trouvera la version exacte du site qui lui correspond.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">Affichage Dynamique Multidevises</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Nous éliminons les frictions de paiement en permettant à vos visiteurs de consulter les prix dans leur devise d'origine (MAD, EUR, USD, GBP) et de réserver en toute sécurité par carte bancaire marocaine, internationale (Visa, Mastercard), ou via Apple Pay et PayPal.
            </p>
          </div>
        </div>
      </Section>

      <Hairline />

      {/* Strategic Framework Sections: Notre Méthodologie & La Différence Urunk */}
      <Section tone="light" id="about-methodology-framework-fr">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7 space-y-6 max-w-[68ch]">
            <p className="text-sm font-medium text-accent">Plan d'Ingénierie</p>
            <h2 className="text-primary">
              Notre Méthodologie : Alliance du Design Haut de Gamme & du SEO Technique
            </h2>
            <p className="text-primary/85 leading-relaxed">
              La plupart des agences obligent les hôteliers à choisir entre un site sublime mais invisible sur les moteurs de recherche, ou un site optimisé SEO au design générique et daté. Chez Urunk, nous combinons ces deux exigences grâce à une méthodologie d'exécution en 4 à 6 semaines.
            </p>
            <div className="divide-y divide-border-subtle border-y border-border-subtle text-base text-primary/85">
              <div className="py-4">
                <strong>Phase 1 : Architecture de Conversion (Semaines 1-2) :</strong> Développement WordPress sur mesure dès 12 000 MAD (≈1 100 €) avec intégration de votre moteur de réservation, support multidevises et temps de chargement [À CONFIRMER] (Core Web Vitals).
              </div>
              <div className="py-4">
                <strong>Phase 2 : SEO Local à Haute Intention (Semaines 3-4) :</strong> Balisage de données structurées schema.org, modélisation de mots-clés multilingues locaux et optimisation Google Business Profile pour capter les voyageurs qualifiés.
              </div>
              <div className="py-4">
                <strong>Phase 3 : Acquisition Payante Ciblée (Semaines 5-6) :</strong> Gestion Google Ads & Meta Ads à 4 000 MAD/mois (≈370 €) ou TripAdvisor Ads à 3 000 MAD/mois pour générer des réservations directes immédiates.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-6">
            <h3 className="text-primary">La Différence Urunk</h3>
            <p className="text-primary/80 text-base leading-relaxed">
              Les agences généralistes traitent un riad de charme exactement comme un commerce de quartier. L'hôtellerie exige une maîtrise approfondie des PMS (Cloudbeds, Mews), de la synchronisation des stocks de chambres, de la tarification saisonnière dynamique et du comportement d'achat international.
            </p>
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-border-subtle">
              <div>
                <span className="text-2xl font-serif text-accent block tabular-nums mb-1">[À CONFIRMER]</span>
                <span className="text-xs font-medium text-primary/75">Commission OTA Économisée en Direct</span>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent block tabular-nums mb-1">0%</span>
                <span className="text-xs font-medium text-primary/75">Marge Agence sur Budget Média</span>
              </div>
            </div>
            <p className="text-sm text-primary/75 leading-relaxed">
              En réduisant la part des séjours soumis aux commissions OTA de [À CONFIRMER] et en facturant des forfaits fixes sans commission sur vos budgets publicitaires, notre infrastructure renforce durablement la marge nette des établissements indépendants au Maroc.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership & Expertise Section */}
      <Section tone="alt" id="about-leadership-fr">
        <div className="grid md:grid-cols-12 gap-14 items-start">
          <div className="md:col-span-7 space-y-6 max-w-[68ch]">
            <p className="text-sm font-medium text-accent">Ancrés au Maroc</p>
            <h2 className="text-primary">
              Au carrefour de la culture et de l'innovation digitale
            </h2>
            <p className="text-primary/85 leading-relaxed">
              Basée au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc et intervenant à Marrakech et Rabat, notre équipe combine une immersion locale profonde dans l'écosystème touristique légendaire du Maroc avec une rigueur d'ingénierie logicielle de classe mondiale. Nous comprenons les défis opérationnels et marketing uniques auxquels sont confrontés les propriétaires de riads dans les médinas historiques, les complexes hôteliers sur la côte atlantique, ou les agences de circuits gérant les fluctuations saisonnières.
            </p>
            <p className="text-primary/85 leading-relaxed">
              En éliminant les intermédiaires numériques et les commissions abusives, nous redonnons aux hôteliers marocains le contrôle total de leur relation client, de leurs données et de leurs marges de profit. Nous construisons des actifs digitaux pérennes dont la valeur croît de jour en jour.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 pt-4 border-t border-border-subtle text-sm font-medium text-primary/80" id="about-locations-tags-fr">
              <span>3 Rue El Kadi Lass, Maarif, Casablanca</span>
              <span>Hub Marrakech</span>
              <span>Standards Internationaux</span>
            </div>
          </div>

          <div className="md:col-span-5 bg-primary text-bg-light p-8 md:p-10 rounded-sm" id="transparency-box-fr">
            <h3 className="text-bg-light mb-6">Notre engagement pour la transparence totale</h3>
            <ul className="divide-y divide-bg-light/15 text-bg-light/90 text-base leading-relaxed">
              <li className="pb-4">
                <strong>Garantie 90 Jours & Préavis de 15 Jours :</strong> Nos abonnements de gestion sont assortis d'une garantie de performance de 90 jours. Résiliez à tout moment avec un simple préavis de 15 jours, sans engagement.
              </li>
              <li className="py-4">
                <strong>Propriété à 100 % des Actifs & Comptes Publicitaires :</strong> Vous conservez la propriété légale exclusive de votre code source, de votre base de données et de vos comptes Google Ads, Meta Ads et TripAdvisor. Si vous faites une pause, tout reste à vous.
              </li>
              <li className="pt-4">
                <strong>Accès Direct aux Experts Seniors :</strong> Vous travaillez en direct avec nos développeurs seniors et nos stratèges hôteliers—sans intermédiaire ni chefs de projet juniors débordés.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section tone="dark" id="about-cta-section-fr">
        <div className="max-w-[68ch]">
          <h2 className="mb-6 text-bg-light">Prêt à multiplier vos réservations directes ?</h2>
          <p className="text-lg text-bg-light/85 mb-10 leading-relaxed">
            Ne laissez plus les agences de voyage en ligne grignoter vos marges durement gagnées. Laissez notre équipe spécialisée auditer votre présence en ligne actuelle et tracer votre chemin vers le succès en direct.
          </p>
          <Button href="/contact" variant="primary" id="about-cta-btn-fr">
            Obtenez Votre Audit Direct Gratuit
          </Button>
        </div>
      </Section>
    </div>
  );
}
