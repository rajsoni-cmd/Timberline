import { Link } from "react-router-dom";
import { Truck, Shovel, Droplets, Trees, Wrench, Hammer } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

const EQUIPMENT_SERVICES = [
  { icon: Shovel,   name: "Excavation",         body: "Site preparation, foundation excavation, and grade work delivered with precision by our own operators." },
  { icon: Trees,    name: "Landscaping",        body: "Grading, driveway installation, retaining walls, and finished landscape work that completes every build." },
  { icon: Droplets, name: "Septic Installation", body: "Full septic system design, permits, and installation — from tank set to leaching bed." },
  { icon: Truck,    name: "Backfilling",        body: "Precise backfill, compaction, and site restoration once construction reaches grade." },
  { icon: Wrench,   name: "Demolition",         body: "Controlled demolition and site clearing — safely, thoroughly, and ready for the new build." },
  { icon: Hammer,   name: "Site Preparation",   body: "Clearing, brush removal, and access-road creation on remote lakefront and rural lots." },
];

const HeavyEquipment = () => {
  return (
    <main data-testid="heavy-equipment-page">
      <PageHero
        eyebrow="Heavy Equipment Division"
        title="Heavy Equipment Construction"
        subtitle="A fully in-house fleet, operated year-round by our own tradespeople."
        image={IMAGES.processHero}
        testId="he-hero"
      />

      {/* INTRO */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">In-House. On Time.</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            >
              Our Equipment. Our Operators.
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <p className="mt-10 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
              In 2014, Timberline built a 3,200 sq ft shop to house and maintain our heavy equipment division. Keeping this work in-house allows us to control quality, protect timelines, and employ our operators year-round on maintenance during the off-season. When you build with Timberline, the same team that clears your lot builds your walls.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28 md:py-40 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">What We Do</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
              >
                Heavy Equipment Services
              </h2>
              <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
            {EQUIPMENT_SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.name} variant="scale" delay={i * 90}>
                  <div data-testid={`he-service-${svc.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Icon className="text-[#c9a96e]" size={34} strokeWidth={1.3} />
                    <div className="mt-6"><GoldRule delay={150} /></div>
                    <h3 className="mt-6 font-display text-[#01261d] text-2xl md:text-3xl leading-tight">
                      {svc.name}
                    </h3>
                    <p className="mt-5 text-[#3a3531] text-sm md:text-base font-light leading-[1.95]">
                      {svc.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative py-32 md:py-44 bg-[#01261d] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns opacity-25"
          style={{ backgroundImage: `url(${IMAGES.experienceBg})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow eyebrow-light mt-6">Plan Your Site</div>
            <h2
              className="mt-7 font-display text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}
            >
              From Raw Land to Finished Home
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <Link to="/contact" data-testid="he-cta" className="btn-pill mt-12">
              Discuss Your Site
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default HeavyEquipment;
