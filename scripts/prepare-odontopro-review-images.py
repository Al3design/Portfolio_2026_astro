"""Optimize two authorized existing screenshots with synthetic fixture records."""
import json
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
source=Path('C:/www/odontoPro/supabase/audits')
output=root/'src/editorial/assets'
selection=[('ficha-patients-browser-20260929-final.png','odontopro-patients-demo.webp'),
 ('ficha-patient-page-browser-firefox-auth-E4-20261008-final.png','odontopro-record-demo.webp')]
manifest=[]
for original,file in selection:
    target=output/file
    if target.exists(): raise FileExistsError(target)
    with Image.open(source/original) as image:
        image.convert('RGB').save(target,'WEBP',quality=90,method=6)
        manifest.append({'file':file,'source':str(source/original),'width':image.width,'height':image.height,
          'bytes':target.stat().st_size,'data':'synthetic fixtures; name patterns confirmed in source scripts',
          'review':'explicit user authorization for seven existing screenshots',
          'publication':'draft only','currentInterface':'not established'})
(output/'odontopro-review-media-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Prepared two synthetic-data OdontoPro screenshots without altering originals.')
