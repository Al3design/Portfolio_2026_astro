export type SiteSection = 'portfolio' | 'shop';
export type SiteLanguage = 'es' | 'en';
export type SiteLanguageLinks = Partial<Record<SiteLanguage, string>>;
export type NavigationItem = { key: string; labelEs: string; labelEn: string; hrefEs: string; hrefEn: string };
export type NavigationSettings = { portfolioMenu?: NavigationItem[]; shopMenu?: NavigationItem[] };

export function isNavigationHref(value: unknown): value is string {
  if (typeof value !== 'string' || value !== value.trim() || /[\\\s\u0000-\u001f]/.test(value)) return false;
  if (/^\/(?!\/)/.test(value) || /^#[\w-]+$/.test(value)) return true;
  if (!/^https:\/\//i.test(value)) return false;
  try { const url = new URL(value); return url.protocol === 'https:' && !!url.hostname; } catch { return false; }
}

export function validNavigationMenu(value: unknown): value is NavigationItem[] {
  if (!Array.isArray(value) || !value.length) return false;
  const keys = new Set<string>();
  return value.every(item => {
    if (!item || typeof item !== 'object' || typeof item.key !== 'string' || !/^[a-z][a-z0-9-]*$/.test(item.key) || keys.has(item.key)
      || typeof item.labelEs !== 'string' || !item.labelEs.trim() || typeof item.labelEn !== 'string' || !item.labelEn.trim()
      || !isNavigationHref(item.hrefEs) || !isNavigationHref(item.hrefEn)) return false;
    keys.add(item.key); return true;
  });
}

export function parseNavigationSettings(value: unknown): NavigationSettings {
  if (!value || typeof value !== 'object' || !('portfolioMenu' in value) || !('shopMenu' in value)
    || !validNavigationMenu(value.portfolioMenu) || !validNavigationMenu(value.shopMenu)) throw new Error('Configuración de menús incompleta o inválida.');
  return { portfolioMenu: value.portfolioMenu, shopMenu: value.shopMenu };
}

export function siteNavigation(section: SiteSection, language: SiteLanguage, settings?: NavigationSettings) {
  const configured = section === 'shop' ? settings?.shopMenu : settings?.portfolioMenu;
  if (configured !== undefined) {
    if (!validNavigationMenu(configured)) throw new Error(`Menú ${section} inválido: revisar etiquetas ES/EN, claves únicas y enlaces.`);
    return configured.map((item, index) => ({ key: item.key, name: language === 'es' ? item.labelEs : item.labelEn, href: language === 'es' ? item.hrefEs : item.hrefEn, index: String(index + 1).padStart(2, '0') }));
  }
  if (section === 'shop') {
    const home = language === 'es' ? '/tienda' : '/en/shop-3d';
    return [
      { key: 'portfolio', name: 'Portfolio', href: '/', index: '01' },
      { key: 'collection', name: language === 'es' ? 'Colección' : 'Collection', href: `${home}#collection`, index: '02' },
      { key: 'custom', name: language === 'es' ? 'A medida' : 'Custom work', href: `${home}#custom`, index: '03' },
    ];
  }
  return [
    { key: 'projects', name: 'PROJECTS', href: '/', index: '01' },
    { key: 'resume', name: 'RESUME', href: '/resume', index: '02' },
    { key: 'about', name: 'ABOUT', href: '/about', index: '03' },
    { key: 'archive', name: 'ARCHIVE', href: '/archive', index: '04' },
    { key: 'shop', name: 'SHOP 3D', href: '/tienda', index: '05' },
  ];
}
