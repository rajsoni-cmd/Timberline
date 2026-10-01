// Portfolio data model — all category + project content lives here.
// Pages are read-only consumers of this file.
import { IMAGES } from "./images";

// Convenience: a small reusable pool of placeholder images drawn from
// the existing images library so no new URLs are needed yet.
const G = [
  IMAGES.customBuildsRender,
  IMAGES.customDesignRender,
  IMAGES.designBuildClosing,
  IMAGES.renovationsRender,
  IMAGES.heroExterior,
  IMAGES.cottageExterior,
  IMAGES.boathouse,
  IMAGES.interior,
  IMAGES.greatRoomBar,
  IMAGES.customHome,
  IMAGES.galleryA,
  IMAGES.galleryB,
  IMAGES.galleryC,
  IMAGES.galleryD,
  IMAGES.user7,
  IMAGES.user8,
  IMAGES.user11,
  IMAGES.user18,
  IMAGES.user26,
].filter(Boolean);

const pick = (n, offset = 0) =>
  Array.from({ length: n }, (_, i) => G[(i + offset) % G.length]);

// ─────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────
export const PORTFOLIO = [
  {
    slug: "new-builds",
    name: "New Builds",
    tagline: "Cottages & Homes",
    description:
      "Custom cottages and homes designed around the land, built to live beautifully through every Kawartha season.",
    cover: IMAGES.customBuildsRender,
    projects: [
      {
        slug: "modern-hideaway",
        name: "Modern Hideaway",
        location: "Stoney Lake, ON",
        description:
          "A contemporary lakeside retreat tucked into the forest edge, blending timber, glass and granite into one quiet silhouette.",
        cover: IMAGES.designBuildClosing,
        images: pick(9, 0),
      },
      {
        slug: "family-getaway",
        name: "Family Getaway",
        location: "Buckhorn Lake, ON",
        description:
          "A multi-generational cottage with a wide-open great room, screened porch and timber-framed gable welcoming the whole family.",
        cover: IMAGES.customDesignRender,
        images: pick(8, 2),
      },
      {
        slug: "tranquil-stoney-retreat",
        name: "Tranquil Stoney Retreat",
        location: "Stoney Lake, ON",
        description:
          "Quiet, considered architecture — natural materials, lake views framed from every room and a shoreline that feels untouched.",
        cover: IMAGES.customBuildsRender,
        images: pick(9, 4),
      },
      {
        slug: "stoney-cove-lake-house",
        name: "Stoney Cove Lake House",
        location: "Stoney Lake, ON",
        description:
          "A sheltered lake house in a protected cove, with cedar siding, a stone fireplace core and generous outdoor living space.",
        cover: IMAGES.heroExterior,
        images: pick(8, 6),
      },
      {
        slug: "clear-haven",
        name: "Clear Haven",
        location: "Clear Lake, ON",
        description:
          "A refined family cottage designed for year-round living — bright, airy and anchored by handcrafted timber details.",
        cover: IMAGES.cottageExterior,
        images: pick(9, 8),
      },
    ],
  },
  {
    slug: "boathouses",
    name: "Boathouses",
    tagline: "Dockside craftsmanship",
    description:
      "Boathouses that work as hard as they look — timber-framed, built to shoreline standards and finished for a lifetime on the water.",
    cover: IMAGES.boathouse,
    projects: [
      {
        slug: "sunset-glory-boathouse",
        name: "Sunset Glory Boathouse",
        location: "Stoney Lake, ON",
        description:
          "West-facing boathouse with an upper deck lounge — the perfect perch for Kawartha sunsets.",
        cover: IMAGES.boathouse,
        images: pick(7, 1),
      },
      {
        slug: "stoney-lake-boathouse",
        name: "Stoney Lake Boathouse",
        location: "Stoney Lake, ON",
        description:
          "Classic timber boathouse with cedar cladding, custom marine doors and a seamless dock integration.",
        cover: IMAGES.user26,
        images: pick(7, 3),
      },
    ],
  },
  {
    slug: "bunkies",
    name: "Bunkies",
    tagline: "Guest retreats",
    description:
      "Small-footprint guest cabins built with the same care as the main cottage — because every square foot matters.",
    cover: IMAGES.user11,
    projects: [
      {
        slug: "lakeside-bunkie",
        name: "Lakeside Bunkie",
        location: "Kawartha Lakes, ON",
        description:
          "A quiet, timber-framed sleeping cabin on a rocky point — compact, warm and immersive.",
        cover: IMAGES.user11,
        images: pick(6, 5),
      },
    ],
  },
  {
    slug: "garages",
    name: "Garages",
    tagline: "Workshops & vehicle homes",
    description:
      "Detached garages engineered for Kawartha winters — built with the same architectural language as the main house.",
    cover: IMAGES.customDesignRender,
    projects: [
      {
        slug: "timber-detached-garage",
        name: "Timber Detached Garage",
        location: "Peterborough County, ON",
        description:
          "A three-bay detached garage with upper loft, timber accents and architectural pairing with the main residence.",
        cover: IMAGES.customDesignRender,
        images: pick(6, 7),
      },
    ],
  },
  {
    slug: "renovations-additions",
    name: "Renovations & Additions",
    tagline: "Before &amp; after",
    description:
      "Full renovations and seamless additions — breathing new life into much-loved cottages and family homes.",
    cover: IMAGES.renovationsRender,
    projects: [
      {
        slug: "lakefront-renewal",
        name: "Lakefront Renewal",
        location: "Chemong Lake, ON",
        description:
          "A dated 1970s cottage reimagined with vaulted ceilings, a timber-framed great room and a brand-new lakeside addition.",
        cover: IMAGES.renovationsRender,
        pairs: [
          {
            before: IMAGES.user7,
            after: IMAGES.customBuildsRender,
            caption: "Front elevation — timber-framed porch and new entry",
          },
          {
            before: IMAGES.user18,
            after: IMAGES.designBuildClosing,
            caption: "Great room — vaulted ceilings replace the original flat deck",
          },
          {
            before: IMAGES.interior,
            after: IMAGES.greatRoomBar,
            caption: "Kitchen — custom cabinetry and new sightline to the lake",
          },
        ],
      },
      {
        slug: "cottage-addition",
        name: "Cottage Addition",
        location: "Buckhorn Lake, ON",
        description:
          "A thoughtful side addition that doubled the living space while preserving the cottage's original lakeside character.",
        cover: IMAGES.user18,
        pairs: [
          {
            before: IMAGES.cottageExterior,
            after: IMAGES.heroExterior,
            caption: "Addition joins the original roofline without competing with it",
          },
          {
            before: IMAGES.user8,
            after: IMAGES.customDesignRender,
            caption: "New living room opens onto an expanded deck",
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Lookup helpers
// ─────────────────────────────────────────────────────────────
export const getCategory = (slug) => PORTFOLIO.find((c) => c.slug === slug);

export const getProject = (categorySlug, projectSlug) => {
  const cat = getCategory(categorySlug);
  if (!cat) return null;
  const project = cat.projects.find((p) => p.slug === projectSlug);
  return project ? { category: cat, project } : null;
};

// Previous / next project within a category (circular)
export const getAdjacent = (categorySlug, projectSlug) => {
  const cat = getCategory(categorySlug);
  if (!cat) return { prev: null, next: null };
  const idx = cat.projects.findIndex((p) => p.slug === projectSlug);
  if (idx < 0) return { prev: null, next: null };
  const prev = cat.projects[(idx - 1 + cat.projects.length) % cat.projects.length];
  const next = cat.projects[(idx + 1) % cat.projects.length];
  return { prev, next };
};
