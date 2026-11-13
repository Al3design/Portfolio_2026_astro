"""Optimize the eight Chokie images selected with the author for local review."""
import json
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
archive = Path(json.loads((root / '.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
base = archive / 'davinci/multimedia/2017/3D/chokie-v2'
output = root / 'src/editorial/assets'
selection = [('land-1.jpg','chokie-land-1.webp'), ('land-4.jpg','chokie-land-4.webp'),
             ('land-6.jpg','chokie-land-6.webp'), ('land-7.png','chokie-land-7.webp'),
             ('land-8.png','chokie-land-8.webp'), ('land-13.png','chokie-land-13.webp'),
             ('land-14.png','chokie-land-14.webp'), ('render_00211render.png','chokie-render-211.webp')]
manifest = []
for original, filename in selection:
    target = output / filename
    if target.exists():
        raise FileExistsError(target)
    with Image.open(base / original) as source:
        image = ImageOps.exif_transpose(source)
        image = image.convert('RGBA' if 'A' in image.getbands() else 'RGB')
        maximum = 1600 if original == 'land-14.png' else 1280
        image.thumbnail((maximum, maximum), Image.Resampling.LANCZOS)
        image.save(target,'WEBP',quality=88,method=6)
        manifest.append({'source':str(base / original),'file':filename,'width':image.width,
                         'height':image.height,'bytes':target.stat().st_size,'visualReview':'pending'})
(output / 'chokie-images-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Prepared eight Chokie images as local WebP derivatives; originals preserved.')
