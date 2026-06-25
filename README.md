# Егине Унанян Landing

Static Vite + React + TypeScript landing page for Егине Левоновна Унанян, врач-терапевт и психолог.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Structure

- `src/App.tsx` - page layout and section rendering.
- `src/data/siteContent.ts` - site text, section cards, image metadata.
- `src/data/contacts.ts` - messenger links, MAX fallback phone link, and first-message text. Replace TODO placeholders before launch.
- `src/styles.css` - visual system and responsive layout.
- `public-yegine/` - the only public asset directory copied into the production build.
- `.github/workflows/deploy-pages.yml` - GitHub Pages build/deploy workflow.

## GitHub Pages

The Vite base path is controlled through `VITE_BASE_PATH`.

For a custom domain or root deploy:

```bash
VITE_BASE_PATH=/ npm run build
```

For a GitHub Pages repository deploy:

```bash
VITE_BASE_PATH=/REPO_NAME/ npm run build
```

For the recommended repository name:

```bash
VITE_BASE_PATH=/yegine-unanyan-landing/ npm run build
```

The GitHub Actions workflow sets `VITE_BASE_PATH=/yegine-unanyan-landing/` before `npm run build`.

Local `npm run dev` keeps `/` as the base path for convenient local development.

The project intentionally uses `publicDir: 'public-yegine'` in `vite.config.ts` so unrelated legacy files from other projects are not copied into the deploy artifact.

## Custom Domain TODO

The client domain is not confirmed yet. Keep the current GitHub Pages repo deploy settings until the domain is provided.

When the domain is ready, see `DOMAIN_SETUP.md` before changing `VITE_BASE_PATH`, canonical URLs, GitHub Pages settings, or adding a `CNAME` file.

## Telegram integration

Telegram contact settings are centralized in `src/data/contacts.ts`.

- `TELEGRAM_BUSINESS_LINK` should be stored in the source as `telegramBusinessLink` when the client provides a real Telegram Business link like `https://t.me/m/...`.
- The Business link is the preferred CTA target because it can open a personal Telegram chat with a prepared message.
- `TELEGRAM_BOT_USERNAME` should be stored as `telegramBotUsername` when the bot username is available.
- The bot start link uses `?start=site`, for example `https://t.me/BOT_USERNAME?start=site`, so the future bot backend can understand that the visitor came from the website.
- The bot backend is deployed separately from this static website.
- The Bot API token must never be committed to this repository, `.env.example`, GitHub Actions, README, or git history. Store it only as a protected secret on the backend platform.
- Until the backend bot exists, the website must not claim that the bot already accepts and forwards consultation requests.

## TODO Before Launch

- Replace Telegram Business link or Telegram bot username placeholders in `src/data/contacts.ts`.
- Replace VK placeholder in `src/data/contacts.ts`.
- Replace the temporary MAX `tel:+79040844777` fallback with the real MAX personal link, QR, or bot link when the client provides it.
- Replace the GitHub Pages canonical URL in `index.html` after the custom domain is connected.
- Confirm the final domain and Pages mode.
- Add video only after permission from patients.
- Expand reviews only from public/approved sources without personal data or sensitive medical details.
- Fill document cards only with confirmed diploma/certificate data from the client.
