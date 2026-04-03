// Batch resize + WebP for raster assets in `public/` (heroes, logos). Keeps PNGs unless you pass `--delete-source`.
// Run from repo root: node scripts/optimize-public-rasters.mjs
// Interacts with: `public/*` sources → `.webp` outputs consumed by Astro pages/components.
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync, unlinkSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public");
const del = process.argv.includes("--delete-source");

/** @type {{ src: string; dest: string; maxW: number; maxH: number }[]} */
const jobs = [
  {
    src: "services-hero-image.png",
    dest: "services-hero.webp",
    maxW: 1600,
    maxH: 900,
  },
  {
    src: "logo-no-text.png",
    dest: "logo-no-text.webp",
    maxW: 512,
    maxH: 512,
  },
  {
    src: "lsr-logo.png",
    dest: "lsr-logo.webp",
    maxW: 720,
    maxH: 200,
  },
];

for (const { src, dest, maxW, maxH } of jobs) {
  const srcPath = join(root, src);
  const destPath = join(root, dest);
  if (!existsSync(srcPath)) {
    console.warn("Skip (missing source):", srcPath);
    continue;
  }
  const r = await sharp(srcPath)
    .rotate()
    .resize(maxW, maxH, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 86, effort: 4 })
    .toFile(destPath);
  console.log(dest, `${r.width}×${r.height}`, `${(r.size / 1024).toFixed(1)} KB`);
  if (del) {
    try {
      unlinkSync(srcPath);
      console.log("  removed", src);
    } catch (e) {
      console.warn("  could not remove", src, e?.message ?? e);
    }
  }
}
