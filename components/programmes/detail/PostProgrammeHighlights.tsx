import { CheckCircle2, Sparkles } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
}

export const PostProgrammeHighlights = ({ programme }: Props) => {
  const pp = programme.postProgramme;
  if (!pp || (!pp.summary && !pp.highlights?.length && !pp.stats?.length)) return null;

  return (
    <section aria-labelledby="post-programme-highlights">
      <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--orange-50))] px-3 py-1 text-xs font-semibold text-[hsl(var(--orange-700))]">
        <Sparkles className="h-3.5 w-3.5" />
        Post-programme wrap-up
      </div>
      <h2
        id="post-programme-highlights"
        className="mt-3 font-display font-bold text-2xl text-[hsl(var(--navy-900))]"
      >
        Programme highlights
      </h2>
      {pp.summary && (
        <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
          {pp.summary}
        </p>
      )}

      {pp.stats?.length ? (
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {pp.stats.map((s) => (
            <div
              key={s.label}
              className="cii-card p-4 text-center bg-[hsl(var(--navy-50))]/60 border-[hsl(var(--navy-100))]"
            >
              <div className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-[hsl(var(--neutral-600))]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {pp.highlights?.length ? (
        <ul className="mt-5 grid md:grid-cols-2 gap-2.5">
          {pp.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-[hsl(var(--navy-800))] leading-relaxed"
            >
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--orange-600))]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};
