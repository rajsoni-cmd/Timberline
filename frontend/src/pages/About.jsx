import { User, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES, BANNER_INTERIOR } from "../lib/images";
import { OFFICE_TEAM, FIELD_TEAM, TESTIMONIALS } from "../lib/team";

const STATS = [
  { number: "300+", label: "Projects Completed" },
  { number: "37+",  label: "Years in Business" },
  { number: "30",   label: "Skilled Team Members" },
  { number: "20+",  label: "Year Longest Serving" },
];

const AWARDS = [
  {
    year: "2024",
    title: "CHBA National Awards of Excellence",
    detail: "Top 5 Finalist — Rustic Stoney Lake Home",
  },
  {
    year: "2020",
    title: "PKHBA Renovator of the Year",
    detail: "Housing Design Awards (tied)",
  },
  {
    year: "2019",
    title: "PKHBA Housing Design Awards",
    detail: "Multiple category recognitions",
  },
  {
    year: "1989 – Present",
    title: "Tarion Registered Builder",
    detail: "Enrolled since incorporation — every project warranted",
  },
];

const TeamCard = ({ person, idx, testPrefix }) => (
  <Reveal variant="scale" delay={idx * 60}>
    <div
      data-testid={`${testPrefix}-${person.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex flex-col items-center text-center px-2"
    >
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#f5f0e6] flex items-center justify-center border border-[#c9a96e]/40 mb-6">
        <User size={42} strokeWidth={1} className="text-[#01261d]/40" />
      </div>
      <h4 className="font-display text-[#01261d] text-xl md:text-2xl leading-tight tracking-tight">
        {person.name}
      </h4>
      <p className="text-[#3a3531] text-sm font-light mt-3 leading-relaxed max-w-[22ch]">
        {person.title}
      </p>
      <div className="mt-4 text-[0.65rem] tracking-[0.28em] uppercase text-[#c9a96e] font-medium">
        Since {person.since}
      </div>
    </div>
  </Reveal>
);

const TeamSubHeading = ({ children, testId }) => (
  <Reveal>
    <div data-testid={testId} className="flex items-baseline gap-4 mb-12">
      <h3 className="text-[#01261d] text-[0.78rem] uppercase tracking-[0.32em] font-medium">
        {children}
      </h3>
      <span className="flex-1 h-px bg-[#c9a96e]/50" />
    </div>
  </Reveal>
);

const About = () => {
  return (
    <main data-testid="about-page">
      <PageHero
        title="Our History"
        subtitle="Three decades of craftsmanship, community, and trust."
        image={BANNER_INTERIOR}
        testId="about-hero"
      />

      {/* HISTORY */}
      <section id="history" className="py-28 md:py-36 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal variant="left" className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={IMAGES.shopBuild} alt="Timberline shop" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="md:col-span-7">
            <div>
              <GoldRule delay={200} />
              <div className="eyebrow mt-6">Since 1989</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight uppercase"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
              >
                From Two-Person Crew to<br />30+ Craftspeople
              </h2>
              <div className="mt-9"><GoldRule delay={350} /></div>
              <div className="mt-10 space-y-7 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
                <p>
                  Originating from Northey Contracting Inc. established by Ray Northey in 1989, our journey has led to the well recognized Timberline Custom Homes. What began as a two-person operation has grown into one of the Kawarthas' most respected custom home building companies, employing more than 30 skilled professionals across our office, construction, and heavy equipment divisions year-round. A key part of Timberline's success has been the dedication of our team. Many of our employees have been with us for decades, helping preserve the craftsmanship, values, and attention to detail that have defined our work from the beginning.
                </p>
                <p>
                  As our company expanded, so did our capabilities. In 2004, we constructed a workshop to support custom millwork, woodworking, beam preparation, pre-finishing, flooring, exterior components, and other specialized services for our projects. In 2014, we added a second facility dedicated to our heavy equipment division, allowing us to maintain, repair, and operate our fleet in-house while providing year-round employment for our operators.
                </p>
                <p>
                  For more than 37 years, Timberline has had the privilege of helping families bring their dream homes and cottages to life. From the very beginning, our business has grown through referrals and word-of-mouth — a reflection of the relationships we've built and the trust our clients place in us. When you build with Timberline, you're not just hiring a builder — you're partnering with a team that's invested in creating a home where your family can make memories for generations to come.
                </p>
                <p>
                  Timberline typically builds within a 100 km radius of our office location in Woodview, expanding from the Township of North Kawartha, Selwyn, and Douro-Dummer to Havelock-Belmont-Methuen — including towns such as Apsley, Youngs Point, Woodview, Burleigh Falls, Buckhorn, Ennismore, Lakefield, Bridgenorth, Norwood, Peterborough, Havelock and more. You can observe the beautifully integrated workmanship of Timberline Custom Homes along the shorelines in the Kawartha Lakes. Although the majority of our projects are built along the shorelines, we are ready to design and build your dream project in the middle of the woods or a lot in town.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUILDING WITH NATURE */}
      <section
        id="building-with-nature"
        data-testid="building-with-nature-section"
        className="py-28 md:py-36 bg-[#f5f0e6] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal variant="left" className="md:col-span-7 order-2 md:order-1">
            <div>
              <GoldRule delay={200} />
              <div className="eyebrow mt-6">Our Slogan</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight uppercase"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
              >
                Building with Nature
              </h2>
              <div className="mt-9"><GoldRule delay={350} /></div>
              <div className="mt-10 space-y-7 text-[#3a3531] text-base md:text-lg font-light leading-[2]">
                <p>
                  Timberline's slogan is <span className="italic font-medium">"Building with Nature"</span>, focusing on preserving the natural surroundings of the property when building a project. When looking at a potential job site, we consider how to position the building on the property to obtain the best views while still preserving the natural surroundings. Timberline accentuates the timber look in the majority of our projects by incorporating real timbers combined with false beam work. Although the timber work is not all completely structural, the results are the same desired look — while most importantly, still maintaining our R2000 insulation values.
                </p>
                <p>
                  We encourage and direct our clients to purchase Canadian and environmentally friendly products such as natural wood products used for siding, soffit, finishes, and more. Timberline enforces recycling and reducing waste on job sites by separating scrap wood, aluminum, and garbage. We reuse the scrap wood from job sites in our outdoor wood stove to heat both of our shops, ultimately reducing heating costs and avoiding waste. We also use solar panels to generate hydro-electric energy at our shop.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="md:col-span-5 order-1 md:order-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={IMAGES.designBuildClosing}
                alt="Timberline custom home nestled in the Kawartha forest"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section data-testid="stats-section" className="py-20 md:py-24 bg-[#01261d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={i * 100}>
              <div data-testid={`stat-${i}`} className="text-center px-2">
                <div
                  className="font-display text-[#c9a96e] leading-none"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
                >
                  {s.number}
                </div>
                <div className="flex justify-center mt-6"><GoldRule delay={300} /></div>
                <div className="mt-6 text-white text-[0.72rem] tracking-[0.28em] uppercase font-light leading-relaxed">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR TEAM */}
      <section id="team" data-testid="team-section" className="py-28 md:py-36 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">The Team Behind Every Project</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-tight tracking-tight uppercase"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
              >
                Our Timberline Team
              </h2>
              <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-6">
            <TeamSubHeading testId="office-team-heading">Office Team</TeamSubHeading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-8">
              {OFFICE_TEAM.map((p, i) => (
                <TeamCard key={p.name} person={p} idx={i} testPrefix="office-member" />
              ))}
            </div>
          </div>

          <div className="mt-24">
            <TeamSubHeading testId="field-team-heading">Field Teams</TeamSubHeading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-8">
              {FIELD_TEAM.map((p, i) => (
                <TeamCard key={p.name} person={p} idx={i} testPrefix="field-member" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" data-testid="awards-section" className="py-28 md:py-36 bg-[#f5f0e6] scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">Recognition</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-tight tracking-tight uppercase"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
              >
                Awards
              </h2>
              <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          {/* Condensed year-by-year timeline */}
          <div className="max-w-4xl mx-auto">
            {AWARDS.map((a, i) => (
              <Reveal key={`${a.year}-${a.title}`} delay={i * 80}>
                <div
                  data-testid={`award-row-${i}`}
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[140px_60px_1fr] items-center gap-4 md:gap-6 py-7 border-b border-[#c9a96e]/25 last:border-b-0"
                >
                  {/* Year */}
                  <div className="col-span-2 md:col-span-1 font-display text-[#c9a96e] text-2xl md:text-3xl tracking-tight leading-none">
                    {a.year}
                  </div>

                  {/* Small icon medallion */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#01261d] items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <Award className="text-[#c9a96e]" size={22} strokeWidth={1.6} />
                  </div>

                  {/* Award title + subtle detail */}
                  <div className="col-span-2 md:col-span-1">
                    <div className="font-display text-[#01261d] text-lg md:text-xl leading-snug tracking-tight">
                      {a.title}
                    </div>
                    {a.detail && (
                      <div className="text-[#3a3531] text-sm md:text-[0.95rem] font-light italic mt-1.5">
                        {a.detail}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" data-testid="about-testimonials-section" className="py-28 md:py-36 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-6">Client Stories</div>
              <h2
                className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
              >
                What Clients Are Saying
              </h2>
              <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 120}>
                <div data-testid={`about-testimonial-${i}`} className="flex flex-col">
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

          <div className="mt-16 flex justify-center">
            <Link to="/contact" data-testid="about-testimonials-cta" className="btn-pill">
              <span className="inline-flex items-center gap-2">
                <Star size={12} strokeWidth={2} className="text-[#c9a96e]" />
                Share Your Story
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
