import { Play, ExternalLink } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
}

export const ProgrammeRecording = ({ programme }: Props) => {
  const rec = programme.postProgramme?.recording;
  if (!rec?.url) return null;

  return (
    <section aria-labelledby="programme-recording">
      <h2 id="programme-recording" className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
        Session recording
      </h2>
      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
        Watch the full recording from the {programme.title} sessions.
      </p>
      <a
        href={rec.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 cii-card overflow-hidden grid sm:grid-cols-[2fr_3fr] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--navy-600))]"
        aria-label={`Watch recording (opens in new tab) on ${rec.platform ?? "external player"}`}
      >
        <div className="relative aspect-video sm:aspect-auto bg-[hsl(var(--navy-900))]">
          {rec.thumbnail ? (
            <img
              src={rec.thumbnail}
              alt=""
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition"
              loading="lazy"
            />
          ) : null}
          <span aria-hidden className="absolute inset-0 grid place-items-center">
            <span className="h-14 w-14 rounded-full bg-white/95 grid place-items-center text-[hsl(var(--navy-900))] shadow-lg group-hover:scale-105 transition">
              <Play className="h-6 w-6 ml-1" />
            </span>
          </span>
        </div>
        <div className="p-5 flex flex-col justify-center gap-2">
          <div className="text-xs uppercase tracking-wide text-[hsl(var(--orange-700))] font-semibold">
            Recording available
          </div>
          <div className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">
            {programme.title}
          </div>
          <div className="text-xs text-[hsl(var(--neutral-700))] flex flex-wrap gap-x-3 gap-y-1">
            {rec.platform && <span>Hosted on {rec.platform}</span>}
            {rec.duration && <span>Â· {rec.duration}</span>}
          </div>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--navy-900))]">
            Watch recording <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>
    </section>
  );
};
