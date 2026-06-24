# IMAGE_MANIFEST.md

The landing page currently uses 2 optimized portrait photos and 4 optimized document previews supplied by the client.

Important imagery is displayed inside `.image-frame` with `object-fit: contain` so the subject is not cropped.

## Optimized Site Images

| File | Source | Description | Site usage |
| --- | --- | --- | --- |
| `public-yegine/images/yegine/yegine-hero-20260621-v4.jpg` | `IMG_2196.PNG` | Егине Левоновна Унанян seated by a window in a dark suit. | Hero portrait and Open Graph image. |
| `public-yegine/images/yegine/yegine-about-20260615-v3.jpg` | `photo_2026-06-15_13-02-10.jpg` | Егине Левоновна Унанян seated on a sofa in a light suit. | About section portrait. |
| `public-yegine/images/documents/yegine-certificate-addiction-psychology-20260624-v1.jpg` | `PDF.pdf` | Certificate for the practical conference "Психология зависимости: вызовы современности". | Documents gallery. |
| `public-yegine/images/documents/yegine-diploma-medical-specialist-20260624-v1.jpg` | `РОССИЙСКАЯ ФЕДЕРАЦИЯ.pdf` | Medical specialist diploma, лечебное дело. | Documents gallery. |
| `public-yegine/images/documents/yegine-diploma-psychological-consulting-20260624-v1.jpg` | `РОССИЙСКАЯ ФЕДЕРАЦИЯ (2).pdf` | Professional retraining diploma in psychological consulting. | Documents gallery. |
| `public-yegine/images/documents/yegine-diploma-therapy-internship-20260624-v1.jpg` | `РОССИЙСКАЯ.pdf` | Postgraduate professional education diploma, therapy internship. | Documents gallery. |

## Source Files

Quality originals are preserved in:

```text
assets-source/yegine-photos/
```

Current source files:

- `assets-source/yegine-photos/IMG_2197.PNG`
- `assets-source/yegine-photos/photo_2026-06-15_13-02-10.jpg`
- `assets-source/yegine-photos/IMG_2196.PNG`

Document PDFs were supplied from `C:/Users/Admin/Downloads/` and are not committed to the public site. Only optimized JPEG previews are published.

## Processing Notes

- No AI face editing or generative changes were applied.
- The images were only technically resized and saved as optimized JPEG files.
- WebP conversion was not used because no local WebP encoder was available in the environment.
- Versioned filenames are used to avoid browser/GitHub Pages cache issues after client photo changes.
- Document previews were rotated into readable landscape orientation where needed.
- Public document previews mask only serial and registration numbers; names, programs, dates, seals, and qualifications remain visible.

Old image names are no longer used:

- `yegine-hero.jpg`
- `yegine-about.jpg`
- `yegine-portrait.jpg`
- `yegine-hero-20260615-v2.jpg`
- `yegine-about-20260615-v2.jpg`
- `yegine-hero-20260615-v3.jpg`
- `yegine-expert-20260615-v3.jpg`

