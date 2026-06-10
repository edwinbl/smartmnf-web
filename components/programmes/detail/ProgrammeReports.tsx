import { FileText, Download } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
}

export const ProgrammeReports = ({ programme }: Props) => {
  const reports = programme.postProgramme?.reports;
  if (!reports?.length) return null;

  return (
    <section aria-labelledby="programme-reports">
      <h2 id="programme-reports" className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
        Reports
      </h2>
      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
        Outcome reports and benchmark studies from the programme.
      </p>
      <div className="mt-5 grid md:grid-cols-2 gap-3">
        {reports.map((r, i) => (
          <a
            key={i}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="cii-card p-4 flex gap-3 items-start group hover:border-[hsl(var(--navy-300))] transition"
          >
            <div className="h-10 w-10 shrink-0 rounded-md bg-[hsl(var(--navy-100))] text-[hsl(var(--navy-700))] grid place-items-center">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-[hsl(var(--navy-900))] group-hover:underline underline-offset-4">
                {r.title}
              </div>
              {r.description && (
                <p className="mt-1 text-xs text-[hsl(var(--neutral-700))] leading-relaxed">
                  {r.description}
                </p>
              )}
              <div className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))]">
                {r.type && <span>{r.type}</span>}
                {r.type && r.size && <span aria-hidden>Â·</span>}
                {r.size && <span>{r.size}</span>}
                <span aria-hidden>Â·</span>
                <span className="inline-flex items-center gap-1 text-[hsl(var(--navy-700))]">
                  <Download className="h-3 w-3" /> Download
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
