import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { readShopSelection, containedShopFile } from '../scripts/lib/shop-catalogue-selection.mjs';
import { shopCataloguePlugin } from '../scripts/lib/shop-catalogue-plugin.mjs';

const reference = slug => `src/editorial/shop-products/${slug}.json`;
const selectionRow = slug => ({ product: reference(slug) });
const original = 'src/editorial/shop-assets/intake-2026-11-02/piece.jpg';
const publicPhoto = '/assets/shop/new-piece/photo.png';
const imageBytes = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jZQ0AAAAASUVORK5CYII=', 'base64');

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'shop-selection-'));
  t.after(() => {
    assert.match(relative(tmpdir(), root), /^shop-selection-[a-zA-Z0-9]+$/);
    return rm(root, { recursive: true, force: true });
  });
  const write = async (file, value) => {
    const destination = join(root, file);
    await mkdir(join(destination, '..'), { recursive: true });
    await writeFile(destination, Buffer.isBuffer(value) ? value : JSON.stringify(value));
  };
  const config = { products: [selectionRow('selected-piece')], latest: [selectionRow('selected-piece')], hero: reference('selected-piece') };
  const product = {
    title: 'Selected', status: 'draft', productionMode: 'pending', productionNotes: 'PRIVATE-SELECTED-NOTE',
    locales: { es: { title: 'Pieza', description: 'Descripción.' }, en: { title: 'Piece', description: 'Description.' } },
    photos: [{ sourcePath: original, kind: 'photo', altEs: 'Foto de la pieza.', altEn: 'Photo of the piece.' }],
  };
  await write('src/editorial/shop-catalogue/catalogue.json', config);
  await write(reference('selected-piece'), product);
  await write(reference('unselected-draft'), { title: 'UNSELECTED-PRIVATE-DRAFT', photos: [{ sourcePath: '../secret.jpg' }] });
  await write(original, imageBytes);
  await write('public' + publicPhoto, imageBytes);
  return { root, write, config, product };
}

test('selection preserves explicit order and ignores incomplete unselected drafts', async t => {
  const { root } = await fixture(t);
  const result = await readShopSelection(root);
  assert.deepEqual(result.selection, { slugs: ['selected-piece'], latestSlugs: ['selected-piece'], heroSlug: 'selected-piece' });
  assert.deepEqual(Object.keys(result.documents), ['selected-piece']);
  assert.deepEqual([...result.photoFiles.keys()], [original]);
});

test('a selected upload takes priority and enters a content-addressed Astro import', async t => {
  const { root, write, product } = await fixture(t);
  product.photos[0].image = publicPhoto;
  await write(reference('selected-piece'), product);
  const plugin = shopCataloguePlugin();
  plugin.configResolved({ root });
  const id = plugin.resolveId('virtual:shop-catalogue');
  const watched = [];
  const code = await plugin.load.call({ addWatchFile: file => watched.push(file) }, id);
  assert.match(code, /\.astro\/shop-media\/[a-f0-9]{64}\.png/);
  assert.ok(code.includes(publicPhoto));
  assert.ok(!code.includes('UNSELECTED-PRIVATE-DRAFT'));
  const cachePath = JSON.parse(code.match(/import photo0 from ("[^"]+")/)[1]).replace('/@fs/', '');
  assert.deepEqual(await readFile(cachePath), imageBytes);
  assert.ok(watched.some(file => file.replaceAll('\\', '/').endsWith(publicPhoto)));
});

test('duplicates and unselected hero/latest fail instead of changing the catalogue', async t => {
  const { root, write, config } = await fixture(t);
  for (const invalid of [
    { ...config, products: [...config.products, ...config.products] },
    { ...config, latest: [selectionRow('unselected-draft')] },
    { ...config, hero: reference('unselected-draft') },
    { ...config, latest: Array(4).fill(selectionRow('selected-piece')) },
    { ...config, products: [{ product: 'src/editorial/shop-products/../secret.json' }] },
  ]) {
    await write('src/editorial/shop-catalogue/catalogue.json', invalid);
    await assert.rejects(readShopSelection(root), /Duplicate|latest|hero|Invalid shop product/);
  }
});

test('selection rows require an object containing one product reference', async t => {
  const { root, write, config } = await fixture(t);
  for (const row of [null, {}, [], reference('selected-piece'), { product: null }]) {
    for (const field of ['products', 'latest']) {
      await write('src/editorial/shop-catalogue/catalogue.json', { ...config, [field]: [row] });
      await assert.rejects(readShopSelection(root), /Invalid shop selection row|Invalid shop product reference/);
    }
  }
});

test('invalid explicit uploads never fall back to an otherwise valid original', async t => {
  const { root, write, product } = await fixture(t);
  for (const invalid of ['/assets/shop/../secret.jpg', '/assets/projects/secret.jpg', 'https://example.com/photo.jpg', '/assets/shop/photo.svg']) {
    product.photos[0].image = invalid;
    await write(reference('selected-piece'), product);
    await assert.rejects(readShopSelection(root), /Invalid shop upload/);
  }
});

test('missing photos, missing bilingual alt and directory escape are rejected', async t => {
  const { root, write, product } = await fixture(t);
  product.photos[0].altEn = '';
  await write(reference('selected-piece'), product);
  await assert.rejects(readShopSelection(root), /bilingual alt/);
  product.photos[0].altEn = 'Photo.';
  product.photos[0].sourcePath = original.replace('piece.jpg', 'missing.jpg');
  await write(reference('selected-piece'), product);
  await assert.rejects(readShopSelection(root), { code: 'ENOENT' });
  await assert.rejects(containedShopFile(join(root, 'public/assets/shop'), join(root, original)), /escapes/);
});
