# Site Structure, Schema & SEO Guide

This guide is the **single reference** for site structure and SEO: page types, section order, reusable blocks, technical SEO (URLs, canonicals, social tags, internal links, images, sitemap), **performance** (image formats, compression, LCP/lazy loading, Core Web Vitals), JSON-LD schema, and **on-page copy** (title tags, meta descriptions, H1/H2 rules in Part 7). It is written so the site can be recreated without relying on specific file names, code, or keyword lists. Parts 1–6 focus on layout, mechanics, and schema; **Part 7** covers wording rules that apply to headings and meta fields described in Parts 1–3.

---

## Part 1: Site overview and global structure

### One business, one location

- The site represents a **single local business** with **one physical address**. There are no branches or fake locations.
- City or “service area” pages describe **serving that city or area from the main location** (e.g. “We serve [City] from [Main City]”). Copy and schema must never imply multiple offices or addresses.
- All contact details (phone, email, address, hours), map embeds, and schema point to that one place.

### Global shell (every page)

Every page shares the same outer structure:

1. **Header** – Site logo (linking to home), main navigation (e.g. Home, Services, Service Areas, About, Contact, Blog).
2. **Main content area** – Where the page-specific content goes (sections described below).
3. **Footer** – Contact summary (address, phone, email, hours, service area note), links to main sections (e.g. Services, Service Areas, About, Contact), and social profile links (e.g. Facebook, Instagram, Google Business Profile).

### What every page receives (from a central layout)

- **Head metadata** – The layout supplies a document title and a short summary string for search and social previews, plus **canonical URL**, **Open Graph**, and **Twitter Card** tags. **Part 7** defines how to write titles and descriptions; Open Graph and Twitter use the same strings the layout passes for each page.
- **Canonical URL** – One canonical URL per page (absolute), built from the page path and the site’s base URL. No duplicate or alternate URLs for the same content.
- **Open Graph tags** – type (website), url, title, description, image, site_name. Values align with whatever the layout passes for the page; same image can be used site-wide (the main hero image) unless you choose per-page images.
- **Twitter Card tags** – card type (summary_large_image), title, description, image. Same as OG unless you differentiate.
- **Optional JSON-LD** – One or more schema blocks (e.g. one `@graph` per page) passed into the layout and output as `<script type="application/ld+json">` in the head.
- **Language** – The HTML root has a `lang` attribute (e.g. `en`).
- **Favicon** – Linked in the head.
- **Sitemap link** – A link to the sitemap index in the head (e.g. `rel="sitemap"`).
- **Preloads** – Hero images (desktop and mobile) can be preloaded for faster above-the-fold display.

### Central site configuration (single source of truth)

All of the following are defined once and reused across the site:

- **Site URL** – Full base URL (e.g. `https://example.com`).
- **Business name** – Legal or display name of the business.
- **Short description** – One-sentence description of the business (e.g. for schema and summaries).
- **Main hero image URL** – Full URL of the primary hero/desktop image. Used for: Open Graph image, Twitter Card image, and schema `image` or `primaryImageOfPage` wherever a single “main” image is needed.
- **Logo URL** – Full URL of the logo. Used in the header and in schema (e.g. LocalBusiness `logo`) where the organization logo is required.
- **Contact** – Phone (display and link form), email, full address (single line for display), and structured address for schema (street, locality, region, postal code, country). Optional: geographic coordinates (lat/long) for the business address, used for schema (e.g. service radius) and map features.
- **Hours** – Human-readable hours (e.g. **24/7** or specific weekday/weekend blocks). Used in footer and contact page; `openingHoursSpecification` in schema matches the real schedule (e.g. all seven days with `opens`/`closes` for 24-hour service, or per-day blocks — never fake hours).
- **Service area note** – Short text (e.g. “Located in [City]. We service [State] within about [X] miles of [City].”). Used in footer and contact page.
- **Map embed URL** – URL used as the `src` of an iframe that shows the business location (e.g. Google Maps embed).
- **Map link URL** – URL for “Get directions” (e.g. Google Maps link).
- **Social / profiles** – URLs for the same business on other platforms (e.g. Facebook, Instagram, Google Business Profile). Used in footer and in schema as `sameAs`.
- **Reviews** – List of reviews you display on the site (e.g. from Google Business Profile). Each has: reviewer name, rating (1–5), review text, date published. Used in testimonials components and in schema **only on the homepage** (see Schema section). Do not duplicate review/aggregateRating schema on other pages.

---

## Part 2: Page types and section structure

Below, “eyebrow” means a small label or category line above a main or section heading (e.g. “Trusted by local homeowners”). “CTA” means call-to-action (button or link, e.g. “Get Your Free Estimate” or “Call now”). **Exact wording** for section headings, document titles, and meta descriptions follows **Part 7**.

### Homepage

**Purpose:** Introduce the business, primary service, and location; build trust; send users to services, areas, and contact.

**Sections in order:**

1. **Hero** – Full-width. Eyebrow, **main page heading** (primary topic + location/benefit per copy rules), short supporting line, primary CTA (e.g. contact/estimate), secondary CTA (e.g. call), trust badges (e.g. Licensed & Insured, Free Estimates, Warranty Backed).
2. **Testimonials** – Eyebrow, **section heading**, horizontal scrollable row of review cards (from central reviews). Display only; schema for reviews lives on this page only.
3. **Services** – Eyebrow, **section heading**, short paragraph (we have a clear plan; link to services page). Optional: two content images. Grid of service cards (title, short description, “Learn more” link to each service page). Bottom CTA (e.g. call or contact).
4. **Service areas** – Eyebrow, **section heading** (informational: **name the geographic scope** in the H2 — e.g. greater metro or central Iowa; no curiosity hooks; see **§12** (*Service area section exception*)), short paragraph (we’re based in X and serve radius; if you’re in one of these areas we can help). Embedded map (iframe) with “Get directions” link. List of city names linking to each city page. Link: “View All Service Areas” to the service-areas index.
5. **Steps** – Reusable “steps” section: eyebrow, **section heading** (e.g. process / what to expect), subheading, 3 numbered steps (number, title, short description each).
6. **Stakes / risks** – Reusable “stakes” section: eyebrow, **section heading** (e.g. risks of delaying), subheading, bullet list of risks, optional image, CTA (e.g. “Get a trusted solution” → contact).
7. **FAQ** – Eyebrow, **section heading**, list of question/answer pairs (same data as FAQ schema on this page).
8. **CTA** – **Section heading**, short line, primary and optional secondary CTA (e.g. contact + phone).

### Services index (list of all services)

**Purpose:** Hub for all service types; each card links to an individual service page.

**Sections in order:**

1. **Main block** – Eyebrow, **main page heading**, paragraph (we have a clear plan; not sure what you need? Contact for free inspection). Grid of all service cards (title, description, “Learn more” link). After grid: CTA (e.g. call now).
2. **Value props** – Eyebrow, **section heading**, short paragraph, 3-column grid (e.g. clear communication, quality materials, warranties). Optional: link to about page.

No hero image; no testimonials or steps/stakes on this page.

### Individual service pages (one page per service type)

**Purpose:** Deep dive on one service: problem, solution, process, where we serve, related services, trust, FAQ.

**Sections in order:**

