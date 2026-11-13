import { readFile, writeFile, readdir, lstat, realpath, mkdir, copyFile, mkdtemp } from 'node:fs/promises';
import { resolve, relative, isAbsolute, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const version = 1;
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const sha = value => /^[a-f0-9]{40,64}$/.test(value);
const forbidden = path => /(^|\/)(?:\.git|\.vercel|node_modules|dist|\.astro|__generated__)(\/|$)/.test(path)
  || (/(^|\/)\.env[^/]*(?:\/|$)/.test(path) && !/(^|\/)\.env\.example$/.test(path)) || /^public\/admin(?:\/|$)/.test(path)
  || /\.(?:pem|key|pfx|p12)$/i.test(path);

export function safePath(path) {
  if (typeof path !== 'string' || !path || path.includes('\\') || path.includes(':')
    || isAbsolute(path) || path.split('/').some(p => !p || p === '.' || p === '..') || forbidden(path)) {
    throw new Error(`Path no permitido: ${String(path)}`);
  }
  return path;
}

export async function confined(root, path) {
  safePath(path);
  const base = await realpath(root);
  let current = base;
  for (const part of path.split('/')) {
    current = join(current, part);
    if ((await lstat(current)).isSymbolicLink()) throw new Error(`Symlink no permitido: ${path}`);
  }
  const actual = await realpath(current);
  const rel = relative(base, actual);
  if (!rel || rel.startsWith('..') || isAbsolute(rel)) throw new Error(`Fuera del candidato: ${path}`);
  if (!(await lstat(actual)).isFile()) throw new Error(`No es archivo: ${path}`);
  return actual;
}

export async function inventory(root, prefix = '') {
  const result = {};
  const entries = await readdir(join(root, prefix), { withFileTypes: true });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    const path = prefix ? `${prefix}/${entry.name}` : entry.name;
    safePath(path); // Fail closed: neither hidden credentials nor generated output are silently ignored.
    if (entry.isSymbolicLink()) throw new Error(`Symlink no permitido: ${path}`);
    if (entry.isDirectory()) Object.assign(result, await inventory(root, path));
    else result[path] = digest(await readFile(await confined(root, path)));
  }
  return result;
}

export async function assertSnapshot(manifest) {
  if (manifest.version !== version || manifest.node !== process.version || !sha(manifest.baseHead)) throw new Error('Versión, Node o HEAD inválido');
  if (!manifest.files || !Object.keys(manifest.files).length) throw new Error('Inventario vacío');
  if (digest(JSON.stringify(manifest.files)) !== manifest.revision) throw new Error('Revisión del manifiesto incorrecta');
  const actual = await inventory(manifest.site);
  const keys = new Set([...Object.keys(actual), ...Object.keys(manifest.files)]);
  const changed = [...keys].filter(path => actual[path] !== manifest.files[path]);
  if (changed.length) throw new Error(`Candidato cambió: ${changed.slice(0, 8).join(', ')}`);
  return { ok: true, revision: manifest.revision, baseHead: manifest.baseHead, files: keys.size, scope: 'integridad del candidato; no suite ni deploy' };
}

export async function seal(manifest) {
  if (manifest.version !== version || manifest.node !== process.version || !sha(manifest.baseHead)
    || digest(JSON.stringify(manifest.files)) !== manifest.revision || !Array.isArray(manifest.overlays)) throw new Error('Manifiesto base inválido');
  const files = await inventory(manifest.site);
  const changed = [...new Set([...Object.keys(files), ...Object.keys(manifest.files)])].filter(path => files[path] !== manifest.files[path]);
  if (!changed.length) return { ok: true, unchanged: true, revision: manifest.revision };
  if (changed.some(path => !manifest.overlays.includes(path) || !files[path])) throw new Error('Cambios fuera de overlays o borrados: preparar un nuevo alcance');
  const revision = digest(JSON.stringify(files));
  const next = { ...manifest, files, revision, previousRevision: manifest.revision, candidateChanges: changed, createdAt: new Date().toISOString() };
  const path = join(dirname(manifest.site), `manifest-${revision}.json`);
  await writeFile(path, JSON.stringify(next, null, 2), { flag: 'wx' });
  return { ok: true, manifest: path, revision, changed, note: 'Nueva revisión: requiere revisar diff y Preview; no hereda OK previo.' };
}

