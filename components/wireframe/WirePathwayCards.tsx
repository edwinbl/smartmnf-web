"use client";

import Link from "next/link";
import { WireSection } from "./WireSection";
import { ClipboardCheck, Layers, GraduationCap, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const pathways = [
  {
    icon: ClipboardCheck,
    title: "Assess Readiness",
    desc: "Access maturity assessment models to understand where your organisation stands.",
    cta: "Access assessments",
    href: "/readiness-assessment",
    accent: "red" as const,
  },
  {
    icon: Layers,
    title: "Explore Solutions",
    desc: "Explore solution areas linked to business problems and outcomes.",
    cta: "Explore solutions",
    href: "/solutions",
    accent: "navy" as const,
  },
  {
    icon: GraduationCap,
    title: "Join Programmes",
    desc: "Access CII programmes, workshops and training opportunities.",
    cta: "View programmes",
    href: "/programmes",
    accent: "navy" as const,
  },
  {
    icon: Calendar,
    title: "View Events",
    desc: "Explore upcoming and past smart manufacturing events.",
    cta: "View events",
    href: "/events",
    accent: "navy" as const,
  },
  {
    icon: MessageCircle,
    title: "Ask the Assistant",
    desc: "Use the Smart Manufacturing Assistant to find approved portal content.",
    cta: "Open assistant",
    href: "#chatbot",
    accent: "orange" as const,
  },
];

const accentMap = {
  red: {
    iconBg: "bg-gradient-to-br from-cii-red to-[hsl(var(--red-700))]",
    iconRing: "ring-[hsl(var(--red-100))]",
    glow: "from-[hsl(var(--red-100))] to-transparent",
    bar: "from-cii-red to-[hsl(var(--red-700))]",
    hoverText: "group-hover:text-cii-red",
    num: "text-cii-red",
  },
  navy: {
    iconBg: "bg-gradient-to-br from-navy-700 to-navy-900",
    iconRing: "ring-[hsl(var(--navy-100))]",
    glow: "from-[hsl(var(--navy-100))] to-transparent",
    bar: "from-navy-700 to-navy-900",
    hoverText: "group-hover:text-navy-700",
    num: "text-navy-700",
  },
  orange: {
    iconBg: "bg-gradient-to-br from-cii-orange to-[hsl(var(--orange-600))]",
    iconRing: "ring-[hsl(var(--orange-100))]",
    glow: "from-[hsl(var(--orange-100))] to-transparent",
    bar: "from-cii-orange to-[hsl(var(--orange-600))]",
    hoverText: "group-hover:text-[hsl(var(--orange-600))]",
    num: "text-[hsl(var(--orange-600))]",
  },
};

export const WirePathwayCards = () => {
  return (
    <WireSection
      eyebrow="Choose your starting point"
      title="Where would you like to begin?"
      intro="The portal is designed for action. Pick a pathway and the platform will guide your next steps."
    >
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {pathways.map((p, idx) => {
          const a = accentMap[p.accent];
          const Icon = p.icon;
          const isInternal = p.href.startsWith("/") && !p.href.startsWith("//");
          const cardClass =
            "group relative flex flex-col p-6 rounded-xl bg-white border border-[hsl(var(--neutral-150))] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_hsl(var(--navy-800)/0.18)] hover:border-transparent";
          const cardContent = (
            <>
              {/* Top gradient bar */}
              <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar} opacity-90`} />

              {/* Decorative corner glow */}
              <span
                className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${a.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
              />

              {/* Step number watermark */}
              <span
                className={`absolute top-3 right-4 font-numeric font-bold text-[44px] leading-none ${a.num} opacity-[0.07] group-hover:opacity-20 transition-opacity`}
              >
                0{idx + 1}
              </span>

              {/* Icon */}
              <div
                className={`relative h-12 w-12 rounded-xl grid place-items-center mb-5 ${a.iconBg} ring-4 ${a.iconRing} shadow-md group-hover:scale-110 group-hover:rotate-[-4deg] transition-transform duration-300`}
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={2.25} />
              </div>

              <h3
                className={`font-display font-bold text-[17px] text-navy-800 leading-tight transition-colors ${a.hoverText}`}
              >
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] flex-1">{p.desc}</p>

              <span className="link-arrow mt-5 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {p.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </>
          );
          return isInternal ? (
            <Link key={p.title} href={p.href} className={cardClass}>
              {cardContent}
            </Link>
          ) : (
            <a
              key={p.title}
              href={p.href}
              onClick={(e) => {
                if (p.href === "#chatbot") {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-assistant"));
                }
              }}
              className={cardClass}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </WireSection>
  );
};
