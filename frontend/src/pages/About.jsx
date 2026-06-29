import { User } from "lucide-react";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES, BANNER_INTERIOR } from "../lib/images";
import { OFFICE_TEAM, FIELD_TEAM } from "../lib/team";

const STATS = [
  { number: "200+", label: "Projects Completed" },
  { number: "30+", label: "Years in Business" },
  { number: "30",  label: "Skilled Team Members" },
  { number: "20+", label: "Year Longest Serving" },
];

const TeamCard = ({ person, idx, testPrefix }) => (
  <Reveal variant="scale" delay={idx * 70}>
    <div
      data-testid={`${testPrefix}-${person.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex flex-col items-center text-center px-2"
    >
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#efe8d9] flex items-center justify-center border border-[#b89d77]/40 mb-6">
        <User size={42} strokeWidth={1} className="text-[#2c2926]/40" />
      </div>
      <h4
        className="font-display text-[#2c2926] leading-tight tracking-tight"
        style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)" }}
      >
        {person.name}
      </h4>
      <p className="text-[#3a3531]/75 text-sm font-light mt-3 leading-relaxed max-w-[22ch]">
        {person.title}
      </p>
      <div className="mt-4 text-[0.65rem] tracking-[0.26em] uppercase text-[#b89d77] font-medium">
        Since {person.since}
      </div>
    </div>
  </Reveal>
);

const TeamSubHeading = ({ children, testId }) => (
  <Reveal>
    <div data-testid={testId} className="flex items-baseline gap-4 mb-12">
      <h3 className="text-[#2c2926] text-[0.78rem] uppercase tracking-[0.3em] font-medium">
        {children}
      </h3>
      <span className="flex-1 h-px bg-[#b89d77]/50" />
    </div>
  </Reveal>
);

const About = () => {
  return (
    <main data-testid="about-page">
      <PageHero
        eyebrow="The Story"
        title="About Timberline"
        subtitle="Three decades of craftsmanship, community, and trust."
        image={BANNER_INTERIOR}
        testId="about-hero"
      />

      {/* HISTORY */}
      <section className="py-24 md:py-32 bg-[#f4eee4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal variant="left" className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={IMAGES.shopBuild} alt="Timberline shop" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="md:col-span-7">
            <div>
              <GoldRule delay={200} />
              <div className="eyebrow mt-5">Our Story</div>
              <h2
                className="mt-6 font-display text-[#2c2926] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Our History
              </h2>
              <div className="mt-7"><GoldRule delay={350} /></div>
              <div className="mt-9 space-y-7 text-[#3a3531]/85 text-base md:text-lg font-light leading-[1.9]">
                <p>
                  Originating from Northey Contracting Inc. established by Ray Northey in 1989, our journey has led to the well recognized Timberline Custom Homes. Beginning as a two man crew, Timberline has grown to employ 30 skilled workers between the office and field year round. We have long-term employees that have been with us for over 20 years, preserving our quality throughout the years.
                </p>
                <p>
                  In 2004, Timberline expanded by building a 3,200 sq ft shop to further offer services for millwork, woodwork, preparing and pre-staining beams, flooring, exteriors, and more. In 2014, we built another 3,200 sq ft shop to house and maintain our heavy equipment division — keeping more work in-house and employing our operators year round.
                </p>
                <p>
                  In business for over 30 years, Timberline continues to grow through referrals and word of mouth, building for families and now generations. With over 200 projects completed across the Kawarthas and surrounding areas, our family atmosphere builds trust and long-lasting client relationships.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS — light cream variant */}
      <section data-testid="stats-section" className="py-20 md:py-24 bg-[#efe8d9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={i * 100}>
              <div data-testid={`stat-${i}`} className="text-center px-2">
                <div
                  className="font-display text-[#b89d77] leading-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                >
                  {s.number}
                </div>
                <div className="flex justify-center mt-5"><GoldRule delay={300} /></div>
                <div className="mt-5 text-[#2c2926] text-[0.7rem] tracking-[0.26em] uppercase font-light leading-relaxed">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section data-testid="team-section" className="py-24 md:py-32 bg-[#f4eee4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="flex justify-center"><GoldRule delay={150} /></div>
              <div className="eyebrow mt-5">The People Behind the Projects</div>
              <h2
                className="mt-6 font-display text-[#2c2926] leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                Our Team
              </h2>
              <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
            </div>
          </Reveal>

          <div className="mt-20">
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
    </main>
  );
};

export default About;
