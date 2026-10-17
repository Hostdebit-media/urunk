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
const allButtons: { file: string; line: number; tag: string; text: string; hasOnClick: boolean; type: string; ariaLabel?: string }[] = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('<button')) {
      const hasOnClick = line.includes('onClick');
      const typeMatch = line.match(/type=["']([^"']+)["']/);
      const ariaMatch = line.match(/aria-label=["']([^"']+)["']/);
      allButtons.push({
        file: f,
        line: idx + 1,
        tag: line.trim(),
        text: '',
        hasOnClick,
        type: typeMatch ? typeMatch[1] : 'button',
        ariaLabel: ariaMatch ? ariaMatch[1] : undefined
      });
    }
  });
});

console.log('Total button tags found across codebase:', allButtons.length);
allButtons.forEach(b => {
  console.log(`[${b.file}:${b.line}] type="${b.type}" hasOnClick=${b.hasOnClick} aria="${b.ariaLabel || 'none'}"`);
});
