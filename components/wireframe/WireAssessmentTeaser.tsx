import Link from "next/link";
import { WireSection } from "./WireSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const WireAssessmentTeaser = () => {
  return (
    <WireSection id="assessment" alt>
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
        <div>
          <div className="section-eyebrow mb-3">Maturity Assessments</div>
          <h2 className="font-display font-bold text-2xl sm:text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Assessment to Transformation
          </h2>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
            Access current smart manufacturing and Industry 4.0 maturity assessment models to understand where your
            organisation stands before deciding what to adopt.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { name: "Smart Manufacturing Maturity Assessment Model", tag: "Available" },
              { name: "Industry 4.0 Maturity Assessment", tag: "Available" },
            ].map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-md border border-[hsl(var(--neutral-150))] bg-white flex-wrap sm:flex-nowrap"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0" />
                  <span className="text-sm font-semibold text-navy-800 break-words">{m.name}</span>
                </div>
                <span className="cii-chip shrink-0">{m.tag}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[hsl(var(--neutral-500))] italic max-w-xl">
            Over time, readiness pathways can also be linked to business outcomes such as exports, quality improvement,
            traceability, productivity, energy efficiency and value-chain participation.
          </p>

          <div className="mt-7">
            <Link href="/readiness-assessment" className="btn-primary">
              Access Maturity Assessments <ArrowRight className="!h-4 !w-4" />
            </Link>
          </div>
        </div>

        {/* Visual gauge card */}
        <div className="relative">
          <div className="cii-card p-5 sm:p-8 bg-white">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <div className="eyebrow text-[hsl(var(--neutral-500))]">Sector readiness snapshot</div>
                <div className="font-display font-bold text-navy-800 text-sm sm:text-base mt-1 leading-snug">
                  Industry 4.0 Adoption &amp; Strategic Roadmap
                  <br />
                  <span className="text-[hsl(var(--neutral-500))] font-medium text-xs sm:text-sm">
                    for Indian Manufacturing
                  </span>
                </div>
              </div>
              <span className="cii-chip cii-chip-orange shrink-0">By Sector</span>
            </div>

            <div className="mt-6 sm:mt-7 space-y-4">
              {[
                { label: "Automotive & Auto Components", v: 92 },
                { label: "Electronics & Electrical Equipment", v: 86 },
                { label: "Pharmaceuticals & Biotechnology", v: 78 },
                { label: "Oil & Gas and Chemicals", v: 64 },
                { label: "Metals & Mining", v: 58 },
                { label: "Machinery & Heavy Equipment", v: 48 },
                { label: "Food & Beverage", v: 38 },
                { label: "Cement & Building Materials", v: 32 },
                { label: "Paper & Packaging", v: 22 },
                { label: "Textiles & Apparel", v: 10 },
              ].map((d) => (
                <div key={d.label} className="grid grid-cols-[1fr_1.4fr] items-center gap-3 sm:gap-4">
                  <span className="text-xs sm:text-[13px] font-semibold text-navy-800 leading-snug">
                    {d.label}
                  </span>
                  <div className="relative h-2 rounded-full overflow-visible"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(0 80% 50%) 0%, hsl(45 95% 55%) 50%, hsl(140 70% 42%) 100%)",
                    }}
                  >
                    <span
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full border-2 border-white shadow-md"
                      style={{
                        left: `${d.v}%`,
                        background: `hsl(${(d.v / 100) * 140} 75% 45%)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between gap-3 flex-wrap">
              <span className="text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))]">
                Source: CII KPMG Maturity Assessment Report
              </span>
              <a href="#" className="link-arrow">
                Download report <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-cii-orange/15 blur-2xl" />
        </div>
      </div>
    </WireSection>
  );
};
