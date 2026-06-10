import { Presentation, Download } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
}

export const ProgrammePresentations = ({ programme }: Props) => {
  const decks = programme.postProgramme?.presentations;
  if (!decks?.length) return null;

  return (
    <section aria-labelledby="programme-presentations">
      <h2 id="programme-presentations" className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
        Presentations
      </h2>
      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
        Speaker decks and frameworks shared during the sessions.
      </p>
      <ul className="mt-5 divide-y divide-[hsl(var(--neutral-150))] cii-card overflow-hidden">
        {decks.map((d, i) => (
          <li key={i}>
            <a
              href={d.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 hover:bg-[hsl(var(--neutral-50))] transition group"
            >
              <div className="h-10 w-10 shrink-0 rounded-md bg-[hsl(var(--orange-50))] text-[hsl(var(--orange-700))] grid place-items-center">
                <Presentation className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-[hsl(var(--navy-900))] group-hover:underline underline-offset-4 truncate">
                  {d.title}
                </div>
                {(d.speaker || d.org) && (
                  <div className="mt-0.5 text-xs text-[hsl(var(--neutral-700))] truncate">
                    {d.speaker}
                    {d.speaker && d.org && " Â· "}
                    {d.org}
                  </div>
                )}
              </div>
              <div className="hidden sm:block text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))]">
                {d.size}
              </div>
              <Download className="h-4 w-4 text-[hsl(var(--navy-700))] shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