1. **Hero** – Same pattern as homepage hero but with service-specific eyebrow and **main page heading**. Subtext, primary and secondary CTA, trust badges.
2. **Testimonials** – Same as homepage (eyebrow, **section heading**, carousel). Display only; no extra review schema.
3. **Problem** – Eyebrow (“Why this matters”), **section heading**, one or two paragraphs on consequences of not addressing it.
4. **Solution** – Eyebrow (“What we do”), **section heading**, paragraph describing methods. Optional: two content images with descriptive alt (topic + location/service where relevant).
5. **Steps** – Same reusable block (eyebrow, heading, subheading, 3 steps).
6. **Service areas** – Eyebrow (e.g. “Serving central [state]”), **section heading** (direct scope in the H2 — city/region named; see **§12** (*Service area section exception*)), paragraph (we’re in [main city]; we serve [state] within X of [center]). Map embed + “Get directions”, list of cities (links to city pages), link “View All Service Areas”.
7. **Stakes** – Same reusable block (risks list, optional image, CTA).
8. **Related services** – Eyebrow (“Related services”), **section heading**, paragraph (we have a clear plan; not sure which service? Link to contact: “Get a free inspection and we’ll recommend the right approach”). Grid of related service cards (subset of services; each “Learn more” to that service page). Do **not** use a standalone “View all our services” link here; use the contact-focused line instead.
9. **FAQ** – Eyebrow, **section heading**, FAQ list.
10. **CTA** – **Section heading**, short line, single primary CTA (e.g. “Get your free estimate”).

### Service areas index (list of all cities/areas)

**Purpose:** Show we serve many areas from one location; map + list of city pages.

**Sections in order:**

1. **Hero** – Eyebrow (e.g. “Serving central [state]”), **main page heading**, paragraph (we’re in [main city], we serve [state] within X of [center]; same quality and free estimates). CTAs, trust badges.
2. **Testimonials** – Same pattern as homepage.
3. **Map and cities** – Eyebrow, **section heading** (name the region or metro in the H2 — informational, not a teaser; see **§12** (*Service area section exception*)), paragraph, map embed + “Get directions”, list of city names (links to city pages). Optional: “Not sure if we service your area? Contact us.”
4. **Services** – Eyebrow, **section heading**, paragraph (clear plan; not sure which service? “Get a free inspection” link to contact). Grid of service cards (subset or full; “Learn more” to each service page). No “View all our services” link; use contact CTA in copy.
5. **Steps** – Same reusable block.
6. **Stakes** – Same reusable block.
7. **FAQ** – Eyebrow, **section heading**, FAQ list (e.g. do you service my city, how far do you travel, free estimates, licensed/insured).
8. **CTA** – **Section heading**, short line, primary CTA.

### City / location pages (one page per city or area)

**Purpose:** “[Service] in [City]”—same quality and process; reinforce one location serving that city.

**Sections in order:**

1. **Hero** – Eyebrow (e.g. “Serving [City] from [main city]”), **main page heading** (service + city + state), paragraph (we serve [City] from our [main city] location; same quality, clear pricing, free estimates). CTAs, trust badges.
2. **Testimonials** – Eyebrow (e.g. “Trusted by homeowners in [City]”), **section heading**, carousel.
3. **Services** – Eyebrow, **section heading**, paragraph (we service [City] with same range; not sure which service? “Get a free inspection” to contact). Optional: two images. Grid of service cards. No “View all our services” link; use contact CTA. **No** duplicate map + multi-city list on city pages—the visitor already chose this city; the service-areas index is the hub for browsing other towns.
4. **Steps** – Same block; subheading can mention “[City] or elsewhere in our area.”
5. **Stakes** – Same block; subheading can be location-flavored (e.g. “In [City], skipping …”).
6. **FAQ** – Eyebrow, **section heading**, city-specific FAQs (e.g. do you provide service in [City], how do I get an estimate in [City], licensed/insured).
7. **CTA** – **Section heading**, line (we’re in [main city] and service [City]; free estimate). Primary CTA. Optional: “← View all service areas” link back to service-areas index.

No “related services” block on city pages; the main services block with grid is enough.

### About page

**Purpose:** Who we are, why choose us, values, process, and trust.

**Sections in order:**

1. **Hero** – Eyebrow (e.g. “Trusted local experts”), **main page heading** (about the business), short paragraph (trusted experts, clear pricing, quality work). CTAs, trust badges.
2. **Testimonials** – Same pattern.
3. **Mission** – Eyebrow (“Who we are”), **section heading** (mission), paragraph. Then **section heading** (why choose us), bullet list (e.g. licensed/insured, experience, warranties, free estimates, local expertise).
4. **Values** – Eyebrow (“What we stand for”), **section heading** (values), 3 cards (e.g. Quality, Integrity, Reliability) with short text each.
5. **Process** – Steps block with 4 steps (e.g. free inspection, detailed estimate, expert installation, warranty).
6. **Stakes** – Same block.
7. **Services** – Eyebrow, **section heading**, short paragraph, grid of service cards (no “View all” link; optional contact CTA in copy).
8. **FAQ** – Eyebrow, **section heading**, FAQ list.
9. **CTA** – **Section heading**, short line, primary CTA.

### Contact page

**Purpose:** One place to get in touch and see contact details.

**Sections in order:**

1. **Single content section** – **Main page heading**, lead paragraph. Two columns:
   - **Left:** **Section heading** (e.g. estimate / form), contact form (name, email, phone, service needed dropdown, message). Submit sends to chosen endpoint (e.g. form service).
   - **Right:** **Section heading** (e.g. contact details), blocks for: address (with “Get directions” link), phone (clickable), email (clickable), service areas note, hours.

No hero, testimonials, steps, stakes, or FAQ on this page unless you explicitly add them.

### Blog index

**Purpose:** List all blog posts; support topical authority and internal linking.

**Sections in order:**

1. **Single section** – **Main page heading**, lead paragraph (what the blog is about). Grid of post cards: each card has date, **post title as a prominent subheading** (link to post), short description, “Read more” link to post. If no posts, show a short “Check back soon” message.

### Blog post (individual article)

**Purpose:** Article with title, date, body (e.g. markdown), optional image. Structure is flexible; typically: **article title as the main heading**, date, body content. Can link to relevant service pages and contact in the body or at the end. Schema for articles can be added separately (e.g. Article with author, datePublished, etc.); not covered in full here.

---

## Part 3: Reusable building blocks (no code)

These concepts appear on multiple pages. Describing them once avoids duplication and keeps the site consistent.

### Hero (full-width)

- **Desktop:** Centered content; optional background image or color.
- **Mobile:** Can switch to a taller block with background image and overlay so text stays readable.
- **Contents:** Eyebrow (optional), **main page heading**, short supporting paragraph, primary CTA button, secondary CTA (e.g. phone), trust badges row.
- **Variants:** “Hero” (home), “service-hero” (service pages), “location-hero” (service-areas index and city pages). Same structure; styling can differ (e.g. background).

### Eyebrow

- Small text line above a heading. Sets context (e.g. “Trusted by local homeowners”, “Why this matters”). Not a separate heading level; often styled smaller or uppercase.

### Trust badges

- Short phrases in a row (e.g. “Licensed & Insured”, “Free Estimates”, “Warranty Backed”, “Local experts”). Shown in hero and optionally elsewhere. No schema; display only.

### Testimonials (mini / carousel)

- One row of review cards; horizontal scroll on small screens. Data from central reviews list. Each card: reviewer name, rating (e.g. stars), review text, date. **Schema for these reviews is output only on the homepage** (inside LocalBusiness); other pages only display the same content.

### Steps section

- Eyebrow, main heading, subheading. Then 3 or 4 numbered steps; each step: number, title, description paragraph. Same content pattern everywhere; wording varies by page.

### Stakes section (risks of delaying)

- Eyebrow, heading (e.g. “Risks of delaying [service]”), subheading (e.g. “Skipping … or hiring someone who cuts corners can lead to:”). Bullet list of 4 risk items. Optional: one image (with descriptive alt). Bottom: CTA button (e.g. “Get a trusted solution” → contact).

### FAQ section

- Eyebrow, **section heading**. List of questions and answers. Can be rendered as accordions or expanded. **The same Q&A data is used for the FAQPage schema on that page** (see Schema part).

### CTA section

- Full-width block. **Section heading**, short supporting line, one or two buttons (e.g. “Get your free estimate”, “Call [phone]”). Often last section before footer.

### Services grid

- Grid of cards. Each card: **service name as a card title** (one level below section headings), short description, “Learn more →” link to that service page. Grid can be 2–4 columns depending on screen size. Used on homepage, services index, service pages (related), service-areas index, city pages, about.

