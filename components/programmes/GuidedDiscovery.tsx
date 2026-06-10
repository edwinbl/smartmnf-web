"use client";

import { Rocket, Gauge, Factory, Leaf, Users, Store, Compass, X, ArrowRight } from "lucide-react";
import { outcomes, type OutcomeId } from "@/data/programmes";

const iconMap = { rocket: Rocket, gauge: Gauge, factory: Factory, leaf: Leaf, users: Users, store: Store, compass: Compass } as const;

interface Props {
  selected: OutcomeId | null;
  onSelect: (id: OutcomeId | null) => void;
}

export const GuidedDiscovery = ({ selected, onSelect }: Props) => {
  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]" id="guided-discovery">
      <div className="container-cii">
        <div className="max-w-2xl">
          <div className="section-eyebrow mb-3">Guided Discovery</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            What are you looking to achieve?
          </h2>
          <p className="mt-3 text-base text-[hsl(var(--neutral-700))]">
            Tell us your goal â we'll recommend the right programmes, workshops and learning pathways for you.
          </p>
        </div>

        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => {
            const Icon = iconMap[o.icon];
            const active = selected === o.id;
            const palettes = [
              { bg: "hsl(var(--red-50))", iconBg: "hsl(var(--red-100))", iconFg: "hsl(var(--red-700))", bar: "hsl(var(--red-600))", border: "hsl(var(--red-200))" },
              { bg: "hsl(var(--orange-100) / 0.5)", iconBg: "hsl(var(--orange-100))", iconFg: "hsl(var(--orange-600))", bar: "hsl(var(--orange-500))", border: "hsl(var(--orange-200))" },
              { bg: "hsl(var(--navy-050))", iconBg: "hsl(var(--navy-100))", iconFg: "hsl(var(--navy-700))", bar: "hsl(var(--navy-600))", border: "hsl(var(--navy-100))" },
              { bg: "hsl(var(--india-green) / 0.08)", iconBg: "hsl(var(--india-green) / 0.15)", iconFg: "hsl(var(--india-green))", bar: "hsl(var(--india-green))", border: "hsl(var(--india-green) / 0.25)" },
            ];
            const p = palettes[i % palettes.length];
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => onSelect(active ? null : o.id)}
                className={`group text-left cii-card bg-white p-5 transition-all relative overflow-hidden animate-fade-in hover:-translate-y-0.5 ${
                  active ? "ring-2 ring-[hsl(var(--red-600))] border-[hsl(var(--red-600))]" : ""
                }`}
                style={{ animationDelay: `${i * 60}ms`, borderColor: active ? undefined : p.border }}
              >
                <span
                  className="h-1 absolute top-0 left-0 right-0 transition-all"
                  style={{ background: p.bar }}
                />
                <div
                  className="h-10 w-10 rounded-md grid place-items-center mb-3 transition-colors"
                  style={{ background: p.iconBg, color: p.iconFg }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-[15px] text-[hsl(var(--navy-900))] leading-snug">{o.title}</h3>
                <p className="mt-1.5 text-xs text-[hsl(var(--neutral-700))] line-clamp-2">{o.description}</p>
                <div
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold transition-colors"
                  style={{ color: active ? "hsl(var(--red-700))" : p.iconFg }}
                >
                  {active ? "Recommended" : "See programmes"} <ArrowRight className="h-3 w-3" />
                </div>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--navy-700))] bg-white border border-[hsl(var(--neutral-200))] rounded-full pl-3 pr-1 py-1 animate-fade-in">
            Recommending programmes for: {outcomes.find((o) => o.id === selected)?.title}
            <button
              onClick={() => onSelect(null)}
              className="h-6 w-6 rounded-full grid place-items-center hover:bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-500))]"
              aria-label="Clear outcome"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
