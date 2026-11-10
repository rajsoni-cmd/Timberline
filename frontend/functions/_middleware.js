/**
 * Runs in front of every request on Cloudflare (Pages Functions).
 *
 * 1. Sends www.timberlinecustomhomes.ca to timberlinecustomhomes.ca (one address for Google).
 * 2. Keeps the *.pages.dev test address out of search results.
 * 3. Gives every page its own title, description, social-share tags,
 *    structured data (schema.org) and readable text, so Google, Bing and
 *    AI assistants (ChatGPT, Perplexity, Gemini, Claude) understand each page
 *    even without running JavaScript.
 */
import cms from "../src/content/cms.json";
import { SITE_URL, SITE_NAME, BUSINESS, FAQS, pageMeta, structuredData } from "../src/lib/seo.js";

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const jsonScript = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

function crawlerHtml(meta) {
  const nav = [
    ["/", "Home"], ["/about", "About Us"], ["/our-process", "Our Process"],
    ["/what-we-offer", "What We Offer"], ["/portfolio", "Portfolio"],
    ["/testimonials", "Testimonials"], ["/contact", "Contact Us"],
  ].map(([h, t]) => `<a href="${h}">${t}</a>`).join(" · ");
  const items = (meta.items || [])
    .map((i) => `<li><a href="${esc(i.path)}">${esc(i.name)}</a>${i.location ? ` — ${esc(i.location)}` : ""}</li>`)
    .join("");
  return (
    `<header><nav>${nav}</nav></header>` +
    `<main><h1>${esc(meta.h1)}</h1><p>${esc(meta.text)}</p>` +
    (items ? `<ul>${items}</ul>` : "") +
    `</main><footer><p>${esc(BUSINESS.name)} · ${esc(BUSINESS.street)}, ${esc(BUSINESS.city)}, ${esc(BUSINESS.region)} ${esc(BUSINESS.postal)} · ` +
    `<a href="tel:${BUSINESS.phone}">${esc(BUSINESS.phoneDisplay)}</a> · ` +
    `<a href="mailto:${BUSINESS.email}">${esc(BUSINESS.email)}</a></p></footer>`
  );
}

function llmsTxt() {
  const cats = cms.categories || [];
  const projects = cms.projects || [];
  const faqs = (cms.faqs || []).filter((f) => f.question && f.answer);
  const qa = faqs.length ? faqs.map((f) => [f.question, f.answer]) : FAQS.map((f) => [f.q, f.a]);
  const L = [];
  L.push(`# ${SITE_NAME}`, "");
  L.push(`> Custom home, cottage and boathouse builder in the Kawartha Lakes, Ontario, Canada. Family-founded in 1989 (Ray Northey, Northey Contracting Inc.), 30+ staff, complete design-build with in-house construction, workshop and heavy equipment. 2026 PKHBA Custom Home Builder of the Year — Gold.`, "");
  L.push("## Contact", `- Phone: ${BUSINESS.phoneDisplay}`, `- Email: ${BUSINESS.email}`, `- Office: ${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postal}, Canada`, `- Website: ${SITE_URL}`, `- Contact form: ${SITE_URL}/contact`, "");
  L.push("## Services", ...BUSINESS.services.map((x) => `- ${x}`), "");
  L.push("## Service area", `Builds within roughly 100 km of Woodview, Ontario: ${BUSINESS.areas.join(", ")}.`, "");
  L.push("## Pages",
    `- [About & history](${SITE_URL}/about)`, `- [Design-build process](${SITE_URL}/our-process)`,
    `- [Services](${SITE_URL}/what-we-offer)`, `- [Portfolio](${SITE_URL}/portfolio)`,
    `- [Testimonials](${SITE_URL}/testimonials)`, `- [Contact](${SITE_URL}/contact)`, "");
  if (cats.length) {
    L.push("## Portfolio");
    for (const c of cats) {
      L.push(`### [${c.name}](${SITE_URL}/portfolio/${c.slug})`);
      if (c.description) L.push(c.description);
      for (const p of projects.filter((x) => x.category === c.slug)) {
        L.push(`- [${p.name}](${SITE_URL}/portfolio/${c.slug}/${p.slug})${p.location ? ` — ${p.location}` : ""}`);
      }
      L.push("");
    }
  }
  L.push("## FAQ", ...qa.flatMap(([q, a]) => [`### ${q}`, a, ""]));
  return L.join("\n");
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // One canonical address: www -> apex (keeps path and query).
  if (url.hostname === "www.timberlinecustomhomes.ca") {
    url.hostname = "timberlinecustomhomes.ca";
    return Response.redirect(url.toString(), 301);
  }

  // Plain-text summary for AI assistants (https://llmstxt.org).
  if (url.pathname === "/llms.txt") {
    return new Response(llmsTxt(), {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }

  const response = await next();
  const isPreview = url.hostname.endsWith(".pages.dev");
  const type = response.headers.get("content-type") || "";

  if (!type.includes("text/html") || request.method !== "GET") {
    if (isPreview) {
      const r = new Response(response.body, response);
      r.headers.set("X-Robots-Tag", "noindex");
      return r;
    }
    return response;
  }

  const meta = pageMeta(url.pathname, cms);
  const out = new Response(response.body, response);
  if (isPreview) out.headers.set("X-Robots-Tag", "noindex");

  if (meta.notFound) {
    const nf = new Response(response.body, { status: 404, headers: response.headers });
    nf.headers.set("X-Robots-Tag", "noindex");
    return new HTMLRewriter()
      .on("title", { element: (e) => e.setInnerContent("Page not found | Timberline Custom Homes") })
      .on("head", { element: (e) => e.append('<meta name="robots" content="noindex" />', { html: true }) })
      .transform(nf);
  }

  const canonical = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const head =
    `<link rel="canonical" href="${esc(canonical)}" />` +
    `<meta name="robots" content="${isPreview ? "noindex" : "index, follow, max-image-preview:large"}" />` +
    `<meta property="og:url" content="${esc(canonical)}" />` +
    `<meta property="og:image" content="${esc(meta.image)}" />` +
    `<meta property="og:locale" content="en_CA" />` +
    `<meta name="twitter:card" content="summary_large_image" />` +
    `<meta name="twitter:title" content="${esc(meta.title)}" />` +
    `<meta name="twitter:description" content="${esc(meta.description)}" />` +
    `<meta name="twitter:image" content="${esc(meta.image)}" />` +
    `<meta name="geo.region" content="CA-ON" />` +
    `<meta name="geo.placename" content="Woodview, Ontario" />` +
    `<meta name="geo.position" content="${BUSINESS.lat};${BUSINESS.lng}" />` +
    `<meta name="ICBM" content="${BUSINESS.lat}, ${BUSINESS.lng}" />` +
    `<link rel="alternate" type="text/plain" title="LLM summary" href="/llms.txt" />` +
    structuredData(meta, cms).map(jsonScript).join("");

  return new HTMLRewriter()
    .on("title", { element: (e) => e.setInnerContent(meta.title) })
    .on('meta[name="description"]', { element: (e) => e.setAttribute("content", meta.description) })
    .on('meta[property="og:title"]', { element: (e) => e.setAttribute("content", meta.title) })
    .on('meta[property="og:description"]', { element: (e) => e.setAttribute("content", meta.description) })
    .on("head", { element: (e) => e.append(head, { html: true }) })
    // Readable page text for crawlers that don't run JavaScript (hidden from visitors).
    .on("noscript", { element: (e) => e.setInnerContent(crawlerHtml(meta), { html: true }) })
    .transform(out);
}
