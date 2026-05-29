import { Shield, Sparkles, Hammer, Users, User } from "lucide-react";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";
import { OFFICE_TEAM, FIELD_TEAM } from "../lib/team";

const VALUES = [
  { icon: Sparkles, name: "Quality", body: "Every joint, every finish, every choice — quality is not negotiable." },
  { icon: Shield, name: "Integrity", body: "Honest communication and transparent process from first meeting to handover." },
  { icon: Hammer, name: "Craftsmanship", body: "A skilled team with decades of experience under one roof." },
  { icon: Users, name: "Client Focus", body: "Your dream, your timeline, your home — every project begins with you." },
];

const STATS = [
  { number: "30+", label: "Years in Business" },
  { number: "200+", label: "Projects Completed" },
  { number: "30", label: "Skilled Team Members" },
  { number: "20+", label: "Years — Longest Serving" },
];

const TeamCard = ({ person, idx, testPrefix }) => (
  <Reveal delay={idx * 50}>
    <div
      data-testid={`${testPrefix}-${person.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex flex-col items-start group"
    >
      <div className="w-full aspect-[4/5] bg-[#01261d]/5 border border-[#01261d]/10 flex items-center justify-center mb-5 group-hover:border-[#00a34f]/40 transition-colors duration-500">
        <User size={64} strokeWidth={1} className="text-[#01261d]/30" />
      </div>
      <h4 className="font-serif-display text-[#01261d] text-xl leading-tight">{person.name}</h4>
      <p className="text-[#231f20]/70 text-sm mt-2 leading-relaxed">{person.title}</p>
      <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-[#00a34f]">
        Team Member Since {person.since}
      </div>
    </div>
  </Reveal>
);

const About = () => {
  return (
    <main data-testid="about-page">
      <PageHero
        eyebrow="The Story"
        title="About Timberline"
        subtitle="A family-built company. A team that stays. Homes that last generations."
        image={IMAGES.user18}
        testId="about-hero"
      />

      {/* HISTORY */}
      <section className="py-24 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={IMAGES.user11} alt="Timberline shop" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <div className="eyebrow text-[#00a34f] mb-5">Our History</div>
              <h2 className="font-serif-display text-[#01261d] text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Three Decades<br />in the Making
              </h2>
              <div className="w-16 h-[2px] bg-[#00a34f] my-8" />
              <div className="space-y-6 text-[#231f20]/85 text-base md:text-lg leading-relaxed">
                <p>
                  Originating from Northey Contracting Inc. established by Ray Northey in 1989 has lead to the well recognized Timberline Custom Homes. Beginning as a two man crew, Timberline has grown to employ 30 skilled workers between the office and field year round. We have long-term employees that have been with us for over 20 years, preserving our quality throughout the years.
                </p>
                <p>
                  In 2004, Timberline expanded by building a 3200 sq ft shop to further offer services for millwork, wood work, preparing and pre-staining beams, flooring, exteriors, etc. for our projects. In 2014, Timberline built another 3200 sq ft shop to facilitate the housing and repair of our heavy equipment division. This allows us to keep more of our work in house and employ our operators year round performing maintenance.
                </p>
                <p>
                  In business for 30 years now, Timberline initially started and continues to expand our company with the assistance of referral business from previous clients and positive word of mouth, building for families and now generations. Successfully building over 200 projects in the Kawarthas and surrounding area, Timberline's family atmosphere helps build a trust and long lasting relationships with our clients.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section data-testid="stats-section" className="py-20 md:py-24 bg-[#01261d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div
                data-testid={`stat-${i}`}
                className="bg-[#01261d] p-8 md:p-12 text-center"
              >
                <div className="font-serif-display text-[#00a34f] text-5xl md:text-6xl leading-none">
                  {s.number}
                </div>
                <div className="mt-4 text-white/80 text-[11px] tracking-[0.24em] uppercase leading-relaxed">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="eyebrow text-[#00a34f] mb-5">Core Values</div>
              <h2 className="font-serif-display text-[#01261d] text-4xl md:text-5xl leading-tight tracking-tight">
                What We Stand For
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.name} delay={i * 80}>
                  <div data-testid={`value-card-${v.name.toLowerCase()}`}>
                    <Icon className="text-[#00a34f]" size={32} strokeWidth={1.3} />
                    <h3 className="mt-6 font-serif-display text-[#01261d] text-2xl">{v.name}</h3>
                    <div className="w-10 h-[2px] bg-[#00a34f] my-4" />
                    <p className="text-[#231f20]/75 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFICE TEAM */}
      <section data-testid="office-team-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-xl">
              <div className="eyebrow text-[#00a34f] mb-5">The People</div>
              <h2 className="font-serif-display text-[#01261d] text-4xl md:text-5xl leading-tight tracking-tight">
                Office Team
              </h2>
              <div className="w-16 h-[2px] bg-[#00a34f] mt-8" />
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {OFFICE_TEAM.map((p, i) => (
              <TeamCard key={p.name} person={p} idx={i} testPrefix="office-member" />
            ))}
          </div>
        </div>
      </section>

      {/* FIELD TEAM */}
      <section data-testid="field-team-section" className="py-24 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-xl">
              <div className="eyebrow text-[#00a34f] mb-5">In the Field</div>
              <h2 className="font-serif-display text-[#01261d] text-4xl md:text-5xl leading-tight tracking-tight">
                Field Teams
              </h2>
              <div className="w-16 h-[2px] bg-[#00a34f] mt-8" />
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {FIELD_TEAM.map((p, i) => (
              <TeamCard key={p.name} person={p} idx={i} testPrefix="field-member" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
