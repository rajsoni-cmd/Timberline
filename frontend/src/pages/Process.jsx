import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

const STEPS = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "We begin with an in-depth conversation to understand your vision, lifestyle, budget, and timeline. No pressure — just clarity.",
  },
  {
    n: "02",
    title: "Design & Planning",
    body: "Our architectural technologists translate your ideas into detailed designs, floor plans, and specifications tailored to your property and preferences.",
  },
  {
    n: "03",
    title: "Permitting & Approvals",
    body: "We manage all permitting, municipal approvals, and regulatory requirements — keeping the process moving while you focus on the excitement ahead.",
  },
  {
    n: "04",
    title: "Construction",
    body: "Our skilled team of carpenters, operators, and tradespeople bring the project to life with precision and pride, on your land, in the Kawarthas.",
  },
  {
    n: "05",
    title: "Quality Control & Finishing",
    body: "Every detail is reviewed by our Project & Quality Control Manager before we consider a phase complete. No shortcuts. No compromises.",
  },
  {
    n: "06",
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

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {STEPS.map((s, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={s.n}
                data-testid={`process-step-${s.n}`}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-14 md:py-20 border-b border-[#231f20]/10 last:border-b-0 items-center ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal variant={reverse ? "right" : "left"} className="md:col-span-5">
                  <div className="flex flex-col items-start">
                    <GoldRule delay={150} />
                    <div
                      className="font-display text-[#00a34f] leading-none mt-6"
                      style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
                    >
                      {s.n}
                    </div>
                  </div>
                </Reveal>
                <Reveal variant={reverse ? "left" : "right"} delay={120} className="md:col-span-7">
                  <h3
                    className="font-display text-[#01261d] leading-tight tracking-tight"
                    style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}
                  >
                    {s.title}
                  </h3>
                  <div className="mt-5"><GoldRule delay={250} /></div>
                  <p className="mt-7 text-[#231f20]/85 text-base md:text-lg font-light leading-[1.9] max-w-2xl">
                    {s.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#01261d]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-5">Ready When You Are</div>
            <h2
              className="mt-6 font-display italic text-[#f5f0e8] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Start the Conversation
            </h2>
            <div className="flex justify-center mt-7"><GoldRule delay={350} /></div>
            <Link
              to="/contact"
              data-testid="process-cta-button"
              className="btn-luxury mt-12 bg-transparent text-[#f5f0e8] border border-[#f5f0e8] hover:bg-[#00a34f] hover:border-[#00a34f]"
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
