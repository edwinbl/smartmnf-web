import Link from "next/link";
import { ChevronRight, Calendar, User } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export const ReportDetailHero = ({ report }: Props) => {
  return (
    <section className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(125deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--navy-600)) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
      <div className="container-cii relative py-10 md:py-14">
        <nav className="text-xs text-white/70 flex items-center gap-1.5 mb-5 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/reports" className="hover:text-white">Insights &amp; Reports</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/90 truncate max-w-[60vw]">{report.title}</span>
        </nav>

        <div className="max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-[hsl(var(--orange-500))] text-white">
              {report.type}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-white/10 backdrop-blur-sm border border-white/20">
              {report.industry}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-white/10 backdrop-blur-sm border border-white/20">
              {report.domain}
            </span>
          </div>

          <h1 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[1.1] tracking-tight">
            {report.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/85">
            {report.summary}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80 pt-1">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-white/60" />
              {report.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-white/60" />
              {report.publishedOn}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
