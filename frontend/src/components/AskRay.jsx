import { useState } from "react";
import { Link } from "react-router-dom";
import { X, MessageCircle, Phone } from "lucide-react";

const AVATAR = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80";

export const AskRay = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Closed avatar bubble */}
      <button
        type="button"
        data-testid="ask-ray-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Talk to Ray"
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group transition-opacity duration-300 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-[#b89d77] pulse-ring pointer-events-none" />
        <span className="relative flex items-center gap-3 bg-[#2c2926] pl-1.5 pr-5 py-1.5 rounded-full border border-[#b89d77]/40 shadow-xl">
          <span className="relative w-12 h-12 rounded-full overflow-hidden border border-[#b89d77]/50">
            <img src={AVATAR} alt="Ray Northey" className="w-full h-full object-cover" />
          </span>
          <span className="text-[#f4eee4] text-[0.72rem] tracking-[0.18em] uppercase font-light leading-tight pr-1">
            Ask Ray
          </span>
        </span>
      </button>

      {/* Expanded card */}
      <div
        data-testid="ask-ray-card"
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-[330px] max-w-[calc(100vw-2rem)] bg-[#f4eee4] border border-[#b89d77]/40 shadow-2xl transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(false)}
            data-testid="ask-ray-close"
            className="absolute top-3 right-3 text-[#3a3531]/60 hover:text-[#3a3531] p-1"
            aria-label="Close"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
          <div className="p-6 pt-7 flex items-start gap-4 border-b border-[#b89d77]/25">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#b89d77]/40 shrink-0">
              <img src={AVATAR} alt="Ray Northey" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#b89d77] font-medium">
                Owner, Designer & Sales
              </div>
              <h4 className="font-display text-[#2c2926] text-2xl leading-tight mt-1">
                Ray Northey
              </h4>
            </div>
          </div>

          <div className="p-6">
            <p className="font-display italic text-[#3a3531] text-lg leading-relaxed">
              "Got questions about your project? I'd love to have a no-pressure conversation about your vision."
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:7056544312"
                data-testid="ask-ray-call"
                className="flex items-center gap-3 text-[#3a3531] text-sm hover:text-[#b89d77] transition-colors"
              >
                <Phone size={16} strokeWidth={1.5} className="text-[#b89d77]" />
                <span className="font-light">(705) 654-4312</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                data-testid="ask-ray-message"
                className="flex items-center gap-3 text-[#3a3531] text-sm hover:text-[#b89d77] transition-colors"
              >
                <MessageCircle size={16} strokeWidth={1.5} className="text-[#b89d77]" />
                <span className="font-light">Send a message</span>
              </Link>
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              data-testid="ask-ray-cta"
              className="btn-pill btn-pill-dark mt-7 w-full text-center"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskRay;
