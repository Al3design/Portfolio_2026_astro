import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shopLandingProducts } from '../src/lib/shop-landing-order.ts';
import { prependNewShopReferences } from '../src/lib/shop-selection-order.ts';

test('automatic landing follows additions and saved manual catalogue movements without mutating data', () => {
  const ids = prependNewShopReferences(['old-a', 'old-b', 'old-c'], ['new-a', 'new-b']);
  const catalogue = Object.freeze(ids.map(slug => Object.freeze({ slug })));
  assert.deepEqual(shopLandingProducts(catalogue, []).slice(0, 3).map(x => x.slug), ['new-b', 'new-a', 'old-a']);
  const manual = [catalogue[4], ...catalogue.slice(0, 4)];
  assert.deepEqual(shopLandingProducts(manual, []).slice(0, 3).map(x => x.slug), ['old-c', 'new-b', 'new-a']);
  assert.equal(catalogue[0].slug, 'new-b');
});

test('explicit highlights retain editor order, keep all other pieces and clearing restores automatic order', () => {
  const catalogue = ['newest', 'new', 'old', 'older'].map(slug => ({ slug }));
  const preferred = Object.freeze(['older', 'old']);
  const result = shopLandingProducts(catalogue, preferred);
  assert.deepEqual(result.map(x => x.slug), ['older', 'old', 'newest', 'new']);
  assert.equal(result[0], catalogue[3]);
  assert.deepEqual(shopLandingProducts(catalogue, []), catalogue);
  assert.throws(() => shopLandingProducts(catalogue, ['missing']), /Missing selected shop highlight/);
});
