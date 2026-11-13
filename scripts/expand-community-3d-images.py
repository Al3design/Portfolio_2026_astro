"""Select archived views for expanded draft galleries; leave originals intact."""
import json
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

root=Path(__file__).resolve().parents[1]
archive=Path(json.loads((root/'.e2e/content-intake/summary.json').read_text(encoding='utf-8'))['sourceRoot'])
output=root/'src/editorial/assets'
groups={
 'Miranda proto':['1.jpg','19m.jpg'],
 'Kelvin':['1k.jpg','ktos1.jpg'],
 'Saladin':['sa1.jpg','s15.jpg'],
 'Titan':['1.jpg','9.jpg'],
 'Turret':['1.jpg','9.jpg'],
 'Immense stations':['1.jpg','Immense_spacestation.jpg'],
 'Constitution Kelvin':['1.jpg','20j.jpg'],
 'K7 station':['k7_1.jpg','ingame.jpg'],
 'Borg probe':['bp1.jpg','tac_muestra.jpg'],
}
selection=[]
for group,files in groups.items():
    slug=group.lower().replace(' ','-')
    for i,file in enumerate(files,1):
        selection.append((f'job/3D/BOTF/{group}/{file}',f'botf-{slug}-{i}.webp',group))
for i in [1,2,3,5]:
    selection.append((f'job/3D/SUPREMACY/prueba{i}.jpg',f'supremacy-3d-{i}.webp','SUPREMACY'))
manifest=[]
board=Image.new('RGB',(1000,((len(selection)+3)//4)*180),'#e5e5e5')
draw=ImageDraw.Draw(board)
for index,(relative,filename,group) in enumerate(selection):
    target=output/filename
    if target.exists(): raise FileExistsError(target)
    with Image.open(archive/relative) as source:
        image=ImageOps.exif_transpose(source).convert('RGB')
        image.thumbnail((1600,2400),Image.Resampling.LANCZOS)
        image.save(target,'WEBP',quality=90,method=6)
        thumb=image.copy()
        thumb.thumbnail((240,145))
        x=(index%4)*250
        y=(index//4)*180
        board.paste(thumb,(x,y))
        draw.text((x+3,y+148),filename,fill='black')
        manifest.append({'file':filename,'source':str(archive/relative),'group':group,
          'width':image.width,'height':image.height,'bytes':target.stat().st_size,'visualReview':'pending'})
(output/'community-3d-expanded-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
board.save(root/'.e2e/content-intake/community-3d-source-contact.jpg')
print(f'Prepared {len(manifest)} additional derivatives and an original-source contact sheet.')
