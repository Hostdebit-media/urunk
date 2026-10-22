# Structure Actuelle du Site Web - Urunk

Ce document présente l'architecture et l'arborescence complète du site web **Urunk** (https://urunk.com), agence de marketing digital, création de sites web et acquisition spécialisée dans l'hôtellerie, les riads et le tourisme au Maroc.

---

## 1. Vue d'Ensemble & Principes d'Architecture

- **Architecture Bilingue** : 
  - Version Française en racine : `/`
  - Version Anglaise préfixée : `/en/`
  - Redirection automatique des anciennes URLs `/fr/*` vers la racine `/`
- **Génération & SEO** :
  - **Prerendering HTML statique** pour toutes les pages (236+ pages pré-rendues pour une indexabilité instantanée par les moteurs de recherche).
  - Balises canoniques uniques, hreflang bidirectionnels (`fr` et `en`), balises Open Graph et Twitter Cards sur chaque page.
  - Données structurées Schema.org (`Organization`, `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`).

---

## 2. Arborescence Comparative FR / EN

```
urunk.com/
│
├── [FRANÇAIS (Défaut)]
│   ├── /                                             (Accueil)
│   ├── /a-propos                                     (À Propos)
│   ├── /tarifs                                       (Grille Tarifaire)
│   ├── /services                                     (Hub Services)
│   │   ├── /services/creation-site-web               (Création Web)
│   │   ├── /creation-site-web                        (Landing Création Web)
│   │   ├── /agence-web-maroc                         (Agence Web Maroc)
│   │   ├── /agence-web-casablanca                    (Agence Web Casablanca)
│   │   ├── /agence-seo-maroc                         (Agence SEO Maroc)
│   │   ├── /agence-seo-casablanca                    (Agence SEO Casablanca)
│   │   ├── /seo-hotel                                (SEO Hôtels)
│   │   ├── /marketing-digital-hotelier               (Marketing Digital Hôtelier)
│   │   ├── /site-web-hotel                           (Site Web Hôtelier)
│   │   ├── /reservation-directe                      (Moteur Réservation Directe)
│   │   ├── /google-ads-maroc                         (Google Ads Maroc)
│   │   ├── /referencement-local-casablanca           (SEO Local Casablanca)
│   │   ├── /seo-riad-marrakech                       (SEO Riad Marrakech)
│   │   ├── /site-web-riad-marrakech                  (Site Web Riad Marrakech)
│   │   ├── /services/gestion-google-ads              (Gestion Google Ads)
│   │   ├── /services/gestion-publicites-meta         (Meta Ads / Facebook / Insta)
│   │   ├── /services/tripadvisor-ads                 (Tripadvisor Ads)
│   │   ├── /services/bundle-site-ads                 (Pack Bundle Web + Ads)
│   │   ├── /services/ai-seo-optimization             (Optimisation SEO IA)
│   │   ├── /services/wordpress-seo                   (SEO WordPress)
│   │   ├── /services/ecommerce-seo                   (SEO E-commerce)
│   │   ├── /services/google-business-profile         (Fiche Google Business)
│   │   └── /services/local-seo-morocco               (SEO Local Maroc)
│   │
│   ├── /secteurs                                     (Secteurs Cibles)
│   │   ├── /secteurs/hotels-resorts                  (Hôtels & Resorts)
│   │   ├── /secteurs/riads-maisons-hotes             (Riads & Maisons d'Hôtes)
│   │   ├── /secteurs/tour-operateurs                 (Tour-Opérateurs & Agences de Voyage)
│   │   ├── /secteurs/restaurants-traiteurs           (Restaurants & Traiteurs)
│   │   └── /secteurs/pme-entreprises                 (PME & Entreprises)
│   │
│   ├── /zones                                        (Zones d'Intervention)
│   │   ├── /zones/maroc                              (Maroc National)
│   │   ├── /zones/casablanca                         (Casablanca)
│   │   ├── /zones/marrakech                          (Marrakech)
│   │   ├── /zones/rabat                              (Rabat)
│   │   └── /zones/agadir                             (Agadir)
│   │
│   ├── /expertise/:param1/:param2                    (Matrice SEO Croisée Ville / Service / Secteur)
│   │
│   ├── /realisations                                 (Portfolio / Études de cas)
│   │   ├── /realisations/services-voyage-maroc       (Étude Travel Morocco)
│   │   ├── /realisations/nomad-eats-traiteur         (Étude Nomad Eats Catering)
│   │   └── /realisations/art-house-marrakech         (Étude Art House Marrakech)
│   │
│   ├── /blog                                         (Articles & Guides Stratégiques - 21 articles)
│   │   └── /blog/:slug
│   │
│   ├── /faq                                          (Foire Aux Questions)
│   ├── /contact                                      (Contact & Devis)
│   ├── /merci                                        (Page de confirmation)
│   ├── /politique-de-confidentialite                 (Mentions Légales & Confidentialité)
│   ├── /conditions-generales                         (Conditions Générales de Vente)
│   └── /plan-du-site                                 (Plan du site HTML)
│
└── [ENGLISH (/en)]
    ├── /en                                           (Homepage)
    ├── /en/about                                     (About Us)
    ├── /en/pricing                                   (Pricing)
    ├── /en/services                                  (Services Hub)
    │   ├── /en/services/website-design               (Website Design)
    │   ├── /en/web-design-morocco                    (Web Design Morocco)
    │   ├── /en/web-design-casablanca                 (Web Design Casablanca)
    │   ├── /en/seo-morocco                           (SEO Morocco)
    │   ├── /en/seo-agency-morocco                    (SEO Agency Morocco)
    │   ├── /en/seo-agency-casablanca                 (SEO Agency Casablanca)
    │   ├── /en/hotel-seo                             (Hotel SEO)
    │   ├── /en/hotel-digital-marketing               (Hotel Digital Marketing)
    │   ├── /en/hotel-website-design                  (Hotel Website Design)
    │   ├── /en/direct-booking                        (Direct Booking Engine)
    │   ├── /en/google-ads-morocco                    (Google Ads Morocco)
    │   ├── /en/local-seo-casablanca                  (Local SEO Casablanca)
    │   ├── /en/riad-seo-marrakech                    (Riad SEO Marrakech)
    │   ├── /en/riad-website-design-marrakech         (Riad Web Design Marrakech)
    │   ├── /en/services/google-ads                   (Google Ads Management)
    │   ├── /en/services/meta-ads                     (Meta Ads / Facebook / Instagram)
    │   ├── /en/services/tripadvisor-ads              (Tripadvisor Ads)
    │   ├── /en/services/bundle-site-ads              (Bundle Website + Ads)
    │   ├── /en/services/ai-seo-optimization          (AI SEO Optimization)
    │   ├── /en/services/wordpress-seo                (WordPress SEO)
    │   ├── /en/services/ecommerce-seo                (E-commerce SEO)
    │   ├── /en/services/google-business-profile      (Google Business Profile)
    │   └── /en/services/local-seo-morocco            (Local SEO Morocco)
    │
    ├── /en/industries                                (Target Industries)
    │   ├── /en/industries/hotels-resorts             (Hotels & Resorts)
    │   ├── /en/industries/riads-boutique-hotels      (Riads & Boutique Stays)
    │   ├── /en/industries/tour-operators             (Tour Operators)
    │   ├── /en/industries/restaurants-catering       (Restaurants & Catering)
    │   └── /en/industries/corporate-smes             (Corporate & SMEs)
    │
    ├── /en/locations                                 (Locations Covered)
    │   ├── /en/locations/morocco                     (Morocco Nationwide)
    │   ├── /en/locations/casablanca                  (Casablanca)
    │   ├── /en/locations/marrakech                   (Marrakech)
    │   ├── /en/locations/rabat                       (Rabat)
    │   └── /en/locations/agadir                      (Agadir)
    │
    ├── /en/expertise/:param1/:param2                 (Matrix SEO Landing Pages)
    │
    ├── /en/work                                      (Case Studies / Portfolio)
    │   ├── /en/work/travel-morocco-services          (Travel Morocco Case Study)
    │   ├── /en/work/nomad-eats-catering              (Nomad Eats Catering Case Study)
    │   └── /en/work/art-house-marrakech              (Art House Marrakech Case Study)
    │
    ├── /en/blog                                      (Blog & Knowledge Base - 21 articles)
    │   └── /en/blog/:slug
    │
    ├── /en/faq                                       (Frequently Asked Questions)
    ├── /en/contact                                   (Contact & Quotes)
    ├── /en/thank-you                                 (Confirmation Page)
    ├── /en/privacy-policy                            (Privacy Policy)
    ├── /en/terms-of-service                          (Terms of Service)
    └── /en/sitemap                                   (HTML Sitemap)
```

---

## 3. Matrice d'Expertise Programmatique (Pages Croisées)

Les pages `/expertise/:location/:service` et `/expertise/:industry/:service` couvrent les combinaisons ciblées à forte intention de recherche :

| Identifiant Relation | Ville / Secteur | Service Lié | URL FR | URL EN |
|---|---|---|---|---|
| `hotel-seo-marrakech` | Marrakech | SEO Hôtelier | `/expertise/marrakech/hotel-seo` | `/en/expertise/marrakech/hotel-seo` |
| `hotel-website-design-marrakech` | Marrakech | Création Web Hôtelier | `/expertise/marrakech/hotel-website-design` | `/en/expertise/marrakech/hotel-website-design` |
| `riad-seo-marrakech` | Marrakech | SEO Riads | `/expertise/marrakech/riad-seo-marrakech` | `/en/expertise/marrakech/riad-seo-marrakech` |
| `riad-website-design-marrakech` | Marrakech | Web Design Riads | `/expertise/marrakech/riad-website-design-marrakech` | `/en/expertise/marrakech/riad-website-design-marrakech` |
| `direct-booking-marrakech` | Marrakech | Réservation Directe | `/expertise/marrakech/direct-booking` | `/en/expertise/marrakech/direct-booking` |
| `hotel-seo-agadir` | Agadir | SEO Hôtelier | `/expertise/agadir/hotel-seo` | `/en/expertise/agadir/hotel-seo` |
| `hotel-website-design-agadir` | Agadir | Création Web Hôtelier | `/expertise/agadir/hotel-website-design` | `/en/expertise/agadir/hotel-website-design` |
| `direct-booking-agadir` | Agadir | Réservation Directe | `/expertise/agadir/direct-booking` | `/en/expertise/agadir/direct-booking` |
| `hotel-seo-casablanca` | Casablanca | SEO Hôtelier | `/expertise/casablanca/hotel-seo` | `/en/expertise/casablanca/hotel-seo` |
| `web-design-casablanca` | Casablanca | Web Design Casablanca | `/expertise/casablanca/web-design-casablanca` | `/en/expertise/casablanca/web-design-casablanca` |
| `local-seo-casablanca` | Casablanca | SEO Local Casablanca | `/expertise/casablanca/local-seo-casablanca` | `/en/expertise/casablanca/local-seo-casablanca` |
| `google-ads-casablanca` | Casablanca | Google Ads | `/expertise/casablanca/google-ads-morocco` | `/en/expertise/casablanca/google-ads-morocco` |
| `google-ads-marrakech` | Marrakech | Google Ads | `/expertise/marrakech/google-ads-morocco` | `/en/expertise/marrakech/google-ads-morocco` |
| `tripadvisor-ads-marrakech` | Marrakech | TripAdvisor Ads | `/expertise/marrakech/hotel-digital-marketing` | `/en/expertise/marrakech/hotel-digital-marketing` |
| `hotel-seo-rabat` | Rabat | SEO Hôtelier | `/expertise/rabat/hotel-seo` | `/en/expertise/rabat/hotel-seo` |
| `web-design-rabat` | Rabat | Web Design | `/expertise/rabat/web-design-morocco` | `/en/expertise/rabat/web-design-morocco` |
| `meta-ads-marrakech` | Marrakech | Meta Ads | `/expertise/marrakech/hotel-digital-marketing` | `/en/expertise/marrakech/hotel-digital-marketing` |
| `hotel-seo-hotels-resorts` | Hôtels & Resorts | SEO Hôtelier | `/expertise/hotels-resorts/hotel-seo` | `/en/expertise/hotels-resorts/hotel-seo` |
| `direct-booking-riads-boutique-hotels` | Riads | Réservation Directe | `/expertise/riads-boutique-hotels/direct-booking` | `/en/expertise/riads-boutique-hotels/direct-booking` |

---

## 4. Répertoire des Articles de Blog (21 FR / 21 EN)

| # | Slug FR (`/blog/:slug`) | Slug EN (`/en/blog/:slug`) | Thématique |
|---|---|---|---|
| 1 | `reduire-commissions-ota` | `reduce-ota-commissions` | Stratégie Réservation Directe |
| 2 | `tripadvisor-vs-google-ads` | `tripadvisor-vs-google-ads` | Publicité Hôtelière |
| 3 | `bouton-reserver-site-web` | `website-book-now-button` | Ergonomie & Conversion (CRO) |
| 4 | `wordpress-vs-wix-hotellerie` | `wordpress-vs-wix-hospitality` | Choix CMS Hôtellerie |
| 5 | `optimiser-annonce-tripadvisor` | `optimize-tripadvisor-listing` | Visibilité OTA & Réputation |
| 6 | `cout-site-web-reservation-directe-maroc` | `direct-booking-website-cost-morocco` | Budgets & ROI Web Maroc |
| 7 | `signes-site-web-perd-reservations` | `signs-website-losing-bookings` | Audit & Fuite de Réservations |
| 8 | `google-ads-riads-recherche-mots-cles` | `google-ads-riads-keyword-research` | Acquisition Google Ads Riads |
| 9 | `obtenir-plus-avis-5-etoiles` | `get-more-5-star-reviews` | E-réputation & Avis Clients |
| 10 | `etudes-de-cas-succes-hotellerie` | `case-study-roundup-success` | Retours d'Expérience Client |
| 11 | `publicites-meta-pour-hotels-instagram-facebook` | `meta-ads-for-hotels-instagram-facebook` | Campagnes Social Ads |
| 12 | `guide-seo-hotellerie-maroc` | `hotel-seo-morocco-guide` | Guide Référencement Naturel |
| 13 | `integration-pms-moteur-reservation-directe` | `pms-integration-direct-booking-engine` | Intégration Technique Moteurs |
| 14 | `marketing-email-automatisation-pour-hotels` | `email-marketing-automation-for-hotels` | Nurturing & Email Automation |
| 15 | `strategie-marketing-camp-desert` | `desert-camp-marketing-strategy` | Marketing Bivouacs & Camps |
| 16 | `marketing-digital-tour-operateur` | `tour-operator-digital-marketing` | Acquisition Tour-Opérateurs |
| 17 | `optimisation-vitesse-sites-web-hotellerie` | `speed-optimization-hotel-websites` | Core Web Vitals & Vitesse |
| 18 | `automatisation-whatsapp-experience-client-hotel` | `whatsapp-automation-hotel-guest-experience` | Canaux Directs WhatsApp |
| 19 | `landing-pages-hotels` | `landing-pages-hotels` | Pages d'Atterrissage & CRO |
| 20 | `tarification-saisonniere-gestion-revenus` | `seasonal-pricing-revenue-management` | Revenue Management |
| 21 | `rebranding-renovation-hotel-lancement-digital` | `rebranding-renovating-hotel-digital-launch` | Lancement & Rebranding |

---

## 5. Architecture des Fichiers Sitemaps XML

Les sitemaps sont automatiquement générés lors de chaque `npm run build` :

1. `sitemap-index.xml` (ou `sitemap.xml`) : Index principal
2. `pages-sitemap.xml` : Pages statiques, services, secteurs, zones et études de cas en Anglais
3. `pages-sitemap-fr.xml` : Pages statiques, services, secteurs, zones et études de cas en Français
4. `posts-sitemap.xml` : Articles de blog en Anglais
5. `posts-sitemap-fr.xml` : Articles de blog en Français
6. `images-sitemap.xml` : Indexation des visuels EN
7. `images-sitemap-fr.xml` : Indexation des visuels FR
