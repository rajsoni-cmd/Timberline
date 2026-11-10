/**
 * Runs automatically before every build (after fetch-cms.js).
 * Writes public/sitemap.xml and public/robots.txt so search engines can
 * find every page, including portfolio projects added in the editor.
 *
 * Set SITE_URL in Cloudflare (e.g. https://timberlinecustomhomes.ca) once
 * the domain is connected; until then the pages.dev address is used.
 */
const fs = require("fs");
const path = require("path");

const SITE = (process.env.SITE_URL || "https://timberline-homes.pages.dev").replace(/\/+$/, "");
const PUBLIC = path.join(__dirname, "..", "public");
const CMS_FILE = path.join(__dirname, "..", "src", "content", "cms.json");

const STATIC = [
  ["/", "1.0", "weekly"],
  ["/about", "0.8", "monthly"],
  ["/our-process", "0.8", "monthly"],
  ["/what-we-offer", "0.8", "monthly"],
  ["/portfolio", "0.9", "weekly"],
  ["/testimonials", "0.6", "monthly"],
  ["/contact", "0.7", "yearly"],
];

let cms = {};
try {
  cms = JSON.parse(fs.readFileSync(CMS_FILE, "utf8")) || {};
} catch (e) {
  cms = {};
}

const urls = STATIC.map(([p, priority, changefreq]) => ({ p, priority, changefreq }));
(cms.categories || []).forEach((c) => {
  if (c && c.slug) urls.push({ p: `/portfolio/${c.slug}`, priority: "0.7", changefreq: "weekly" });
});
(cms.projects || []).forEach((pr) => {
  if (!pr || !pr.slug || !pr.category) return;
  const base = `/portfolio/${pr.category}/${pr.slug}`;
  urls.push({ p: base, priority: "0.6", changefreq: "monthly" });
  if (pr.category === "renovations-additions" && (pr.pairs || []).length > 1) {
    urls.push({ p: `${base}/before-after`, priority: "0.5", changefreq: "monthly" });
  }
});

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const today = new Date().toISOString().slice(0, 10);
const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${esc(SITE + u.p)}</loc>\n    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join("\n") +
  "\n</urlset>\n";

fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), xml);
const AI_BOTS = ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot", "Applebot-Extended", "DuckDuckBot"];
fs.writeFileSync(
  path.join(PUBLIC, "robots.txt"),
  "# Search engines and AI assistants are welcome.\n" +
    AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n") +
    `\nUser-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n# AI summary: ${SITE}/llms.txt\n`
);
console.log(`[sitemap] ${urls.length} pages written to sitemap.xml`);
