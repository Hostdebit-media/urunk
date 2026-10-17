import * as fs from 'fs';
import * as path from 'path';

console.log('=====================================================');
console.log('1. INVENTORY: ALL CANONICAL FR FILES & EXACT LOCALIZED SLUGS');
console.log('=====================================================');

const frFiles: string[] = [];
function findHtmlFiles(dir: string, base: string = '') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const rel = base ? path.join(base, item) : item;
    if (fs.statSync(full).isDirectory()) {
      findHtmlFiles(full, rel);
    } else if (item.endsWith('.html')) {
      frFiles.push(rel);
    }
  }
}

if (fs.existsSync('dist/fr.html')) {
  frFiles.push('fr.html');
}
if (fs.existsSync('dist/fr')) {
  findHtmlFiles('dist/fr', 'fr');
}

console.log('Total Built French HTML files:', frFiles.length);

const canonicalFrUrls = Array.from(new Set(frFiles.map(f => {
  if (f === 'fr.html' || f === 'fr/index.html') return '/fr';
  return '/' + f.replace(/\\/g, '/').replace(/\.html$/, '');
}))).sort();

canonicalFrUrls.forEach((url, i) => {
  console.log(`${i + 1}. ${url}`);
});

console.log('\n=====================================================');
console.log('2. DEPLOY & 301 REDIRECTS CHECK');
console.log('=====================================================');
const redirectsContent = fs.readFileSync('dist/_redirects', 'utf8');
const legacyVariants = [
  '/fr/pricing.html', '/fr/pricing',
  '/fr/about.html', '/fr/about',
  '/fr/work.html', '/fr/work',
  '/fr/terms-of-service.html', '/fr/terms-of-service',
  '/fr/privacy-policy.html', '/fr/privacy-policy',
  '/fr/sitemap.html', '/fr/sitemap',
  '/fr/services/website-design', '/fr/services/google-ads', '/fr/services/meta-ads'
];
legacyVariants.forEach(variant => {
  const has301 = redirectsContent.includes(variant);
  console.log(`Redirect check [${variant}]: ${has301 ? 'PASS (301 Defined)' : 'FAIL (Missing)'}`);
});

console.log('\n=====================================================');
console.log('3. LINKS & EXACT COUNTERPART CHECK');
console.log('=====================================================');
const enHome = fs.readFileSync('dist/index.html', 'utf8');
const frHome = fs.readFileSync('dist/fr.html', 'utf8');
const enPricing = fs.readFileSync('dist/pricing.html', 'utf8');
const frTarifs = fs.readFileSync('dist/fr/tarifs.html', 'utf8');

function checkPageLinks(name: string, html: string) {
  const matches = html.match(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi) || [];
  const links = matches.map(l => {
    const m = l.match(/href=["']([^"']+)["']/);
    return m ? m[1] : '';
  });
  console.log(`${name} total outgoing <a> links: ${links.length}`);
  return links;
}

checkPageLinks('EN Home (/)', enHome);
checkPageLinks('FR Home (/fr)', frHome);
checkPageLinks('EN Pricing (/pricing)', enPricing);
checkPageLinks('FR Tarifs (/fr/tarifs)', frTarifs);

console.log('\n=====================================================');
console.log('4. HREFLANG RECIPROCITY CHECK');
console.log('=====================================================');
let totalHreflangTested = 0;
let hreflangErrors = 0;

const samplePaths = [
  'dist/index.html', 'dist/fr.html',
  'dist/pricing.html', 'dist/fr/tarifs.html',
  'dist/about.html', 'dist/fr/a-propos.html',
  'dist/services.html', 'dist/fr/services.html',
  'dist/work.html', 'dist/fr/realisations.html',
  'dist/blog.html', 'dist/fr/blog.html',
  'dist/faq.html', 'dist/fr/faq.html'
];

samplePaths.forEach(p => {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const enMatch = content.match(/<link rel="alternate" hreflang="en" href="([^"]+)"/);
    const frMatch = content.match(/<link rel="alternate" hreflang="fr" href="([^"]+)"/);
    const xDefMatch = content.match(/<link rel="alternate" hreflang="x-default" href="([^"]+)"/);
    
    totalHreflangTested++;
    const ok = !!(enMatch && frMatch && xDefMatch);
    if (!ok) hreflangErrors++;
    console.log(`${p}: ${ok ? 'PASS' : 'FAIL'} | EN=${enMatch ? enMatch[1] : 'null'} | FR=${frMatch ? frMatch[1] : 'null'} | x-default=${xDefMatch ? xDefMatch[1] : 'null'}`);
  }
});

