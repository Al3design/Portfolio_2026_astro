// Explicit editorial import, never run by builds or page requests.
import { writeFile } from 'node:fs/promises';

const path = 'resources/profiles/BBL/filament/filaments_color_codes.json';
async function readJson(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'Al3Design-filament-catalog' } });
  if (!response.ok) throw new Error(`Bambu catalogue request failed: ${response.status}`);
  return response.json();
}
const commits = await readJson(`https://api.github.com/repos/bambulab/BambuStudio/commits?path=${encodeURIComponent(path)}&per_page=1`);
const revision = commits[0]?.sha;
if (!/^[a-f0-9]{40}$/.test(revision ?? '')) throw new Error('Missing source revision');
const source = await readJson(`https://raw.githubusercontent.com/bambulab/BambuStudio/${revision}/${path}`);
const namesEs = {
  Black: 'Negro', White: 'Blanco', Yellow: 'Amarillo', Cyan: 'Cian', Red: 'Rojo',
  Gray: 'Gris', Blue: 'Azul', 'Sunflower Yellow': 'Amarillo girasol', Green: 'Verde',
  Orange: 'Naranja', 'Matte Beige': 'Beige mate', 'Cocoa Brown': 'Marrón cacao', 'Dark Gray': 'Gris oscuro',
};
const colours = source.data.filter(item => item.fila_type.startsWith('PLA') || ['PETG Basic', 'PETG HF'].includes(item.fila_type)).map(item => {
  if (!item.fila_color?.length || item.fila_color.some(tone => !/^#[a-f0-9]{8}$/i.test(tone)) || !/^\d+$/.test(item.fila_color_code)) {
    throw new Error(`Unsupported filament colour: ${item.fila_type} ${item.fila_color_code}`);
  }
  const tones = item.fila_color.map(tone => /ff$/i.test(tone) ? tone.slice(0, 7).toUpperCase() : tone.toUpperCase());
  return {
    code: item.fila_color_code, filamentId: item.fila_id, material: item.fila_type,
    en: item.fila_color_name.en,
    es: item.fila_color_name.es || namesEs[item.fila_color_name.en] || item.fila_color_name.en,
    tones,
  };
}).sort((a, b) => a.material.localeCompare(b.material) || a.code.localeCompare(b.code));
if (!colours.length || new Set(colours.map(item => item.code)).size !== colours.length) {
  throw new Error('Empty or duplicate filament catalogue');
}
const families = [...new Set(colours.map(item => item.material))].map(material => ({
  material, count: colours.filter(item => item.material === material).length,
}));
await writeFile(new URL('../src/data/bambu-filaments.json', import.meta.url), JSON.stringify({
  brand: 'Bambu Lab', scope: 'PLA families, PETG Basic and PETG HF',
  source: `https://github.com/bambulab/BambuStudio/blob/${revision}/${path}`,
  revision, retrievedAt: new Date().toISOString(), families,
  note: 'Manufacturer RGB/RGBA references. Spanish names use official values where available, otherwise local translations or English. Not stock or measured print colours.',
  colours,
}, null, 2) + '\n');
console.log(`Imported ${colours.length} colour references in ${families.length} families from ${revision}`);
console.log(families.map(item => `${item.material}: ${item.count}`).join('\n'));
