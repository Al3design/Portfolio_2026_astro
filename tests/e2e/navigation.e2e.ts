import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

test('portfolio header gains its container on scroll and releases it at the top', async ({ app, browser, screen }) => {
  await app.open('/');
  await expect(screen.getByRole('button', 'Toggle theme')).toBeVisible();
  const header = browser.locator('nav[data-contained]');
  await expect(header).toHaveAttribute('data-contained', 'false');
  const before = await browser.evaluate(() => document.querySelector('nav[data-contained]')!.getBoundingClientRect().toJSON());
  await browser.evaluate(() => { window.scrollTo({ top: 600, behavior: 'instant' }); return true; });
  await expect(header).toHaveAttribute('data-contained', 'true');
  const after = await browser.evaluate(() => document.querySelector('nav[data-contained]')!.getBoundingClientRect().toJSON());
  expect(after).toEqual(before);
  await browser.evaluate(() => { window.scrollTo({ top: 0, behavior: 'instant' }); return true; });
  await expect(header).toHaveAttribute('data-contained', 'false');
});

for (const route of ['/', '/tienda']) {
  test(`mobile navigation contains keyboard focus and restores it: ${route}`, async ({ app, browser, screen }) => {
    await browser.setViewport({ width: 390, height: 844 });
    await app.open(route);
    await screen.getByRole('button', 'Open navigation', { exact: true }).click();
    await expect(screen.getByRole('dialog', 'Navigation menu')).toBeVisible();
    for (let index = 0; index < 12; index++) {
      await browser.keyboard.press('Tab');
      expect(await browser.evaluate(() => !!document.activeElement?.closest('[role="dialog"]'))).toBe(true);
    }
    await browser.keyboard.press('Shift+Tab');
    expect(await browser.evaluate(() => !!document.activeElement?.closest('[role="dialog"]'))).toBe(true);
    await browser.keyboard.press('Escape');
    await expect(screen.getByRole('dialog', 'Navigation menu')).toHaveCount(0);
    expect(await browser.evaluate(() => document.activeElement?.getAttribute('aria-label') ?? null)).toBe('Open navigation');
    expect(await browser.evaluate(() => document.querySelector('main')!.inert)).toBe(false);
  });
}
