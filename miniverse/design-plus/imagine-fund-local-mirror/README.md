## Imagine Fund Local Mirror

This folder is a self-contained local mirror of `https://imaginefund-lvda.vercel.app/`.

### Contents

- `index.html`: production page HTML rewritten to use local assets
- `_next/static/`: mirrored production CSS, fonts, and JS bundles
- `images/`: local JPG assets copied from the provided source bundle
- `assets/`: mirrored external image assets used by the live page

### Run locally

From this folder:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8765/
```

### Notes

- The original source project is available at `/Users/pluto/Documents/Playground/miniverse/design-plus/imagine-fund`.
- The static mirror was made fully local by replacing external image references and making scroll-reveal content visible without the original runtime.
