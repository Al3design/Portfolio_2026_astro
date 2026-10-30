import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

const pieces = [
  { slug: 'arbol-decorativo', es: 'Árbol decorativo', en: 'Decorative tree', photos: 8, pla: true },
  { slug: 'figura-articulada-verde-roja', es: 'Figura articulada verde y roja', en: 'Green and red articulated figure', photos: 3, pla: true },
  { slug: 'jarron-acanalado', es: 'Jarrón acanalado', en: 'Ribbed vase', photos: 6, pla: true },
  { slug: 'pieza-articulada-roja-negra', es: 'Pieza articulada roja y negra', en: 'Red and black articulated piece', photos: 1, pla: true },
  { slug: 'flor-decorativa-blanca', es: 'Flor decorativa blanca', en: 'White decorative flower', photos: 4, pla: true },
  { slug: 'maceta-acanalada-con-plato', es: 'Maceta acanalada con plato', en: 'Ribbed planter with saucer', photos: 1, pla: true },
  { slug: 'maceta-perro', es: 'Maceta con forma de perro', en: 'Dog-shaped planter', photos: 3, pla: true },
  { slug: 'soporte-control-creeper', es: 'Soporte para control · Creeper', en: 'Controller stand · Creeper', photos: 3, pla: true },
] as const;

