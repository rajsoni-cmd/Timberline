import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { ProjectSpecs, ProjectDescription } from "../components/ProjectDetails";
import BeforeAfter from "../components/BeforeAfter";
import { getProject, getAdjacent } from "../lib/portfolioData";

const PortfolioRenovation = () => {
  const { project: projectSlug } = useParams();
  const result = getProject("renovations-additions", projectSlug);
  if (!result) return <Navigate to="/portfolio/renovations-additions" replace />;
  const { category: cat, project } = result;

  const { next } = getAdjacent(cat.slug, project.slug);
  const pairs = project.pairs || [];

  return (
    <main data-testid={`portfolio-renovation-page-${project.slug}`}>
      <PageHero
        eyebrow={cat.name}
        title={project.name}
        subtitle={project.location}
        image={project.cover}
        testId="portfolio-renovation-hero"
      />

      {/* Intro */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: "Portfolio", to: "/portfolio" },
              { label: cat.name, to: `/portfolio/${cat.slug}` },
              { label: project.name },
            ]}
          />

          <Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
              <div className="md:col-span-5">
                <GoldRule delay={150} />
                <div className="mt-5 text-[0.72rem] tracking-[0.24em] uppercase text-[#c9a96e] font-semibold">
                  {project.location}
                </div>
                <h1
                  className="mt-5 font-display text-[#01261d] leading-[1.05] tracking-tight uppercase font-bold"
                  style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)" }}
                >
                  {project.name}
                </h1>
                <ProjectSpecs project={project} />
              </div>
              <div className="md:col-span-7">
                <ProjectDescription text={project.description} />
                <p className={`${project.description ? "mt-5 " : ""}text-[0.7rem] tracking-[0.28em] uppercase text-[#c9a96e] font-semibold`}>
                  Drag the slider to compare before &amp; after
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Before / After stack */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-14 md:space-y-20">
          {pairs.map((pair, i) => (
            <Reveal key={i} delay={i * 80}>
              <BeforeAfter
                before={pair.before}
                after={pair.after}
                caption={pair.caption}
                label={pair.caption}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nav footer */}
      <section className="py-14 md:py-20 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6 flex-wrap">
          <Link
            to={`/portfolio/${cat.slug}`}
            data-testid="back-to-category"
            className="group inline-flex items-center gap-3 text-[0.72rem] tracking-[0.24em] uppercase font-semibold text-[#01261d] hover:text-[#c9a96e] transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            <span>Back to {cat.name}</span>
          </Link>
          {next && next.slug !== project.slug && (
            <Link
              to={`/portfolio/${cat.slug}/${next.slug}`}
              data-testid="next-project"
              className="group inline-flex items-center gap-3 text-[0.72rem] tracking-[0.24em] uppercase font-semibold text-[#01261d] hover:text-[#c9a96e] transition-colors text-right"
            >
              <span>Next Project — {next.name}</span>
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};

export default PortfolioRenovation;
