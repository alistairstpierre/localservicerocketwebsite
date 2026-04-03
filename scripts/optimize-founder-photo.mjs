// Resizes public/alistair-profile.png to WebP (max 800×1000) for about.astro hero.
// Run: node scripts/optimize-founder-photo.mjs
// Optional: pass --delete-source to remove the PNG after conversion.
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { unlinkSync, existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const srcPath = join(root, "public", "alistair-profile.png");
const destPath = join(root, "public", "alistair-profile.webp");

if (!existsSync(srcPath)) {
  console.error("Missing:", srcPath);
  process.exit(1);
}

const MAX_W = 800;
const MAX_H = 1000;

const result = await sharp(srcPath)
  .rotate()
  .resize(MAX_W, MAX_H, { fit: "inside", withoutEnlargement: true })
  .webp({ quality: 86, effort: 4 })
  .toFile(destPath);

console.log("WebP:", destPath, `${result.width}×${result.height}`, `${(result.size / 1024).toFixed(1)} KB`);

if (process.argv.includes("--delete-source")) {
  unlinkSync(srcPath);
  console.log("Removed source PNG");
}
