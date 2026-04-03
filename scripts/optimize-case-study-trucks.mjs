// Resizes public/dryDuckTruck.jpg and public/coastalCurrentTruck.png to WebP for homepage + case-studies.
// Run: node scripts/optimize-case-study-trucks.mjs
// Optional: --delete-source removes originals after conversion.
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync, unlinkSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public");
const del = process.argv.includes("--delete-source");

const jobs = [
  { src: "dryDuckTruck.jpg", dest: "dry-duck-truck.webp" },
  { src: "coastalCurrentTruck.png", dest: "coastal-current-truck.webp" },
];

const MAX_W = 1200;
const MAX_H = 800;

for (const { src, dest } of jobs) {
  const srcPath = join(root, src);
  if (!existsSync(srcPath)) {
    console.error("Missing:", srcPath);
    process.exit(1);
  }
  const destPath = join(root, dest);
  const r = await sharp(srcPath)
    .rotate()
    .resize(MAX_W, MAX_H, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 86, effort: 4 })
    .toFile(destPath);
  console.log(dest, `${r.width}×${r.height}`, `${(r.size / 1024).toFixed(1)} KB`);
  if (del) {
    try {
      unlinkSync(srcPath);
      console.log("  removed", src);
    } catch (e) {
      console.warn("  could not remove", src, "(close apps using the file or delete manually)");
    }
  }
}
