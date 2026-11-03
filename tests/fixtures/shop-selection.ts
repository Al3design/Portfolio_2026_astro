import { readFileSync } from 'node:fs';
import type { ShopProductDraft } from '../../src/lib/shop-editorial';

// Independent expected data: read the approved editorial selection, never the
// rendered response or virtual module being tested. No import of draft assets.
const selection = JSON.parse(readFileSync(new URL('../../src/editorial/shop-catalogue/catalogue.json', import.meta.url), 'utf8')) as {
  products: { product: string }[]; latest: { product: string }[]; hero: string;
};
const slugFor = (reference: string) => reference.split('/').pop()!.replace(/\.json$/, '');
export const selectedPieces = selection.products.map(({ product: reference }) => ({
  slug: slugFor(reference),
  product: JSON.parse(readFileSync(new URL(`../../${reference}`, import.meta.url), 'utf8')) as ShopProductDraft,
}));
export const latestPieceSlugs = [
  ...selection.latest.map(item => slugFor(item.product)),
  ...selectedPieces.map(piece => piece.slug).filter(slug => !selection.latest.some(item => slugFor(item.product) === slug)),
].slice(0, 3);
export const latestPieces = latestPieceSlugs.map(slug => selectedPieces.find(piece => piece.slug === slug)!);
