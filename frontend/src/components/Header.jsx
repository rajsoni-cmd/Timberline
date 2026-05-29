import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/our-process", label: "Our Process" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const Logo = ({ size = "default" }) => {
  const titleSize = size === "large" ? "text-3xl md:text-4xl" : "text-2xl md:text-[26px]";
  return (
    <div className="flex flex-col leading-none select-none">
      <span className={`font-display italic text-[#f5f0e8] ${titleSize} tracking-tight`}>
        Timberline
      </span>
      <span className="text-[9px] md:text-[10px] text-[#f5f0e8]/75 tracking-[0.36em] uppercase mt-1.5">
        Custom Homes
      </span>
    </div>
  );
};

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
  const solid = scrolled || !onHome;

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-[#01261d] py-5 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" data-testid="site-logo">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `nav-link-style nav-underline text-[#f5f0e8] hover:text-[#f5f0e8] transition-colors ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="header-cta-button"
              className="btn-luxury text-[#f5f0e8] border border-[#f5f0e8] hover:bg-[#00a34f] hover:border-[#00a34f] ml-2"
            >
              Get In Touch
            </Link>
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-[#f5f0e8] p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
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
          <Logo />
          <button
            data-testid="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            className="text-[#f5f0e8] p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center gap-10 px-8 -mt-12">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `font-display italic text-4xl md:text-5xl ${
                  isActive ? "text-[#00a34f]" : "text-[#f5f0e8]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="mobile-cta-button"
            className="btn-luxury text-[#f5f0e8] border border-[#f5f0e8] hover:bg-[#00a34f] mt-6"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
