import React from 'react';
import { Users, Target, Shield, ArrowRight, CheckCircle2, Building, Globe, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function AboutFR() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'À Propos d’Urunk | Agence Digitale Hôtelière au Maroc',
    url: 'https://urunk.com/a-propos',
    description: 'Découvrez Urunk, agence digitale basée à Casablanca dédiée aux hôtels et riads au Maroc : sites web de réservation directe, SEO local et campagnes Ads.'
  };

  return (
    <div className="w-full bg-bg text-primary" id="about-page-fr">
      <SEO
        title="À Propos d'Urunk | Agence Digitale Hôtelière Maroc"
        description="Découvrez Urunk, agence basée à Casablanca dédiée aux hôtels et riads au Maroc : sites web avec réservation directe, SEO local et campagnes Ads."
        schema={aboutSchema}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative bg-primary text-white" id="about-hero-fr">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10" id="about-hero-tag-fr">
            À Propos de l'Agence Urunk
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6" id="about-hero-title-fr">
            Conçus pour la <span className="text-yellow-400 italic">Croissance Hôtelière</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed" id="about-hero-desc-fr">
            Nous ne sommes pas une agence de publicité traditionnelle et lente. Nous sommes une équipe spécialisée de développeurs, d'ingénieurs SEO et de stratèges en conversion, dédiés à aider les hôtels marocains, les riads de luxe et les marques de voyage indépendantes à s'affranchir de la dépendance aux OTA pour capter des réservations directes.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="about-philosophy-fr">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6" id="about-phil-title-fr">
              Pourquoi nous nous concentrons exclusivement sur l'Hôtellerie et le Tourisme Haut de Gamme
            </h2>
            <div className="space-y-6 text-primary/80 font-light leading-relaxed" id="about-phil-content-fr">
              <p>
                Le secteur du tourisme au Maroc vit une renaissance historique. Des ruelles vibrantes de la médina de Marrakech aux dunes majestueuses de Merzouga, en passant par les retraites côtières de Taghazout, les voyageurs du monde entier recherchent des expériences marocaines authentiques. Pourtant, de nombreux riads indépendants, hôtels-boutiques et camps de luxe dans le désert continuent de perdre entre 18 % et 25 % de leur chiffre d'affaires brut au profit des agences de voyage en ligne (OTA), simplement parce que leur propre infrastructure digitale est inadaptée.
              </p>
              <p>
                Nous avons fondé Urunk après avoir constaté un décalage profond sur le marché marocain. Les propriétaires d'établissements achetaient régulièrement des modèles de sites web lents, génériques et dépassés auprès d'agences généralistes. Ces prestataires n'avaient aucune compréhension des systèmes de gestion hôtelière (PMS), des intégrations de moteurs de réservation directe, des passerelles de paiement multidevises ou des exigences spécifiques du SEO touristique. En conséquence, malgré un trafic web parfois correct, les taux de conversion restaient désespérément bas, maintenant les établissements sous la dépendance totale des OTA.
              </p>
              <p>
                Notre mission est sans ambiguïté : fournir aux riads de luxe, hôtels de charme et voyagistes l'infrastructure technologique souveraine nécessaire pour capter les voyageurs internationaux qualifiés, simplifier les réservations directes et optimiser significativement leurs marges nettes. Nous pensons que votre site web ne doit pas être une simple brochure en ligne, mais le canal de vente le plus rentable de votre entreprise.
              </p>
            </div>
            <Link 
              to="/services/creation-site-web" 
              className="mt-8 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
              id="about-phil-cta-fr"
            >
              Découvrez la Conception de Sites Web & Moteurs de Réservation <ArrowRight size={18} />
            </Link>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6" id="about-pillars-cards-fr">
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm" id="phil-card-1-fr">
              <Target className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-2">Précision Basée sur les Données</h3>
              <p className="text-primary/70 text-sm leading-relaxed">Nous ne devinons jamais. Chaque choix de design, chaque mot-clé ciblé et chaque campagne publicitaire est étayé par une analyse rigoureuse des données et un suivi des conversions, adaptés spécifiquement au secteur hôtelier de luxe.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm" id="phil-card-2-fr">
              <Users className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-2">Expertise Bilingue & Interculturelle</h3>
              <p className="text-primary/70 text-sm leading-relaxed">Basés au Maroc et dotés d'une grande fluidité internationale, nous faisons le pont entre le charme de l'hospitalité marocaine et les standards technologiques exigeants des voyageurs européens, américains et du Golfe.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm" id="phil-card-3-fr">
              <Shield className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-2">La Performance Souveraine Avant Tout</h3>
              <p className="text-primary/70 text-sm leading-relaxed">Nous créons des actifs numériques ultra-rapides basés sur les meilleures technologies modernes. Cela garantit une vitesse de chargement optimale appréciée par Google et une expérience fluide pour vos clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The OTA Trap Section (New) */}
      <section className="py-20 bg-primary text-white px-6" id="about-ota-trap-fr">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider block mb-2">L'économie réelle de la réservation</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Le coût réel du piège des OTA</h2>
              <p className="text-white/80 font-light text-sm leading-relaxed">
                De nombreux hôteliers considèrent les commissions des plateformes comme un coût inévitable. Jetons un coup d'œil aux chiffres réels.
              </p>
            </div>
            <div className="md:col-span-7 space-y-6 text-white/90 font-light leading-relaxed text-sm">
              <p>
                Imaginez un établissement de charme de 10 chambres générant <strong>400 000 MAD</strong> de chiffre d'affaires par mois. Si 85 % de ses réservations proviennent d'OTA comme Booking.com, Expedia ou TripAdvisor, la propriété reverse environ 18 % à 22 % de commissions.
              </p>
              <div className="bg-white/5 border-l-4 border-yellow-400 p-6 rounded-r-xl my-4">
                <p className="font-semibold text-lg text-yellow-400 mb-2">Une fuite financière annuelle massive</p>
                <p className="text-white/80">
                  Cela représente plus de <strong>75 000 MAD</strong> versés en commissions chaque mois—soit un montant phénoménal de <strong>900 000 MAD</strong> perdus chaque année. Ce capital pourrait financer des travaux d'extension, l'ajout d'équipements de luxe, une meilleure rémunération du personnel, ou se transformer directement en bénéfice net.
                </p>
              </div>
              <p>
                Urunk a été créée pour rééquilibrer ce bilan. En concevant des parcours numériques performants, nous convertissons les visiteurs de votre site en clients directs. Une réservation directe ne coûte qu'une fraction des frais d'une OTA, ce qui augmente immédiatement vos bénéfices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Depth Section: Our Core Pillars */}
      <section className="py-24 bg-primary/5 px-6 border-b border-primary/10" id="about-pillars-fr">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Le Standard Urunk</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-4">Nos quatre piliers d'ingénierie digitale hôtelière</h2>
            <p className="text-primary/70 font-light">Comment nous transformons les sites web hôteliers sous-performants en moteurs automatisés de réservation directe.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-1-fr">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><Zap size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">Vitesse Architecturale</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                La lenteur tue les réservations. Nous éliminons les ralentissements en optimisant la configuration des serveurs, en compressant les médias et en écrivant un code ultra-léger. Nos sites chargent en moins d'une seconde, ce qui réduit considérablement les abandons et booste la conversion sur mobile.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-2-fr">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><Globe size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">Visibilité de la Recherche Organique</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                Grâce à une recherche de mots-clés rigoureuse et un SEO technique sans faille, nous positionnons votre établissement en haut des résultats de recherche Google pour les requêtes à forte intention d'achat comme "riad de luxe à Marrakech" ou "meilleur désert camp à Merzouga".
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-3-fr">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><Building size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">Synchronisation PMS Transparente</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                Un site web isolé est inefficace. Nous intégrons des moteurs de réservation fluides directement connectés aux meilleurs PMS du marché (Cloudbeds, Mews, Little Hotelier, ou des APIs sur mesure). Vos disponibilités réelles et vos tarifs sont synchronisés en temps réel et sans erreur.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10" id="pillar-card-4-fr">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-lg"><BarChart3 size={20} /></div>
              <h3 className="text-lg font-bold text-primary mb-3">Publicité à fort ROAS</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                Nous concevons et gérons des campagnes hautement ciblées sur Google Ads, Meta Ads (Instagram et Facebook) et TripAdvisor. En captant l'intention des voyageurs actifs ou en réengageant les anciens visiteurs, nous assurons un excellent retour sur investissement publicitaire (ROAS).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Language & International Strategy Section (New) */}
      <section className="py-24 bg-white px-6" id="about-multilang-fr">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portée Mondiale</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Architecture Multilingue sur Mesure</h2>
            <p className="text-primary/70 font-light mt-3">
              Nous concevons des expériences multilingues authentiques qui s'adressent directement aux voyageurs internationaux, renforcent la confiance et stimulent les réservations transfrontalières.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-primary/5 bg-primary/5">
              <h3 className="font-bold text-lg text-primary mb-3">Rédaction Multilingue Culturelle</h3>
              <p className="text-primary/75 text-sm leading-relaxed">
                Les widgets de traduction automatique (comme Google Translate) manquent de professionnalisme et nuisent à la confiance. Nous rédigeons des textes soignés, traduits par des humains, qui respectent les codes du luxe et retransmettent à la perfection l'essence de votre établissement.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-primary/5 bg-primary/5">
              <h3 className="font-bold text-lg text-primary mb-3">Référencement Multilingue Localisé</h3>
              <p className="text-primary/75 text-sm leading-relaxed">
                Nous configurons les balises hreflang, les métadescriptions localisées et les mots-clés régionaux. Qu'un client potentiel effectue sa recherche en français depuis Paris, en anglais depuis Londres ou en arabe depuis Dubaï, il trouvera la version exacte du site qui lui correspond.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-primary/5 bg-primary/5">
              <h3 className="font-bold text-lg text-primary mb-3">Affichage Dynamique Multidevises</h3>
              <p className="text-primary/75 text-sm leading-relaxed">
                Nous éliminons les frictions de paiement en permettant à vos visiteurs de consulter les prix dans leur devise d'origine (MAD, EUR, USD, GBP) et de réserver en toute sécurité par carte bancaire marocaine, internationale (Visa, Mastercard), ou via Apple Pay et PayPal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Framework Sections: Notre Méthodologie, La Différence Urunk & Transparence */}
      <section className="py-24 bg-white px-6 border-t border-primary/10" id="about-methodology-framework-fr">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* 1. Notre Méthodologie */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Plan d'Ingénierie</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Notre Méthodologie : Alliance du Design Haut de Gamme & du SEO Technique</h2>
              <p className="text-primary/80 font-light leading-relaxed">
                La plupart des agences obligent les hôteliers à choisir entre un site sublime mais invisible sur les moteurs de recherche, ou un site optimisé SEO au design générique et daté. Chez Urunk, nous combinons ces deux exigences grâce à une méthodologie d'exécution en 4 à 6 semaines.
              </p>
              <div className="space-y-4 text-sm font-light text-primary/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                  <span><strong>Phase 1 : Architecture de Conversion (Semaines 1-2) :</strong> Développement WordPress sur mesure dès 12 000 MAD (≈1 100 €) avec intégration de votre moteur de réservation, support multidevises et temps de chargement sous 1 seconde (Core Web Vitals).</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                  <span><strong>Phase 2 : SEO Local à Haute Intention (Semaines 3-4) :</strong> Balisage de données structurées schema.org, modélisation de mots-clés multilingues locaux et optimisation Google Business Profile pour capter les voyageurs qualifiés.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                  <span><strong>Phase 3 : Acquisition Payante Ciblée (Semaines 5-6) :</strong> Gestion Google Ads & Meta Ads à 4 000 MAD/mois (≈370 €) ou TripAdvisor Ads à 3 000 MAD/mois pour générer des réservations directes immédiates.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary">La Différence Urunk</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Les agences généralistes traitent un riad de charme exactement comme un commerce de quartier. L'hôtellerie exige une maîtrise approfondie des PMS (Cloudbeds, Mews), de la synchronisation des stocks de chambres, de la tarification saisonnière dynamique et du comportement d'achat international.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-primary/10 text-center">
                  <span className="text-3xl font-serif font-bold text-accent block tabular-nums">15%–25%</span>
                  <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Commission OTA Économisée en Direct</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-primary/10 text-center">
                  <span className="text-3xl font-serif font-bold text-accent block tabular-nums">0%</span>
                  <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Marge Agence sur Budget Média</span>
                </div>
              </div>
              <p className="text-xs text-primary/60 font-light leading-relaxed">
                En réduisant la part des séjours soumis aux commissions OTA de 15 % à 25 % et en facturant des forfaits fixes sans commission sur vos budgets publicitaires, notre infrastructure renforce durablement la marge nette des établissements indépendants au Maroc.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership & Expertise Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-primary/10" id="about-leadership-fr">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Ancrés au Maroc</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Au carrefour de la culture et de l'innovation digitale
            </h2>
            <p className="text-primary/80 font-light leading-relaxed">
              Basée au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc et intervenant à Marrakech et Rabat, notre équipe combine une immersion locale profonde dans l'écosystème touristique légendaire du Maroc avec une rigueur d'ingénierie logicielle de classe mondiale. Nous comprenons les défis opérationnels et marketing uniques auxquels sont confrontés les propriétaires de riads dans les médinas historiques, les complexes hôteliers sur la côte atlantique, ou les agences de circuits gérant les fluctuations saisonnières.
            </p>
            <p className="text-primary/80 font-light leading-relaxed">
              En éliminant les intermédiaires numériques et les commissions abusives, nous redonnons aux hôteliers marocains le contrôle total de leur relation client, de leurs données et de leurs marges de profit. Nous construisons des actifs digitaux pérennes dont la valeur croît de jour en jour.
            </p>
            <div className="flex flex-wrap gap-4 pt-2" id="about-locations-tags-fr">
              <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg">
                <CheckCircle2 size={16} className="text-accent" /> 3 Rue El Kadi Lass, Maarif, Casablanca
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg">
                <CheckCircle2 size={16} className="text-accent" /> Hub Marrakech
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg">
                <CheckCircle2 size={16} className="text-accent" /> Standards Internationaux
              </div>
            </div>
          </div>
          <div className="bg-primary text-white p-10 rounded-3xl relative overflow-hidden shadow-xl" id="transparency-box-fr">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-serif font-bold mb-6">Notre engagement pour la transparence totale</h3>
            <ul className="space-y-4 font-light text-white/90 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                <span><strong>Garantie 90 Jours & Préavis de 15 Jours :</strong> Nos abonnements de gestion sont assortis d'une garantie de performance de 90 jours. Résiliez à tout moment avec un simple préavis de 15 jours, sans engagement.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                <span><strong>Propriété à 100 % des Actifs & Comptes Publicitaires :</strong> Vous conservez la propriété légale exclusive de votre code source, de votre base de données et de vos comptes Google Ads, Meta Ads et TripAdvisor. Si vous faites une pause, tout reste à vous.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                <span><strong>Accès Direct aux Experts Seniors :</strong> Vous travaillez en direct avec nos développeurs seniors et nos stratèges hôteliers—sans intermédiaire ni chefs de projet juniors débordés.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center px-6" id="about-cta-section-fr">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Prêt à multiplier vos réservations directes ?</h2>
          <p className="text-lg text-white/80 font-light mb-10">Ne laissez plus les agences de voyage en ligne grignoter vos marges durement gagnées. Laissez notre équipe spécialisée auditer votre présence en ligne actuelle et tracer votre chemin vers le succès en direct.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg"
            id="about-cta-btn-fr"
          >
            Obtenez Votre Audit Direct Gratuit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
