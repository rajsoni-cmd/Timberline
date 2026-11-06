import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal, { GoldRule } from "./Reveal";
// Selected Work photos (frontend/public/images/selected-work-1.jpg ... -10.jpg)
const MARQUEE = Array.from({ length: 10 }, (_, i) => `/images/selected-work-${i + 1}.jpg`);

const SPEED = 110; // auto-scroll speed in pixels per second

export const ScrollingGallery = () => {
  const trackRef = useRef(null);
  const pos = useRef(0);
  const hover = useRef(false);
  const holdUntil = useRef(0);

  // Continuous auto-scroll that loops seamlessly (the photo list is doubled).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const half = el.scrollWidth / 2;
      if (!reduce && !hover.current && now > holdUntil.current && half > 0) {
        pos.current += SPEED * dt;
        if (pos.current >= half) pos.current -= half;
        el.scrollLeft = pos.current;
      } else {
        pos.current = el.scrollLeft; // follow manual swipes / arrow scrolls
        if (half > 0 && pos.current >= half) {
          pos.current -= half;
          el.scrollLeft = pos.current;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const step = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const tile = el.querySelector("[data-tile]");
    const amount = tile ? tile.getBoundingClientRect().width + 24 : 400;
    const half = el.scrollWidth / 2;
    // Going back from the start: jump to the identical spot in the second copy first.
    if (dir < 0 && el.scrollLeft < amount) el.scrollLeft += half;
    holdUntil.current = performance.now() + 2500;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  const arrow =
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/90 text-[#01261d] shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-[#c9a96e] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c9a96e]";

  return (
    <section data-testid="project-marquee" className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <Reveal>
          <div className="flex justify-center"><GoldRule delay={150} /></div>
          <div className="eyebrow mt-6">Selected Work</div>
          <h2
            className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
          >
            Craftsmanship in Every Detail
          </h2>
          <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
        </Reveal>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => (hover.current = true)}
        onMouseLeave={() => (hover.current = false)}
        onTouchStart={() => (holdUntil.current = performance.now() + 4000)}
      >
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" data-testid="marquee-prev" className={`${arrow} left-3 md:left-6`}>
          <ChevronLeft size={24} strokeWidth={1.8} />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next photo" data-testid="marquee-next" className={`${arrow} right-3 md:right-6`}>
          <ChevronRight size={24} strokeWidth={1.8} />
        </button>

        <div ref={trackRef} className="flex gap-6 overflow-x-auto no-scrollbar">
          {[...MARQUEE, ...MARQUEE].map((src, i) => (
            <div
              key={`m-${i}`}
              data-tile
              data-testid={`marquee-tile-${i}`}
              className="relative shrink-0 w-[300px] md:w-[420px] lg:w-[500px] aspect-[4/5] overflow-hidden group"
            >
              <img
                src={src}
                alt="Timberline project"
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                loading={i < 6 ? "eager" : "lazy"}
                draggable={false}
              />
              <div className="absolute inset-0 bg-[#01261d]/0 group-hover:bg-[#01261d]/45 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <Link to="/portfolio" data-testid="marquee-cta" className="btn-pill">
          View Portfolio
        </Link>
      </div>
    </section>
  );
};

export default ScrollingGallery;
