import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

test('Shop 3D shares navigation, filters concepts and changes language without losing theme', async ({ app, screen, browser }) => {
  await app.open('/');
  await screen.getByRole('link', 'SHOP 3D', { exact: true }).click();
  await expect(browser).toHaveURL('/tienda');
  await expect(screen.getByRole('heading', 'Ideas que toman forma.')).toBeVisible();
  await expect(browser).toHaveClass(browser.locator('html'), 'light');
  await expect(browser.locator('.bg-energy-grid')).toHaveCount(0);

  await screen.getByRole('button', 'Hogar y deco', { exact: true }).click();
  await expect(screen.getByText('02 PIEZAS DE EJEMPLO')).toBeVisible();
  await screen.getByRole('button', 'Ver concepto: Jarrón Sur', { exact: true }).click();
  await expect(browser.locator('dialog[open]')).toBeVisible();
  await screen.getByRole('button', 'Cerrar', { exact: true }).click();
  await expect(browser.locator('dialog[open]')).toHaveCount(0);

  await screen.getByRole('button', 'Toggle theme', { exact: true }).click();
  await screen.getByRole('link', 'Switch to English', { exact: true }).click();
  await expect(browser).toHaveURL('/en/shop-3d');
  await expect(screen.getByRole('heading', /Ideas taking/)).toBeVisible();
  await expect(browser.locator('html[lang="en"]')).toHaveCount(1);
  await expect(browser.locator('html.light')).toHaveCount(0);

  await screen.getByRole('link', 'Cambiar a español', { exact: true }).click();
  await expect(browser).toHaveURL('/tienda');
  await expect(browser.locator('html[lang="es"]')).toHaveCount(1);
  await expect(browser.locator('html.light')).toHaveCount(0);
});
