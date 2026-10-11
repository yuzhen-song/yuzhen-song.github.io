"""Compose the user's original pixel-art cats with a fixed classic arrow.

Usage: python _scripts/prepare_cat_cursors.py sleeping.png arched.png
Requires Pillow. No drawing or recoloring is applied to the cat illustrations.
"""

import argparse
from pathlib import Path

from PIL import Image, ImageDraw

CANVAS_SIZE = 64
CAT_WIDTH = 48
CAT_LEFT = 15
CAT_TOP = 17
ARROW_TIP = (1, 1)
OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "cursors"


def load_cat(path):
    cat = Image.open(path).convert("RGBA")
    # Preserve existing transparency. For opaque originals with a pure black
    # background, remove only exact black; the dark brown cat outline stays intact.
    if cat.getextrema()[3] == (255, 255):
        corners = [cat.getpixel(p)[:3] for p in (
            (0, 0), (cat.width - 1, 0),
            (0, cat.height - 1), (cat.width - 1, cat.height - 1),
        )]
        if all(color == (0, 0, 0) for color in corners):
            cat.putdata([
                (r, g, b, 0 if (r, g, b) == (0, 0, 0) else a)
                for r, g, b, a in cat.getdata()
            ])
        else:
            raise ValueError(f"{path}: supply a transparent PNG or a pure-black background original")
    # The supplied PNGs contain almost invisible alpha noise in the padding.
    # Ignore that noise when cropping, without changing pixels inside the cat.
    bounds = cat.getchannel("A").point(lambda alpha: 255 if alpha >= 8 else 0).getbbox()
    if bounds is None:
        raise ValueError(f"{path}: image is empty")
    return cat.crop(bounds)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("sleeping", type=Path)
    parser.add_argument("arched", type=Path)
    args = parser.parse_args()
    cats = [load_cat(args.sleeping), load_cat(args.arched)]
    # A shared scale preserves the relative size of the two supplied drawings.
    scale = min(CAT_WIDTH / max(cat.width for cat in cats),
                (CANVAS_SIZE - CAT_TOP - 1) / max(cat.height for cat in cats))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for name, cat in zip(("sleeping", "arched"), cats):
        cat = cat.resize((max(1, round(cat.width * scale)),
                          max(1, round(cat.height * scale))), Image.Resampling.NEAREST)
        canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE))
        canvas.alpha_composite(cat, (CAT_LEFT, CAT_TOP))
        # 15px-tall white arrow, 1px black outline; identical in both states.
        ImageDraw.Draw(canvas).polygon(
            [ARROW_TIP, (1, 13), (4, 10), (7, 15), (9, 14), (6, 9), (11, 9)],
            fill="white", outline="black", width=1,
        )
        destination = OUTPUT / f"cat-{name}.png"
        canvas.save(destination, optimize=True)
        print(f"{destination}: {destination.stat().st_size} bytes")


if __name__ == "__main__":
    main()
