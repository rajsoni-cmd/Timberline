/**
 * ONE-TIME: copies every photo/logo that is currently hosted on Emergent's
 * servers into this project (frontend/public/images/) and updates the code
 * to use the local copies — so the site keeps working even if the Emergent
 * account is closed.
 *
 *   cd frontend
 *   node scripts/localize-images.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images");
const SEED = path.join(ROOT, "..", "studio", "scripts", "seed-data.json");
const URL_RE = /https:\/\/customer-assets[\w.-]*\.emergentagent\.(?:com|net)\/[^"'`\s)]+/g;

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === "content" ? [] : walk(p);
    return /\.(jsx?|css)$/.test(e.name) ? [p] : [];
  });

const files = [...walk(path.join(ROOT, "src")), ...(fs.existsSync(SEED) ? [SEED] : [])];

const localName = (url) => {
  const raw = decodeURIComponent(url.split("?")[0].split("/").pop());
  return raw.replace(/[^\w.-]+/g, "-").replace(/-+/g, "-");
};

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const urls = new Set();
  for (const f of files) (fs.readFileSync(f, "utf8").match(URL_RE) || []).forEach((u) => urls.add(u));
  console.log(`Found ${urls.size} Emergent-hosted images.`);

  const map = {};
  for (const url of urls) {
    const name = localName(url);
    const dest = path.join(OUT_DIR, name);
    if (!fs.existsSync(dest)) {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`  ✗ ${res.status} ${url}`);
        continue;
      }
      fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    }
    map[url] = `/images/${name}`;
    console.log(`  ✓ ${name}`);
  }

  for (const f of files) {
    let s = fs.readFileSync(f, "utf8");
    let changed = false;
    for (const [u, local] of Object.entries(map)) {
      if (s.includes(u)) {
        s = s.split(u).join(local);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(f, s);
      console.log(`Updated ${path.relative(path.join(ROOT, ".."), f)}`);
    }
  }
  console.log("\nDone. Commit the new files in frontend/public/images.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
