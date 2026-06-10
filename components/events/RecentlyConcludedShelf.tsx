import Link from "next/link";
import { ArrowRight, FileDown, CheckCircle2 } from "lucide-react";
import { getPast } from "@/data/events";

export const RecentlyConcludedShelf = () => {
  const past = getPast().slice(0, 3);
  if (past.length === 0) return null;

  return (
    <section className="py-10 md:py-14">
      <div className="container-cii">
        <div className="mb-6 md:mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="section-eyebrow mb-2">Recently Concluded</div>
            <h2 className="font-display font-bold text-[24px] md:text-[28px] text-[hsl(var(--navy-900))] tracking-tight">
              Catch up on what just happened
            </h2>
            <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] max-w-2xl">
              Browse post-event detail pages with key insights, agendas, speakers and downloadable proceedings.
            </p>
          </div>
          <Link href="#past-events-archive"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]"
          >
            See all past events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {past.map((e) => (
            <article
              key={e.slug}
              className="cii-card group flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/events/${e.slug}`}
                className="relative block aspect-[16/9] bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-900))] overflow-hidden"
              >
                <div className="absolute inset-0 grid place-items-center text-white/10 font-display font-bold text-5xl">
                  {e.date.match(/20\d{2}/)?.[0]}
                </div>
                <span className="absolute top-3 left-3 inline-flex items-center h-6 px-2 rounded-sm bg-[hsl(var(--red-600))] text-white text-[10px] uppercase tracking-[0.12em] font-bold">
                  {e.type}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 h-6 px-2 rounded-sm bg-white/90 text-[hsl(var(--navy-900))] text-[10px] uppercase tracking-[0.1em] font-bold">
                  <CheckCircle2 className="h-3 w-3 text-[hsl(var(--orange-600))]" /> Concluded
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="text-[11px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))]">
                  {e.date} Â· {e.location}
                </div>
                <h4 className="font-display font-bold text-base md:text-lg text-[hsl(var(--navy-900))] mt-2 leading-snug">
                  <Link href={`/events/${e.slug}`} className="hover:text-[hsl(var(--red-600))]">
                    {e.title}
                  </Link>
                </h4>
                {e.pastStats && e.pastStats.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {e.pastStats.slice(0, 2).map((s) => (
                      <div key={s.label} className="rounded-md bg-[hsl(var(--neutral-100))] px-2.5 py-1.5">
                        <div className="font-numeric font-bold text-sm text-[hsl(var(--navy-900))]">{s.value}</div>
                        <div className="text-[9px] uppercase tracking-[0.1em] font-bold text-[hsl(var(--neutral-500))] truncate">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
                  <Link href={`/events/${e.slug}`}
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-sm bg-[hsl(var(--navy-800))] text-white text-[11px] font-semibold hover:bg-[hsl(var(--navy-700))]"
                  >
                    Event page <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  {(e.reportPdfUrl || (e.proceedingsUrl && e.proceedingsUrl !== "#")) && (
                    <a
                      href={e.reportPdfUrl || e.proceedingsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-sm border border-[hsl(var(--neutral-200))] text-[hsl(var(--navy-800))] text-[11px] font-semibold hover:bg-[hsl(var(--neutral-100))]"
                    >
                      <FileDown className="h-3.5 w-3.5" /> Download PDF
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
