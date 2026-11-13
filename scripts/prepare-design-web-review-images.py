"""Compose source wireframes and optimize original design images for local review."""
import json
from pathlib import Path
import pypdfium2 as pdfium
from PIL import Image, ImageOps

root=Path(__file__).resolve().parents[1]
archive=Path(json.loads((root/'.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
output=root/'src/editorial/assets'
manifest=[]
pdf_path=archive/'davinci/diseño_web/UX/rioko/UX-Parcial-02.pdf'
document=pdfium.PdfDocument(pdf_path)
for number,filename in [(3,'rioko-navigation.webp'),(5,'rioko-budget.webp'),(6,'rioko-results.webp')]:
    target=output/filename
    if target.exists(): raise FileExistsError(target)
    page=document[number-1]
    bitmap=page.render(scale=1600/page.get_width())
    image=bitmap.to_pil().convert('RGB')
    image.save(target,'WEBP',quality=90,method=6)
    manifest.append({'file':filename,'source':str(pdf_path),'page':number,'method':'full PDF composition','width':image.width,'height':image.height,'visualReview':'pending'})
    bitmap.close()
    page.close()
document.close()
sources=[
 ('davinci/diseño_web/web/paris/grafica/Alejandro-Delgado-TP2-DWVN1BHOME.jpg','paris-home.webp'),
 ('davinci/diseño_web/web/paris/grafica/Alejandro-Delgado-TP2-DWVN1BPOI.jpg','paris-poi.webp'),
 ('davinci/diseño_web/web/paris/grafica/Alejandro-Delgado-TP2-DWVN1BTICKETS.jpg','paris-tickets.webp'),
 ('davinci/diseño_web/web/tiendageekies/img/productos/productos.png','geekies-catalog.webp'),
]
for relative,filename in sources:
    target=output/filename
    if target.exists(): raise FileExistsError(target)
    with Image.open(archive/relative) as source:
        image=ImageOps.exif_transpose(source)
        image=image.convert('RGBA' if 'A' in image.getbands() else 'RGB')
        image.thumbnail((1600,8000),Image.Resampling.LANCZOS)
        image.save(target,'WEBP',quality=88,method=6)
        manifest.append({'file':filename,'source':str(archive/relative),'width':image.width,'height':image.height,'visualReview':'pending'})
(output/'design-web-media-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Prepared seven source-based review images for Rioko, Paris and Tienda Geekies.')
