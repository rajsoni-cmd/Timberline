import Reveal, { GoldRule } from "./Reveal";

export const PageHero = ({ eyebrow, title, subtitle, image, testId = "page-hero" }) => {
  return (
    <section
      data-testid={testId}
      className="relative h-[72vh] min-h-[520px] w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center ken-burns"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c2926]/55 via-[#2c2926]/40 to-[#2c2926]/65" />
      <div className="relative z-10 text-center px-6 max-w-3xl pt-16">
        <Reveal>
          <div className="flex justify-center mb-6">
            <GoldRule delay={150} />
          </div>
          {eyebrow && (
            <div className="eyebrow eyebrow-light mb-7">{eyebrow}</div>
          )}
          <h1
            className="font-display text-[#f4eee4] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 5rem)" }}
          >
            {title}
          </h1>
          <div className="flex justify-center mt-7">
            <GoldRule delay={300} />
          </div>
          {subtitle && (
            <p className="mt-8 text-[#f4eee4]/85 text-base md:text-lg font-light leading-[1.85] max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default PageHero;
