// Search engine (SEO), answer engine (AEO) and AI search (GEO) data.
// Used by the edge function (functions/_middleware.js) to give every URL its
// own title, description, structured data and readable text, and by the app
// to keep the browser tab title in sync while navigating.
// Plain JavaScript only (no JSX / no "@/" imports) so both can use it.

export const SITE_URL = "https://timberlinecustomhomes.ca";
export const SITE_NAME = "Timberline Custom Homes";
export const DEFAULT_IMAGE = `${SITE_URL}/images/design-build.jpg`;
export const LOGO = `${SITE_URL}/images/j2fpy1m9_Final_Logo2.png`;

export const BUSINESS = {
  name: SITE_NAME,
  phone: "+1-705-654-4312",
  phoneDisplay: "(705) 654-4312",
  email: "info@timberlinecustomhomes.ca",
  street: "5584 HWY 28 Unit 5",
  city: "Woodview",
  region: "ON",
  postal: "K0L 3E0",
  country: "CA",
  lat: 44.598,
  lng: -78.171,
  founded: "1989",
  founder: "Ray Northey",
  sameAs: [
    "https://www.facebook.com/timberlinecustomhomes",
    "https://www.instagram.com/timb_erlinecustomhomes/",
    "https://www.linkedin.com/company/timberline-custom-homes/",
  ],
  areas: [
    "Kawartha Lakes", "Peterborough", "Woodview", "Apsley", "Buckhorn", "Lakefield",
    "Bridgenorth", "Ennismore", "Burleigh Falls", "Youngs Point", "Havelock", "Norwood",
    "North Kawartha", "Selwyn", "Douro-Dummer", "Trent Lakes", "Havelock-Belmont-Methuen",
    "Asphodel-Norwood", "Haliburton Highlands", "Minden Hills", "Hastings Highlands",
    "Stoney Lake", "Chemong Lake", "Buckhorn Lake", "Lovesick Lake", "Chandos Lake",
    "Rice Lake", "Jacks Lake", "Eels Lake", "Anstruther Lake",
  ],
  services: [
    "Custom home design and building", "Cottage building", "Boathouses", "Bunkies",
    "Detached garages", "Renovations and additions", "Commercial construction",
    "Planning approvals and permits", "Excavation and site preparation",
    "Septic design and installation", "Heavy equipment services", "Storage rentals",
  ],
};

export const FAQS = [
  {
    q: "What area does Timberline Custom Homes build in?",
    a: "Timberline is based in Woodview, Ontario and builds within about 100 km of the office across the Kawartha Lakes — including Apsley, Buckhorn, Lakefield, Bridgenorth, Peterborough, Havelock, Norwood, Burleigh Falls, Woodview, North Kawartha, Selwyn, Douro-Dummer, Trent Lakes, Haliburton Highlands and Minden Hills. Many projects are on lakes such as Stoney Lake, Chemong Lake, Buckhorn Lake, Lovesick Lake and Chandos Lake.",
  },
  {
    q: "What does Timberline Custom Homes build?",
    a: "Timberline designs and builds custom homes, cottages, boathouses, bunkies, garages, docks, renovations, additions and commercial projects of all sizes, often featuring real timber and timber-frame accents.",
  },
  {
    q: "How long has Timberline Custom Homes been in business?",
    a: "Since 1989. Timberline grew out of Northey Contracting Inc., founded by Ray Northey, and now employs more than 30 professionals across office, construction, shop and heavy equipment divisions.",
  },
  {
    q: "What is Timberline's price per square foot?",
    a: "Timberline doesn't quote an upfront price per square foot because every project is custom. After a free initial consultation you receive a rough estimate, and a final price once the design is complete.",
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes. The initial consultation is always free, at the Woodview office or at your building site. A small fee applies only if you go ahead with a rough design sketch.",
  },
  {
    q: "Can Timberline build on rock or difficult lots?",
    a: "Yes. Timberline has in-house heavy equipment and experience building on rock, slopes and challenging shoreline lots.",
  },
  {
    q: "How do I contact Timberline Custom Homes?",
    a: "Call (705) 654-4312, email info@timberlinecustomhomes.ca, visit 5584 HWY 28 Unit 5, Woodview, ON K0L 3E0, or use the contact form at timberlinecustomhomes.ca/contact.",
  },
];

