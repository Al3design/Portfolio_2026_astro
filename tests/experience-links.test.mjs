import { test } from 'node:test';
import assert from 'node:assert/strict';
import { experienceId, experienceUrl } from '../src/lib/experience-links.ts';

test('article links target the exact Resume card anchor', () => {
  const url = experienceUrl('around');
  assert.equal(url, '/resume#experience-around');
  assert.equal(decodeURIComponent(url.split('#')[1]), experienceId('around'));
});
test('nested slugs retain distinct fragment identities', () => {
  assert.notEqual(experienceId('studio/around'), experienceId('studio-around'));
  assert.equal(decodeURIComponent(experienceUrl('studio/around').split('#')[1]), experienceId('studio/around'));
});
