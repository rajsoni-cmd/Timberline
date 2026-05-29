import { useEffect, useRef, useState } from "react";

const useInView = (delay = 0) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
};

export const Reveal = ({ children, delay = 0, variant = "up", as: Tag = "div", className = "", ...rest }) => {
  const { ref, visible } = useInView(delay);
  const variantClass =
    variant === "left" ? "reveal-left" :
    variant === "right" ? "reveal-right" :
    variant === "scale" ? "reveal-scale" :
    variant === "soft" ? "reveal-soft" :
    "reveal";
  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const GoldRule = ({ delay = 0, wide = false, className = "" }) => {
  const { ref, visible } = useInView(delay);
  return (
    <span
      ref={ref}
      className={`gold-rule ${wide ? "gold-rule-wide" : ""} ${visible ? "is-visible" : ""} ${className}`}
      aria-hidden="true"
    />
  );
};

export default Reveal;
