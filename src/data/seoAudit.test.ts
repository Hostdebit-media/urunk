import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  normalizeRoutePath,
  getEquivalentRoute,
  hasReciprocalTranslation,
} from './slugMappings';
import { servicesData, extractNumericMadPrice } from './servicesData';
import { blogPostsFR } from './blogPostsFR';

test('extractNumericMadPrice extracts first MAD figure without concatenating secondary retainers', () => {
  assert.equal(extractNumericMadPrice('Starting at 12,000 MAD'), '12000');
  assert.equal(extractNumericMadPrice('À partir de 12 000 MAD (paiement unique)'), '12000');
  assert.equal(extractNumericMadPrice('16 000 MAD + 4 000 MAD/mois'), '16000');
  assert.equal(extractNumericMadPrice('From 5,000 MAD / month'), '5000');
  assert.equal(extractNumericMadPrice('Sur devis personnalisé'), null);
  assert.equal(extractNumericMadPrice(''), null);
});

test('normalizeRoutePath strips trailing slashes and query/hash fragments cleanly', () => {
  assert.equal(normalizeRoutePath('/'), '/');
  assert.equal(normalizeRoutePath('/site-web-hotel/'), '/site-web-hotel');
  assert.equal(normalizeRoutePath('/en/riad-seo-marrakech/?utm=test#faq'), '/en/riad-seo-marrakech');
});

test('slugMappings maintains strict bidirectional reciprocity for all hospitality target URLs', () => {
  const reciprocalPairs: [string, string][] = [
    ['/', '/en'],
    ['/site-web-hotel', '/en/hotel-website-design'],
    ['/services/creation-site-web', '/en/services/website-design'],
    ['/seo-riad-marrakech', '/en/riad-seo-marrakech'],
    ['/seo-hotel', '/en/hotel-seo'],
    ['/marketing-digital-hotelier', '/en/hotel-digital-marketing'],
    ['/services/google-business-profile', '/en/services/google-business-profile'],
    ['/reservation-directe', '/en/direct-booking'],
  ];

  for (const [frPath, enPath] of reciprocalPairs) {
    assert.equal(getEquivalentRoute(frPath), enPath, `Expected ${frPath} -> ${enPath}`);
    assert.equal(getEquivalentRoute(enPath), frPath, `Expected ${enPath} -> ${frPath}`);
    assert.equal(hasReciprocalTranslation(frPath), true, `Expected ${frPath} to be reciprocal`);
    assert.equal(hasReciprocalTranslation(enPath), true, `Expected ${enPath} to be reciprocal`);
  }
});

test('non-reciprocal routes fall back safely without claiming reciprocal hreflang', () => {
  assert.equal(getEquivalentRoute('/creation-site-web'), '/en/services/website-design');
  assert.equal(hasReciprocalTranslation('/creation-site-web'), false);

  assert.equal(getEquivalentRoute('/blog/article-uniquement-francophone'), '/en/blog');
  assert.equal(hasReciprocalTranslation('/blog/article-uniquement-francophone'), false);
});

test('all ServiceLandingPage-backed tracked question entries contain complete GEO/AEO blocks and valid pricing', () => {
  const trackedTargets: { key: string; lang: 'fr' | 'en'; questionId: string }[] = [
    { key: 'hotel-website-design', lang: 'fr', questionId: 'A1' },
    { key: 'riad-seo-marrakech', lang: 'en', questionId: 'B1' },
    { key: 'hotel-seo', lang: 'en', questionId: 'B2' },
    { key: 'hotel-digital-marketing', lang: 'fr', questionId: 'C1/C2' },
    { key: 'google-business-profile-optimization', lang: 'en', questionId: 'D1/D2' },
    { key: 'direct-booking', lang: 'fr', questionId: 'E1/E2' },
  ];

  for (const target of trackedTargets) {
    const entry = servicesData[target.key]?.[target.lang];
    assert.ok(entry, `Missing servicesData[${target.key}][${target.lang}] for ${target.questionId}`);

    assert.ok(entry.directAnswer, `Missing directAnswer for ${target.questionId}`);
    assert.ok(entry.directAnswer.question.length > 20);
    assert.ok(entry.directAnswer.answer.length > 80);

    assert.ok(entry.comparisonTable, `Missing comparisonTable for ${target.questionId}`);
    assert.ok(entry.comparisonTable.headers.length >= 4);
    assert.ok(entry.comparisonTable.rows.length >= 3);
    for (const row of entry.comparisonTable.rows) {
      assert.equal(
        row.length,
        entry.comparisonTable.headers.length,
        `Mismatched row column count in ${target.key}.${target.lang}`
      );
    }

    assert.ok(entry.evaluationCriteria, `Missing evaluationCriteria for ${target.questionId}`);
    assert.ok(entry.evaluationCriteria.items.length >= 4);

    assert.ok(entry.faqs.length >= 5, `Expected >= 5 FAQs for ${target.questionId}`);
    assert.ok(entry.relatedLinks && entry.relatedLinks.length >= 4, `Expected >= 4 relatedLinks for ${target.questionId}`);
    for (const link of entry.relatedLinks) {
      assert.ok(link.to.startsWith('/'), `Internal link must start with / in ${target.key}.${target.lang}: ${link.to}`);
    }

    const numericPrice = extractNumericMadPrice(entry.investmentPrice);
    assert.ok(numericPrice && /^\d+$/.test(numericPrice), `Expected clean numeric MAD price for ${target.key}.${target.lang}`);
  }
});

