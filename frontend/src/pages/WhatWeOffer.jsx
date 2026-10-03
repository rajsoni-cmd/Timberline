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
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { banner } from "../lib/cms";
import { IMAGES, BANNER_INTERIOR } from "../lib/images";

const OFFERINGS = [
  {
    id: "custom-design",
    icon: Compass,
    name: "Custom Design",
    image: IMAGES.greatRoomBar,
    body: [
      "Whether you\u2019re beginning with a collection of ideas or arriving with a fully developed architectural design, Timberline brings your vision to life through a highly personalized design experience. Our in-house design team works closely with you to refine your ideas, thoughtfully consider every detail, and transform your vision into an exceptional 3D rendering. From the first concept to the final design, every detail is thoughtfully considered, expertly designed and tailored to your vision.",
    ],
    highlights: ["Site-specific design", "3D visualizations", "Interior selections"],
  },
  {
    id: "planning-permitting",
    icon: ClipboardCheck,
    name: "Planning & Permitting",
    image: IMAGES.processHero,
    body: [
      "The planning and permitting process can often feel overwhelming, but with Timberline, you don\u2019t have to navigate it alone. Our experienced in-house design team is well versed in the consultations, permits, approvals and requirements involved in bringing your project to life. We coordinate with the necessary professionals and authorities on your behalf, ensuring each stage is thoughtfully managed while keeping the process as seamless as possible \u2014 allowing you to focus on the excitement of watching your vision take shape.",
    ],
    highlights: ["Planning, Amendments & Variances", "Engineers, Surveys & Consultants", "Building Permits"],
  },
  {
    id: "custom-builds",
    icon: HomeIcon,
    name: "Custom Builds",
    image: IMAGES.customBuildsRender,
    body: [
      "Custom building is at the heart of what Timberline does best. Every project is thoughtfully designed around the unique character of the site, landscape, and the aspirations and vision of each client. No two projects are alike \u2014 and that is the essence of truly custom design.",
      "From the initial vision to the final detail, every Timberline project is thoughtfully crafted with exceptional design, uncompromising attention to detail, and a commitment to creating a space that is truly and uniquely your own.",
    ],
    highlights: ["Homes & Cottages", "Boathouses & Bunkies", "Garages & Outbuildings"],
  },
  {
    id: "renovations-additions",
    icon: Hammer,
    name: "Renovations & Additions",
    image: IMAGES.renovationsRender,
    body: [
      "Timberline takes the same pride in our exceptional additions and renovations as we do in the homes and cottages we build. Every project begins by listening closely to our clients\u2019 needs, aspirations, and vision, allowing us to create a design that is both beautifully considered and uniquely their own.",
      "Blending new construction seamlessly with an existing home presents its own challenges \u2014 and it\u2019s a challenge we embrace. Our expertise lies in thoughtfully marrying old and new, creating refined spaces where timeless character meets modern design.",
    ],
    highlights: ["Home Renovations", "Additions", "Decks & Docks"],
  },
  {
    id: "commercial-builds",
    icon: Building2,
    name: "Commercial Projects",
    image: IMAGES.commercialBuildsRender,
    body: [
      "Timberline\u2019s expertise extends beyond residential design and construction. Over the years, we have designed and constructed distinctive commercial projects throughout the area, including our own office building and shops.",
    ],
    highlights: ["New Commercial Buildings", "Space Renovations", "Structural Additions"],
  },
  {
    id: "storage-rentals",
    icon: Warehouse,
    name: "Storage Rentals",
    image: IMAGES.storageRentalsRender,
    body: [
      "Whether you\u2019re preparing for an upcoming project with Timberline or simply require additional storage in the area, we offer convenient off-site storage options and storage units located behind our office.",
    ],
    highlights: ["Storage Unit Rentals", "Off-Site Trailer Storage"],
  },
  {
    id: "heavy-equipment",
    icon: Truck,
    name: "Heavy Equipment",
    image: IMAGES.heavyEquipmentRender,
    body: [
      "Working alongside our second generation, Northey Contracting, Timberline offers comprehensive heavy equipment and site development services. From site preparation, demolition, and excavation to road building and driveways, backfilling, septic installation, landscaping, and more, our experienced team provides the expertise and equipment needed to prepare your property from the ground up.",
      "With these services available through our team, we can help streamline the process from initial site preparation through to the completion of your project.",
    ],
    highlights: ["Excavation & Site Preparation", "Septic Design & Installation", "Landscaping"],
  },
];

