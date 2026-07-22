import { Link } from "react-router-dom";
import { LOGO_LIGHT, MEMBERSHIP_LOGOS } from "../lib/images";

const FooterCol = ({ heading, children }) => (
  <div>
    <div className="eyebrow eyebrow-light text-[#d4c4a8] mb-6">{heading}</div>
    <div className="text-[#f4eee4]/70 text-sm font-light space-y-3">{children}</div>
  </div>
);

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#01261d] text-[#f4eee4]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <div className="bg-white/95 inline-flex px-4 py-3 rounded-sm">
              <img
                src={LOGO_LIGHT}
                alt="Timberline Custom Homes"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="mt-7 text-sm text-[#f4eee4]/70 font-light leading-relaxed max-w-xs">
              Kawartha &nbsp;|&nbsp; Peterborough &nbsp;|&nbsp; Lakefield &nbsp;|&nbsp; Surrounding Areas
            </p>
          </div>

          <FooterCol heading="Explore">
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/our-process", label: "Our Process" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="hover:text-[#b89d77] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol heading="Office Location">
            <div className="leading-relaxed">
              5584 ON-28 Unit 5,<br />Woodview, ON K0L 3E0
            </div>
          </FooterCol>

          <FooterCol heading="Connect">
            <div>
              <span className="text-[#f4eee4]/55 text-xs tracking-[0.18em] uppercase">Local</span>
              <div className="mt-1">
                <a href="tel:7056544312" className="hover:text-[#b89d77] transition-colors">
                  (705) 654-4312
                </a>
              </div>
            </div>
            <div className="pt-2">
              <span className="text-[#f4eee4]/55 text-xs tracking-[0.18em] uppercase">Email</span>
              <div className="mt-1">
                <a
                  href="mailto:info@timberlinecustomhomes.ca"
                  className="hover:text-[#b89d77] transition-colors break-all"
                >
                  info@timberlinecustomhomes.ca
                </a>
              </div>
            </div>
          </FooterCol>
        </div>

        <div className="border-t border-[#f4eee4]/10 mt-16 pt-10">
          <div className="text-center mb-10">
            <div className="eyebrow eyebrow-light text-[#d4c4a8]">Proud Members Of</div>
          </div>

          {/* Logo strip — transparent, no background */}
          <div
            data-testid="membership-logos"
            className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-16 mb-10"
          >
            {MEMBERSHIP_LOGOS.map((m) => (
              <div
                key={m.name}
                data-testid={`membership-logo-${m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="flex items-center justify-center h-14 md:h-16 transition-opacity duration-300 opacity-85 hover:opacity-100"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="max-h-full max-w-[110px] md:max-w-[130px] w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-[#f4eee4]/60 text-[0.68rem] tracking-[0.28em] uppercase font-light">
            <span>Tarion New Home Warranty</span>
            <span className="hidden sm:inline text-[#c9a96e]/40">·</span>
            <span>East Kawartha Chamber of Commerce</span>
            <span className="hidden sm:inline text-[#c9a96e]/40">·</span>
            <span>Peterborough &amp; Kawarthas HBA</span>
            <span className="hidden sm:inline text-[#c9a96e]/40">·</span>
            <span>WSIB / CSPAAT</span>
            <span className="hidden sm:inline text-[#c9a96e]/40">·</span>
            <span>Government of Ontario</span>
          </div>
        </div>

        <div className="border-t border-[#f4eee4]/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[0.72rem] text-[#f4eee4]/45 font-light">
          <span>Designed by Miller Marketing</span>
          <span>© 2026 Timberline Custom Homes. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
