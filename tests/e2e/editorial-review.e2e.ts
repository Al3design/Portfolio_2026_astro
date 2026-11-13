import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

for (const project of [
  {slug:'mundo',es:'Mundo ficticio.',en:'Imagined world.'},
  {slug:'toplomero',es:'Toplomero en movimiento.',en:'Toplomero in motion.'},
]) {
  test(`academic draft supports language review and playable local media: ${project.slug}`, async ({app,screen,browser}) => {
    await app.open(`/revision/es/${project.slug}`);
    await expect(screen.getByRole('heading',project.es,{exact:true})).toBeVisible();
    await expect(browser.locator('meta[name="robots"]')).toHaveAttribute('content','noindex,nofollow');
    await expect(screen.getByText('Fecha por confirmar',{exact:true})).toBeVisible();
    await screen.getByRole('link','Switch to English',{exact:true}).click();
    await expect(browser).toHaveURL(`/revision/en/${project.slug}`);
    await expect(screen.getByRole('heading',project.en,{exact:true})).toBeVisible();
    await expect(browser.locator('html')).toHaveAttribute('lang','en');
    await browser.setViewport({width:320,height:844});
    expect(await browser.evaluate(() => {
      const links=[...document.querySelectorAll('nav[data-contained] [role="group"][aria-label="Page language"] a')];
      return links.length===2 && links.every(link => {
        const box=link.getBoundingClientRect();
        return box.left>=0 && box.right<=innerWidth;
      });
    })).toBe(true);
    const media = await browser.evaluate(async () => {
      const video = document.querySelector('video')!;
      video.scrollIntoView();
      await video.play();
      const end = performance.now()+5000;
      while (video.currentTime<0.1) {
        if(performance.now()>end) throw Error('Preview did not advance');
        await new Promise(requestAnimationFrame);
      }
      video.pause();
      return {controls:video.controls,preload:video.preload,autoplay:video.autoplay,playing:video.currentTime>0,duration:video.duration,overflow:document.documentElement.scrollWidth>innerWidth};
    });
    expect(media.controls).toBe(true);
    expect(media.preload).toBe('none');
    expect(media.autoplay).toBe(false);
    expect(media.playing).toBe(true);
    expect(media.duration).toBeGreaterThan(17);
    expect(media.overflow).toBe(false);
    await browser.locator('article summary').click();
    await expect(browser.locator('#visual-description')).toBeVisible();
  });
}

test('academic drafts reuse the live project template and keep editorial notes outside the article', async ({app,browser}) => {
  const template = () => browser.evaluate(() => {
    const main = document.querySelector('main')!;
    return {
      header: main.querySelector('header')!.className,
      hero: main.querySelector('[class*="heroFrame"]')!.className,
      ratio: getComputedStyle(main.querySelector('[class*="heroFrame"]')!).aspectRatio,
      grid: main.querySelector('[class*="mainGrid"]')!.className,
      specs: main.querySelector('[class*="stickyCard"]')!.className,
    };
  });
  await app.open('/projects/around');
  const reference = await template();
  await app.open('/projects/freelance');
  expect(await template()).toEqual(reference);
  for (const slug of ['mundo','toplomero']) {
    await app.open(`/revision/es/${slug}`);
    expect(await template()).toEqual(reference);
    expect(await browser.evaluate(() => document.querySelectorAll('article .mdx-card').length)).toBe(2);
    expect(await browser.evaluate(() => !!document.querySelector('article aside[aria-label="BORRADOR · REVISIÓN LOCAL"]'))).toBe(false);
    expect(await browser.evaluate(() => !!document.querySelector('aside[aria-label="BORRADOR · REVISIÓN LOCAL"] details:not([open])'))).toBe(true);
    expect(await browser.evaluate(() => document.querySelector('[class*="infoList"]')!.textContent!.includes('12 Weeks'))).toBe(false);
  }
});

test('review media is available locally without exposing arbitrary files or public draft links', async ({app,browser}) => {
  await app.open('/');
  expect(await browser.evaluate(() => document.querySelectorAll('a[href*="/revision/"]').length)).toBe(0);
  const responses = await browser.evaluate(async () => {
    const part = await fetch('/revision/media/mundo-preview.mp4');
    const body = await part.arrayBuffer();
    const missing = await fetch('/revision/media/manifest.json');
    return {status:part.status,length:body.byteLength,type:part.headers.get('Content-Type'),robots:part.headers.get('X-Robots-Tag'),missing:missing.status};
  });
  expect(responses.status).toBe(200);
  expect(responses.length).toBeGreaterThan(1000);
  expect(responses.type).toBe('video/mp4');
  expect(responses.robots).toBe('noindex, nofollow');
  expect(responses.missing).toBe(404);
});
