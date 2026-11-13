import {mkdir,readFile,writeFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Read media only; never execute archived projects. FFmpeg must be installed.
const archive = process.argv[2];
if (!archive) throw Error('Usage: node scripts/prepare-academic-previews.mjs <archive-root>');
const output = fileURLToPath(new URL('../src/editorial/assets/',import.meta.url));
await mkdir(output,{recursive:true});
const sources = [
  {slug:'mundo',source:'davinci/multimedia/2018/video/mundo/blp-5.avi',posterAt:1,seconds:24.8},
  {slug:'toplomero',source:'davinci/multimedia/2018/video/manifiesto/motion-4-edited.mp4',posterAt:12,seconds:18},
];
const manifest = [];
for (const item of sources) {
  const source = path.join(archive,item.source);
  const run = args => {
    const result = spawnSync('ffmpeg',['-v','error','-nostdin','-threads','2',...args],{windowsHide:true,encoding:'utf8'});
    if (result.error || result.status !== 0) throw Error(result.error?.message || result.stderr);
  };
  run(['-ss',String(item.posterAt),'-i',source,'-frames:v','1','-vf','scale=1280:-2','-quality','82','-y',path.join(output,`${item.slug}-poster.webp`)]);
  run(['-i',source,'-t',String(item.seconds),'-an','-vf','scale=960:-2','-c:v','libx264','-threads','2','-preset','medium','-crf','25','-pix_fmt','yuv420p','-movflags','+faststart','-y',path.join(output,`${item.slug}-preview.mp4`)]);
  const derivatives = [];
  for (const suffix of ['poster.webp','preview.mp4']) {
    const file = `${item.slug}-${suffix}`,buffer = await readFile(path.join(output,file));
    derivatives.push({file,bytes:buffer.length,sha256:createHash('sha256').update(buffer).digest('hex')});
  }
  const sourceInfo = await stat(source);
  manifest.push({...item,sourceBytes:sourceInfo.size,sourceSha256:createHash('sha256').update(await readFile(source)).digest('hex'),audio:false,derivatives});
}
await writeFile(path.join(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({projects:manifest.length,files:manifest.flatMap(item=>item.derivatives).length,bytes:manifest.flatMap(item=>item.derivatives).reduce((total,item)=>total+item.bytes,0)}));
