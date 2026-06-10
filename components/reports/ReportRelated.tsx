import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  related: Report[];
}

export const ReportRelated = ({ related }: Props) => {
  if (related.length === 0) return null;
  return (
    <section className="mt-14">
      <div className="section-eyebrow mb-2">Related</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Continue your journey with these
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {related.map((r) => (
          <Link key={r.slug} href={`/reports/${r.slug}`} className="cii-card overflow-hidden group">
            <div className={`h-28 bg-gradient-to-br ${r.coverGradient}`} />
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))]">
                {r.type} Â· {r.year}
              </div>
              <h3 className="mt-1.5 font-display font-bold text-sm text-[hsl(var(--navy-900))] leading-snug group-hover:text-[hsl(var(--red-600))] transition-colors">
                {r.title}
              </h3>
              <p className="mt-1.5 text-xs text-[hsl(var(--neutral-700))] leading-relaxed line-clamp-2">{r.summary}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
                Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
