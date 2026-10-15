export type SiteSection = 'portfolio' | 'shop';
export type SiteLanguage = 'es' | 'en';

export function siteNavigation(section: SiteSection, language: SiteLanguage) {
  if (section === 'shop') {
    const home = language === 'es' ? '/tienda' : '/en/shop-3d';
    return [
      { name: 'Portfolio', href: '/', index: '01' },
      { name: language === 'es' ? 'Colección' : 'Collection', href: `${home}#collection`, index: '02' },
      { name: language === 'es' ? 'A medida' : 'Custom work', href: `${home}#custom`, index: '03' },
    ];
  }
  return [
    { name: 'PROJECTS', href: '/', index: '01' },
    { name: 'RESUME', href: '/resume', index: '02' },
    { name: 'ABOUT', href: '/about', index: '03' },
    { name: 'ARCHIVE', href: '/archive', index: '04' },
    { name: 'SHOP 3D', href: '/tienda', index: '05' },
  ];
}
