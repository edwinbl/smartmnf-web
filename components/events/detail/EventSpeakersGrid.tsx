import type { EventSpeaker } from "@/data/events";

interface Props {
  speakers: EventSpeaker[];
}

export const EventSpeakersGrid = ({ speakers }: Props) => (
  <section className="space-y-4">
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Speakers & Experts</h2>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {speakers.map((s) => (
        <div key={s.name} className="cii-card p-4 flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[hsl(var(--navy-700))] to-[hsl(var(--navy-600))] grid place-items-center text-sm font-bold text-white shrink-0">
            {s.initials}
          </div>
          <div className="min-w-0">
            <div className="font-display font-semibold text-[hsl(var(--navy-900))] truncate">{s.name}</div>
            <div className="text-xs text-[hsl(var(--neutral-700))] truncate">{s.role}</div>
            <div className="text-xs text-[hsl(var(--neutral-500))] truncate">{s.org}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
