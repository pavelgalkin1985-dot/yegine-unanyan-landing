# PROJECT_MEMORY.md

## Current Status

Project: landing page for Егине Левоновна Унанян.

The project is intentionally separate from the old Codex workspace:

```text
C:/Users/Admin/Documents/yegine-unanyan-landing
```

Repository:

```text
https://github.com/pavelgalkin1985-dot/yegine-unanyan-landing
```

Published GitHub Pages URL:

```text
https://pavelgalkin1985-dot.github.io/yegine-unanyan-landing/
```

Branch:

```text
main
```

Recent important commits:

- `9757a78 Build Yegine landing MVP`
- `ea1b356 Configure GitHub Pages base path`
- `b998182 Replace WhatsApp with MAX contact`
- `508acd5 Enable GitHub Pages workflow`
- `12a8ab0 Update Yegine portrait photos`
- `0bc896e Version Yegine portrait images`
- `631638a Document Yegine project memory`

## Positioning

Confirmed full name:

```text
Егине Левоновна Унанян
```

Current public positioning:

```text
Врач-терапевт | Психолог
```

Important legal/reputation guidance:

- Do not use "психиатр" as an active public specialization, service, or SEO keyword until accreditation is confirmed.
- Accreditation in psychiatry is expected later, not active now.
- Use careful wording around therapy, stress, dependent behavior, psychosomatics, crisis states, and burnout.
- Do not promise guaranteed recovery, "без срывов", "навсегда", or similar outcomes.
- Do not publish prices yet.
- Keep the site as an appointment/contact landing page.

Approved framing:

- врач-терапевт и психолог
- комплексная работа на стыке доказательной медицины, психологии и психотерапевтических подходов
- медицинский взгляд на состояние человека
- бережная работа с выгоранием, стрессом, зависимым поведением, психосоматическими проявлениями и кризисными состояниями
- индивидуальный маршрут помощи
- конфиденциальное пространство

## Content Structure

Current sections:

- Hero
- About
- Requests
- Trust / professional ethics
- Documents and education placeholders
- Work formats
- Video review placeholder
- Reviews placeholders
- Confidentiality
- First meeting preparation
- Appointment/cancellation rules
- Final CTA and contacts

Prepared future blocks:

- Education and professional documents
- Video review
- Patient reviews
- Additional certificates/gallery

Do not invent universities, licenses, document numbers, dates, or credentials. Use TODO placeholders until client confirms.

## Contacts

Current single contact phone:

```text
+7 904 084 4777
```

Normalized phone href:

```text
tel:+79040844777
```

Contacts are centralized in:

```text
src/data/contacts.ts
```

Current policy:

- Telegram remains TODO until client sends the personal link.
- VK remains TODO until client sends the personal link.
- WhatsApp was removed completely.
- MAX is used instead of WhatsApp.
- MAX currently uses `tel:+79040844777` as a safe fallback.
- Do not invent a MAX deep link until client confirms the format/link/QR/bot.

## Images

Active public image directory:

```text
public-yegine/images/yegine/
```

Current active images:

```text
public-yegine/images/yegine/yegine-hero-20260615-v3.jpg
public-yegine/images/yegine/yegine-about-20260615-v3.jpg
public-yegine/images/yegine/yegine-expert-20260615-v3.jpg
```

Current image mapping:

- `yegine-hero-20260615-v3.jpg` - main hero photo from `IMG_2197.PNG`, Егине smiling by a window in a dark suit.
- `yegine-about-20260615-v3.jpg` - about photo from `photo_2026-06-15_13-02-10.jpg`, Егине seated on a sofa in a light suit.
- `yegine-expert-20260615-v3.jpg` - work formats photo from `IMG_2196.PNG`, Егине in a dark suit in a calm interior.

Current source files are preserved in:

```text
assets-source/yegine-photos/
```

Important note:

- No AI face editing or generative changes should be applied to photos.
- Only technical resize/compression is allowed unless the client explicitly asks otherwise.
- Use versioned filenames for photo replacements.

Cache policy:

- Use versioned filenames for photo replacements.
- Avoid replacing a client-facing image under the same old URL if the goal is to bypass browser/GitHub Pages cache.

Old image names no longer used:

```text
yegine-hero.jpg
yegine-about.jpg
yegine-portrait.jpg
yegine-hero-20260615-v2.jpg
yegine-about-20260615-v2.jpg
```

Image manifest:

```text
IMAGE_MANIFEST.md
```

## SEO And Deploy

Current SEO title:

```text
Егине Унанян - врач-терапевт и психолог
```

Current description:

```text
Комплексная помощь при выгорании, стрессе, зависимом поведении, психосоматике и кризисных состояниях. Онлайн и оффлайн прием, конфиденциально.
```

Current canonical:

```text
https://pavelgalkin1985-dot.github.io/yegine-unanyan-landing/
```

After custom domain connection, replace canonical and Open Graph URLs with the final domain.

GitHub Pages repo deploy base:

```text
VITE_BASE_PATH=/yegine-unanyan-landing/
```

Workflow:

```text
.github/workflows/deploy-pages.yml
```

The workflow was updated so Pages can be configured for GitHub Actions deploy.

Custom domain preparation:

```text
DOMAIN_SETUP.md
```

Do not add a CNAME file or switch `VITE_BASE_PATH=/` until the exact domain is confirmed.

## Reviews

Current review sources:

- Telegram: `https://t.me/otzivieginelevonovni`
- ПроДокторов: `https://prodoctorov.ru/moskva/vrach/900369-unanyan/`

The site uses short, privacy-safe paraphrased review cards from publicly visible ПроДокторов reviews.

Telegram web-view is linked as a source, but the visible review content in the checked posts was mostly image screenshots and short captions, so text was not manually transcribed into review cards.

## Verification Checklist

Before committing/deploying changes, run:

```bash
npm run typecheck
npm run lint
npm run build
```

After deploy, verify:

- GitHub Actions deploy is successful.
- Pages URL returns HTTP 200.
- Desktop and mobile render without console errors.
- No horizontal overflow.
- Images load and use the expected versioned filenames.
- Telegram / MAX / VK are visible.
- `+7 904 084 4777` is visible.
- WhatsApp / `wa.me` are absent.
- Active psychiatry wording is absent.
- Prices are absent.
- Legacy SUP/LabX/videoeditor assets are absent.

Useful commands:

```bash
git status --short
git log --oneline --max-count=5
gh run list --limit 5
curl.exe -I https://pavelgalkin1985-dot.github.io/yegine-unanyan-landing/
```

## Known Follow-Ups

- Add real Telegram, VK, and MAX links when client provides them.
- Replace TODO canonical when domain is chosen.
- Add video review content.
- Add approved patient reviews.
- Add documents/certificates gallery.
- Possibly replace the second photo with a cleaner original without the `3/3` marker if client sends one.
- Consider updating GitHub Actions versions if Node 20 action deprecation warnings become blocking.
