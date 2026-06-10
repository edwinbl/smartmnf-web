import { TrendingUp, AlertCircle, Lightbulb, BarChart3 } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export const ReportKeyInsightsSnapshot = ({ report }: Props) => {
  const insights = [
    {
      Icon: AlertCircle,
      stat: "67%",
      label: "MSMEs face operational visibility gaps",
      tone: "orange",
    },
    {
      Icon: BarChart3,
      stat: report.highlightStat.value,
      label: report.highlightStat.label,
      tone: "navy",
    },
    {
      Icon: TrendingUp,
      stat: "2.3Ã",
      label: "Partner-led journeys scale faster than solo pilots",
      tone: "green",
    },
    {
      Icon: Lightbulb,
      stat: "18 mo",
      label: "Average break-even on digital pilots",
      tone: "navy",
    },
  ];

  const toneBg = (tone: string) => {
    if (tone === "orange") return "hsl(var(--orange-100))";
    if (tone === "green") return "hsl(var(--india-green) / 0.12)";
    return "hsl(var(--navy-050))";
  };
  const toneFg = (tone: string) => {
    if (tone === "orange") return "hsl(var(--orange-600))";
    if (tone === "green") return "hsl(var(--india-green))";
    return "hsl(var(--navy-700))";
  };

  return (
    <section className="mt-12">
      <div className="section-eyebrow mb-2">Key Insights Snapshot</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Executive insights at a glance
      </h2>
      <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl leading-relaxed">
        The headline numbers and shifts shaping the narrative inside this report â designed
        for fast scanning by leadership teams.
      </p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((i) => {
          const Icon = i.Icon;
          return (
            <div key={i.label} className="cii-card p-5 flex flex-col gap-4">
              <div
                className="h-10 w-10 rounded-md grid place-items-center"
                style={{ background: toneBg(i.tone), color: toneFg(i.tone) }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-numeric text-3xl font-extrabold text-[hsl(var(--navy-900))] leading-none">
                  {i.stat}
                </div>
                <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-snug">
                  {i.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Highlight callout */}
      <div
        className="mt-6 cii-card p-6 md:p-7 flex flex-col md:flex-row gap-5 md:items-center"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--navy-050)), hsl(var(--orange-100)))",
        }}
      >
        <div
          className="h-12 w-12 rounded-lg grid place-items-center text-white shrink-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <Lightbulb className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--red-600))]">
            Editor's takeaway
          </div>
          <p className="mt-1 font-display font-bold text-lg md:text-xl text-[hsl(var(--navy-900))] leading-snug">
            Digital readiness remains uneven across supplier ecosystems â
            ecosystem orchestration is the single largest unlock.
          </p>
        </div>
      </div>
    </section>
  );
};
