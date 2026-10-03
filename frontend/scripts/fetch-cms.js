/**
 * Runs automatically before every build (see "prebuild" in package.json).
 *
 * Downloads the latest PUBLISHED content from Sanity and saves it to
 * src/content/cms.json, which the website reads at build time.
 *
 * - If SANITY_PROJECT_ID is not set, nothing is fetched and the site uses
 *   the original built-in content (the approved design, unchanged).
 * - If Sanity can't be reached, the build stops with an error so the
 *   currently-live website stays online untouched.
 */
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "src", "content", "cms.json");
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";


const BANNER_KEYS = [
  "about", "process", "whatWeOffer", "portfolio",
  "testimonials", "contact", "heavyEquipment", "realEstate",
];

const QUERY = `{
  "settings": *[_id == "siteSettings"][0]{
    phone, email, addressLine1, addressLine2, facebook, instagram, linkedin,
    "heroSlides": heroSlides[defined(asset)]{ "image": asset->url, alt }
  },
  "banners": *[_id == "pageBanners"][0]{
    ${BANNER_KEYS.map((k) => `"${k}": ${k}{ eyebrow, title, subtitle, "image": image.asset->url }`).join(",\n    ")}
  },
  "categories": *[_type == "portfolioCategory" && defined(slug.current)] | order(orderRank asc){
    "slug": slug.current, name, tagline, description, "cover": cover.asset->url
  },
  "projects": *[_type == "project" && defined(slug.current) && defined(category)] | order(orderRank asc){
    "slug": slug.current, name, location, description,
    "category": category->slug.current,
    "cover": cover.asset->url,
    "images": gallery[defined(asset)].asset->url,
    "pairs": pairs[defined(before.asset) && defined(after.asset)]{
      "before": before.asset->url, "after": after.asset->url, caption
    }
  },
  "testimonials": *[_type == "testimonial" && defined(quote)] | order(orderRank asc){
    quote, author, location, "image": image.asset->url, showOnHome
  },
  "faqs": *[_type == "faq" && defined(question)] | order(orderRank asc){ question, answer },
  "team": *[_type == "teamMember" && defined(name)] | order(orderRank asc){ name, title, since, group }
}`;

// Ask Sanity's image CDN for a web-optimised size (auto WebP/AVIF).
const sized = (url, w) => (url ? `${url}?auto=format&fit=max&q=80&w=${w}` : url);

function optimise(d) {
  const s = d.settings;
  if (s && s.heroSlides) s.heroSlides = s.heroSlides.map((h) => ({ ...h, image: sized(h.image, 2400) }));
  if (d.banners) {
    for (const k of Object.keys(d.banners)) {
      if (d.banners[k] && d.banners[k].image) d.banners[k].image = sized(d.banners[k].image, 2400);
    }
  }
  (d.categories || []).forEach((c) => (c.cover = sized(c.cover, 1600)));
  (d.projects || []).forEach((p) => {
    p.cover = sized(p.cover, 2400);
    p.images = (p.images || []).map((u) => sized(u, 2000));
    p.pairs = (p.pairs || []).map((x) => ({ ...x, before: sized(x.before, 2000), after: sized(x.after, 2000) }));
  });
  (d.testimonials || []).forEach((t) => (t.image = sized(t.image, 1200)));
  return d;
}

async function main() {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });

  if (!projectId) {
    console.log("[cms] SANITY_PROJECT_ID not set — using built-in content.");
    if (!fs.existsSync(OUT)) fs.writeFileSync(OUT, "{}\n");
    return;
  }

  const url =
    `https://${projectId}.apicdn.sanity.io/v2025-01-01/data/query/${dataset}` +
    `?perspective=published&query=${encodeURIComponent(QUERY)}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity responded ${res.status}: ${await res.text()}`);
  const { result } = await res.json();

  fs.writeFileSync(OUT, JSON.stringify(optimise(result || {}), null, 2) + "\n");
  const n = (a) => (a ? a.length : 0);
  console.log(
    `[cms] Content loaded: ${n(result.categories)} categories, ${n(result.projects)} projects, ` +
      `${n(result.testimonials)} testimonials, ${n(result.faqs)} FAQs, ${n(result.team)} team members.`
  );
}

if (require.main === module) {
  main().catch((err) => {
    console.error("[cms] FAILED to load content from Sanity:", err.message);
    console.error("[cms] Build stopped so the live website is not affected.");
    process.exit(1);
  });
}

module.exports = { QUERY, optimise };
