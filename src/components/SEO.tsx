import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getEquivalentRoute } from '../data/slugMappings';
import { useLocation } from 'react-router-dom';
import { buildProfessionalServiceSchema, buildBreadcrumbListSchema } from './SEO/StructuredData';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  schema?: object | object[];
  noindex?: boolean;
}

const siteUrl = 'https://urunk.com';

export default function SEO({ title, description, image, schema, noindex }: SEOProps) {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const currentLang = isFrench ? 'fr' : 'en';
  
  const currentPath = location.pathname.endsWith('/') && location.pathname.length > 1 ? location.pathname.slice(0, -1) : location.pathname;
  const pathSegments = currentPath.split('/').filter(Boolean);

  const breadcrumbsList = pathSegments.map((segment, index) => {
    const url = `${siteUrl}/${pathSegments.slice(0, index + 1).join('/')}`;
    let name = segment.replace(/-/g, ' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return {
      name: name,
      url: url,
      position: index + 2
    };
  });
  
  // Add Home as first breadcrumb
  breadcrumbsList.unshift({
    name: isFrench ? "Accueil" : "Home",
    url: siteUrl + (isFrench ? "" : "/en"),
    position: 1
  });

  const breadcrumbSchema = buildBreadcrumbListSchema(breadcrumbsList);
  const agencySchema = buildProfessionalServiceSchema(undefined, currentLang);

  const finalSchema: object[] = [agencySchema];
  if (currentPath !== '/' && currentPath !== '/en') {
    finalSchema.push(breadcrumbSchema);
  }
  if (schema) {
    if (Array.isArray(schema)) finalSchema.push(...schema);
    else finalSchema.push(schema);
  }

  const alternatePath = getEquivalentRoute(currentPath);
  
  const enPath = isFrench ? alternatePath : currentPath;
  const frPath = isFrench ? currentPath : alternatePath;

  // Technical SEO Audit Fix: Dynamic Title & Parameter Handling
  const searchParams = new URLSearchParams(location.search);
  const pageNum = searchParams.get('page');
  const activeCategory = searchParams.get('category');
  const activeFilter = searchParams.get('filter');
  const activeSort = searchParams.get('sort');

  let finalTitle = title;
  const titleAdditions: string[] = [];
  
  if (activeCategory) {
    const formattedCat = activeCategory.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    titleAdditions.push(isFrench ? `Catégorie: ${formattedCat}` : `Category: ${formattedCat}`);
  }
  
  if (activeFilter) {
    const formattedFilter = activeFilter.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    titleAdditions.push(isFrench ? `Filtre: ${formattedFilter}` : `Filter: ${formattedFilter}`);
  }

  if (activeSort) {
    const formattedSort = activeSort.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    titleAdditions.push(isFrench ? `Tri: ${formattedSort}` : `Sort: ${formattedSort}`);
  }

  if (pageNum) {
    titleAdditions.push(isFrench ? `Page ${pageNum}` : `Page ${pageNum}`);
  }

  if (titleAdditions.length > 0) {
    finalTitle = `${title} (${titleAdditions.join(' | ')})`;
  }

  // Global Fallback Hierarchy: Page-Specific Description -> Section/Category Default -> Global Site Default
  let baseDescription = description || '';
  
  if (!baseDescription) {
    const section = pathSegments[0] || '';
    if (isFrench) {
      if (section === 'services') {
        baseDescription = "Découvrez nos services spécialisés d'agence digitale pour hôtels et riads au Maroc : création de site internet et publicité payante.";
      } else if (section === 'realisations' || section === 'work') {
        baseDescription = "Explorez nos réalisations et études de cas de succès de marketing d'hôtels, de riads et de prestataires touristiques au Maroc.";
      } else if (section === 'blog') {
        baseDescription = "Lisez nos guides et articles de marketing hôtelier, de référencement de riads et de stratégies d'augmentation des réservations directes.";
      } else {
        baseDescription = "Agence digitale à haute performance spécialisée dans la création de sites web et publicités Google Ads/Meta pour hôtels, riads et tourisme.";
      }
    } else {
      if (section === 'services') {
        baseDescription = "Explore our specialized digital agency services for hotels and riads: direct-booking website design, Google Ads, and Meta campaigns.";
      } else if (section === 'work') {
        baseDescription = "Browse our latest case studies and success stories of tourism marketing, hotel web design, and direct booking campaigns.";
      } else if (section === 'blog') {
        baseDescription = "Read our expert guide on hospitality marketing, local SEO for riads, direct bookings optimization, and hotel digital strategy.";
      } else {
        baseDescription = "High-performance tourism digital agency. Custom direct-booking websites, Google Ads, Meta Ads, and TripAdvisor ads for hotels & riads.";
      }
    }
  }

  // Ensure character limit optimizations (120–158 characters) to prevent truncation in SERPs
  let finalDescription = baseDescription.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

  // Programmatically append pagination/filter modifiers to guarantee 100% uniqueness per URL state
  const descAdditions: string[] = [];
  if (activeCategory) {
    descAdditions.push(isFrench ? `catégorie ${activeCategory}` : `category ${activeCategory}`);
  }
  if (activeFilter) {
    descAdditions.push(isFrench ? `filtre ${activeFilter}` : `filter ${activeFilter}`);
  }
  if (pageNum) {
    descAdditions.push(isFrench ? `page ${pageNum}` : `page ${pageNum}`);
  }

  if (descAdditions.length > 0) {
    const suffix = isFrench 
      ? ` (Consultez la sélection ${descAdditions.join(', ')})` 
      : ` (View selection for ${descAdditions.join(', ')})`;
    finalDescription = `${finalDescription}${suffix}`;
  }

  // If description is too short, programmatically append high-converting Call To Action (CTA) to hit the 120-158 length sweet spot
  if (finalDescription.length < 120) {
    const cta = isFrench
      ? " Obtenez un devis gratuit et augmentez vos réservations en ligne !"
      : " Get a free direct booking audit and custom quote for your business today!";
    
    if (finalDescription.length + cta.length <= 158) {
      finalDescription = `${finalDescription}${cta}`;
    } else {
      const remainingSpace = 158 - finalDescription.length - 4;
      if (remainingSpace > 15) {
        finalDescription = `${finalDescription} ${cta.substring(0, remainingSpace).trim()}...`;
      }
    }
  }

  // Final length sanity limit check - truncate cleanly at word boundary if over 158 characters
  if (finalDescription.length > 158) {
    const truncated = finalDescription.substring(0, 155);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 100) {
      finalDescription = `${truncated.substring(0, lastSpace).trim()}...`;
    } else {
      finalDescription = `${truncated.trim()}...`;
    }
  }

  // Canonical URLs and alternate language links (strictly preserve page parameters, but canonicalize sorting/filters)
  const pageParam = pageNum ? `?page=${pageNum}` : '';
  const currentUrl = `${siteUrl}${currentPath === '/' ? '' : currentPath}${pageParam}`;
  const enUrl = `${siteUrl}${enPath === '/' ? '' : enPath}${pageParam}`;
  const frUrl = `${siteUrl}${frPath === '/' ? '' : frPath}${pageParam}`;

  // Update HTML lang attribute
  React.useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Urunk" />
      <meta property="og:locale" content={isFrench ? "fr_FR" : "en_US"} />
      <meta property="og:image" content={image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`} />
      
      {/* Canonical and Hreflang */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={frUrl} />
      
      {finalSchema.length > 0 && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(finalSchema) 
          }} 
        />
      )}
    </Helmet>
  );
}
