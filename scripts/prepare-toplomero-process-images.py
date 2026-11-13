"""Optimize preserved Toplomero studies without changing source files."""
import json
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
archive = Path(json.loads((root / '.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
base = archive / 'davinci/multimedia/2017/3D/toplomero-v2'
output = root / 'src/editorial/assets'
selection = [('pruebaFur3.jpg', 'toplomero-fur-3.webp'), ('pruebaFur6.jpg', 'toplomero-fur-6.webp'),
             ('pruebaSotano2.jpg', 'toplomero-setting-2.webp'), ('casiCompleto5.png', 'toplomero-scene-5.webp'),
             ('conAgua0006.png', 'toplomero-water-6.webp')]
manifest = []
for original, filename in selection:
    target = output / filename
    if target.exists():
        raise FileExistsError(target)
    with Image.open(base / original) as source:
        image = ImageOps.exif_transpose(source).convert('RGB')
        image.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=88, method=6)
        manifest.append({'source': str(base / original), 'file': filename, 'width': image.width,
                         'height': image.height, 'bytes': target.stat().st_size, 'visualReview': 'pending'})
(output / 'toplomero-process-manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
print('Prepared five preserved Toplomero process images.')
