"use client";

import Link from "next/link";
import { Bookmark, Download, ArrowRight, Clock, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import type { Report } from "@/data/reports";
import { reportsStorage } from "@/lib/reportsStorage";
import { toast } from "@/hooks/use-toast";

interface Props {
  report: Report;
  onDownload?: (report: Report) => void;
}

export const ReportCard = ({ report, onDownload }: Props) => {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setSaved(reportsStorage.isSaved(report.slug));
    return reportsStorage.subscribe(() => setSaved(reportsStorage.isSaved(report.slug)));
  }, [report.slug]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const next = reportsStorage.toggleSaved(report.slug);
    toast({ title: next ? "Saved to your library" : "Removed from library" });
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDownload?.(report);
  };

  return (
    <Link href={`/reports/${report.slug}`}
      className="group cii-card overflow-hidden flex flex-col"
    >
      {/* cover */}
      <div
        className={`relative h-44 bg-gradient-to-br ${report.coverGradient} text-white p-5 flex flex-col justify-between overflow-hidden`}
      >
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur">
            {report.type}
          </span>
          <button
            type="button"
            onClick={toggleSave}
            className={`h-8 w-8 grid place-items-center rounded-full bg-white/15 backdrop-blur hover:bg-white/25 transition-colors ${
              saved ? "text-white" : "text-white/80"
            }`}
            aria-label={saved ? "Unsave" : "Save"}
          >
            <Bookmark className="h-4 w-4" fill={saved ? "currentColor" : "none"} />
          </button>
        </div>

        <div>
          <div className="font-numeric text-[28px] font-extrabold leading-none">{report.highlightStat.value}</div>
          <div className="text-[11px] uppercase tracking-[0.14em] font-bold opacity-90 mt-1">
            {report.highlightStat.label}
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />
      </div>

      {/* body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="cii-chip">{report.industry}</span>
          <span className="cii-chip cii-chip-orange">{report.domain}</span>
          <span className="text-[11px] font-semibold text-[hsl(var(--neutral-500))]">Â· {report.year}</span>
        </div>
        <h3 className="font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug group-hover:text-[hsl(var(--red-600))] transition-colors">
          {report.title}
        </h3>
        <p className="mt-2 text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed line-clamp-2">{report.summary}</p>

        <div className="mt-4 flex items-center gap-4 text-[11px] text-[hsl(var(--neutral-500))]">
          <span className="inline-flex items-center gap-1">
            <FileText className="h-3.5 w-3.5" /> {report.pages}p
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {report.readingTime}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: "hsl(var(--neutral-150))" }}>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
            Preview report
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
            aria-label="Download"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </button>
        </div>
      </div>
    </Link>
  );
};
