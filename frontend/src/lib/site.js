// Contact details & social links (editable in the CMS → "Contact Details").
import { CMS, valueOr } from "./cms";

const s = CMS.settings || {};

const phone = valueOr(s.phone, "(705) 654-4312");

export const SITE = {
  phone,
  phoneHref: `tel:${phone.replace(/[^\d+]/g, "")}`,
  email: valueOr(s.email, "info@timberlinecustomhomes.ca"),
  // Each place on the site keeps its original wording until the client
  // fills in the address in the CMS.
  addressLine1: s.addressLine1 || null,
  addressLine2: s.addressLine2 || null,
  facebook: valueOr(s.facebook, "https://www.facebook.com/timberlinecustomhomes"),
  instagram: valueOr(s.instagram, "https://www.instagram.com/timb_erlinecustomhomes/"),
  linkedin: valueOr(s.linkedin, "https://www.linkedin.com/company/timberline-custom-homes/?originalSubdomain=ca"),
};
