"use client";

import { Download, FileText, Clock, Lock, CheckCircle2 } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
  onDownload: () => void;
}

const learnings = [
  "Where your sector stands on the readiness curve",
  "Top barriers slowing Industry 4.0 at scale",
  "Practical roadmaps from pilot to factory-wide rollout",
  "Workforce and skills shifts shaping the next 5 years",
  "Ecosystem partners and policy levers to accelerate change",
];

export const ReportDownloadModule = ({ report, onDownload }: Props) => {
  return (
    <section
      className="mt-12 cii-card p-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)",
      }}
    >
      <div className="grid md:grid-cols-5 text-white">
        {/* left: file meta */}
        <div className="md:col-span-2 p-7 md:p-8 border-b md:border-b-0 md:border-r border-white/10 relative">
          <div
            className="absolute inset-0 opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden
          />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-white/70">
              Download Access
            </div>
            <h3 className="mt-2 font-display font-bold text-xl md:text-2xl leading-tight">
              Get the full report
            </h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              Includes data tables, methodology and the complete executive summary.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <Meta label="Format" value="PDF" />
              <Meta label="File size" value="~4.2 MB" />
              <Meta label="Pages" value={`${report.pages}`} />
              <Meta label="Reading time" value={report.readingTime} />
              <Meta
                label="Access"
                value={report.gated ? "Members only" : "Open access"}
              />
            </div>

            <button
              type="button"
              onClick={onDownload}
              className="mt-7 w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md font-bold text-sm text-[hsl(var(--navy-900))] bg-white hover:bg-[hsl(var(--orange-100))] transition-colors"
            >
              {report.gated ? (
                <Lock className="h-4 w-4" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {report.gated ? "Unlock & Download" : "Download Report"}
            </button>
            <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-white/65">
              <span className="inline-flex items-center gap-1">
                <FileText className="h-3 w-3" /> PDF
              </span>
              <span>Â·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {report.readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* right: what you'll learn */}
        <div className="md:col-span-3 p-7 md:p-8">
          <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--orange-500))]">
            What you'll learn
          </div>
          <h3 className="mt-2 font-display font-bold text-xl md:text-2xl leading-tight">
            Five things you'll take away
          </h3>
          <ul className="mt-5 space-y-3">
            {learnings.map((l) => (
              <li key={l} className="flex items-start gap-3 text-sm text-white/85">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--orange-500))] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{l}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 pt-6 border-t border-white/10">
            <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-white/65 mb-3">
              Table of contents Â· preview
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-[13px] text-white/85">
              {[
                "Industry Overview",
                "Readiness Challenges",
                "Adoption Barriers",
                "Operational Opportunities",
                "Roadmap & Pathways",
                "Future Outlook",
              ].map((t, i) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="font-numeric text-[11px] text-white/85 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-white/60">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);
