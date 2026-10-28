from PIL import Image, ImageDraw, ImageFont
import glob, os
W, H = 1200, 630
img = Image.new("RGB", (W, H), (11, 31, 58))
d = ImageDraw.Draw(img)
# subtle lattice
for x in range(0, W, 120):
    d.line([(x, 0), (x, H)], fill=(24, 48, 80), width=1)
for y in range(0, H, 90):
    d.line([(0, y), (W, y)], fill=(24, 48, 80), width=1)
teal = (46, 196, 182)
pts = [(120, 470), (300, 330), (480, 400), (660, 250), (840, 360), (1040, 470)]
d.line(pts, fill=teal, width=4, joint="curve")
for p in pts:
    d.ellipse([p[0]-7, p[1]-7, p[0]+7, p[1]+7], fill=teal)
def font(size, bold=False):
    cands = glob.glob("/usr/share/fonts/**/*.ttf", recursive=True)
    pick = [c for c in cands if ("Bold" in c or "bold" in c) == bold and ("Sans" in c or "Inter" in c or "DejaVu" in c or "Liberation" in c)]
    path = pick[0] if pick else (cands[0] if cands else None)
    return ImageFont.truetype(path, size) if path else ImageFont.load_default()
d.text((120, 120), "Zi Cloud", font=font(44, True), fill=(255, 255, 255))
d.text((120, 200), "Controlled AI & Workflow Automation", font=font(50, True), fill=(255, 255, 255))
d.text((120, 262), "for Regulated Operations", font=font(50, True), fill=(255, 255, 255))
img.save(os.path.join("assets", "og-image.png"), optimize=True)
print("ok", img.size)
