# InkwellCX

High-converting website built with **Vite + React** and the **Blueprint** design system.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
index.html           ← Vite entry point
vite.config.js       ← Vite config (base: './')
src/
  main.jsx           ← React DOM entry
  App.jsx            ← Router + layout
  index.css          ← Global styles + Blueprint tokens
  components/
    Navbar.jsx
    Footer.jsx
  pages/
    Home.jsx
    Services.jsx
    Audit.jsx
    SEO.jsx
    About.jsx
    Contact.jsx
public/
  InkWell1.png       ← Logo
  InkWell.png
  favicon.png
```

## Design System — Blueprint

- **Fonts**: Space Mono (monospace) + Syne (headings)
- **Background**: `#0D1117` with dot-grid overlay
- **Accent**: `#1F6FEB`
- **Status green**: `#3FB950`
