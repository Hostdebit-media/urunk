import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeRoutePath,
  getEquivalentRoute,
  hasReciprocalTranslation,
} from './slugMappings';
import { servicesData, extractNumericMadPrice } from './servicesData';

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


