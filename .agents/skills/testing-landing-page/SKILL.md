---
name: testing-landing-page
description: Test the Yegine Unanyan landing page end-to-end. Use when verifying visual rendering, unit tests, or runtime behavior after code changes.
---

# Testing the Landing Page

## Prerequisites

- Node.js installed
- `npm install` completed in the repo root

## Devin Secrets Needed

None. This is a static landing page with no authentication or API keys.

## Unit Tests

```bash
cd <repo-root>
npm run test
```

- Framework: Vitest (v4.1.9+)
- Test files live in `src/` alongside source files (`*.test.tsx`, `*.test.ts`)
- Expected: 71+ tests across 7 suites (as of PR #11)
- Key suites: `App.test.tsx` (full-page integration), `ContactButtons.test.tsx`, `SectionHeading.test.tsx`, `assetUrl.test.ts`, `FramedImage.test.tsx`, `data/contacts.test.ts`, `data/siteContent.test.ts`

## Visual Browser Testing

### Setup

1. Start the dev server:
   ```bash
   cd <repo-root>
   npm run dev
   ```
   The server runs at `http://127.0.0.1:5173/` by default.

2. Maximize the browser window before recording:
   ```bash
   sudo apt-get install -y wmctrl 2>/dev/null
   wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz
   ```

3. Start a screen recording before navigating.

### What to Check

The landing page is a single-page React app in Russian for a therapist/psychologist. Scroll through the entire page and verify these sections render:

1. **Header** — Brand mark "ЕУ", 6 nav links (Обо мне, Запросы, Документы, Форматы, Отзывы, Контакты), "Написать" CTA button
2. **Hero** — Full name "Егине Левоновна Унанян", role "Врач-терапевт | Психолог", 2 CTA buttons, hero image, 4 fact items
3. **About** — "Обо мне" eyebrow with heading text
4. **Requests** — "С какими запросами я работаю" heading, 7 numbered cards (01–07)
5. **Trust** — "Почему выбирают меня?" heading, 3 trust cards
6. **Documents** — "Образование и профессиональная подготовка" heading, 4 document/certificate cards with images
7. **Formats** — "Формат подбирается после первого контакта" heading, 5 format cards
8. **Video** — "Видеоотзыв пациента" placeholder
9. **Reviews** — "Отзывы пациентов" heading, 3 review cards
10. **Safety** — "Конфиденциальность и безопасное пространство" heading
11. **Steps** — "Как подготовиться" heading, 5 numbered steps
12. **Policy** — "Запись, перенос и отмена" heading, 4 rules
13. **Final CTA** — "Сделайте первый шаг к решению проблемы уже сегодня" heading, 3 contact buttons (Telegram, MAX, VK), phone number, first-message hint box
14. **Footer** — Brand "ЕУ", name, role, contact buttons
15. **Mobile sticky CTA** — "Написать Егине Левоновне" element present in DOM (may be hidden on desktop viewport)

### Known Considerations

- The page is a React SPA — fetching raw HTML from the dev server returns the shell `index.html` without rendered content. Use the browser DOM or unit tests to verify element presence.
- Some text appears in both header and footer (brand name, role). Unit tests should use `getAllByText` instead of `getByText` for these elements.
- Telegram and VK links are TODO placeholders per client instructions. They will show `TODO_YEGINE_TELEGRAM_LINK` and `TODO_YEGINE_VK_LINK` as hrefs — this is expected, not a bug.
- MAX contact button uses `tel:+79040844777` as a fallback href.
- The `VITE_BASE_PATH` env var controls asset URL prefixing. For local dev it defaults to `/`; for GitHub Pages it should be `/yegine-unanyan-landing/`.
- Images are served from `public-yegine/images/yegine/`. Do NOT create a `public/` directory.

## Lint & Typecheck

Always run these before considering tests complete:

```bash
npm run lint
npm run typecheck
```

## Recording Annotations

When recording browser tests, use structured annotations:
- `setup` — before navigating to the page
- `test_start` — when beginning a named test (e.g., "It should render header with nav and brand")
- `assertion` — after verifying a result, with consolidated checks per section rather than per-element
