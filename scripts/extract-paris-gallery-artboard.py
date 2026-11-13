"""Read GALERIA artboard bounds from PSD metadata and crop its merged composite."""
import json, struct
from pathlib import Path
from PIL import Image

root=Path(__file__).resolve().parents[1]
archive=Path(json.loads((root/'.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
source=archive/'davinci/diseño_web/web/paris/grafica/Alejandro-Delgado-final-2.psd'
data=source.read_bytes()
def u32(at): return struct.unpack_from('>I',data,at)[0]
at=26
for _ in range(2): at+=4+u32(at)
at+=8
count=abs(struct.unpack_from('>h',data,at)[0]); at+=2
rectangle=None
for _ in range(count):
    at+=16
    channels=struct.unpack_from('>H',data,at)[0]; at+=2+channels*6+12
    extra=u32(at); at+=4; end=at+extra
    at+=4+u32(at); at+=4+u32(at)
    size=data[at]; name=data[at+1:at+1+size].decode('latin1',errors='replace')
    at+=(size+1+3)//4*4
    if name=='GALERIA':
        while at+12<=end and data[at:at+4]==b'8BIM':
            key=data[at+4:at+8]; length=u32(at+8); payload=data[at+12:at+12+length]
            if key==b'artb':
                rect=payload[payload.index(b'artboardRect'):]
                values={key:struct.unpack_from('>d',rect,rect.index(key+b'doub')+8)[0]
                        for key in [b'Top ',b'Left',b'Btom',b'Rght']}
                rectangle=tuple(round(values[key]) for key in [b'Left',b'Top ',b'Rght',b'Btom'])
            at+=12+length+(length%2)
    at=end
if rectangle is None: raise ValueError('GALERIA artboard not found')
output=root/'src/editorial/assets/paris-gallery.webp'
if output.exists(): raise FileExistsError(output)
with Image.open(source) as composite:
    left,top,right,bottom=rectangle
    if not (0<=left<right<=composite.width and 0<=top<bottom<=composite.height):
        raise ValueError('Artboard bounds outside merged composite')
    image=composite.crop(rectangle).convert('RGB')
    image.thumbnail((1600,8000),Image.Resampling.LANCZOS)
    image.save(output,'WEBP',quality=90,method=6)
    manifest={'source':str(source),'artboard':'GALERIA','bounds':rectangle,'file':output.name,
              'width':image.width,'height':image.height,'bytes':output.stat().st_size,'visualReview':'pending'}
    (output.parent/'paris-gallery-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print(json.dumps(manifest,ensure_ascii=True))
