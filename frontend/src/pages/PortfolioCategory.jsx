import { Link, useParams, Navigate } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { getCategory } from "../lib/portfolioData";

const ProjectCard = ({ project, categorySlug, index }) => (
  <Reveal variant="scale" delay={(index % 3) * 80}>
    <Link
      to={`/portfolio/${categorySlug}/${project.slug}`}
      data-testid={`project-card-${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      </div>
      <div className="mt-6">
        <h3 className="font-display text-[#01261d] text-xl md:text-2xl font-semibold tracking-tight leading-tight group-hover:text-[#c9a96e] transition-colors">
          {project.name}
        </h3>
        <div className="mt-2 text-[0.72rem] tracking-[0.24em] uppercase text-[#c9a96e] font-semibold">
          {project.location}
        </div>
        <div className="mt-4 h-[2px] w-10 bg-[#c9a96e] transition-all duration-500 group-hover:w-20" />
      </div>
    </Link>
  </Reveal>
);

const PortfolioCategory = () => {
  const { category } = useParams();
  const cat = getCategory(category);

  if (!cat) return <Navigate to="/portfolio" replace />;

  return (
    <main data-testid={`portfolio-category-page-${cat.slug}`}>
      <PageHero
        eyebrow={cat.tagline}
        title={cat.name}
        subtitle={cat.description}
        image={cat.cover}
        testId="portfolio-category-hero"
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: "Portfolio", to: "/portfolio" },
              { label: cat.name },
            ]}
          />

          <Reveal>
            <div className="mt-10 flex items-end justify-between gap-6 flex-wrap">
              <div>
                <GoldRule delay={150} />
                <div className="mt-5 text-[0.72rem] tracking-[0.24em] uppercase text-[#c9a96e] font-semibold">
                  {cat.projects.length}{" "}
                  {cat.projects.length === 1 ? "Project" : "Projects"}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
            {cat.projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} categorySlug={cat.slug} index={i} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/portfolio" data-testid="back-to-portfolio" className="btn-pill">
              Back to All Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioCategory;
