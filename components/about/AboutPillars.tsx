const pillars = [
  {
    num: "01",
    title: "Assess",
    subtitle:
      "Start with a clear maturity baseline. Benchmark against sector peers and identify the priority gaps to address first.",
    tone: "navy" as const,
  },
  {
    num: "02",
    title: "Guide",
    subtitle:
      "Stay informed with curated reports, relevant case studies, and expert research tailored to Indian manufacturing.",
    tone: "orange" as const,
  },
  {
    num: "03",
    title: "Enable",
    subtitle:
      "Build real capability through structured adoption pathways, hands-on training, and ready-to-use playbooks.",
    tone: "green" as const,
  },
  {
    num: "04",
    title: "Connect",
    subtitle:
      "Find the right solution providers, domain experts, and partners to accelerate your transformation journey.",
    tone: "red" as const,
  },
  {
    num: "05",
    title: "Recognise",
    subtitle:
      "Gain visibility through awards, certification, and peer showcases that celebrate and motivate progress.",
    tone: "saffron" as const,
  },
];

const toneStyles = {
  navy: {
    bar: "hsl(var(--navy-700))",
    accent: "hsl(var(--navy-700))",
  },
  orange: {
    bar: "hsl(var(--orange-500))",
    accent: "hsl(var(--orange-600))",
  },
  green: {
    bar: "hsl(var(--india-green))",
    accent: "hsl(var(--india-green))",
  },
  red: {
    bar: "hsl(var(--red-600))",
    accent: "hsl(var(--red-600))",
  },
  saffron: {
    bar: "hsl(var(--saffron))",
    accent: "hsl(30 90% 45%)",
  },
};

const unifiedGradient = "linear-gradient(180deg, hsl(var(--neutral-50)) 0%, hsl(0 0% 100%) 70%)";

export const AboutPillars = () => {
  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--navy-050)/0.4)]">
      <div className="container-cii">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <div className="section-eyebrow mb-3">About CII Smart Manufacturing</div>
          <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
            A platform built to move Indian manufacturing forward.
          </h2>
          <p className="mt-5 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
            CII Smart Manufacturing is an industry-led, mission-driven platform that helps
            manufacturers progress through every stage of their transformation â anchored
            in five capability tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {pillars.map((p) => {
            const s = toneStyles[p.tone];
            return (
              <div
                key={p.title}
                className="relative overflow-hidden rounded-2xl border border-[hsl(var(--neutral-200))] bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
                style={{ background: unifiedGradient }}
              >
                <div className="h-1.5 w-full" style={{ background: s.bar }} />
                <div className="p-6 flex flex-col h-full">
                  <div className="text-sm font-semibold tracking-wider text-[hsl(var(--neutral-500))]">
                    {p.num}
                  </div>
                  <div className="mt-8 font-display text-2xl font-extrabold text-[hsl(var(--navy-900))]">
                    {p.title}
                  </div>
                  <p className="mt-5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                    {p.subtitle}
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