test('servicesData contains zero unverified #1 ranking guarantees, 20k custom-tier contradictions, or unverified Spanish SEO claims', () => {
  const serialized = JSON.stringify(servicesData);
  assert.equal(/rank #1|#1 ranking|première place garantie|numéro 1 garanti/i.test(serialized), false);
  const hospitalityWebKeys = ['hotel-website-design', 'creation-site-web-prix', 'riad-website-design-marrakech', 'direct-booking'];
  for (const k of hospitalityWebKeys) {
    assert.equal(/20,000 MAD|20 000 MAD/i.test(JSON.stringify(servicesData[k])), false, `Unexpected 20k MAD in ${k}`);
  }
  assert.equal(/optional ES|FR\/EN\/ES/i.test(serialized), false);
});

test('all relatedLinks across servicesData resolve to valid declared routes in App.tsx or blog/case-study slugs', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const appTsx = fs.readFileSync(path.resolve('src/App.tsx'), 'utf8');

  const staticRoutes = new Set<string>(['/']);
  const frBlockMatch = appTsx.match(/<Route path="\/" element=\{<Layout \/>\}>([\s\S]*?)<\/Route>\s*\{\/\* English Routes/);
  const enBlockMatch = appTsx.match(/<Route path="en" element=\{<Layout \/>\}>([\s\S]*?)<\/Route>\s*\{\/\* Aliases/);
  assert.ok(frBlockMatch && enBlockMatch, 'Failed to parse FR/EN route blocks in App.tsx');

  for (const m of frBlockMatch[1].matchAll(/<Route\s+path="([^":*]+)"/g)) {
    staticRoutes.add(`/${m[1]}`);
  }
  staticRoutes.add('/en');
  for (const m of enBlockMatch[1].matchAll(/<Route\s+path="([^":*]+)"/g)) {
    staticRoutes.add(`/en/${m[1]}`);
  }

  const { blogPostsEN } = await import('./blogPosts');
  const { blogPostsFR } = await import('./blogPostsFR');
  const { caseStudies } = await import('./caseStudies');
  for (const p of blogPostsFR) staticRoutes.add(`/blog/${p.slug}`);
  for (const p of blogPostsEN) staticRoutes.add(`/en/blog/${p.slug}`);
  for (const s of caseStudies) {
    staticRoutes.add(`/en/work/${s.slug}`);
    staticRoutes.add(`/realisations/${s.frSlug || s.slug}`);
  }

  for (const [serviceKey, locales] of Object.entries(servicesData)) {
    for (const lang of ['en', 'fr'] as const) {
      const links = locales[lang]?.relatedLinks ?? [];
      for (const link of links) {
        assert.ok(
          staticRoutes.has(link.to),
          `Broken relatedLinks target "${link.to}" in servicesData.${serviceKey}.${lang}`
        );
      }
    }
  }
});

test('prerendered dist/ HTML files for all 7 target URLs have 1 canonical, reciprocal hreflang, valid deduplicated JSON-LD, and visible FAQ parity', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  if (!fs.existsSync(path.resolve('dist/index.html'))) {
    return;
  }

  const targetPages = [
    { route: '/', file: 'dist/index.html', lang: 'fr', pair: 'https://urunk.com/en' },
    { route: '/en', file: 'dist/en/index.html', lang: 'en', pair: 'https://urunk.com/' },
    { route: '/site-web-hotel', file: 'dist/site-web-hotel/index.html', lang: 'fr', pair: 'https://urunk.com/en/hotel-website-design' },
    { route: '/services/creation-site-web', file: 'dist/services/creation-site-web/index.html', lang: 'fr', pair: 'https://urunk.com/en/services/website-design' },
    { route: '/marketing-digital-hotelier', file: 'dist/marketing-digital-hotelier/index.html', lang: 'fr', pair: 'https://urunk.com/en/hotel-digital-marketing' },
    { route: '/reservation-directe', file: 'dist/reservation-directe/index.html', lang: 'fr', pair: 'https://urunk.com/en/direct-booking' },
    { route: '/en/riad-seo-marrakech', file: 'dist/en/riad-seo-marrakech/index.html', lang: 'en', pair: 'https://urunk.com/seo-riad-marrakech' },
    { route: '/en/hotel-seo', file: 'dist/en/hotel-seo/index.html', lang: 'en', pair: 'https://urunk.com/seo-hotel' },
    { route: '/en/services/google-business-profile', file: 'dist/en/services/google-business-profile/index.html', lang: 'en', pair: 'https://urunk.com/services/google-business-profile' },
  ];

  const seenTitles = new Set<string>();
  const seenDescs = new Set<string>();

  for (const item of targetPages) {
    const fullPath = path.resolve(item.file);
    assert.ok(fs.existsSync(fullPath), `Missing prerendered HTML at ${item.file}`);
    const html = fs.readFileSync(fullPath, 'utf8');

    assert.ok(html.includes(`<html lang="${item.lang}">`), `Wrong html lang in ${item.file}`);

    const titleMatches = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)];
    assert.equal(titleMatches.length, 1, `Expected 1 <title> in ${item.file}, found ${titleMatches.length}`);
    const titleText = titleMatches[0][1].trim();
    assert.ok(!seenTitles.has(titleText), `Duplicate <title> across target pages: ${titleText}`);
    seenTitles.add(titleText);

    const descMatches = [...html.matchAll(/<meta\s+name="description"[^>]*content="([^"]*)"/gi)];
    assert.equal(descMatches.length, 1, `Expected 1 meta description in ${item.file}, found ${descMatches.length}`);
    const descText = descMatches[0][1].trim();
    assert.ok(!seenDescs.has(descText), `Duplicate meta description across target pages: ${descText}`);
    seenDescs.add(descText);

    const canonicalMatches = [...html.matchAll(/<link\s+rel="canonical"[^>]*href="([^"]*)"/gi)];
    assert.equal(canonicalMatches.length, 1, `Expected 1 canonical in ${item.file}, found ${canonicalMatches.length}`);
    const expectedCanonical = item.route === '/' ? 'https://urunk.com/' : `https://urunk.com${item.route}`;
    assert.equal(canonicalMatches[0][1], expectedCanonical);

    assert.ok(html.includes(`href="${item.pair}"`), `Missing reciprocal hreflang link to ${item.pair} in ${item.file}`);

    const ldScripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    assert.equal(ldScripts.length, 1, `Expected exactly 1 static JSON-LD script block in ${item.file}, found ${ldScripts.length}`);

    const parsed = JSON.parse(ldScripts[0][1]);
    const nodes = Array.isArray(parsed) ? parsed : [parsed];
    const typeCounts = new Map<string, number>();
    for (const node of nodes) {
      const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
      for (const t of types) {
        typeCounts.set(t, (typeCounts.get(t) || 0) + 1);
      }
      if (node['@type'] === 'FAQPage' && Array.isArray(node.mainEntity)) {
        const bodyHtml = html.slice(html.indexOf('<body'));
        for (const qNode of node.mainEntity) {
          const escapedQ = String(qNode.name)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
          assert.ok(
            bodyHtml.includes(qNode.name) || bodyHtml.includes(escapedQ),
            `FAQPage question missing from visible static body in ${item.file}: "${qNode.name}"`
          );
        }
      }
    }

    for (const singletonType of ['Service', 'FAQPage', 'BreadcrumbList', 'WebSite', 'Organization']) {
      const count = typeCounts.get(singletonType) || 0;
      assert.ok(count <= 1, `Duplicate ${singletonType} JSON-LD (${count}) in ${item.file}`);
    }
  }
});

