import sharp from 'sharp';
import {readFile,writeFile} from 'node:fs/promises';

// Derive browser icons from the supplied vector; preserve all original paths.
const source=await readFile(new URL('../public/brand/isologo-A3D.svg',import.meta.url),'utf8');
if(/<(script|foreignObject)\b|(?:href|xlink:href)\s*=/i.test(source))throw new Error('Unexpected active or external SVG content');
const inner=source.match(/<svg\b[^>]*>([\s\S]*)<\/svg>/)?.[1];
if(!inner)throw new Error('Missing SVG root');
// Fixed light tile keeps the original navy/red mark readable on light or dark browser chrome.
const icon=`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><rect width="1024" height="1024" rx="192" fill="#f3f1eb"/><svg x="128" y="80" width="768" height="864" viewBox="0 0 736.93 824.34">${inner}</svg></svg>`;
const root=new URL('../public/',import.meta.url);
await writeFile(new URL('favicon.svg',root),icon);
const sizes=[16,32,48,64,128,256];
const pngs=await Promise.all(sizes.map(size=>sharp(Buffer.from(icon)).resize(size,size).png().toBuffer()));
const header=Buffer.alloc(6+16*sizes.length);
header.writeUInt16LE(1,2);header.writeUInt16LE(sizes.length,4);
let offset=header.length;
sizes.forEach((size,i)=>{const entry=6+i*16;header[entry]=size===256?0:size;header[entry+1]=size===256?0:size;header.writeUInt16LE(1,entry+4);header.writeUInt16LE(32,entry+6);header.writeUInt32LE(pngs[i].length,entry+8);header.writeUInt32LE(offset,entry+12);offset+=pngs[i].length;});
await writeFile(new URL('favicon.ico',root),Buffer.concat([header,...pngs]));
await writeFile(new URL('favicon.png',root),pngs[1]);
await sharp(Buffer.from(icon)).resize(180,180).png().toFile(new URL('apple-touch-icon.png',root).pathname.replace(/^\/([A-Za-z]:)/,'$1'));
console.log(JSON.stringify({icoFrames:sizes,svg:true,png:32,appleTouch:180}));
