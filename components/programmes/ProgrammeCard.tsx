"use client";

import { memo } from "react";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, GraduationCap, Award, Sparkles } from "lucide-react";
import { accentBar, accentSoft, accentText } from "@/lib/programmeAccents";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
  onRegister: (p: ProgrammeItem) => void;
  recommended?: boolean;
}

const ProgrammeCardImpl = ({ programme, onRegister, recommended }: Props) => {
  const p = programme;
  return (
    <article className="cii-card overflow-hidden flex flex-col group relative">
      {recommended && (
        <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[hsl(var(--red-600))] text-white text-[10px] uppercase tracking-[0.12em] font-bold shadow-sm">
          <Sparkles className="h-2.5 w-2.5" /> Recommended
        </span>
      )}
      <div className={`relative h-28 overflow-hidden`}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--red-600)) 130%)",
          }}
        />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute inset-0 p-4 flex items-start justify-between text-white">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[11px] uppercase tracking-[0.12em] font-bold">
            {p.type}
          </span>
          {p.certification && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/90">
              <Award className="h-3.5 w-3.5" /> Certified
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-3">
        <h3 className="font-display font-bold text-lg leading-snug text-[hsl(var(--navy-900))]">
          <Link href={`/programmes/${p.slug}`} className="hover:text-[hsl(var(--red-600))] transition-colors">
            {p.title}
          </Link>
        </h3>
        <p className="text-sm text-[hsl(var(--neutral-700))] line-clamp-2">{p.tagline}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[hsl(var(--neutral-500))]">
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.duration}</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{p.mode}</span>
          <span className={`inline-flex items-center gap-1 ${accentText[p.accent]} font-semibold`}>
            <GraduationCap className="h-3 w-3" />{p.level}
          </span>
        </div>

        <div className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--neutral-500))] font-bold">
          {p.startDate}
        </div>

        {p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {p.tags.slice(0, 3).map((t) => (
              <span key={t} className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${accentSoft[p.accent]}`}>
                {t}
              </span>
            ))}
          </div>
        )}

        <div className={`h-px -mx-5 my-1 ${accentBar[p.accent]} opacity-20`} />

        <div className="mt-auto flex items-center justify-between">
          <Link href={`/programmes/${p.slug}`} className="link-arrow text-xs">
            Explore <ArrowRight className="h-3 w-3" />
          </Link>
          <button onClick={() => onRegister(p)} className="btn-primary h-9 px-4 text-xs">
            {p.registrationLabel}
          </button>
        </div>
      </div>
    </article>
  );
};

export const ProgrammeCard = memo(ProgrammeCardImpl);

