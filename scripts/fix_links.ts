import fs from 'fs';
import path from 'path';

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk('src');
let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Fix /en/hospitality-digital-marketing -> /en/hotel-digital-marketing
  content = content.replace(/\/en\/hospitality-digital-marketing/g, '/en/hotel-digital-marketing');

  // 2. Fix /en/portfolio -> /en/work
  content = content.replace(/\/en\/portfolio/g, '/en/work');

  // 3. Fix /en/industries/riads-boutique-stays -> /en/industries/riads-boutique-hotels
  content = content.replace(/\/en\/industries\/riads-boutique-stays/g, '/en/industries/riads-boutique-hotels');

  // 4. Fix redundant trailing slashes in internal link definitions like to="/en/" -> to="/en"
  content = content.replace(/to=["']\/en\/["']/g, 'to="/en"');
  content = content.replace(/href=["']\/en\/["']/g, 'href="/en"');

  // 5. Fix /fr/ prefixes inside internal Links/hrefs across French content (since FR is at root)
  // E.g. to="/fr/politique-de-confidentialite" -> to="/politique-de-confidentialite"
  // to="/fr/services/..." -> to="/services/..."
  // to="/fr/contact" -> to="/contact"
  // to="/fr/tarifs" -> to="/tarifs"
  // to="/fr/realisations/..." -> to="/realisations/..."
  // to="/fr/blog/..." -> to="/blog/..."
  // to="/fr/agence-seo-maroc" -> to="/agence-seo-maroc"
  // to="/fr/google-ads-maroc" -> to="/google-ads-maroc"
  // to="/fr/marketing-digital-hotelier" -> to="/marketing-digital-hotelier"
  // to="/fr/seo-riad-marrakech" -> to="/seo-riad-marrakech"
  // to="/fr/referencement-local-casablanca" -> to="/referencement-local-casablanca"
  // to="/fr/seo-hotel" -> to="/seo-hotel"
  // to="/fr/zones/..." -> to="/zones/..."
  // to="/fr/secteurs/..." -> to="/secteurs/..."
  // to="/fr/a-propos" -> to="/a-propos"
  // to="/fr/faq" -> to="/faq"
  // to="/fr/merci" -> to="/merci"
  // to="/fr" -> to="/"
  content = content.replace(/to=["']\/fr\/([^"']+)["']/g, 'to="/$1"');
  content = content.replace(/href=["']\/fr\/([^"']+)["']/g, 'href="/$1"');
  content = content.replace(/to=["']\/fr["']/g, 'to="/"');
  content = content.replace(/href=["']\/fr["']/g, 'href="/"');

  // In blog posts or strings: replace "/fr/" with "/"
  if (file.includes('blogPostsFR.ts')) {
    content = content.replace(/link:\s*["']\/fr\/([^"']+)["']/g, 'link: "/$1"');
    content = content.replace(/to:\s*["']\/fr\/([^"']+)["']/g, 'to: "/$1"');
    content = content.replace(/url:\s*["']\/fr\/([^"']+)["']/g, 'url: "/$1"');
    content = content.replace(/"\/fr\/([^"]+)"/g, '"/$1"');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalReplacements++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Total files updated: ${totalReplacements}`);
