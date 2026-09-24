import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

// ─────────────────────────────────────────────────────────────
// STAGE 2 sub-section content (rendered as an accordion)
// ─────────────────────────────────────────────────────────────
const STAGE_2_SUBSECTIONS = [
  {
    n: "2.1",
    title: "Preliminary Design — Stage 1",
    body: (
      <>
        <p>
          During this stage, we develop an initial design concept that allows clients to fully visualize the project before construction begins.
        </p>
        <p className="mt-5 font-medium text-[#01261d]">This phase includes:</p>
        <ul className="mt-3 space-y-2 list-disc pl-6 marker:text-[#c9a96e]">
          <li>Preliminary floor plans</li>
          <li>Exterior renderings and 3D visualizations</li>
          <li>Site sketch planning</li>
          <li>Preliminary septic review</li>
        </ul>
        <p className="mt-5">
          These drawings help establish the overall vision, layout, functionality, and architectural character of the project.
        </p>
      </>
    ),
  },
  {
    n: "2.2",
    title: "Class C Estimate",
    body: (
      <>
        <p>
          Once the preliminary design is complete, we prepare a complimentary Class C construction estimate with an expected accuracy range of approximately -15% to +25%.
        </p>
        <p className="mt-5">
          This estimate helps determine overall project feasibility and provides a clearer understanding of anticipated construction costs before moving into approvals and detailed construction drawings.
        </p>
      </>
    ),
  },
  {
    n: "2.3",
    title: "Planning Approvals",
    body: (
      <>
        <p>
          After reviewing the estimated project costs, our design team assists with all required planning approvals and supporting documentation, which may include:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-[#c9a96e]">
          <li>Township planning approvals</li>
          <li>Conservation authority approvals</li>
          <li>Site plan approvals</li>
          <li>Environmental studies</li>
          <li>Slope stability studies</li>
        </ul>
      </>
    ),
  },
  {
    n: "2.4",
    title: "Build Contract",
    body: (
      <>
        <p>
          Once planning approvals are achieved and project feasibility is confirmed, the approved previous estimate is updated and converted into a Timberline Build Contract.
        </p>
        <p className="mt-5">
          At this stage, we request a project deposit to formally schedule your project and secure your construction timeline within our production calendar.
        </p>
        <p className="mt-5">
          Building a custom home is a collaborative process, and your selections help bring your vision to life. While we provide a detailed estimate based on the information available, final costs may vary as materials, finishes, and design details are confirmed throughout the build.
        </p>
      </>
    ),
  },
  {
    n: "2.5",
    title: "Permit Design — Stage 2",
    body: (
      <>
        <p>
          Following approval of the preliminary design, we transform the concept drawings into a comprehensive construction drawing package for permit submission and construction.
        </p>
        <p className="mt-5">
          Depending on the project, additional coordination from the Timberline designer may include:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-[#c9a96e]">
          <li>Septic design and permits</li>
          <li>Structural engineering</li>
          <li>HVAC design and heat-loss calculations</li>
          <li>Additional technical or municipal requirements</li>
        </ul>
      </>
    ),
  },
];

// ─────────────────────────────────────────────────────────────
// Stage index nav (jump-to)
// ─────────────────────────────────────────────────────────────
const STAGE_NAV = [
  { n: "01", title: "Initial Consultation", href: "#stage-1" },
  { n: "02", title: "Design & Planning",    href: "#stage-2" },
  { n: "03", title: "Construction",         href: "#stage-3" },
  { n: "04", title: "Completion & Warranty",href: "#stage-4" },
];

// ─────────────────────────────────────────────────────────────
// Body wrapper for consistent typography
// ─────────────────────────────────────────────────────────────
const RichBody = ({ children }) => (
  <div className="text-[#3a3531] text-base md:text-[1.02rem] font-light leading-[1.95]">
    {children}
  </div>
);

// ─────────────────────────────────────────────────────────────
// Nested sub-section accordion item for Stage 2
// ─────────────────────────────────────────────────────────────
const SubItem = ({ item, open, onToggle }) => (
  <div
    data-testid={`sub-item-${item.n}`}
    className={`border-l-2 transition-colors duration-300 ${
      open ? "border-[#c9a96e]" : "border-transparent"
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      data-testid={`sub-item-toggle-${item.n}`}
      className="w-full flex items-center justify-between gap-6 py-5 md:py-6 px-5 md:px-7 text-left group"
    >
      <span className="flex items-center gap-5 md:gap-6">
        <span className="font-display text-[#c9a96e] text-sm md:text-base font-semibold tracking-[0.18em]">
          {item.n}
        </span>
        <span className="font-display text-[#01261d] text-base md:text-lg font-semibold leading-snug tracking-tight group-hover:text-[#c9a96e] transition-colors">
          {item.title}
        </span>
      </span>
      <span
        className={`shrink-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center transition-all duration-300 rounded-full border ${
          open
            ? "bg-[#01261d] border-[#01261d]"
            : "bg-transparent border-[#01261d]/25 group-hover:border-[#c9a96e]"
        }`}
      >
        {open ? (
          <Minus size={15} strokeWidth={2} className="text-[#c9a96e]" />
        ) : (
          <Plus size={15} strokeWidth={2} className="text-[#01261d] group-hover:text-[#c9a96e] transition-colors" />
        )}
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-500 ease-out ${
        open ? "max-h-[1800px] opacity-100 pb-7" : "max-h-0 opacity-0"
      }`}
    >
      <div className="pl-5 md:pl-[80px] pr-5 md:pr-7 text-[#3a3531] text-[0.95rem] md:text-[1rem] font-light leading-[1.9]">
        {item.body}
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// Stage row — clean editorial layout
// ─────────────────────────────────────────────────────────────
const Stage = ({ n, index, title, kicker, children, last = false }) => {
  const padded = String(index).padStart(2, "0");
  return (
    <div
      id={`stage-${index}`}
      data-testid={`process-stage-${index}`}
      className="scroll-mt-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-14 lg:gap-x-20 py-16 md:py-24">
        {/* Left column: sticky number + label */}
        <Reveal variant="left" className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[0.7rem] tracking-[0.32em] uppercase text-[#c9a96e] font-semibold">
                Stage {padded}
              </span>
            </div>
            <div
              className="mt-4 font-display font-bold text-[#01261d] leading-none tracking-tight"
              style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}
            >
              {padded}
            </div>
            {kicker && (
              <p className="mt-5 text-[#3a3531] text-sm md:text-base font-light italic leading-relaxed max-w-xs">
                {kicker}
              </p>
            )}
          </div>
        </Reveal>

        {/* Right column: content */}
        <Reveal variant="right" delay={120} className="md:col-span-8">
          <div>
            <h3
              className="font-display text-[#01261d] leading-[1.05] tracking-tight uppercase font-bold"
              style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.75rem)" }}
            >
              {title}
            </h3>
            <div className="mt-6"><GoldRule delay={250} /></div>
            <div className="mt-8">{children}</div>
          </div>
        </Reveal>
      </div>
      {!last && (
        <div className="border-t border-[#01261d]/10" />
      )}
    </div>
  );
};

const Process = () => {
  const [openSub, setOpenSub] = useState("2.1");

  return (
    <main data-testid="process-page">
      <PageHero
        eyebrow="How We Work"
        title="Our Process"
        subtitle="A comprehensive, one-stop building experience — from vision to move-in."
        image={IMAGES.processHero}
        testId="process-hero"
      />

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section data-testid="process-intro" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <Reveal variant="left" className="md:col-span-5">
              <div>
                <div className="flex items-center gap-4">
                  <div className="h-px w-10 bg-[#c9a96e]" />
                  <span className="text-[0.7rem] tracking-[0.32em] uppercase text-[#c9a96e] font-semibold">
                    Overview
                  </span>
                </div>
                <h2
                  className="mt-6 font-display text-[#01261d] leading-[1.05] tracking-tight uppercase font-bold"
                  style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
                >
                  A Complete Building Experience
                </h2>
                <div className="mt-8"><GoldRule delay={250} /></div>
              </div>
            </Reveal>
            <Reveal variant="right" delay={120} className="md:col-span-7">
              <div className="space-y-6 text-[#3a3531] text-base md:text-lg font-light leading-[1.95]">
                <p>
                  At Timberline, we offer a comprehensive, one-stop complete building experience. When we say complete service, we mean far more than traditional design-build. From the initial consultation to final landscaping and warranty walkthroughs, we guide every stage of your project with a hands-on approach and a commitment to quality.
                </p>
                <p>
                  Our team manages the entire process, including design, permits, planning approvals, excavation, site preparation (tree removal), septic design and installation, possession storage, construction and management, material selections, township inspections, until project completion. By integrating both design and heavy equipment capabilities under one team, we maintain greater control over timelines, quality, site servicing, and execution throughout the entire project.
                </p>
                <p className="text-[#01261d] font-normal italic border-l-2 border-[#c9a96e] pl-5">
                  Our goal is simple — to reduce the stress and workload for our clients while delivering a seamless, turn-key building experience.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STAGE INDEX (jump-to nav) ─────────────────────── */}
      <section data-testid="process-index" className="bg-[#f5f0e6]/60 border-y border-[#c9a96e]/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 md:py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STAGE_NAV.map((s) => (
              <a
                key={s.n}
                href={s.href}
                data-testid={`stage-nav-${s.n}`}
                className="group flex items-center gap-3 md:gap-4 border-l-2 border-[#c9a96e]/40 pl-3 md:pl-4 hover:border-[#c9a96e] transition-colors"
              >
                <span className="font-display text-[#c9a96e] text-lg md:text-xl font-bold tracking-tight">
                  {s.n}
                </span>
                <span className="text-[#01261d] text-[0.72rem] md:text-[0.8rem] tracking-[0.14em] uppercase font-semibold leading-tight group-hover:text-[#c9a96e] transition-colors">
                  {s.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAGES ────────────────────────────────────────── */}
      <section data-testid="process-stages" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* STAGE 1 */}
          <Stage
            n="1"
            index={1}
            title="Initial Consultation"
            kicker="Understanding your vision, project scope, timeline and budget — always at no charge."
          >
            <RichBody>
              <p>
                The initial consultation is one of the most important stages of the project. This meeting allows us to better understand your vision, project scope, timeline, and budget while ensuring you feel comfortable with our team and confident in our process.
              </p>

              <p className="mt-6 font-medium text-[#01261d]">
                Before our meeting, we ask clients to prepare:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 marker:text-[#c9a96e]">
                <li>Inspiration photos and design ideas</li>
                <li>A list of likes, dislikes, non-negotiables, and wish-list items</li>
                <li>A copy of the property tax bill</li>
                <li>A property survey, if available</li>
              </ul>

              <p className="mt-6 font-medium text-[#01261d]">
                The property survey should identify:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 marker:text-[#c9a96e]">
                <li>Existing building locations and dimensions</li>
                <li>Natural features</li>
                <li>High water lines</li>
                <li>Easements</li>
                <li>Overhead hydro lines</li>
              </ul>

              <p className="mt-6">
                If a survey is not available, our team can assist in guiding you through the acquisition process.
              </p>

              <p className="mt-6 font-medium text-[#01261d]">
                A Timberline designer will then meet with you on-site to:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 marker:text-[#c9a96e]">
                <li>Review the property and topography</li>
                <li>Identify potential building constraints</li>
                <li>Prioritize viewpoints and site opportunities</li>
                <li>Take measurements, photos, and site notes</li>
                <li>Discuss project goals, lifestyle needs, and budget expectations</li>
              </ul>

              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-[#f5f0e6] border-l-2 border-[#c9a96e]">
                <span className="text-[0.7rem] tracking-[0.24em] uppercase text-[#c9a96e] font-semibold">
                  Included
                </span>
                <span className="text-[#01261d] text-sm md:text-base font-medium">
                  This initial consultation is provided at no charge.
                </span>
              </div>
            </RichBody>
          </Stage>

          {/* STAGE 2 */}
          <Stage
            n="2"
            index={2}
            title="Design & Planning"
            kicker="Concept, estimating, approvals and permit-ready drawings — the blueprint for your build."
          >
            <RichBody>
              <p>
                Once you are comfortable moving forward with the Timberline team, we begin the design process. Our design phase is broken into two stages: Preliminary Design and Permit Design.
              </p>
            </RichBody>

            <div className="mt-10 bg-white border border-[#c9a96e]/20 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              {STAGE_2_SUBSECTIONS.map((sub) => (
                <SubItem
                  key={sub.n}
                  item={sub}
                  open={openSub === sub.n}
                  onToggle={() => setOpenSub(openSub === sub.n ? null : sub.n)}
                />
              ))}
            </div>
          </Stage>

          {/* STAGE 3 */}
          <Stage
            n="3"
            index={3}
            title="Construction"
            kicker="In-house crews and heavy equipment mean tighter scheduling, quality control and momentum."
          >
            <RichBody>
              <p>Once permits and approvals are in place, construction begins.</p>
              <p className="mt-6">
                Timberline manages every aspect of the building process, coordinating all materials, trades, subcontractors, suppliers, scheduling, inspections, and on-site operations from start to finish.
              </p>
              <p className="mt-6">
                Because Timberline incorporates in-house framing crews, finishing carpenters, project managers, and heavy equipment operators directly within our company, we maintain greater involvement and scheduling control during:
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-[#c9a96e]">
                <li>Excavation and Backfill</li>
                <li>Septic installation</li>
                <li>Grading and site development</li>
                <li>Framing and Finish Carpentry</li>
              </ul>
              <p className="mt-6">
                Throughout construction, clients receive regular progress updates from our site project managers.
              </p>
              <p className="mt-6">
                Working closely with our design and estimating team, clients will finalize interior and exterior selections, including finishes, fixtures, materials, and custom details. Our team is available throughout the selection process to provide guidance, recommendations, and product research to ensure every detail aligns with your vision and budget.
              </p>
            </RichBody>
          </Stage>

          {/* STAGE 4 */}
          <Stage
            n="4"
            index={4}
            title="Completion & Warranty"
            kicker="Registered Tarion builder since 1989 — we stand behind every project long after handover."
            last
          >
            <RichBody>
              <p>
                Once construction is complete, we schedule a final walkthrough with you to review the finished project, address any remaining questions or touch-ups, and ensure the completed home meets both Timberline&apos;s standards and your expectations.
              </p>
              <p className="mt-6">
                As a registered Tarion Warranty Corporation builder since 1989, Timberline stands behind every completed project and complies with all Tarion warranty requirements and inspection procedures.
              </p>
              <p className="mt-6">
                Final documentation, including the Certificate of Inspection and warranty information, will be provided for your records.
              </p>
              <p className="mt-6 text-[#01261d] font-normal italic border-l-2 border-[#c9a96e] pl-5">
                Our company continues to grow through repeat business and referrals, and client satisfaction remains at the center of everything we do.
              </p>
            </RichBody>
          </Stage>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#01261d] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} wide /></div>
            <div className="eyebrow eyebrow-light mt-7 text-[#d4c4a8]">Ready When You Are</div>
            <h2
              className="mt-6 font-display text-white leading-[1.05] tracking-tight uppercase font-bold"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)" }}
            >
              Start the Conversation
            </h2>
            <p className="mt-8 text-white/75 text-base md:text-lg font-light leading-[1.95] max-w-2xl mx-auto">
              Whether you&apos;re at the vision stage or ready to break ground, our team is ready to walk you through the complete Timberline experience.
            </p>
            <Link
              to="/contact"
              data-testid="process-cta-button"
              className="btn-pill mt-10 inline-flex items-center gap-3"
            >
              Schedule a Call
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Process;
