import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

test('Shop 3D shares navigation and changes language without losing theme', async ({ app, screen, browser }) => {
  await app.open('/');
  await screen.getByRole('link', 'SHOP 3D', { exact: true }).click();
  await expect(browser).toHaveURL('/tienda');
  await expect(screen.getByRole('heading', 'Ideas que toman forma.', { level: 1, exact: true })).toBeVisible();
  await screen.getByRole('link', 'Ver toda la colección ↗', { exact: true }).click();
  await expect(browser).toHaveURL('/tienda/coleccion/');
  await expect(browser).toHaveClass(browser.locator('html'), 'light');
  await expect(browser.locator('.bg-energy-grid')).toHaveCount(0);

  await expect(browser.locator('main article')).toHaveCount(8);
  await screen.getByRole('link', 'Ver pieza: Árbol decorativo', { exact: true }).click();
  await expect(browser).toHaveURL('/tienda/arbol-decorativo/');
  await expect(screen.getByRole('heading', 'Árbol decorativo', { level: 1, exact: true })).toBeVisible();

  await screen.getByRole('button', 'Toggle theme', { exact: true }).click();
  await screen.getByRole('link', 'Switch to English', { exact: true }).click();
  await expect(browser).toHaveURL('/en/shop-3d/arbol-decorativo/');
  await expect(screen.getByRole('heading', 'Decorative tree', { level: 1, exact: true })).toBeVisible();
  await expect(browser.locator('html[lang="en"]')).toHaveCount(1);
  await expect(browser.locator('html.light')).toHaveCount(0);

  await screen.getByRole('link', 'Cambiar a español', { exact: true }).click();
  await expect(browser).toHaveURL('/tienda/arbol-decorativo/');
  await expect(browser.locator('html[lang="es"]')).toHaveCount(1);
  await expect(browser.locator('html.light')).toHaveCount(0);
});

for (const language of ['es', 'en'] as const) {
  test(`shop landing shows three latest pieces, filters and opens full collection: ${language}`, async ({ app, screen, browser }) => {
    const en = language === 'en';
    const home = en ? '/en/shop-3d' : '/tienda';
    await app.open(home);
    await expect(screen.getByRole('link', en ? 'Explore objects ↗' : 'Explorar piezas ↗', { exact: true })).toHaveAttribute('href', '#collection');
    await screen.getByRole('link', en ? 'Explore objects ↗' : 'Explorar piezas ↗', { exact: true }).click();
    await expect(browser).toHaveURL(`${home}#collection`);
    await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(3);
    expect(await browser.evaluate(() => [...document.querySelectorAll('shop-collection article:not([hidden])')].map(piece => piece.id))).toEqual(['soporte-control-creeper', 'maceta-perro', 'maceta-acanalada-con-plato']);
    await screen.getByRole('button', en ? 'Desk' : 'Escritorio', { exact: true }).click();
    await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(1);
    await expect(screen.getByRole('button', en ? 'Desk' : 'Escritorio', { exact: true })).toHaveAttribute('aria-pressed', 'true');
    await screen.getByRole('button', en ? 'Organization' : 'Organización', { exact: true }).click();
    await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(0);
    await expect(browser.locator('[data-empty]')).toBeVisible();
    await screen.getByRole('button', en ? 'All objects' : 'Todas las piezas', { exact: true }).click();
    await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(3);
    await screen.getByRole('link', en ? 'View the full collection ↗' : 'Ver toda la colección ↗', { exact: true }).click();
    await expect(browser).toHaveURL(en ? '/en/shop-3d/collection/' : '/tienda/coleccion/');
    await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(8);
    await screen.getByRole('button', en ? 'Home & decor' : 'Hogar y deco', { exact: true }).click();
    await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(5);
    await screen.getByRole('link', en ? 'View piece: Decorative tree' : 'Ver pieza: Árbol decorativo', { exact: true }).click();
    await screen.getByRole('link', en ? '← Back to all pieces' : '← Volver a todas las piezas', { exact: true }).click();
    await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(8);
    for (const width of [320, 1440]) {
      await browser.setViewport({ width, height: 900 });
      const toggle = browser.locator('[data-filter-toggle]');
      if (width === 320) {
        await expect(toggle).toBeVisible();
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await screen.getByRole('button', en ? 'Desk' : 'Escritorio', { exact: true }).click();
        await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(1);
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(toggle).toContainText(en ? /\bdesk\b/i : /\bescritorio\b/i);
      } else {
        await screen.getByRole('button', en ? 'All objects' : 'Todas las piezas', { exact: true }).click();
        await expect(browser.locator('shop-collection article:not([hidden])')).toHaveCount(8);
      }
      expect(await browser.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    }
  });
  test(`public catalogue has photographs, enquiry terms and no editorial notes: ${language}`, async ({ app, screen, browser }) => {
    const home = language === 'es' ? '/tienda/coleccion/' : '/en/shop-3d/collection/';
    await app.open(home);
    await expect(browser.locator('main article')).toHaveCount(8);
    const links = await browser.evaluate(() => [...document.querySelectorAll<HTMLAnchorElement>('main article > a')].map(link => link.getAttribute('href')!));
    expect(new Set(links).size).toBe(8);
    const expectedPhotos: Record<string, number> = { 'arbol-decorativo': 8, 'figura-articulada-verde-roja': 3, 'flor-decorativa-blanca': 4, 'jarron-acanalado': 6, 'maceta-acanalada-con-plato': 1, 'maceta-perro': 3, 'pieza-articulada-roja-negra': 1, 'soporte-control-creeper': 3 };
    for (const link of links) {
      await app.open(link);
      const slug = link.split('/').filter(Boolean).pop()!;
      await expect(browser.locator('main figure img')).toHaveCount(expectedPhotos[slug]);
      await expect(browser.locator('main header')).toContainText(language === 'es' ? 'Precio a consultar' : 'Price on enquiry');
      await expect(browser.locator('main header')).toContainText(language === 'es' ? 'Según stock y a confirmar.' : 'Subject to stock; to be confirmed.');
      await expect(browser.locator('main header')).toContainText(language === 'es' ? 'Solo incluye la impresión 3D.' : 'Only the 3D print is included.');
      await expect(browser.locator('main details')).toHaveCount(0);
      await expect(browser.locator('a[href*="/revision/"], a[href*="/admin/"], img[src*="/revision/"]')).toHaveCount(0);
      const result = await browser.evaluate(async () => {
        const images = [...document.querySelectorAll<HTMLImageElement>('main figure img')];
        const imagesValid = await Promise.all(images.map(async image => {
          const response = await fetch(image.currentSrc || image.src);
          return response.ok && !!image.alt.trim() && image.hasAttribute('width') && image.hasAttribute('height');
        }));
        return { imagesValid, leaked: /productionNotes|sourcePath/.test(document.documentElement.outerHTML) };
      });
      expect(result.imagesValid.every(Boolean)).toBe(true);
      expect(result.leaked).toBe(false);
      const inquiry = screen.getByRole('link', language === 'es' ? 'Consultar esta pieza por WhatsApp ↗' : 'Enquire about this piece on WhatsApp ↗', { exact: true });
      await expect(inquiry).toHaveAttribute('href', /https:\/\/wa\.me\/541160513261\?text=/);
      // Inspect destination only: never open WhatsApp or send a message.
      for (const width of [320, 1440]) {
        await browser.setViewport({ width, height: 900 });
        expect(await browser.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
      }
    }
  });
}
