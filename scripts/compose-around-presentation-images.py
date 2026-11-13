"""Compose source PDF pages, including vectors/text/masks, as local article assets."""
from pathlib import Path
import json
import pypdfium2 as pdfium

source = Path(r"G:\Mi unidad\CV\2026\PDF\FIGMA presentation\Case-study-AD.pdf")
destination = Path(__file__).resolve().parents[1] / "src/editorial/assets"
document = pdfium.PdfDocument(source)
manifest = []
for page_number, filename in [(6, "around-layout-slide.webp"), (7, "around-alert-slide.webp")]:
    page = document[page_number - 1]
    scale = 1920 / page.get_width()
    bitmap = page.render(scale=scale)
    image = bitmap.to_pil().convert("RGB")
    image.save(destination / filename, "WEBP", quality=92, method=6)
    manifest.append({"file": filename, "page": page_number,
                     "width": image.width, "height": image.height,
                     "source": str(source), "method": "Full PDF page composition with PDFium",
                     "replaces": [f"around-{'layout' if page_number == 6 else 'alert'}-{variant}.webp" for variant in ["a", "b"]],
                     "browserReview": "pending"})
    bitmap.close()
    page.close()
document.close()
(destination / "around-presentation-manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
print("Composed layout and alert slides with text, vector graphics and image layers.")
