import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, mkdir, symlink, unlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { inventory, assertSnapshot, safePath, probe, seal, version } from '../.agents/skills/portfolio-editorial/scripts/recorrido.mjs';

async function fixture() {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-runner-test-'));
  const site = join(directory, 'site');
  await mkdir(site);
  await mkdir(join(site, 'content'));
  await writeFile(join(site, 'content', 'piece.json'), '{"title":"Original"}');
  const files = await inventory(site);
  return { site, files, overlays: ['content/piece.json'], baseHead: 'a'.repeat(40), node: process.version, version,
    revision: createHash('sha256').update(JSON.stringify(files)).digest('hex') };
}

test('candidato estable y modificación focal: rechaza bytes distintos incluso con el mismo HEAD', async () => {
  const manifest = await fixture();
  assert.equal((await assertSnapshot(manifest)).ok, true);
  await writeFile(join(manifest.site, 'content', 'piece.json'), '{"title":"Cambio"}');
  await assert.rejects(assertSnapshot(manifest), /Candidato cambió/);
});

test('alta no incluida en la revisión invalida el snapshot', async () => {
  const manifest = await fixture();
  await writeFile(join(manifest.site, 'content', 'new.json'), '{}');
  await assert.rejects(assertSnapshot(manifest), /new.json/);
});

test('borrado de una fuente invalida la revisión', async () => {
  const manifest = await fixture();
  await unlink(join(manifest.site, 'content', 'piece.json'));
  await assert.rejects(assertSnapshot(manifest), /piece.json/);
});

test('estado público solo en copia: sella revisión nueva sin heredar aprobación y limita el alcance', async () => {
  const manifest = await fixture();
  await writeFile(join(manifest.site, 'content', 'piece.json'), '{"publicationStatus":"published"}');
  const result = await seal(manifest);
  assert.notEqual(result.revision, manifest.revision);
  assert.equal((await assertSnapshot(JSON.parse(await readFile(result.manifest, 'utf8')))).ok, true);
  await writeFile(join(manifest.site, 'unexpected.txt'), 'ajeno');
  await assert.rejects(seal(manifest), /fuera de overlays/);
});

test('rechaza revisión, Node, versión y HEAD incorrectos', async () => {
  const manifest = await fixture();
  for (const patch of [{ revision: 'b'.repeat(64) }, { node: 'v0.0.0' }, { version: -1 }, { baseHead: 'bad' }]) {
    await assert.rejects(assertSnapshot({ ...manifest, ...patch }));
  }
});

test('rechaza traversal, credenciales, generados y rutas Windows/UNC', () => {
  for (const path of ['../secret', 'public/../secret', 'C:/secret', '//server/share', '.env', '.env.production', 'tina/__generated__/client.ts', 'public/admin/index.html', 'a\\b', 'secret.pem']) assert.throws(() => safePath(path));
});

test('rechaza symlink de archivo que sale del candidato', async () => {
  const manifest = await fixture();
  // Directory junctions do not require Windows Developer Mode.
  const outside = await mkdtemp(join(tmpdir(), 'portfolio-outside-'));
  await symlink(outside, join(manifest.site, 'escape'), process.platform === 'win32' ? 'junction' : 'dir');
  await assert.rejects(inventory(manifest.site), /Symlink/);
});

test('HTTP real: acepta texto/recurso, rechaza versión vieja, privado, login, vacío y medio falso', async t => {
  const server = createServer((req, res) => {
    if (req.url === '/login') { res.writeHead(302, { location: '/' }); res.end(); return; }
    if (req.url === '/image') { res.setHeader('content-type', 'image/png'); res.end(Buffer.from([1, 2, 3])); return; }
    if (req.url === '/empty') { res.setHeader('content-type', 'image/png'); res.end(); return; }
    res.setHeader('content-type', 'text/html'); res.end('<h1>Revision nueva</h1>');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => { server.closeAllConnections(); server.close(resolve); }));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const valid = { origin, pages: [{ path: '/', contains: ['Revision nueva'], absent: ['PRIVATE'] }], assets: ['/image'] };
  assert.equal((await probe(valid)).identityVerified, false);
  for (const patch of [
    { pages: [{ path: '/', contains: ['Revision vieja'] }] },
    { pages: [{ path: '/', contains: ['Revision nueva'], absent: ['Revision nueva'] }] },
    { pages: [{ path: '/login', contains: ['Revision nueva'] }] },
    { assets: ['/empty'] }, { assets: ['/html'] },
  ]) await assert.rejects(probe({ ...valid, ...patch }));
});

test('no consulta red con planes incompletos o origen/ruta inválidos', async () => {
  for (const input of [
    { origin: 'https://example.com', pages: [{ path: '/', contains: [] }] },
    { origin: 'https://example.com', pages: [{ path: '//elsewhere.test/', contains: ['x'] }] },
    { origin: 'https://user:secret@example.com', pages: [] },
    { origin: 'http://example.com', pages: [] },
  ]) await assert.rejects(probe(input));
});
