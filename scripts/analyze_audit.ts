import fs from 'fs';
import path from 'path';

// Let's gather all defined routes from App.tsx
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const routePathRegex = /<Route\s+[^>]*?path=["']([^"']+)["']/g;
const routes: string[] = [];
let rm: RegExpExecArray | null;
while ((rm = routePathRegex.exec(appContent)) !== null) {
  routes.push(rm[1]);
}

console.log('Explicit routes found in App.tsx:', routes);

const audit = JSON.parse(fs.readFileSync('audit_results.json', 'utf8'));

// Check links
const deadLinks: any[] = [];
const hashOrEmptyLinks: any[] = [];
const externalWithoutSecurity: any[] = [];

audit.links.forEach((l: any) => {
  const target = l.target;
  if (target === '#' || target === '' || target === '#!' || target.startsWith('javascript:')) {
    hashOrEmptyLinks.push(l);
  }
  if (l.type === 'a' && target.startsWith('http')) {
    if (l.raw.includes('target="_blank"') && !l.raw.includes('rel=')) {
      externalWithoutSecurity.push(l);
    }
  }
});

console.log('Hash or empty links:', hashOrEmptyLinks);
console.log('External links missing rel:', externalWithoutSecurity);

// Check buttons
const deadButtons = audit.buttons.filter((b: any) => !b.hasOnClick && b.type !== 'submit');
console.log('Buttons with no onClick and not submit:', deadButtons);

// Check forms
const deadForms = audit.forms.filter((f: any) => !f.hasOnSubmit);
console.log('Forms with no onSubmit:', deadForms);
