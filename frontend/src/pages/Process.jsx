import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

const STEPS = [
  {
    n: "1",
    title: "Initial Consultation",
    body: "We begin with an in-depth conversation to understand your vision, lifestyle, budget, and timeline. No pressure — just clarity.",
  },
  {
    n: "2",
    title: "Design & Planning",
    body: "Our architectural technologists translate your ideas into detailed designs, floor plans, and specifications tailored to your property and preferences.",
  },
  {
    n: "3",
    title: "Permitting & Approvals",
    body: "We manage all permitting, municipal approvals, and regulatory requirements — keeping the process moving while you focus on the excitement ahead.",
  },
  {
    n: "4",
    title: "Construction",
    body: "Our skilled team of carpenters, operators, and tradespeople bring the project to life with precision and pride, on your land, in the Kawarthas.",
  },
  {
    n: "5",
    title: "Quality Control & Finishing",
    body: "Every detail is reviewed by our Project & Quality Control Manager before we consider a phase complete. No shortcuts. No compromises.",
  },
  {
    n: "6",
    title: "Final Walkthrough & Handover",
    body: "We walk through every inch of your completed project together, ensuring every element meets our standard — and yours.",
  },
];

const Process = () => {
  return (
    <main data-testid="process-page">
      <PageHero
        eyebrow="How We Work"
        title="Our Process"
        subtitle="From vision to reality — a transparent, client-first approach."
        image={IMAGES.processHero}
        testId="process-hero"
      />

      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {STEPS.map((s, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={s.n}
                data-testid={`process-step-${s.n}`}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24 border-b border-[#c9a96e]/20 last:border-b-0 items-center ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal variant={reverse ? "right" : "left"} className="md:col-span-5">
                  <div className="flex flex-col items-start">
                    <GoldRule delay={150} />
                    <div
                      className="font-script text-[#c9a96e] leading-none mt-7"
                      style={{ fontSize: "clamp(5rem, 11vw, 10rem)" }}
                    >
                      {s.n}.
                    </div>
                  </div>
                </Reveal>
                <Reveal variant={reverse ? "left" : "right"} delay={120} className="md:col-span-7">
                  <h3
                    className="font-display text-[#01261d] leading-tight tracking-tight"
                    style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
                  >
                    {s.title}
                  </h3>
                  <div className="mt-6"><GoldRule delay={250} /></div>
                  <p className="mt-8 text-[#3a3531] text-base md:text-lg font-light leading-[2] max-w-2xl">
                    {s.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
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
              Start the Conversation
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            <Link to="/contact" data-testid="process-cta-button" className="btn-pill mt-12">
              Schedule a Call
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Process;
