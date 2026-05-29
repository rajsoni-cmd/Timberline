import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  TreePine,
  Anchor,
  Tent,
  Warehouse,
  Hammer,
  Plus,
  LayoutPanelLeft,
  Shovel,
  Trees,
  Wrench,
  Droplets,
  Star,
} from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import { IMAGES, BANNER_INTERIOR } from "../lib/images";
import { TESTIMONIALS } from "../lib/team";

const SERVICES = [
  { icon: HomeIcon, name: "Custom Homes" },
  { icon: TreePine, name: "Cottages" },
  { icon: Anchor, name: "Boathouses" },
  { icon: Tent, name: "Bunkies" },
  { icon: Warehouse, name: "Garages" },
  { icon: Hammer, name: "Renovations" },
  { icon: Plus, name: "Additions" },
  { icon: LayoutPanelLeft, name: "Decks & Docks" },
  { icon: Shovel, name: "Excavation" },
  { icon: Trees, name: "Landscaping" },
  { icon: Wrench, name: "Demolition" },
  { icon: Droplets, name: "Septic Installation" },
];

const Home = () => {
  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{ backgroundImage: `url(${BANNER_INTERIOR})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#01261d]/65 via-[#01261d]/45 to-[#01261d]/75" />

        {/* 30+ Years badge — top right of hero */}
        <div
          data-testid="hero-experience-badge"
          className="absolute top-28 md:top-32 right-6 md:right-12 z-10 flex items-center gap-3 border border-[#c9a96e]/60 bg-[#01261d]/40 backdrop-blur-sm px-5 py-3"
        >
          <span className="font-display text-[#00a34f] text-2xl md:text-3xl leading-none">30+</span>
          <span className="text-[#f5f0e8] text-[0.65rem] md:text-[0.7rem] tracking-[0.26em] uppercase font-light leading-snug max-w-[8ch]">
            Years<br />Experience
          </span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl py-24">
          <Reveal>
            <div className="flex justify-center mb-6">
              <GoldRule delay={150} />
            </div>
            <div className="eyebrow eyebrow-light mb-8">
              Kawartha's Premier Custom Builder
            </div>
            <h1
              className="font-display italic text-[#f5f0e8] leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
            >
              Building More<br />Than Homes
            </h1>
            <div className="flex justify-center mt-9">
              <GoldRule delay={400} wide />
            </div>
            <p className="mt-9 text-[#f5f0e8]/80 text-base md:text-lg font-light leading-[1.9] max-w-2xl mx-auto">
              Timberline is consistently advancing our products and services, maintaining our focus on quality regardless of the size of project.
            </p>
            <Link
              to="/contact"
              data-testid="hero-cta-button"
              className="btn-luxury mt-12 text-[#f5f0e8] border border-[#f5f0e8] hover:bg-[#00a34f] hover:border-[#00a34f]"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#f5f0e8]/55 text-[0.65rem] tracking-[0.36em] uppercase">
          Scroll
        </div>
      </section>

      {/* FOUNDATION */}
      <section data-testid="foundation-section" className="py-24 md:py-36 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal variant="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={IMAGES.cottageExterior}
                alt="Timberline custom home exterior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div>
              <GoldRule delay={250} />
              <div className="eyebrow mt-5">Who We Are</div>
              <h2
                className="mt-6 font-display text-[#01261d] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Foundation of<br />Timberline
              </h2>
              <div className="mt-7"><GoldRule delay={350} /></div>
              <p className="mt-9 text-[#231f20]/85 text-base md:text-lg font-light leading-[1.9]">
                Timberline is an award winning home builder, continuing to build our company through repeat business and referrals. We achieve our client's vision by maintaining constant honest feedback and direction, attention to detail and pride in the quality of every aspect of our projects.
              </p>
              <div className="mt-10 flex items-center gap-3">
                <Star className="text-[#00a34f]" size={16} strokeWidth={1.5} fill="#00a34f" />
                <span className="text-[#00a34f] text-[0.7rem] uppercase tracking-[0.28em] font-medium">
                  Award Winning Builder
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section data-testid="services-section" className="py-24 md:py-32 bg-[#01261d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-3xl">
              <GoldRule delay={200} />
              <div className="eyebrow mt-5">What We Build</div>
              <h2
                className="mt-6 font-display text-[#f5f0e8] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Our Services
              </h2>
              <div className="mt-7"><GoldRule delay={350} /></div>
              <p className="mt-9 text-[#f5f0e8]/70 text-base md:text-lg font-light leading-[1.9]">
                Our services include everything from the design and build of custom homes, cottages, boathouses, bunkies, garages, renovations, additions, decks, docks, excavation, landscaping, demolition, backfilling, septic installation, and more.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.name} variant="scale" delay={i * 60}>
                  <div
                    data-testid={`service-card-${svc.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className="group p-8 md:p-10 border border-white/[0.12] h-full flex flex-col gap-6 transition-all duration-300 hover:border-[#00a34f] hover:-translate-y-1"
                  >
                    <Icon className="text-[#00a34f]" size={28} strokeWidth={1.5} />
                    <div className="text-[#f5f0e8] text-[0.85rem] uppercase tracking-[0.15em] font-light leading-snug">
                      {svc.name}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section data-testid="gallery-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={200} /></div>
              <div className="eyebrow mt-5">Our Work</div>
              <h2
                className="mt-6 font-display text-[#01261d] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Craftsmanship in<br />Every Detail
              </h2>
              <div className="flex justify-center mt-7"><GoldRule delay={350} /></div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { src: IMAGES.greatRoomBar, span: "md:col-span-2 md:row-span-2 aspect-[16/10]" },
              { src: IMAGES.user8, span: "aspect-[4/5]" },
              { src: IMAGES.user11, span: "aspect-[4/5]" },
              { src: IMAGES.user18, span: "md:col-span-2 aspect-[16/9]" },
              { src: IMAGES.user26, span: "aspect-[4/5]" },
              { src: IMAGES.cottageExterior, span: "aspect-[4/5]" },
            ].map((g, idx) => (
              <Reveal key={idx} variant="scale" delay={idx * 80} className={g.span}>
                <div
                  data-testid={`gallery-tile-${idx}`}
                  className="group relative w-full h-full overflow-hidden"
                >
                  <img
                    src={g.src}
                    alt="Timberline project"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#01261d]/0 group-hover:bg-[#01261d]/60 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-[#f5f0e8] text-[0.72rem] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Project
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE BANNER */}
      <section
        data-testid="experience-banner"
        className="relative py-32 md:py-44 bg-[#01261d] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns opacity-35"
          style={{ backgroundImage: `url(${IMAGES.experienceBg})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/55" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-5">Trusted For Decades</div>
            <div
              className="font-display text-[#00a34f] leading-none mt-8"
              style={{ fontSize: "clamp(6rem, 15vw, 10rem)" }}
            >
              30
            </div>
            <div className="text-[#f5f0e8] text-[0.72rem] tracking-[0.32em] uppercase mt-4">
              Years of Experience
            </div>
            <div className="flex justify-center mt-9"><GoldRule delay={350} wide /></div>
            <h2
              className="mt-9 font-display italic text-[#f5f0e8] leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Let's Build Something Extraordinary
            </h2>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section data-testid="mission-section" className="py-28 md:py-40 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-5">Our Promise</div>
            <h2
              className="mt-6 font-display text-[#01261d] leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              We create memories in the Kawarthas, not just buildings.
            </h2>
            <div className="flex justify-center mt-7"><GoldRule delay={350} /></div>
            <p className="mt-9 text-[#231f20]/85 text-base md:text-lg font-light leading-[1.9]">
              Our clients trust Timberline to creatively design and build their high quality custom project where they will pursue their dreams, raise their family, welcome their friends and retire. Building a project that represents our clients by matching their needs and aspirations creates more than just a building, but memories to extend among generations.
            </p>
            <Link
              to="/contact"
              data-testid="mission-cta-button"
              className="btn-luxury mt-12 bg-[#01261d] text-[#f5f0e8] hover:bg-[#00a34f]"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section data-testid="testimonials-section" className="py-24 md:py-32 bg-[#01261d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-5">What Our Clients Say</div>
              <h2
                className="mt-6 font-display text-[#f5f0e8] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Built on Trust
              </h2>
              <div className="flex justify-center mt-7"><GoldRule delay={350} /></div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} variant="scale" delay={i * 120}>
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="relative p-10 md:p-12 h-full flex flex-col border border-white/[0.10] overflow-hidden"
                >
                  <span
                    className="absolute -top-6 left-4 font-display leading-none pointer-events-none select-none"
                    style={{
                      fontSize: "12rem",
                      color: "rgba(0,163,79,0.10)",
                    }}
                    aria-hidden="true"
                  >
                    "
                  </span>
                  <p
                    className="relative font-display italic text-[#f5f0e8] leading-[1.55] flex-1"
                    style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)" }}
                  >
                    {t.quote}
                  </p>
                  <div className="relative mt-8">
                    <div className="h-px bg-[#00a34f] w-12 mb-5" />
                    <div className="text-[#f5f0e8]/70 text-[0.7rem] tracking-[0.22em] uppercase font-light">
                      — {t.author}, {t.location}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
