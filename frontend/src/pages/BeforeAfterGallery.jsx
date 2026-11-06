import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import BeforeAfter from "../components/BeforeAfter";
import { getProject } from "../lib/portfolioData";

// Full Before & After gallery for a Renovations & Additions project:
// one large comparison slider + a thumbnail strip to jump between angles.
const MODES = [
  { label: "Before", value: 100 },
  { label: "Compare", value: 50 },
  { label: "After", value: 0 },
];

const pad = (n) => String(n).padStart(2, "0");

const BeforeAfterGallery = () => {
  const { project: projectSlug } = useParams();
  const [params, setParams] = useSearchParams();
  const result = getProject("renovations-additions", projectSlug);
  const rawPairs = result ? result.project.pairs : null;
  const pairs = useMemo(() => rawPairs || [], [rawPairs]);
  const total = pairs.length;

  const fromUrl = parseInt(params.get("view"), 10);
  const [index, setIndex] = useState(
    Number.isFinite(fromUrl) ? Math.min(Math.max(fromUrl - 1, 0), Math.max(total - 1, 0)) : 0
  );
  const [pos, setPos] = useState(50);
  const thumbsRef = useRef(null);

  const go = useCallback(
    (i) => {
      if (!total) return;
      const next = (i + total) % total;
      setIndex(next);
      setPos(50);
      setParams({ view: String(next + 1) }, { replace: true });
    },
    [total, setParams]
  );

  // Keyboard: ← / → switch angle (unless the slider handle has focus).
  useEffect(() => {
    const onKey = (e) => {
      if (document.activeElement?.dataset?.testid === "before-after-handle") return;
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  // Keep the active thumbnail in view on small screens.
  useEffect(() => {
    const strip = thumbsRef.current;
    const el = strip?.querySelector(`[data-index="${index}"]`);
    if (strip && el) {
      // Scroll only the strip sideways — never the page itself.
      strip.scrollTo({ left: el.offsetLeft - (strip.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
    }
  }, [index]);

  // Preload the neighbouring comparisons so switching feels instant.
  useEffect(() => {
    [index + 1, index - 1].forEach((i) => {
      const p = pairs[(i + total) % total];
      if (!p) return;
      [p.before, p.after].filter(Boolean).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, [index, pairs, total]);

  if (!result) return <Navigate to="/portfolio/renovations-additions" replace />;
  const { category: cat, project } = result;
  if (!total) return <Navigate to={`/portfolio/${cat.slug}/${project.slug}`} replace />;

  const pair = pairs[index];
  const projectUrl = `/portfolio/${cat.slug}/${project.slug}`;

  const arrowBtn =
    "flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 text-white hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c9a96e]";

  return (
    <main data-testid={`before-after-gallery-${project.slug}`} className="bg-[#01261d]">
      {/* Title bar */}
      <section className="bg-white pt-[160px] md:pt-[176px] lg:pt-[196px] pb-8 md:pb-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: "Portfolio", to: "/portfolio" },
              { label: cat.name, to: `/portfolio/${cat.slug}` },
              { label: project.name, to: projectUrl },
              { label: "Before & After" },
            ]}
          />
          <div className="mt-7 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              {project.location && (
                <div className="text-[0.72rem] tracking-[0.24em] uppercase text-[#c9a96e] font-semibold">
                  {project.location}
                </div>
              )}
              <h1
                className="mt-3 font-display text-[#01261d] leading-[1.05] tracking-tight uppercase font-bold"
                style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)" }}
              >
                {project.name} <span className="text-[#c9a96e]">—</span> Before &amp; After
              </h1>
            </div>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase font-semibold text-[#3a3531]/70">
              {total} {total === 1 ? "View" : "Views"}{pairs.some((p) => p.before) ? " · Drag the slider to compare" : ""}
            </div>
          </div>
        </div>
      </section>

      {/* Viewer */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="relative max-w-5xl mx-auto">
            <BeforeAfter
              key={index}
              before={pair.before}
              after={pair.after}
              label={pair.caption}
              position={pos}
              onPositionChange={setPos}
              aspect="aspect-[4/3] md:aspect-[16/10]"
              eager
            />

            {/* Side arrows (desktop) */}
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous view"
                  data-testid="gallery-prev"
                  className={`${arrowBtn} hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-20`}
                >
                  <ChevronLeft size={22} strokeWidth={1.6} />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next view"
                  data-testid="gallery-next"
                  className={`${arrowBtn} hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-20`}
                >
                  <ChevronRight size={22} strokeWidth={1.6} />
                </button>
              </>
            )}
          </div>

          {/* Controls row */}
          <div className="max-w-5xl mx-auto mt-5 md:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              {total > 1 && (
                <button type="button" onClick={() => go(index - 1)} aria-label="Previous view" className={`${arrowBtn} lg:hidden shrink-0`}>
                  <ChevronLeft size={20} strokeWidth={1.6} />
                </button>
              )}
              <div className="min-w-0">
                <div className="font-display text-white text-xl md:text-2xl font-bold tracking-tight">
                  {pad(index + 1)} <span className="text-white/40 font-normal">/ {pad(total)}</span>
                </div>
                {pair.caption && (
                  <p className="mt-1 text-white/75 text-sm md:text-base font-light italic truncate">{pair.caption}</p>
                )}
              </div>
              {total > 1 && (
                <button type="button" onClick={() => go(index + 1)} aria-label="Next view" className={`${arrowBtn} lg:hidden shrink-0 ml-auto sm:ml-0`}>
                  <ChevronRight size={20} strokeWidth={1.6} />
                </button>
              )}
            </div>

            {/* Before / Compare / After quick toggle (only when a before photo exists) */}
            {pair.before && (
            <div className="inline-flex self-start sm:self-auto border border-white/25" role="group" aria-label="View mode">
              {MODES.map((m) => {
                const active = Math.round(pos) === m.value;
                return (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => setPos(m.value)}
                    aria-pressed={active}
                    data-testid={`mode-${m.label.toLowerCase()}`}
                    className={`px-4 md:px-5 py-2.5 text-[0.65rem] md:text-[0.68rem] tracking-[0.24em] uppercase font-semibold transition-colors ${
                      active ? "bg-[#c9a96e] text-[#01261d]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
            )}
          </div>

          {/* Thumbnails */}
          {total > 1 && (
            <div
              ref={thumbsRef}
              data-testid="gallery-thumbs"
              className="relative max-w-5xl mx-auto mt-7 md:mt-8 flex gap-3 overflow-x-auto pb-2 snap-x [scrollbar-width:thin]"
            >
              {pairs.map((p, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    data-index={i}
                    onClick={() => go(i)}
                    aria-label={`Show view ${i + 1}${p.caption ? ` — ${p.caption}` : ""}`}
                    aria-current={active}
                    className={`group relative shrink-0 snap-start w-24 sm:w-28 md:w-32 aspect-[4/3] overflow-hidden bg-black transition-all duration-300 ${
                      active ? "ring-2 ring-[#c9a96e] ring-offset-2 ring-offset-[#01261d]" : "opacity-55 hover:opacity-100"
                    }`}
                  >
                    <img src={p.after} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute left-2 bottom-1.5 text-white text-[0.6rem] tracking-[0.2em] font-semibold">
                      {pad(i + 1)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Back link */}
      <section className="bg-[#f5f0e6] py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6 flex-wrap">
          <Link
            to={projectUrl}
            data-testid="back-to-project"
            className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.24em] uppercase font-semibold text-[#01261d] hover:text-[#c9a96e] transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            <span>Back to {project.name}</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.24em] uppercase font-semibold text-[#01261d] hover:text-[#c9a96e] transition-colors"
          >
            <span>Start Your Renovation</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BeforeAfterGallery;
