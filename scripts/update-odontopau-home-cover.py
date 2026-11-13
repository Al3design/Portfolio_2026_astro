"""Optimize the requested desktop homepage capture without altering its content."""
import json
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
source=root/'.e2e/content-intake/odontopau-home-desktop-20261019.png'
target=root/'src/editorial/assets/odontopau-home-desktop.webp'
if target.exists(): raise FileExistsError(target)
with Image.open(source) as image:
    image.convert('RGB').save(target,'WEBP',quality=90,method=6)
    record={'file':target.name,'sourceUrl':'https://paulagualtieri.com/',
      'capturedOn':'2026-10-19','width':image.width,'height':image.height,
      'bytes':target.stat().st_size,'purpose':'desktop homepage cover requested by Alejandro',
      'publication':'portfolio draft only','transform':'WebP conversion only; no crop or generated elements'}
(target.parent/'odontopau-home-cover-manifest.json').write_text(json.dumps(record,indent=2),encoding='utf-8')
print('Prepared desktop homepage cover at original dimensions.')
