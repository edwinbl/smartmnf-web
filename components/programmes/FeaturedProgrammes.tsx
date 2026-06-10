import Link from "next/link";
import { ArrowRight, Sparkles, Users, Award } from "lucide-react";
import { getFlagshipProgrammes } from "@/data/programmes";

export const FeaturedProgrammes = () => {
  const flagship = getFlagshipProgrammes();
  if (flagship.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="section-eyebrow mb-3">Featured Programmes</div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
              Flagship transformation pathways
            </h2>
            <p className="mt-3 text-base text-[hsl(var(--neutral-700))] max-w-xl">
              Our most in-demand programmes â curated for India's most ambitious manufacturers.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {flagship.map((p) => (
            <article key={p.slug} className="cii-card overflow-hidden flex flex-col lg:flex-row">
              <div className="relative lg:w-2/5 h-44 lg:h-auto shrink-0">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      p.accent === "orange"
                        ? "linear-gradient(135deg, hsl(var(--navy-800)) 0%, hsl(var(--orange-500)) 130%)"
                        : "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--red-600)) 130%)",
                  }}
                />
                <div className="absolute inset-0 blueprint-grid opacity-30" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[11px] uppercase tracking-[0.12em] font-bold">
                    <Sparkles className="h-3 w-3" /> Flagship
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/80 font-bold">{p.type}</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl md:text-2xl text-[hsl(var(--navy-900))] leading-tight">
                  <Link href={`/programmes/${p.slug}`} className="hover:text-[hsl(var(--red-600))] transition-colors">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">{p.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.learningOutcomes.slice(0, 3).map((o) => (
                    <li key={o} className="text-xs text-[hsl(var(--navy-800))] flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[hsl(var(--red-600))] shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[hsl(var(--neutral-500))]">
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{p.seats ?? p.segment}</span>
                  {p.certification && <span className="inline-flex items-center gap-1.5"><Award className="h-3.5 w-3.5" />Certified</span>}
                  <span>{p.startDate}</span>
                </div>
                <div className="mt-auto pt-5">
                  <Link href={`/programmes/${p.slug}`} className="btn-primary">
                    Explore Programme <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
