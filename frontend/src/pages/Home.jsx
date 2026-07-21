import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import HeroSlider from "../components/HeroSlider";
import ServiceCards from "../components/ServiceCards";
import ScrollingGallery from "../components/ScrollingGallery";
import { IMAGES, PORTFOLIO_PROJECTS } from "../lib/images";
import { TESTIMONIALS } from "../lib/team";

const Home = () => {
  return (
    <main data-testid="home-page">
      <HeroSlider />

      {/* BRAND STATEMENT — intro to What We Offer */}
      <section data-testid="memories-intro" className="pt-24 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">Our Promise</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-[1.1] tracking-tight uppercase"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.6rem)" }}
            >
              We create memories in the Kawarthas,<br />not just buildings.
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            <p className="mt-9 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
              Our clients trust Timberline to creatively design and build their high quality custom project where they will pursue their dreams, raise their family, welcome their friends and retire. Building a project that represents our clients by matching their needs and aspirations creates more than just a building, but memories to extend among generations.
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceCards />

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
            <div className="eyebrow eyebrow-light mt-7">A Complete Design-Build Experience</div>
            <h2
              className="mt-9 font-display text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.6rem)" }}
            >
              From concept to keys — one team, one standard.
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <p className="mt-10 text-white/85 text-base md:text-lg font-light leading-[2] max-w-3xl mx-auto">
              At Timberline, we deliver a complete design-build experience, guiding clients through every stage of their project — from the initial concept to the finishing touches.
            </p>
            <Link to="/about" data-testid="memories-cta" className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-white hover:border-[#c9a96e]">
              Learn About Us
            </Link>
          </Reveal>
        </div>
      </section>

      <ScrollingGallery />

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 120}>
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="bg-white p-10 md:p-12 flex flex-col border border-[#c9a96e]/20"
                >
                  <div className="font-display text-[#c9a96e] text-6xl leading-none mb-2" aria-hidden="true">&ldquo;</div>
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
