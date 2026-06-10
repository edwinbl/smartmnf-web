"use client";

import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

const chapters = [
  {
    title: "Industry Overview",
    snippet:
      "Where Indian manufacturing stands today across maturity, capability and competitive dimensions.",
    bullets: [
      "Sector-wise maturity benchmarks",
      "Comparison with global peers",
      "Policy & macro context",
    ],
  },
  {
    title: "Readiness Challenges",
    snippet:
      "Recurring readiness gaps observed across MSMEs and mid-size manufacturers.",
    bullets: [
      "Workforce & skills gaps",
      "Data and visibility maturity",
      "Capital allocation pressure",
    ],
  },
  {
    title: "Adoption Barriers",
    snippet:
      "Structural, cultural and ecosystem-level barriers slowing Industry 4.0 adoption.",
    bullets: [
      "Change management bottlenecks",
      "Fragmented vendor landscape",
      "Cybersecurity readiness gaps",
    ],
  },
  {
    title: "Operational Opportunities",
    snippet:
      "Where measurable productivity, quality and sustainability gains are being unlocked.",
    bullets: [
      "Connected line use-cases",
      "AI-led quality improvements",
      "Energy and emissions wins",
    ],
  },
  {
    title: "Future Outlook",
    snippet:
      "Five-year scenarios shaping the next wave of smart manufacturing in India.",
    bullets: [
      "Scaling pathways for MSMEs",
      "Ecosystem-led transformation",
      "Investment hotspots 2025â2030",
    ],
  },
];

export const ReportThemes = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-12">
      <div className="section-eyebrow mb-2">Inside the Report</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Themes &amp; chapters covered
      </h2>
      <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl leading-relaxed">
        A structured narrative â from current state to future scenarios â designed for
        executives, transformation leaders and operations teams.
      </p>

      <div className="mt-7 space-y-3">
        {chapters.map((c, i) => {
          const isOpen = open === i;
          return (
            <div
              key={c.title}
              className="cii-card overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                aria-expanded={isOpen}
              >
                <div
                  className="h-10 w-10 rounded-md grid place-items-center text-white shrink-0 font-numeric font-extrabold"
                  style={{
                    background: isOpen
                      ? "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))"
                      : "hsl(var(--navy-700))",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base md:text-lg text-[hsl(var(--navy-900))] leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed line-clamp-1">
                    {c.snippet}
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-[hsl(var(--neutral-500))] shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div
                  className="px-5 md:px-6 pb-6 pt-0 grid md:grid-cols-3 gap-4 border-t"
                  style={{ borderColor: "hsl(var(--neutral-150))" }}
                >
                  {c.bullets.map((b, j) => (
                    <div
                      key={j}
                      className="mt-4 flex items-start gap-2.5 text-sm text-[hsl(var(--neutral-700))]"
                    >
                      <BookOpen className="h-4 w-4 mt-0.5 text-[hsl(var(--navy-600))] shrink-0" />
                      <span className="leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