for (const language of ['es', 'en'] as const) {
  test(`local editorial preview remains available beside the public catalogue: ${language}`, async ({ app, screen, browser }) => {
    const store = language === 'es' ? '/tienda' : '/en/shop-3d';
    const otherStore = language === 'es' ? '/en/shop-3d' : '/tienda';
    await app.open(`${store}?catalog=real`);
    await expect(browser.locator('main article')).toHaveCount(8);
    await expect(browser.locator('main article ul')).toHaveCount(8);
    await expect(browser.locator('astro-island[component-url*="Navigation"]:not([ssr])')).toHaveCount(1);
    await screen.getByRole('link', language === 'es' ? 'Ver pieza: Árbol decorativo' : 'View piece: Decorative tree', { exact: true }).click();
    await expect(browser).toHaveURL(`${store}?catalog=real&piece=arbol-decorativo`);
    await expect(browser.locator('main header')).toContainText(language === 'es' ? 'Borrador' : 'Draft');
    await expect(screen.getByRole('link', language === 'es' ? 'Abrir editor Tina' : 'Open Tina editor', { exact: true })).toHaveAttribute('href', '/admin/index.html#/collections/edit/shopProduct/arbol-decorativo');
    await expect(browser.locator('astro-island[component-url*="Navigation"]:not([ssr])')).toHaveCount(1);
    await screen.getByRole('link', language === 'es' ? 'Switch to English' : 'Cambiar a español', { exact: true }).click();
    await expect(browser).toHaveURL(`${otherStore}?catalog=real&piece=arbol-decorativo`);
  });

  test(`real print review supports collection, photos and language navigation: ${language}`, async ({ app, screen, browser }) => {
    const collection = `/revision/tienda/${language}/`;
    const other = language === 'es' ? 'en' : 'es';
    await app.open(collection);
    await expect(screen.getByRole('heading', language === 'es' ? 'Piezas impresas' : 'Printed pieces', { level: 1 })).toBeVisible();
    await expect(browser.locator('main article')).toHaveCount(8);
    await expect(browser.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
    await expect(browser.locator('script[src*="googletagmanager"]')).toHaveCount(0);
    await expect(browser.locator('html')).toHaveAttribute('class', 'light');
    await expect(browser.locator('astro-island[component-url*="Navigation"]:not([ssr])')).toHaveCount(1);
    await expect(screen.getByRole('contentinfo')).toBeVisible();
    await expect(screen.getByRole('link', language === 'es' ? 'Colección' : 'Collection', { exact: true })).toHaveAttribute('href', `${collection}#collection`);
    await screen.getByRole('button', 'Toggle theme', { exact: true }).click();
    await browser.reload();
    await expect(browser.locator('astro-island[component-url*="Navigation"]:not([ssr])')).toHaveCount(1);
    expect(await browser.evaluate(() => localStorage.getItem('shop-theme'))).toBe('dark');
    expect(await browser.evaluate(() => localStorage.getItem('theme'))).toBe(null);
    await screen.getByRole('button', 'Toggle theme', { exact: true }).click();
    await expect(browser.locator('html')).toHaveAttribute('class', 'light');

    for (const piece of pieces) {
      await screen.getByRole('link', `${language === 'es' ? 'Ver pieza' : 'View piece'}: ${piece[language]}`, { exact: true }).click();
      await expect(browser).toHaveURL(`${collection}${piece.slug}`);
      await expect(screen.getByRole('heading', piece[language], { level: 1, exact: true })).toBeVisible();
      await expect(browser.locator('main header')).toContainText(language === 'es' ? 'Borrador' : 'Draft');
      await expect(browser.locator('main figure img')).toHaveCount(piece.photos);
      await expect(browser.locator('main dl dd')).toHaveCount(7);
      await expect(screen.getByText(language === 'es' ? 'Entrega' : 'Delivery', { exact: true })).toBeVisible();
      const values = await browser.evaluate(() => [...document.querySelectorAll('main dl dd')].map(field => field.textContent?.trim()));
      expect(values.slice(0, 3)).toEqual([
          language === 'es' ? 'Precio a consultar.' : 'Price on enquiry.',
          'PLA',
          language === 'es' ? 'Colores a consultar.' : 'Colours available on enquiry.',
      ]);
      expect(values[3]).toContain(language === 'es' ? 'No uses lavavajillas.' : 'Do not put in a dishwasher.');
      expect(values.slice(4)).toEqual([
          language === 'es' ? 'Trabajamos con stock y por pedido. Consultá la disponibilidad.' : 'We work with stock and made-to-order pieces. Ask about availability.',
          language === 'es' ? 'Según stock y a confirmar.' : 'Subject to stock; to be confirmed.',
          language === 'es' ? 'Solo incluye la impresión 3D. Los demás elementos de las fotos son decorativos y no están incluidos.' : 'Only the 3D print is included. Other items in the photos are decorative and are not included.',
      ]);
      await expect(browser.locator('main details[open]')).toHaveCount(0);

      // Fetch every linked original independently of lazy-loading/scroll position.
      // Also prove that internal JSON files are not served as photographs.
      const media = await browser.evaluate(async () => {
        const images = [...document.querySelectorAll<HTMLImageElement>('main figure img')];
        return Promise.all(images.map(async image => {
          const response = await fetch(image.src);
          const bytes = new Uint8Array(await response.arrayBuffer());
          return {
            alt: !!image.alt.trim(), ok: response.ok,
            jpeg: bytes[0] === 0xff && bytes[1] === 0xd8,
            mime: response.headers.get('content-type'),
            cache: response.headers.get('cache-control'),
            robots: response.headers.get('x-robots-tag'),
          };
        }));
      });
      expect(media.every(item => item.alt && item.ok && item.jpeg && item.mime === 'image/jpeg' && item.cache === 'no-store' && item.robots === 'noindex, nofollow')).toBe(true);

      for (const width of [320, 1440]) {
        await browser.setViewport({ width, height: 900 });
        expect(await browser.evaluate(() => {
          const main = document.querySelector('main')!;
          return [...main.querySelectorAll('img, dl, details')].every(element => {
            const box = element.getBoundingClientRect();
            return box.left >= -1 && box.right <= innerWidth + 1 && element.scrollWidth <= element.clientWidth + 1;
          });
        })).toBe(true);
      }

      await screen.getByRole('link', other === 'en' ? 'Switch to English' : 'Cambiar a español', { exact: true }).click();
      await expect(browser).toHaveURL(`/revision/tienda/${other}/${piece.slug}`);
      await expect(screen.getByRole('heading', piece[other], { level: 1, exact: true })).toBeVisible();
      await screen.getByRole('link', language === 'en' ? 'Switch to English' : 'Cambiar a español', { exact: true }).click();
      await screen.getByRole('link', language === 'es' ? '← Volver a todas las piezas' : '← Back to all pieces', { exact: true }).click();
      await expect(browser).toHaveURL(`${collection}#${piece.slug}`);
      await expect(screen.getByRole('heading', piece[language], { exact: true })).toBeVisible();
    }

    const invalidMedia = await browser.evaluate(async () => {
      const responses = await Promise.all([
        fetch('/revision/tienda/media/intake-2026-10-29/manifest.json'),
        fetch('/revision/tienda/media/intake-2026-10-29/not-associated.jpg'),
      ]);
      return responses.map(response => response.status);
    });
    expect(invalidMedia).toEqual([404, 404]);
    // Public pages use optimized assets and never link internal review documents.
    await app.open(language === 'es' ? '/tienda' : '/en/shop-3d');
    await expect(browser.locator('a[href*="/revision/tienda/"]')).toHaveCount(0);
    await expect(browser.locator('img[src*="/revision/tienda/media/"]')).toHaveCount(0);
  });
}
