import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LOGO_LIGHT } from "../lib/images";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/our-process", label: "Our Process" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Home hero is full-bleed dark; force solid background on other pages too for legibility
  const onHome = location.pathname === "/";
  const solid = scrolled || !onHome;

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? "bg-[#01261d] py-4 shadow-[0_1px_0_rgba(255,255,255,0.04)]" : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" data-testid="site-logo" className="flex items-center leading-none">
            <img
              src={LOGO_LIGHT}
              alt="Timberline Custom Homes — Since 1989"
              className={`transition-all duration-500 ${solid ? "h-12 md:h-14" : "h-14 md:h-16"} w-auto object-contain`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `nav-link text-white text-[13px] tracking-[0.2em] uppercase transition-colors ${
                    isActive ? "active text-[#00a34f]" : "hover:text-[#00a34f]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="header-cta-button"
              className="ml-2 bg-[#00a34f] text-white text-[12px] tracking-[0.24em] uppercase px-6 py-3 hover:bg-white hover:text-[#01261d] transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        data-testid="mobile-menu-overlay"
        className={`fixed inset-0 z-[60] bg-[#01261d] flex flex-col transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <img
            src={LOGO_LIGHT}
            alt="Timberline Custom Homes"
            className="h-12 w-auto object-contain"
          />
          <button
            data-testid="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-start gap-8 px-8 mt-12">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `font-serif-display text-4xl ${isActive ? "text-[#00a34f]" : "text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="mobile-cta-button"
            className="mt-4 bg-[#00a34f] text-white text-[12px] tracking-[0.24em] uppercase px-8 py-4"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
