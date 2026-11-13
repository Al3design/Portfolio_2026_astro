"""Create local review images from the preserved village studies; originals stay intact."""
import json
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
archive = Path(json.loads((root / '.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
base = archive / 'davinci/multimedia/2017/video/pitufos'
output = root / 'src/editorial/assets'
sources = [('pruebaHongo1.jpg', 'pitufos-mushroom-1.webp'),
           ('pruebaHongo2.jpg', 'pitufos-mushroom-2.webp'),
           ('pruebaHongo3.jpg', 'pitufos-mushroom-3.webp'),
           ('pruebaHongo3-2.jpg', 'pitufos-mushroom-3-2.webp'),
           ('pruebaHongo3-3.jpg', 'pitufos-mushroom-3-3.webp')]
manifest = []
for original, filename in sources:
    target = output / filename
    if target.exists():
        raise FileExistsError(target)
    with Image.open(base / original) as source:
        image = ImageOps.exif_transpose(source).convert('RGB')
        image.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=88, method=6)
        manifest.append({'source': str(base / original), 'file': filename,
                         'width': image.width, 'height': image.height,
                         'bytes': target.stat().st_size, 'visualReview': 'pending'})
(output / 'pitufos-mushroom-manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
print('Prepared five preserved mushroom studies as local WebP images.')
