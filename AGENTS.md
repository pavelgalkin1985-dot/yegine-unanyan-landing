# AGENTS.md

## Project Overview

This is the standalone Vite + React + TypeScript landing page for Егине Левоновна Унанян.

Public positioning at the current stage:

- Врач-терапевт | Психолог
- Online and offline consultations
- No public psychiatry positioning until accreditation is confirmed
- No prices on the site, only appointment/contact flow

Local project path:

```text
C:/Users/Admin/Documents/yegine-unanyan-landing
```

GitHub repository:

```text
https://github.com/pavelgalkin1985-dot/yegine-unanyan-landing
```

GitHub Pages URL:

```text
https://pavelgalkin1985-dot.github.io/yegine-unanyan-landing/
```

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Deploy

GitHub Pages repo deploy uses:

```text
VITE_BASE_PATH=/yegine-unanyan-landing/
```

The workflow is:

```text
.github/workflows/deploy-pages.yml
```

`vite.config.ts` reads `process.env.VITE_BASE_PATH`; local dev should stay at `/`.

For a future custom domain/root deploy, use:

```text
VITE_BASE_PATH=/
```

Do not add `public/CNAME` unless the real domain is confirmed.

## Important Paths

- `src/App.tsx` - page structure, sections, CTAs, image placement.
- `src/data/siteContent.ts` - text content, image paths, section data.
- `src/data/contacts.ts` - Telegram/MAX/VK contact constants.
- `src/styles.css` - visual system and responsive layout.
- `public-yegine/` - active Vite public directory.
- `public-yegine/images/yegine/` - current portrait images.
- `assets-source/yegine-photos/` - current source photo files supplied by the client.
- `IMAGE_MANIFEST.md` - image usage map.
- `PROJECT_MEMORY.md` - fuller project memory and current status.
- `DOMAIN_SETUP.md` - future custom domain instructions.

## Hard Rules

- Do not touch or deploy the old workspace at `C:/Users/Admin/Documents/Codex`.
- Do not bring in SUP, LabX, videoeditor, `public/videos`, old `public/images`, old assets, or old `public/CNAME`.
- Do not create a `public/` directory for this project; active public dir is `public-yegine`.
- Do not use `git add .` unless the working tree has been checked and contains only this Yegine project.
- Do not force push.
- Do not add secrets, tokens, private keys, passport data, INN/SNILS, or private document numbers.
- Do not use "психиатр" as active public positioning, service, or SEO keyword until accreditation is confirmed.
- Do not promise guaranteed treatment, "навсегда", "без срывов", or similar claims.
- Do not list prices until client explicitly approves public pricing.
- Keep Telegram and VK links as TODO placeholders until the client provides real links.
- MAX currently uses `tel:+79040844777` as a safe fallback.
- Use versioned image filenames for client-facing photo replacements to avoid browser cache issues.

## Current Contacts

- Main visible phone: `+7 904 084 4777`
- Normalized phone href: `tel:+79040844777`
- Telegram: TODO placeholder
- MAX: visible contact channel, fallback href is phone link
- VK: TODO placeholder

## Future Work

Expected follow-up tasks:

- Add video review block content/video file.
- Add patient reviews after approval.
- Add real Telegram/VK/MAX links when provided.
- Add confirmed domain and canonical URL.
- Add diploma/certificate gallery after client provides documents.
- Possibly adjust visual/photo set again based on client feedback.
