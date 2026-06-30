import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import { IMAGES, BANNER_INTERIOR, PORTFOLIO_PROJECTS } from "../lib/images";
import { TESTIMONIALS, FEATURED_TESTIMONIAL } from "../lib/team";

const SERVICES = [
  {
    eyebrow: "Custom Homes",
    image: IMAGES.cottageExterior,
    title: "Define Your Legacy with a Custom Home in the Kawarthas",
    body: "From your home's architectural style to the interior design, we infuse your vision into every detail. Choose everything from your floor plan, building materials, smart home technology, and sustainable elements. This custom home is your crowning achievement. Build it with Timberline.",
    cta: "Explore Custom Homes",
    href: "/our-process",
  },
  {
    eyebrow: "Lakefront Cottages",
    image: BANNER_INTERIOR,
    title: "Create the Ultimate Lakefront Cottage Experience",
    body: "Envision your own vacation cottage on remote lake shores surrounded by beautiful natural landscape. This secluded haven is your escape from the stresses of urban living and a place for rejuvenation. Build your personal retreat with Timberline.",
    cta: "Explore Cottages",
    href: "/our-process",
  },
  {
    eyebrow: "Boathouses",
    image: IMAGES.user8,
    title: "Upgrade Your Waterfront with a Custom Boathouse",
    body: "Transform your home into the ultimate lakefront destination. With decades of experience in lakefront construction, we have become experts in custom boathouses, docks, and waterside living — built to last on Kawartha lakes.",
    cta: "Explore Boathouses",
    href: "/our-process",
  },
  {
    eyebrow: "Renovations",
    image: IMAGES.greatRoomBar,
    title: "Reimagine Your Space with Renovations & Additions",
    body: "A renovation or new addition can breathe new life into your home, cottage, or boathouse. We craft each detail to reflect your vision and current lifestyle. Enjoy a renewed sense of energy with a custom renovation by Timberline.",
    cta: "Explore Renovations",
    href: "/our-process",
  },
];

