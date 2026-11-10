import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reorderPage, moveToPosition } from '../src/lib/editorial-list.ts';

const order = Array.from({ length: 27 }, (_, index) => `article-${index + 1}`);
test('reordering the middle page preserves both off-page ranges and the source', () => {
  const page = order.slice(10, 20).reverse();
  const next = reorderPage(order, 10, page);
  assert.deepEqual(next.slice(0, 10), order.slice(0, 10));
  assert.deepEqual(next.slice(10, 20), page);
  assert.deepEqual(next.slice(20), order.slice(20));
  assert.equal(order[10], 'article-11');
  assert.equal(next.length, 27);
});
test('a move across pages uses a global position, preserving every reference', () => {
  const next = moveToPosition(order, 'article-27', 2);
  assert.equal(next[1], 'article-27');
  assert.deepEqual(next.filter(id => id !== 'article-27'), order.slice(0, 26));
  assert.deepEqual(moveToPosition(next, 'article-27', 27), order);
});
test('stale page permutations and invalid destinations fail without altering data', () => {
  assert.throws(() => reorderPage(order, 10, ['article-11', 'article-11']));
  assert.throws(() => reorderPage(order, 10, ['article-1']));
  assert.throws(() => moveToPosition(order, 'missing', 1));
  assert.throws(() => moveToPosition(order, 'article-1', 28));
  assert.throws(() => moveToPosition(order, 'article-1', 1.5));
  assert.equal(order.length, 27);
});
