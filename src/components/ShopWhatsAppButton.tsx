import type { ReactNode } from 'react';
import styles from '@/styles/components/ShopWhatsAppButton.module.scss';

export default function ShopWhatsAppButton({ href, describedBy, iconPath, children }: {
  href: string; describedBy?: string; iconPath: string; children: ReactNode;
}) {
  return <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer" aria-describedby={describedBy}>
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={iconPath} /></svg>
    <span>{children}</span>
  </a>;
}
