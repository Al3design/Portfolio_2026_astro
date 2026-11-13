"""Historical extraction: yielded background-only layers, not complete UI.

Superseded by compose-around-presentation-images.py. Do not use for article media.
"""
from pathlib import Path
from io import BytesIO
import json
from pypdf import PdfReader
from PIL import Image

source = Path(r"G:\Mi unidad\CV\2026\PDF\FIGMA presentation\Case-study-AD.pdf")
destination = Path(__file__).resolve().parents[1] / "src/editorial/assets"
reader = PdfReader(source)
selection = [(6, "/X2", "around-layout-a.webp"), (6, "/X8", "around-layout-b.webp"),
             (7, "/X2", "around-alert-a.webp"), (7, "/X3", "around-alert-b.webp")]
manifest = []
for page, key, filename in selection:
    target = destination / filename
    if target.exists():
        raise FileExistsError(target)
    asset = reader.pages[page - 1].images[key]
    image = Image.open(BytesIO(asset.data)).convert("RGB")
    image.save(target, "WEBP", quality=88, method=6)
    manifest.append({"file": filename, "page": page, "object": key,
                     "width": image.width, "height": image.height,
                     "source": str(source), "visualReview": "pending"})
(destination / "around-presentation-manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
print("Extracted four embedded presentation images for local review; no page rendering.")
