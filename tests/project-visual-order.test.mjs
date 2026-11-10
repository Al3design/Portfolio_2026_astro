import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseVisualOrder, replaceVisualScope, visualOrderRanks } from '../src/lib/project-visual-order.ts';
import { compareProjectOrder } from '../src/lib/project-order.ts';

const path = name => `src/content/projects/${name}.mdx`;
const document = { scopes: [
  { category: 'all', projects: ['b', 'hidden', 'a'].map(name => ({ project: path(name) })) },
  { category: '3d', projects: [{ project: path('a') }] },
] };

test('visual positions supersede numeric ranks and new articles append', () => {
  const projects = ['new', 'a', 'b'].map(slug => ({ slug, order: -99, visualOrders: visualOrderRanks(`${slug}.mdx`, document) }));
  assert.deepEqual([...projects].sort(compareProjectOrder).map(project => project.slug), ['b', 'a', 'new']);
  assert.deepEqual([...projects].sort((a,b) => compareProjectOrder(a,b,'3d')).map(project => project.slug), ['a', 'new', 'b']);
  assert.equal(compareProjectOrder({ order: 8 }, { order: 1 }), 7);
});

test('moving the editable subset preserves hidden slots and other categories', () => {
  const snapshot = structuredClone(document);
  const updated = replaceVisualScope(document, 'all', [path('a'), path('b')], [path('b'), path('a')]);
  assert.deepEqual(updated.scopes.find(scope => scope.category === 'all').projects.map(item => item.project), [path('a'), path('hidden'), path('b')]);
  assert.deepEqual(updated.scopes.find(scope => scope.category === '3d'), document.scopes[1]);
  assert.deepEqual(document, snapshot);
  assert.throws(() => replaceVisualScope(document, 'all', [path('b')], [path('a'),path('b')]), /lista cambió/);
});

test('duplicate scopes, references and invalid paths fail before persistence', () => {
  assert.throws(() => parseVisualOrder({ scopes: [...document.scopes, document.scopes[0]] }), /duplicado/);
  assert.throws(() => parseVisualOrder({ scopes: [{ category:'all', projects:[{project:path('a')},{project:path('A')}] }] }), /duplicada/);
  assert.throws(() => parseVisualOrder({ scopes: [{ category:'all', projects:[{project:'../private.json'}] }] }), /inválida/);
  assert.deepEqual(parseVisualOrder({ scopes: [] }), { scopes: [] });
});