const PROCESS = [
  { n: "01", title: "Share Your Vision",     body: "We collaborate with you to understand your vision and curate ideas based on your budget. This allows us to formulate plans with achievable outcomes." },
  { n: "02", title: "Concept Development",   body: "Our designers and architectural technologists create custom concepts that embody your vision — detailed plans, specifications, and a clear path forward." },
  { n: "03", title: "Finishing Selection",   body: "Choose the final touches that define the character of your space. Every detail is selected to align with your personal style and the overall design theme." },
  { n: "04", title: "Build Your Project",    body: "We initiate construction and manage the entire project from start to finish, keeping you well-informed every step of the way." },
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#01261d]/30 via-transparent to-[#01261d]/80" />

        <div className="relative z-10 text-center px-6 max-w-6xl pb-28 md:pb-40">
          <Reveal>
            <div className="font-script text-[#c9a96e] text-2xl md:text-3xl leading-none mb-5">
              Timberline Custom Homes
            </div>
            <h1
              className="font-display text-white leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 9vw, 8rem)" }}
            >
              Custom Home Builders<br />in the Kawarthas
            </h1>
            <div className="flex justify-center mt-10">
              <GoldRule delay={400} wide />
            </div>
            <p
              className="mt-10 font-display italic text-white/90 leading-tight"
              style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.2rem)" }}
            >
              Building More Than Homes
            </p>
            <p className="mt-7 text-white/80 text-sm md:text-base font-light leading-[1.9] max-w-xl mx-auto tracking-wide">
              Timberline is consistently advancing our products and services, maintaining our focus on quality regardless of the size of project.
            </p>
            <Link
              to="/contact"
              data-testid="hero-cta-button"
              className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-[#01261d] hover:border-[#c9a96e]"
            >
              Begin a Conversation
            </Link>
          </Reveal>
        </div>

        {/* Experience badge */}
        <div
          data-testid="hero-experience-badge"
          className="absolute top-24 md:top-28 right-6 md:right-10 z-10 flex items-center gap-3 border border-[#c9a96e]/60 bg-[#01261d]/40 backdrop-blur-sm px-5 py-3 rounded-full"
        >
          <span className="font-display text-[#c9a96e] text-2xl md:text-3xl leading-none">30+</span>
          <span className="text-white text-[0.62rem] md:text-[0.68rem] tracking-[0.26em] uppercase font-light leading-snug max-w-[8ch]">
            Years<br />Experience
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">Timberline Custom Homes</div>
            <h2
              className="mt-9 font-display text-[#01261d] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Design-Build Services for<br />Homes of Distinction
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <p className="mt-10 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
              With over thirty years of experience, we have mastered the art of custom home building and bespoke construction. Our passion for creative design and exceptional craftsmanship ensures your project redefines luxury living. Build a home that's a living, breathing reflection of you.
            </p>
            <Link to="/contact" data-testid="intro-cta-button" className="btn-pill mt-14">
              Schedule a Call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ALTERNATING SERVICE BLOCKS — full-bleed magazine layout */}
      {SERVICES.map((svc, idx) => {
        const reverse = idx % 2 === 1;
        const bg = idx % 2 === 0 ? "bg-[#fafaf7]" : "bg-white";
        return (
          <section
            key={svc.title}
            data-testid={`service-block-${idx}`}
            className={`${bg} relative overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[80vh]">
              <Reveal
                variant={reverse ? "right" : "left"}
                className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
              >
                <div className="relative h-[60vh] lg:h-full min-h-[480px] overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal
                variant={reverse ? "left" : "right"}
                delay={120}
                className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""} flex items-center`}
              >
                <div className="px-6 md:px-14 py-16 lg:py-24 max-w-xl mx-auto">
                  <GoldRule delay={200} />
                  <div className="eyebrow mt-6">{svc.eyebrow}</div>
                  <h3
                    className="mt-6 font-display text-[#01261d] leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(1.9rem, 3.4vw, 3.2rem)" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="mt-8 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
                    {svc.body}
                  </p>
                  <Link
                    to={svc.href}
                    data-testid={`service-cta-${idx}`}
                    className="btn-pill mt-10"
                  >
                    {svc.cta}
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* HANDCRAFTED LUXURY — dark editorial banner */}
      <section className="relative py-36 md:py-52 bg-[#01261d] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns opacity-25"
          style={{ backgroundImage: `url(${IMAGES.experienceBg})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} wide /></div>
            <div className="eyebrow eyebrow-light mt-7">Our Philosophy</div>
            <h2
              className="mt-9 font-display text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            >
              Merging Handcrafted Luxury<br />With Sustainable Elegance
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            <p className="mt-10 text-white/80 text-base md:text-lg font-light leading-[2]">
              With over thirty years of building custom homes, we have become experts in the construction processes for Ontario's great outdoors. Our design-build experts create architectural masterpieces in harmony with nature. Experience a lifestyle others only dream of with a custom build by Timberline.
            </p>
            <Link to="/contact" data-testid="luxury-cta-button" className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-[#01261d] hover:border-[#c9a96e]">
              Schedule a Call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL — large editorial pull-quote */}
      <section data-testid="featured-testimonial" className="py-32 md:py-44 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="font-display text-[#c9a96e] text-8xl md:text-9xl leading-none mb-2" aria-hidden="true">"</div>
            <p
              className="font-display italic text-[#01261d] leading-[1.45]"
              style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.2rem)" }}
            >
              {FEATURED_TESTIMONIAL.quote}
            </p>
            <div className="mt-12 flex justify-center"><GoldRule delay={200} /></div>
            <div className="mt-8 text-[#3a3531] text-sm font-medium tracking-wide">
              — {FEATURED_TESTIMONIAL.author}
            </div>
            <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[#c9a96e] mt-2">
              {FEATURED_TESTIMONIAL.location}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRANSFORM YOUR VISION — collage with bigger images */}
      <section className="py-32 md:py-44 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal variant="left" className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-5 md:gap-7">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={IMAGES.user11} alt="Timberline craftsmanship" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-[3/4] overflow-hidden mt-14">
                <img src={IMAGES.user18} alt="Timberline craftsmanship" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="lg:col-span-5 lg:pl-6">
            <div>
              <GoldRule delay={200} />
              <div className="eyebrow mt-6">Our Approach</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)" }}
              >
                Transform Your Vision Into an Architectural Masterpiece
              </h2>
              <p className="mt-9 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
                When you build with us, we treat you like family. Our approach to custom home building provides you with next-level customization. We deliver a personalized experience with the highest standards of quality, luxury, and craftsmanship. Live an inspired life with a custom build by Timberline.
              </p>
              <Link to="/contact" data-testid="transform-cta-button" className="btn-pill mt-10">
                Schedule a Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW — bigger 2-up + 1-up layout */}
      <section data-testid="portfolio-preview" className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">Selected Work</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
              >
                View Our Portfolio<br />of Luxury Homes
              </h2>
              <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {PORTFOLIO_PROJECTS.slice(0, 2).map((p, i) => (
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
                  <div className="mt-7">
                    <div className="eyebrow">{p.category}</div>
                    <h3 className="mt-4 font-display text-[#01261d] text-3xl leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-5 flex items-center gap-2 text-[0.72rem] tracking-[0.28em] uppercase text-[#c9a96e]">
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

      {/* PROCESS */}
      <section data-testid="process-section" className="py-32 md:py-44 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">A Simple Process</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
              >
                Build Your Vision With<br />a Simple Process
              </h2>
              <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-12">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div data-testid={`home-process-${s.n}`}>
                  <div
                    className="font-display text-[#c9a96e] leading-none tracking-tight"
                    style={{ fontSize: "clamp(3.5rem, 6.5vw, 5.5rem)" }}
                  >
                    {s.n}
                  </div>
                  <div className="mt-5"><GoldRule delay={200} /></div>
                  <h3 className="mt-6 font-display text-[#01261d] text-2xl md:text-3xl leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-6 text-[#3a3531] text-sm md:text-base font-light leading-[1.95]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS LIST */}
      <section data-testid="testimonials-section" className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">Client Stories</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
              >
                Our Valued Clients<br />Tell Their Stories
              </h2>
              <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 120}>
                <div data-testid={`testimonial-card-${i}`}>
                  <div className="font-display text-[#c9a96e] text-6xl leading-none mb-2" aria-hidden="true">"</div>
                  <p className="font-display italic text-[#01261d] text-xl leading-[1.55]">
                    {t.quote}
                  </p>
                  <div className="mt-8"><GoldRule delay={200} /></div>
                  <div className="mt-7 text-[#3a3531] text-sm font-medium">— {t.author}</div>
                  <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[#c9a96e] mt-1.5">
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