test('isCuratedMatrixPath allows strictly the 38 curated live 2-segment routes and excludes all 96 uncurated 3-segment routes', async () => {
  const { matrixRelations, isCuratedMatrixPath } = await import('./matrixRelations');

  const liveRelations = matrixRelations.filter((r) => r.status === 'live');
  assert.equal(liveRelations.length, 19);

  for (const rel of liveRelations) {
    const frPath = `/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`;
    const enPath = `/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`;
    assert.equal(isCuratedMatrixPath(frPath), true, `Expected curated FR path ${frPath} to be indexable`);
    assert.equal(isCuratedMatrixPath(`${frPath}/`), true);
    assert.equal(isCuratedMatrixPath(enPath), true, `Expected curated EN path ${enPath} to be indexable`);
  }

  const locs = ['marrakech', 'casablanca', 'agadir', 'rabat'];
  const inds = ['hotels-resorts', 'riads-boutique-hotels', 'restaurants-catering'];
  const srvs = ['hotel-seo', 'hotel-website-design', 'google-ads-morocco', 'direct-booking'];

  let uncuratedCount = 0;
  for (const loc of locs) {
    for (const ind of inds) {
      for (const srv of srvs) {
        assert.equal(isCuratedMatrixPath(`/expertise/${loc}/${ind}/${srv}`), false);
        assert.equal(isCuratedMatrixPath(`/en/expertise/${loc}/${ind}/${srv}`), false);
        uncuratedCount += 2;
      }
    }
  }
  assert.equal(uncuratedCount, 96);
  assert.equal(isCuratedMatrixPath('/expertise/hotel-seo/marrakech'), false);
});

test('zero references to deprecated formsubmit.co remain in application code, Worker, or CSP headers', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');

  function collectFiles(dir: string): string[] {
    const out: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        out.push(...collectFiles(full));
      } else if (/\.(?:ts|tsx|js|html|css|jsonc?)$/.test(entry.name) && !entry.name.endsWith('.test.ts')) {
        out.push(full);
      }
    }
    return out;
  }

  const filesToScan = [
    ...collectFiles(path.resolve('src')),
    path.resolve('worker.ts'),
    path.resolve('public/_headers'),
    path.resolve('index.html'),
  ];

  for (const file of filesToScan) {
    const content = fs.readFileSync(file, 'utf8');
    assert.equal(
      content.toLowerCase().includes('formsubmit.co'),
      false,
      `Found leftover formsubmit.co reference in ${file}`
    );
  }
});

test('post-build dist/ enforces index,follow on all 38 curated matrix routes and noindex,follow without hreflang or sitemap entries on all 96 uncurated 3-segment routes', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  if (!fs.existsSync(path.resolve('dist/index.html'))) {
    return;
  }

  const { matrixRelations } = await import('./matrixRelations');
  const pagesSitemap = fs.readFileSync(path.resolve('public/pages-sitemap.xml'), 'utf8');
  const pagesSitemapFr = fs.readFileSync(path.resolve('public/pages-sitemap-fr.xml'), 'utf8');
  const postsSitemap = fs.readFileSync(path.resolve('public/posts-sitemap.xml'), 'utf8');

  // 1. Verify all 38 curated live 2-segment routes
  for (const rel of matrixRelations.filter((r) => r.status === 'live')) {
    const frRoute = `/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`;
    const enRoute = `/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`;

    for (const route of [frRoute, enRoute]) {
      const htmlPath = path.resolve(`dist${route}/index.html`);
      assert.ok(fs.existsSync(htmlPath), `Missing prerendered curated route: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');
      assert.ok(
        html.includes('content="index, follow, max-image-preview:large"'),
        `Curated route ${route} should be index, follow`
      );
      assert.ok(
        html.includes('hreflang="fr"') && html.includes('hreflang="en"'),
        `Curated route ${route} should retain reciprocal hreflang`
      );
      assert.ok(
        pagesSitemap.includes(`<loc>https://urunk.com${route}</loc>`),
        `Curated route ${route} missing from pages-sitemap.xml`
      );
    }
  }

  // 2. Verify all 96 uncurated 3-segment routes
  const locs = ['marrakech', 'casablanca', 'agadir', 'rabat'];
  const inds = ['hotels-resorts', 'riads-boutique-hotels', 'restaurants-catering'];
  const srvs = ['hotel-seo', 'hotel-website-design', 'google-ads-morocco', 'direct-booking'];

  let verifiedUncurated = 0;
  for (const loc of locs) {
    for (const ind of inds) {
      for (const srv of srvs) {
        for (const route of [`/expertise/${loc}/${ind}/${srv}`, `/en/expertise/${loc}/${ind}/${srv}`]) {
          const htmlPath = path.resolve(`dist${route}/index.html`);
          assert.ok(fs.existsSync(htmlPath), `Missing prerendered 3-segment route: ${htmlPath}`);
          const html = fs.readFileSync(htmlPath, 'utf8');
          assert.ok(
            html.includes('<meta name="robots" data-static-seo="true" content="noindex, follow" />'),
            `Uncurated route ${route} must emit noindex, follow`
          );
          assert.equal(
            html.includes('hreflang='),
            false,
            `Uncurated noindex route ${route} must not emit hreflang tags`
          );
          assert.equal(
            pagesSitemap.includes(`https://urunk.com${route}`),
            false,
            `Uncurated route ${route} must not appear in pages-sitemap.xml`
          );
          assert.equal(
            pagesSitemapFr.includes(`https://urunk.com${route}`),
            false,
            `Uncurated route ${route} must not appear in pages-sitemap-fr.xml`
          );
          assert.equal(
            postsSitemap.includes(`https://urunk.com${route}`),
            false,
            `Uncurated route ${route} must not appear in posts-sitemap.xml`
          );
          verifiedUncurated++;
        }
      }
    }
  }
  assert.equal(verifiedUncurated, 96);
});

