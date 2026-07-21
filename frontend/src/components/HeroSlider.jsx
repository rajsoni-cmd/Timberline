import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "./Reveal";
import { HERO_SLIDES } from "../lib/images";

const AUTO_ADVANCE_MS = 4000;

export const HeroSlider = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen w-full flex items-end justify-center overflow-hidden"
    >
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.image}
          data-testid={`hero-slide-${i}`}
          className={`absolute inset-0 bg-cover bg-center slide ${
            i === slide ? "active ken-burns" : ""
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-label={s.alt}
          aria-hidden={i !== slide}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01261d]/40 via-transparent to-[#01261d]/85" />

      <div className="relative z-10 text-center px-6 max-w-6xl pb-40 md:pb-52">
        <Reveal>
          <div className="eyebrow eyebrow-light mb-8">Custom Design and Build</div>
          <h1
            className="font-display text-white leading-[0.98] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8.5vw, 7.5rem)" }}
          >
            Building with <em className="text-[#c9a96e] not-italic font-medium">Nature.</em>
          </h1>
          <div className="flex justify-center mt-10">
            <GoldRule delay={400} wide />
          </div>
          <p className="mt-8 text-white/85 text-[0.72rem] md:text-[0.78rem] tracking-[0.32em] uppercase font-light">
            Peterborough + Kawarthas
          </p>
          <Link
            to="/what-we-offer"
            data-testid="hero-cta-button"
            className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-white hover:border-[#c9a96e]"
          >
            Our Services
          </Link>
        </Reveal>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            data-testid={`hero-slide-dot-${i}`}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              i === slide ? "w-10 bg-[#c9a96e]" : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Subtle water/ripple wave divider at hero bottom */}
      <svg
        className="absolute -bottom-px left-0 right-0 w-full h-16 md:h-20 z-10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,10 720,40 C960,70 1200,20 1440,50 L1440,80 L0,80 Z"
          fill="#ffffff"
          opacity="0.9"
        />
        <path
          d="M0,55 C240,90 480,30 720,55 C960,80 1200,40 1440,60 L1440,80 L0,80 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
};

export default HeroSlider;
