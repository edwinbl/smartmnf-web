"use client";

import { Rocket, Handshake, Boxes, GraduationCap, LifeBuoy, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IntentKey = "journey" | "partnership" | "solution" | "training" | "support";

type IntentMeta = {
  key: IntentKey;
  title: string;
  desc: string;
  Icon: LucideIcon;
  accent: { from: string; to: string; soft: string; text: string };
};

export const INTENTS: IntentMeta[] = [
  {
    key: "journey",
    title: "Start My Industry 4.0 Journey",
    desc: "Assess readiness and chart your transformation roadmap.",
    Icon: Rocket,
    accent: {
      from: "hsl(var(--orange-500))",
      to: "hsl(var(--red-600))",
      soft: "hsl(var(--orange-100))",
      text: "hsl(var(--orange-600))",
    },
  },
  {
    key: "partnership",
    title: "Partnership & Collaboration",
    desc: "Co-create programmes, research and ecosystem initiatives.",
    Icon: Handshake,
    accent: {
      from: "hsl(var(--navy-700))",
      to: "hsl(var(--navy-500))",
      soft: "hsl(var(--navy-050))",
      text: "hsl(var(--navy-700))",
    },
  },
  {
    key: "solution",
    title: "Solution Provider Enquiries",
    desc: "Get listed and connect with manufacturers seeking solutions.",
    Icon: Boxes,
    accent: {
      from: "#7C3AED",
      to: "#4F46E5",
      soft: "#EEF2FF",
      text: "#4F46E5",
    },
  },
  {
    key: "training",
    title: "Training & Programmes",
    desc: "Upskill your teams with curated capability-building.",
    Icon: GraduationCap,
    accent: {
      from: "hsl(var(--india-green))",
      to: "#0F8A4D",
      soft: "#E6F6EC",
      text: "#0F8A4D",
    },
  },
  {
    key: "support",
    title: "Platform Support",
    desc: "Get help with assessments, accounts or platform issues.",
    Icon: LifeBuoy,
    accent: {
      from: "#0EA5E9",
      to: "#0369A1",
      soft: "#E0F2FE",
      text: "#0369A1",
    },
  },
];

interface Props {
  active: IntentKey | null;
  onSelect: (k: IntentKey) => void;
  embedded?: boolean;
}

export const ContactIntentGrid = ({ active, onSelect, embedded = false }: Props) => {
  const Cards = (
    <div className={cn("grid gap-3", embedded ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-10 gap-4")}>
      {INTENTS.map(({ key, title, desc, Icon, accent }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            aria-pressed={isActive}
            className={cn(
              "group relative text-left rounded-2xl p-5 min-h-[88px] flex items-start gap-4 border-2 bg-white overflow-hidden",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--ring))]",
              "hover:-translate-y-1 hover:shadow-xl",
              isActive ? "shadow-xl -translate-y-1" : "border-[hsl(var(--neutral-150))] shadow-sm",
            )}
            style={isActive ? { borderColor: accent.text } : undefined}
          >
            {/* Hover gradient wash */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${accent.from}0D, ${accent.to}1A)` }}
              aria-hidden
            />
            {/* Active fill */}
            {isActive && (
              <span
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${accent.from}14, ${accent.to}1F)` }}
                aria-hidden
              />
            )}
            {/* Left accent bar */}
            <span
              className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
              style={{ background: `linear-gradient(180deg, ${accent.from}, ${accent.to})` }}
              aria-hidden
            />
            {/* Decorative blob */}
            <span
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              style={{ background: accent.soft }}
              aria-hidden
            />

            {/* Icon */}
            <div
              className="relative grid place-items-center h-12 w-12 rounded-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              style={{
                background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                boxShadow: `0 8px 20px -8px ${accent.from}`,
              }}
            >
              <Icon className="h-6 w-6" strokeWidth={2.25} aria-hidden />
            </div>

            <div className="relative flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-[15px] sm:text-base font-bold leading-snug text-[hsl(var(--navy-900))]">
                  {title}
                </h3>
                {isActive ? (
                  <span
                    className="grid place-items-center h-6 w-6 rounded-full text-white shrink-0 shadow-sm"
                    style={{ background: "hsl(var(--india-green))" }}
                    aria-hidden
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                ) : (
                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: accent.text }}
                    aria-hidden
                  />
                )}
              </div>
              <p className="text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed mt-1.5">
                {desc}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );

  if (embedded) {
    return (
      <div>
        <span className="section-eyebrow">Step 1</span>
        <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
          What would you like help with?
        </h2>
        <p className="mt-3 text-sm text-[hsl(var(--neutral-700))]">
          Pick an intent â we'll route you to the right team and tailor the form.
        </p>
        <div className="mt-6">{Cards}</div>
      </div>
    );
  }

  return (
    <section id="intent" className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Step 1</span>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
            What would you like help with?
          </h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))]">
            Pick an intent â we'll route you to the right team and tailor the form below.
          </p>
        </div>
        {Cards}
      </div>
    </section>
  );
};