test('worker.ts resolveCanonicalRedirect performs single-hop 301s for .html URLs, legacy /fr/* slugs, and English root splats', async () => {
  const { resolveCanonicalRedirect } = await import('../../worker');

  // Canonical clean routes return null (served directly as 200)
  assert.equal(resolveCanonicalRedirect('/'), null);
  assert.equal(resolveCanonicalRedirect('/tarifs'), null);
  assert.equal(resolveCanonicalRedirect('/en'), null);
  assert.equal(resolveCanonicalRedirect('/en/contact'), null);
  assert.equal(resolveCanonicalRedirect('/sitemap.xml'), null);
  assert.equal(resolveCanonicalRedirect('/api/contact'), null);
  assert.equal(resolveCanonicalRedirect('/404.html'), null);

  // .html duplicate-content prevention (single hop)
  assert.equal(resolveCanonicalRedirect('/index.html'), '/');
  assert.equal(resolveCanonicalRedirect('/tarifs.html'), '/tarifs');
  assert.equal(resolveCanonicalRedirect('/en/contact.html'), '/en/contact');
  assert.equal(resolveCanonicalRedirect('/pricing.html'), '/en/pricing');
  assert.equal(resolveCanonicalRedirect('/fr/pricing.html'), '/tarifs');

  // Legacy /fr/* single-hop resolution to canonical French paths
  assert.equal(resolveCanonicalRedirect('/fr'), '/');
  assert.equal(resolveCanonicalRedirect('/fr/'), '/');
  assert.equal(resolveCanonicalRedirect('/fr/pricing'), '/tarifs');
  assert.equal(resolveCanonicalRedirect('/fr/pricing/'), '/tarifs');
  assert.equal(resolveCanonicalRedirect('/fr/about'), '/a-propos');
  assert.equal(resolveCanonicalRedirect('/fr/locations/marrakech'), '/zones/marrakech');
  assert.equal(resolveCanonicalRedirect('/fr/industries/riads-boutique-hotels'), '/secteurs/riads-maisons-hotes');
  assert.equal(resolveCanonicalRedirect('/fr/services/website-design'), '/services/creation-site-web');
  assert.equal(resolveCanonicalRedirect('/fr/services/gestion-google-ads'), '/google-ads-maroc');

  // Legacy English root & blog slug redirects
  assert.equal(resolveCanonicalRedirect('/industries/hotels-resorts'), '/en/industries/hotels-resorts');
  assert.equal(resolveCanonicalRedirect('/locations/marrakech'), '/en/locations/marrakech');
  assert.equal(resolveCanonicalRedirect('/work/art-house-marrakech'), '/en/work/art-house-marrakech');
  assert.equal(resolveCanonicalRedirect('/blog/pages-atterrissage-haute-conversion-hotels'), '/blog/landing-pages-hotels');
  assert.equal(resolveCanonicalRedirect('/en/blog/high-converting-hotel-landing-pages'), '/en/blog/landing-pages-hotels');
});

test('all indexable prerendered dist/ routes match XML sitemaps 1-to-1 and every FAQPage JSON-LD matches visible body HTML', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  if (!fs.existsSync(path.resolve('dist/index.html'))) {
    return;
  }

  function walkHtml(dir: string, out: string[] = []): string[] {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkHtml(full, out);
      else if (full.endsWith('/index.html') || full.endsWith('\\index.html') || path.relative('dist', full) === 'index.html') {
        out.push(full);
      }
    }
    return out;
  }

  const allIndexHtml = walkHtml(path.resolve('dist'));
  const indexableUrls = new Set<string>();

  for (const file of allIndexHtml) {
    const rel = path.relative(path.resolve('dist'), file).replace(/\\/g, '/');
    const route = rel === 'index.html' ? '/' : `/${rel.slice(0, -11)}`;
    const html = fs.readFileSync(file, 'utf8');
    const isNoindex = /name="robots"[^>]*noindex/i.test(html);
    if (!isNoindex) {
      indexableUrls.add(route === '/' ? 'https://urunk.com/' : `https://urunk.com${route}`);
    }

    // Verify every FAQPage JSON-LD question appears visibly in <body>
    const body = html.slice(Math.max(0, html.indexOf('<body')))
      .replace(/&#x27;|&#39;|&rsquo;|’/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"');
    const ldScripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    for (const m of ldScripts) {
      const parsed = JSON.parse(m[1]);
      const nodes = Array.isArray(parsed) ? parsed : (parsed['@graph'] || [parsed]);
      for (const n of nodes) {
        if (n['@type'] === 'FAQPage' && Array.isArray(n.mainEntity)) {
          for (const q of n.mainEntity) {
            const normQ = String(q.name || '').replace(/’/g, "'");
            assert.ok(body.includes(normQ), `Missing visible FAQ "${q.name}" in ${route}`);
          }
        }
      }
    }
  }

  const sitemapUrls = new Set<string>();
  for (const sm of ['public/pages-sitemap.xml', 'public/posts-sitemap.xml']) {
    const xml = fs.readFileSync(path.resolve(sm), 'utf8');
    for (const m of xml.matchAll(/<loc>(https:\/\/urunk\.com[^<]*)<\/loc>/g)) {
      sitemapUrls.add(m[1]);
    }
  }

  assert.equal(indexableUrls.size, sitemapUrls.size, `Indexable URLs (${indexableUrls.size}) != Sitemap URLs (${sitemapUrls.size})`);
  for (const url of indexableUrls) {
    assert.ok(sitemapUrls.has(url), `Indexable URL missing from XML sitemaps: ${url}`);
  }
});

test('dist/_redirects conforms strictly to Cloudflare _redirects specification with valid numeric status codes', () => {
  const publicRedirectsPath = path.resolve('public/_redirects');
  const distRedirectsPath = path.resolve('dist/_redirects');
  assert.ok(fs.existsSync(publicRedirectsPath), 'public/_redirects must exist');
  assert.ok(fs.existsSync(distRedirectsPath), 'dist/_redirects must exist after build');

  const publicContent = fs.readFileSync(publicRedirectsPath, 'utf8');
  const distContent = fs.readFileSync(distRedirectsPath, 'utf8');
  assert.equal(distContent, publicContent, 'dist/_redirects must match public/_redirects');

  const permittedStatuses = new Set([200, 301, 302, 303, 307, 308]);
  const seenSources = new Set<string>();
  let staticRules = 0;
  let dynamicRules = 0;
  let seenDynamicRule = false;

  const lines = distContent.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const lineNo = i + 1;
    const trimmed = lines[i].trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    assert.ok(trimmed.length <= 2000, `Line ${lineNo} exceeds Cloudflare 2000-char limit`);

    const tokens = trimmed.replace(/\s+#.*$/, '').split(/\s+/);
    assert.ok(
      tokens.length === 2 || tokens.length === 3,
      `Line ${lineNo} must have 2 or 3 tokens ("source destination [status]"), got ${tokens.length}: "${trimmed}"`
    );

    const [source, destination, rawStatus = '302'] = tokens;
    assert.ok(source.startsWith('/'), `Line ${lineNo} source must start with "/": "${source}"`);
    assert.ok(
      destination.startsWith('/') || destination.startsWith('https://'),
      `Line ${lineNo} destination must start with "/" or "https://": "${destination}"`
    );
    assert.notEqual(source, destination, `Line ${lineNo} redirects to itself: "${source}"`);
    assert.equal(
      source.includes(':splat'),
      false,
      `Line ${lineNo} source uses ":splat" instead of Cloudflare wildcard "*": "${source}"`
    );

    assert.match(
      rawStatus,
      /^\d+$/,
      `Line ${lineNo} status "${rawStatus}" contains non-numeric characters (Netlify "!" is invalid on Cloudflare)`
    );
    const statusNum = Number(rawStatus);
    assert.ok(
      permittedStatuses.has(statusNum),
      `Line ${lineNo} status ${statusNum} is not a valid Cloudflare status (200, 301, 302, 303, 307, 308)`
    );

    assert.equal(
      seenSources.has(source),
      false,
      `Duplicate redirect source "${source}" at line ${lineNo}`
    );
    seenSources.add(source);

    const isDynamic = /\*|:[A-Za-z]\w*/.test(source);
    if (isDynamic) {
      seenDynamicRule = true;
      dynamicRules += 1;
    } else {
      assert.equal(
        seenDynamicRule,
        false,
        `Static rule "${source}" at line ${lineNo} appears after a dynamic wildcard rule`
      );
      staticRules += 1;
    }
  }

  assert.equal(seenSources.size, 190, `Expected all 190 redirect rules to be preserved, got ${seenSources.size}`);
  assert.ok(staticRules <= 2000, `Exceeded Cloudflare 2000 static rules limit (${staticRules})`);
  assert.ok(dynamicRules <= 100, `Exceeded Cloudflare 2000 dynamic rules limit (${dynamicRules})`);
});

