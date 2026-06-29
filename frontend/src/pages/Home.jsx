import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import { IMAGES, BANNER_INTERIOR, PORTFOLIO_PROJECTS } from "../lib/images";
import { TESTIMONIALS, FEATURED_TESTIMONIAL } from "../lib/team";

const SERVICES = [
  {
    image: IMAGES.cottageExterior,
    title: "Define Your Legacy with a Custom Home in the Kawarthas",
    body: "From your home's architectural style to the interior design, we infuse your vision into every detail. Choose everything from your floor plan, building materials, smart home technology, and sustainable elements. This custom home is your crowning achievement. Build it with Timberline.",
    cta: "View Services",
    href: "/our-process",
  },
  {
    image: BANNER_INTERIOR,
    title: "Create the Ultimate Lakefront Cottage Experience",
    body: "Envision your own vacation cottage on remote lake shores surrounded by beautiful natural landscape. This secluded haven is your escape from the stresses of urban living and a place for rejuvenation. Build your personal retreat with Timberline.",
    cta: "View Services",
    href: "/our-process",
  },
  {
    image: IMAGES.user8,
    title: "Upgrade Your Waterfront With a Custom Boathouse",
    body: "Transform your home into the ultimate lakefront destination. With decades of experience in lakefront construction, we have become experts in custom boathouses, docks, and waterside living — built to last on Kawartha lakes.",
    cta: "View Services",
    href: "/our-process",
  },
  {
    image: IMAGES.greatRoomBar,
    title: "Reimagine Your Space with Renovations & Additions",
    body: "A renovation or new addition can breathe new life into your home, cottage, or boathouse. We craft each detail to reflect your vision and current lifestyle. Enjoy a renewed sense of energy with a custom renovation by Timberline.",
    cta: "View Services",
    href: "/our-process",
  },
];

const PROCESS = [
  { n: "1", title: "Share Your Vision",     body: "We collaborate with you to understand your vision and curate ideas based on your budget. This allows us to formulate plans with achievable outcomes." },
  { n: "2", title: "Concept Development",   body: "Our designers and architectural technologists create custom concepts that embody your vision — detailed plans, specifications, and a clear path forward." },
  { n: "3", title: "Finishing Selection",   body: "Choose the final touches that define the character of your space. Every detail is selected to align with your personal style and the overall design theme." },
  { n: "4", title: "Build Your Project",    body: "We initiate construction and manage the entire project from start to finish, keeping you well-informed every step of the way." },
];

