// Usage: node scripts/fetch-images.mjs '[["name.jpg","https://url",1600],...]'
// Downloads each Figma asset URL, optimizes to JPG (or keeps PNG/SVG), writes to public/assets/images.
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import http from "node:http";
import sharp from "sharp";

const dir = path.join(process.cwd(), "public/assets/images");
fs.mkdirSync(dir, { recursive: true });

function fetchBuf(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    mod
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(fetchBuf(res.headers.location));
          return;
        }
        const c = [];
        res.on("data", (d) => c.push(d));
        res.on("end", () => resolve(Buffer.concat(c)));
      })
      .on("error", reject);
  });
}

const items = JSON.parse(process.argv[2]);
for (const [name, url, width] of items) {
  try {
    const buf = await fetchBuf(url);
    const ext = path.extname(name).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg") {
      const img = sharp(buf).resize({ width: width || 1600, withoutEnlargement: true });
      const out = await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      fs.writeFileSync(path.join(dir, name), out);
      const meta = await sharp(out).metadata();
      console.log("OK", name, meta.width + "x" + meta.height, Math.round(out.length / 1024) + "KB");
    } else {
      fs.writeFileSync(path.join(dir, name), buf);
      console.log("OK", name, Math.round(buf.length / 1024) + "KB (raw)");
    }
  } catch (e) {
    console.log("FAIL", name, e.message);
  }
}