test('/marketing-digital-hotelier and /en/hotel-digital-marketing satisfy primary pillar SEO positioning, commercial integrity, JSON-LD parity, and zero cannibalization with /zones/maroc', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const { servicesData } = await import('./servicesData');
  const { locationsData } = await import('./locationsData');

  const fr = servicesData['hotel-digital-marketing'].fr;
  const en = servicesData['hotel-digital-marketing'].en;

  // 1. Data-layer keyword alignment & commercial preservation
  assert.match(fr.title, /Marketing Digital Hôtelier/i);
  assert.match(fr.title, /Maroc/i);
  assert.ok(fr.title.length >= 30 && fr.title.length <= 60, `FR title length (${fr.title.length}) must be 30-60`);
  assert.match(fr.description, /marketing digital hôtelier/i);
  assert.match(fr.description, /4 000 MAD\/mois/);
  assert.ok(fr.description.length >= 120 && fr.description.length <= 158, `FR description length (${fr.description.length}) must be 120-158`);
  assert.match(fr.heroTitle, /Marketing Digital Hôtelier au Maroc/i);
  assert.match(fr.heroSub, /marketing digital hôtelier/i);
  assert.equal(fr.features.length, 4, 'FR must expose the 4 integrated hotel digital marketing pillars');
  assert.equal(fr.comparisonTable?.rows.length, 4, 'FR budget comparison table must preserve all 4 rows');
  assert.equal(fr.evaluationCriteria?.items.length, 4, 'FR agency evaluation criteria must preserve all 4 items');
  assert.ok(fr.faqs.length >= 5, 'FR must preserve at least 5 FAQs');

  assert.match(en.title, /Hotel Digital Marketing/i);
  assert.match(en.title, /Morocco/i);
  assert.ok(en.title.length >= 30 && en.title.length <= 60, `EN title length (${en.title.length}) must be 30-60`);
  assert.match(en.description, /hotel digital marketing/i);
  assert.match(en.description, /4,000 MAD\/mo/);
  assert.ok(en.description.length >= 120 && en.description.length <= 158, `EN description length (${en.description.length}) must be 120-158`);
  assert.match(en.heroTitle, /Hotel Digital Marketing in Morocco/i);
  assert.match(en.heroSub, /hotel digital marketing/i);
  assert.equal(en.features.length, 4, 'EN must expose the 4 integrated hotel digital marketing pillars');
  assert.equal(en.comparisonTable?.rows.length, 4, 'EN budget comparison table must preserve all 4 rows');
  assert.equal(en.evaluationCriteria?.items.length, 4, 'EN agency evaluation criteria must preserve all 4 items');
  assert.ok(en.faqs.length >= 5, 'EN must have at least 5 FAQs');

  // 2. De-cannibalization of /zones/maroc and /en/locations/morocco in locationsData
  assert.doesNotMatch(locationsData['morocco'].fr.title, /Marketing Digital Hôtelier/i);
  assert.doesNotMatch(locationsData['morocco'].fr.description, /marketing digital hôtelier/i);
  assert.doesNotMatch(locationsData['morocco'].en.title, /Hotel Digital Marketing|Hospitality Digital Marketing/i);
  assert.doesNotMatch(locationsData['morocco'].en.description, /hotel digital marketing|hospitality digital marketing/i);

  // 3. Post-build prerendered HTML verification
  const frHtmlPath = path.resolve('dist/marketing-digital-hotelier/index.html');
  const enHtmlPath = path.resolve('dist/en/hotel-digital-marketing/index.html');
  const marocHtmlPath = path.resolve('dist/zones/maroc/index.html');
  const moroccoHtmlPath = path.resolve('dist/en/locations/morocco/index.html');
  if (!fs.existsSync(frHtmlPath)) return;

  const frHtml = fs.readFileSync(frHtmlPath, 'utf8');
  const enHtml = fs.readFileSync(enHtmlPath, 'utf8');
  const marocHtml = fs.readFileSync(marocHtmlPath, 'utf8');
  const moroccoHtml = fs.readFileSync(moroccoHtmlPath, 'utf8');

  // Verify FR prerendered H1, H2 grammar fix, canonical, hreflang, and JSON-LD parity
  const frH1 = [...frHtml.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
  assert.equal(frH1.length, 1);
  assert.match(frH1[0], /Marketing Digital Hôtelier au Maroc/i);

  const frH2s = [...frHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
  for (const h2 of frH2s) {
    assert.doesNotMatch(h2, /Ce Que Vous Obtenez Avec|Est-ce que .* Convient à Votre Établissement/i, `Awkward H2 still present: "${h2}"`);
  }

  assert.ok(frHtml.includes('<link rel="canonical" data-static-seo="true" href="https://urunk.com/marketing-digital-hotelier" />'));
  assert.ok(frHtml.includes('hreflang="fr" href="https://urunk.com/marketing-digital-hotelier"'));
  assert.ok(frHtml.includes('hreflang="en" href="https://urunk.com/en/hotel-digital-marketing"'));
  assert.ok(frHtml.includes('hreflang="x-default" href="https://urunk.com/marketing-digital-hotelier"'));

  const frSchemas = JSON.parse(frHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)![1]);
  const frService = frSchemas.find((s: Record<string, unknown>) => s['@type'] === 'Service');
  const frBreadcrumb = frSchemas.find((s: Record<string, unknown>) => s['@type'] === 'BreadcrumbList');
  const frProf = frSchemas.find((s: Record<string, unknown>) => Array.isArray(s['@type']) && s['@type'].includes('ProfessionalService'));
  assert.ok(frProf, 'Prerendered FR page must include ProfessionalService schema matching React SEO.tsx');
  assert.equal(frService.name, fr.heroTitle);
  assert.equal(frService.serviceType, 'Marketing Digital Hôtelier');
  assert.equal(frService.offers.price, '4000');
  assert.equal(frBreadcrumb.itemListElement.length, 2, 'FR BreadcrumbList must match 2-level URL & React Breadcrumbs');
  assert.equal(frBreadcrumb.itemListElement[1].name, 'Marketing Digital Hôtelier');

  // Verify EN prerendered canonical, hreflang, H2 fix, and JSON-LD parity
  const enH2s = [...enHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
  for (const h2 of enH2s) {
    assert.doesNotMatch(h2, /What You Get With|Is .* Right For Your Property/i, `Awkward EN H2 still present: "${h2}"`);
  }
  assert.ok(enHtml.includes('<link rel="canonical" data-static-seo="true" href="https://urunk.com/en/hotel-digital-marketing" />'));
  const enSchemas = JSON.parse(enHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)![1]);
  const enService = enSchemas.find((s: Record<string, unknown>) => s['@type'] === 'Service');
  const enBreadcrumb = enSchemas.find((s: Record<string, unknown>) => s['@type'] === 'BreadcrumbList');
  assert.equal(enService.name, en.heroTitle);
  assert.equal(enService.serviceType, 'Hotel Digital Marketing');
  assert.equal(enBreadcrumb.itemListElement.length, 2);
  assert.equal(enBreadcrumb.itemListElement[1].name, 'Hotel Digital Marketing');

  // Verify /zones/maroc, /en/locations/morocco, /google-ads-maroc, and /services/gestion-publicites-meta do not cannibalize
  const decodeHtml = (s: string) =>
    s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"');
  const marocTitle = decodeHtml(marocHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)![1].trim());
  const moroccoTitle = decodeHtml(moroccoHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)![1].trim());
  assert.equal(marocTitle, locationsData['morocco'].fr.title);
  assert.equal(moroccoTitle, locationsData['morocco'].en.title);
  assert.doesNotMatch(marocTitle, /Marketing Digital Hôtelier/i);
  assert.doesNotMatch(moroccoTitle, /Hotel Digital Marketing|Hospitality Digital Marketing/i);

  const gadsHtml = fs.readFileSync(path.resolve('dist/google-ads-maroc/index.html'), 'utf8');
  const metaHtml = fs.readFileSync(path.resolve('dist/services/gestion-publicites-meta/index.html'), 'utf8');
  const gadsTitle = decodeHtml(gadsHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)![1].trim());
  const metaTitle = decodeHtml(metaHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)![1].trim());
  assert.doesNotMatch(gadsTitle, /Marketing Digital Hôtelier/i, '/google-ads-maroc must target Google Ads Maroc, not Marketing Digital Hôtelier');
  assert.doesNotMatch(metaTitle, /Marketing Digital Hôtelier/i, '/services/gestion-publicites-meta must target Meta Ads, not Marketing Digital Hôtelier');
  assert.ok(gadsHtml.includes('href="/marketing-digital-hotelier"'), '/google-ads-maroc must link internally to /marketing-digital-hotelier');
});

