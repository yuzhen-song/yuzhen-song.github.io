# Cat cursor assets

The cursor uses the two supplied cat illustrations without changing their poses
or colors. The original image files must be available locally before generating
the final assets:

```shell
python _scripts/prepare_cat_cursors.py cat1.png cat2.png
```

The script requires Pillow and writes `cat-sleeping.png` and `cat-arched.png` here.
It crops transparent padding (including nearly invisible alpha noise), removes exact black from opaque black-background
originals, resizes with nearest-neighbor sampling at a shared scale, and adds an
identical 15px white arrow with a thin black outline. Review background removal
if your original has black artwork rather than the supplied dark brown outline.

- **Size:** Change `CANVAS_SIZE`, `CAT_WIDTH`, `CAT_LEFT`, and `CAT_TOP` in
  `_scripts/prepare_cat_cursors.py`, then regenerate. Keep the canvas at 64px or
  smaller for compatibility. CSS does not resize native PNG cursors.
- **Hotspot:** The arrow tip is `(1, 1)`. If moving it, update `ARROW_TIP` and the
  arrow polygon in the generator and both `1 1` coordinates in
  `assets/css/cat-cursor.css` together.
- **Click duration:** Change `RELEASE_DELAY_MS` in `assets/js/cat-cursor.js`
  (currently 250ms after the final mouse button is released).
- **Native cursors:** Text/editing and disabled controls have explicit native
  cursors. Existing resize, zoom, drag and other component cursor declarations
  continue to work; no universal cursor override is used.

The shared head include loads the stylesheet and deferred script on all standard
site layouts. The script enables the cursor only after both images load and
decode, and only when a fine pointer with hover is available. Mouse press/release
listeners never cancel events or capture the pointer. No cursor-following element,
animation loop, or new browser dependency is involved.

To review locally, run the usual Jekyll Docker preview, then check Home, Academic,
Projects and project details. Check holding/releasing a mouse button, rapid repeat
clicks, links, navigation, text selection, form controls, window blur, dark mode,
and a touch-only device. The arrow tip should stay at the same click location in
both states. Operating-system cursors are often omitted from browser screenshots,
so visually check the actual pointer as well.
