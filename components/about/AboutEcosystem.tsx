"use client";

import { useState } from "react";

const stakeholders = [
  { key: "msme", label: "MSMEs", role: "The transformation seekers", desc: "Assess readiness, pick solutions, and adopt with confidence." },
  { key: "ent", label: "Enterprises", role: "The torchbearers", desc: "Share playbooks, mentor MSMEs, and anchor industry standards." },
  { key: "tech", label: "Technology", role: "The enablers", desc: "Offer proven solutions, demos and reference architectures." },
  { key: "acad", label: "Academia", role: "The capability builders", desc: "Train the next-generation Industry 4.0 workforce." },
  { key: "govt", label: "Government", role: "The catalysts", desc: "Policy, incentives and national-scale enablement." },
  { key: "exp", label: "Experts", role: "The advisors", desc: "Diagnose gaps, design roadmaps, and guide execution." },
  { key: "global", label: "Global Orgs", role: "The collaborators", desc: "Bring world-class benchmarks and partnerships." },
];

export const AboutEcosystem = () => {
  const [active, setActive] = useState(stakeholders[0]);
  return (
    <section id="ecosystem" className="py-20 lg:py-28 text-white" style={{ background: "hsl(var(--navy-900))" }}>
      <div className="container-cii">
        <div className="max-w-3xl">
          <span className="cii-chip cii-chip-orange">Ecosystem</span>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            One platform. <span style={{ color: "hsl(var(--orange-500))" }}>Seven forces</span> moving as one.
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl">
            Tap a stakeholder to see how each role powers India&apos;s Industry 4.0 movement â and how the platform connects them.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* Network */}
          <div className="relative aspect-square max-w-[520px] mx-auto w-full">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden>
              {stakeholders.map((s, i) => {
                const a = (i / stakeholders.length) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(a) * 150;
                const y = 200 + Math.sin(a) * 150;
                const isActive = active.key === s.key;
                return (
                  <line
                    key={s.key}
                    x1={200}
                    y1={200}
                    x2={x}
                    y2={y}
                    stroke={isActive ? "hsl(var(--orange-500))" : "hsl(0 0% 100% / 0.12)"}
                    strokeWidth={isActive ? 2 : 1}
                    className="transition-all duration-300"
                  />
                );
              })}
              <circle cx={200} cy={200} r={180} fill="none" stroke="hsl(0 0% 100% / 0.06)" />
            </svg>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-24 w-24 rounded-full border border-white/20"
              style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}>
              <div className="text-center">
                <div className="text-[9px] font-bold uppercase tracking-widest text-white/80">CII</div>
                <div className="text-xs font-extrabold">Platform</div>
              </div>
            </div>

            {/* Nodes */}
            {stakeholders.map((s, i) => {
              const a = (i / stakeholders.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(a) * 38;
              const y = 50 + Math.sin(a) * 38;
              const isActive = active.key === s.key;
              return (
                <button
                  key={s.key}
                  onMouseEnter={() => setActive(s)}
                  onFocus={() => setActive(s)}
                  onClick={() => setActive(s)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-300 backdrop-blur whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--orange-500))] ${
                    isActive
                      ? "bg-white text-navy-900 border-white scale-110 shadow-lg"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={s.label}
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Side panel */}
          <div key={active.key} className="animate-fade-in">
            <div className="text-xs uppercase tracking-widest" style={{ color: "hsl(var(--orange-500))" }}>
              {active.role}
            </div>
            <h3 className="font-display mt-2 text-3xl sm:text-4xl font-extrabold">{active.label}</h3>
            <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed max-w-md">{active.desc}</p>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {stakeholders.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActive(s)}
                  className={`text-left px-3 py-2 rounded-md text-xs font-semibold border transition-colors ${
                    active.key === s.key
                      ? "bg-white text-navy-900 border-white"
                      : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
