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

export const URUNK_POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "3 Rue El Kadi Lass, Maarif",
  "addressLocality": "Casablanca",
  "addressRegion": "Casablanca-Settat",
  "postalCode": "20330",
  "addressCountry": "MA"
} as const;

export const URUNK_GEO_COORDINATES = {
  "@type": "GeoCoordinates",
  "latitude": 33.5855,
  "longitude": -7.6365
} as const;

/** Canonical Service.provider builder with full Google Rich Results LocalBusiness fields */
export function buildServiceProviderSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    "name": "Urunk",
    "url": SITE_URL,
    "image": `${SITE_URL}/logo.png`,
    "telephone": "+212668802096",
    "email": "contact@urunk.com",
    "priceRange": "$$$",
    "address": URUNK_POSTAL_ADDRESS,
    "geo": URUNK_GEO_COORDINATES
  };
}

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
    "address": customData?.address || URUNK_POSTAL_ADDRESS,
    "sameAs": customData?.sameAs || [
      "https://facebook.com/urunk",
      "https://instagram.com/urunk",
      "https://linkedin.com/company/urunk"
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
    "address": URUNK_POSTAL_ADDRESS,
    "geo": URUNK_GEO_COORDINATES,
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
      "https://linkedin.com/company/urunk"
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
    "geo": customData?.geo || URUNK_GEO_COORDINATES,
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

export interface ArticleSchemaInput {
  type?: 'Article' | 'BlogPosting';
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  lang?: 'fr' | 'en';
}

export function parseIsoDate(dateStr?: string, fallback: string = '2026-01-15'): string {
  if (!dateStr) return fallback;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;

  const frMonths: Record<string, string> = {
    janvier: '01', fevrier: '02', février: '02', mars: '03', avril: '04',
    mai: '05', juin: '06', juillet: '07', aout: '08', août: '08',
    septembre: '09', octobre: '10', novembre: '11', decembre: '12', décembre: '12'
  };
  const enMonths: Record<string, string> = {
    january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
    july: '07', august: '08', september: '09', october: '10', november: '11', december: '12'
  };

  const parts = dateStr.trim().toLowerCase().replace(/,/g, '').split(/\s+/);
  if (parts.length >= 3) {
    if (frMonths[parts[1]]) {
      return `${parts[2]}-${frMonths[parts[1]]}-${parts[0].padStart(2, '0')}`;
    }
    if (enMonths[parts[0]]) {
      return `${parts[2]}-${enMonths[parts[0]]}-${parts[1].replace(/st|nd|rd|th/g, '').padStart(2, '0')}`;
    }
    if (enMonths[parts[1]]) {
      return `${parts[2]}-${enMonths[parts[1]]}-${parts[0].padStart(2, '0')}`;
    }
  }

  const parsed = new Date(dateStr);
  return !isNaN(parsed.getTime()) ? parsed.toISOString().split('T')[0] : fallback;
}

export function buildArticleSchema({
  type = 'Article',
  url,
  headline,
  description,
  image,
  datePublished = '2026-01-15',
  dateModified,
  lang = 'fr'
}: ArticleSchemaInput) {
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
  const fullImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
    : `${SITE_URL}/og-image.jpg`;
  const cleanHeadline = headline.replace(/\s+/g, ' ').trim();
  const safeHeadline = cleanHeadline.length > 110
    ? `${cleanHeadline.substring(0, 107).trim()}...`
    : cleanHeadline;
  const pubIso = parseIsoDate(datePublished);
  const todayIso = new Date().toISOString().split('T')[0];
  const modCandidate = dateModified ? parseIsoDate(dateModified, pubIso) : todayIso;
  const safeModIso = modCandidate >= pubIso ? modCandidate : pubIso;

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${fullUrl}#article`,
    "headline": safeHeadline,
    "description": description,
    "image": fullImage,
    "inLanguage": lang === 'fr' ? 'fr-MA' : 'en-US',
    "datePublished": pubIso,
    "dateModified": safeModIso,
    "author": {
      "@type": "Person",
      "name": "J.Mellal",
      "jobTitle": lang === 'fr'
        ? "Consultant SEO & Stratège Marketing Digital Propulsé par l'IA"
        : "SEO Consultant & AI-Powered Digital Marketing Strategist",
      "url": lang === 'fr' ? `${SITE_URL}/a-propos` : `${SITE_URL}/en/about`,
      "worksFor": {
        "@type": "Organization",
        "name": "Urunk",
        "url": SITE_URL
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Urunk",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
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
