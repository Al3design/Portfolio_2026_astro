import { test } from 'node:test';
import assert from 'node:assert/strict';
import { articleBlockKind, articleBlocksMarkdown, articleImageHref } from '../src/lib/article-blocks.ts';

test('MDX frontmatter and Tina GraphQL discriminants produce the same export', () => {
  const raw = [{ _template: 'section', title: 'El desafío', text: 'Una caminata con piernas cortas.', bullets: ['Rigging propio'] }];
  const graphql = [{ __typename: 'ProjectsContentBlocksSection', title: raw[0].title, text: raw[0].text, bullets: raw[0].bullets }];
  assert.equal(articleBlocksMarkdown(raw), articleBlocksMarkdown(graphql));
  assert.equal(articleBlocksMarkdown(raw), articleBlocksMarkdown([{...graphql[0], __typename: 'ProjectsLocalesEsContentBlocksSection'}]));
  assert.match(articleBlocksMarkdown(raw), /## El desafío/);
  assert.match(articleBlocksMarkdown(raw), /- Rigging propio/);
});
test('media and cards retain captions, credits, transcript and pills in Markdown', () => {
  const md = articleBlocksMarkdown([
    { _template: 'image', src: '/assets/world.webp', alt: 'Esfera rocosa', caption: 'Prueba de terreno', credit: 'Calavera: recurso de terceros' },
    { _template: 'gallery', images: [{src: '/assets/detail.webp', alt: 'Detalle de grietas', caption: 'Lava'}] },
    { _template: 'video', title: 'Muestra', src: '/assets/world.mp4', transcript: 'La esfera gira.', caption: 'Sin audio', credit: 'Alejandro', hasAudio: false },
    { _template: 'cards', cards: [{title: 'Herramientas', text: 'Composición', tags: ['VUE', 'Photoshop']}] },
  ]);
  for (const value of ['Esfera rocosa', 'Prueba de terreno', 'Calavera: recurso de terceros', 'Detalle de grietas', 'Lava', '/assets/world.mp4', 'La esfera gira.', 'Sin audio', 'Alejandro', 'VUE · Photoshop']) assert.ok(md.includes(value));
});
test('unknown blocks fail explicitly instead of losing editorial content', () => {
  assert.equal(articleBlockKind({_template: 'unknown'}), undefined);
  assert.throws(() => articleBlocksMarkdown([{_template: 'unknown'}]), /Unknown article block/);
});

test('image links preserve the original video destination and reject executable schemes', () => {
  const href = 'https://www.youtube.com/watch?v=i7BmQZgSdpc';
  const block = {_template: 'image', src: '/thumb.webp', alt: 'Video', href, linkLabel: 'Ver video oficial en YouTube'};
  assert.ok(articleBlocksMarkdown([block]).includes(`[Ver video oficial en YouTube](${href})`));
  assert.equal(articleImageHref('javascript:alert(1)'), undefined);
  assert.equal(articleImageHref('//example.org'), undefined);
  assert.equal(articleImageHref('/projects/around'), '/projects/around');
  assert.ok(!articleBlocksMarkdown([{...block, href: 'javascript:alert(1)'}]).includes('javascript:'));
});
