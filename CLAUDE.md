
# Project Overview

A personal CV/resume website built with Gatsby 4, React 18, TypeScript, and Tailwind CSS. Deployed to GitHub Pages at `https://dresha-dev.github.io/cv/`. The site is designed to render well both in the browser and as a printed PDF.

## Commands

```bash
npm run develop      # Start dev server (http://localhost:8000)
npm run build        # Production build with pathPrefix (/cv)
npm run serve        # Serve the production build locally
npm run clean        # Clear Gatsby cache and public directory
npm run typecheck    # TypeScript check without emitting
npm run deploy       # Build and deploy to GitHub Pages via gh-pages
```

## Architecture

**Single-page layout** — `src/pages/index.tsx` composes all sections. The page is split into two columns:
- Left sidebar (1/3): `Skills`, `Certifications`, `Languages`, `Education`, `SideProjects`, `Cat` (Lottie animation)
- Right main area (2/3): `History` (work experience timeline)
- Header: `Profile` (avatar + contact) + `Title` + `Summary`

**Content is hardcoded as TypeScript arrays** inside each component — there is no CMS, GraphQL data layer, or external data source. To update CV content, edit the data arrays directly in the relevant component file.

**`SideList`** is a reusable component shared by `Skills`, `Certifications`, `Languages`, and `Education`. It renders a titled list of `{ name, description }` items.

**Print layout** — `src/css/index.css` contains `@media print` overrides (font-size 10px, line-height 0.8rem, overflow visible). Components use Tailwind's `print:` variant classes to show/hide elements or adjust layout for PDF output. The `PrintButton` component triggers `window.print()`.

**`pathPrefix: "/cv"`** is set in `gatsby-config.ts` — all asset URLs must use Gatsby's `withPrefix()` helper (see `Profile.tsx` for the avatar import pattern).

**Lottie animations** — `Cat.tsx` and `ClickHere.tsx` use `lottie-react` with JSON animation files in `src/components/animations/`.
