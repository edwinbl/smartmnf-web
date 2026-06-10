import { Sparkles, BarChart3, Wand2, Map, Users, ClipboardCheck } from "lucide-react";

const futures = [
  {
    icon: ClipboardCheck,
    title: "Interactive Assessments",
    desc: "Self-guided, scoring-driven assessments with real-time benchmarks.",
  },
  {
    icon: BarChart3,
    title: "Industry Benchmarking",
    desc: "Compare your maturity against peers by sector, size and geography.",
  },
  {
    icon: Wand2,
    title: "Personalized Recommendations",
    desc: "Curated next-best actions based on your context and ambition.",
  },
  {
    icon: Map,
    title: "Transformation Roadmaps",
    desc: "Outcome-linked, multi-quarter plans tailored to your starting point.",
  },
  {
    icon: Users,
    title: "Ecosystem Matchmaking",
    desc: "Smart matching with solution providers, mentors and partners.",
  },
];

export const AboutLivingPlatform = () => {
  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-3xl mb-12">
          <div className="section-eyebrow mb-3 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--red-600))]" /> Living Platform
          </div>
          <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
            A Platform That Continues to Evolve
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
            The platform will continue to expand with new assessments, insights,
            benchmarks, ecosystem partnerships and transformation pathways to support
            manufacturers at every stage of their journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {futures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="relative rounded-2xl border bg-white p-6 overflow-hidden"
                style={{
                  borderColor: "hsl(var(--neutral-150))",
                  borderStyle: "dashed",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.5]"
                  style={{
                    backgroundImage:
                      "radial-gradient(hsl(var(--neutral-200) / 0.6) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div
                      className="h-11 w-11 rounded-xl grid place-items-center"
                      style={{
                        background: "hsl(var(--navy-050))",
                        color: "hsl(var(--navy-700))",
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: "hsl(var(--orange-100))",
                        color: "hsl(var(--orange-600))",
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--orange-500))] animate-pulse" />
                      Coming Soon
                    </span>
                  </div>
                  <div className="mt-5 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                    {f.title}
                  </div>
                  <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
