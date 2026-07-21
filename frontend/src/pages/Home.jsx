import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  ClipboardCheck,
  Home as HomeIcon,
  Hammer,
  Building2,
  Warehouse,
  Truck,
} from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import { IMAGES, BANNER_INTERIOR, PORTFOLIO_PROJECTS } from "../lib/images";
import { TESTIMONIALS } from "../lib/team";

const SLIDES = [
  { image: IMAGES.cottageExterior, alt: "Custom lakefront cottage exterior" },
  { image: BANNER_INTERIOR,        alt: "Great room with timber beams" },
  { image: IMAGES.user7,           alt: "Timberline custom home detail" },
  { image: IMAGES.user18,          alt: "Kawartha lakefront living" },
];

const OFFERINGS = [
  { icon: Compass,        name: "Custom Design",           image: IMAGES.greatRoomBar,   body: "In-house architectural design tailored to your land and lifestyle." },
  { icon: ClipboardCheck, name: "Planning & Permitting",   image: IMAGES.processHero,    body: "We manage every permit, conservation and municipal approval." },
  { icon: HomeIcon,       name: "Custom Builds",           image: IMAGES.cottageExterior,body: "Homes, cottages, boathouses, bunkies and garages — one crew, one standard." },
  { icon: Hammer,         name: "Renovations & Additions", image: IMAGES.user18,         body: "Reimagine an existing home or expand it with sensitivity to what's already there." },
  { icon: Building2,      name: "Commercial Builds",       image: IMAGES.shopBuild,      body: "Purpose-built commercial spaces with the same craft as our residential work." },
  { icon: Warehouse,      name: "Storage Rentals",         image: IMAGES.user11,         body: "Clean, secure Woodview storage units for seasonal, boat and contractor use." },
  { icon: Truck,          name: "Heavy Equipment",         image: IMAGES.experienceBg,   body: "In-house excavation, septic, landscaping and site services." },
];

const MARQUEE = [
  IMAGES.cottageExterior, BANNER_INTERIOR, IMAGES.user7, IMAGES.user8,
  IMAGES.user11, IMAGES.user18, IMAGES.user26, IMAGES.greatRoomBar,
];

