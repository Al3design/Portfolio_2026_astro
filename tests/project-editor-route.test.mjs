import { test } from 'node:test';
import assert from 'node:assert/strict';
import { projectEditorRoute, resolveProjectEditorRoute, localEditorHostname } from '../src/lib/project-editor-route.ts';

test('a Tina metadata-only list click opens local review, never an absent public route', () => {
  for (const slug of ['mundo', 'toplomero', 'around']) {
    assert.equal(projectEditorRoute({_sys: {relativePath: `${slug}.mdx`}}, true), `/revision/proyectos/${slug}`);
  }
});
test('metadata-only and draft documents use native editing outside local development', () => {
  assert.equal(projectEditorRoute({_sys: {relativePath: 'mundo.mdx'}}, false), undefined);
  assert.equal(projectEditorRoute({_sys: {relativePath: 'mundo.mdx'}, title: 'Mundo', publicationStatus: 'draft'}, false), undefined);
});
test('full published documents can still resolve their public page', () => {
  assert.equal(projectEditorRoute({_sys: {relativePath: 'around.mdx'}, title: 'Around'}, false), '/projects/around');
});
test('local route handling is limited to loopback hosts', () => {
  for (const hostname of ['localhost', '127.0.0.1', '[::1]']) assert.equal(localEditorHostname(hostname), true);
  assert.equal(localEditorHostname('al3design.dev'), false);
});

test('Cloud metadata-only clicks use an existing deployed page', async () => {
  const route = await resolveProjectEditorRoute({_sys: {relativePath: 'bdm-consultores.mdx'}}, false, async (url, options) => {
    assert.equal(url, '/projects/bdm-consultores');
    assert.equal(options.method, 'HEAD');
    assert.equal(options.redirect, 'error');
    assert.equal(options.cache, 'no-store');
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(null, {status: 200});
  });
  assert.equal(route, '/projects/bdm-consultores');
});

test('missing, protected or unavailable deployed pages retain native editing', async () => {
  const doc = {_sys: {relativePath: 'mundo.mdx'}};
  for (const status of [401, 403, 404, 500]) {
    assert.equal(await resolveProjectEditorRoute(doc, false, async () => new Response(null, {status})), undefined);
  }
  assert.equal(await resolveProjectEditorRoute(doc, false, async () => { throw new TypeError('redirect or network failure'); }), undefined);
});

test('local review, explicit drafts, hidden and unsafe slugs do not probe public routes', async () => {
  const noRequest = async () => { assert.fail('unexpected network request'); };
  const doc = {_sys: {relativePath: 'mundo.mdx'}};
  assert.equal(await resolveProjectEditorRoute(doc, true, noRequest), '/revision/proyectos/mundo');
  assert.equal(await resolveProjectEditorRoute({...doc, publicationStatus: 'draft'}, false, noRequest), undefined);
  assert.equal(await resolveProjectEditorRoute({...doc, showInPortfolio: false}, false, noRequest), undefined);
  assert.equal(await resolveProjectEditorRoute({_sys: {relativePath: '../mundo.mdx'}}, false, noRequest), undefined);
});
