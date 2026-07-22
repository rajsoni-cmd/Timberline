import { Link } from "react-router-dom";
import {
  Compass,
  ClipboardCheck,
  Home as HomeIcon,
  Hammer,
  Building2,
  Warehouse,
  Truck,
} from "lucide-react";
import Reveal, { GoldRule } from "./Reveal";
import { IMAGES } from "../lib/images";

const OFFERINGS = [
  { icon: Compass,        name: "Custom Design",           image: IMAGES.customDesignRender },
  { icon: ClipboardCheck, name: "Planning & Permitting",   image: IMAGES.planningPermittingRender },
  { icon: HomeIcon,       name: "Custom Builds",           image: IMAGES.customBuildsRender },
  { icon: Hammer,         name: "Renovation & Addition",   image: IMAGES.user18 },
  { icon: Building2,      name: "Commercial Builds",       image: IMAGES.shopBuild },
  { icon: Truck,          name: "Heavy Equipment",         image: IMAGES.experienceBg },
  { icon: Warehouse,      name: "Storage Rentals",         image: IMAGES.user11 },
];

export const ServiceCards = () => {
  return (
    <section data-testid="what-we-offer-section" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">What We Offer</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
            >
              Every Discipline. One Roof.
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {OFFERINGS.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.name} variant="scale" delay={(i % 3) * 100}>
                <Link
                  to="/what-we-offer"
                  data-testid={`offering-card-${o.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="group relative block aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={o.image}
                    alt={o.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <Icon className="text-[#c9a96e] mb-4" size={26} strokeWidth={1.4} />
                    <div className="eyebrow eyebrow-light mb-2">{o.name}</div>
                    <h3 className="font-display text-white text-2xl md:text-[1.75rem] leading-tight">
                      {o.body}
                    </h3>
                    <div className="mt-4 h-[2px] w-8 bg-[#c9a96e] transition-all duration-500 group-hover:w-16" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/what-we-offer" data-testid="what-we-offer-cta" className="btn-pill">
            See What We Offer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
