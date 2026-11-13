import { test } from 'node:test';
import assert from 'node:assert/strict';
import { prependNewShopReferences } from '../src/lib/shop-selection-order.ts';
import { moveToPosition } from '../src/lib/editorial-list.ts';

test('batch intake and successive Tina additions produce the same newest-first order', () => {
  const before = Object.freeze(['old-b', 'old-a']);
  const additions = Object.freeze(['new-a', 'new-b', 'new-c']);
  const batch = prependNewShopReferences(before, additions);
  const tina = additions.reduce((order, id) => prependNewShopReferences(order, [id]), before);
  assert.deepEqual(batch, ['new-c', 'new-b', 'new-a', 'old-b', 'old-a']);
  assert.deepEqual(tina, batch);
});

test('replayed intake respects a saved manual position and adds only genuinely new references', () => {
  const selected = prependNewShopReferences(['old-b', 'old-a'], ['new-a', 'new-b']);
  const manual = moveToPosition(selected, 'new-b', 4);
  assert.deepEqual(prependNewShopReferences(manual, ['new-a', 'new-b']), manual);
  assert.deepEqual(prependNewShopReferences(manual, ['new-a', 'new-c', 'new-c']), ['new-c', ...manual]);
  assert.deepEqual(manual, ['new-a', 'old-b', 'old-a', 'new-b']);
});
