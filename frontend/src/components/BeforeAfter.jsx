import { useRef, useState, useCallback, useEffect } from "react";

// Draggable BEFORE / AFTER comparison slider (mouse + touch).
// Optional: `position` + `onPositionChange` make it controlled (used by the
// full Before & After gallery), `aspect` overrides the frame shape and
// `eager` loads the photos immediately.
const BeforeAfter = ({ before, after, caption, label, position, onPositionChange, aspect, eager = false }) => {
  const containerRef = useRef(null);
  const [innerPos, setInnerPos] = useState(50); // percentage
  const controlled = typeof position === "number";
  const pos = controlled ? position : innerPos;
  const posRef = useRef(pos);
  posRef.current = pos;
  const setPos = useCallback(
    (v) => {
      const next = typeof v === "function" ? v(posRef.current) : v;
      if (controlled && onPositionChange) onPositionChange(next);
      else setInnerPos(next);
    },
    [controlled, onPositionChange]
  );
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, [setPos]);

  const onPointerDown = (e) => {
    dragging.current = true;
    setFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      if (x != null) setFromClientX(x);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [setFromClientX]);

  // Keyboard a11y on the handle
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
  };

  return (
    <figure data-testid="before-after" className="w-full">
      <div
        ref={containerRef}
        className={`relative w-full ${aspect || "aspect-[16/10]"} overflow-hidden select-none bg-black`}
        onMouseDown={onPointerDown}
        onTouchStart={onPointerDown}
      >
        {/* AFTER (full image, bottom layer) */}
        <img
          src={after}
          alt={`After${label ? ` — ${label}` : ""}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading={eager ? "eager" : "lazy"}
          draggable={false}
        />

        {/* BEFORE (clipped to left portion) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
          aria-hidden="true"
        >
          <img
            src={before}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: pos > 0 ? `${100 / (pos / 100)}%` : "100%", maxWidth: "none" }}
            loading={eager ? "eager" : "lazy"}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 text-[0.65rem] md:text-[0.72rem] tracking-[0.3em] uppercase font-semibold text-white bg-black/55 px-3 py-1.5">
          Before
        </span>
        <span className="absolute top-4 right-4 text-[0.65rem] md:text-[0.72rem] tracking-[0.3em] uppercase font-semibold text-white bg-black/55 px-3 py-1.5">
          After
        </span>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 w-[2px] bg-white/90 pointer-events-none"
          style={{ left: `calc(${pos}% - 1px)` }}
          aria-hidden="true"
        />

        {/* Handle */}
        <button
          type="button"
          onKeyDown={onKeyDown}
          aria-label="Drag to compare before and after"
          data-testid="before-after-handle"
          onMouseDown={onPointerDown}
          onTouchStart={onPointerDown}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_6px_18px_rgba(0,0,0,0.35)] flex items-center justify-center border border-[#c9a96e] cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
          style={{ left: `${pos}%` }}
        >
          <span className="text-[#01261d] font-semibold text-sm tracking-tight">⇆</span>
        </button>
      </div>

      {caption && (
        <figcaption className="mt-4 text-center text-[#3a3531] text-sm md:text-base font-light italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BeforeAfter;
