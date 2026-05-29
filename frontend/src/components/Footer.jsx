import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-[#01261d] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="font-serif-display text-2xl leading-tight">TIMBERLINE</div>
            <div className="text-[10px] tracking-[0.32em] text-white/70 mt-1">CUSTOM HOMES</div>
            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-xs">
              Award Winning Custom Builder in the Kawarthas.
            </p>
          </div>

          <div>
            <div className="eyebrow text-[#00a34f]">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
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
                    className="hover:text-[#00a34f] transition-colors hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-[#00a34f]">Serving</div>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>Kawartha</li>
              <li>Peterborough</li>
              <li>Lakefield</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-[#00a34f]">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
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
                  className="hover:text-[#00a34f] transition-colors"
                >
                  info@timberlinecustomhomes.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-[12px] text-white/60 gap-3">
          <span>Designed by Miller Marketing</span>
          <span>© 2026 by Copyright Timberline Custom Homes</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
