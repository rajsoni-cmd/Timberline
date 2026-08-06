import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import HeroSlider from "../components/HeroSlider";
import ServiceCards from "../components/ServiceCards";
import ScrollingGallery from "../components/ScrollingGallery";
import TestimonialCard from "../components/TestimonialCard";
import FAQ from "../components/FAQ";
import { IMAGES } from "../lib/images";
import { TESTIMONIALS } from "../lib/team";

const Home = () => {
  return (
    <main data-testid="home-page">
      <HeroSlider />

      {/* BRAND STATEMENT — intro to What We Offer */}
      <section data-testid="memories-intro" className="pt-16 md:pt-20 pb-10 md:pb-12 bg-white">
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

      {/* COMPLETE SERVICE — long-form brand story */}
      <section
        data-testid="complete-service-section"
        className="py-14 md:py-20 bg-[#f5f0e6]"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">Our Approach</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.1] tracking-tight uppercase"
                style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)" }}
              >
                Complete Service
              </h2>
              <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            </div>

            <div className="space-y-8 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
              <p>
                Timberline provides our <span className="italic font-medium">"complete service"</span> for designing and building your envisioned project by partnering with our clients each step of the way — from the concept stage to developing the plans, obtaining permits and variances, engineering, excavation, to the final finished product including services and landscaping. Timberline designs and builds all sizes of projects, including homes, cottages, renovations, additions, bunkies, garages, boathouses, docks and more. Introducing heavy equipment has expanded our services to site preparation, demolition, excavation, backfilling, road building, septic installation and landscaping — ultimately developing our clients' projects from the ground up.
              </p>
              <p>
                Our reputation and referrals help form a trust that brings the Timberline team and clients together to reach a common goal of a unique, quality build. We are constantly advancing our products and services, maintaining our focus on quality regardless of the size of the project. Timberline exceeds building code standards to ensure that each project is energy efficient and dependable. Enrolled with Tarion Home Warranty since being established in 1989, we reassure our clients that we stand behind our projects.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceCards />

      <ScrollingGallery />

      {/* TESTIMONIALS */}
      <section data-testid="testimonials-section" className="py-16 md:py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <h2
                className="mt-8 font-display text-[#01261d] leading-tight tracking-tight uppercase"
                style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
              >
                Client Stories
              </h2>
              <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.author} testimonial={t} index={i} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/testimonials"
              data-testid="all-testimonials-cta"
              className="btn-pill"
            >
              Read More Client Stories
            </Link>
          </div>
        </div>
      </section>

      <FAQ />

      {/* DESIGN BUILD CLOSING SECTION */}
      <section
        data-testid="design-build-closing"
        className="relative py-24 md:py-32 bg-[#01261d] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns opacity-40"
          style={{ backgroundImage: `url(${IMAGES.designBuildClosing})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/65" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} wide /></div>
            <div className="eyebrow eyebrow-light mt-7">The Complete Process</div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-16 items-center">
              {/* Design side */}
              <div className="md:text-right md:pr-8 md:border-r md:border-[#c9a96e]/40">
                <h2
                  className="font-display text-white leading-[0.95] tracking-tight"
                  style={{ fontSize: "clamp(3rem, 7.5vw, 6rem)" }}
                >
                  Design<span className="text-[#c9a96e]">.</span>
                </h2>
                <p className="mt-6 font-display italic text-white/90 text-lg md:text-xl lg:text-2xl">
                  Building with Nature.
                </p>
              </div>

              {/* Build side */}
              <div className="md:text-left md:pl-8">
                <h2
                  className="font-display text-white leading-[0.95] tracking-tight"
                  style={{ fontSize: "clamp(3rem, 7.5vw, 6rem)" }}
                >
                  Build<span className="text-[#c9a96e]">.</span>
                </h2>
                <p className="mt-6 font-display italic text-white/90 text-lg md:text-xl lg:text-2xl">
                  Since 1989.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-14"><GoldRule delay={300} /></div>
            <Link
              to="/portfolio"
              data-testid="design-build-cta"
              className="btn-pill mt-12"
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
