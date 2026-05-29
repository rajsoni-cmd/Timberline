import Reveal from "./Reveal";

export const PageHero = ({ eyebrow, title, subtitle, image, testId = "page-hero" }) => {
  return (
    <section
      data-testid={testId}
      className="relative h-[70vh] min-h-[520px] w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[#01261d]/55" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <Reveal>
          {eyebrow && (
            <div className="eyebrow text-[#00a34f] mb-6">{eyebrow}</div>
          )}
          <h1 className="font-serif-display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-white/85 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default PageHero;
