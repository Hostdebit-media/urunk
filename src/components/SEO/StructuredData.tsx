import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
  position?: number;
}

export interface OrganizationData {
  name?: string;
  legalName?: string;
  url?: string;
  logo?: string;
  telephone?: string;
  email?: string;
  sameAs?: string[];
  description?: string;
  address?: object | object[];
}

export interface ProfessionalServiceData extends OrganizationData {
  priceRange?: string;
  openingHours?: string | string[];
  areaServed?: string | string[];
  knowsAbout?: string[];
  geo?: object | object[];
}

export interface StructuredDataProps {
  /** Explicit schema type or 'Combined' */
  type?: 'Organization' | 'ProfessionalService' | 'BreadcrumbList' | 'FAQPage' | 'Combined';
  /** Array of raw Schema.org objects or single schema object */
  data?: object | object[];
  /** FAQ Items for FAQPage type */
  faqItems?: FAQItem[];
  /** Breadcrumb items for BreadcrumbList type */
  breadcrumbs?: BreadcrumbItem[];
  /** Custom organization fields */
  organizationData?: OrganizationData;
  /** Custom professional service fields */
  professionalServiceData?: ProfessionalServiceData;
  /** Locale language code (default 'en') */
  lang?: 'en' | 'fr' | string;
}

const SITE_URL = 'https://urunk.com';

/** Helper builder for Organization schema */
export function buildOrganizationSchema(customData?: OrganizationData, lang: string = 'fr') {
  const isFr = lang.startsWith('fr');
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": customData?.name || "Urunk",
    "legalName": customData?.legalName || "Urunk Digital Agency",
    "alternateName": "Urunk Agency",
    "url": customData?.url || SITE_URL,
    "logo": customData?.logo || `${SITE_URL}/logo.png`,
    "image": customData?.logo || `${SITE_URL}/logo.png`,
    "description": customData?.description || (isFr
      ? "Agence digitale à haute performance spécialisée dans la création de sites web, Google Ads, Meta Ads et TripAdvisor Ads."
      : "High-performance digital agency specializing in website design, Google Ads, Meta Ads, and TripAdvisor Ads."),
    "telephone": customData?.telephone || "+212668802096",
    "email": customData?.email || "contact@urunk.com",
    "address": customData?.address || [
      {
        "@type": "PostalAddress",
        "streetAddress": "114, Angle Boulevard 11 Janvier et Rue Mustapha El Maani, 6ème Étage N°32",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "postalCode": "20250",
        "addressCountry": "MA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2ème Étage, N°19, Immeuble 35, Lotissement Al Massar",
        "addressLocality": "Marrakech",
        "addressRegion": "Marrakech-Safi",
        "postalCode": "40100",
        "addressCountry": "MA"
      }
    ],
    "sameAs": customData?.sameAs || [
      "https://facebook.com/urunk",
      "https://instagram.com/urunk",
      "https://linkedin.com/company/urunk",
      "https://maps.google.com/?cid=urunk-casablanca",
      "https://maps.google.com/?cid=urunk-marrakech"
    ]
  };
}

