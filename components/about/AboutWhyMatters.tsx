import {
  Gauge,
  ShieldCheck,
  Network,
  Leaf,
  TrendingUp,
  Sprout,
  ArrowUpRight,
} from "lucide-react";

const outcomes = [
  {
    icon: Gauge,
    title: "Improve Productivity",
    desc: "Increase efficiency and operational visibility across the shopfloor.",
    metric: "+38%",
    metricLabel: "avg throughput",
    metricPeriod: "over 5 years",
    accent: "navy",
  },
  {
    icon: ShieldCheck,
    title: "Improve Quality",
    desc: "Reduce defects and improve product consistency at scale.",
    metric: "â62%",
    metricLabel: "defect rate",
    metricPeriod: "since digitization",
    accent: "green",
  },
  {
    icon: Network,
    title: "Strengthen Traceability",
    desc: "Improve transparency across operations and supply chain.",
    metric: "100%",
    metricLabel: "lot tracking",
    metricPeriod: "within 2 years",
    accent: "orange",
  },
  {
    icon: Leaf,
    title: "Improve Energy Efficiency",
    desc: "Optimize resource utilization and reduce operational waste.",
    metric: "â24%",
    metricLabel: "energy / unit",
    metricPeriod: "in 3 years",
    accent: "green",
  },
  {
    icon: TrendingUp,
    title: "Increase Competitiveness",
    desc: "Prepare for evolving market demands and global benchmarks.",
    metric: "2.4x",
    metricLabel: "export readiness",
    metricPeriod: "since adoption",
    accent: "red",
  },
  {
    icon: Sprout,
    title: "Enable Growth",
    desc: "Build resilience, scalability and long-term sustainability.",
    metric: "+45%",
    metricLabel: "capacity",
    metricPeriod: "over 4 years",
    accent: "navy",
  },
] as const;

const accentMap = {
  navy: { bg: "hsl(var(--navy-050))", fg: "hsl(var(--navy-700))", bar: "hsl(var(--navy-600))" },
  orange: { bg: "hsl(var(--orange-100))", fg: "hsl(var(--orange-600))", bar: "hsl(var(--orange-500))" },
  green: { bg: "hsl(var(--india-green) / 0.10)", fg: "hsl(var(--india-green))", bar: "hsl(var(--india-green))" },
  red: { bg: "hsl(var(--red-100))", fg: "hsl(var(--red-600))", bar: "hsl(var(--red-600))" },
};

export const AboutWhyMatters = () => {
  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-3xl mb-12">
          <div className="section-eyebrow mb-3">Business Outcomes</div>
          <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
            Why Smart Manufacturing Matters
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
            Smart manufacturing isn't about technology for its own sake â it's about
            unlocking measurable, repeatable business outcomes that compound over time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((o) => {
            const Icon = o.icon;
            const a = accentMap[o.accent];
            return (
              <div
                key={o.title}
                className="group relative cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: a.bar }}
                  aria-hidden
                />
                <div className="flex items-start justify-between">
                  <div
                    className="h-11 w-11 rounded-xl grid place-items-center"
                    style={{ background: a.bg, color: a.fg }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <div
                      className="font-numeric font-extrabold text-2xl leading-none"
                      style={{ color: a.fg }}
                    >
                      {o.metric}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[hsl(var(--neutral-500))] mt-1 font-bold">
                      {o.metricLabel}
                    </div>
                    {o.metricPeriod && (
                      <div className="text-[10px] text-[hsl(var(--neutral-400))] mt-0.5">
                        {o.metricPeriod}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                  {o.title}
                </div>
                <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                  {o.desc}
                </p>
                <ArrowUpRight className="h-4 w-4 text-[hsl(var(--neutral-500))] absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
