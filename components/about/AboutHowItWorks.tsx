import { ClipboardCheck, Compass, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { Icon: ClipboardCheck, title: "Assess", body: "Take the maturity assessment and see where you stand." },
  { Icon: Compass, title: "Get Guidance", body: "Receive a personalised roadmap from experts." },
  { Icon: Rocket, title: "Connect & Adopt", body: "Engage partners, deploy solutions, and scale." },
];

export const AboutHowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-cii">
        <div className="max-w-3xl">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Three steps to start transforming.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-0 relative">
          {steps.map(({ Icon, title, body }, i) => (
            <div key={title} className="relative">
              <div className="cii-card p-7 h-full">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 grid place-items-center rounded-full"
                    style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="font-numeric text-xs font-bold text-[hsl(var(--neutral-400))]">
                    STEP {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-[hsl(var(--neutral-500))] leading-relaxed">{body}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 text-[hsl(var(--neutral-400))] z-10 bg-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
