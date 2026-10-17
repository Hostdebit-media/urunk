import fs from 'fs';
import path from 'path';

// Let us parse all links from all .tsx files
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
const extractedLinks: { file: string; target: string; line: number }[] = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    // Check to="..."
    const toMatches = line.matchAll(/to=["']([^"']+)["']/g);
    for (const m of toMatches) {
      extractedLinks.push({ file: f, target: m[1], line: idx + 1 });
    }
    // Check href="..."
    const hrefMatches = line.matchAll(/href=["']([^"']+)["']/g);
    for (const m of hrefMatches) {
      extractedLinks.push({ file: f, target: m[1], line: idx + 1 });
    }
  });
});

console.log('Total extracted static links with line numbers:', extractedLinks.length);

// Let us read all route paths defined in App.tsx
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const routesFR: string[] = [];
const routesEN: string[] = [];

// FR routes are under <Route path="/" element={<Layout />}>
// EN routes are under <Route path="en" element={<Layout />}>
// Let's parse all Route path="..." in App.tsx
const routeLines = appContent.split('\n');
let currentPrefix = '';

routeLines.forEach(l => {
  if (l.includes('<Route path="/"') || (l.includes('<Route path="fr"') && !l.includes('Navigate'))) {
    currentPrefix = '';
  } else if (l.includes('<Route path="en"')) {
    currentPrefix = '/en';
  }
  
  const m = l.match(/<Route\s+(?:index\s+|path=["']([^"']+)["'])/);
  if (m) {
    if (l.includes('index')) {
      if (currentPrefix === '') routesFR.push('/');
      else routesEN.push('/en');
    } else if (m[1]) {
      const p = m[1];
      if (p !== 'en' && p !== '*' && p !== 'fr' && p !== 'fr/*') {
        const full = currentPrefix === '' ? `/${p}` : `${currentPrefix}/${p}`;
        if (currentPrefix === '') routesFR.push(full);
        else routesEN.push(full);
      }
    }
  }
});

console.log('FR defined routes count:', routesFR.length);
console.log('EN defined routes count:', routesEN.length);
const allDefinedRoutes = new Set([...routesFR, ...routesEN, '/', '/en']);

console.log('\n--- Checking for invalid / dead internal links ---');
const invalidLinks: any[] = [];
extractedLinks.forEach(item => {
  const t = item.target;
  // Ignore external links, mailto, tel, whatsapp, anchor hashes
  if (t.startsWith('http') || t.startsWith('mailto:') || t.startsWith('tel:') || t.startsWith('https://wa.me') || t.startsWith('#')) {
    return;
  }
  // Check if starts with /
  if (t.startsWith('/')) {
    const clean = t.split('?')[0].split('#')[0];
    // Dynamic matching
    let matched = allDefinedRoutes.has(clean);
    if (!matched) {
      // Check parameterized routes
      // /blog/:slug, /realisations/:slug, /en/blog/:slug, /en/work/:slug
      // /expertise/:param1/:param2, etc.
      if (clean.startsWith('/blog/') || clean.startsWith('/en/blog/')) matched = true;
      if (clean.startsWith('/realisations/') || clean.startsWith('/en/work/')) matched = true;
      if (clean.startsWith('/expertise/') || clean.startsWith('/en/expertise/')) matched = true;
      if (clean.startsWith('/fr/')) {
        // Warning: /fr/ prefix used in a link!
        matched = false;
      }
    }
    if (!matched) {
      invalidLinks.push({ ...item, cleanTarget: clean });
    }
  }
});

console.log('Total invalid internal links found:', invalidLinks.length);
invalidLinks.forEach(inv => {
  console.log(`[${inv.file}:${inv.line}] -> "${inv.target}"`);
});
