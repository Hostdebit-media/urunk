const fs = require('fs');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [from, to] of replacements) {
    content = content.replaceAll(from, to);
  }
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

// 1. Services Index
replaceInFile('src/pages/Services/Index.tsx', [
  ["pathFr: '/fr/", "pathFr: '/"]
]);

// 2. BottomFormSectionFR
replaceInFile('src/components/fr/HomeFR/BottomFormSectionFR.tsx', [
  ['to="/fr/politique-de-confidentialite"', 'to="/politique-de-confidentialite"'],
  ["window.location.href = '/fr/merci';", "window.location.href = '/merci';"]
]);

// 3. PricingSectionFR
replaceInFile('src/components/fr/HomeFR/PricingSectionFR.tsx', [
  ['to="/fr/contact"', 'to="/contact"'],
  ['to="/fr/agence-seo-maroc"', 'to="/agence-seo-maroc"'],
  ['to="/fr/google-ads-maroc"', 'to="/google-ads-maroc"']
]);

// 4. ThankYouFR
replaceInFile('src/pages/fr/ThankYouFR.tsx', [
  ["page: '/fr/merci'", "page: '/merci'"]
]);

console.log('All replacements completed.');