### Service areas / map block

- **Section heading (H2):** Name the geographic scope directly (e.g. greater metro, central Iowa); no teaser hooks — see **§12** (*Service area section exception*).
- Paragraph (we’re in [main city], we serve [state] within X of [center]). Embedded map (iframe) with accessible title. “Get directions” link. List of city names linking to city pages. Optional: “View All Service Areas” or “Not sure if we service your area? Contact us.”

### Content images (in sections)

- Where two images appear in a section (e.g. “How we solve it”), use descriptive alt text: topic + location or service where relevant (e.g. “Professional [service] installation in [city]”). Decorative icons or logos in footer can use empty alt; links should remain accessible (e.g. aria-label or visible text).

---

## Part 4: SEO elements and principles

**On-page SEO copy** (titles, descriptions, H1/H2) is covered in **Part 7**. **Part 4** below covers only structure-wide mechanics: URLs, canonicals, social tag fields, internal links, and images—without repeating Part 7’s wording rules.

### Canonical URL

- **One canonical URL per page.** Absolute URL: site base URL + path. Set in the document head (`link rel="canonical"`). All internal links and sitemaps should point to the same canonical form (e.g. consistent with or without trailing slash). No duplicate URLs for the same content.

### URL removals & redirects (strategy)

When a page is **deleted** or its path is **changed**, always configure a **301 redirect** from the **old URL** to the **most relevant** surviving URL (e.g. superseded service → replacement service or services index; removed city page → service-areas index; retired blog post → blog index or a related post). If nothing is a good match, redirect to the **homepage**. Do this at the **host/CDN** layer (not only by updating internal links), so search engines, bookmarks, and external links keep working. Omitting redirects after URL changes causes broken links and weakens SEO.

### Open Graph

- **Fields:** `og:type` (website), `og:url` (canonical), `og:title` and `og:description` (same strings the layout passes for that page—write them per **Part 7**), `og:image` (full URL of main hero image), `og:site_name` (business name).
- **Image:** One site-wide hero image is enough; optional enhancement is one image per page type or per post for richer sharing.

### Twitter Card

- **Type:** summary_large_image. **Fields:** title, description, image (same as OG unless you choose a different image). Optional: twitter:site handle if you have one.

### Language

- **HTML:** Root element has `lang` (e.g. `en`). If you add multiple languages or regions later, set `lang` (and optionally `hreflang`) per page.

### Images (SEO)

- **Main hero image:** One URL in site config. Used for OG, Twitter, and schema (e.g. LocalBusiness `image`, WebPage `primaryImageOfPage`) wherever a single “main” image is needed.
- **Logo:** One URL in site config. Used in header and in schema (e.g. LocalBusiness `logo`). No duplicate or typo’d filenames (e.g. fix “naviagation” → “navigation”).
- **Content images:** Descriptive alt (topic + location/service where relevant). Decorative: empty alt; ensure links/icons are still accessible.

### Performance and image delivery (speed)

Speed affects user experience and indirectly SEO (Core Web Vitals). Treat image weight as a first-class concern.

#### Image conversion process (this project)

All photographic PNGs in `public/` are converted to **WebP** via a Sharp script. The favicon stays as PNG.

1. **Source format stays in the repo.** Original PNGs remain in `public/` alongside their `.webp` counterparts so the source art is not lost.
2. **Run the conversion script** whenever images are added or changed:
   ```
   node scripts/optimize-images.mjs
   ```
   The script walks `public/`, converts every `.png` (except `coastal-current-favi.png`) to `.webp` at quality 82, and logs before/after sizes.
3. **Reference `.webp` in components.** All `<img>` `src`, CSS `background-image`, and config URLs (e.g. `siteConfig.heroImage`) point to the `.webp` version. Never reference a `.png` for content images in markup.
4. **SVGs are not converted.** Logos, icons, and vector art remain as SVG.
5. **New images:** When adding a new photo, drop the PNG into `public/`, re-run the script, and use the `.webp` path in your component.

#### Image loading rules

- **LCP (hero) images:** Use `loading="eager"`, `decoding="async"`, and `fetchpriority="high"`. These are the large above-the-fold images on each page (e.g. `bg.webp` on home, `hero-truck.webp` on about). Pass the image path as `preloadImage` on the `<StitchLayout>` call so the layout emits `<link rel="preload" as="image">` in the `<head>`.
- **Below-the-fold images:** Use `loading="lazy"` and `decoding="async"`. This includes service cards, gallery photos, step images, savings cards, and all content further down the page.
- **Decorative assets:** Empty `alt=""`, `loading="lazy"`, no preload.
- **Width and height:** Always set explicit `width` and `height` attributes (or use CSS `aspect-ratio`) on `<img>` elements to prevent layout shift (CLS).

#### Broader site speed

- **Tailwind is build-time.** CSS is compiled by `@astrojs/tailwind` during `astro build` and shipped as a static `.css` file. **Never** load the Tailwind CDN script (`cdn.tailwindcss.com`) in production — it injects a render-blocking JavaScript JIT compiler into the browser and will tank PageSpeed scores.
- **Fonts are self-hosted.** Poppins and Work Sans woff2 files live in `public/fonts/`. `@font-face` rules with `font-display: swap` are defined in `StitchLayout.astro` and compiled into the static CSS. There are **no external Google Fonts requests** — zero cross-origin round-trips.
- **Two fonts only.** The site uses **Poppins** (headings, body, all section text) and **Work Sans** (buttons, nav, CTAs, card descriptions). Do not add additional font families without auditing the PageSpeed impact. If a font is removed from the design, remove the corresponding woff2 file from `public/fonts/` and the `@font-face` rule from the layout.
- Leverage **CDN/caching** at the host (Vercel handles this by default for static assets).
- Validate with **Core Web Vitals** (LCP, INP, CLS) and PageSpeed Insights after deploys. Target green scores on mobile and desktop.
- Subset or self-host fonts if Google Fonts latency becomes a measurable bottleneck.

#### Pre-publish PageSpeed checklist

Run through this list before every production deploy. Each item maps to a real PageSpeed audit.

