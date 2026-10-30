import bambuFilaments from '../data/bambu-filaments.json';

// Manufacturer references are a local snapshot, never a request from the storefront.
export const bambuFilamentColours = bambuFilaments.colours;
export type ShopFilamentColour = (typeof bambuFilaments.colours)[number];

function normalizeReferenceTone(value: unknown): string | undefined {
  return typeof value === 'string' && /^#(?:[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value)
    ? value.toUpperCase() : undefined;
}

export function shopSwatchGradient(tones: string[]): string {
  const safe = tones.map(normalizeReferenceTone).filter((tone): tone is string => !!tone);
  return safe.length > 1 ? `linear-gradient(135deg in oklab, ${safe.join(', ')})` : 'none';
}

export interface ShopPaletteEntry {
  preset?: string;
  hex?: string;
  es?: string;
  en?: string;
}

export function normalizeShopHex(value: unknown): string | undefined {
  return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value.trim())
    ? value.trim().toUpperCase() : undefined;
}

export function resolveShopPalette(entries: ShopPaletteEntry[] | undefined, legacy: ShopColourId[], references: readonly ShopFilamentColour[]) {
  if (entries === undefined) return shopColours.filter(colour => legacy.includes(colour.id)).map(colour => ({ ...colour, tones: [colour.hex] }));
  return entries.flatMap(entry => {
    const preset = references.find(colour => colour.code === entry?.preset);
    // An explicit invalid value is omitted, not replaced with a different colour.
    const manual = entry?.hex;
    const customHex = normalizeShopHex(manual);
    const tones = manual == null || manual === ''
      ? (preset?.tones ?? []).map(normalizeReferenceTone).filter((tone): tone is string => !!tone)
      : customHex ? [customHex] : [];
    if (!tones.length) return [];
    return [{ hex: tones[0], tones, es: entry.es?.trim() || preset?.es || entry.en?.trim() || tones[0],
      en: entry.en?.trim() || preset?.en || entry.es?.trim() || tones[0] }];
  });
}

// Legacy approximations for existing drafts; not Bambu filament assignments.
export const shopColours = [
  { id: 'green', hex: '#39834b', es: 'Verde', en: 'Green' },
  { id: 'dark-green', hex: '#175447', es: 'Verde oscuro', en: 'Dark green' },
  { id: 'lime-green', hex: '#75b82a', es: 'Verde lima', en: 'Lime green' },
  { id: 'red', hex: '#d94443', es: 'Rojo', en: 'Red' },
  { id: 'beige', hex: '#d6bb92', es: 'Beige', en: 'Beige' },
  { id: 'brown', hex: '#72513b', es: 'Marrón', en: 'Brown' },
  { id: 'yellow', hex: '#edb52e', es: 'Amarillo', en: 'Yellow' },
  { id: 'orange', hex: '#ef9a18', es: 'Naranja', en: 'Orange' },
  { id: 'white', hex: '#f3f0e9', es: 'Blanco', en: 'White' },
  { id: 'black', hex: '#28282b', es: 'Negro', en: 'Black' },
] as const;

export type ShopColourId = typeof shopColours[number]['id'];
