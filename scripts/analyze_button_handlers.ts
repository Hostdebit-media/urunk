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
const buttonDetails: any[] = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const btnMatches = content.matchAll(/<button\s+([^>]*?)>/gs);
  for (const m of btnMatches) {
    const props = m[1];
    const hasOnClick = /onClick=/.test(props);
    const isSubmit = /type=["']submit["']/.test(props);
    const isReset = /type=["']reset["']/.test(props);
    const hasAriaLabel = /aria-label=/.test(props);
    const hasTitle = /title=/.test(props);
    
    buttonDetails.push({
      file: f,
      hasOnClick,
      isSubmit,
      isReset,
      hasAriaLabel,
      hasTitle,
      snippet: m[0].replace(/\s+/g, ' ')
    });
  }
});

console.log('Total buttons analyzed:', buttonDetails.length);
const unhandledButtons = buttonDetails.filter(b => !b.hasOnClick && !b.isSubmit && !b.isReset);
console.log('Unhandled / Dead Buttons:', unhandledButtons);