/** Helper builder for LocalBusiness schema */
export function buildLocalBusinessSchema(customData?: ProfessionalServiceData, lang: string = 'fr') {
  const isFr = lang.startsWith('fr');
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    "name": customData?.name || "Urunk",
    "legalName": "Urunk Digital Agency",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/logo.png`,
    "telephone": "+212668802096",
    "email": "contact@urunk.com",
    "priceRange": customData?.priceRange || "$$$",
    "description": customData?.description || (isFr
      ? "Agence digitale spécialisée dans l'hôtellerie, création de sites web et référencement Google Ads & SEO au Maroc."
      : "Digital agency specializing in hospitality, hotel website design, and Google Ads & SEO in Morocco."),
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "114, Angle Boulevard 11 Janvier et Rue Mustapha El Maani, 6ème Étage N°32",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "postalCode": "20250",
        "addressCountry": "MA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2ème Étage, N°19, Immeuble 35, Lotissement Al Massar",
        "addressLocality": "Marrakech",
        "addressRegion": "Marrakech-Safi",
        "postalCode": "40100",
        "addressCountry": "MA"
      }
    ],
    "geo": [
      { "@type": "GeoCoordinates", "latitude": 33.589886, "longitude": -7.616644 },
      { "@type": "GeoCoordinates", "latitude": 31.629472, "longitude": -7.981084 }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "City", "name": "Marrakech" },
      { "@type": "City", "name": "Casablanca" },
      { "@type": "City", "name": "Agadir" },
      { "@type": "City", "name": "Taghazout" },
      { "@type": "City", "name": "Fes" },
      { "@type": "City", "name": "Tangier" },
      { "@type": "City", "name": "Essaouira" },
      { "@type": "Country", "name": "France" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "Worldwide" }
    ],
    "sameAs": [
      "https://facebook.com/urunk",
      "https://instagram.com/urunk",
      "https://linkedin.com/company/urunk",
      "https://maps.google.com/?cid=urunk-casablanca",
      "https://maps.google.com/?cid=urunk-marrakech"
    ]
  };
}

/** Helper builder for ProfessionalService schema */
export function buildProfessionalServiceSchema(customData?: ProfessionalServiceData, lang: string = 'en') {
  const org = buildOrganizationSchema(customData, lang);
  return {
    ...org,
    "@type": ["ProfessionalService", "DigitalMarketingAgency"],
    "@id": `${SITE_URL}/#service`,
    "priceRange": customData?.priceRange || "$$$",
    "geo": customData?.geo || [
      { "@type": "GeoCoordinates", "latitude": 33.589886, "longitude": -7.616644 },
      { "@type": "GeoCoordinates", "latitude": 31.629472, "longitude": -7.981084 }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "City", "name": "Marrakech" },
      { "@type": "City", "name": "Casablanca" },
      { "@type": "City", "name": "Agadir" },
      { "@type": "City", "name": "Taghazout" },
      { "@type": "City", "name": "Fes" },
      { "@type": "City", "name": "Tangier" },
      { "@type": "City", "name": "Essaouira" },
      { "@type": "Country", "name": "France" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "Worldwide" }
    ],
    "knowsAbout": customData?.knowsAbout || [
      "Web Design & Development",
      "Search Engine Marketing (SEM)",
      "Google Ads Management",
      "Meta Ads & Paid Social",
      "TripAdvisor Advertising",
      "Hotel Digital Marketing",
      "Conversion Rate Optimization (CRO)"
    ]
  };
}

/** Helper builder for BreadcrumbList schema */
export function buildBreadcrumbListSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, idx) => ({
      "@type": "ListItem",
      "position": b.position || idx + 1,
      "name": b.name,
      "item": b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url}`
    }))
  };
}

/** Helper builder for FAQPage schema */
export function buildFAQPageSchema(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function StructuredData({
  type,
  data,
  faqItems,
  breadcrumbs,
  organizationData,
  professionalServiceData,
  lang = 'en'
}: StructuredDataProps) {
  const schemas: object[] = [];

  if (type === 'Organization' || (!type && organizationData)) {
    schemas.push(buildOrganizationSchema(organizationData, lang));
  }

  if (type === 'ProfessionalService' || (!type && professionalServiceData)) {
    schemas.push(buildProfessionalServiceSchema(professionalServiceData, lang));
  }

  if ((type === 'BreadcrumbList' || !type) && breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(buildBreadcrumbListSchema(breadcrumbs));
  }

  if ((type === 'FAQPage' || !type) && faqItems && faqItems.length > 0) {
    schemas.push(buildFAQPageSchema(faqItems));
  }

  if (type === 'Combined') {
    schemas.push(buildOrganizationSchema(organizationData, lang));
    schemas.push(buildProfessionalServiceSchema(professionalServiceData, lang));
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push(buildBreadcrumbListSchema(breadcrumbs));
    }
    if (faqItems && faqItems.length > 0) {
      schemas.push(buildFAQPageSchema(faqItems));
    }
  }

  if (data) {
    if (Array.isArray(data)) {
      schemas.push(...data);
    } else {
      schemas.push(data);
    }
  }

  if (schemas.length === 0) {
    schemas.push(buildProfessionalServiceSchema(professionalServiceData, lang));
  }

  return (
    <Helmet>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </Helmet>
  );
}

export default StructuredData;
