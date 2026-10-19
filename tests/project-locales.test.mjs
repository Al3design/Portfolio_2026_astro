import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localizedProject, projectLanguages, projectDefaultLanguage, projectUrl } from '../src/lib/project-locales.ts';

const document = {
  title: 'Nombre interno', contentFormat: 'bilingual', language: 'es',
  image: '/assets/mundo.webp', stack: ['VUE', 'Photoshop'], categories: ['3d', 'academic'],
  locales: {
    es: {title: 'Mundo // ficticio.', role: 'Estudio de entorno', imageAlt: 'Esfera volcánica', contentBlocks: [{_template: 'section', title: 'Proceso', text: 'Relieve y lava.'}]},
    en: {title: 'Imagined // world.', imageAlt: 'Volcanic sphere', contentBlocks: [{_template: 'section', title: 'Process', text: 'Terrain and lava.'}]},
  },
};
test('one document resolves both languages while preserving shared data', () => {
  assert.deepEqual(projectLanguages(document), ['es', 'en']);
  const es = localizedProject(document, 'es');
  const en = localizedProject(document, 'en');
  assert.equal(en.title, 'Imagined // world.');
  assert.equal(es.title, 'Mundo // ficticio.');
  assert.equal(en.image, document.image);
  assert.equal(en.stack, document.stack);
  assert.equal(en.contentBlocks[0].text, 'Terrain and lava.');
  assert.equal(en.role, undefined); // Never substitute Spanish editorial text.
  assert.equal(document.title, 'Nombre interno');
});
test('routes distinguish language and preview without creating another document', () => {
  assert.equal(projectDefaultLanguage(document), 'es');
  assert.equal(projectUrl('mundo', document, 'es'), '/projects/mundo');
  assert.equal(projectUrl('mundo', document, 'en'), '/projects/en/mundo');
  assert.equal(projectUrl('mundo', document, 'en', true), '/revision/proyectos/en/mundo');
});
test('an incomplete translation is not advertised or silently substituted', () => {
  const incomplete = {...document, locales: {es: document.locales.es}};
  assert.deepEqual(projectLanguages(incomplete), ['es']);
  assert.throws(() => localizedProject(incomplete, 'en'), /Missing en article translation/);
});
test('legacy documents keep their existing metadata and URL', () => {
  const legacy = {title: 'Around', image: '/assets/around.webp'};
  assert.equal(localizedProject(legacy, 'en'), legacy);
  assert.deepEqual(projectLanguages(legacy), ['en']);
  assert.equal(projectUrl('around', legacy, 'en'), '/projects/around');
});
