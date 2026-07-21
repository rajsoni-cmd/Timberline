import Reveal, { GoldRule } from "./Reveal";

export const PageHero = ({ eyebrow, title, subtitle, image, testId = "page-hero" }) => {
  return (
    <section
      data-testid={testId}
      className="relative h-[78vh] min-h-[560px] w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center ken-burns"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#01261d]/40 via-transparent to-[#01261d]/75" />
      <div className="relative z-10 text-center px-6 max-w-4xl pt-28 md:pt-32">
        <Reveal>
          <div className="flex justify-center mb-7">
            <GoldRule delay={150} />
          </div>
          {eyebrow && (
            <div className="eyebrow eyebrow-light mb-8">{eyebrow}</div>
          )}
          <h1
            className="font-display text-white leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            {title}
          </h1>
          <div className="flex justify-center mt-9">
            <GoldRule delay={300} />
          </div>
          {subtitle && (
            <p className="mt-10 text-white/85 text-base md:text-lg font-light leading-[1.95] max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default PageHero;
