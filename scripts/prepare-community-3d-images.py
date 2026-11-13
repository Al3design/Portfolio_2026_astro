"""Prepare review derivatives from archived JPGs, without modifying originals."""
import json
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
archive = Path(json.loads((root/'.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
output = root/'src/editorial/assets'
selection = [
    ('job/3D/BOTF/Vesta/vesta_perspective.jpg','botf-vesta-perspective.webp'),
    ('job/3D/BOTF/Vesta/vesta_front.jpg','botf-vesta-front.webp'),
    ('job/3D/BOTF/Vesta/vesta_left.jpg','botf-vesta-left.webp'),
    ('job/3D/SUPREMACY/Kling-DipComp 021.jpg','supremacy-study-021.webp'),
    ('job/3D/SUPREMACY/Kling-DipComp 023.jpg','supremacy-study-023.webp'),
    ('job/3D/casa/render/casa01.jpg','casa-render-01.webp'),
    ('job/3D/casa/render/casa05.jpg','casa-render-05.webp'),
    ('job/3D/casa/render/casa09.jpg','casa-render-09.webp'),
]
manifest = []
for relative, filename in selection:
    target = output/filename
    if target.exists():
        raise FileExistsError(target)
    with Image.open(archive/relative) as source:
        image = ImageOps.exif_transpose(source).convert('RGB')
        image.thumbnail((1600,2400), Image.Resampling.LANCZOS)
        image.save(target,'WEBP',quality=90,method=6)
        manifest.append({'file':filename,'source':str(archive/relative),'width':image.width,
                         'height':image.height,'bytes':target.stat().st_size,'visualReview':'pending',
                         'selection':'provisional, based on source filenames; attribution per project'})
(output/'community-3d-media-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Prepared eight review images for BOTF, Supremacy and Casa.')
