"use client";

import { TrendingUp, Globe2, Leaf, Eye, ArrowRight } from "lucide-react";

interface Props {
  onSelect?: (tag: string) => void;
}

const themes = [
  {
    key: "Productivity",
    title: "Improve Productivity",
    description:
      "Operational excellence, automation and digital shop-floor reports to lift output and efficiency.",
    Icon: TrendingUp,
    stat: "32+ reports",
    gradient:
      "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
    accent: "hsl(var(--orange-500))",
  },
  {
    key: "Export Competitiveness",
    title: "Export Competitiveness",
    description:
      "Global readiness pathways, compliance frameworks and corridors mapped for Indian manufacturers.",
    Icon: Globe2,
    stat: "18+ reports",
    gradient:
      "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
    accent: "hsl(var(--orange-100))",
  },
  {
    key: "Sustainability",
    title: "Sustainability & Energy",
    description:
      "Decarbonisation, circularity and energy-efficiency intelligence shaping the next decade.",
    Icon: Leaf,
    stat: "24+ reports",
    gradient:
      "linear-gradient(135deg, hsl(var(--india-green)), hsl(var(--navy-700)))",
    accent: "hsl(var(--india-green))",
  },
  {
    key: "Traceability",
    title: "Traceability & Visibility",
    description:
      "Data-driven visibility, IIoT and supply-chain traceability research for resilient operations.",
    Icon: Eye,
    stat: "21+ reports",
    gradient:
      "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-600)))",
    accent: "hsl(var(--navy-100))",
  },
];

export const ReportsThemesExplorer = ({ onSelect }: Props) => {
  return (
    <section
      className="py-14 md:py-20"
      style={{ background: "hsl(var(--neutral-50))" }}
    >
      <div className="container-cii">
        <div className="max-w-2xl mb-10">
          <div className="section-eyebrow mb-2">Explore by Outcome</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            Discover reports by the business outcome you care about
          </h2>
          <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
            Skip document categories â start from the transformation outcome you want
            and let curated intelligence guide you to the right insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {themes.map((t) => {
            const Icon = t.Icon;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => {
                  onSelect?.(t.key);
                  document
                    .getElementById("reports")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group relative overflow-hidden text-left cii-card p-0 transition-all hover:-translate-y-0.5"
              >
                <div
                  className="relative p-7 md:p-8 text-white"
                  style={{ background: t.gradient }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.16] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                    aria-hidden
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg grid place-items-center bg-white/15 backdrop-blur">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.14em] font-bold bg-white/15 backdrop-blur px-2.5 py-1 rounded-full">
                      {t.stat}
                    </span>
                  </div>
                  <h3 className="relative mt-6 font-display font-bold text-xl md:text-2xl leading-tight">
                    {t.title}
                  </h3>
                  <p className="relative mt-2 text-sm text-white/85 leading-relaxed max-w-md">
                    {t.description}
                  </p>
                  <div className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-semibold">
                    Explore {t.title.toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
