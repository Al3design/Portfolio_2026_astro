"""Optimize the composed cover and additional original textured views."""
import json
from pathlib import Path
from PIL import Image,ImageOps
root=Path(__file__).resolve().parents[1]
archive=Path(json.loads((root/'.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
generated=Path('C:/Users/apdel/.codex/generated_images/01a13fae-1360-7331-b6a7-52dc2d152c49/exec-e5f57e1b-0f90-4a68-bc6b-508429ce4427.png')
entries=[(generated,'botf-textured-collage.webp'),
 (archive/'job/3D/BOTF/Miranda proto/18m.jpg','botf-miranda-textured.webp'),
 (archive/'job/3D/BOTF/Kelvin/15k.jpg','botf-kelvin-textured.webp'),
 (archive/'job/3D/BOTF/Vesta/vs_p.jpg','botf-vesta-textured.webp')]
manifest=[]
for source,file in entries:
    target=root/'src/editorial/assets'/file
    if target.exists(): raise FileExistsError(target)
    with Image.open(source) as original:
        image=ImageOps.exif_transpose(original).convert('RGB')
        image.thumbnail((1920,1600),Image.Resampling.LANCZOS)
        image.save(target,'WEBP',quality=90,method=6)
        manifest.append({'file':file,'source':str(source),'width':image.width,'height':image.height,
                         'bytes':target.stat().st_size,'composition':'AI-assisted collage of existing renders' if source==generated else 'original archival view'})
(root/'src/editorial/assets/botf-cover-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Prepared BOTF collage cover and three additional textured views.')
