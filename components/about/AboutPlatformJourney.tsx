import { Gauge, BookOpen, Compass, Network, Workflow } from "lucide-react";

const steps = [
  { icon: Gauge, title: "Assess", desc: "Understand your current readiness with structured maturity assessments." },
  { icon: BookOpen, title: "Learn", desc: "Access practical insights, research and curated knowledge resources." },
  { icon: Compass, title: "Discover", desc: "Learn from real-world implementations and peer case studies." },
  { icon: Network, title: "Connect", desc: "Find ecosystem partners, solution providers and domain experts." },
  { icon: Workflow, title: "Transform", desc: "Build a transformation pathway tailored to your context and pace." },
];

export const AboutPlatformJourney = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div className="max-w-3xl mb-12">
          <div className="section-eyebrow mb-3">Why This Platform Exists</div>
          <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
            A Single Platform for Smart Manufacturing Discovery and Adoption
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
            Five connected steps that turn intent into action â from understanding where
            you stand to building a concrete transformation pathway.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-5 gap-4">
            {/* connector line */}
            <div
              className="absolute top-7 left-[10%] right-[10%] h-0.5"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--navy-600)), hsl(var(--orange-500)), hsl(var(--red-600)))",
              }}
              aria-hidden
            />
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative flex flex-col items-center text-center group">
                  <div
                    className="relative h-14 w-14 rounded-full grid place-items-center text-white shadow-lg z-10 transition-transform group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
                    }}
                  >
                    <Icon className="h-6 w-6" />
                    <span
                      className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full grid place-items-center text-[10px] font-bold text-white border-2 border-white"
                      style={{ background: "hsl(var(--red-600))" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-5 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed max-w-[220px]">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="h-12 w-12 rounded-full grid place-items-center text-white shadow-md flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: "hsl(var(--neutral-200))" }} />
                  )}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[hsl(var(--red-600))]">
                      Step {i + 1}
                    </span>
                  </div>
                  <div className="mt-0.5 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                    {s.title}
                  </div>
                  <p className="mt-1 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                    {s.desc}
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