test('/blog/creation-site-web-maroc-pour-hotels preserves full PDF content, hero image, FR-only hreflang, BlogPosting + FAQPage JSON-LD, and XML sitemaps', () => {
  const post = blogPostsFR.find(p => p.slug === 'creation-site-web-maroc-pour-hotels');
  assert.ok(post, 'Blog post creation-site-web-maroc-pour-hotels must exist in blogPostsFR');
  assert.equal(blogPostsFR[0]?.slug, 'creation-site-web-maroc-pour-hotels', 'New blog post should be featured first on /blog');
  assert.equal(post.h1, 'Étapes essentielles pour créer un site web performant pour un hôtel ou un riad au Maroc');
  assert.ok(post.seoTitle && post.seoTitle.length >= 30 && post.seoTitle.length <= 60, `seoTitle length (${post.seoTitle?.length}) must be 30-60`);
  assert.ok(post.metaDescription.length >= 120 && post.metaDescription.length <= 158, `metaDescription length (${post.metaDescription.length}) must be 120-158`);
  assert.equal(post.image, '/images/blog/fr/creation-site-web-maroc-pour-hotels.jpg');
  assert.equal(post.faqs?.length, 3, 'Post must expose all 3 FAQs from the PDF');

  // Verify extracted hero image exists on disk and is non-empty
  const imgDiskPath = path.resolve('public/images/blog/fr/creation-site-web-maroc-pour-hotels.jpg');
  assert.ok(fs.existsSync(imgDiskPath), 'Extracted hero image must exist in public/images/blog/fr/');
  assert.ok(fs.statSync(imgDiskPath).size > 50_000, 'Extracted hero image must be a high-resolution JPEG');

  // Verify PDF structural content: Cloudbeds vs Mews table, 8-point checklist, internal & external links
  assert.match(post.content, /Points clés à retenir/);
  assert.match(post.content, /Cloudbeds/);
  assert.match(post.content, /Mews/);
  assert.match(post.content, /Les 8 points à valider avant de signer avec une agence/);
  assert.match(post.content, /Questions fréquentes/);
  assert.match(post.content, /href="\/site-web-hotel"/);
  assert.match(post.content, /href="\/reservation-directe"/);
  assert.match(post.content, /href="\/services\/google-business-profile"/);
  assert.match(post.content, /href="\/contact"/);
  assert.match(post.content, /href="\/services\/creation-site-web"/);
  assert.match(post.content, /developers\.google\.com\/search\/docs\/appearance\/core-web-vitals/);
  assert.match(post.content, /official_gbp_best_practices_playbook_2026\.pdf/);
  assert.match(post.content, /contrat-developpement-logiciel-clauses-indispensables/);

  // Verify French-only routing & hreflang reciprocity helpers
  assert.equal(hasReciprocalTranslation('/blog/creation-site-web-maroc-pour-hotels'), false);
  assert.equal(getEquivalentRoute('/blog/creation-site-web-maroc-pour-hotels'), '/en/blog');

  // Post-build prerendered HTML & XML sitemap checks
  const htmlPath = path.resolve('dist/blog/creation-site-web-maroc-pour-hotels/index.html');
  if (!fs.existsSync(htmlPath)) return;

  const html = fs.readFileSync(htmlPath, 'utf8');
  const rawTitle = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim() || '';
  const decodedTitle = rawTitle.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"');
  assert.equal(decodedTitle, post.seoTitle);
  assert.ok(html.includes('<link rel="canonical" data-static-seo="true" href="https://urunk.com/blog/creation-site-web-maroc-pour-hotels" />'));
  assert.ok(html.includes('hreflang="fr" href="https://urunk.com/blog/creation-site-web-maroc-pour-hotels"'));
  assert.ok(html.includes('hreflang="x-default" href="https://urunk.com/blog/creation-site-web-maroc-pour-hotels"'));
  assert.ok(!html.includes('hreflang="en"'), 'FR-only blog post must not emit a false hreflang="en" alternate');
  assert.ok(html.includes('property="og:image" data-static-seo="true" content="https://urunk.com/images/blog/fr/creation-site-web-maroc-pour-hotels.jpg"'));

  const schemas = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)![1]);
  const blogPosting = schemas.find((s: Record<string, unknown>) => s['@type'] === 'BlogPosting');
  const faqPage = schemas.find((s: Record<string, unknown>) => s['@type'] === 'FAQPage');
  const breadcrumb = schemas.find((s: Record<string, unknown>) => s['@type'] === 'BreadcrumbList');
  assert.ok(blogPosting, 'Prerendered HTML must include BlogPosting JSON-LD');
  assert.equal(blogPosting.headline, post.h1);
  assert.equal(blogPosting.image, 'https://urunk.com/images/blog/fr/creation-site-web-maroc-pour-hotels.jpg');
  assert.equal(blogPosting.datePublished, '2026-11-01');
  assert.ok(faqPage, 'Prerendered HTML must include FAQPage JSON-LD matching the 3 visible FAQs');
  assert.equal(faqPage.mainEntity.length, 3);
  assert.ok(breadcrumb, 'Prerendered HTML must include BreadcrumbList JSON-LD');

  const postsSitemap = fs.readFileSync(path.resolve('public/posts-sitemap.xml'), 'utf8');
  const postsSitemapFr = fs.readFileSync(path.resolve('public/posts-sitemap-fr.xml'), 'utf8');
  const imagesSitemap = fs.readFileSync(path.resolve('public/images-sitemap.xml'), 'utf8');
  const imagesSitemapFr = fs.readFileSync(path.resolve('public/images-sitemap-fr.xml'), 'utf8');
  assert.ok(postsSitemap.includes('<loc>https://urunk.com/blog/creation-site-web-maroc-pour-hotels</loc>'));
  assert.ok(postsSitemapFr.includes('<loc>https://urunk.com/blog/creation-site-web-maroc-pour-hotels</loc>'));
  assert.ok(imagesSitemap.includes('<loc>https://urunk.com/blog/creation-site-web-maroc-pour-hotels</loc>'));
  assert.ok(imagesSitemap.includes('<image:loc>https://urunk.com/images/blog/fr/creation-site-web-maroc-pour-hotels.jpg</image:loc>'));
  assert.ok(imagesSitemapFr.includes('<loc>https://urunk.com/blog/creation-site-web-maroc-pour-hotels</loc>'));
  assert.ok(imagesSitemapFr.includes('<image:loc>https://urunk.com/images/blog/fr/creation-site-web-maroc-pour-hotels.jpg</image:loc>'));

  // Verify all 8 XML sitemaps exist in both public/ and dist/, match byte-for-byte, and contain zero double-escaped XML entities
  const allXmlSitemaps = [
    'sitemap.xml',
    'sitemap-index.xml',
    'sitemap-fr.xml',
    'pages-sitemap.xml',
    'pages-sitemap-fr.xml',
    'posts-sitemap.xml',
    'posts-sitemap-fr.xml',
    'images-sitemap.xml',
    'images-sitemap-fr.xml'
  ];
  for (const smFile of allXmlSitemaps) {
    const pubXml = fs.readFileSync(path.resolve('public', smFile), 'utf8');
    const distXml = fs.readFileSync(path.resolve('dist', smFile), 'utf8');
    assert.equal(distXml, pubXml, `dist/${smFile} must match public/${smFile}`);
    assert.equal(pubXml.includes('&amp;amp;'), false, `${smFile} must not contain double-escaped &amp;amp;`);
  }

  // Verify HTML sitemaps (/plan-du-site and /en/sitemap) include the new blog post, case studies, and core services
  const htmlSitemapFr = fs.readFileSync(path.resolve('dist/plan-du-site/index.html'), 'utf8');
  const htmlSitemapEn = fs.readFileSync(path.resolve('dist/en/sitemap/index.html'), 'utf8');
  assert.ok(htmlSitemapFr.includes('href="/blog/creation-site-web-maroc-pour-hotels"'));
  assert.ok(htmlSitemapFr.includes('href="/marketing-digital-hotelier"'));
  assert.ok(htmlSitemapFr.includes('href="/realisations/art-house-marrakech"'));
  assert.ok(htmlSitemapEn.includes('href="/en/hotel-digital-marketing"'));
  assert.ok(htmlSitemapEn.includes('href="/en/services/google-ads"'));
  assert.ok(htmlSitemapEn.includes('href="/en/work/art-house-marrakech"'));
});

