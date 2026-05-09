# InkwellCX

High-converting website built with **Next.js 15+** and **TypeScript**, featuring the **Blueprint** design system.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build & Deployment

### Production Build

```bash
npm run build
npm run start
```

The project is optimized for deployment on Vercel with automatic deployments from the main branch.

### Environment Variables

Contact form delivery runs through the server-side `/api/contact/` route. Configure these in Vercel:

```bash
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
EMAILJS_PRIVATE_KEY= # optional, if enabled in EmailJS
NEXT_PUBLIC_WHATSAPP_PHONE=
NEXT_PUBLIC_CONTACT_EMAIL=
```

`NEXT_PUBLIC_*` values are public browser config. Keep provider secrets in non-public variables.

## Project Structure

```
src/
  app/
    layout.tsx           ← Root layout with theme provider
    page.tsx             ← Home page
    globals.css          ← Global styles + Blueprint tokens
    about/
      page.tsx
    audit/
      page.tsx
    contact/
      page.tsx
    services/
      page.tsx
    seo/
      page.tsx
  components/
    Navbar.tsx           ← Navigation with theme toggle
    Footer.tsx           ← Footer with logo and links
    GridBackground.tsx   ← Animated grid background
    ThemeContext.tsx     ← Dark/light theme provider
public/
  InkWell.png           ← Light theme logo
  InkWell1.png          ← Dark theme logo
  favicon.svg
```

## Design System — Blueprint

- **Fonts**: Space Mono (monospace) + Syne (headings) — loaded from Google Fonts
- **Colors**:
  - Dark theme: `#0D1117` background with `#1F6FEB` accent
  - Light theme: `#F6F8FA` background with `#0969DA` accent
- **Status colors**: Green `#3FB950`, Red `#E84545`
- **Responsive**: Mobile-first design with breakpoints at 1024px and 768px

## Features

✅ Full Next.js 15+ with App Router
✅ TypeScript for type safety
✅ Dark/Light theme switching with localStorage persistence
✅ Server Components for performance
✅ CSS Grid-based responsive layouts
✅ Vercel Analytics & Speed Insights integrated
✅ SEO optimized with metadata
✅ Static generation for improved performance

## Vercel Integration

The site includes Vercel Analytics and Speed Insights for performance monitoring. These are lazy-loaded after page render to avoid blocking.

## License

All rights reserved © InkwellCX
