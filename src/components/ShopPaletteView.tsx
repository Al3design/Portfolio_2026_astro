import type { CSSProperties } from 'react';
import { shopSwatchGradient, type resolveShopPalette } from '@/lib/shop-colours';
import type { ShopLanguage } from '@/data/shop-demo';
import styles from '@/styles/pages/_shop-review.module.scss';

export default function ShopPaletteView({ palette, language, compact = false, field }: {
  palette: ReturnType<typeof resolveShopPalette>; language: ShopLanguage; compact?: boolean; field?: string;
}) {
  if (!palette.length) return null;
  const en = language === 'en';
  return <div className={`${styles.palette}${compact ? ` ${styles.paletteCompact}` : ''}`} data-tina-field={field}>
    {!compact && <p className={styles.paletteLabel}>{en ? 'Piece colours' : 'Colores de la pieza'}</p>}
    <ul role="list" aria-label={en ? 'Piece colours' : 'Colores de la pieza'}>
      {palette.map((colour, index) => <li key={`${colour.hex}-${index}`} title={`${colour[language]} · ${colour.tones.join(' / ')}`}>
        <span className={styles.swatch} style={{ '--shop-swatch-colour': colour.tones[0], backgroundColor: colour.tones[0], backgroundImage: shopSwatchGradient(colour.tones) } as CSSProperties} aria-hidden="true" />
        <span className={styles.colourName}>{colour[language]}</span>
      </li>)}
    </ul>
    {!compact && <p className={styles.paletteNote}>{en
      ? 'Colours on screen are a guide and may look different on the printed piece. Ask about other colours and combinations.'
      : 'Los colores en pantalla son orientativos y pueden variar en la pieza impresa. Consultanos por otros colores y combinaciones.'}</p>}
  </div>;
}