test('all 37 reported crawl URLs and all 274 prerendered dist/ HTML routes emit valid Google Rich Results JSON-LD with required LocalBusiness address', async () => {
  const { buildServiceProviderSchema, URUNK_POSTAL_ADDRESS } = await import('../components/SEO/StructuredData');

  // 1. Fast unit check on canonical Service.provider builder
  const provider = buildServiceProviderSchema();
  assert.equal(provider['@type'], 'ProfessionalService');
  assert.equal(provider.name, 'Urunk');
  assert.equal(provider.url, 'https://urunk.com');
  assert.equal(provider.image, 'https://urunk.com/logo.png');
  assert.equal(provider.telephone, '+212668802096');
  assert.equal(provider.priceRange, '$$$');
  assert.deepEqual(provider.address, URUNK_POSTAL_ADDRESS);
  assert.equal(provider.address['@type'], 'PostalAddress');
  assert.equal(provider.address.streetAddress, '3 Rue El Kadi Lass, Maarif');
  assert.equal(provider.address.addressLocality, 'Casablanca');
  assert.equal(provider.address.postalCode, '20330');
  assert.equal(provider.address.addressCountry, 'MA');

  if (!fs.existsSync(path.resolve('dist/index.html'))) {
    return;
  }

  // 2. All 37 URLs flagged in urunk.com_structured_data_that_contains_markup_errors_20261101.csv
  const reportedPaths = [
    '/agence-seo-casablanca',
    '/agence-seo-maroc',
    '/agence-web-casablanca',
    '/agence-web-maroc',
    '/creation-site-web',
    '/en/google-ads-morocco',
    '/en/pricing',
    '/en/seo-agency-morocco',
    '/en/services/website-design',
    '/en/web-design-casablanca',
    '/expertise/creation-site-web/casablanca',
    '/expertise/creation-site-web/rabat',
    '/expertise/google-ads/casablanca',
    '/expertise/meta-ads/marrakech',
    '/expertise/referencement-local/casablanca',
    '/expertise/reservation-directe/agadir',
    '/expertise/reservation-directe/riads-maisons-hotes',
    '/expertise/seo-hotel/agadir',
    '/expertise/seo-hotel/casablanca',
    '/expertise/seo-hotel/hotels-resorts',
    '/expertise/seo-hotel/marrakech',
    '/expertise/seo-hotel/rabat',
    '/expertise/seo-riad/marrakech',
    '/expertise/site-web-hotel/marrakech',
    '/expertise/site-web-riad/marrakech',
    '/expertise/tripadvisor-ads/marrakech',
    '/marketing-digital-hotelier',
    '/referencement-local-casablanca',
    '/services/ai-seo-optimization',
    '/services/creation-site-web',
    '/services/ecommerce-seo',
    '/services/gestion-publicites-meta',
    '/services/google-business-profile',
    '/services/tripadvisor-ads',
    '/services/wordpress-seo',
    '/site-web-hotel',
    '/tarifs'
  ];
  assert.equal(reportedPaths.length, 37);

  const localBusinessSubtypes = new Set([
    'LocalBusiness',
    'ProfessionalService',
    'DigitalMarketingAgency',
    'MarketingAgency',
    'Store',
    'FinancialService',
    'TravelAgency',
    'Hotel',
    'LodgingBusiness',
    'Restaurant'
  ]);

  function validateJsonLdTree(node: unknown, routeLabel: string, jsonPath: string): number {
    if (!node || typeof node !== 'object') return 0;
    if (Array.isArray(node)) {
      let count = 0;
      node.forEach((child, idx) => {
        count += validateJsonLdTree(child, routeLabel, `${jsonPath}[${idx}]`);
      });
      return count;
    }

    const obj = node as Record<string, unknown>;
    const rawType = obj['@type'];
    const types = Array.isArray(rawType) ? rawType : (typeof rawType === 'string' ? [rawType] : []);
    let localBizCount = 0;

    if (types.some(t => localBusinessSubtypes.has(String(t)))) {
      localBizCount += 1;
      assert.ok(typeof obj.name === 'string' && obj.name.length > 0, `Missing LocalBusiness name at ${routeLabel} ${jsonPath}`);
      assert.ok(obj.address && typeof obj.address === 'object', `Missing required LocalBusiness address at ${routeLabel} ${jsonPath}`);
      const addr = obj.address as Record<string, unknown>;
      assert.equal(addr['@type'], 'PostalAddress', `Expected PostalAddress @type at ${routeLabel} ${jsonPath}`);
      for (const reqField of ['streetAddress', 'addressLocality', 'addressRegion', 'postalCode', 'addressCountry']) {
        assert.ok(
          typeof addr[reqField] === 'string' && String(addr[reqField]).trim().length > 0,
          `Missing PostalAddress.${reqField} at ${routeLabel} ${jsonPath}`
        );
      }
      assert.ok(obj.image, `Missing recommended LocalBusiness image at ${routeLabel} ${jsonPath}`);
      assert.ok(typeof obj.telephone === 'string' && obj.telephone.length > 0, `Missing recommended LocalBusiness telephone at ${routeLabel} ${jsonPath}`);
      assert.ok(typeof obj.priceRange === 'string' && obj.priceRange.length > 0, `Missing recommended LocalBusiness priceRange at ${routeLabel} ${jsonPath}`);
    }

    if (types.includes('Article') || types.includes('BlogPosting')) {
      assert.ok(typeof obj.headline === 'string' && obj.headline.length > 0, `Missing headline at ${routeLabel} ${jsonPath}`);
      assert.ok(obj.image, `Missing Article/BlogPosting image at ${routeLabel} ${jsonPath}`);
      assert.ok(typeof obj.datePublished === 'string' && obj.datePublished.length > 0, `Missing datePublished at ${routeLabel} ${jsonPath}`);
      assert.ok(obj.author, `Missing author at ${routeLabel} ${jsonPath}`);
    }

    for (const [k, v] of Object.entries(obj)) {
      if (k !== '@type' && v && typeof v === 'object') {
        localBizCount += validateJsonLdTree(v, routeLabel, `${jsonPath}.${k}`);
      }
    }
    return localBizCount;
  }

  for (const route of reportedPaths) {
    const filePath = path.resolve(`dist${route}/index.html`);
    assert.ok(fs.existsSync(filePath), `Missing prerendered HTML for reported URL ${route}`);
    const html = fs.readFileSync(filePath, 'utf8');
    const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    assert.ok(scripts.length >= 1, `Expected JSON-LD script in ${route}`);
    let lbFound = 0;
    scripts.forEach((m, idx) => {
      lbFound += validateJsonLdTree(JSON.parse(m[1]), route, `script[${idx}]`);
    });
    assert.ok(lbFound >= 1, `Expected at least 1 validated LocalBusiness/ProfessionalService entity in ${route}`);
  }

  // 3. Exhaustive check across ALL 274 prerendered HTML routes in dist/
  function collectDistIndexHtml(dir: string, out: string[] = []): string[] {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) collectDistIndexHtml(full, out);
      else if (full.endsWith('/index.html') || full.endsWith('\\index.html') || path.relative(path.resolve('dist'), full) === 'index.html') {
        out.push(full);
      }
    }
    return out;
  }

  const allHtmlFiles = collectDistIndexHtml(path.resolve('dist'));
  assert.ok(allHtmlFiles.length >= 274, `Expected >= 274 prerendered routes, got ${allHtmlFiles.length}`);

  for (const filePath of allHtmlFiles) {
    const rel = path.relative(path.resolve('dist'), filePath).replace(/\\/g, '/');
    const route = rel === 'index.html' ? '/' : `/${rel.slice(0, -11)}`;
    const html = fs.readFileSync(filePath, 'utf8');
    const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    scripts.forEach((m, idx) => {
      validateJsonLdTree(JSON.parse(m[1]), route, `script[${idx}]`);
    });
  }
});

