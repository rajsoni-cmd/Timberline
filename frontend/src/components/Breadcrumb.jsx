import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Compact breadcrumb row used on portfolio inner pages.
const Breadcrumb = ({ items = [] }) => (
  <nav
    data-testid="breadcrumb"
    aria-label="Breadcrumb"
    className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] md:text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-[#3a3531]/70"
  >
    {items.map((it, i) => {
      const isLast = i === items.length - 1;
      return (
        <span key={`${it.label}-${i}`} className="inline-flex items-center gap-2">
          {isLast || !it.to ? (
            <span className="text-[#01261d]">{it.label}</span>
          ) : (
            <Link
              to={it.to}
              className="hover:text-[#c9a96e] transition-colors"
              data-testid={`breadcrumb-link-${i}`}
            >
              {it.label}
            </Link>
          )}
          {!isLast && (
            <ChevronRight
              size={12}
              strokeWidth={1.8}
              className="text-[#c9a96e]/70"
              aria-hidden="true"
            />
          )}
        </span>
      );
    })}
  </nav>
);

export default Breadcrumb;
