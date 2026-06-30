import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES, PORTFOLIO_PROJECTS } from "../lib/images";

const Portfolio = () => {
  return (
    <main data-testid="portfolio-page">
      <PageHero
        eyebrow="Selected Work"
        title="Our Portfolio"
        subtitle="Three decades of custom homes, cottages, boathouses and renovations across Ontario's Cottage Country."
        image={IMAGES.cottageExterior}
        testId="portfolio-hero"
      />

      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10 md:gap-x-14">
            {PORTFOLIO_PROJECTS.map((p, i) => (
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
        </div>
      </section>

      <section className="py-28 md:py-40 bg-[#fafaf7]">
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
            <p className="mt-9 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
              Every Timberline home begins with a conversation. Tell us about your land, your vision, and your timeline — we'll do the rest.
            </p>
            <Link to="/contact" data-testid="portfolio-cta" className="btn-pill mt-12">
              Schedule a Call
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
