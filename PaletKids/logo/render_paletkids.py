from PIL import Image, ImageDraw, ImageFont

SCALE = 4

SERIF_BOLD      = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SERIF_REG       = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"
FREE_SERIF_BOLD = "/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf"
SANS_REG        = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
FREE_SANS       = "/usr/share/fonts/truetype/freefont/FreeSans.ttf"

DARK      = ( 22,  24,  22)
BROWN     = (139,  79,  45)   # PALET — koyu deri tonu
KIDS_COL  = (196, 114,  58)   # KIDS — daha sıcak/açık aksant
BG_CREAM  = (241, 235, 223)
BG_WHITE  = (250, 249, 247)


def draw_spaced(draw, x, y, text, font, color, sp):
    cx = x
    for ch in text:
        bb = draw.textbbox((0, 0), ch, font=font)
        draw.text((cx, y - bb[1]), ch, font=font, fill=color)
        cx += (bb[2] - bb[0]) + sp
    return cx

def measure_spaced(draw, text, font, sp):
    total = 0
    for i, ch in enumerate(text):
        bb = draw.textbbox((0, 0), ch, font=font)
        total += bb[2] - bb[0]
        if i < len(text) - 1:
            total += sp
    return total


def render_card(bg, font_path, font_sz, sp_px, label):
    W, H = 660 * SCALE, 300 * SCALE
    img  = Image.new("RGB", (W, H), bg)
    d    = ImageDraw.Draw(img)

    fw   = ImageFont.truetype(font_path, font_sz * SCALE)
    fsub = ImageFont.truetype(SANS_REG,  9 * SCALE)
    flbl = ImageFont.truetype(SANS_REG,  8 * SCALE)
    sp   = sp_px * SCALE

    bb_H  = d.textbbox((0, 0), "H", font=fw)
    cap_h = bb_H[3] - bb_H[1]

    palet_w = measure_spaced(d, "PALET", fw, sp)
    kids_w  = measure_spaced(d, "KIDS",  fw, sp)
    word_gap = int(cap_h * 0.30)   # boşluk: PALET ile KIDS arası
    total_w  = palet_w + word_gap + kids_w

    x0    = (W - total_w) // 2
    top_y = int(H * 0.27)

    # PALET — koyu
    end_x = draw_spaced(d, x0, top_y, "PALET", fw, DARK, sp)

    # KIDS — aksant rengi
    draw_spaced(d, end_x + word_gap, top_y, "KIDS", fw, KIDS_COL, sp)

    # LEATHER alt çizgi satırı
    sub_y  = top_y + cap_h + 14 * SCALE
    sub_bb = d.textbbox((0, 0), "LEATHER", font=fsub)
    sub_w  = sub_bb[2] - sub_bb[0]
    sub_x  = (W - sub_w) // 2
    line_y = sub_y + (sub_bb[3] - sub_bb[1]) // 2
    pad    = 10 * SCALE

    d.line([(x0, line_y), (sub_x - pad, line_y)], fill=KIDS_COL, width=SCALE)
    d.text((sub_x, sub_y - sub_bb[1]), "LEATHER", font=fsub, fill=KIDS_COL)
    d.line([(sub_x + sub_w + pad, line_y), (x0 + total_w, line_y)], fill=KIDS_COL, width=SCALE)

    lb = d.textbbox((0, 0), label, font=flbl)
    d.text(((W - (lb[2] - lb[0])) // 2, H - 22 * SCALE), label, font=flbl, fill=(155, 148, 138))

    return img.resize((W // SCALE, H // SCALE), Image.LANCZOS)


cards = [
    render_card(BG_WHITE, SERIF_BOLD,      54, 3, "01 — Cinzel (serif bold) · Açık zemin"),
    render_card(BG_CREAM, SERIF_REG,       58, 3, "02 — Cormorant Garamond (serif light) · Krem zemin"),
    render_card(BG_WHITE, FREE_SERIF_BOLD, 52, 2, "03 — Playfair Display (bold editorial) · Açık zemin"),
    render_card(BG_CREAM, FREE_SANS,       46, 7, "04 — Raleway (geometric sans) · Krem zemin"),
]

cw, ch = cards[0].size
GAP = 4
sheet = Image.new("RGB", (cw * 2 + GAP, ch * 2 + GAP), (210, 204, 196))
for i, c in enumerate(cards):
    col, row = i % 2, i // 2
    sheet.paste(c, (col * (cw + GAP), row * (ch + GAP)))

sheet.save("/tmp/logo-paletkids.png", dpi=(144, 144))
print("done")
