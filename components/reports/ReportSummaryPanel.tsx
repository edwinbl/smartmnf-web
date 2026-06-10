"use client";

import { useEffect, useState } from "react";
import { Bookmark, Download, Share2, Check } from "lucide-react";
import type { Report } from "@/data/reports";
import { reportsStorage } from "@/lib/reportsStorage";
import { toast } from "@/hooks/use-toast";

interface Props {
  report: Report;
  onDownload: () => void;
}

export const ReportSummaryPanel = ({ report, onDownload }: Props) => {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSaved(reportsStorage.isSaved(report.slug));
    return reportsStorage.subscribe(() => setSaved(reportsStorage.isSaved(report.slug)));
  }, [report.slug]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({ title: "Link copied" });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast({ title: "Unable to copy link" });
    }
  };

  return (
    <aside className="lg:sticky lg:top-[88px] self-start">
      <div className="cii-card overflow-hidden">
        <div className={`relative h-56 bg-gradient-to-br ${report.coverGradient} text-white p-6 flex flex-col justify-between`}>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur w-fit">
            {report.type}
          </span>
          <div>
            <div className="font-numeric text-4xl font-extrabold leading-none">{report.highlightStat.value}</div>
            <div className="text-[11px] uppercase tracking-[0.14em] font-bold opacity-90 mt-1.5">
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

        <div className="p-5 space-y-3">
          <button type="button" onClick={onDownload} className="btn-primary w-full">
            <Download className="h-4 w-4" />
            Download Report
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                const next = reportsStorage.toggleSaved(report.slug);
                toast({ title: next ? "Saved" : "Removed" });
              }}
              className="h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              <Bookmark className="h-3.5 w-3.5" fill={saved ? "currentColor" : "none"} />
              {saved ? "Saved" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[hsl(var(--india-green))]" /> : <Share2 className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Share"}
            </button>
          </div>
        </div>

        <div className="px-5 pb-5 pt-2 space-y-3 text-sm border-t" style={{ borderColor: "hsl(var(--neutral-150))" }}>
          <Meta label="Pages" value={`${report.pages}`} />
          <Meta label="Reading time" value={report.readingTime} />
          <Meta label="Published" value={report.publishedOn} />
          <Meta label="Region" value={report.state} />
          <Meta label="Access" value={report.gated ? "Members only" : "Open access"} />
        </div>

        <div className="px-5 pb-6">
          <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))] mb-2">Tags</div>
          <div className="flex flex-wrap gap-1.5">
            {report.tags.map((t) => (
              <span key={t} className="cii-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-[hsl(var(--neutral-500))]">{label}</span>
    <span className="font-semibold text-[hsl(var(--navy-900))]">{value}</span>
  </div>
);
