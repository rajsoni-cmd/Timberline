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

      <section className="py-24 md:py-32 bg-[#f4eee4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-10">
            {PORTFOLIO_PROJECTS.map((p, i) => (
              <Reveal key={p.slug} variant="scale" delay={(i % 3) * 100}>
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
                  <div className="mt-6">
                    <div className="eyebrow">{p.category}</div>
                    <h3 className="mt-3 font-display text-[#2c2926] text-2xl leading-tight group-hover:text-[#b89d77] transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-[0.72rem] tracking-[0.24em] uppercase text-[#b89d77]">
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

      <section className="py-24 md:py-32 bg-[#efe8d9]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-5">Ready When You Are</div>
            <h2
              className="mt-6 font-display text-[#2c2926] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Imagine Your Project<br />Among These
            </h2>
            <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            <p className="mt-8 text-[#3a3531]/85 text-base md:text-lg font-light leading-[1.9]">
              Every Timberline home begins with a conversation. Tell us about your land, your vision, and your timeline — we'll do the rest.
            </p>
            <Link to="/contact" data-testid="portfolio-cta" className="btn-pill mt-10">
              Schedule a Call
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