const Home = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <main data-testid="home-page">
      {/* HERO SLIDER */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen w-full flex items-end justify-center overflow-hidden"
      >
        {SLIDES.map((s, i) => (
          <div
            key={s.image}
            data-testid={`hero-slide-${i}`}
            className={`absolute inset-0 bg-cover bg-center slide ${
              i === slide ? "active ken-burns" : ""
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden={i !== slide}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#01261d]/40 via-transparent to-[#01261d]/85" />

        <div className="relative z-10 text-center px-6 max-w-6xl pb-40 md:pb-52">
          <Reveal>
            <div className="eyebrow eyebrow-light mb-8">
              Custom Design and Build
            </div>
            <h1
              className="font-display text-white leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(3rem, 8.5vw, 7.5rem)" }}
            >
              Building with <em className="text-[#c9a96e] not-italic font-medium">Nature.</em>
            </h1>
            <div className="flex justify-center mt-10">
              <GoldRule delay={400} wide />
            </div>
            <p className="mt-8 text-white/85 text-[0.72rem] md:text-[0.78rem] tracking-[0.32em] uppercase font-light">
              Peterborough + Kawarthas
            </p>
            <Link
              to="/what-we-offer"
              data-testid="hero-cta-button"
              className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-white hover:border-[#c9a96e]"
            >
              Our Services
            </Link>
          </Reveal>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              data-testid={`hero-slide-dot-${i}`}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                i === slide ? "w-10 bg-[#c9a96e]" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Water ripple SVG wave */}
        <svg
          className="absolute -bottom-px left-0 right-0 w-full h-16 md:h-20 z-10"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,40 C240,80 480,10 720,40 C960,70 1200,20 1440,50 L1440,80 L0,80 Z"
            fill="#ffffff"
            opacity="0.9"
          />
          <path
            d="M0,55 C240,90 480,30 720,55 C960,80 1200,40 1440,60 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* COMPLETE SERVICE INTRO */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">Complete Service</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)" }}
            >
              A Full Design-Build Experience
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            <p className="mt-9 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
              At Timberline, we deliver a complete design-build experience, guiding clients through every stage of their project — from the initial concept to the finishing touches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE OFFER GRID */}
      <section data-testid="what-we-offer-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">What We Offer</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
              >
                Every Discipline. One Roof.
              </h2>
              <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {OFFERINGS.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.name} variant="scale" delay={(i % 3) * 100}>
                  <Link
                    to="/what-we-offer"
                    data-testid={`offering-card-${o.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="group relative block aspect-[4/5] overflow-hidden"
                  >
                    <img
                      src={o.image}
                      alt={o.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01261d]/90 via-[#01261d]/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <Icon className="text-[#c9a96e] mb-4" size={26} strokeWidth={1.4} />
                      <div className="eyebrow eyebrow-light mb-2">{o.name}</div>
                      <h3 className="font-display text-white text-2xl md:text-[1.75rem] leading-tight">
                        {o.body}
                      </h3>
                      <div className="mt-4 h-[2px] w-8 bg-[#c9a96e] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/what-we-offer" data-testid="what-we-offer-cta" className="btn-pill">
              See What We Offer
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE — full-width dark banner */}
      <section data-testid="memories-section" className="relative py-36 md:py-52 bg-[#01261d] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns opacity-40"
          style={{ backgroundImage: `url(${IMAGES.experienceBg})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} wide /></div>
            <div className="eyebrow eyebrow-light mt-7">Our Promise</div>
            <h2
              className="mt-9 font-display text-white leading-[1.1] tracking-tight uppercase"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.6rem)" }}
            >
              We create memories in the Kawarthas,<br />not just buildings.
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <p className="mt-10 text-white/85 text-base md:text-lg font-light leading-[2] max-w-3xl mx-auto">
              Our clients trust Timberline to creatively design and build their high quality custom project where they will pursue their dreams, raise their family, welcome their friends and retire. Building a project that represents our clients by matching their needs and aspirations creates more than just a building, but memories to extend among generations.
            </p>
            <Link to="/about" data-testid="memories-cta" className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-white hover:border-[#c9a96e]">
              Learn About Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROJECT MARQUEE */}
      <section data-testid="project-marquee" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">Selected Work</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
            >
              Craftsmanship in Every Detail
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
          </Reveal>
        </div>

        <div className="relative w-full marquee-pause">
          <div className="flex marquee gap-6 will-change-transform">
            {[...MARQUEE, ...MARQUEE].map((src, i) => (
              <div
                key={`m-${i}`}
                data-testid={`marquee-tile-${i}`}
                className="relative shrink-0 w-[280px] md:w-[400px] lg:w-[480px] aspect-[4/3] overflow-hidden group"
              >
                <img
                  src={src}
                  alt="Timberline project"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#01261d]/0 group-hover:bg-[#01261d]/45 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/portfolio" data-testid="marquee-cta" className="btn-pill">
            View Portfolio
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section data-testid="testimonials-section" className="py-28 md:py-36 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">Client Stories</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
              >
                What Clients Are Saying
              </h2>
              <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 120}>
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="bg-white p-10 md:p-12 h-full flex flex-col border border-[#c9a96e]/20"
                >
                  <div className="font-display text-[#c9a96e] text-6xl leading-none mb-2" aria-hidden="true">"</div>
                  <p className="font-display italic text-[#01261d] text-lg md:text-xl leading-[1.6] flex-1">
                    {t.quote}
                  </p>
                  <div className="mt-8"><GoldRule delay={200} /></div>
                  <div className="mt-6 text-[#2b2622] text-sm font-medium">— {t.author}</div>
                  <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[#c9a96e] mt-1.5">
                    {t.location}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN BUILD CLOSING SECTION */}
      <section
        data-testid="design-build-closing"
        className="relative py-40 md:py-56 bg-[#01261d] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns opacity-35"
          style={{ backgroundImage: `url(${PORTFOLIO_PROJECTS[0]?.image || IMAGES.cottageExterior})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/65" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} wide /></div>
            <div className="eyebrow eyebrow-light mt-7">The Complete Process</div>
            <h2
              className="mt-9 font-display text-white leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Design<span className="text-[#c9a96e] mx-4 md:mx-6">·</span>Build
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <p className="mt-9 font-display italic text-white/85 text-xl md:text-2xl">
              Concept · Design · Permitting · Construction · Finishing
            </p>
            <p className="mt-8 text-white/70 text-base md:text-lg font-light leading-[2] max-w-2xl mx-auto">
              Building with Nature.  Since 1989.
            </p>
            <Link
              to="/portfolio"
              data-testid="design-build-cta"
              className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-white hover:border-[#c9a96e]"
            >
              See Our Work
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
