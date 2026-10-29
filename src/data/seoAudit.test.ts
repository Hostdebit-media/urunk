import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeRoutePath,
  getEquivalentRoute,
  hasReciprocalTranslation,
} from './slugMappings';
import { servicesData, extractNumericMadPrice } from './servicesData';

test('extractNumericMadPrice extracts first MAD figure without concatenating secondary retainers', () => {
  assert.equal(extractNumericMadPrice('Starting at 12,000 MAD'), '12000');
  assert.equal(extractNumericMadPrice('À partir de 12 000 MAD (paiement unique)'), '12000');
  assert.equal(extractNumericMadPrice('16 000 MAD + 4 000 MAD/mois'), '16000');
  assert.equal(extractNumericMadPrice('From 5,000 MAD / month'), '5000');
  assert.equal(extractNumericMadPrice('Sur devis personnalisé'), null);
  assert.equal(extractNumericMadPrice(''), null);
});

test('normalizeRoutePath strips trailing slashes and query/hash fragments cleanly', () => {
  assert.equal(normalizeRoutePath('/'), '/');
  assert.equal(normalizeRoutePath('/site-web-hotel/'), '/site-web-hotel');
  assert.equal(normalizeRoutePath('/en/riad-seo-marrakech/?utm=test#faq'), '/en/riad-seo-marrakech');
});

test('slugMappings maintains strict bidirectional reciprocity for all hospitality target URLs', () => {
  const reciprocalPairs: [string, string][] = [
    ['/', '/en'],
    ['/site-web-hotel', '/en/hotel-website-design'],
    ['/services/creation-site-web', '/en/services/website-design'],
    ['/seo-riad-marrakech', '/en/riad-seo-marrakech'],
    ['/seo-hotel', '/en/hotel-seo'],
    ['/marketing-digital-hotelier', '/en/hotel-digital-marketing'],
    ['/services/google-business-profile', '/en/services/google-business-profile'],
    ['/reservation-directe', '/en/direct-booking'],
  ];

  for (const [frPath, enPath] of reciprocalPairs) {
    assert.equal(getEquivalentRoute(frPath), enPath, `Expected ${frPath} -> ${enPath}`);
    assert.equal(getEquivalentRoute(enPath), frPath, `Expected ${enPath} -> ${frPath}`);
    assert.equal(hasReciprocalTranslation(frPath), true, `Expected ${frPath} to be reciprocal`);
    assert.equal(hasReciprocalTranslation(enPath), true, `Expected ${enPath} to be reciprocal`);
  }
});

test('non-reciprocal routes fall back safely without claiming reciprocal hreflang', () => {
  assert.equal(getEquivalentRoute('/creation-site-web'), '/en/services/website-design');
  assert.equal(hasReciprocalTranslation('/creation-site-web'), false);

  assert.equal(getEquivalentRoute('/blog/article-uniquement-francophone'), '/en/blog');
  assert.equal(hasReciprocalTranslation('/blog/article-uniquement-francophone'), false);
});

test('all ServiceLandingPage-backed tracked question entries contain complete GEO/AEO blocks and valid pricing', () => {
  const trackedTargets: { key: string; lang: 'fr' | 'en'; questionId: string }[] = [
    { key: 'hotel-website-design', lang: 'fr', questionId: 'A1' },
    { key: 'riad-seo-marrakech', lang: 'en', questionId: 'B1' },
    { key: 'hotel-seo', lang: 'en', questionId: 'B2' },
    { key: 'hotel-digital-marketing', lang: 'fr', questionId: 'C1/C2' },
    { key: 'google-business-profile-optimization', lang: 'en', questionId: 'D1/D2' },
    { key: 'direct-booking', lang: 'fr', questionId: 'E1/E2' },
  ];

  for (const target of trackedTargets) {
    const entry = servicesData[target.key]?.[target.lang];
    assert.ok(entry, `Missing servicesData[${target.key}][${target.lang}] for ${target.questionId}`);

    assert.ok(entry.directAnswer, `Missing directAnswer for ${target.questionId}`);
    assert.ok(entry.directAnswer.question.length > 20);
    assert.ok(entry.directAnswer.answer.length > 80);

    assert.ok(entry.comparisonTable, `Missing comparisonTable for ${target.questionId}`);
    assert.ok(entry.comparisonTable.headers.length >= 4);
    assert.ok(entry.comparisonTable.rows.length >= 3);
    for (const row of entry.comparisonTable.rows) {
      assert.equal(
        row.length,
        entry.comparisonTable.headers.length,
        `Mismatched row column count in ${target.key}.${target.lang}`
      );
    }

    assert.ok(entry.evaluationCriteria, `Missing evaluationCriteria for ${target.questionId}`);
    assert.ok(entry.evaluationCriteria.items.length >= 4);

    assert.ok(entry.faqs.length >= 5, `Expected >= 5 FAQs for ${target.questionId}`);
    assert.ok(entry.relatedLinks && entry.relatedLinks.length >= 4, `Expected >= 4 relatedLinks for ${target.questionId}`);
    for (const link of entry.relatedLinks) {
      assert.ok(link.to.startsWith('/'), `Internal link must start with / in ${target.key}.${target.lang}: ${link.to}`);
    }

    const numericPrice = extractNumericMadPrice(entry.investmentPrice);
    assert.ok(numericPrice && /^\d+$/.test(numericPrice), `Expected clean numeric MAD price for ${target.key}.${target.lang}`);
  }
});

test('servicesData contains zero unverified #1 ranking guarantees', () => {
  const serialized = JSON.stringify(servicesData);
  assert.equal(/rank #1|#1 ranking|première place garantie|numéro 1 garanti/i.test(serialized), false);
});
