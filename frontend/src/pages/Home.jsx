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
  Award,
  Quote,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { IMAGES } from "../lib/images";
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
        className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.cottageExterior})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/45" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Reveal>
            <div className="eyebrow text-[#00a34f] mb-7">
              Kawartha's Premier Custom Builder
            </div>
            <h1 className="font-serif-display text-white text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
              Building More<br />Than Homes
            </h1>
            <p className="mt-8 text-white/85 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
              Timberline is consistently advancing our products and services, maintaining our focus on quality regardless of the size of project.
            </p>
            <Link
              to="/about"
              data-testid="hero-cta-button"
              className="inline-block mt-10 border-2 border-white text-white text-[12px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-[#00a34f] hover:border-[#00a34f] transition-colors duration-300"
            >
              Explore Our Work
            </Link>
          </Reveal>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[10px] tracking-[0.32em]">
          SCROLL
        </div>
      </section>

      {/* FOUNDATION */}
      <section data-testid="foundation-section" className="py-24 md:py-36 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={IMAGES.user7}
                alt="Custom home detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <div className="eyebrow text-[#00a34f] mb-5">Who We Are</div>
              <h2 className="font-serif-display text-[#01261d] text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Foundation of<br />Timberline
              </h2>
              <div className="w-16 h-[2px] bg-[#00a34f] my-8" />
              <p className="text-[#231f20] text-base md:text-lg leading-relaxed">
                Timberline is an award winning home builder, continuing to build our company through repeat business and referrals. We achieve our client's vision by maintaining constant honest feedback and direction, attention to detail and pride in the quality of every aspect of our projects.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Award className="text-[#00a34f]" size={28} strokeWidth={1.4} />
                <div>
                  <div className="font-serif-display text-[#01261d] text-lg">Award Winning Builder</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#231f20]/60 mt-1">Three decades of craftsmanship</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section data-testid="services-section" className="py-24 md:py-32 bg-[#01261d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-3xl">
              <div className="eyebrow text-[#00a34f] mb-5">What We Build</div>
              <h2 className="font-serif-display text-white text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Our Services
              </h2>
              <p className="mt-8 text-white/70 text-base md:text-lg leading-relaxed">
                Our services include everything from the design and build of custom homes, cottages, boathouses, bunkies, garages, renovations, additions, decks, docks, excavation, landscaping, demolition, backfilling, septic installation, and more.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.name} delay={i * 40}>
                  <div
                    data-testid={`service-card-${svc.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className="group bg-[#01261d] p-10 lg:p-12 h-full flex flex-col gap-6 transition-all duration-300 hover:bg-[#012e23]"
                  >
                    <Icon className="text-[#00a34f]" size={32} strokeWidth={1.2} />
                    <div className="font-serif-display text-white text-2xl tracking-tight">
                      {svc.name}
                    </div>
                    <div className="w-0 group-hover:w-12 h-[2px] bg-[#00a34f] transition-all duration-500" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section data-testid="gallery-section" className="py-24 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow text-[#00a34f] mb-5">Our Work</div>
              <h2 className="font-serif-display text-[#01261d] text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Craftsmanship in Every Detail
              </h2>
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
              <Reveal key={idx} delay={idx * 60} className={g.span}>
                <div
                  data-testid={`gallery-tile-${idx}`}
                  className="group relative w-full h-full overflow-hidden cursor-pointer"
                >
                  <img
                    src={g.src}
                    alt="Timberline project"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#01261d]/0 group-hover:bg-[#01261d]/55 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-[#00a34f] text-[11px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
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
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${IMAGES.experienceBg})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="font-serif-display text-[#00a34f] text-[140px] md:text-[200px] leading-none tracking-tight">
              30
            </div>
            <div className="eyebrow text-white/80 mt-2">Years of Experience</div>
            <div className="w-16 h-[2px] bg-[#00a34f] mx-auto my-10" />
            <h2 className="font-serif-display text-white text-3xl md:text-5xl leading-[1.1] tracking-tight">
              Let's Build Something Extraordinary
            </h2>
          </Reveal>
        </div>
      </section>

      {/* MISSION / MEMORIES */}
      <section data-testid="mission-section" className="py-28 md:py-40 bg-[#F9F7F4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="eyebrow text-[#00a34f] mb-6">Our Promise</div>
            <h2 className="font-serif-display text-[#01261d] text-3xl md:text-5xl leading-[1.15] tracking-tight">
              We create memories in the Kawarthas, not just buildings.
            </h2>
            <p className="mt-10 text-[#231f20]/80 text-base md:text-lg leading-relaxed">
              Our clients trust Timberline to creatively design and build their high quality custom project where they will pursue their dreams, raise their family, welcome their friends and retire. Building a project that represents our clients by matching their needs and aspirations creates more than just a building, but memories to extend among generations.
            </p>
            <Link
              to="/contact"
              data-testid="mission-cta-button"
              className="inline-block mt-12 bg-[#00a34f] text-white text-[12px] tracking-[0.28em] uppercase px-12 py-4 hover:bg-[#01261d] transition-colors duration-300"
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
              <div className="eyebrow text-[#00a34f] mb-5">Client Words</div>
              <h2 className="font-serif-display text-white text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Built on Trust
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="border border-white/10 p-10 h-full flex flex-col bg-[#012e23]/40 transition-colors duration-500 hover:border-[#00a34f]/40"
                >
                  <Quote className="text-[#00a34f]" size={28} strokeWidth={1.4} />
                  <p className="mt-6 font-serif-display text-white/90 text-lg md:text-xl italic leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="text-white text-sm font-medium">{t.author}</div>
                    <div className="text-white/60 text-xs tracking-[0.2em] uppercase mt-1">
                      {t.location}
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
