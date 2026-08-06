import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";
import { TESTIMONIALS } from "../lib/team";

// Historical testimonials preserved on the dedicated page for depth
const HISTORICAL_TESTIMONIALS = [
  {
    quote: "Ray, Dave, John, Heather, Riley, and the entire team at Timberline — I just want to express my sincere thanks and appreciation for all you and the rest of the team and subs have done to get us back to our cottage. It has been a stressful year since the fire and you all have been so professional and accommodating. It was amazing to walk in on Friday afternoon and see the transformation that has been made. We were overwhelmed at the new look and the detail and appreciate the hard work involved.",
    author: "Mark & Florence",
    location: "Chemong Lake, 2019",
  },
  {
    quote: "Timberline was a great building partner. They rescued a troubled project and delivered a fantastic product. They always acted as if the cottage was their own and delivered my project with excellent quality. I could sleep soundly at night knowing they were on the job. I would highly recommend the Timberline team to anyone looking to build a cottage or home.",
    author: "Gabor",
    location: "Jack Lake, 2019",
  },
  {
    quote: "Ray's team was great in terms of the quality of their work and their responsiveness to changes. Fortunately our son-in-law Pierre is keenly interested in all aspects of construction, materials and products, and monitored every detail of the work through to the finishing touches.",
    author: "Bob & Laura",
    location: "Stoney Lake",
  },
  {
    quote: "We are thrilled with our new cottage and will be pleased to be a reference for you and your team. A unique, custom-designed cottage, taking into account the considerations of the users and constraints of land lot, was created by Timberline Custom Homes.",
    author: "John, Cecile, John & MC",
    location: "Anstruther Lake",
  },
  {
    quote: "Timberline have a professional approach through the entire project — from the first client meeting, to the project budget, to establishing a timeframe, and most importantly their commitment to organization and client communication. They've proven they deliver your dream on time and on budget.",
    author: "D.G.",
    location: "Balsam Lake",
  },
];

const ALL_TESTIMONIALS = [...TESTIMONIALS, ...HISTORICAL_TESTIMONIALS];

const Testimonials = () => {
  return (
    <main data-testid="testimonials-page">
      <PageHero
        eyebrow="Client Stories"
        title="Client Stories"
        subtitle="Three decades of relationships — in our clients' own words."
        image={IMAGES.contactHero}
        testId="testimonials-hero"
      />

      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-14">
            {ALL_TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={(i % 2) * 120}>
                <div
                  data-testid={`testimonials-page-card-${i}`}
                  className="flex flex-col"
                >
                  <div className="font-display text-[#c9a96e] text-7xl leading-none mb-2" aria-hidden="true">&ldquo;</div>
                  <p className="font-display italic text-[#01261d] text-xl md:text-2xl leading-[1.55] whitespace-pre-line">
                    {t.quote}
                  </p>
                  <div className="mt-9"><GoldRule delay={200} /></div>
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

      <section className="py-28 md:py-40 bg-[#fafaf7]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">Add Your Story</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            >
              Build the Home They'll Talk About Next
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <Link to="/contact" data-testid="testimonials-cta" className="btn-pill mt-12">
              Begin a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
