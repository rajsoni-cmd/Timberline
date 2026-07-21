import { Link } from "react-router-dom";
import { Warehouse, MapPin, ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

const RealEstate = () => {
  return (
    <main data-testid="realestate-page">
      <PageHero
        eyebrow="Real Estate"
        title="Development & Storage"
        subtitle="Beyond the build — Timberline's land development portfolio and Woodview storage rentals."
        image={IMAGES.shopBuild}
        testId="realestate-hero"
      />

      {/* STORAGE UNITS */}
      <section id="storage" data-testid="storage-section" className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal variant="left" className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={IMAGES.shopBuild} alt="Timberline storage units" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="lg:col-span-6 lg:pl-6">
            <div>
              <GoldRule delay={200} />
              <div className="eyebrow mt-6">Storage Units</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
              >
                Clean, Secure Storage in Woodview
              </h2>
              <div className="mt-9"><GoldRule delay={350} /></div>
              <p className="mt-9 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
                Timberline operates modern storage units in Woodview, Ontario — offering seasonal, contractor, and cottage-country storage in a range of sizes. Our units are dry, secure, and monitored, with easy drive-up access year-round.
              </p>
              <ul className="mt-8 space-y-3 text-[#3a3531] text-base font-light">
                <li className="flex items-start gap-3">
                  <Warehouse size={18} strokeWidth={1.5} className="text-[#c9a96e] mt-1 shrink-0" />
                  <span>Multiple sizes to suit boats, RVs, tools, and personal storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="text-[#c9a96e] mt-1 shrink-0" />
                  <span>5584 ON-28 Unit 5, Woodview, ON — central to Kawartha cottage country</span>
                </li>
              </ul>
              <Link to="/contact" data-testid="storage-cta" className="btn-pill mt-10">
                Inquire About a Unit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section id="development" data-testid="development-section" className="py-28 md:py-40 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal variant="right" className="lg:col-span-6 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={IMAGES.cottageExterior} alt="Timberline land development" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal variant="left" delay={120} className="lg:col-span-6 lg:order-1 lg:pr-6">
            <div>
              <GoldRule delay={200} />
              <div className="eyebrow mt-6">Land Development</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
              >
                Development Projects Across the Kawarthas
              </h2>
              <div className="mt-9"><GoldRule delay={350} /></div>
              <p className="mt-9 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
                Timberline partners with landowners and investors on select development opportunities — from subdivision planning and servicing to turnkey custom-home communities. If you have a piece of land you're considering developing, we bring three decades of design-build experience to every conversation.
              </p>
              <Link to="/contact" data-testid="development-cta" className="btn-pill mt-10 inline-flex items-center gap-2">
                <span>Discuss a Development</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default RealEstate;
