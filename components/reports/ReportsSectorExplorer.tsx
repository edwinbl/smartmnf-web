"use client";

import { Factory, ArrowRight, Sparkles } from "lucide-react";
import { reports } from "@/data/reports";

interface Props {
  onSelect?: (industry: string) => void;
}

const sectorMeta: Record<
  string,
  { tagline: string; gradient: string }
> = {
  Manufacturing: {
    tagline: "Cross-sector Industry 4.0 intelligence",
    gradient:
      "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
  },
  Automotive: {
    tagline: "EV transition, supply chains and mobility",
    gradient:
      "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--orange-500)))",
  },
  Textiles: {
    tagline: "Cluster-scale digital transformation",
    gradient:
      "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
  },
  Pharma: {
    tagline: "Pharma 4.0 and compliance-led digital",
    gradient:
      "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--india-green)))",
  },
  "Cross-sector": {
    tagline: "Skills, workforce and ecosystem research",
    gradient:
      "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--navy-700)))",
  },
};

export const ReportsSectorExplorer = ({ onSelect }: Props) => {
  const counts = reports.reduce<Record<string, number>>((acc, r) => {
    acc[r.industry] = (acc[r.industry] || 0) + 1;
    return acc;
  }, {});

  const sectors = Object.entries(counts).map(([name, count]) => {
    const latest = reports
      .filter((r) => r.industry === name)
      .sort((a, b) => b.year - a.year)[0];
    return {
      name,
      count,
      latestTitle: latest?.title,
      latestDate: latest?.publishedOn,
      tagline: sectorMeta[name]?.tagline ?? "Sector intelligence and benchmarks",
      gradient:
        sectorMeta[name]?.gradient ??
        "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
    };
  });

  return (
    <section className="py-14 md:py-20">
      <div className="container-cii">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <div className="section-eyebrow mb-2">Sector Insights Explorer</div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
              Intelligence tailored to your sector
            </h2>
            <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
              Browse research and reports curated for India's priority manufacturing
              sectors â with the latest publication surfaced for each.
            </p>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 snap-x pb-2 scrollbar-none">
          {sectors.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => {
                onSelect?.(s.name);
                document
                  .getElementById("reports")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group snap-start shrink-0 w-[280px] md:w-[320px] cii-card overflow-hidden text-left transition-all hover:-translate-y-0.5"
            >
              <div
                className="relative h-32 p-5 text-white flex flex-col justify-between"
                style={{ background: s.gradient }}
              >
                <Factory className="h-6 w-6 opacity-90" />
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.14em] font-bold opacity-85">
                      Reports
                    </div>
                    <div className="font-numeric text-2xl font-extrabold">
                      {s.count}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur px-2 py-0.5 rounded-full">
                    <Sparkles className="h-3 w-3" />
                    Latest
                  </span>
                </div>
                <div
                  className="absolute inset-0 opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug group-hover:text-[hsl(var(--red-600))] transition-colors">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-xs text-[hsl(var(--neutral-500))]">
                  {s.tagline}
                </p>
                {s.latestTitle && (
                  <div
                    className="mt-4 pt-4 border-t"
                    style={{ borderColor: "hsl(var(--neutral-150))" }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))]">
                      Featured Â· {s.latestDate}
                    </div>
                    <p className="mt-1 text-[13px] font-semibold text-[hsl(var(--navy-800))] leading-snug line-clamp-2">
                      {s.latestTitle}
                    </p>
                  </div>
                )}
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
                  Explore sector
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