export async function prepare(root, paths) {
  if (!Array.isArray(paths) || !paths.length || new Set(paths).size !== paths.length) throw new Error('Lista de archivos vacía, inválida o duplicada');
  const git = args => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }).trim();
  const baseHead = git(['rev-parse', 'HEAD']);
  const branch = git(['branch', '--show-current']);
  if (!sha(baseHead) || !branch) throw new Error('Se requiere HEAD y rama activa');
  // Reject archive symlinks/submodules and unsafe names before extracting.
  for (const row of git(['ls-tree', '-rz', 'HEAD']).split('\0').filter(Boolean)) {
    const [meta, path] = row.split('\t');
    if (!/^100(?:644|755) blob /.test(meta)) throw new Error(`Modo no admitido en HEAD: ${path}`);
    safePath(path);
  }
  const sources = await Promise.all(paths.map(async path => [safePath(path), await confined(root, path)]));
  const destination = await mkdtemp(join(tmpdir(), 'portfolio-editorial-'));
  const site = join(destination, 'site');
  await mkdir(site);
  const archive = join(destination, 'head.tar');
  git(['archive', '--format=tar', `--output=${archive}`, baseHead]);
  execFileSync('tar', ['-xf', archive, '-C', site], { stdio: 'pipe' });
  for (const [path, source] of sources) {
    const target = join(site, path);
    await mkdir(dirname(target), { recursive: true });
    await copyFile(source, target);
  }
  const files = await inventory(site);
  const manifest = { version, node: process.version, createdAt: new Date().toISOString(), baseHead, branch,
    site, overlays: paths, files, revision: digest(JSON.stringify(files)), deployable: false,
    note: 'Revisar overlay/dependencias y proyecto Vercel antes de autorizar Preview. Sin build ni deploy.' };
  const manifestPath = join(destination, 'manifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  return { ok: true, site, manifest: manifestPath, revision: manifest.revision, baseHead, overlays: paths.length };
}

function originFor(value) {
  const origin = new URL(value);
  if (origin.username || origin.password || origin.search || origin.hash || origin.pathname !== '/') throw new Error('Origen debe ser solo esquema y host');
  if (origin.protocol !== 'https:' && !(origin.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname))) throw new Error('Se requiere HTTPS o loopback local');
  return origin;
}

function urlAt(origin, path) {
  if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//') || path.includes('\\')) throw new Error('Ruta absoluta del mismo origen requerida');
  const url = new URL(path, origin);
  if (url.origin !== origin.origin || url.hash) throw new Error('Ruta fuera del origen o con fragmento');
  return url;
}

export async function probe(expectation) {
  const origin = originFor(expectation.origin);
  if (!Array.isArray(expectation.pages) || !expectation.pages.length || !Array.isArray(expectation.assets ?? [])) throw new Error('Faltan páginas/recursos');
  // Validate the whole plan before issuing requests.
  const pages = expectation.pages.map(page => {
    if (!Array.isArray(page.contains) || !page.contains.length || !page.contains.every(x => typeof x === 'string' && x.length)
      || !Array.isArray(page.absent ?? []) || !(page.absent ?? []).every(x => typeof x === 'string' && x.length)) throw new Error('Expectativas de texto inválidas');
    return { ...page, url: urlAt(origin, page.path) };
  });
  const assets = (expectation.assets ?? []).map(path => urlAt(origin, path));
  const checked = [];
  const get = async url => {
    const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
    if (response.status !== 200) { await response.body?.cancel(); throw new Error(`${url.pathname}: HTTP ${response.status}`); }
    return response;
  };
  for (const page of pages) {
    const response = await get(page.url);
    if (!/text\/html/i.test(response.headers.get('content-type') ?? '')) { await response.body?.cancel(); throw new Error('Respuesta no HTML'); }
    const html = await response.text();
    if (page.contains.some(value => !html.includes(value)) || (page.absent ?? []).some(value => html.includes(value))) throw new Error(`${page.path}: contenido esperado incorrecto`);
    checked.push(page.path);
  }
  for (const url of assets) {
    const response = await get(url);
    if (!/^(image|video|audio)\//i.test(response.headers.get('content-type') ?? '')) { await response.body?.cancel(); throw new Error(`${url.pathname}: tipo de medio incorrecto`); }
    // Only read the first chunk; do not buffer large videos or write downloaded media.
    const reader = response.body?.getReader();
    const chunk = await reader?.read();
    await reader?.cancel();
    if (!chunk?.value?.byteLength) throw new Error(`${url.pathname}: recurso vacío`);
    checked.push(url.pathname);
  }
  return { ok: true, origin: origin.origin, checked, identityVerified: false, scope: 'HTTP/texto/medios; cotejar ID/Ready/revisión con Vercel por separado' };
}

async function main(args) {
  if (Number(process.versions.node.split('.')[0]) !== 24) throw new Error('El proyecto requiere Node 24');
  const [mode, flag, file, ...extra] = args;
  if (mode === 'prepare' && await realpath(process.cwd()) !== await realpath(fileURLToPath(new URL('../../../../', import.meta.url)))) throw new Error('Ejecutar prepare desde la raíz del portfolio');
  const expected = { prepare: '--files', seal: '--manifest', verify: '--manifest', remote: '--expect' }[mode];
  if (!expected || flag !== expected || !file || extra.length) throw new Error('Uso: recorrido.mjs prepare --files JSON | seal/verify --manifest JSON | remote --expect JSON');
  const value = JSON.parse(await readFile(resolve(file), 'utf8'));
  return mode === 'prepare' ? prepare(process.cwd(), value) : mode === 'seal' ? seal(value) : mode === 'verify' ? assertSnapshot(value) : probe(value);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const started = Date.now();
  try { console.log(JSON.stringify({ ...await main(process.argv.slice(2)), durationMs: Date.now() - started })); }
  catch (error) { console.error(JSON.stringify({ ok: false, error: error.message, durationMs: Date.now() - started })); process.exitCode = 1; }
}
