import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { banner } from "../lib/cms";
import { IMAGES } from "../lib/images";
import { PORTFOLIO } from "../lib/portfolioData";

const CategoryCard = ({ category, index }) => (
  <Reveal variant="scale" delay={(index % 3) * 100}>
    <Link
      to={`/portfolio/${category.slug}`}
      data-testid={`category-card-${category.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden"
    >
      <img
        src={category.cover}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end">
        <div className="eyebrow eyebrow-light mb-2">{category.tagline}</div>
        <h3
          className="font-display text-white leading-tight tracking-tight uppercase font-bold"
          style={{ fontSize: "clamp(1.5rem, 2.3vw, 2rem)" }}
        >
          {category.name}
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-white/80 text-[0.72rem] tracking-[0.24em] uppercase font-semibold">
            {category.projects.length}{" "}
            {category.projects.length === 1 ? "Project" : "Projects"}
          </span>
          <span className="h-[2px] w-10 bg-[#c9a96e] transition-all duration-500 group-hover:w-20" />
        </div>
      </div>
    </Link>
  </Reveal>
);

const Portfolio = () => {
  return (
    <main data-testid="portfolio-page">
      <PageHero
        {...banner("portfolio", { eyebrow: "Our Work", title: "Portfolio", subtitle: "Three decades of Kawartha craftsmanship — organized by discipline.", image: IMAGES.customBuildsRender })}
        testId="portfolio-hero"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">Browse by Category</div>
              <h2
                className="mt-6 font-display text-[#01261d] leading-tight tracking-tight uppercase font-bold"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}
              >
                Choose Your Adventure
              </h2>
              <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {PORTFOLIO.map((c, i) => (
              <CategoryCard key={c.slug} category={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
