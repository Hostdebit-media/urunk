import fs from 'fs';
import path from 'path';
import { navData } from '../src/components/navigation/NavData';
import { routeMap as slugMappings } from '../src/data/slugMappings';

const audit = JSON.parse(fs.readFileSync('audit_results.json', 'utf8'));

const navLinks: string[] = [];
navData.forEach(group => {
  if (group.link) {
    navLinks.push(group.link.en, group.link.fr);
  }
  if (group.simpleItems) {
    group.simpleItems.forEach(item => {
      navLinks.push(item.link.en, item.link.fr);
    });
  }
  if (group.columns) {
    group.columns.forEach(col => {
      col.items.forEach(item => {
        navLinks.push(item.link.en, item.link.fr);
      });
    });
  }
});

const allStaticTargets = Array.from(new Set([
  ...audit.links.map((l: any) => l.target),
  ...navLinks,
  ...Object.keys(slugMappings),
  ...Object.values(slugMappings)
])).filter(t => typeof t === 'string' && t.startsWith('/'));

console.log('Total unique target paths gathered:', allStaticTargets.length);

fs.writeFileSync('all_targets.json', JSON.stringify(allStaticTargets, null, 2));
