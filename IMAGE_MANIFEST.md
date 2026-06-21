# IMAGE_MANIFEST.md

The landing page currently uses 2 optimized portrait photos supplied by the client.

Important imagery is displayed inside `.image-frame` with `object-fit: contain` so the subject is not cropped.

## Optimized Site Images

| File | Source | Description | Site usage |
| --- | --- | --- | --- |
| `public-yegine/images/yegine/yegine-hero-20260621-v4.jpg` | `IMG_2196.PNG` | Егине Левоновна Унанян seated by a window in a dark suit. | Hero portrait and Open Graph image. |
| `public-yegine/images/yegine/yegine-about-20260615-v3.jpg` | `photo_2026-06-15_13-02-10.jpg` | Егине Левоновна Унанян seated on a sofa in a light suit. | About section portrait. |

## Source Files

Quality originals are preserved in:

```text
assets-source/yegine-photos/
```

Current source files:

- `assets-source/yegine-photos/IMG_2197.PNG`
- `assets-source/yegine-photos/photo_2026-06-15_13-02-10.jpg`
- `assets-source/yegine-photos/IMG_2196.PNG`

## Processing Notes

- No AI face editing or generative changes were applied.
- The images were only technically resized and saved as optimized JPEG files.
- WebP conversion was not used because no local WebP encoder was available in the environment.
- Versioned filenames are used to avoid browser/GitHub Pages cache issues after client photo changes.

Old image names are no longer used:

- `yegine-hero.jpg`
- `yegine-about.jpg`
- `yegine-portrait.jpg`
- `yegine-hero-20260615-v2.jpg`
- `yegine-about-20260615-v2.jpg`
- `yegine-hero-20260615-v3.jpg`
- `yegine-expert-20260615-v3.jpg`

