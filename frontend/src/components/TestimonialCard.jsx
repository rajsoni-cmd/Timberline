import { useState } from "react";
import Reveal, { GoldRule } from "./Reveal";

// Character threshold — below this we don't show a Read More toggle.
const CLAMP_THRESHOLD = 280;

const TestimonialCard = ({ testimonial, index }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.quote.length > CLAMP_THRESHOLD;

  return (
    <Reveal delay={index * 120}>
      <div
        data-testid={`testimonial-card-${index}`}
        className="bg-white p-10 md:p-12 flex flex-col border border-[#c9a96e]/20 h-full"
      >
        <div className="font-display text-[#c9a96e] text-6xl leading-none mb-2" aria-hidden="true">
          &ldquo;
        </div>

        <div className="relative flex-1">
          <p
            data-testid={`testimonial-quote-${index}`}
            className={`font-display italic text-[#01261d] text-lg md:text-xl leading-[1.6] whitespace-pre-line ${
              !expanded && isLong ? "line-clamp-4" : ""
            }`}
          >
            {testimonial.quote}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              data-testid={`testimonial-toggle-${index}`}
              className="mt-4 inline-flex items-center gap-2 text-[#c9a96e] text-[0.72rem] tracking-[0.28em] uppercase font-semibold hover:text-[#01261d] transition-colors"
            >
              {expanded ? "Read Less" : "Read More"}
              <span aria-hidden="true">{expanded ? "↑" : "→"}</span>
            </button>
          )}
        </div>

        <div className="mt-8"><GoldRule delay={200} /></div>
        <div className="mt-6 text-[#2b2622] text-sm font-medium">— {testimonial.author}</div>
        <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[#c9a96e] mt-1.5">
          {testimonial.location}
        </div>
      </div>
    </Reveal>
  );
};

export default TestimonialCard;
