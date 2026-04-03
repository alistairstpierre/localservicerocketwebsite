// Astro config: static site for Vercel. Tailwind carries Stitch / Ignition design tokens.
// Sitemap: local integration (see `scripts/astro-sitemap-integration.mjs`) — avoids @astrojs/sitemap ESM/CJS issues in some Node/tooling setups.
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import staticSitemap from "./scripts/astro-sitemap-integration.mjs";

const site = "https://localservicerocket.com";

export default defineConfig({
  site,
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    staticSitemap(site),
  ],
});
