// Optional project details shown on a project page.
// Each item only appears when it has been filled in (in the CMS editor).

export const ProjectSpecs = ({ project }) => {
  const specs = [
    { label: "Designer", value: project.designer },
    { label: "Square Footage", value: project.squareFootage },
  ].filter((s) => s.value && String(s.value).trim());

  if (!specs.length) return null;

  return (
    <dl
      data-testid="project-specs"
      className="mt-8 border-t border-[#c9a96e]/30 divide-y divide-[#c9a96e]/20"
    >
      {specs.map((s) => (
        <div key={s.label} className="flex items-baseline justify-between gap-6 py-4">
          <dt className="text-[0.68rem] tracking-[0.24em] uppercase text-[#c9a96e] font-semibold">
            {s.label}
          </dt>
          <dd className="text-[#01261d] text-base md:text-[1.05rem] text-right">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export const ProjectDescription = ({ text }) => {
  const paras = String(text || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (!paras.length) return null;
  return (
    <div className="space-y-5">
      {paras.map((p, i) => (
        <p key={i} className="text-[#3a3531] text-base md:text-lg font-light leading-[1.95] whitespace-pre-line">
          {p}
        </p>
      ))}
    </div>
  );
};
