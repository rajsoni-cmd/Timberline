import { CMS, hasItems } from "./cms";

// Centralized image URLs for Timberline Custom Homes
export const LOGO_LIGHT = "/images/j2fpy1m9_Final_Logo2.png";
export const LOGO_FOOTER = "/images/8pfnimch_Timberline_Custom_Homes_Logo-No-Writing.jpg";
export const BANNER_INTERIOR = "/images/96doj20j_Banner-01.jpg";

// Membership / accreditation badges displayed in the footer (white-on-transparent versions)
export const MEMBERSHIP_LOGOS = [
  { name: "Government of Ontario",       image: "/images/bwc5tzgt_Image1.png" },
  { name: "RenoMark",                    image: "/images/d9cyj0yj_Image2.png" },
  { name: "Tarion Registered Builder",   image: "/images/rvvn8js4_Image3.png" },
  { name: "East Kawartha Chamber",       image: "/images/objcrdc8_Image4.png" },
  { name: "WSIB Ontario",                image: "/images/zf0wtdbk_Image6.png" },
];

export const IMAGES = {
  // User-uploaded
  cottageExterior: "/images/odjdbg5s_1.1.jpg",
  greatRoomBar: "/images/t9xa1igv_13.jpg",
  user7: "/images/j90o8w4j_7.jpg",
  user8: "/images/l1dcul9q_8.jpg",
  user11: "/images/1urtq6bf_11.jpg",
  user18: "/images/wpdh3u3s_18.jpg",
  user26: "/images/qsj47hzn_26.jpg",
  customDesignRender: "/images/olakgvbb_1-Custom-Design.webp",
  planningPermittingRender: "/images/r3jial7x_2-Planning-and-Permitting.webp",
  customBuildsRender: "/images/5okni3ws_3-Custom-Builds.jpg",
  renovationsRender: "/images/qelpi13s_4-Renovations-Additions.webp",
  commercialBuildsRender: "/images/iuo47s68_5-Commercial-Builds.webp",
  heavyEquipmentRender: "/images/rwmv2da5_6-Heavy-Equipment.webp",
  storageRentalsRender: "/images/2uur2xdj_7-Storage-Rentals.webp",
  designBuildClosing: "/images/ic2k5m3o_3-Bottom-of-Homepage-Photo.jpg",

  // Unsplash — luxury cottage country
  heroExterior:    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
  customHome:      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
  cottage:         "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
  boathouse:       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
  interior:        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  renovation:      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
  processHero:     "https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=2400&q=80",
  shopBuild:       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  experienceBg:    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80",
  contactHero:     "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80",

  galleryA: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
  galleryB: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
  galleryC: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  galleryD: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
};

// Hero background slider — user-supplied luxury project photography
const DEFAULT_HERO_SLIDES = [
  { image: "/images/1bydvg6n_1-2-.webp",           alt: "Timberline timberframe home with wraparound porch in autumn" },
  { image: "/images/3j62dltp_2.1-1-.webp",         alt: "Modern lakeside custom home in the Kawarthas" },
  { image: "/images/4ro2l22u_IMG_3987-1-.webp",    alt: "Timberframe estate with detached garage" },
  { image: "/images/qd54dbh9_IMG_5933-1-.webp",    alt: "Contemporary poolside custom residence" },
];

const cmsSlides = CMS.settings && CMS.settings.heroSlides;
export const HERO_SLIDES = hasItems(cmsSlides)
  ? cmsSlides.map((h) => ({ image: h.image, alt: h.alt || "Timberline Custom Homes project" }))
  : DEFAULT_HERO_SLIDES;

export const PORTFOLIO_PROJECTS = [
  {
    slug: "stoney-lake-retreat",
    title: "A Timberframe Retreat on Stoney Lake",
    category: "Custom Cottage",
    image: IMAGES.cottageExterior,
  },
  {
    slug: "buckhorn-family-home",
    title: "A Family Home Beyond Buckhorn",
    category: "Custom Home",
    image: BANNER_INTERIOR,
  },
  {
    slug: "katchewanooka-boathouse",
    title: "Two-Storey Boathouse on Katchewanooka",
    category: "Custom Boathouse",
    image: IMAGES.user8,
  },
  {
    slug: "pigeon-lake-addition",
    title: "A Heritage Addition on Pigeon Lake",
    category: "Renovation & Addition",
    image: IMAGES.user18,
  },
  {
    slug: "lakefield-great-room",
    title: "A Great Room Reimagined in Lakefield",
    category: "Renovation",
    image: IMAGES.greatRoomBar,
  },
  {
    slug: "kawartha-bunkie",
    title: "A Lakeside Bunkie & Dock",
    category: "Bunkie & Dock",
    image: IMAGES.user26,
  },
];
