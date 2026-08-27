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
  { icon: Hammer,         name: "Renovations & Additions", image: IMAGES.renovationsRender },
  { icon: Building2,      name: "Commercial Builds",       image: IMAGES.commercialBuildsRender },
  { icon: Truck,          name: "Heavy Equipment",         image: IMAGES.heavyEquipmentRender },
  { icon: Warehouse,      name: "Storage Rentals",         image: IMAGES.storageRentalsRender },
];

// Split offerings into top row (first 4) and bottom row (last 3) for the 4+3 desktop layout
const TOP_ROW = OFFERINGS.slice(0, 4);
const BOTTOM_ROW = OFFERINGS.slice(4);

const OfferingCard = ({ offering, index }) => {
  const Icon = offering.icon;
  return (
    <Reveal variant="scale" delay={(index % 4) * 80}>
      <Link
        to="/what-we-offer"
        data-testid={`offering-card-${offering.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        className="group relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={offering.image}
          alt={offering.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <Icon className="text-[#c9a96e] mb-4" size={26} strokeWidth={1.4} />
          <div className="eyebrow eyebrow-light mb-2">{offering.name}</div>
          <div className="mt-3 h-[2px] w-8 bg-[#c9a96e] transition-all duration-500 group-hover:w-16" />
        </div>
      </Link>
    </Reveal>
  );
};

export const ServiceCards = () => {
  return (
    <section data-testid="what-we-offer-section" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <h2
              className="mt-8 font-display text-[#01261d] leading-tight tracking-tight uppercase"
              style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)" }}
            >
              What We Offer
            </h2>
            <div className="flex justify-center mt-8"><GoldRule delay={300} /></div>
          </div>
        </Reveal>

        {/* Top row — 4 cards on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {TOP_ROW.map((o, i) => (
            <OfferingCard key={o.name} offering={o} index={i} />
          ))}
        </div>

        {/* Bottom row — 3 cards on desktop (centered), 2 on mobile */}
        <div className="mt-5 md:mt-6 grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:max-w-[75%] lg:mx-auto">
          {BOTTOM_ROW.map((o, i) => (
            <OfferingCard key={o.name} offering={o} index={i + 4} />
          ))}
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
