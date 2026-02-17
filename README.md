# Studio Ceramics Ballarat Website

## Prerequisites

- Node.js 18+ (Node.js 20 recommended)
- npm (comes with Node.js)

## Install dependencies

```bash
npm install
```

## Test locally (development)

Run the local Vite dev server:

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Test locally (production build)

Build the project:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

This is the closest local check to what gets deployed.

## Deploy

Deployment uses GitHub Pages via the `deploy` script.

1. Commit and push your changes:

```bash
git add -A
git commit -m "Update site content"
git push
```

2. Deploy:

```bash
npm run deploy
```

`npm run deploy` runs:
- `npm run build`
- `gh-pages -d dist`
