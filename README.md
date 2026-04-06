<!-- Project overview for LocalServiceRocketWebsite: root documentation and directory map for the site repo. -->

# Local Service Rocket Website

Static marketing site built with [Astro](https://astro.build), styled from Google Stitch exports and the **Ignition / Kinetic Propulsion** guidelines in `Stitch-Files/ignition_high_octane/DESIGN.md`. Deploy to [Vercel](https://vercel.com) as a static project (framework preset: Astro).

## Commands (PowerShell)

```powershell
cd c:\Projects\LocalServiceRocketWebsite
npm install
npm run dev
npm run build
npm run preview
```

## Deploying on Vercel

1. Push this repo to GitHub and import the project in Vercel.
2. Use the default build command `npm run build` and output directory `dist`.
3. Set **Site** in `astro.config.mjs` to your production URL (for accurate absolute links / SEO).
4. In the Vercel project, open **Analytics** and click **Enable** so [Web Analytics](https://vercel.com/docs/analytics/quickstart) collects traffic (the `@vercel/analytics/astro` component is already in `BaseLayout.astro`).

## Repository structure

| Path | Purpose |
|------|---------|
| `README.md` | This file: project intro and layout |
| `package.json` | Scripts and dependencies (Astro + Tailwind + `@vercel/analytics`) |
| `astro.config.mjs` | Static output, Tailwind, production `site` URL, local sitemap integration |
| `tailwind.config.mjs` | Ignition design tokens (colors, fonts, 0px radius) |
| `public/favicon.svg` | Favicon |
| `public/robots.txt` | Crawl hints + `Sitemap` URL (build also writes `dist/sitemap.xml`) |
| `public/lsr-logo.png` | Source PNG for wordmark (run `optimize-public-rasters.mjs` → `lsr-logo.webp`) |
| `public/logo-no-text.png` | Source PNG for mark (same script → `logo-no-text.webp`) |
| `public/lsr-logo.webp` | Full wordmark: `SiteHeader` from `md` up, default OG image |
| `public/logo-no-text.webp` | Symbol: `SiteHeader` mobile, `SiteFooter`; schema logo path in `site.ts` |
| `public/services-hero.webp` | `/services` hero: build from a source PNG listed in `optimize-public-rasters.mjs`, then delete the PNG if you want to save repo size |
| `src/env.d.ts` | Astro / Vite TypeScript references |
| `src/data/site.ts` | Shared URLs, NAP/SEO constants (`SITE_URL`, business name, address, phone, email, `absoluteUrl`, schema helpers), playbook + booking optional fields |
| `src/lib/jsonLd.ts` | One JSON-LD `@graph` per page (`buildHomepageJsonLd`, `buildInnerPageJsonLd`); see `docs/SITE-STRUCTURE-AND-SEO-GUIDE.md` |
| `src/styles/global.css` | Tailwind layers + shared utilities (afterburner, panels, sparks) |
| `src/scripts/client-motion.ts` | Sparks, scroll reveal, mobile nav toggle |
| `scripts/optimize-founder-photo.mjs` | Resize `public/alistair-profile.png` → WebP for `/about` (`node scripts/optimize-founder-photo.mjs`, optional `--delete-source`) |
| `scripts/optimize-case-study-trucks.mjs` | `dryDuckTruck.jpg` + `coastalCurrentTruck.png` → `dry-duck-truck.webp` / `coastal-current-truck.webp` for home + `/case-studies` |
| `scripts/optimize-public-rasters.mjs` | Batch: services hero + logos → WebP (`node scripts/optimize-public-rasters.mjs`, optional `--delete-source`) |
| `scripts/astro-sitemap-integration.mjs` | Post-build `sitemap.xml` in `dist/` (replaces `@astrojs/sitemap` if Node hits ESM/CJS errors) |
| `src/layouts/BaseLayout.astro` | HTML shell, fonts, global CSS, Vercel `<Analytics />`, optional `pageSparks` layer |
| `src/components/SiteHeader.astro` | Primary navigation |
| `src/components/SiteFooter.astro` | Footer links |
| `src/components/home/HomeContent.astro` | Homepage: StoryBrand sections + master copy |
| `docs/LSR-Master-Copy-Document-v1.docx.pdf` | Approved positioning, results, and voice |
| `docs/KIT-PLAYBOOK-FORM-SETUP.md` | Kit playbook: **Form** vs landing page, Embed → HTML, `site.ts` + `blueprint.astro` wiring |
| `src/pages/index.astro` | `/` |
| `src/pages/about.astro` | `/about`: founder story, philosophy, how we work |
| `src/pages/services.astro` | `/services`: jump nav; vertical timeline for global + per-service phases; pricing in each service header; bundle + Skool |
| `src/pages/case-studies.astro` | `/case-studies`: verified client results |
| `src/pages/contact.astro` | `/contact`: strategy call + enquiry form |
| `src/pages/privacy.astro` | `/privacy`: email/marketing overview; footer link |
| `src/pages/blueprint.astro` | `/blueprint`: your styled form; optional Kit POST URL in `site.ts` (no Kit iframe/embed) |
| `src/pages/blueprint/thanks.astro` | `/blueprint/thanks`: post opt-in: Skool + services + contact |
| `Stitch-Files/` | Source design exports (local reference; gitignored, not required for deploy) |

Forms (`contact`, `blueprint`) post to `#`. Wire them to your endpoint (e.g. Formspree, serverless, or CRM) when ready. Set `STRATEGY_CALL_BOOKING_URL` in `src/data/site.ts` when you have a Calendly (or other) booking link to show on `/contact`.
