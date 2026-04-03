// Local Astro integration: writes `dist/sitemap.xml` after a static build.
// Use this instead of `@astrojs/sitemap` when Node loads that package as CJS and throws "Cannot use import statement outside a module".
// Consumed by `astro.config.mjs` only.
import { writeFileSync } from "node:fs";

/** @param {string} site Absolute origin, no trailing slash */
function staticSitemapIntegration(site) {
  return {
    name: "static-sitemap",
    hooks: {
      /** @param {{ pages: { pathname: string }[]; dir: URL }} opts */
      "astro:build:done": ({ pages, dir }) => {
        const origin = site.replace(/\/$/, "");
        /** @param {string} u */
        const esc = (u) => u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

        /** @param {string} pathname */
        const toLoc = (pathname) => {
          if (pathname === "" || pathname === "/") return `${origin}/`;
          const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
          return `${origin}${p}`;
        };

        const locs = new Set();
        for (const { pathname } of pages) {
          if (pathname === "404" || pathname === "500") continue;
          locs.add(toLoc(pathname));
        }

        const inner = [...locs]
          .sort()
          .map((loc) => `  <url><loc>${esc(loc)}</loc></url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${inner}
</urlset>
`;

        writeFileSync(new URL("sitemap.xml", dir), xml, "utf8");
      },
    },
  };
}

export default staticSitemapIntegration;
