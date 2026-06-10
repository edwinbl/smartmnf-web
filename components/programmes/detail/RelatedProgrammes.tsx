import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";
import { accentSoft } from "@/lib/programmesStorage";

export const RelatedProgrammes = ({ programmes }: { programmes: ProgrammeItem[] }) => {
  if (programmes.length === 0) return null;
  return (
    <section className="py-12 md:py-16 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))] mb-6">Related programmes</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {programmes.map((p) => (
            <Link key={p.slug} href={`/programmes/${p.slug}`} className="cii-card p-5 block group">
              <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold ${accentSoft[p.accent]}`}>
                {p.type}
              </span>
              <div className="mt-3 font-display font-bold text-[hsl(var(--navy-900))] group-hover:text-[hsl(var(--red-600))] transition-colors">
                {p.title}
              </div>
              <p className="mt-1 text-xs text-[hsl(var(--neutral-700))] line-clamp-2">{p.tagline}</p>
              <div className="mt-3 link-arrow text-xs">View programme <ArrowRight className="h-3 w-3" /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