| # | Check | What to look for | PageSpeed audit it prevents |
|---|-------|------------------|-----------------------------|
| 1 | **No CDN/runtime CSS frameworks** | Confirm `cdn.tailwindcss.com` (or similar) is not in the `<head>`. Tailwind must be compiled at build time via `@astrojs/tailwind`. | Eliminate render-blocking resources, Reduce unused JavaScript |
| 2 | **Fonts are self-hosted** | No `fonts.googleapis.com` or `fonts.gstatic.com` links in the `<head>`. All `@font-face` rules point to local `/fonts/*.woff2` files with `font-display: swap`. | Eliminate render-blocking resources, Ensure text remains visible during webfont load, Reduce 3rd-party transfers |
| 3 | **Only 2 font families** | The site uses **Poppins** and **Work Sans**. Confirm no additional Google Fonts links or extra `@font-face` rules were added. More fonts = more bytes and slower paint. | Reduce unused CSS, Largest Contentful Paint |
| 4 | **No unused font/stylesheet loads** | Every `<link rel="stylesheet">` in the `<head>` is actually used by at least one element on the page. Remove any that aren't. No external font CDN links should be present. | Reduce unused CSS |
| 5 | **LCP image has `fetchpriority="high"`** | The hero `<img>` element (or the first large image visible without scrolling) has `fetchpriority="high"`. | Largest Contentful Paint |
| 6 | **LCP image is preloaded** | The page passes `preloadImage` to `<StitchLayout>`, which emits `<link rel="preload" as="image">` in the `<head>` for the hero image. | Largest Contentful Paint |
| 7 | **LCP image is WebP** | All photographic hero/background images use `.webp` (not `.png`). Run `npm run optimize-images` if new images were added. | Serve images in next-gen formats, Efficiently encode images |
| 8 | **Below-fold images are lazy** | Every `<img>` outside the initial viewport has `loading="lazy"`. | Defer offscreen images |
| 9 | **All `<img>` have `width` and `height`** | Explicit dimensions (or CSS `aspect-ratio`) on every image to prevent layout shift. | Cumulative Layout Shift (CLS) |
| 10 | **No inline `<script>` in `<head>` that blocks render** | Aside from the JSON-LD schema script (which is `type="application/ld+json"` and non-blocking), no `<script>` tags should appear before the closing `</head>`. | Eliminate render-blocking resources, Total Blocking Time |
| 11 | **CSS background images are preloaded when LCP** | If the LCP element uses a CSS `background-image` (e.g. About hero truck), pass the image path via `preloadImage` so the browser discovers it early. | Largest Contentful Paint |
| 12 | **Favicon is small** | Favicon (`coastal-current-favi.png`) stays under 10 KB. Don't convert it to WebP (browser support varies for favicon WebP). | N/A (general best practice) |
| 13 | **Build output check** | After `npm run build`, open `dist/index.html` and confirm: (a) no `cdn.tailwindcss.com`, (b) a single `/_astro/*.css` stylesheet link, (c) `preload` and `fetchpriority` present. | Catch regressions before deploy |
| 14 | **Run PageSpeed Insights** | After deploy, run [PageSpeed Insights](https://pagespeed.web.dev/) on **mobile** and **desktop** for the homepage and at least one inner page. Screenshot or note scores. Target 90+ on all four categories. | All audits |

### Internal linking

- **Navigation and footer:** Link to main sections (Home, Services index, Service Areas index, About, Contact, Blog).
- **Hub-and-spoke:** From deeper pages (service pages, city pages, blog) link **back to hub pages**: Home, Services index, Service Areas index, Contact, About. Use descriptive anchor text (e.g. “Get a free inspection”, “View all service areas”, “Contact us”).
- **Service grids:** Cards link to individual service pages (“Learn more”). Do **not** add a standalone “View all our services” link directly above the grid on service or location pages; instead, use a short line in the paragraph such as “Not sure which service fits your situation? Get a free inspection and we’ll recommend the right approach” with the link to contact.
- **Service areas:** “View All Service Areas” (or similar) appears on the homepage and service pages where the map/city list is shown; the **service-areas index** is the hub for other towns. **City pages** do not repeat that map/list—optional “← View all service areas” in the CTA is enough for users who want the full list.
- **Consistency:** Avoid broken links; after adding or renaming pages, ensure nav, footer, and in-content links point to the correct URLs (preferably canonical).

### Sitemap

- **Index:** A sitemap index (e.g. `sitemap-index.xml`) references one or more sitemaps. Main sitemap lists all indexable URLs (home, services index, each service page, service-areas index, each city page, about, contact, blog index, each blog post). Use canonical URLs. After deployment, ping search engines so they can re-fetch the sitemap.

### Content and trust (SEO)

- **One address, one business:** Copy and schema never imply multiple locations. City pages say “we serve [City] from [main city]” or similar.
- **NAP (name, address, phone):** Same everywhere (site, footer, contact page, schema, GBP). No contradictions.
- **Reviews:** Only include reviews in schema that you actually display on the site. Output aggregateRating and review **only on the homepage** (inside the single LocalBusiness node). Other pages can show the same testimonials for trust but do not output review/aggregateRating schema again.
- **Entity consistency:** Use the same business name, city names, and state in visible copy and schema so search engines can associate the site with one clear entity and location.

---

## Part 5: Schema (JSON-LD) – principles and per-page

### General principles

- **One script per page:** Output a single `<script type="application/ld+json">` whose root is an object with `@context` (e.g. `https://schema.org`) and `@graph` (an array of schema nodes). The layout receives one string (the serialized graph) and outputs one script tag.
- **Stable IDs:**  
  - Business is defined once at `{site.url}#business`.  
  - Website is defined once at `{site.url}#website`.  
  - Each page that has a “webpage” node uses `{pageUrl}#webpage`.  
  - FAQ on that page: `{pageUrl}#faq`.  
  - Breadcrumbs: `{pageUrl}#breadcrumbs`.  
  - Service (on a service or city page): `{pageUrl}#service`.  
  - ItemList (services index): `{site.url}/services/#list`.
- **Reference, don’t duplicate:** Other pages do not redefine LocalBusiness or WebSite. They reference them by `@id` (e.g. `mainEntity: { "@id": "{site.url}#business" }`, `isPartOf: { "@id": "{site.url}#website" }`).
- **BreadcrumbList:** Every list item has `position`, `name`, and `item`. The `item` value is the **URL as a string** (the full page URL), not an object with a name inside.
- **No fake locations:** Schema does not create extra addresses or branches. City pages use a Service with `areaServed` as a City (with `containedInPlace` State); the business itself has one address.

### Site-wide IDs (define once, reference everywhere)

- `businessId` = `{site.url}#business`
- `websiteId` = `{site.url}#website`

### Homepage

**Graph nodes:**

1. **WebSite**  
   - `@type`: WebSite  
   - `@id`: websiteId  
   - `name`, `url`, `inLanguage` (e.g. en-US)

2. **LocalBusiness** (only place the business is fully defined)  
   - `@type`: LocalBusiness  
   - `@id`: businessId  
   - `name`, `url`, `description`, `telephone`, `email`  
   - `address`: PostalAddress (street, locality, region, postalCode, country from site config)  
   - `image`: main hero image URL  
   - `logo`: ImageObject with logo URL  
   - **areaServed:** array with State (e.g. Iowa) and optionally GeoCircle (geo midpoint from config, radius in meters)  
   - **contactPoint:** telephone, email, contactType (e.g. customer service), areaServed (e.g. state name; not “US” unless you serve nationwide)  
   - **openingHoursSpecification:** only for days you are open; each block has dayOfWeek, opens, closes (time format; no non-time text in opens/closes)  
   - **sameAs:** array of social/profile URLs  
   - **aggregateRating** and **review:** only if you display reviews on the site; data from central reviews. aggregateRating: ratingValue (average), reviewCount, bestRating (5). review: array of Review (author Person name, reviewRating, reviewBody, datePublished). **Output these only on the homepage** in this LocalBusiness node.

3. **FAQPage** (if the page has FAQs)  
   - `@type`: FAQPage  
   - `@id`: `{site.url}#faq`  
   - `mainEntity`: array of Question (name, acceptedAnswer Answer with text)

### About page

**Graph nodes:**

1. **AboutPage**  
   - `@type`: AboutPage  
   - `@id`: `{site.url}/about#webpage`  
   - `url`, `name`, `description`, `inLanguage`  
   - `isPartOf`: { "@id": websiteId }  
   - `primaryImageOfPage`: ImageObject with main hero image URL  
   - `mainEntity`: { "@id": businessId }

2. **FAQPage**  
   - `@id`: `{site.url}/about#faq`  
   - same structure as above

### Contact page

**Graph nodes:**

1. **ContactPage**  
   - `@type`: ContactPage  
   - `@id`: `{site.url}/contact#webpage`  
   - `url`, `name`, `description`, `inLanguage`  
   - `isPartOf`: { "@id": websiteId }  
   - `primaryImageOfPage`: optional (main hero image)  
   - `mainEntity`: { "@id": businessId }

### Services index

**Graph nodes:**

1. **ItemList**  
   - `@type`: ItemList  
   - `@id`: `{site.url}/services/#list`  
   - `name` (e.g. “[Primary service] & foundation services”)  
   - `numberOfItems`: count of services  
   - `itemListElement`: array of ListItem: position (1..n), name (service title), item (full URL of that service page)

2. **WebPage + CollectionPage**  
   - `@type`: ["WebPage", "CollectionPage"]  
   - `@id`: `{site.url}/services/#webpage`  
   - `url`, `name`, `description`, `inLanguage`  
   - `isPartOf`: { "@id": websiteId }  
   - `mainEntity`: { "@id": "{site.url}/services/#list" }

### Individual service page

**Graph nodes:**

1. **Service**  
   - `@type`: Service  
   - `@id`: `{servicePageUrl}#service`  
   - `name`, `serviceType`, `url`, `description`  
   - `provider`: { "@id": businessId }  
   - `areaServed`: e.g. { "@type": "State", "name": "[state]" }

2. **WebPage + ServicePage**  
   - `@type`: ["WebPage", "ServicePage"]  
   - `@id`: `{servicePageUrl}#webpage`  
   - `url`, `name`, `description`, `inLanguage`  
   - `isPartOf`: { "@id": websiteId }  
   - `primaryImageOfPage`: ImageObject with main hero image URL  
   - `mainEntity`: { "@id": "{servicePageUrl}#service" }

3. **FAQPage**  
   - `@id`: `{servicePageUrl}#faq`  
   - mainEntity: Question/Answer array for that page

4. **BreadcrumbList**  
   - `@id`: `{servicePageUrl}#breadcrumbs`  
   - itemListElement: Home (site.url), Services (services index URL), [Service name] (service page URL). Each item: position, name, item (URL string).

### Service areas index

**Graph nodes:**

1. **BreadcrumbList**  
   - `@id`: `{site.url}/service-areas/#breadcrumbs`  
   - itemListElement: Home, Service Areas (service-areas index URL)

2. **FAQPage**  
   - `@id`: `{site.url}/service-areas/#faq`  
   - mainEntity: Question/Answer array

(Optional: add a WebPage or CollectionPage node for this URL if you want every indexable page to have a webpage node; current pattern uses BreadcrumbList + FAQPage.)

### City / location page

**Graph nodes:**

1. **Service**  
   - `@type`: Service  
   - `@id`: `{cityPageUrl}#service`  
   - `name`: e.g. “[Primary service] in [City]”  
   - `serviceType`, `url`, `description`  
   - `provider`: { "@id": businessId }  
   - `areaServed`: { "@type": "City", "name": "[city name]", "containedInPlace": { "@type": "State", "name": "[state]" } }

2. **WebPage** (not CollectionPage)  
   - `@type`: WebPage  
   - `@id`: `{cityPageUrl}#webpage`  
   - `url`, `name`, `description`, `inLanguage`  
   - `isPartOf`: { "@id": websiteId }  
   - `primaryImageOfPage`: optional (main hero image)  
   - `mainEntity`: { "@id": "{cityPageUrl}#service" }

3. **FAQPage**  
   - `@id`: `{cityPageUrl}#faq`  
   - mainEntity: Question/Answer array (can include city-specific questions)

4. **BreadcrumbList**  
   - `@id`: `{cityPageUrl}#breadcrumbs`  
   - itemListElement: Home, Service Areas (index URL), [City name] (city page URL)

### Blog index

**Graph nodes:**

1. **CollectionPage**  
   - `@type`: CollectionPage  
   - `@id`: `{site.url}/blog#webpage`  
   - `url`, `name`, `description`, `inLanguage`  
   - `isPartOf`: { "@id": websiteId }

### Reference summary (schema)

| Concept        | Defined once at           | Referenced elsewhere as                          |
|----------------|---------------------------|--------------------------------------------------|
| WebSite        | Homepage (#website)       | isPartOf on all WebPage-like nodes               |
| LocalBusiness  | Homepage (#business)       | mainEntity (About, Contact), provider (Services) |
| Service (page) | That service page (#service) | That page’s WebPage mainEntity                  |
| Service (city) | That city page (#service) | That page’s WebPage mainEntity                  |
| ItemList       | Services index (#list)    | CollectionPage mainEntity                        |
| FAQPage        | Each page                 | @id: {pageUrl}#faq                               |
| BreadcrumbList | Each page that has it     | @id: {pageUrl}#breadcrumbs                       |

---

## Part 6: Optional and variations

- **GeoCircle:** If you don’t have coordinates, omit it; keep areaServed as State (and City where needed).
- **primaryImageOfPage:** Can be omitted on pages with no clear hero; if present, use the main hero image URL for consistency.
- **inLanguage:** Use your locale (e.g. en-US) in all WebPage/WebSite nodes.
- **Blog posts:** For each post you can add an Article (or BlogPosting) node with author, datePublished, etc.; link to the business or website by @id. Not fully specified here.
- **Per-page OG/Twitter image:** You can set a different image per page type or per post for richer sharing; the baseline is one site-wide image.
- **Meta keywords:** Not used for ranking by major search engines; can be omitted. Some tools still report them; document the decision if you skip them.

---

## Part 7: On-page SEO copy (titles, meta descriptions, headings)

The rules below govern document titles, meta descriptions, and H1/H2 wording. They apply to every page type described in Parts 1–3.

### Title Tags & Meta Descriptions — Prompt Instructions for Local Business Websites
*Covers: Homepage | Category Pages | Service Pages | Blog Articles*

---

### Part A: Title Tag Rules

---

#### 1. Core Formula

Every title tag for a local business page follows this three-part structure:

```
PRIMARY:     [Keyword]  [Benefit]  [Location]  |  [Brand Name]

ALTERNATIVE: [Keyword]  [Location]  [Benefit]  |  [Brand Name]
```

Write the keyword-benefit-location segment as a single, naturally flowing phrase. Read it aloud — it should sound like a sentence, not a list of tags. The Brand Name is always appended automatically after the pipe separator.

| Component | Definition |
|-----------|------------|
| **KEYWORD** | The primary topic or service. Place it as close to the start as possible for SEO weight. |
| **BENEFIT** | A short trust or value phrase that adds intent signal: e.g. Trusted, Experts in, Fast Fix, Free Estimate, Same-Day, Reliable. |
| **LOCATION** | City, suburb, or region the page targets. Always include unless the brand name already contains the location. |
| **BRAND NAME** | Always appended after \| — never omit. If the brand name is long, use an established abbreviation only if unambiguous. |

---

#### 2. Global Rules

These rules apply to every title tag regardless of page type.

##### Character Length
- The full title tag (including " | Brand Name") must be between **60 and 90 characters**.
- The keyword-benefit-location segment alone should target **50 to 56 characters**, leaving room for the separator and brand name.
- Never exceed 90 characters total. Never go below 50 characters total.
- Always count characters before finalising. Return the count alongside every title generated.
- If a title is too long, restructure it — do not truncate mid-word or mid-phrase.

##### Formatting
- Use title case for all significant words. Lowercase prepositions (in, at, of, for, near) and articles (a, an, the) unless they open the title.
- Use a pipe ( | ) as the separator between the phrase and the brand name. Do not use pipes or dashes inside the keyword-benefit-location segment itself.
- Never use commas, colons, or em dashes as separators.
- No exclamation marks, ellipses, or special characters.

##### Keywords & Tone
- Place the primary keyword as close to the beginning of the title as possible.
- Use plain, direct language. Avoid marketing fluff: "world-class", "amazing", "unbeatable", "best ever".
- One primary keyword per title. Do not keyword-stuff.
- Every page must have a unique title tag. Never duplicate across pages.

##### Local Signals & Location Specificity
- Match the location scope to the page's geographic intent. Do not default to the primary city for every page.
- **General / region-wide pages** (e.g. a top-level services index covering a whole state or region): use the wider area name (e.g. "Iowa", "Greater Wellington") or omit location entirely if the keyword already implies broad scope.
- **City-level pages** (e.g. a service page targeting one city): use the city name (e.g. "Des Moines", "Wellington").
- **Suburb / hyper-local pages** (e.g. a dynamic service-area landing page): use the suburb or town name (e.g. "Ankeny", "Thorndon").
- Never list multiple locations in a single title tag. If a page serves multiple areas, use the widest accurate geographic label instead.
- If the brand name already contains the location, do not repeat the location in the keyword segment.

---

#### 3. Page-Type Rules

##### 3.1 Homepage

**Purpose:** Establish brand identity, primary service, and location in one clear statement.

```
PRIMARY:     [Primary Service or Type] [Benefit] [City]  |  [Brand Name]
ALTERNATIVE: [Brand Name]  |  [Service] [Benefit] in [City]   (strong brand recognition only)
```

**Rules:**
- Lead with what the business does, not the brand name — unless the brand name itself is the keyword (e.g. "Auckland Plumbing Co.").
- Include the city or region. This is non-negotiable for the homepage.
- Do not include secondary services on the homepage title — save those for category or service pages.
- Include a benefit word that reflects the business's primary value proposition.
- Avoid generic filler words like "Home", "Welcome", or "Official Website".

**Examples:**

| | Title Tag | Note |
|---|-----------|------|
| ✅ | `Electrician Trusted in Wellington \| Bright Spark Electrical` | 57 chars |
| ✅ | `Wellington Electrician Experts \| Bright Spark Electrical` | 56 chars |
| ❌ | `Welcome to Bright Spark Electrical Wellington Home Page` | Generic, no benefit |
| ❌ | `Bright Spark \| Electricians \| Wellington \| NZ` | Too many separators |

---

##### 3.2 Category / Collection Pages

**Purpose:** Target broader service-category keywords while maintaining local relevance.

```
PRIMARY:     [Service Category] [Benefit] in [City]  |  [Brand Name]
ALTERNATIVE: [City] [Service Category] [Benefit]  |  [Brand Name]
```

**Rules:**
- Use the plural or collective form of the service when it implies range (e.g. "Plumbing Services" not just "Plumbing").
- Include a benefit phrase that reflects the category's value — e.g. "Trusted", "Reliable", "Expert", "Fast".
- Include the city or suburb unless the brand name already contains the location.
- Category pages should feel one level deeper than the homepage — more specific service, same location.
- Do not repeat the exact keyword phrase used on the homepage title.

**Examples:**

| | Title Tag | Note |
|---|-----------|------|
| ✅ | `Blocked Drain Services Trusted in Wellington \| FlowRight` | 56 chars |
| ✅ | `Wellington Plumbing Services Experts \| FlowRight Plumbing` | 57 chars |
| ❌ | `Plumbing Services Wellington FlowRight Plumbers` | No separator, no benefit |
| ❌ | `Drains, Pipes & Blockage Services Wellington \| FlowRight` | Over-stuffed, no benefit |

---

##### 3.3 Service Pages

**Purpose:** Target specific, high-intent keywords for individual services. These are your highest-conversion pages.

```
PRIMARY:     [Specific Service] [Benefit] in [City]  |  [Brand Name]
ALTERNATIVE: [Action] [Specific Service] [City]  |  [Brand Name]
```

**Rules:**
- Be as specific as possible — these pages target long-tail, high-conversion keywords.
- Choose a benefit that matches the service's intent: "Fast Fix" for repairs, "Free Estimate" for installs, "Trusted" for ongoing services.
- Include an action word where it fits naturally (e.g. "Install", "Repair", "Replace", "Book") — but only if character count allows.
- Include city or suburb. For mobile services, "in [City]" still applies.
- Avoid duplicating the category page title — go one level deeper in specificity.
- Do not include pricing in the title tag — prices change and titles are cached.
- For emergency or urgent services, "Emergency" or "24/7" may lead the title if it genuinely reflects the offering.

**Examples:**

| | Title Tag | Note |
|---|-----------|------|
| ✅ | `Hot Water Cylinder Replacement Trusted Wellington \| FlowRight` | 61 chars |
| ✅ | `Emergency Hot Water Repairs Fast Fix Wellington \| FlowRight` | 59 chars |
| ✅ | `Replace Hot Water Cylinders Free Estimate Wellington \| FlowRight` | 63 chars |
| ❌ | `Best Hot Water Cylinder Replacement Service Wellington NZ` | No brand, no benefit phrase, fluff |
| ❌ | `Hot Water \| Cylinders \| Wellington \| Replacement \| FlowRight` | Fragmented, too many pipes |

---

##### 3.4 Blog / Article Pages

**Purpose:** Attract informational search traffic and build topical authority. Blog titles follow a slightly looser structure.

```
PRIMARY:     [Article Topic or Question] [Benefit/Hook]  |  [Brand Name]
ALTERNATIVE: [Article Topic] [Location Qualifier]  |  [Brand Name]   (local content only)
```

**Rules:**
- Lead with the article's primary topic or the search question it answers. Mirror how a person would actually search.
- Location is optional — include it only when the content is explicitly local. Do not force a city name into every blog title.
- A benefit or hook phrase may replace the location when the content is informational (e.g. "What You Need to Know", "Expert Advice", "Step by Step").
- Numbers are permitted and often improve click-through rate (e.g. "5 Signs Your Pipes Need Replacing"). Keep numbers accurate.
- Use natural, conversational language — blog titles may be slightly less formal than service page titles.
- Avoid clickbait phrasing ("You Won't Believe...", "Shocking...") — it undermines trust for local service businesses.
- Question-based titles may begin with the question word directly.

**Examples:**

| | Title Tag | Note |
|---|-----------|------|
| ✅ | `5 Signs You Need a Plumber in Wellington \| FlowRight` | 52 chars |
| ✅ | `How to Fix a Dripping Tap Step by Step \| FlowRight Plumbing` | 59 chars |
| ✅ | `When to Replace Your Hot Water Cylinder \| FlowRight Plumbing` | 60 chars |
| ❌ | `Plumbing Tips Blog Post Wellington FlowRight` | No separator, unnatural, generic |
| ❌ | `Top Amazing Plumbing Advice For Wellington Homeowners!!` | Fluff language, punctuation |

---

#### 4. Edge Cases & Special Situations

##### Long Business Names (over 20 characters)
- Use a recognisable abbreviation if one exists and is unambiguous.
- If no abbreviation exists, shorten the keyword-benefit-location segment to accommodate the full brand name.
- Never drop the brand name entirely.

##### Multi-Location Businesses
- Create a unique title tag per location page. Never reuse the same title across location variants.
- Structure: `[Service] [Benefit] in [Specific Suburb/City] | [Brand Name]`
- Do not list multiple cities in a single title.

##### Brand Name Contains the Location
- Do not repeat the location in the keyword-benefit segment.
- Structure: `[Service] [Benefit] | [Brand Name Including Location]`

| | Example | Note |
|---|---------|------|
| ✅ | `Hot Water Cylinder Repair Trusted \| Wellington Plumbing Co.` | 59 chars |
| ❌ | `Hot Water Repair Trusted in Wellington \| Wellington Plumbing Co.` | Location repeated |

##### Emergency / 24-7 Services
- "Emergency" or "24/7" may lead the title only if it reflects the actual, permanent service offering.

| | Example | Note |
|---|---------|------|
| ✅ | `Emergency Electrician Fast Response Wellington \| Bright Spark` | 61 chars |
| ❌ | `Emergency 24/7 Fast Same-Day Electrician Wellington \| Bright Spark` | Benefit overload |

##### Seasonal or Promotional Pages
- Do not include offers, prices, or dates in title tags — these become stale.
- Structure the title around the service, not the promotion.

##### Character Overflow Resolution
If a title exceeds 90 characters, resolve in this order:
1. Shorten the location to suburb only instead of full city name.
2. Remove "Services" if it was appended.
3. Shorten or swap the benefit phrase for a shorter synonym.
4. Use a shorter synonym for the service keyword.
5. Abbreviate the brand name — only if the abbreviation is unambiguous.
6. As a last resort, restructure the entire title from scratch.

---

#### 5. Approved Benefit Phrases

| Trust & Reputation | Speed & Urgency | Value & Cost | Expertise |
|-------------------|-----------------|--------------|-----------|
| Trusted in | Fast Fix | Free Estimate | Experts in |
| Reliable | Same-Day | No Hidden Fees | Certified |
| Rated #1 in | Emergency | Affordable | Specialist |
| Proven | 24/7 Service | Fixed Price | Professional |

---

---

### Part B: Meta Description Rules

> Meta descriptions do not directly affect rankings — they affect clicks. Their job is to convince a searcher that this is the right result for them.

---

#### 6. Meta Description Purpose & Goal

A meta description must do three things in one short sentence or two:

| Component | Definition |
|-----------|------------|
| **CONFIRM SERVICE** | Make it immediately clear the page delivers exactly what the searcher is looking for. Use the same language they would use. |
| **CONFIRM LOCATION** | Reassure the searcher that the business serves their area. Mirror the location scope of the page (suburb, city, or region). |
| **GIVE A REASON** | Provide at least one compelling reason to choose this business over others — a benefit, differentiator, or call to action. |

Think of the meta description as a direct answer to the searcher's unspoken question: *"Why should I click this result instead of the one above or below it?"*

---

#### 7. Global Meta Description Rules

##### Character Length
- Meta descriptions must be between **50 and 160 characters** (including spaces).
- The ideal target is **120 to 155 characters** — long enough to be persuasive, short enough to avoid truncation on desktop.
- Never go below 50 characters — descriptions that are too short look thin and unconvincing in search results.
- Always count characters before finalising. Return the count alongside every description generated.
- If a description exceeds 160 characters, trim from the least essential part — never cut mid-sentence.

##### Tone & Language
- Write in second person ("you", "your") to speak directly to the potential customer.
- Use active, confident language. Avoid passive constructions ("services are provided by...").
- Plain English only. No jargon, no excessive punctuation, no ALL CAPS.
- One clear call to action per description is recommended — but it must feel natural, not forced (e.g. "Get a free quote today.", "Call us today.", "Book online.").
- Avoid repeating the exact wording of the title tag — the description should complement it, not echo it.

##### What to Always Include
- The core service or topic the page is about — stated plainly so the searcher immediately recognises it.
- The location that matches the page scope (suburb, city, or region) — see location specificity rules in Section 2.
- At least one trust signal, benefit, or differentiator (e.g. licensed, locally owned, free estimates, same-day, no call-out fee, 20+ years experience).

##### What to Never Include
- Prices or specific offers — these change and descriptions are cached.
- Keyword stuffing — do not repeat the keyword more than once.
- Generic filler phrases with no meaning: "We are a leading provider of...", "Click here to learn more...", "Welcome to our website..."
- Misleading claims — do not promise something the page does not deliver.
- Duplicate descriptions — every page must have a unique meta description.

---

#### 8. Meta Description Rules by Page Type

##### 8.1 Homepage

**Purpose:** Give a confident overview of who the business is, what they do, and where — while making the reader feel they've found the right company.

```
FORMULA: [We/Business] [provide service] in [location]. [Trust/benefit signal]. [CTA or differentiator].
```

**Rules:**
- Cover the primary service and the service area in the opening clause.
- Include one or two trust signals that apply to the whole business (e.g. "locally owned", "licensed and insured", "serving X since [year]").
- End with a soft call to action or a differentiator that sets the business apart.
- Avoid listing every service — save that for category pages.

**Examples:**

| | Meta Description | Note |
|---|-----------------|------|
| ✅ | `Trusted electricians serving Wellington homeowners & businesses. Licensed, local & reliable. Call for a free quote today.` | 118 chars |
| ✅ | `FlowRight provides expert plumbing across Greater Wellington. Locally owned, fast response, and no hidden fees. Book online.` | 124 chars |
| ❌ | `We offer plumbing services. Contact us today for more information about what we do.` | Generic, no location, no benefit |
| ❌ | `Best plumbers Wellington plumbing services plumber NZ call us` | Keyword stuffed, no sentence structure |

---

##### 8.2 Category / Collection Pages

**Purpose:** Confirm the searcher has landed in the right category, signal the business covers the full range of services, and give a reason to explore further.

```
FORMULA: [Service category] in [location] from [trust signal]. [Scope of what's covered]. [CTA].
```

**Rules:**
- Name the service category clearly in the first clause.
- Include the location that matches the page scope.
- Briefly indicate breadth of coverage (e.g. "from routine maintenance to emergency repairs").
- End with a CTA or a differentiator relevant to that category.

**Examples:**

| | Meta Description | Note |
|---|-----------------|------|
| ✅ | `Expert drain and pipe services across Wellington. From blocked drains to full replacements. Fast response, free quotes.` | 118 chars |
| ✅ | `Electrical services in Wellington for homes and businesses. Installations, repairs & safety checks. Licensed & insured.` | 119 chars |
| ❌ | `We provide various plumbing services in Wellington NZ including many different types of plumbing for all your needs today.` | Vague, no specifics, filler |
| ❌ | `Drain services. Pipe services. Blocked drains. Wellington plumbers. Call now.` | Fragmented, keyword list |

---

##### 8.3 Service Pages

**Purpose:** Confirm the exact service, prove local relevance, and give the searcher a compelling reason to choose this business for that specific job.

```
FORMULA: [Specific service] in [location] by [trust signal]. [Key benefit or differentiator]. [CTA].
```

**Rules:**
- Name the specific service in the first few words — this is the highest-intent page type.
- Include the city or suburb matching the page scope.
- The benefit or differentiator should be specific to this service (e.g. "same-day hot water repairs", "fixed-price drain unblocking", "no call-out fee after hours").
- Include a direct call to action — these pages convert; make it easy to act.
- If the service is emergency-oriented, lead with urgency cues.

**Examples:**

| | Meta Description | Note |
|---|-----------------|------|
| ✅ | `Hot water cylinder replacement in Wellington by licensed plumbers. Fixed price, same-day service available. Get a free quote.` | 125 chars |
| ✅ | `Blocked drain specialists in Wellington. Fast diagnosis, no-mess repairs. No call-out fee. Available 7 days — call FlowRight.` | 125 chars |
| ✅ | `Emergency electrician in Wellington available 24/7. Fast response, fully licensed. Call Bright Spark and we'll be there fast.` | 126 chars |
| ❌ | `We fix hot water cylinders in Wellington NZ. Contact us for hot water cylinder replacement services today for your home.` | Repetitive, generic CTA |
| ❌ | `Hot water cylinder replacement service Wellington plumber licensed fixed price same day.` | No sentence structure, keyword list |

---

##### 8.4 Blog / Article Pages

**Purpose:** Confirm the article answers the searcher's question and establish the business as a knowledgeable, trustworthy local expert.

```
FORMULA: [What the article covers / answers]. [Why this source is trustworthy]. [Optional: local relevance or CTA].
```

**Rules:**
- Open by clearly stating what the article covers or what question it answers.
- Add a credibility signal — why should this local business's advice be trusted? (e.g. "from our licensed plumbers", "based on 15 years of experience").
- Location is optional — include it only when the article is explicitly about local conditions, regulations, or services.
- A soft CTA is permitted but not required (e.g. "Need help? Call us.").
- Do not oversell — blog descriptions should feel informative, not salesy.

**Examples:**

| | Meta Description | Note |
|---|-----------------|------|
| ✅ | `Learn the 5 warning signs your hot water cylinder needs replacing. Advice from Wellington's licensed plumbers at FlowRight.` | 122 chars |
| ✅ | `Our step-by-step guide to fixing a dripping tap at home. Tips from experienced Wellington plumbers — and when to call a pro.` | 125 chars |
| ❌ | `Read our blog post about plumbing tips and advice for homeowners in Wellington New Zealand today on our website.` | Filler, no substance |
| ❌ | `Hot water cylinder blog. Plumbing tips Wellington. Learn more about plumbing.` | Keyword list, no value |

---

#### 9. Location Scope in Meta Descriptions

Like title tags, meta descriptions must match the geographic scope of the page.

| Page Scope | Location to Use in Description | Example Phrase |
|------------|-------------------------------|----------------|
| General / regional page | Wider region or state name | `...serving homeowners across Iowa` |
| City-level page | City name | `...available throughout Des Moines` |
| Suburb / local page | Suburb or town name | `...your local team in Ankeny` |
| No location in brand name | Include location explicitly | `...based in Wellington` |
| Location already in brand name | Can omit or lightly reference | `...your local Wellington team` |

---

---

### Part C: Heading Rules

> H1s anchor the page's SEO relevance. H2s guide the reader through the page and make the experience feel clear, useful, and trustworthy.

---

#### 10. Global Heading Rules

##### Character Length
- All headings (H1 and H2) must be between **20 and 60 characters** including spaces.
- Never go below 20 characters — headings that are too short lack context and feel abrupt.
- Never exceed 60 characters — longer headings lose scannability and wrap awkwardly on mobile.
- Always count characters before finalising. Return the count alongside every heading generated.

##### Tone & Formatting
- Use title case for H1s. H2s may use title case or sentence case — choose whichever reads more naturally.
- No punctuation at the end of headings unless a question is intentional and adds value.
- No keyword stuffing — each heading should read naturally as a label or statement.
- Avoid filler openers: "Welcome to...", "Introduction to...", "All About...".
- Every heading on a page must be unique — no two H2s on the same page should say the same thing.

---

#### 11. H1 Rules

There is exactly one H1 per page. It is the single most important on-page SEO signal and the first thing a visitor reads after landing.

```
PRIMARY:     [Main SEO Keyword] + [Location or Qualifier]
ALTERNATIVE: [Action or Benefit] + [Main SEO Keyword] + [Location]
```

**Rules:**
- Always include the page's primary SEO keyword in the H1 — as close to the start as possible.
- The H1 should closely reflect or complement the title tag, but does not need to be identical. It may be slightly more natural in phrasing.
- Include the location when the page is locally targeted — matched to the same scope as the title tag (city, suburb, or region). Omit on general or blog pages where it would feel forced.
- Do not include the brand name in the H1 — that belongs in the title tag.
- Do not use the H1 as a tagline or marketing slogan. It should be a clear, direct statement of what the page is about.
- Only one H1 per page. Never use H1 for section subheadings.

**Examples:**

| | H1 | Note |
|---|-----|------|
| ✅ | `Electrician in Wellington` | 25 chars — clean, keyword-led |
| ✅ | `Hot Water Cylinder Replacement Wellington` | 41 chars — specific service + location |
| ✅ | `Blocked Drain Services Across Greater Iowa` | 42 chars — regional scope |
| ✅ | `Basement Waterproofing Trusted in Des Moines` | 44 chars — keyword + benefit + city |
| ❌ | `Welcome to Our Plumbing Website Wellington` | Filler opener, no keyword clarity |
| ❌ | `We Are the Best Electricians You Will Ever Find` | Superlative fluff, no keyword |
| ❌ | `Plumbing` | 8 chars — too short, no context |

---

#### 12. H2 Rules — voice & clarity

H2s are section headings. They should feel **written to one person**, not like a table of contents. SEO is secondary to **lean-in** copy.

##### Character length (unchanged)

All H2s must stay between **20 and 60 characters** including spaces (see §10). Count before finalising.

##### Never label the section from the outside

Do **not** write headings that only describe what the block *is* from a distance, e.g.:

- `Ways We Help`, `Questions We Get`, `What Customers Say`, `What We Hear Most`, `More Ways We…`

Instead, write from **inside the reader’s perspective** — what would make them **lean forward**?

##### One rhetorical job per H2

Pick **one** job for that section:

| Job | Example |
|-----|---------|
| **Make a promise** | `Your Basement Stays Dry — We Guarantee It` |
| **Resolve a fear** | `No Surprise Costs, No Pressure` |
| **Earn trust** | `Fully Licensed & Insured in Iowa` |
| **Provoke curiosity** | `Most Leaks Start the Same Way` |
| **Speak to pain** | `Still Finding Damp Spots After Rain?` |

##### Social proof / testimonials

- Never use **say**, **reviews**, or **testimonials** in the H2.
- Lead with **outcome** or feeling, e.g. `Real Results From West Des Moines Homeowners` or `What a Dry Basement Actually Feels Like`.

##### Process / how it works

Headings should **reassure**, not label the chapter. Prefer something that sounds like relief or clarity, e.g. `Simple, Clean & Done in a Day` — not `From Your First Call to the Finished Job`.

##### FAQ

Frame around the **reader’s hesitation**, not the company’s inbox — e.g. `Answers to What's on Your Mind` or `Good Questions — Here's What to Know`. Avoid `What We Get Asked`, `Common Questions About…` as the default pattern.

##### Location in H2s

Use a city or region in an H2 **only** when the section is genuinely **about that place** (e.g. a service-area map, or hyper-local social proof). Do **not** tack a city name on every section for “local flavour.”

**Exception — service-area sections:** For sections that **list or describe** where the business serves (embedded map, city list, radius copy), follow the **service area section exception** below. In those sections, naming the location in the H2 is **required**, not optional.

##### Service area section exception

Sections that answer *“Do you cover my location?”* are **informational**, not persuasive hooks. **Clarity always beats cleverness.**

- The reader’s primary question is whether you serve their area — **answer it directly** in the H2.
- Use straightforward headings that **name the scope**, for example:
  - `Areas We Serve in Greater Des Moines`
  - `Serving West Des Moines & Surrounding Communities`
  - `Our Service Area Across Central Iowa`
  - `West Des Moines, Ankeny, Waukee & Beyond`
- Do **not** use curiosity or mystery hooks that delay the answer — e.g. avoid `You Might Be Closer Than You Think`, `We Could Be Near You`, `Still Wondering If We Come to Your Area?`, or similar.
- A **city or region name must appear** in the H2 for these sections. This is one of the few cases where location in an H2 is **mandatory**, not optional.

##### Competitor test

After each H2, ask: **Could a competitor paste this unchanged?** If yes, make it **more specific** to how *this* business works or what *this* homeowner feels.

##### Quick reference — patterns to avoid vs. lean-in

| Avoid (outside voice) | Prefer (reader voice) |
|----------------------|-------------------------|
| `Ways We Help Basements in [City]` | `Still Dealing With Damp After It Rains?` |
| `What We Hear Most About Waterproofing` | `Good Questions — Here's What to Know` |
| `What Homeowners Say After the Job` | `Dry Basements That Actually Stay Dry` |
| `From Your First Call to the Finished Job` | `Simple, Clean & Done in a Day` |
| `Still Wondering If We Come to Your Area?` (service-area block) | `Areas We Serve in Greater Des Moines` (name scope in the H2) |

---

#### 13. H1 vs H2 at a Glance

| | H1 | H2 |
|---|-----|-----|
| **Count per page** | Exactly one | As many as needed |
| **Character range** | 20–60 characters | 20–60 characters |
| **Primary purpose** | SEO — establish keyword relevance | UX — guide reader through sections |
| **Must include keyword?** | Yes — as close to start as possible | No — use naturally only if relevant |
| **Location needed?** | Yes, if locally targeted page | Optional for most sections — **required** for service-area map/list sections (see §12, service area exception) |
| **Brand name?** | Never | Never |
| **Tone** | Clear, direct, keyword-anchored | Benefit-led, conversational, reader-focused |
| **Case** | Title case | Title case or sentence case |

---

#### 14. Master Quick Reference

| Element | Min Chars | Max Chars | Keyword? | Location? | Primary Goal |
|---------|-----------|-----------|----------|-----------|--------------|
| **Title Tag** | 60 | 90 | Yes — lead with it | Always (match scope) | Rankings + click-through |
| **Meta Description** | 50 | 160 | Once, naturally | Always (match scope) | Convince the click |
| **H1** | 20 | 60 | Yes — near the start | If locally targeted | Keyword relevance |
| **H2** | 20 | 60 | Not required (except service-area map/list per §12) | Section-specific; location **required** for service-area map/list | UX + reader benefit; direct scope for areas |

---

Using this guide, you can reproduce the site’s structure (sections and order), reusable blocks, technical SEO (canonicals, OG/Twitter, internal linking, images), schema (one graph per page, stable IDs, no duplicate business or reviews, no fake locations), and on-page meta/heading copy (**Part 7**), without needing implementation details or keyword lists.
