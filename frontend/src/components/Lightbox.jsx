import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Fullscreen lightbox with keyboard, swipe and counter.
const Lightbox = ({ images, startIndex = 0, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const touchStart = useRef(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [next, prev, onClose]);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (dx < -40) next();
    else if (dx > 40) prev();
    touchStart.current = null;
  };

  return (
    <div
      data-testid="lightbox"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[80] bg-[#01261d]/97 flex items-center justify-center"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 md:px-8 py-5">
        <div
          data-testid="lightbox-counter"
          className="text-white/85 text-[0.72rem] tracking-[0.28em] uppercase font-semibold"
        >
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
        <button
          data-testid="lightbox-close"
          onClick={onClose}
          aria-label="Close"
          className="w-10 h-10 flex items-center justify-center text-white/85 hover:text-[#c9a96e] transition-colors"
        >
          <X size={22} strokeWidth={1.6} />
        </button>
      </div>

      {/* Prev */}
      <button
        data-testid="lightbox-prev"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 md:left-6 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center text-white/80 hover:text-[#c9a96e] transition-colors"
      >
        <ChevronLeft size={32} strokeWidth={1.4} />
      </button>

      {/* Image */}
      <div className="max-w-[90vw] max-h-[80vh] px-10 md:px-16 flex items-center justify-center">
        <img
          data-testid={`lightbox-image-${index}`}
          src={images[index]}
          alt={`Project image ${index + 1}`}
          className="max-w-full max-h-[80vh] object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Next */}
      <button
        data-testid="lightbox-next"
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 md:right-6 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center text-white/80 hover:text-[#c9a96e] transition-colors"
      >
        <ChevronRight size={32} strokeWidth={1.4} />
      </button>
    </div>
  );
};

export default Lightbox;
