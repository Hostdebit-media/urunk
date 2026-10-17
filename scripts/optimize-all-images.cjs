const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'optimized');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  {
    name: 'art-house-hero',
    input: path.join(__dirname, '..', 'src', 'assets', 'images', 'art_house_hero_1786618496644.jpg'),
    isHero: true
  },
  {
    name: 'moroccan-riad-hospitality',
    input: path.join(__dirname, '..', 'src', 'assets', 'images', 'moroccan_riad_hospitality_1788460324932.jpg'),
    isHero: false
  },
  {
    name: 'moroccan-riad-architecture',
    input: path.join(__dirname, '..', 'src', 'assets', 'images', 'moroccan_riad_architecture_1788460188625.jpg'),
    isHero: false
  },
  {
    name: 'marrakech-pottery',
    input: path.join(__dirname, '..', 'src', 'assets', 'images', 'marrakech-pottery-workshop-artisan-16x9.png'),
    isHero: false
  },
  {
    name: 'moroccan-catering',
    input: path.join(__dirname, '..', 'src', 'assets', 'images', 'moroccan-corporate-catering-mint-tea-16x9.png'),
    isHero: false
  },
  {
    name: 'sahara-camel',
    input: path.join(__dirname, '..', 'src', 'assets', 'images', 'sahara-camel-caravan-tour-operator-16x9.png'),
    isHero: false
  }
];

const widths = [1200, 800, 400];

async function run() {
  console.log('Optimizing images to AVIF + WebP + JPG fallback...');
  const results = [];

  for (const img of images) {
    if (!fs.existsSync(img.input)) {
      console.warn(`Input not found: ${img.input}`);
      continue;
    }

    const origStats = fs.statSync(img.input);
    console.log(`\nProcessing ${img.name} (Original: ${(origStats.size / 1024).toFixed(1)} KB)...`);

    for (const w of widths) {
      // 1. AVIF
      const avifPath = path.join(outputDir, `${img.name}-${w}.avif`);
      await sharp(img.input)
        .resize(w, null, { withoutEnlargement: true })
        .avif({ quality: img.isHero ? 50 : 55, effort: 2 })
        .toFile(avifPath);
      const avifSize = fs.statSync(avifPath).size;

      // 2. WebP
      const webpPath = path.join(outputDir, `${img.name}-${w}.webp`);
      await sharp(img.input)
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: img.isHero ? 70 : 75, effort: 3 })
        .toFile(webpPath);
      const webpSize = fs.statSync(webpPath).size;

      // 3. JPG Fallback
      const jpgPath = path.join(outputDir, `${img.name}-${w}.jpg`);
      await sharp(img.input)
        .resize(w, null, { withoutEnlargement: true })
        .jpeg({ quality: 78, mozjpeg: true })
        .toFile(jpgPath);
      const jpgSize = fs.statSync(jpgPath).size;

      console.log(`  [${w}w] AVIF: ${(avifSize / 1024).toFixed(1)} KB | WebP: ${(webpSize / 1024).toFixed(1)} KB | JPG: ${(jpgSize / 1024).toFixed(1)} KB`);

      results.push({
        image: img.name,
        width: w,
        avifSize,
        webpSize,
        jpgSize
      });
    }

    // Also write a default base without width for easy fallback
    const defaultAvif = path.join(outputDir, `${img.name}.avif`);
    const defaultWebp = path.join(outputDir, `${img.name}.webp`);
    const defaultJpg = path.join(outputDir, `${img.name}.jpg`);
    fs.copyFileSync(path.join(outputDir, `${img.name}-800.avif`), defaultAvif);
    fs.copyFileSync(path.join(outputDir, `${img.name}-800.webp`), defaultWebp);
    fs.copyFileSync(path.join(outputDir, `${img.name}-800.jpg`), defaultJpg);
  }

  console.log('\nImage optimization complete! All assets generated in public/images/optimized/');
}

run().catch(err => {
  console.error('Optimization failed:', err);
  process.exit(1);
});
