"""Optimize existing Mate/CV design exports; no original files are changed."""
import json
from pathlib import Path
from PIL import Image, ImageOps

root=Path(__file__).resolve().parents[1]
archive=Path(json.loads((root/'.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
output=root/'src/editorial/assets'
selection=[
 ('davinci/diseño_web/grafica/mate/01Piezas_Digitales_Delgado/A_Posteo_Instagram_Delgado/insta-1080x1080.jpg','mate-instagram.webp'),
 ('davinci/diseño_web/grafica/mate/01Piezas_Digitales_Delgado/B_Banner_Lateral_Delgado/banner-digital-lateral-250x600.jpg','mate-sidebar.webp'),
 ('davinci/diseño_web/grafica/mate/01Piezas_Digitales_Delgado/C_Banner_Estandar_Delgado/banner-digital-estandar-970x200.jpg','mate-banner.webp'),
 ('davinci/diseño_web/grafica/mate/02Volante_Impresion_Delgado/volante-impresion-10x15.jpg','mate-flyer.webp'),
 ('davinci/diseño_web/grafica/cv_personal/Dark theme.jpg','cv-personal-dark.webp'),
 ('davinci/diseño_web/grafica/cv_personal/Light  theme.jpg','cv-personal-light.webp'),
]
manifest=[]
for relative,filename in selection:
    target=output/filename
    if target.exists(): raise FileExistsError(target)
    with Image.open(archive/relative) as source:
        image=ImageOps.exif_transpose(source).convert('RGB')
        image.thumbnail((1600,6000),Image.Resampling.LANCZOS)
        image.save(target,'WEBP',quality=90,method=6)
        manifest.append({'file':filename,'source':str(archive/relative),'width':image.width,
                         'height':image.height,'bytes':target.stat().st_size,'visualReview':'pending'})
(output/'graphic-design-media-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Prepared four Mate pieces and two historical CV design exports.')
