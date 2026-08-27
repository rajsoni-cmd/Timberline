import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal, { GoldRule } from "./Reveal";

const FAQS = [
  {
    q: "What area do you build in?",
    a: (
      <>
        <p>
          Timberline is located and primarily builds in the Kawartha Lakes region of Ontario, Canada. We typically provide our services surrounding Apsley, Buckhorn, Lakefield, Bridgenorth, Peterborough, Havelock, Norwood, Burleigh Falls and Woodview.
        </p>
        <p>
          Common lakes where you can see our projects along the shoreline include: Jacks Lake, Koshabog Lake, Big Cedar Lake, Julian Lake, Eels Lake, Lovesick Lake, Anstruther Lake, Chandos Lake, Buckhorn Lake, Loon Lake, Belmont Lake, Chemong Lake, Rice Lake, Mississauga Lake, Gold Lake, Kathewanooka Lake, Catchacoma Lake, and notably Stoney Lake. While we generally build in these areas, we are not limited to them and may expand our range.
        </p>
      </>
    ),
  },
  {
    q: "What type of home is a Timberline Custom Home?",
    a: (
      <p>
        Timberline builds more than just homes — we design and build custom homes, cottages, renovations, additions, boathouses, garages, bunkies, docks, and more, of all sizes. Each project is completely custom to your personal needs and requests. We provide our own expertise to help design your ultimate dream project, in any style and any size. If you&apos;re already working with an architect, we&apos;d be delighted to work with them as well. Timberline accentuates the timber look throughout the majority of our projects, incorporating real timbers combined with false beam work across the interior and exterior. While the timber work isn&apos;t always structural, the result carries the same desired appearance.
      </p>
    ),
  },
  {
    q: "Is a Timberline home expensive?",
    a: (
      <p>
        We pride ourselves on delivering the best quality-built custom projects with top-notch service. We keep value for money in mind as we help guide your finishing choices, and you&apos;ll find our pricing fair. If you build with Timberline, you&apos;ll receive a detailed contract outlining each stage of the build. Cost depends on many variables — you control your final cost through the products and materials you choose. It&apos;s easy to go over budget; our team helps you stay within budget while still achieving your desired look. Timberline has no hidden fees — we pride ourselves on honesty and integrity. Let us prove it to you.
      </p>
    ),
  },
  {
    q: "What is your price per square foot?",
    a: (
      <p>
        We don&apos;t provide an upfront price per square foot, as it can be misleading. Every Timberline project is custom and requires individual consideration. Because of this, an initial consultation is important to understand your tastes and lifestyle needs — after which you&apos;ll receive a rough estimate. A final design is needed before we can provide a final price.
      </p>
    ),
  },
  {
    q: "At what point do I have to pay any money?",
    a: (
      <p>
        Timberline&apos;s initial consultation is always free — you&apos;re welcome to visit our office, or we can visit your potential building site to discuss your ideas and vision. If you&apos;d like us to proceed with a rough design sketch, a small fee applies, based on the size of your project.
      </p>
    ),
  },
  {
    q: "Are you comfortable building on challenging terrain (e.g. rock)?",
    a: (
      <p>
        Yes — we have experience building on all types of terrain, including rock and challenging lots. It&apos;s what sets Timberline apart from the competition.
      </p>
    ),
  },
  {
    q: "How soon can you build?",
    a: (
      <p>
        Physical building can typically begin within a month of drawings and permit completion, depending on the season and weather.
      </p>
    ),
  },
  {
    q: "How long does it take to build a Timberline home?",
    a: (
      <p>
        Once your custom design is complete, you can expect the build to take 4 months to 1 year, depending on the size, detail, and weather conditions of your project. Your final finishing decisions throughout the build also affect the timeline.
      </p>
    ),
  },
];

const FAQItem = ({ item, index, open, onToggle }) => {
  return (
    <div
      data-testid={`faq-item-${index}`}
      className="border-b border-[#c9a96e]/25"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        data-testid={`faq-toggle-${index}`}
        className="w-full flex items-start justify-between gap-6 py-5 md:py-6 text-left group"
      >
        <span className="font-display text-[#01261d] text-lg md:text-xl leading-snug tracking-tight pr-4 group-hover:text-[#c9a96e] transition-colors">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-9 h-9 rounded-full border border-[#01261d]/25 flex items-center justify-center transition-all duration-300 mt-0.5 ${
            open ? "bg-[#01261d] border-[#01261d] rotate-180" : "bg-transparent"
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
          open ? "max-h-[1200px] opacity-100 pb-7" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 text-[#3a3531] text-base md:text-[1.02rem] font-light leading-[1.95] pr-4 md:pr-14">
          {item.a}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section data-testid="faq-section" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center mb-10 md:mb-12">
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-5">Frequently Asked</div>
            <h2
              className="mt-5 font-display text-[#01261d] leading-tight tracking-tight uppercase"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              Questions
            </h2>
            <div className="flex justify-center mt-6"><GoldRule delay={300} /></div>
          </div>
        </Reveal>

        <div className="mt-4">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
