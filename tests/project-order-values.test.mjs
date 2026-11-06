import { test } from 'node:test';
import assert from 'node:assert/strict';
import { projectOrderValues } from '../tina/dashboard/projectOrderValues.ts';

const document = {
  title: 'Artículo completo', order: 5,
  body: { type: 'root', children: [{ type: 'p', children: [{ text: 'Contenido MDX' }] }] },
  locales: { es: { title: 'Español', contentBlocks: [{ _template: 'section', text: 'Proceso' }] }, en: { title: 'English' } },
  categories: ['ui-ux', 'web-dev'],
  categoryOrders: [{ category: 'web-dev', order: 9 }],
  image: '/assets/article.webp', showInPortfolio: true, customMetadata: { keep: true },
};

test('general order preserves the complete native document and the input snapshot', () => {
  const snapshot = structuredClone(document);
  const result = projectOrderValues(document, 'all', 7);
  assert.deepEqual(result, { ...snapshot, order: 7 });
  assert.deepEqual(document, snapshot);
  assert.equal(projectOrderValues(document, 'all', null).order, 0);
});

test('category edits and removal preserve all content and other category positions', () => {
  const updated = projectOrderValues(document, 'ui-ux', 0);
  assert.deepEqual(updated, { ...document, categoryOrders: [{ category: 'web-dev', order: 9 }, { category: 'ui-ux', order: 0 }] });
  assert.deepEqual(projectOrderValues(updated, 'ui-ux', null), document);
});

test('an incomplete read is rejected before a write can be prepared', () => {
  for (const value of [null, {}, { order: 7 }, { title: 'Faltó el cuerpo' }]) {
    assert.throws(() => projectOrderValues(value, 'all', 7), /ficha completa/);
  }
  assert.throws(() => projectOrderValues(document, '3d', 1), /categoría/);
  assert.throws(() => projectOrderValues(document, 'all', 1.5), /entero/);
  for (const categoryOrders of [[null], [{ category: 'web-dev', order: '9' }],
    [{ category: 'web-dev', order: 9 }, { category: 'web-dev', order: 2 }]]) {
    assert.throws(() => projectOrderValues({ ...document, categoryOrders }, 'ui-ux', 1), /formato inválido/);
  }
});
