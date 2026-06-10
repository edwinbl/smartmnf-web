import type { Report } from "@/data/reports";
import { ReportCard } from "./ReportCard";
import { ReportsEmptyState } from "./ReportsEmptyState";

interface Props {
  reports: Report[];
  onDownload: (report: Report) => void;
  onClear: () => void;
}

export const ReportsGrid = ({ reports, onDownload, onClear }: Props) => {
  return (
    <section id="reports" className="py-14 md:py-20">
      <div className="container-cii">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="section-eyebrow mb-2">All Reports</div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
              {reports.length} insight{reports.length === 1 ? "" : "s"} ready to explore
            </h2>
          </div>
        </div>

        {reports.length === 0 ? (
          <ReportsEmptyState onClear={onClear} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((r) => (
              <ReportCard key={r.slug} report={r} onDownload={onDownload} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
