import * as fs from 'fs';
import * as path from 'path';
import { blogPostsEN } from './src/data/blogPostsEN';
import { blogPostsFR } from './src/data/blogPostsFR';
import { caseStudies } from './src/data/caseStudies';
import { blogSlugMap, caseStudySlugMap, blogSlugMapFRtoEN } from './src/data/slugMappings';
import { matrixRelations } from './src/data/matrixRelations';

const BASE_URL = 'https://urunk.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD

// Core static page pairs (French path at root -> English path under /en/)
const CORE_PAGES = [
  { fr: '/', en: '/en', changefreq: 'weekly', priority: '1.0' },
  { fr: '/a-propos', en: '/en/about', changefreq: 'monthly', priority: '0.8' },
  { fr: '/tarifs', en: '/en/pricing', changefreq: 'monthly', priority: '0.8' },
  { fr: '/services', en: '/en/services', changefreq: 'weekly', priority: '0.9' },
  { fr: '/realisations', en: '/en/work', changefreq: 'monthly', priority: '0.8' },
  { fr: '/blog', en: '/en/blog', changefreq: 'weekly', priority: '0.8' },
  { fr: '/faq', en: '/en/faq', changefreq: 'monthly', priority: '0.5' },
  { fr: '/contact', en: '/en/contact', changefreq: 'monthly', priority: '0.8' },
  { fr: '/politique-de-confidentialite', en: '/en/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { fr: '/conditions-generales', en: '/en/terms-of-service', changefreq: 'yearly', priority: '0.3' },
  { fr: '/plan-du-site', en: '/en/sitemap', changefreq: 'monthly', priority: '0.4' },
  
  // Core Services
  { fr: '/creation-site-web', en: '/en/services/website-design', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/creation-site-web', en: '/en/services/website-design', changefreq: 'monthly', priority: '0.9' },
  { fr: '/agence-web-maroc', en: '/en/web-design-morocco', changefreq: 'monthly', priority: '0.9' },
  { fr: '/agence-web-casablanca', en: '/en/web-design-casablanca', changefreq: 'monthly', priority: '0.9' },
  { fr: '/agence-seo-maroc', en: '/en/seo-agency-morocco', changefreq: 'monthly', priority: '0.9' },
  { fr: '/agence-seo-casablanca', en: '/en/seo-agency-casablanca', changefreq: 'monthly', priority: '0.9' },
  { fr: '/seo-hotel', en: '/en/hotel-seo', changefreq: 'monthly', priority: '0.9' },
  { fr: '/marketing-digital-hotelier', en: '/en/hotel-digital-marketing', changefreq: 'monthly', priority: '0.9' },
  { fr: '/site-web-hotel', en: '/en/hotel-website-design', changefreq: 'monthly', priority: '0.9' },
  { fr: '/reservation-directe', en: '/en/direct-booking', changefreq: 'monthly', priority: '0.9' },
  { fr: '/google-ads-maroc', en: '/en/google-ads-morocco', changefreq: 'monthly', priority: '0.9' },
  { fr: '/referencement-local-casablanca', en: '/en/local-seo-casablanca', changefreq: 'monthly', priority: '0.9' },
  { fr: '/seo-riad-marrakech', en: '/en/riad-seo-marrakech', changefreq: 'monthly', priority: '0.9' },
  { fr: '/site-web-riad-marrakech', en: '/en/riad-website-design-marrakech', changefreq: 'monthly', priority: '0.9' },

  // Services sub-pages
  { fr: '/services/gestion-google-ads', en: '/en/services/google-ads', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/gestion-publicites-meta', en: '/en/services/meta-ads', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/tripadvisor-ads', en: '/en/services/tripadvisor-ads', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/bundle-site-ads', en: '/en/services/bundle-site-ads', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/ai-seo-optimization', en: '/en/services/ai-seo-optimization', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/wordpress-seo', en: '/en/services/wordpress-seo', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/ecommerce-seo', en: '/en/services/ecommerce-seo', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/google-business-profile', en: '/en/services/google-business-profile', changefreq: 'monthly', priority: '0.9' },
  { fr: '/services/local-seo-morocco', en: '/en/services/local-seo-morocco', changefreq: 'monthly', priority: '0.9' },

  // Industry landing pages
  { fr: '/secteurs/hotels-resorts', en: '/en/industries/hotels-resorts', changefreq: 'monthly', priority: '0.8' },
  { fr: '/secteurs/riads-maisons-hotes', en: '/en/industries/riads-boutique-hotels', changefreq: 'monthly', priority: '0.8' },
  { fr: '/secteurs/tour-operateurs', en: '/en/industries/tour-operators', changefreq: 'monthly', priority: '0.8' },
  { fr: '/secteurs/restaurants-traiteurs', en: '/en/industries/restaurants-catering', changefreq: 'monthly', priority: '0.8' },
  { fr: '/secteurs/pme-entreprises', en: '/en/industries/corporate-smes', changefreq: 'monthly', priority: '0.8' },

  // Location landing pages
  { fr: '/zones', en: '/en/locations', changefreq: 'monthly', priority: '0.8' },
  { fr: '/zones/maroc', en: '/en/locations/morocco', changefreq: 'monthly', priority: '0.8' },
  { fr: '/zones/casablanca', en: '/en/locations/casablanca', changefreq: 'monthly', priority: '0.8' },
  { fr: '/zones/marrakech', en: '/en/locations/marrakech', changefreq: 'monthly', priority: '0.8' },
  { fr: '/zones/rabat', en: '/en/locations/rabat', changefreq: 'monthly', priority: '0.8' },
  { fr: '/zones/agadir', en: '/en/locations/agadir', changefreq: 'monthly', priority: '0.8' }
];

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// 1. Generate core pages sitemap (Combined FR + EN)
function generatePagesSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  const seenUrls = new Set<string>();

  for (const page of CORE_PAGES) {
    const frUrl = page.fr === '/' ? `${BASE_URL}/` : `${BASE_URL}${page.fr}`;
    const enUrl = `${BASE_URL}${page.en}`;

    // Add French version (Primary/Root)
    if (!seenUrls.has(frUrl)) {
      seenUrls.add(frUrl);
      xml += `  <url>\n`;
      xml += `    <loc>${frUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    // Add English version (Secondary /en/)
    if (!seenUrls.has(enUrl)) {
      seenUrls.add(enUrl);
      xml += `  <url>\n`;
      xml += `    <loc>${enUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  // Add Live Matrix Relations (curated in src/data/matrixRelations.ts)
  const liveMatrixRelations = matrixRelations.filter(r => r.status === 'live');
  for (const rel of liveMatrixRelations) {
    const frUrl = `${BASE_URL}/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`;
    const enUrl = `${BASE_URL}/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`;

    if (!seenUrls.has(enUrl)) {
      seenUrls.add(enUrl);
      xml += `  <url>\n`;
      xml += `    <loc>${enUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }
    
    if (!seenUrls.has(frUrl)) {
      seenUrls.add(frUrl);
      xml += `  <url>\n`;
      xml += `    <loc>${frUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;
  fs.writeFileSync(path.join('public', 'pages-sitemap.xml'), xml, 'utf8');
  console.log('Successfully generated public/pages-sitemap.xml');
}

// 1b. Generate French pages sitemap specifically
function generateFrenchPagesSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  const seenUrls = new Set<string>();

  for (const page of CORE_PAGES) {
    const frUrl = page.fr === '/' ? `${BASE_URL}/` : `${BASE_URL}${page.fr}`;
    const enUrl = `${BASE_URL}${page.en}`;

    if (!seenUrls.has(frUrl)) {
      seenUrls.add(frUrl);
      xml += `  <url>\n`;
      xml += `    <loc>${frUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  // Include Live French Matrix Relations
  const liveMatrixRelations = matrixRelations.filter(r => r.status === 'live');
  for (const rel of liveMatrixRelations) {
    const frUrl = `${BASE_URL}/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`;
    const enUrl = `${BASE_URL}/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`;

    if (!seenUrls.has(frUrl)) {
      seenUrls.add(frUrl);
      xml += `  <url>\n`;
      xml += `    <loc>${frUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;
  fs.writeFileSync(path.join('public', 'pages-sitemap-fr.xml'), xml, 'utf8');
  console.log('Successfully generated public/pages-sitemap-fr.xml');
}

// 2. Generate posts and case studies sitemap (Combined FR + EN)
function generatePostsSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // Add Case Studies (Work / Réalisations)
  for (const study of caseStudies) {
    const enSlug = study.slug;
    const frSlug = study.frSlug || caseStudySlugMap[enSlug] || enSlug;

    const enUrl = `${BASE_URL}/en/work/${enSlug}`;
    const frUrl = `${BASE_URL}/realisations/${frSlug}`;

    // Add French version (Primary)
    xml += `  <url>\n`;
    xml += `    <loc>${frUrl}</loc>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;

    // Add English version (Secondary)
    xml += `  <url>\n`;
    xml += `    <loc>${enUrl}</loc>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  // Add Blog Posts
  for (const postFR of blogPostsFR) {
    const frSlug = postFR.slug;
    const enSlug = blogSlugMapFRtoEN[frSlug];

    const frUrl = `${BASE_URL}/blog/${frSlug}`;
    const hasEn = !!enSlug && blogPostsEN.some(p => p.slug === enSlug);
    const enUrl = hasEn ? `${BASE_URL}/en/blog/${enSlug}` : null;

    // Add French version (Primary)
    xml += `  <url>\n`;
    xml += `    <loc>${frUrl}</loc>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
    if (enUrl) {
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    }
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;

    // Add English version if exists
    if (enUrl) {
      xml += `  <url>\n`;
      xml += `    <loc>${enUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  // Check if there are any orphan English blog posts
  const mappedEnSlugs = new Set(Object.values(blogSlugMapFRtoEN));
  for (const postEN of blogPostsEN) {
    if (!mappedEnSlugs.has(postEN.slug)) {
      const enUrl = `${BASE_URL}/en/blog/${postEN.slug}`;
      xml += `  <url>\n`;
      xml += `    <loc>${enUrl}</loc>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;
  fs.writeFileSync(path.join('public', 'posts-sitemap.xml'), xml, 'utf8');
  console.log('Successfully generated public/posts-sitemap.xml');
}

// 2b. Generate French posts and case studies sitemap specifically
function generateFrenchPostsSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // Add Case Studies (Work) - French version
  for (const study of caseStudies) {
    const enSlug = study.slug;
    const frSlug = study.frSlug || caseStudySlugMap[enSlug] || enSlug;

    const enUrl = `${BASE_URL}/en/work/${enSlug}`;
    const frUrl = `${BASE_URL}/realisations/${frSlug}`;

    xml += `  <url>\n`;
    xml += `    <loc>${frUrl}</loc>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  // Add French Blog Posts
  for (const postFR of blogPostsFR) {
    const frSlug = postFR.slug;
    const enSlug = blogSlugMapFRtoEN[frSlug];

    const frUrl = `${BASE_URL}/blog/${frSlug}`;
    const enUrl = enSlug ? `${BASE_URL}/en/blog/${enSlug}` : null;

    xml += `  <url>\n`;
    xml += `    <loc>${frUrl}</loc>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />\n`;
    if (enUrl) {
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    }
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl}" />\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  fs.writeFileSync(path.join('public', 'posts-sitemap-fr.xml'), xml, 'utf8');
  console.log('Successfully generated public/posts-sitemap-fr.xml');
}

// 3. Generate images sitemap (Combined)
function generateImagesSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // Add homepage images
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/</loc>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>${BASE_URL}/logo.png</image:loc>\n`;
  xml += `      <image:title>Logo Urunk</image:title>\n`;
  xml += `      <image:caption>Logo Agence Digitale Hôtellerie Urunk</image:caption>\n`;
  xml += `    </image:image>\n`;
  xml += `  </url>\n`;

  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/en</loc>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>${BASE_URL}/logo.png</image:loc>\n`;
  xml += `      <image:title>Urunk Logo</image:title>\n`;
  xml += `      <image:caption>Urunk Hospitality Digital Agency Logo</image:caption>\n`;
  xml += `    </image:image>\n`;
  xml += `  </url>\n`;

  // Add Case studies images
  for (const study of caseStudies) {
    if (study.heroImage) {
      const enUrl = `${BASE_URL}/en/work/${study.slug}`;
      const frSlug = study.frSlug || caseStudySlugMap[study.slug] || study.slug;
      const frUrl = `${BASE_URL}/realisations/${frSlug}`;

      const titleEscaped = escapeXml(study.topicName || study.slug);
      const descEscaped = escapeXml(study.title);
      const absoluteImgUrl = study.heroImage.startsWith('/') ? `${BASE_URL}${study.heroImage}` : study.heroImage;

      xml += `  <url>\n`;
      xml += `    <loc>${frUrl}</loc>\n`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(absoluteImgUrl)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(study.frTopicName || titleEscaped)} Exemple de Stratégie</image:title>\n`;
      xml += `      <image:caption>${escapeXml(study.frTitle || descEscaped)}</image:caption>\n`;
      xml += `    </image:image>\n`;
      xml += `  </url>\n`;

      xml += `  <url>\n`;
      xml += `    <loc>${enUrl}</loc>\n`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(absoluteImgUrl)}</image:loc>\n`;
      xml += `      <image:title>${titleEscaped} Strategy Example</image:title>\n`;
      xml += `      <image:caption>${descEscaped}</image:caption>\n`;
      xml += `    </image:image>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;
  fs.writeFileSync(path.join('public', 'images-sitemap.xml'), xml, 'utf8');
  console.log('Successfully generated public/images-sitemap.xml');
}

// 3b. Generate French images sitemap specifically
function generateFrenchImagesSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/</loc>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>${BASE_URL}/logo.png</image:loc>\n`;
  xml += `      <image:title>Logo Urunk</image:title>\n`;
  xml += `      <image:caption>Logo Agence Digitale Hôtelière Urunk</image:caption>\n`;
  xml += `    </image:image>\n`;
  xml += `  </url>\n`;

  for (const study of caseStudies) {
    if (study.heroImage) {
      const frSlug = study.frSlug || caseStudySlugMap[study.slug] || study.slug;
      const frUrl = `${BASE_URL}/realisations/${frSlug}`;

      const titleEscaped = escapeXml(study.frTopicName || study.topicName || study.slug);
      const descEscaped = escapeXml(study.frTitle || study.title);
      const absoluteImgUrl = study.heroImage.startsWith('/') ? `${BASE_URL}${study.heroImage}` : study.heroImage;

      xml += `  <url>\n`;
      xml += `    <loc>${frUrl}</loc>\n`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(absoluteImgUrl)}</image:loc>\n`;
      xml += `      <image:title>${titleEscaped} Exemple de Stratégie</image:title>\n`;
      xml += `      <image:caption>${descEscaped}</image:caption>\n`;
      xml += `    </image:image>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;
  fs.writeFileSync(path.join('public', 'images-sitemap-fr.xml'), xml, 'utf8');
  console.log('Successfully generated public/images-sitemap-fr.xml');
}

// 4. Generate French Master Sitemap Index (sitemap-fr.xml)
function generateFrenchSitemapIndex() {
  const sitemaps = [
    'pages-sitemap-fr.xml',
    'posts-sitemap-fr.xml',
    'images-sitemap-fr.xml'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const sm of sitemaps) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${BASE_URL}/${sm}</loc>\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }

  xml += `</sitemapindex>\n`;

  fs.writeFileSync(path.join('public', 'sitemap-fr.xml'), xml, 'utf8');
  console.log('Successfully generated public/sitemap-fr.xml as French master sitemap index');
}

// 5. Generate global sitemap index files
function generateSitemapIndex() {
  const sitemaps = [
    'pages-sitemap.xml',
    'pages-sitemap-fr.xml',
    'posts-sitemap.xml',
    'posts-sitemap-fr.xml',
    'images-sitemap.xml',
    'images-sitemap-fr.xml'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const sm of sitemaps) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${BASE_URL}/${sm}</loc>\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }

  xml += `</sitemapindex>\n`;

  // Write both sitemap.xml and sitemap-index.xml to satisfy requirements and standards
  fs.writeFileSync(path.join('public', 'sitemap.xml'), xml, 'utf8');
  fs.writeFileSync(path.join('public', 'sitemap-index.xml'), xml, 'utf8');
  console.log('Successfully generated public/sitemap.xml and public/sitemap-index.xml as index sitemaps');
}

function run() {
  console.log('Starting dynamic sitemap generation...');
  try {
    generatePagesSitemap();
    generateFrenchPagesSitemap();
    generatePostsSitemap();
    generateFrenchPostsSitemap();
    generateImagesSitemap();
    generateFrenchImagesSitemap();
    generateFrenchSitemapIndex();
    generateSitemapIndex();
    console.log('Sitemap generation completed successfully!');
  } catch (error) {
    console.error('Error generating sitemaps:', error);
    process.exit(1);
  }
}

run();
