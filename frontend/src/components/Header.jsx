import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Plus, Minus } from "lucide-react";
import { LOGO_LIGHT } from "../lib/images";

// Navigation model. Items with `children` render a hover-dropdown on desktop
// and an expandable accordion on mobile.
const NAV_ITEMS = [
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about#history",      label: "History" },
      { to: "/about#team",         label: "Our Team" },
      { to: "/about#awards",       label: "Awards" },
      { to: "/about#testimonials", label: "Testimonials" },
    ],
  },
  { to: "/our-process", label: "Our Process" },
  {
    to: "/what-we-offer",
    label: "What We Offer",
    children: [
      { to: "/what-we-offer#custom-design",       label: "Custom Design" },
      { to: "/what-we-offer#planning-permitting", label: "Planning & Permitting" },
      { to: "/what-we-offer#custom-builds",       label: "Custom Builds" },
      { to: "/what-we-offer#commercial-builds",   label: "Commercial Builds" },
      { to: "/what-we-offer#heavy-equipment",     label: "Heavy Equipment Services" },
      { to: "/what-we-offer#storage-rentals",     label: "Storage Rentals" },
    ],
  },
  { to: "/portfolio",   label: "Portfolio" },
  { to: "/contact",     label: "Contact Us" },
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

// Parse "/path#hash" into { pathname, hash }
const splitHash = (to) => {
  const [pathname, hash] = to.split("#");
  return { pathname, hash: hash ? `#${hash}` : "" };
};

// Desktop nav link (plain or dropdown-parent). Sub-links use react-router Link
// so we can carry hashes into location and let ScrollToHash handle offset.
const DesktopNavLink = ({ item, scrolled }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const linkColor = scrolled
    ? "text-[#2b2622] hover:text-[#1a9647]"
    : "text-white hover:text-[#c9a96e]";
  const activeColor = scrolled ? "text-[#1a9647]" : "text-[#c9a96e]";

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to}
        end={item.to === "/"}
        data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        className={({ isActive }) =>
          `nav-underline uppercase tracking-[0.22em] text-[0.72rem] font-medium transition-colors ${linkColor} ${
            isActive ? `active ${activeColor}` : ""
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.to}
        data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        className={({ isActive }) =>
          `nav-underline uppercase tracking-[0.22em] text-[0.72rem] font-medium transition-colors inline-flex items-center gap-1.5 ${linkColor} ${
            isActive ? `active ${activeColor}` : ""
          }`
        }
      >
        {item.label}
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </NavLink>

      {/* Dropdown */}
      <div
        data-testid={`nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 min-w-[240px] transition-all duration-300 ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-[#c9a96e]/20 py-3">
          {item.children.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              data-testid={`nav-sub-${c.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="block px-6 py-2.5 text-[0.78rem] tracking-[0.14em] text-[#2b2622] hover:text-[#1a9647] hover:bg-[#f5f0e6]/50 transition-colors whitespace-nowrap font-light"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile nav accordion entry
const MobileNavEntry = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to}
        end={item.to === "/"}
        onClick={onClose}
        data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        className={({ isActive }) =>
          `block font-display italic text-3xl md:text-4xl text-center ${
            isActive ? "text-[#c9a96e]" : "text-white"
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-testid={`mobile-nav-toggle-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        className="w-full flex items-center justify-center gap-3 font-display italic text-3xl md:text-4xl text-white"
      >
        {item.label}
        {open ? (
          <Minus size={20} strokeWidth={1.4} className="text-[#c9a96e]" />
        ) : (
          <Plus size={20} strokeWidth={1.4} className="text-[#c9a96e]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 pt-2 pb-3">
          <Link
            to={item.to}
            onClick={onClose}
            data-testid={`mobile-nav-parent-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-[0.7rem] tracking-[0.28em] uppercase text-[#c9a96e] text-center"
          >
            View All
          </Link>
          {item.children.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              onClick={onClose}
              data-testid={`mobile-nav-sub-${c.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="text-white/85 font-light text-base text-center"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

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

  // Handle route change: scroll to top OR to hash anchor (accounts for fixed header).
  useEffect(() => {
    setMenuOpen(false);
    if (location.hash) {
      // Defer to allow page to mount
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
              <DesktopNavLink key={item.to} item={item} scrolled={scrolled} />
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
        <nav className="flex-1 flex flex-col items-center justify-center gap-7 px-8 pb-10 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <MobileNavEntry key={item.to} item={item} onClose={() => setMenuOpen(false)} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
