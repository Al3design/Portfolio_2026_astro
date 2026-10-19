import { test } from 'node:test';
import assert from 'node:assert/strict';
import { projectEditorRoute, localEditorHostname } from '../src/lib/project-editor-route.ts';

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
