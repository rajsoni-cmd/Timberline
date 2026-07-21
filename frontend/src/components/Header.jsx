import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { LOGO_LIGHT } from "../lib/images";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/our-process", label: "Our Process" },
  { to: "/what-we-offer", label: "What We Offer" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact Us" },
];

const Logo = ({ scrolled = false }) => (
  <div
    className={`transition-all duration-500 flex items-center ${
      scrolled ? "px-0 py-0" : "bg-white/92 backdrop-blur-sm px-4 py-2 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
    }`}
  >
    <img
      src={LOGO_LIGHT}
      alt="Timberline Custom Homes — Since 1989"
      className={`w-auto object-contain transition-all duration-500 ${
        scrolled ? "h-12 md:h-14" : "h-11 md:h-14"
      }`}
    />
  </div>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Announcement strip */}
      <div
        data-testid="announcement-strip"
        className="fixed top-0 left-0 right-0 z-[55] bg-[#1a9647] text-white/95 text-[0.68rem] md:text-[0.72rem] tracking-[0.24em] uppercase font-light px-4 py-2 flex items-center justify-center gap-4 md:gap-8"
      >
        <span className="hidden sm:inline">CHBA National Awards Finalist · Top 5</span>
        <span className="hidden sm:inline text-white/50">·</span>
        <a
          href="tel:7056544312"
          className="inline-flex items-center gap-2 hover:text-[#c9a96e] transition-colors"
          data-testid="announcement-phone"
        >
          <Phone size={12} strokeWidth={2} className="opacity-90" />
          (705) 654-4312
        </a>
        <span className="hidden md:inline text-white/50">·</span>
        <a
          href="mailto:info@timberlinecustomhomes.ca"
          className="hidden md:inline hover:text-[#c9a96e] transition-colors"
        >
          info@timberlinecustomhomes.ca
        </a>
      </div>

      {/* Main header */}
      <header
        data-testid="site-header"
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-9 bg-white/95 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "top-9 bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
          <Link to="/" data-testid="site-logo" className="flex items-center shrink-0">
            <Logo scrolled={scrolled} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `nav-underline uppercase tracking-[0.22em] text-[0.72rem] font-medium transition-colors ${
                    scrolled
                      ? `text-[#2b2622] hover:text-[#1a9647] ${isActive ? "active text-[#1a9647]" : ""}`
                      : `text-white hover:text-[#c9a96e] ${isActive ? "active text-[#c9a96e]" : ""}`
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors ${
              scrolled ? "text-[#2b2622]" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        data-testid="mobile-menu-overlay"
        className={`fixed inset-0 z-[70] bg-[#01261d] flex flex-col transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <img
            src={LOGO_LIGHT}
            alt="Timberline Custom Homes — Since 1989"
            className="h-12 w-auto object-contain bg-white/95 px-2 py-1 rounded-sm"
          />
          <button
            data-testid="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            className="text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-8 -mt-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `font-display italic text-3xl md:text-5xl ${
                  isActive ? "text-[#c9a96e]" : "text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
