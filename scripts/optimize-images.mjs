import sharp from "sharp";
import { readdir, unlink } from "node:fs/promises";
import path from "node:path";

const DIR = path.resolve("public/images");
const MAX_EDGE = 1920;

const files = (await readdir(DIR)).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const src = path.join(DIR, file);
  const out = path.join(DIR, file.replace(/\.png$/, ".webp"));
  const meta = await sharp(src).metadata();
  const landscape = (meta.width ?? 0) >= (meta.height ?? 0);

  await sharp(src)
    .resize(
      landscape
        ? { width: Math.min(meta.width ?? MAX_EDGE, MAX_EDGE) }
        : { height: Math.min(meta.height ?? MAX_EDGE, MAX_EDGE) }
    )
    .webp({ quality: 82 })
    .toFile(out);

  console.log(`${file} -> ${path.basename(out)}`);
}

await sharp(path.join(DIR, "gangnam-karaoke-highend-vip-room.png"))
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.resolve("public/og-cover.jpg"));
console.log("og-cover.jpg (1200x630) created");

for (const file of files) {
  await unlink(path.join(DIR, file));
}
console.log(`removed ${files.length} source png files`);
