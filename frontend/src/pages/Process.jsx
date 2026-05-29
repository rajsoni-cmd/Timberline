import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

const STEPS = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "We listen first. Understanding your vision, lifestyle, site, and budget — and translating it into a clear path forward.",
  },
  {
    n: "02",
    title: "Design & Planning",
    body: "Our in-house designers and architectural technologists turn ideas into detailed plans, refined collaboratively with you.",
  },
  {
    n: "03",
    title: "Permitting & Approvals",
    body: "We handle the township, conservation, and inspection processes so your project moves forward on schedule.",
  },
  {
    n: "04",
    title: "Construction",
    body: "Our long-tenured carpenters, millworkers, and operators bring the design to life with relentless attention to detail.",
  },
  {
    n: "05",
    title: "Final Walkthrough",
    body: "Every line, finish, and fixture is reviewed against our standard — not just the spec sheet — before handover.",
  },
  {
    n: "06",
    title: "Handover",
    body: "We hand you the keys with documentation, warranties, and a relationship built to last beyond the project.",
  },
];

const Process = () => {
  return (
    <main data-testid="process-page">
      <PageHero
        eyebrow="How We Work"
        title="Our Process"
        subtitle="From vision to reality — here's how we work."
        image={IMAGES.greatRoomBar}
        testId="process-hero"
      />

      <section className="py-24 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {STEPS.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 80}>
              <div
                data-testid={`process-step-${s.n}`}
                className="grid grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 border-b border-[#231f20]/10 last:border-b-0"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-serif-display text-[#00a34f] text-6xl md:text-7xl leading-none">
                    {s.n}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-serif-display text-[#01261d] text-3xl md:text-4xl leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-[#231f20]/80 text-base md:text-lg leading-relaxed max-w-2xl">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#01261d]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="eyebrow text-[#00a34f] mb-5">Ready When You Are</div>
            <h2 className="font-serif-display text-white text-3xl md:text-5xl leading-tight tracking-tight">
              Start the Conversation
            </h2>
            <Link
              to="/contact"
              data-testid="process-cta-button"
              className="inline-block mt-10 bg-[#00a34f] text-white text-[12px] tracking-[0.28em] uppercase px-12 py-4 hover:bg-white hover:text-[#01261d] transition-colors duration-300"
            >
              Begin Your Project
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Process;
