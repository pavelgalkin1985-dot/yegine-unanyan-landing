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

## TODO Before Launch

- Replace Telegram and VK placeholders in `src/data/contacts.ts`.
- Replace the temporary MAX `tel:+79040844777` fallback with the real MAX personal link, QR, or bot link when the client provides it.
- Replace the canonical URL placeholder in `index.html`.
- Confirm the final domain and Pages mode.
- Add real reviews and video only after permission from patients.
- Fill document cards only with confirmed diploma/certificate data from the client.
