import { Link } from "react-router-dom";
import Reveal, { GoldRule } from "./Reveal";
import { IMAGES, BANNER_INTERIOR } from "../lib/images";

const MARQUEE = [
  IMAGES.cottageExterior, BANNER_INTERIOR, IMAGES.user7, IMAGES.user8,
  IMAGES.user11, IMAGES.user18, IMAGES.user26, IMAGES.greatRoomBar,
];

export const ScrollingGallery = () => {
  return (
    <section data-testid="project-marquee" className="py-24 md:py-32 bg-white overflow-hidden">
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

      <div className="relative w-full marquee-pause">
        <div className="flex marquee gap-6 will-change-transform">
          {[...MARQUEE, ...MARQUEE].map((src, i) => (
            <div
              key={`m-${i}`}
              data-testid={`marquee-tile-${i}`}
              className="relative shrink-0 w-[280px] md:w-[400px] lg:w-[480px] aspect-[4/3] overflow-hidden group"
            >
              <img
                src={src}
                alt="Timberline project"
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                loading="lazy"
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
