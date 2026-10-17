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
console.log('Total files found:', files.length);

const links: { file: string; target: string; type: string; raw: string }[] = [];
const buttons: { file: string; hasOnClick: boolean; type?: string; raw: string }[] = [];
const forms: { file: string; hasOnSubmit: boolean; raw: string }[] = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  
  // Find React Router Links
  const linkRegex = /<Link\s+([^>]*?)>/gs;
  let m: RegExpExecArray | null;
  while ((m = linkRegex.exec(content)) !== null) {
    const props = m[1];
    const toMatch = /to=(?:{`([^`]+)`}|{"([^"]+)"}|{'([^']+)'}|"([^"]+)"|'([^']+)')/.exec(props);
    const target = toMatch ? (toMatch[1] || toMatch[2] || toMatch[3] || toMatch[4] || toMatch[5] || '') : 'DYNAMIC_OR_PROP';
    links.push({ file: f, target, type: 'Link', raw: m[0] });
  }

  // Find <a> tags
  const aRegex = /<a\s+([^>]*?)>/gs;
  while ((m = aRegex.exec(content)) !== null) {
    const props = m[1];
    const hrefMatch = /href=(?:{`([^`]+)`}|{"([^"]+)"}|{'([^']+)'}|"([^"]+)"|'([^']+)')/.exec(props);
    const target = hrefMatch ? (hrefMatch[1] || hrefMatch[2] || hrefMatch[3] || hrefMatch[4] || hrefMatch[5] || '') : 'DYNAMIC_OR_PROP';
    links.push({ file: f, target, type: 'a', raw: m[0] });
  }

  // Find <button> tags
  const btnRegex = /<button\s+([^>]*?)>/gs;
  while ((m = btnRegex.exec(content)) !== null) {
    const props = m[1];
    const hasOnClick = /onClick=/.test(props);
    const typeMatch = /type=["']([^"']+)["']/.exec(props);
    buttons.push({ file: f, hasOnClick, type: typeMatch ? typeMatch[1] : undefined, raw: m[0] });
  }

  // Find <form> tags
  const formRegex = /<form\s+([^>]*?)>/gs;
  while ((m = formRegex.exec(content)) !== null) {
    const props = m[1];
    const hasOnSubmit = /onSubmit=/.test(props);
    forms.push({ file: f, hasOnSubmit, raw: m[0] });
  }
});

console.log('Total Links extracted:', links.length);
console.log('Total Buttons extracted:', buttons.length);
console.log('Total Forms extracted:', forms.length);

fs.writeFileSync('audit_results.json', JSON.stringify({ links, buttons, forms }, null, 2));
