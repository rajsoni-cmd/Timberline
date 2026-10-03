// Content from the Sanity editor, downloaded at build time by
// scripts/fetch-cms.js. When a section has no CMS content yet, the
// original built-in content is used — so the approved design never breaks.
import data from "../content/cms.json";

export const CMS = data || {};

export const hasItems = (arr) => Array.isArray(arr) && arr.length > 0;

// Use the CMS list if it has items, otherwise the built-in default.
export const listOr = (cmsList, fallback) => (hasItems(cmsList) ? cmsList : fallback);

// Use the CMS value if it is filled in, otherwise the built-in default.
export const valueOr = (cmsValue, fallback) =>
  cmsValue === undefined || cmsValue === null || cmsValue === "" ? fallback : cmsValue;

// Page banner (PageHero) props: each field falls back individually.
export const banner = (key, defaults) => {
  const b = (CMS.banners && CMS.banners[key]) || {};
  return {
    ...defaults,
    eyebrow: valueOr(b.eyebrow, defaults.eyebrow),
    title: valueOr(b.title, defaults.title),
    subtitle: valueOr(b.subtitle, defaults.subtitle),
    image: valueOr(b.image, defaults.image),
  };
};
