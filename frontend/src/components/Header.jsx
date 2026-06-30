import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LOGO_LIGHT } from "../lib/images";

const LEFT_NAV = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/our-process", label: "Our Process" },
  { to: "/about", label: "About" },
];

const RIGHT_NAV = [
  { to: "/contact", label: "Contact" },
];

const MOBILE_NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/our-process", label: "Our Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Logo = ({ scrolled = false, onDark = true }) => (
  <img
    src={LOGO_LIGHT}
    alt="Timberline Custom Homes — Since 1989"
    className={`w-auto object-contain transition-all duration-500 ${
      scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
    }`}
  />
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const onHome = location.pathname === "/";
  // Use transparent over hero on Home only at top; otherwise warm-dark solid (so logo black bg blends in)
  const transparent = onHome && !scrolled;

  const linkClass = ({ isActive }) =>
    `nav-link-style nav-underline transition-colors text-[#f4eee4] hover:text-[#f4eee4] ${
      isActive ? "active" : ""
    }`;

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent py-5"
            : "bg-[#01261d] py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Desktop: 3-column grid (left nav | logo | right nav) */}
          <div className="hidden lg:grid grid-cols-3 items-center gap-6">
            <nav className="flex items-center gap-9 justify-start">
              {LEFT_NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex justify-center">
              <Link to="/" data-testid="site-logo">
                <Logo scrolled={scrolled} onDark />
              </Link>
            </div>

            <nav className="flex items-center gap-7 justify-end">
              {RIGHT_NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                data-testid="header-cta-button"
                className="btn-pill border-[#d4c4a8] text-[#f4eee4] hover:bg-[#b89d77] hover:text-[#f4eee4] hover:border-[#b89d77]"
              >
                Get A Quote
              </Link>
            </nav>
          </div>

          {/* Mobile: logo center, hamburger right */}
          <div className="lg:hidden flex items-center justify-between">
            <span className="w-10" />
            <Link to="/" data-testid="site-logo-mobile">
              <Logo scrolled={scrolled} onDark />
            </Link>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMenuOpen(true)}
              className="p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-[#f4eee4]"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        data-testid="mobile-menu-overlay"
        className={`fixed inset-0 z-[60] bg-[#01261d] flex flex-col transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="w-10" />
          <Logo onDark />
          <button
            data-testid="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            className="text-[#f4eee4] p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center gap-9 px-8 -mt-12">
          {MOBILE_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `font-display italic text-4xl md:text-5xl ${
                  isActive ? "text-[#b89d77]" : "text-[#f4eee4]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="mobile-cta-button"
            className="btn-pill mt-6 border-[#d4c4a8] text-[#f4eee4] hover:bg-[#b89d77] hover:border-[#b89d77]"
          >
            Get A Quote
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
