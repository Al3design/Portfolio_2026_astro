import { readFile, writeFile, stat } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const inventory = JSON.parse(await readFile(new URL('../.e2e/content-intake/summary.json', import.meta.url), 'utf8'));
const output = fileURLToPath(new URL('../src/editorial/assets/', import.meta.url));
const projects = [
  {slug: 'discovery', video: 'discovery/Delgado_Alejandro_DM5TN.mp4'},
  {slug: 'tren', video: 'tren/produccion-1.mp4', image: 'tren/Comp-1.jpg'},
  {slug: 'pitufos', video: 'pitufos/PitufosArgentina.mp4', image: 'pitufos/aldeaPastoPitufo.png'},
];
function run(command, args) {
  const result = spawnSync(command, args, {encoding: 'utf8', windowsHide: true});
  if (result.error || result.status !== 0) throw new Error(result.error?.message || result.stderr);
  return result.stdout;
}
const manifest = [];
for (const item of projects) {
  const base = path.join(inventory.sourceRoot, 'davinci/multimedia/2017/video');
  const source = path.join(base, item.video);
  // Source metadata for editorial media authoring, not a project verification command.
  const metadata = JSON.parse(run('ffprobe', ['-v','error','-show_entries','format=duration:stream=codec_type,width,height','-of','json',source]));
  const duration = Number(metadata.format.duration);
  if (!Number.isFinite(duration) || duration <= 0) throw new Error(`Missing video duration: ${item.slug}`);
  const at = Math.min(duration * 0.2, Math.max(0, duration - 1));
  const seconds = Math.min(16, duration - at);
  const ffmpeg = args => run('ffmpeg', ['-v','error','-nostdin','-threads','2',...args]);
  const imageInput = item.image ? ['-i', path.join(base, item.image)] : ['-ss', String(at), '-i', source];
  const posterFilter = item.image ? 'scale=1280:-2' : 'thumbnail=60,scale=1280:-2';
  ffmpeg([...imageInput,'-frames:v','1','-vf',posterFilter,'-quality','86','-n',path.join(output,`${item.slug}-poster.webp`)]);
  for (const [index, fraction] of [0.35, 0.65].entries()) {
    ffmpeg(['-ss',String(duration * fraction),'-i',source,'-frames:v','1','-vf','scale=1280:-2','-quality','86','-n',path.join(output,`${item.slug}-frame-${index + 1}.webp`)]);
  }
  ffmpeg(['-ss',String(at),'-i',source,'-t',String(seconds),'-map','0:v:0','-an','-vf','scale=960:-2','-c:v','libx264','-threads','2','-preset','medium','-crf','25','-pix_fmt','yuv420p','-movflags','+faststart','-n',path.join(output,`${item.slug}-preview.mp4`)]);
  const derivatives = [];
  for (const suffix of ['poster.webp','frame-1.webp','frame-2.webp','preview.mp4']) {
    const filename = `${item.slug}-${suffix}`;
    derivatives.push({file: filename, bytes: (await stat(path.join(output, filename))).size});
  }
  manifest.push({slug: item.slug, source: item.video, posterSource: item.image ?? item.video,
    sourceDuration: duration, previewStart: at, previewSeconds: seconds, previewAudio: false,
    frameFractions: [0.35,0.65], finalVersionConfirmed: false, visualReview: 'pending', derivatives});
  console.log(`Prepared ${item.slug}: cover, two frames and silent local excerpt.`);
}
await writeFile(path.join(output,'academic-2017-media-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
