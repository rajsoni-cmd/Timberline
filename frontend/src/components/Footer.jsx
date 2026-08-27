import { Link } from "react-router-dom";
import { LOGO_FOOTER, MEMBERSHIP_LOGOS } from "../lib/images";

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
            <div className="inline-flex">
              <img
                src={LOGO_FOOTER}
                alt="Timberline Custom Homes"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="mt-7 text-sm text-[#f4eee4]/70 font-light leading-relaxed max-w-xs">
              Stoney Lake &nbsp;|&nbsp; Kawarthas &nbsp;|&nbsp; Peterborough &nbsp;|&nbsp; Lakefield &nbsp;|&nbsp; Surrounding Areas
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
              5584 Highway 28,<br />Woodview, ON K0L 3E0
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-center text-[#f4eee4]/70 text-[0.72rem] tracking-[0.22em] uppercase font-light">
            <span>HCRA Member</span>
            <span>Tarion Warranty</span>
            <span>Renomark Member</span>
            <span>WSIB Insured</span>
            <span>PKHBA Member</span>
            <span>OHBA Member</span>
            <span>CHBA Member</span>
            <span>Ptbo &amp; Kawarthas Chamber of Commerce Member</span>
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
