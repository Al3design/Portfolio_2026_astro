import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { shopCatalogue, shopPieceUrl, shopCollectionUrl } from './shop-catalogue';
import { shopSocialImage } from './shop-social-image';
import { shopOrigin } from './shop-origin';
import { shopLatestSlugs } from '../data/shop-release';
import type { ShopLanguage } from '../data/shop-demo';

const escapeXml = (value: string) => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
}[char]!));

export async function shopFeed(context: APIContext, language: ShopLanguage) {
  const site = new URL(shopOrigin(context.site!, context.url));
  const catalogue = await shopCatalogue();
  const products = [
    ...shopLatestSlugs.map(slug => catalogue.find(product => product.slug === slug)!),
    ...catalogue.filter(product => !shopLatestSlugs.some(slug => slug === product.slug)),
  ];
  const en = language === 'en';
  const feedPath = en ? '/en/shop-3d/rss.xml' : '/tienda/rss.xml';
  return rss({
    title: en ? 'Al3Design · Printed pieces' : 'Al3Design · Piezas impresas',
    description: en ? '3D prints, colours and new pieces from the shop.' : 'Impresiones 3D, colores y novedades de la tienda.',
    site: new URL(shopCollectionUrl(language), site),
    items: await Promise.all(products.map(async product => {
      const image = await shopSocialImage(product.photos[0].image);
      const imageUrl = new URL(image.src, site).href;
      const link = new URL(shopPieceUrl(product.slug, language), site).href;
      return {
        title: product.title[language], description: product.description[language], link,
        content: `<p><img src="${escapeXml(imageUrl)}" alt="${escapeXml(product.photos[0].alt[language])}" /></p><p>${escapeXml(product.description[language])}</p><p><a href="${escapeXml(link)}">${en ? 'View piece' : 'Ver pieza'}</a></p>`,
        customData: `<media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg" width="1200" height="630"/>`,
      };
    })),
    xmlns: { atom: 'http://www.w3.org/2005/Atom', media: 'http://search.yahoo.com/mrss/' },
    customData: `<language>${en ? 'en' : 'es-ar'}</language><atom:link href="${new URL(feedPath, site).href}" rel="self" type="application/rss+xml"/>`,
  });
}
