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
public-yegine/images/yegine/yegine-hero-20260615-v2.jpg
public-yegine/images/yegine/yegine-about-20260615-v2.jpg
```

Current image mapping:

- `yegine-hero-20260615-v2.jpg` - main hero photo, Егине seated on a sofa in a light suit.
- `yegine-about-20260615-v2.jpg` - second photo, Егине seated by a window in a dark suit.

Important note from client:

- The second photo must remain exactly as provided, without cropping or retouching.
- The visible `3/3` marker in the supplied image should remain unless client provides a cleaner original.
- Do not crop the hand or change the composition.

Cache policy:

- Use versioned filenames for photo replacements.
- Avoid replacing a client-facing image under the same old URL if the goal is to bypass browser/GitHub Pages cache.

Old image names no longer used:

```text
yegine-hero.jpg
yegine-about.jpg
yegine-portrait.jpg
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
https://TODO-domain.example/
```

Keep canonical as TODO/safe placeholder until domain is confirmed.

GitHub Pages repo deploy base:

```text
VITE_BASE_PATH=/yegine-unanyan-landing/
```

Workflow:

```text
.github/workflows/deploy-pages.yml
```

The workflow was updated so Pages can be configured for GitHub Actions deploy.

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