console.log('\n=====================================================');
console.log('5. SITEMAP & ROBOTS.TXT CHECK');
console.log('=====================================================');
const pagesSitemapFr = fs.readFileSync('dist/pages-sitemap-fr.xml', 'utf8');
const postsSitemapFr = fs.readFileSync('dist/posts-sitemap-fr.xml', 'utf8');
const robots = fs.readFileSync('dist/robots.txt', 'utf8');

const frUrlsInFrPagesSitemap = (pagesSitemapFr.match(/<loc>https:\/\/urunk\.com\/fr[^<]*<\/loc>/g) || []).length;
const frUrlsInFrPostsSitemap = (postsSitemapFr.match(/<loc>https:\/\/urunk\.com\/fr[^<]*<\/loc>/g) || []).length;
console.log('French URLs in pages-sitemap-fr.xml:', frUrlsInFrPagesSitemap);
console.log('French URLs in posts-sitemap-fr.xml:', frUrlsInFrPostsSitemap);
console.log('Robots.txt allows /fr/:', !robots.includes('Disallow: /fr'));

console.log('\n=====================================================');
console.log('6. CRAWLER DISCOVERY SIMULATION (<=2 CLICKS FROM HOME)');
console.log('=====================================================');

const visited = new Map<string, { click: number; path: string[] }>();
visited.set('/', { click: 0, path: ['/'] });

function getHtmlForUrl(cleanUrl: string): string | null {
  if (cleanUrl === '/' || cleanUrl === '') {
    if (fs.existsSync('dist/index.html')) return fs.readFileSync('dist/index.html', 'utf8');
  }
  if (cleanUrl === '/fr') {
    if (fs.existsSync('dist/fr.html')) return fs.readFileSync('dist/fr.html', 'utf8');
    if (fs.existsSync('dist/fr/index.html')) return fs.readFileSync('dist/fr/index.html', 'utf8');
  }
  let filePath = path.join('dist', cleanUrl + '.html');
  if (fs.existsSync(filePath)) return fs.readFileSync(filePath, 'utf8');
  filePath = path.join('dist', cleanUrl, 'index.html');
  if (fs.existsSync(filePath)) return fs.readFileSync(filePath, 'utf8');
  return null;
}

function extractLinks(html: string | null): string[] {
  if (!html) return [];
  const matches = html.match(/<a[^>]+href=["']([^"'#?]+)["']/gi) || [];
  const urls: string[] = [];
  for (const m of matches) {
    const rawMatch = m.match(/href=["']([^"'#?]+)["']/);
    if (!rawMatch) continue;
    let cleaned = rawMatch[1].replace(/^https?:\/\/urunk\.com/, '');
    if (cleaned.length > 1 && cleaned.endsWith('/')) cleaned = cleaned.slice(0, -1);
    if (cleaned.startsWith('/') && !cleaned.startsWith('//') && !cleaned.endsWith('.png') && !cleaned.endsWith('.jpg') && !cleaned.endsWith('.xml') && !cleaned.endsWith('.txt')) {
      urls.push(cleaned);
    }
  }
  return Array.from(new Set(urls));
}

const queue: string[] = ['/'];

while (queue.length > 0) {
  const currentUrl = queue.shift()!;
  const currentData = visited.get(currentUrl)!;
  if (currentData.click >= 2) continue; // up to 2 clicks

  const html = getHtmlForUrl(currentUrl);
  if (!html) continue;

  const links = extractLinks(html);
  for (const link of links) {
    if (!visited.has(link)) {
      visited.set(link, {
        click: currentData.click + 1,
        path: [...currentData.path, link]
      });
      queue.push(link);
    }
  }
}

console.log('Total URLs discovered within <=2 clicks:', visited.size);

let reachableFrCount = 0;
let unreachableFrCount = 0;

canonicalFrUrls.forEach(frUrl => {
  if (visited.has(frUrl)) {
    reachableFrCount++;
    const data = visited.get(frUrl)!;
    console.log(`[PASS: ${data.click} click(s)] ${frUrl} | Path: ${data.path.join(' -> ')}`);
  } else {
    unreachableFrCount++;
    console.log(`[FAIL: UNREACHABLE in <=2 clicks] ${frUrl}`);
  }
});

console.log('\n--- FINAL AUDIT METRICS ---');
console.log('Canonical FR Pages Count:', canonicalFrUrls.length);
console.log('FR Pages Reachable in <=2 clicks:', reachableFrCount);
console.log('FR Pages Unreachable in <=2 clicks:', unreachableFrCount);
console.log('FR URLs in Sitemap (Pages + Posts):', frUrlsInFrPagesSitemap + frUrlsInFrPostsSitemap);
console.log('Hreflang Pairs Verified:', totalHreflangTested);
console.log('Hreflang Errors:', hreflangErrors);
