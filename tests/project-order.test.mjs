import { test } from 'node:test';
import assert from 'node:assert/strict';
import { projectOrder, compareProjectOrder } from '../src/lib/project-order.ts';

test('general ordering retains zero, negative ranks and the legacy missing-rank default', () => {
  assert.equal(projectOrder({}), 0);
  assert.equal(projectOrder({ order: 0 }), 0);
  assert.equal(projectOrder({ order: -1 }), -1);
  assert.equal(projectOrder({ order: NaN }), 0);
});

test('a category override changes only that filtered list and zero overrides a nonzero rank', () => {
  const article = { order: 8, categoryOrders: [{ category: '3d', order: 0 }] };
  assert.equal(projectOrder(article), 8);
  assert.equal(projectOrder(article, '3d'), 0);
  assert.equal(projectOrder(article, 'web-dev'), 8);
});

test('category ordering applies before pagination and leaves the source list intact', () => {
  const original = [
    { slug: 'one', order: 1 },
    { slug: 'two', order: 2 },
    { slug: 'three', order: 3 },
    { slug: 'four', order: 4, categoryOrders: [{ category: '3d', order: -1 }] },
  ];
  const ordered = [...original].sort((a, b) => compareProjectOrder(a, b, '3d'));
  assert.deepEqual(ordered.slice(0, 3).map(article => article.slug), ['four', 'one', 'two']);
  assert.deepEqual(original.map(article => article.slug), ['one', 'two', 'three', 'four']);
  assert.equal(compareProjectOrder({ order: 2 }, { order: 2 }), 0);
});
