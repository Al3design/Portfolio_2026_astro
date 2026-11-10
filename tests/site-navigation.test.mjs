import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isNavigationHref, parseNavigationSettings, siteNavigation } from '../src/lib/site-navigation.ts';

const item = (key, path) => ({ key, labelEs: `ES ${key}`, labelEn: `EN ${key}`, hrefEs: `/tienda${path}`, hrefEn: `/en/shop-3d${path}` });
test('editable navigation preserves list order, language and stable identities', () => {
  const settings = parseNavigationSettings({ portfolioMenu: [item('home', '')], shopMenu: [item('custom','#custom'), item('collection','#collection')] });
  const links = siteNavigation('shop', 'en', settings);
  assert.deepEqual(links.map(link => [link.key, link.name, link.href, link.index]), [
    ['custom', 'EN custom', '/en/shop-3d#custom', '01'], ['collection', 'EN collection', '/en/shop-3d#collection', '02'],
  ]);
  assert.equal(siteNavigation('portfolio', 'en')[0].href, '/');
});

test('navigation rejects executable and protocol relative URLs before rendering', () => {
  for (const href of ['javascript:alert(1)', '//example.com', '/\\example.com', 'data:text/html,test', 'https:example.com', ' https://example.com', '/bad\npath']) assert.equal(isNavigationHref(href), false, href);
  for (const href of ['/', '/tienda#collection', '#custom', 'https://example.com/page']) assert.equal(isNavigationHref(href), true, href);
  assert.throws(() => parseNavigationSettings({ portfolioMenu: [], shopMenu: [item('home','')] }), /inválida/);
  assert.throws(() => parseNavigationSettings({ portfolioMenu: [item('home','')], shopMenu: [item('home',''),item('home','')] }), /inválida/);
});
