import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

test('public pages load and navigation reaches About', async ({ app, screen, browser }) => {
  await app.open('/');
  await expect(screen.getByRole('heading', 'Compiled Visions.')).toBeVisible();
  await screen.getByRole('link', 'ABOUT', { exact: true }).click();
  await expect(browser).toHaveURL('/about');
  await expect(screen.getByRole('heading', /Logic & Soul/)).toBeVisible();
});

test('theme selection survives a page navigation', async ({ app, screen, browser }) => {
  await app.open('/');
  await screen.getByRole('button', 'Toggle theme').click();
  await expect(browser).toHaveClass(browser.locator('html'), 'light');
  await app.open('/resume');
  await expect(browser).toHaveClass(browser.locator('html'), 'light');
  await screen.getByRole('button', 'Toggle theme').click();
  await expect(browser).toHaveClass(browser.locator('html'), '');
});

test('project filters and layout update the visible project list', async ({ app, screen, browser }) => {
  await app.open('/');
  await expect(browser.locator('astro-island[component-url*="ClientHome"]:not([ssr])')).toHaveCount(1);
  await screen.getByRole('button', 'List', { exact: true }).click();
  await screen.getByRole('button', 'Web Dev', { exact: true }).click();
  await expect(browser.locator('a[href="/projects/inti-web"]')).toBeVisible();
  await expect(browser.locator('a[href="/projects/inti-pm"]')).toHaveCount(0);
  await screen.getByRole('button', 'All Output', { exact: true }).click();
  await expect(browser.locator('a[href="/projects/inti-pm"]')).toBeVisible();
});
