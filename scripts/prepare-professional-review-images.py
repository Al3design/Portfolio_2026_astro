"""Optimize the seven screenshots explicitly selected for editorial reuse."""
import json
from pathlib import Path
from PIL import Image,ImageOps

root=Path(__file__).resolve().parents[1]
output=root/'src/editorial/assets'
selection=[
 ('C:/www/gitCronos/e2e/tmp/reportes/retomar-19/despues/02-grupo-legible.png','gitcron-context-panel.webp','gitcron'),
 ('C:/www/gitCronos/e2e/tmp/reportes/retomar-19/despues/01-menu-grafo.png','gitcron-context-menu.webp','gitcron'),
 ('C:/www/useOdontoPro/tests/shots/baseline/home__1440px.png','useodontopro-home-desktop.webp','useodontopro'),
 ('C:/www/useOdontoPro/tests/shots/baseline/home__390px.png','useodontopro-home-mobile.webp','useodontopro'),
 ('C:/www/useOdontoPro/tests/shots/baseline/planes__1440px.png','useodontopro-plans-desktop.webp','useodontopro'),
 ('C:/www/useOdontoPro/tests/shots/baseline/planes__390px.png','useodontopro-plans-mobile.webp','useodontopro'),
 ('C:/www/odontoPau/output/playwright/article-reference-mobile.png','odontopau-article-mobile.webp','odontopau'),
]
manifest=[]
for source,file,project in selection:
    target=output/file
    if target.exists(): raise FileExistsError(target)
    with Image.open(source) as original:
        image=ImageOps.exif_transpose(original).convert('RGB')
        # Preserve full height and aspect ratio; constrain width only, no upscaling.
        if image.width>1600:
            image.resize((1600,round(image.height*1600/image.width)),Image.Resampling.LANCZOS).save(target,'WEBP',quality=90,method=6)
        else:
            image.save(target,'WEBP',quality=90,method=6)
    with Image.open(target) as derivative:
        manifest.append({'file':file,'project':project,'source':source,'width':derivative.width,
                         'height':derivative.height,'bytes':target.stat().st_size,
                         'sourceReview':'existing screenshot inspected under explicit user exception',
                         'currentInterface':'not established','publication':'not approved'})
(output/'professional-web-media-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Prepared seven full-frame editorial derivatives; originals untouched.')
