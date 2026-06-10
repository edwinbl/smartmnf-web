import { Rocket, Factory, Compass, ArrowRight } from "lucide-react";

const pathways = [
  {
    icon: Rocket,
    title: "MSME Transformation Pathway",
    description: "From assessment to first pilot to scale-up.",
    steps: ["Readiness Workshop", "Transformation Bootcamp", "Smart Factory Bootcamp"],
    accent: "hsl(var(--orange-500))",
  },
  {
    icon: Factory,
    title: "Smart Factory Practitioner Pathway",
    description: "Build hands-on capability for connected operations.",
    steps: ["IoT & Analytics Certification", "Lean Meets Digital", "AI for Operations"],
    accent: "hsl(180 60% 38%)",
  },
  {
    icon: Compass,
    title: "Transformation Leader Pathway",
    description: "Become the leader who scales Industry 4.0 across the enterprise.",
    steps: ["Smart Mfg Leadership", "Women in Manufacturing", "Net-Zero Certification"],
    accent: "hsl(var(--navy-700))",
  },
];

export const LearningPathways = () => (
  <section className="py-16 md:py-20">
    <div className="container-cii">
      <div className="max-w-2xl mb-10">
        <div className="section-eyebrow mb-3">Learning Pathways</div>
        <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
          Sequenced journeys, not standalone courses
        </h2>
        <p className="mt-3 text-base text-[hsl(var(--neutral-700))]">
          Each pathway combines programmes that build on each other â designed by India's transformation practitioners.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pathways.map((p) => {
          const Icon = p.icon;
          return (
            <article key={p.title} className="cii-card p-6 flex flex-col">
              <div
                className="h-11 w-11 rounded-md grid place-items-center text-white mb-4"
                style={{ background: p.accent }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">{p.title}</h3>
              <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))]">{p.description}</p>
              <ol className="mt-5 space-y-2 flex-1">
                {p.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      className="h-6 w-6 rounded-full grid place-items-center text-[11px] font-numeric font-bold text-white shrink-0"
                      style={{ background: p.accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-[hsl(var(--navy-800))] pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
              <a
                href="#programmes-grid"
                className="link-arrow mt-6"
              >
                Explore this pathway <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