const PAGES = {
  "/": {
    title: "Timberline Custom Homes | Custom Home & Cottage Builder in the Kawarthas Since 1989",
    description: "Award-winning custom home, cottage and boathouse builder in the Kawartha Lakes, Ontario. Design, permits, excavation and construction under one roof since 1989.",
    h1: "Timberline Custom Homes — Kawartha Lakes Custom Home Builder",
    text: "Timberline Custom Homes designs and builds custom homes, cottages, boathouses, bunkies, garages, renovations and additions across the Kawartha Lakes and Peterborough region of Ontario. A complete design-build process — from design and planning approvals to excavation, septic, construction and finishing — handled by one in-house team since 1989.",
  },
  "/about": {
    title: "About Us — Our History Since 1989 | Timberline Custom Homes",
    description: "Founded by Ray Northey in 1989, Timberline Custom Homes is a Kawarthas design-build company with 30+ professionals, an in-house workshop and heavy equipment division.",
    h1: "About Timberline Custom Homes",
    text: "Originating from Northey Contracting Inc., established by Ray Northey in 1989, Timberline has grown into one of the Kawarthas' most respected custom home builders, employing more than 30 professionals across office, construction, shop and heavy equipment divisions. Timberline builds within about 100 km of Woodview, Ontario.",
  },
  "/our-process": {
    title: "Our Design-Build Process | Timberline Custom Homes",
    description: "How Timberline builds: free initial consultation, design and planning approvals, permits, construction with in-house crews and heavy equipment, completion and warranty.",
    h1: "Our Process",
    text: "1. Initial consultation (free). 2. Design and planning — concept design, estimate, planning approvals and permits. 3. Construction — in-house framing and finishing carpenters, project managers and heavy equipment through sister company Northey Contracting. 4. Completion and warranty.",
  },
  "/what-we-offer": {
    title: "Services — Custom Builds, Renovations, Commercial & Heavy Equipment | Timberline",
    description: "Custom design, planning and permitting, custom builds, renovations and additions, commercial builds, heavy equipment and storage rentals in the Kawartha Lakes.",
    h1: "What We Offer",
    text: "Services: " + BUSINESS.services.join(", ") + ".",
  },
  "/portfolio": {
    title: "Portfolio — Custom Homes, Cottages & Boathouses | Timberline Custom Homes",
    description: "Browse Timberline's portfolio of custom homes, cottages, boathouses, bunkies, garages, renovations and commercial projects across the Kawartha Lakes.",
    h1: "Portfolio",
    text: "Three decades of Kawartha craftsmanship, organized by category: new builds and cottages, boathouses, bunkies, garages, renovations and additions, and commercial projects.",
  },
  "/testimonials": {
    title: "Client Testimonials | Timberline Custom Homes",
    description: "What homeowners say about building their custom home or cottage with Timberline Custom Homes in the Kawartha Lakes.",
    h1: "Client Testimonials",
    text: "Timberline has grown through referrals and word of mouth since 1989.",
  },
  "/contact": {
    title: "Contact Us — Start Your Project | Timberline Custom Homes",
    description: "Contact Timberline Custom Homes in Woodview, Ontario: (705) 654-4312, info@timberlinecustomhomes.ca, 5584 HWY 28 Unit 5. Free initial consultation.",
    h1: "Contact Timberline Custom Homes",
    text: "Phone (705) 654-4312 · Email info@timberlinecustomhomes.ca · Office: 5584 HWY 28 Unit 5, Woodview, ON K0L 3E0. The initial consultation is free.",
  },
};

const clip = (s, n = 158) => {
  const t = String(s || "").replace(/\s+/g, " ").trim();
  return t.length > n ? t.slice(0, n - 1).replace(/[ ,.;:—-]+\S*$/, "") + "…" : t;
};

