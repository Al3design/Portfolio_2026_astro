// Metadata only. Does not open screenshots, render sites or start test tools.
import {stat,writeFile} from 'node:fs/promises';
const sources={
 gitcron:[
  'C:/www/gitCronos/output/playwright/init-guard-opened-repo.png',
  'C:/www/gitCronos/e2e/tmp/reportes/retomar-19/despues/01-menu-grafo.png',
  'C:/www/gitCronos/e2e/tmp/reportes/retomar-19/despues/02-grupo-legible.png',
 ],
 useodontopro:[
  'C:/www/useOdontoPro/tests/shots/baseline/home__1440px.png',
  'C:/www/useOdontoPro/tests/shots/baseline/home__390px.png',
  'C:/www/useOdontoPro/tests/shots/baseline/planes__1440px.png',
  'C:/www/useOdontoPro/tests/shots/baseline/planes__390px.png',
 ],
 odontopau:[
  'C:/www/odontoPau/output/playwright/article-live-desktop.png',
  'C:/www/odontoPau/output/playwright/article-reference-desktop.png',
  'C:/www/odontoPau/output/playwright/article-reference-mobile.png',
 ],
 odontopro:[],
};
const candidates=[];
for(const [project,paths] of Object.entries(sources)) for(const source of paths) {
  const metadata=await stat(source);
  candidates.push({project,source,bytes:metadata.size,modified:metadata.mtime.toISOString(),
    visualReview:'not performed',selection:'candidate only',
    publication:'not approved',currentInterface:'not established'});
}
await writeFile('.e2e/content-intake/professional-media-candidates.json',JSON.stringify({
  recorded:'2026-10-19',method:'file metadata only; no visual inspection or browser',
  candidates,missing:['odontopro: no suitable screenshot found in the inspected locations'],
},null,2));
console.log(`Recorded ${candidates.length} existing media candidates; no screenshots opened or copied.`);
