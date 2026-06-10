import { Rocket, Wrench, Anchor, GraduationCap, Landmark } from "lucide-react";

const personas = [
  {
    icon: Rocket,
    title: "The Adopter",
    desc: "MSMEs and MSME digital champions.",
    accent: "orange",
  },
  {
    icon: Wrench,
    title: "The Enabler",
    desc: "Domain experts; technology / platform providers.",
    accent: "navy",
  },
  {
    icon: Anchor,
    title: "The Anchor",
    desc: "Larger manufacturing companies.",
    accent: "red",
  },
  {
    icon: GraduationCap,
    title: "The Knowledge Partner",
    desc: "Academia and research institutions.",
    accent: "green",
  },
  {
    icon: Landmark,
    title: "The Institutional Catalyst",
    desc: "Policy bodies, international institutions and country partners.",
    accent: "navy",
  },
] as const;

const accentMap = {
  navy: { bg: "hsl(var(--navy-050))", fg: "hsl(var(--navy-700))" },
  orange: { bg: "hsl(var(--orange-100))", fg: "hsl(var(--orange-600))" },
  green: { bg: "hsl(var(--india-green) / 0.10)", fg: "hsl(var(--india-green))" },
  red: { bg: "hsl(var(--red-100))", fg: "hsl(var(--red-600))" },
};

export const AboutWhoServes = () => {
  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-3xl mb-12">
          <div className="section-eyebrow mb-3">Who This Platform Serves</div>
          <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
            Built for every role in India's manufacturing ecosystem.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
            From shopfloor leaders to ecosystem enablers â the platform meets each
            persona where they are with the tools they need to progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((p) => {
            const Icon = p.icon;
            const a = accentMap[p.accent];
            return (
              <div
                key={p.title}
                className="group cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-2xl grid place-items-center transition-transform group-hover:scale-110"
                    style={{ background: a.bg, color: a.fg }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-[hsl(var(--navy-900))] leading-tight">
                      {p.title}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
