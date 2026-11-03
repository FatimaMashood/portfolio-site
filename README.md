# Fatima Mashood, portfolio

Static site built with Astro.

```
npm install
SHOW_DRAFTS=1 npm run dev -- --port 4321   # preview with unpublished entries
npm run build                              # builds only entries with publish: true
```

- Project entries live in `src/content/projects/*.md` (schema in `src/content.config.ts`). Set `publish: true` to show an entry in the production build.
- Images live in `public/images/<project>/` with sizes listed in `public/images/manifest.json`.
- Covers and card effects are in `src/components/` and `src/styles/`.
