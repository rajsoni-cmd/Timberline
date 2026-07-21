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
import { IMAGES, BANNER_INTERIOR } from "../lib/images";

const OFFERINGS = [
  {
    icon: Compass,
    name: "Custom Design",
    image: IMAGES.greatRoomBar,
    body: "Our in-house design consultants and architectural technologists translate your vision, land, and lifestyle into detailed drawings. Every plan is bespoke — no template ever leaves our studio.",
    highlights: ["Site-specific design", "3D visualizations", "Interior selections"],
  },
  {
    icon: ClipboardCheck,
    name: "Planning & Permitting",
    image: IMAGES.processHero,
    body: "We manage every township, conservation authority, and engineering approval so your project stays on schedule. Complete file preparation and coordination with your municipal partners.",
    highlights: ["Building permits", "Conservation approvals", "Engineering coordination"],
  },
  {
    icon: HomeIcon,
    name: "Custom Builds",
    image: IMAGES.cottageExterior,
    body: "Custom homes, cottages, boathouses, bunkies and garages — every build managed by a Timberline Project Manager and delivered by our long-tenured field team.",
    highlights: ["Custom homes & cottages", "Boathouses & bunkies", "Garages & outbuildings"],
  },
  {
    icon: Hammer,
    name: "Renovations & Additions",
    image: IMAGES.user18,
    body: "Reimagine an existing home or expand it with sensitivity to what's already there. Our carpenters have worked on heritage and new-build alike — the transition is seamless.",
    highlights: ["Full home renovations", "Kitchen & bath", "Structural additions"],
  },
  {
    icon: Building2,
    name: "Commercial Builds",
    image: BANNER_INTERIOR,
    body: "Purpose-built commercial spaces with the same craft as our residential work — mixed-use, hospitality, professional offices, and light industrial across Peterborough & the Kawarthas.",
    highlights: ["Mixed-use buildings", "Hospitality spaces", "Professional offices"],
  },
  {
    icon: Warehouse,
    name: "Storage Rentals",
    image: IMAGES.user11,
    body: "Modern, dry, secure storage units in Woodview — sized for seasonal, boat, contractor, and cottage-country storage with drive-up access year-round.",
    highlights: ["Multiple unit sizes", "Drive-up access", "Woodview, ON"],
  },
  {
    icon: Truck,
    name: "Heavy Equipment",
    image: IMAGES.experienceBg,
    body: "In 2014 we built a 3,200 sq ft shop to house and maintain our heavy equipment fleet — keeping excavation, septic, backfilling, landscaping and site services fully in-house.",
    highlights: ["Excavation & site prep", "Septic installation", "Landscaping & grading"],
  },
];

const WhatWeOffer = () => {
  return (
    <main data-testid="what-we-offer-page">
      <PageHero
        eyebrow="Complete Service"
        title="What We Offer"
        subtitle="From the first sketch to the last coat of stain — every discipline under one roof."
        image={BANNER_INTERIOR}
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
        const anchorId = svc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
                  <div className="eyebrow mt-6">{svc.name}</div>
                  <h3
                    className="mt-4 font-display text-[#01261d] leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}
                  >
                    {svc.body}
                  </h3>
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
            <Link to="/contact" data-testid="wwo-cta" className="btn-pill mt-12 border-[#c9a96e] text-white hover:bg-[#c9a96e] hover:text-white hover:border-[#c9a96e]">
              Begin a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default WhatWeOffer;