const WhatWeOffer = () => {
  return (
    <main data-testid="what-we-offer-page">
      <PageHero
        {...banner("whatWeOffer", { eyebrow: "Complete Service", title: "What We Offer", subtitle: "From the first sketch to the last coat of stain — every discipline under one roof.", image: BANNER_INTERIOR })}
        testId="wwo-hero"
      />

      {/* COMPLETE SERVICE INTRO */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow mt-6">Design-Build Under One Roof</div>
            <h2
              className="mt-7 font-display text-[#01261d] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}
            >
              A Truly Complete Service
            </h2>
            <div className="flex justify-center mt-9"><GoldRule delay={300} /></div>
            <div className="mt-10 space-y-7 text-[#3a3531] text-base md:text-lg font-light leading-[2] text-left md:text-center">
              <p>
                At Timberline, we deliver a complete design-build experience, guiding clients through every stage of their project — from the initial concept to the finishing touches of landscaping.
              </p>
              <p>
                Our in-house team provides expertise in design, planning and permitting, material and finish selection, excavation, construction, site services, and landscaping — ensuring every aspect of the project is thoughtfully planned and seamlessly coordinated.
              </p>
              <p>
                The result is a seamless process, clear communication, and exceptional craftsmanship from start to finish.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALTERNATING SERVICE BLOCKS */}
      {OFFERINGS.map((svc, idx) => {
        const reverse = idx % 2 === 1;
        const bg = idx % 2 === 0 ? "bg-[#f5f0e6]" : "bg-white";
        const Icon = svc.icon;
        const anchorId = svc.id;
        return (
          <section
            key={svc.name}
            id={anchorId}
            data-testid={`wwo-block-${svc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className={`${bg} py-24 md:py-32 scroll-mt-28`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal
                variant={reverse ? "right" : "left"}
                className={reverse ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal
                variant={reverse ? "left" : "right"}
                delay={120}
                className={reverse ? "lg:order-1 lg:pr-6" : "lg:pl-6"}
              >
                <div>
                  <Icon className="text-[#c9a96e]" size={30} strokeWidth={1.4} />
                  <div className="mt-6"><GoldRule delay={200} /></div>
                  <div className="eyebrow mt-6">What We Offer</div>
                  <h3
                    className="mt-4 font-display text-[#01261d] leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}
                  >
                    {svc.name}
                  </h3>
                  <div className="mt-6 space-y-5 text-[#3a3531] text-base md:text-[1.05rem] font-light leading-[1.9]">
                    {svc.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <ul className="mt-8 space-y-3 text-[#3a3531] text-base font-light">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="text-[#c9a96e] mt-2 inline-block h-[1px] w-4" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* CTA BAND */}
      <section className="relative py-32 md:py-44 bg-[#01261d] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns opacity-30"
          style={{ backgroundImage: `url(${IMAGES.experienceBg})` }}
        />
        <div className="absolute inset-0 bg-[#01261d]/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center"><GoldRule delay={150} /></div>
            <div className="eyebrow eyebrow-light mt-6">Let's Begin</div>
            <h2
              className="mt-7 font-display text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}
            >
              Ready to Build Your Vision?
            </h2>
            <div className="flex justify-center mt-10"><GoldRule delay={300} /></div>
            <Link to="/contact" data-testid="wwo-cta" className="btn-pill mt-12">
              Begin a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default WhatWeOffer;