// Returns page meta for a pathname, or { notFound: true }.
export function pageMeta(pathname, cms = {}) {
  const path = (pathname || "/").replace(/\/+$/, "") || "/";
  const crumbs = [{ name: "Home", path: "/" }];
  const cats = cms.categories || [];
  const projects = cms.projects || [];

  if (PAGES[path]) {
    const p = PAGES[path];
    if (path !== "/") crumbs.push({ name: p.h1.replace(/ — .*/, ""), path });
    return { ...p, path, crumbs, image: DEFAULT_IMAGE };
  }

  const m = path.match(/^\/portfolio\/([^/]+)(?:\/([^/]+))?(\/before-after)?$/);
  if (m) {
    const [, catSlug, projSlug, ba] = m;
    const cat = cats.find((c) => c.slug === catSlug);
    const catName = cat ? cat.name : catSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name: "Portfolio", path: "/portfolio" });
    crumbs.push({ name: catName, path: `/portfolio/${catSlug}` });
    if (!projSlug) {
      if (cats.length && !cat) return { notFound: true };
      return {
        path, crumbs,
        title: `${catName} — Portfolio | Timberline Custom Homes`,
        description: clip(cat && cat.description ? cat.description : `${catName} designed and built by Timberline Custom Homes in the Kawartha Lakes, Ontario.`),
        h1: catName,
        text: (cat && (cat.description || cat.tagline)) || `${catName} by Timberline Custom Homes.`,
        image: (cat && cat.cover) || DEFAULT_IMAGE,
        items: projects.filter((p) => p.category === catSlug).map((p) => ({ name: p.name, path: `/portfolio/${catSlug}/${p.slug}`, location: p.location })),
      };
    }
    const proj = projects.find((p) => p.slug === projSlug && p.category === catSlug);
    if (projects.length && !proj) return { notFound: true };
    const name = proj ? proj.name : projSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const loc = proj && proj.location ? ` in ${proj.location}` : "";
    crumbs.push({ name, path: `/portfolio/${catSlug}/${projSlug}` });
    if (ba) crumbs.push({ name: "Before & After", path });
    const desc = proj && proj.description
      ? proj.description
      : `${name} — a ${catName.toLowerCase()} project${loc} by Timberline Custom Homes.`;
    return {
      path, crumbs,
      title: `${name}${ba ? " Before & After" : ""}${proj && proj.location ? ` — ${proj.location}` : ""} | Timberline Custom Homes`,
      description: clip(desc),
      h1: `${name}${ba ? " — Before & After" : ""}`,
      text: [desc, proj && proj.designer ? `Designer: ${proj.designer}.` : "", proj && proj.squareFootage ? `Size: ${proj.squareFootage}.` : "", proj && proj.location ? `Location: ${proj.location}.` : ""].filter(Boolean).join(" "),
      image: (proj && proj.cover) || (cat && cat.cover) || DEFAULT_IMAGE,
    };
  }

  return { notFound: true };
}

// schema.org structured data for a page.
export function structuredData(meta, cms = {}) {
  const org = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: LOGO,
    image: DEFAULT_IMAGE,
    description: PAGES["/"].description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.founded,
    founder: { "@type": "Person", name: BUSINESS.founder },
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 30 },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postal,
      addressCountry: BUSINESS.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    areaServed: BUSINESS.areas.map((a) => ({ "@type": "Place", name: `${a}, Ontario` })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: BUSINESS.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
    },
    award: "2026 PKHBA Custom Home Builder of the Year — Gold",
    priceRange: "$$$",
    sameAs: BUSINESS.sameAs,
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-CA",
  };
  const out = [org, website];

  const cmsFaqs = (cms.faqs || []).filter((f) => f.question && f.answer);
  const faqs = cmsFaqs.length ? cmsFaqs.map((f) => ({ q: f.question, a: f.answer })) : FAQS;
  out.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  });

  if (meta.crumbs && meta.crumbs.length > 1) {
    out.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: meta.crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.path === "/" ? "" : c.path}` })),
    });
  }
  return out;
}
