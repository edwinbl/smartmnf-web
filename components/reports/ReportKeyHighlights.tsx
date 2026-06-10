import { TrendingUp } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export const ReportKeyHighlights = ({ report }: Props) => {
  const max = Math.max(...report.metrics.map((m) => m.value));
  return (
    <section>
      <div className="section-eyebrow mb-2">Key Highlights</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Insights you can act on â before you even download.
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {report.keyFindings.map((f, i) => (
          <div key={i} className="cii-card p-5">
            <div className="h-8 w-8 rounded-md grid place-items-center text-white font-bold text-xs"
              style={{ background: i % 2 === 0 ? "hsl(var(--navy-700))" : "hsl(var(--red-600))" }}
            >
              {i + 1}
            </div>
            <h3 className="mt-3 font-display font-bold text-base text-[hsl(var(--navy-900))]">{f.title}</h3>
            <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      {/* simple custom chart */}
      <div className="mt-6 cii-card p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--red-600))]">
              Trend
            </div>
            <h3 className="mt-1 font-display font-bold text-base text-[hsl(var(--navy-900))]">
              Industry 4.0 adoption among Indian MSMEs
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--india-green))]">
            <TrendingUp className="h-3.5 w-3.5" /> +60 pts since 2020
          </span>
        </div>
        <div className="flex items-end gap-3 h-40">
          {report.metrics.map((m, i) => (
            <div key={m.label} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-end h-full">
                <div
                  className="w-full rounded-t-md transition-all"
                  style={{
                    height: `${(m.value / max) * 100}%`,
                    background:
                      i === report.metrics.length - 1
                        ? "linear-gradient(180deg, hsl(var(--orange-500)), hsl(var(--red-600)))"
                        : "hsl(var(--navy-600) / 0.85)",
                  }}
                />
              </div>
              <div className="text-[11px] font-semibold text-[hsl(var(--neutral-500))]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* exec summary */}
      <div className="mt-10">
        <div className="section-eyebrow mb-2">Executive Summary</div>
        <div className="space-y-3 mt-4">
          {report.executiveSummary.map((p, i) => (
            <p key={i} className="text-[15px] text-[hsl(var(--neutral-700))] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
