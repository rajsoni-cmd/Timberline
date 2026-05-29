import { Link } from "react-router-dom";
import { LOGO_LIGHT } from "../lib/images";

const FooterCol = ({ heading, children }) => (
  <div>
    <div className="eyebrow eyebrow-light text-[#f5f0e8] mb-6">{heading}</div>
    <div className="text-[#f5f0e8]/70 text-sm font-light space-y-3">{children}</div>
  </div>
);

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#01261d] text-[#f5f0e8] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <img
              src={LOGO_LIGHT}
              alt="Timberline Custom Homes — Since 1989"
              className="h-16 md:h-20 w-auto object-contain -ml-2"
            />
            <p className="mt-7 text-sm text-[#f5f0e8]/70 font-light leading-relaxed max-w-xs">
              Award Winning Custom Builder in the Kawarthas.
            </p>
          </div>

          <FooterCol heading="Quick Links">
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/our-process", label: "Our Process" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="hover:text-[#00a34f] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol heading="Serving">
            <ul className="space-y-3">
              <li>Kawartha</li>
              <li>Peterborough</li>
              <li>Lakefield</li>
              <li>Surrounding Areas</li>
            </ul>
          </FooterCol>

          <FooterCol heading="Contact">
            <ul className="space-y-3">
              <li>
                <a href="tel:7056544312" className="hover:text-[#00a34f] transition-colors">
                  (705) 654-4312
                </a>
              </li>
              <li className="leading-relaxed">
                5584 ON-28 Unit 5,<br />Woodview, ON K0L 3E0
              </li>
              <li>
                <a
                  href="mailto:info@timberlinecustomhomes.ca"
                  className="hover:text-[#00a34f] transition-colors break-all"
                >
                  info@timberlinecustomhomes.ca
                </a>
              </li>
            </ul>
          </FooterCol>
        </div>

        <div className="border-t border-white/[0.08] mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[0.72rem] text-[#f5f0e8]/40 font-light">
          <span>Designed by Miller Marketing</span>
          <span>© 2026 Timberline Custom Homes. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
