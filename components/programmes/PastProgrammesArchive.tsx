"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { programmes, programmeTypes, type ProgrammeItem, type ProgrammeType } from "@/data/programmes";

const TYPES: ("All" | ProgrammeType)[] = programmeTypes;

const extractYear = (p: ProgrammeItem): string => {
  const d = new Date(p.isoDate);
  if (!isNaN(d.getTime())) return String(d.getFullYear());
  const m = p.startDate.match(/\b(20\d{2})\b/);
  return m ? m[1] : "Other";
};

const getPastProgrammes = (): ProgrammeItem[] => {
  const now = Date.now();
  return programmes
    .filter((p) => p.status === "closed" || new Date(p.isoDate).getTime() < now)
    .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
};

export const PastProgrammesArchive = () => {
  const past = useMemo(getPastProgrammes, []);

  const years = useMemo(() => {
    const set = new Set(past.map(extractYear));
    return ["All", ...Array.from(set).sort((a, b) => Number(b) - Number(a))];
  }, [past]);

  const [year, setYear] = useState<string>("All");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");

  const filtered = useMemo(
    () =>
      past.filter(
        (p) =>
          (year === "All" || extractYear(p) === year) &&
          (type === "All" || p.type === type),
      ),
    [past, year, type],
  );

  const grouped = useMemo(() => {
    const map = new Map<string, ProgrammeItem[]>();
    filtered.forEach((p) => {
      const y = extractYear(p);
      if (!map.has(y)) map.set(y, []);
      map.get(y)!.push(p);
    });
    return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [filtered]);

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]" id="past-programmes-archive">
      <div className="container-cii">
        <div className="max-w-2xl">
          <div className="section-eyebrow mb-2">Past Programmes Archive</div>
          <h2 className="font-display font-bold text-[28px] md:text-[34px] text-[hsl(var(--navy-900))] tracking-tight">
            Learnings from every cohort, captured for the ecosystem
          </h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))]">
            Browse concluded programmes, workshops and certifications â revisit outcomes, faculty and curriculum from past cohorts.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mt-8 flex flex-col gap-4 rounded-md border border-[hsl(var(--neutral-200))] bg-white p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))] mr-1">Year</span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`h-8 px-3 rounded-sm text-xs font-semibold border transition-colors ${
                  year === y
                    ? "bg-[hsl(var(--navy-900))] text-white border-[hsl(var(--navy-900))]"
                    : "bg-white text-[hsl(var(--navy-800))] border-[hsl(var(--neutral-200))] hover:bg-[hsl(var(--neutral-100))]"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))] mr-1">Type</span>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`h-8 px-3 rounded-sm text-xs font-semibold border transition-colors ${
                  type === t
                    ? "bg-[hsl(var(--navy-900))] text-white border-[hsl(var(--navy-900))]"
                    : "bg-white text-[hsl(var(--navy-800))] border-[hsl(var(--neutral-200))] hover:bg-[hsl(var(--neutral-100))]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Year-grouped grid */}
        <div className="mt-10 space-y-12">
          {grouped.length === 0 && (
            <div className="text-center text-sm text-[hsl(var(--neutral-600))] py-12">
              No past programmes match the selected filters.
            </div>
          )}

          {grouped.map(([y, items]) => (
            <div key={y}>
              <div className="sticky top-16 z-10 -mx-2 mb-5 flex items-baseline gap-3 bg-[hsl(var(--neutral-50))]/95 backdrop-blur px-2 py-2">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))]">{y}</h3>
                <span className="text-xs font-semibold text-[hsl(var(--neutral-500))]">
                  {items.length} {items.length === 1 ? "programme" : "programmes"}
                </span>
                <div className="flex-1 h-px bg-[hsl(var(--neutral-200))] ml-2" />
              </div>

              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <li key={p.slug}>
                    <article className="cii-card group h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                      <Link href={`/programmes/${p.slug}`}
                        className="relative block aspect-[16/9] bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-900))] overflow-hidden"
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display font-bold text-6xl">
                          {y}
                        </div>
                        <span className="absolute top-3 left-3 inline-flex items-center h-6 px-2 rounded-sm bg-[hsl(var(--red-600))] text-white text-[10px] uppercase tracking-[0.12em] font-bold">
                          {p.type}
                        </span>
                      </Link>

                      <div className="flex flex-1 flex-col p-5">
                        <div className="text-[11px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))]">
                          {p.startDate} Â· {p.format}
                        </div>
                        <h4 className="font-display font-bold text-base md:text-lg text-[hsl(var(--navy-900))] mt-2 leading-snug">
                          <Link href={`/programmes/${p.slug}`} className="hover:text-[hsl(var(--red-600))]">
                            {p.title}
                          </Link>
                        </h4>

                        {p.highlights && p.highlights.length > 0 && (
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            {p.highlights.slice(0, 2).map((h) => (
                              <div key={h.label} className="rounded-md bg-[hsl(var(--neutral-100))] px-2.5 py-1.5">
                                <div className="font-numeric font-bold text-sm text-[hsl(var(--navy-900))]">{h.value}</div>
                                <div className="text-[9px] uppercase tracking-[0.1em] font-bold text-[hsl(var(--neutral-500))] truncate">
                                  {h.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
                          <Link href={`/programmes/${p.slug}`}
                            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-sm bg-[hsl(var(--navy-800))] text-white text-[11px] font-semibold hover:bg-[hsl(var(--navy-700))]"
                          >
                            Programme page <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                          {p.certification && (
                            <span className="inline-flex items-center gap-1.5 h-8 px-3 rounded-sm border border-[hsl(var(--neutral-200))] text-[hsl(var(--navy-800))] text-[11px] font-semibold">
                              <FileDown className="h-3.5 w-3.5" /> Certified
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
