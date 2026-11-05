import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";
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
  // The first comparison is featured here; the rest live on the
  // full Before & After page so this page stays short.
  const featured = pairs[0];
  const more = pairs.slice(1);
  const galleryUrl = `/portfolio/${cat.slug}/${project.slug}/before-after`;

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

      {/* Featured Before / After + link to the full set */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {featured && (
            <Reveal>
              <BeforeAfter
                before={featured.before}
                after={featured.after}
                caption={featured.caption}
                label={featured.caption}
              />
            </Reveal>
          )}

          {more.length > 0 && (
            <Reveal delay={120}>
              <div
                data-testid="more-before-after"
                className="mt-12 md:mt-16 bg-[#f5f0e6] p-6 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                  <div>
                    <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[#c9a96e] font-semibold">
                      More Angles
                    </div>
                    <h2
                      className="mt-3 font-display text-[#01261d] leading-tight tracking-tight font-bold"
                      style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}
                    >
                      {pairs.length} Before &amp; After Views
                    </h2>
                  </div>
                  <Link
                    to={galleryUrl}
                    data-testid="view-all-before-after"
                    className="inline-flex items-center justify-center gap-3 bg-[#01261d] text-white px-7 py-4 text-[0.72rem] tracking-[0.24em] uppercase font-semibold hover:bg-[#c9a96e] transition-colors self-start md:self-auto"
                  >
                    <Images size={16} strokeWidth={1.8} />
                    <span>View All Before &amp; After</span>
                  </Link>
                </div>

                <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  {more.slice(0, 4).map((pair, i) => {
                    const index = i + 1;
                    const isLastTile = i === 3 && more.length > 4;
                    return (
                      <Link
                        key={index}
                        to={`${galleryUrl}?view=${index + 1}`}
                        data-testid={`before-after-thumb-${index}`}
                        className="group relative block aspect-[4/3] overflow-hidden bg-black"
                        aria-label={`Open Before & After ${index + 1}${pair.caption ? ` — ${pair.caption}` : ""}`}
                      >
                        <img
                          src={pair.after}
                          alt=""
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                        <span className="absolute left-3 bottom-2.5 text-white text-[0.65rem] tracking-[0.24em] uppercase font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {isLastTile && (
                          <span className="absolute inset-0 bg-[#01261d]/75 flex items-center justify-center text-white font-display text-xl md:text-2xl font-bold">
                            +{more.length - 3}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          )}
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
