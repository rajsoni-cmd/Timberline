import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { ProjectSpecs, ProjectDescription } from "../components/ProjectDetails";
import Lightbox from "../components/Lightbox";
import { getProject, getAdjacent } from "../lib/portfolioData";

const PortfolioProject = () => {
  const { category, project: projectSlug } = useParams();
  const result = getProject(category, projectSlug);
  const [lbIndex, setLbIndex] = useState(null);

  if (!result) return <Navigate to="/portfolio" replace />;
  const { category: cat, project } = result;

  // Renovations are handled by PortfolioRenovation.jsx; defensively redirect.
  if (cat.slug === "renovations-additions") {
    return <Navigate to={`/portfolio/${cat.slug}/${project.slug}/renovation`} replace />;
  }

  const { prev, next } = getAdjacent(cat.slug, project.slug);
  const images = project.images || [];

  return (
    <main data-testid={`portfolio-project-page-${project.slug}`}>
      <PageHero
        eyebrow={cat.name}
        title={project.name}
        subtitle={project.location}
        image={project.cover}
        testId="portfolio-project-hero"
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Masonry gallery (CSS columns) */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 [column-fill:_balance]">
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLbIndex(i)}
                data-testid={`gallery-item-${i}`}
                className="mb-5 md:mb-6 block w-full group overflow-hidden break-inside-avoid"
                aria-label={`Open image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${project.name} — ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
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

      {lbIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lbIndex}
          onClose={() => setLbIndex(null)}
        />
      )}
    </main>
  );
};

export default PortfolioProject;
