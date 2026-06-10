"use client";

import { Lock } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
  onUnlock: () => void;
}

const previewPages = [
  { title: "Foreword", body: "An overview of why this report matters now and the questions it sets out to answer." },
  { title: "1. Landscape", body: "Where Indian manufacturing stands on its Industry 4.0 journey today." },
  { title: "2. Findings", body: "Quantitative insights from the field â what's working, what's not, and why." },
  { title: "3. Roadmap", body: "A practical pathway from pilot to scale, tailored for MSMEs and mid-size enterprises." },
];

export const ReportPreview = ({ report, onUnlock }: Props) => {
  return (
    <section className="mt-12">
      <div className="section-eyebrow mb-2">Preview</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Flip through the first few pages.
      </h2>

      <div className="mt-6 relative cii-card p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "hsl(var(--neutral-150))" }}>
          {previewPages.map((p, i) => {
            const gated = report.gated && i >= 2;
            return (
              <div key={i} className="relative p-6 md:p-8 bg-white min-h-[220px]">
                <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))]">
                  Page {i + 1}
                </div>
                <h3 className="mt-2 font-display font-bold text-lg text-[hsl(var(--navy-900))]">{p.title}</h3>
                <div className={`mt-3 space-y-2 ${gated ? "blur-sm select-none" : ""}`}>
                  <p className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{p.body}</p>
                  <div className="space-y-1.5 mt-3">
                    {[100, 92, 86, 78].map((w, j) => (
                      <div key={j} className="h-2 rounded-full" style={{ width: `${w}%`, background: "hsl(var(--neutral-150))" }} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {report.gated && (
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 flex items-end justify-center pb-6 px-6"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.85) 50%, #fff 100%)",
            }}
          >
            <button type="button" onClick={onUnlock} className="btn-primary">
              <Lock className="h-4 w-4" />
              Unlock full report
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
