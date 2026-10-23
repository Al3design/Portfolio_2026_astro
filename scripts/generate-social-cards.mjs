// Deterministic share cards: original artwork, existing palette and bundled fonts.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { inflateSync } from 'node:zlib';

const root = process.cwd();
const output = resolve(root, 'public/social');
const source = path => resolve(root, 'public', path);
const globals = await readFile(resolve(root, 'src/styles/base/_globals.scss'), 'utf8');
const color = name => {
  const rgb = globals.match(new RegExp(`--clr-brand-${name}-rgb:\\s*([\\d, ]+);`))?.[1];
  if (!rgb) throw new Error(`Missing palette color: ${name}`);
  return `#${rgb.split(',').map(channel => Number(channel.trim()).toString(16).padStart(2, '0')).join('')}`;
};
const palette = Object.fromEntries(['surface', 'surface-low', 'on-surface', 'on-surface-variant', 'primary', 'tertiary'].map(name => [name, color(name)]));
const fonts = {
  heading: resolve(root, 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'),
  body: resolve(root, 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
  mono: resolve(root, 'node_modules/@fontsource/roboto-mono/files/roboto-mono-latin-400-normal.woff'),
};
// Pango needs SFNT fonts; reuse our bundled WOFF tables without installing fonts.
const fontOutput = resolve(root, 'output/social-cards/fonts');
await mkdir(fontOutput, {recursive: true});
for (const [family, file] of Object.entries(fonts)) {
  const woff = await readFile(file);
  const count = woff.readUInt16BE(12);
  const sfnt = Buffer.alloc(woff.readUInt32BE(16));
  woff.copy(sfnt, 0, 4, 8);
  sfnt.writeUInt16BE(count, 4);
  const power = Math.floor(Math.log2(count));
  sfnt.writeUInt16BE(16 * 2 ** power, 6);
  sfnt.writeUInt16BE(power, 8);
  sfnt.writeUInt16BE(count * 16 - 16 * 2 ** power, 10);
  let offset = 12 + count * 16;
  for (let i = 0; i < count; i++) {
    const table = 44 + i * 20, entry = 12 + i * 16;
    const start = woff.readUInt32BE(table + 4), compressed = woff.readUInt32BE(table + 8), length = woff.readUInt32BE(table + 12);
    woff.copy(sfnt, entry, table, table + 4);
    sfnt.writeUInt32BE(woff.readUInt32BE(table + 16), entry + 4);
    sfnt.writeUInt32BE(offset, entry + 8);
    sfnt.writeUInt32BE(length, entry + 12);
    const data = woff.subarray(start, start + compressed);
    (compressed < length ? inflateSync(data) : data).copy(sfnt, offset);
    offset += (length + 3) & ~3;
  }
  fonts[family] = resolve(fontOutput, `${family}.ttf`);
  await writeFile(fonts[family], sfnt);
}
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
async function text(value, x, y, size, tone = 'on-surface', family = 'heading') {
  const font = family === 'mono' ? 'Roboto Mono' : family === 'heading' ? 'Inter Bold' : 'Inter';
  return { input: await sharp({text: {text: `<span foreground="${palette[tone]}">${escape(value)}</span>`, font: `${font} ${size}`, fontfile: fonts[family], rgba: true, dpi: 72}}).png().toBuffer(), left: x, top: y };
}
const logo = await sharp(source('brand/isologo-A3D-white.svg')).resize(58, 66, {fit: 'inside'}).png().toBuffer();
const base = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${palette.surface}"/><defs><radialGradient id="glow"><stop stop-color="${palette.tertiary}" stop-opacity=".14"/><stop offset="1" stop-color="${palette.tertiary}" stop-opacity="0"/></radialGradient></defs><ellipse cx="1000" cy="360" rx="650" ry="500" fill="url(#glow)"/></svg>`);
await mkdir(output, {recursive: true});
const manifest = [];
async function save(name, layers, sources) {
  const file = resolve(output, `${name}-v1.png`);
  const info = await sharp(base).composite(layers).png().toFile(file);
  manifest.push({file: `public/social/${name}-v1.png`, width: info.width, height: info.height, bytes: info.size, sources, safeInset: 56});
}

await save('portfolio', [
  {input: logo, left: 72, top: 64},
  await text('Al3Design', 150, 82, 32),
  await text('Alejandro', 72, 205, 88),
  await text('Delgado.', 72, 303, 88, 'primary'),
  await text('UX/UI  /  WEB  /  3D', 76, 447, 26, 'tertiary', 'mono'),
  await text('MULTIMEDIA DESIGNER', 76, 498, 20, 'on-surface-variant', 'mono'),
  await text('al3design.dev', 890, 554, 22, 'primary', 'mono'),
], ['public/brand/isologo-A3D-white.svg']);

for (const card of [
  {name: 'paris', title: 'París', lines: ['Photoshop', 'HTML / CSS'], image: 'assets/projects/paris/paris-home.webp', cropHeight: 1000},
  {name: 'cv-personal', title: 'CV personal', lines: ['Adobe XD', 'Photoshop / Illustrator'], image: 'assets/projects/cv-personal/cv-personal-dark.webp', cropHeight: 1050},
]) {
  const image = sharp(source(card.image));
  const metadata = await image.metadata();
  const preview = await image.extract({left: 0, top: 0, width: metadata.width, height: card.cropHeight}).resize(568, 440, {fit: 'contain', background: palette['surface-low']}).png().toBuffer();
  await save(card.name, [
    {input: logo, left: 56, top: 56},
    await text('Al3Design', 132, 74, 28),
    await text(card.title, 56, 232, 58, 'primary'),
    await text('Alejandro Delgado', 60, 321, 23, 'on-surface', 'body'),
    await text(card.lines[0], 60, 395, 18, 'tertiary', 'mono'),
    await text(card.lines[1], 60, 429, 18, 'tertiary', 'mono'),
    {input: preview, left: 576, top: 104},
    await text('al3design.dev', 60, 554, 20, 'on-surface-variant', 'mono'),
  ], [`public/${card.image}`, 'public/brand/isologo-A3D-white.svg']);
}
await mkdir(resolve(root, 'output/social-cards'), {recursive: true});
await writeFile(resolve(root, 'output/social-cards/manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(manifest.map(item => `${item.file}: ${item.width}x${item.height}, ${item.bytes} bytes`).join('\n'));