const Home = () => {
  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen w-full flex items-end justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{ backgroundImage: `url(${IMAGES.cottageExterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c2926]/40 via-[#2c2926]/25 to-[#2c2926]/70" />

        <div className="relative z-10 text-center px-6 max-w-5xl pb-28 md:pb-36">
          <Reveal>
            <div className="font-script text-[#d4c4a8] text-2xl md:text-3xl leading-none mb-4">
              Timberline Custom Homes
            </div>
            <h1
              className="font-display text-[#f4eee4] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)" }}
            >
              Custom Home Builders<br />in the Kawarthas
            </h1>
            <div className="flex justify-center mt-9">
              <GoldRule delay={300} wide />
            </div>
            <p
              className="mt-8 font-display italic text-[#f4eee4]/90 leading-tight"
              style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
            >
              Building More Than Homes
            </p>
            <p className="mt-6 text-[#f4eee4]/75 text-sm md:text-base font-light leading-[1.85] max-w-xl mx-auto">
              Timberline is consistently advancing our products and services, maintaining our focus on quality regardless of the size of project.
            </p>
            <Link
              to="/contact"
              data-testid="hero-cta-button"
              className="btn-pill mt-10 border-[#d4c4a8] text-[#f4eee4] hover:bg-[#b89d77] hover:text-[#f4eee4] hover:border-[#b89d77]"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>

        {/* 30+ Years badge */}
        <div
          data-testid="hero-experience-badge"
          className="absolute top-24 md:top-28 right-6 md:right-10 z-10 flex items-center gap-3 border border-[#d4c4a8]/60 bg-[#2c2926]/30 backdrop-blur-sm px-5 py-3 rounded-full"
        >
          <span className="font-display text-[#d4c4a8] text-2xl md:text-3xl leading-none">30+</span>
          <span className="text-[#f4eee4] text-[0.62rem] md:text-[0.68rem] tracking-[0.26em] uppercase font-light leading-snug max-w-[8ch]">
            Years<br />Experience
          </span>
        </div>
      </section>

      {/* INTRO — Design-Build Services */}
      <section className="py-24 md:py-32 bg-[#f4eee4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-5">Timberline Custom Homes</div>
            <h2
              className="mt-7 font-display text-[#2c2926] leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Design-Build Services for<br />Homes of Distinction
            </h2>
            <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            <p className="mt-9 text-[#3a3531]/85 text-base md:text-lg font-light leading-[1.9]">
              With over thirty years of experience, we have mastered the art of custom home building and bespoke construction. Our passion for creative design and exceptional craftsmanship ensures your project redefines luxury living. Build a home that's a living, breathing reflection of you.
            </p>
            <Link
              to="/contact"
              data-testid="intro-cta-button"
              className="btn-pill mt-12"
            >
              Schedule a Call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ALTERNATING SERVICE BLOCKS */}
      {SERVICES.map((svc, idx) => {
        const reverse = idx % 2 === 1;
        const bg = idx % 2 === 0 ? "bg-[#f4eee4]" : "bg-[#efe8d9]";
        return (
          <section
            key={svc.title}
            data-testid={`service-block-${idx}`}
            className={`${bg} py-20 md:py-28`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal
                variant={reverse ? "right" : "left"}
                className={reverse ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal
                variant={reverse ? "left" : "right"}
                delay={120}
                className={reverse ? "lg:order-1 lg:pr-6" : "lg:pl-6"}
              >
                <div>
                  <GoldRule delay={200} />
                  <h3
                    className="mt-6 font-display text-[#2c2926] leading-[1.15] tracking-tight"
                    style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="mt-7 text-[#3a3531]/85 text-base md:text-lg font-light leading-[1.9]">
                    {svc.body}
                  </p>
                  <Link
                    to={svc.href}
                    data-testid={`service-cta-${idx}`}
                    className="btn-pill mt-9"
                  >
                    {svc.cta}
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* HANDCRAFTED LUXURY — centered editorial */}
      <section className="py-28 md:py-36 bg-[#f4eee4] relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} wide /></div>
            <h2
              className="mt-9 font-display text-[#2c2926] leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}
            >
              Merging Handcrafted Luxury<br />With Sustainable Elegance
            </h2>
            <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            <p className="mt-9 text-[#3a3531]/85 text-base md:text-lg font-light leading-[1.9]">
              With over thirty years of building custom homes, we have become experts in the construction processes for Ontario's great outdoors. Our design-build experts create architectural masterpieces in harmony with nature. Experience a lifestyle others only dream of with a custom build by Timberline.
            </p>
            <Link to="/contact" data-testid="luxury-cta-button" className="btn-pill mt-12">
              Schedule a Call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL — centered, simple */}
      <section data-testid="featured-testimonial" className="py-24 md:py-32 bg-[#efe8d9]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="font-display text-[#b89d77] text-7xl leading-none mb-2" aria-hidden="true">"</div>
            <p
              className="font-display italic text-[#2c2926] leading-[1.55]"
              style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
            >
              {FEATURED_TESTIMONIAL.quote}
            </p>
            <div className="mt-9 flex justify-center"><GoldRule delay={200} /></div>
            <div className="mt-7 text-[#3a3531] text-sm font-medium tracking-wide">
              — {FEATURED_TESTIMONIAL.author}
            </div>
            <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[#b89d77] mt-1">
              {FEATURED_TESTIMONIAL.location}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRANSFORM YOUR VISION — two-image collage */}
      <section className="py-24 md:py-32 bg-[#f4eee4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal variant="left">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={IMAGES.user11} alt="Timberline craftsmanship" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-[3/4] overflow-hidden mt-10">
                <img src={IMAGES.user18} alt="Timberline craftsmanship" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="lg:pl-6">
            <div>
              <GoldRule delay={200} />
              <h2
                className="mt-6 font-display text-[#2c2926] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}
              >
                Transform Your Vision Into an<br />Architectural Masterpiece
              </h2>
              <p className="mt-8 text-[#3a3531]/85 text-base md:text-lg font-light leading-[1.9]">
                When you build with us, we treat you like family. Our approach to custom home building provides you with next-level customization. We deliver a personalized experience with the highest standards of quality, luxury, and craftsmanship. Live an inspired life with a custom build by Timberline.
              </p>
              <Link to="/contact" data-testid="transform-cta-button" className="btn-pill mt-9">
                Schedule a Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section data-testid="portfolio-preview" className="py-24 md:py-32 bg-[#efe8d9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-5">Selected Work</div>
              <h2
                className="mt-6 font-display text-[#2c2926] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                View Our Portfolio<br />of Luxury Homes
              </h2>
              <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} variant="scale" delay={i * 120}>
                <Link
                  to="/portfolio"
                  data-testid={`portfolio-preview-card-${i}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="eyebrow">{p.category}</div>
                    <h3 className="mt-3 font-display text-[#2c2926] text-2xl leading-tight group-hover:text-[#b89d77] transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-[0.72rem] tracking-[0.24em] uppercase text-[#b89d77]">
                      <span>View Project</span>
                      <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/portfolio" data-testid="portfolio-preview-cta" className="btn-pill">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS — big numbered */}
      <section data-testid="process-section" className="py-24 md:py-32 bg-[#f4eee4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-5">A Simple Process</div>
              <h2
                className="mt-6 font-display text-[#2c2926] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Build Your Vision With<br />a Simple Process
              </h2>
              <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-14">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div data-testid={`home-process-${s.n}`}>
                  <div
                    className="font-script text-[#b89d77] leading-none"
                    style={{ fontSize: "clamp(4rem, 7vw, 6rem)" }}
                  >
                    {s.n}.
                  </div>
                  <h3 className="mt-4 font-display text-[#2c2926] text-2xl leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-[#3a3531]/80 text-sm font-light leading-[1.9]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS LIST */}
      <section data-testid="testimonials-section" className="py-24 md:py-32 bg-[#efe8d9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-5">Client Stories</div>
              <h2
                className="mt-6 font-display text-[#2c2926] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Our Valued Clients<br />Tell Their Stories
              </h2>
              <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <div data-testid={`testimonial-card-${i}`} className="text-center md:text-left">
                  <div className="font-display text-[#b89d77] text-5xl leading-none mb-2" aria-hidden="true">"</div>
                  <p className="font-display italic text-[#2c2926] text-lg leading-[1.6]">
                    {t.quote}
                  </p>
                  <div className="mt-7"><GoldRule delay={200} /></div>
                  <div className="mt-6 text-[#3a3531] text-sm font-medium">— {t.author}</div>
                  <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[#b89d77] mt-1">
                    {t.location}
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
