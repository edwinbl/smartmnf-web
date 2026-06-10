"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, Compass, Cog, Network, Award } from "lucide-react";

const steps = [
  { Icon: ClipboardCheck, title: "Assess", line: "Understand where you stand on the maturity curve." },
  { Icon: Compass, title: "Guide", line: "Get a tailored roadmap built around your priorities." },
  { Icon: Cog, title: "Enable", line: "Access programmes, training and proven solutions." },
  { Icon: Network, title: "Connect", line: "Plug into the ecosystem of experts and partners." },
  { Icon: Award, title: "Recognise", line: "Celebrate progress and showcase transformation." },
];

export const AboutJourney = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={wrapRef} className="relative bg-white" style={{ height: `${steps.length * 80}vh` }}>
      <div className="sticky top-[72px] h-[calc(100vh-72px)] flex items-center overflow-hidden">
        <div className="container-cii w-full">
          <div className="max-w-3xl">
            <span className="section-eyebrow">The Journey</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              A guided path â from first assessment to national recognition.
            </h2>
          </div>

          {/* Desktop horizontal track */}
          <div className="hidden md:block mt-14 relative">
            <div className="absolute left-0 right-0 top-9 h-px bg-[hsl(var(--neutral-200))]" />
            <div
              className="absolute left-0 top-9 h-px transition-all duration-500"
              style={{
                width: `${((active + 1) / steps.length) * 100}%`,
                background: "linear-gradient(to right, hsl(var(--orange-500)), hsl(var(--red-600)))",
              }}
            />
            <ol className="grid grid-cols-5 gap-4 relative">
              {steps.map(({ Icon, title, line }, i) => {
                const isActive = i <= active;
                return (
                  <li key={title} className="text-center">
                    <div
                      className={`mx-auto h-[72px] w-[72px] grid place-items-center rounded-full border-2 bg-white transition-all duration-500 ${
                        isActive
                          ? "border-[hsl(var(--red-600))] text-[hsl(var(--red-600))] scale-110 shadow-lg"
                          : "border-[hsl(var(--neutral-200))] text-[hsl(var(--neutral-400))]"
                      }`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <div className={`mt-5 font-display text-lg font-bold transition-colors ${isActive ? "text-navy-900" : "text-[hsl(var(--neutral-400))]"}`}>
                      {title}
                    </div>
                    <p className={`mt-2 text-sm leading-snug transition-opacity ${isActive ? "opacity-100" : "opacity-50"} text-[hsl(var(--neutral-500))]`}>
                      {line}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile vertical */}
          <ol className="md:hidden mt-10 space-y-4 relative pl-10 before:absolute before:left-[18px] before:top-2 before:bottom-2 before:w-px before:bg-[hsl(var(--neutral-200))]">
            {steps.map(({ Icon, title, line }, i) => {
              const isActive = i <= active;
              return (
                <li key={title} className="relative">
                  <span
                    className={`absolute -left-10 top-1 grid h-9 w-9 place-items-center rounded-full border-2 bg-white transition-all ${
                      isActive ? "border-[hsl(var(--red-600))] text-[hsl(var(--red-600))]" : "border-[hsl(var(--neutral-200))] text-[hsl(var(--neutral-400))]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className={`font-display font-bold ${isActive ? "text-navy-900" : "text-[hsl(var(--neutral-400))]"}`}>{title}</div>
                  <p className="text-sm text-[hsl(var(--neutral-500))]">{line}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
