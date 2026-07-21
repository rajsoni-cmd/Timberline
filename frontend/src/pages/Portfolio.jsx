import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES, BANNER_INTERIOR } from "../lib/images";

const CATEGORIES = [
  "All",
  "Custom Homes & Cottages",
  "Custom Boathouses",
  "Custom Garages & Bunkies",
  "Renovations & Additions",
  "Commercial Projects",
];

const PROJECTS = [
  { slug: "stoney-lake-retreat",      title: "A Timberframe Retreat on Stoney Lake",     category: "Custom Homes & Cottages",    image: IMAGES.cottageExterior },
  { slug: "buckhorn-family-home",     title: "A Family Home Beyond Buckhorn",             category: "Custom Homes & Cottages",    image: BANNER_INTERIOR },
  { slug: "katchewanooka-boathouse",  title: "Two-Storey Boathouse on Katchewanooka",     category: "Custom Boathouses",          image: IMAGES.user8 },
  { slug: "chemong-boathouse",        title: "Contemporary Boathouse on Chemong Lake",    category: "Custom Boathouses",          image: IMAGES.user26 },
  { slug: "kawartha-bunkie",          title: "A Lakeside Bunkie & Dock",                  category: "Custom Garages & Bunkies",   image: IMAGES.user11 },
  { slug: "peterborough-garage",      title: "Detached Garage Studio",                    category: "Custom Garages & Bunkies",   image: IMAGES.shopBuild },
  { slug: "pigeon-lake-addition",     title: "A Heritage Addition on Pigeon Lake",        category: "Renovations & Additions",    image: IMAGES.user18 },
  { slug: "lakefield-great-room",     title: "A Great Room Reimagined in Lakefield",      category: "Renovations & Additions",    image: IMAGES.greatRoomBar },
  { slug: "woodview-shop",            title: "Timberline Woodview Shop Expansion",        category: "Commercial Projects",        image: IMAGES.processHero },
  { slug: "kawartha-office",          title: "Peterborough Professional Office",          category: "Commercial Projects",        image: IMAGES.user7 },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main data-testid="portfolio-page">
      <PageHero
        eyebrow="Selected Work"
        title="Our Portfolio"
        subtitle="Three decades of custom homes, cottages, boathouses and commercial builds across Ontario's Cottage Country."
        image={IMAGES.cottageExterior}
        testId="portfolio-hero"
      />

      {/* CATEGORY FILTER */}
      <section className="pt-16 md:pt-20 pb-8 md:pb-10 bg-white sticky-safe">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                data-testid={`portfolio-filter-${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`nav-underline uppercase tracking-[0.22em] text-[0.72rem] font-medium transition-colors py-1 ${
                  active === cat
                    ? "active text-[#c9a96e]"
                    : "text-[#2b2622] hover:text-[#c9a96e]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {visible.length === 0 ? (
            <p className="text-center text-[#3a3531]/70 font-light py-16">
              New projects in this category are being added shortly.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10 md:gap-x-14">
              {visible.map((p, i) => (
                <Reveal key={p.slug} variant="scale" delay={(i % 2) * 100}>
                  <Link
                    to="/contact"
                    data-testid={`portfolio-card-${p.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-7">
                      <div className="eyebrow">{p.category}</div>
                      <h3 className="mt-4 font-display text-[#01261d] text-3xl md:text-4xl leading-tight group-hover:text-[#c9a96e] transition-colors">
                        {p.title}
                      </h3>
                      <div className="mt-5 flex items-center gap-2 text-[0.72rem] tracking-[0.28em] uppercase text-[#c9a96e]">
                        <span>View Project</span>
                        <ArrowRight
                          size={14}
                          strokeWidth={1.5}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-28 md:py-40 bg-[#f5f0e6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">Ready When You Are</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            >
              Imagine Your Project<br />Among These
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            <Link to="/contact" data-testid="portfolio-cta" className="btn-pill mt-12">
              Begin a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
