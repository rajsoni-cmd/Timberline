import { useState } from "react";
import { User, Award, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import TestimonialCard from "../components/TestimonialCard";
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
    groups: [
      {
        org: "Peterborough & The Kawarthas (PKHBA) Housing Design Awards",
        items: [
          "Custom Built Home over 4,001 SF — GOLD",
          "Custom Built Home 2,501–4,000 SF — BRONZE",
          "Custom Built Home 2,501–4,000 SF — FINALIST",
          "Custom Built Home up to 2,500 SF — GOLD",
          "Custom Built Home up to 2,500 SF — SILVER",
          "Bathroom over $30,000 — WINNER",
          "Outdoor Amenity Space — WINNER",
          "Auxiliary Structure — WINNER",
        ],
      },
    ],
  },
  {
    year: "2023",
    groups: [
      {
        org: "Peterborough & The Kawarthas (PKHBA) Housing Design Awards",
        items: [
          "Custom Home Builder of the Year",
          "Custom Built Home over 4,001 SF — WINNER",
          "Renovations over $500,000 — FINALIST",
        ],
      },
    ],
  },
  {
    year: "2019",
    groups: [
      {
        org: "Ontario Home Builders (OHBA) Awards of Distinction",
        items: [
          "Custom Home 3,001–5,000 SF — WINNER",
          "Custom Home up to 3,000 SF — FINALIST",
        ],
      },
    ],
  },
  {
    year: "2018",
    groups: [
      {
        org: "Ontario Home Builders (OHBA) Awards of Distinction",
        items: ["Custom Home 5,000–10,000 SF — WINNER"],
      },
    ],
  },
  {
    year: "2016",
    groups: [
      {
        org: "CHBA National Awards of Housing Excellence",
        items: ["Custom Homes Detached Over 3,500 SF — FINALIST"],
      },
      {
        org: "Logix Awards",
        items: ["Large Residential — WINNER"],
      },
      {
        org: "Readers Select Awards",
        items: ["Home Builders Category — GOLD"],
      },
    ],
  },
  {
    year: "2015",
    groups: [
      {
        org: "Peterborough & The Kawarthas (PKHBA) Housing Design Awards",
        items: [
          "Custom Home Builder of the Year",
          "Custom Built Home over 2,501 SF — WINNER",
          "Home Renovations $75,001–$200,000 — WINNER",
          "Home Renovations over $200,001 — WINNER",
        ],
      },
      {
        org: "Ontario Home Builders (OHBA) Awards of Distinction",
        items: ["Most Outstanding Custom Home over 5,001 SF — WINNER"],
      },
      {
        org: "Kawartha Chamber of Commerce",
        items: ["Outstanding Business Achievement — WINNER (Tied)"],
      },
    ],
  },
  {
    year: "2014",
    groups: [
      {
        org: "Peterborough & The Kawarthas (PKHBA) Housing Design Awards",
        items: ["Any Room in the House — WINNER"],
      },
    ],
  },
  {
    year: "2013",
    groups: [
      {
        org: "Peterborough & The Kawarthas (PKHBA) Housing Design Awards",
        items: [
          "Best Kitchen Renovation — WINNER",
          "Best Internet Website — WINNER",
        ],
      },
    ],
  },
];

// Expandable year row for the awards accordion
const AwardYearRow = ({ yearGroup, index }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 60}>
      <div
        data-testid={`award-year-${yearGroup.year}`}
        className="border-b border-[#c9a96e]/25 last:border-b-0"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          data-testid={`award-year-toggle-${yearGroup.year}`}
          className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6 py-6 md:py-7 text-left group"
        >
          {/* Year */}
          <div className="font-display text-[#c9a96e] text-2xl md:text-3xl tracking-tight leading-none min-w-[80px]">
            {yearGroup.year}
          </div>

          {/* Award count line */}
          <div className="font-display text-[#01261d] text-base md:text-lg leading-snug tracking-tight group-hover:text-[#c9a96e] transition-colors">
            {yearGroup.groups.reduce((n, g) => n + g.items.length, 0)}{" "}
            {yearGroup.groups.reduce((n, g) => n + g.items.length, 0) === 1
              ? "Recognition"
              : "Recognitions"}
            <span className="hidden md:inline text-[#3a3531] font-light italic text-sm ml-2">
              — {yearGroup.groups.map((g) => g.org.split(" ")[0]).join(" · ")}
            </span>
          </div>

          {/* Plus/Minus */}
          <span
            className={`shrink-0 w-9 h-9 rounded-full border border-[#01261d]/25 flex items-center justify-center transition-all duration-300 ${
              open ? "bg-[#01261d] border-[#01261d]" : "bg-transparent"
            }`}
          >
            {open ? (
              <Minus size={16} strokeWidth={2} className="text-[#c9a96e]" />
            ) : (
              <Plus size={16} strokeWidth={2} className="text-[#01261d] group-hover:text-[#c9a96e] transition-colors" />
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            open ? "max-h-[1200px] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="md:pl-[104px] space-y-6">
            {yearGroup.groups.map((g) => (
              <div key={g.org}>
                <div className="text-[0.72rem] tracking-[0.22em] uppercase text-[#c9a96e] font-semibold mb-3">
                  {g.org}
                </div>
                <ul className="space-y-1.5">
                  {g.items.map((item, k) => (
                    <li
                      key={k}
                      className="text-[#3a3531] text-[0.95rem] md:text-base font-light leading-[1.7] flex gap-3"
                    >
                      <Award size={14} strokeWidth={1.6} className="text-[#c9a96e] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

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

          {/* Year-by-year accordion */}
          <div className="max-w-4xl mx-auto">
            {AWARDS.map((a, i) => (
              <AwardYearRow key={a.year} yearGroup={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" data-testid="about-testimonials-section" className="py-28 md:py-36 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <h2
                className="mt-8 font-display text-[#01261d] leading-tight tracking-tight uppercase"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
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
              data-testid="about-testimonials-cta"
              className="btn-pill"
            >
              Read More Client Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
