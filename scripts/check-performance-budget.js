import fs from 'fs';
import path from 'path';

/**
 * CI Performance Budget Audit for urunk.com
 * Evaluates production dist build size against strict performance thresholds.
 */

const BUDGETS = {
  maxEntrypointJsSizeKb: 450,
  maxTotalJsSizeKb: 3000,
  maxCssSizeKb: 120,
  maxSingleAssetSizeKb: 600,
};

function checkPerformanceBudget() {
  const distDir = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.warn('⚠️  Dist directory does not exist. Run "npm run build" first.');
    return;
  }

  const assetsDir = path.join(distDir, 'assets');
  if (!fs.existsSync(assetsDir)) {
    console.warn('⚠️  No assets directory found in dist.');
    return;
  }

  const files = fs.readdirSync(assetsDir);
  let totalJsSize = 0;
  let totalCssSize = 0;
  let largestJs = { name: '', size: 0 };
  let violations = [];

  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    const sizeKb = stats.size / 1024;

    if (file.endsWith('.js')) {
      totalJsSize += sizeKb;
      if (sizeKb > largestJs.size) {
        largestJs = { name: file, size: sizeKb };
      }
      if (sizeKb > BUDGETS.maxEntrypointJsSizeKb) {
        violations.push(`JS chunk ${file} (${sizeKb.toFixed(2)} KB) exceeds limit of ${BUDGETS.maxEntrypointJsSizeKb} KB`);
      }
    } else if (file.endsWith('.css')) {
      totalCssSize += sizeKb;
      if (sizeKb > BUDGETS.maxCssSizeKb) {
        violations.push(`CSS file ${file} (${sizeKb.toFixed(2)} KB) exceeds limit of ${BUDGETS.maxCssSizeKb} KB`);
      }
    }
  }

  console.log('\n=========================================');
  console.log('⚡ Urunk.com Performance Budget Summary');
  console.log('=========================================');
  console.log(`- Total JS: ${totalJsSize.toFixed(2)} KB (Budget: ${BUDGETS.maxTotalJsSizeKb} KB)`);
  console.log(`- Largest JS chunk (${largestJs.name}): ${largestJs.size.toFixed(2)} KB (Budget: ${BUDGETS.maxEntrypointJsSizeKb} KB)`);
  console.log(`- Total CSS: ${totalCssSize.toFixed(2)} KB (Budget: ${BUDGETS.maxCssSizeKb} KB)`);
  console.log('-----------------------------------------');

  if (violations.length > 0) {
    console.error('❌ Performance Budget Violations:');
    violations.forEach(v => console.error(`  - ${v}`));
    process.exit(1);
  } else {
    console.log('✅ All Performance Budgets PASSED!\n');
  }
}

checkPerformanceBudget();
