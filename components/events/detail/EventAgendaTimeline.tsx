import type { AgendaItem } from "@/data/events";

interface Props {
  agenda: AgendaItem[];
}

export const EventAgendaTimeline = ({ agenda }: Props) => (
  <section id="agenda" className="space-y-4">
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Agenda</h2>
    <ol className="relative border-l-2 border-[hsl(var(--neutral-150))] ml-2 space-y-5">
      {agenda.map((a, i) => (
        <li key={i} className="pl-5 relative">
          <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[hsl(var(--red-600))] ring-4 ring-white" />
          <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--red-600))]">
            {a.time}
            {a.track && <span className="text-[hsl(var(--neutral-500))] ml-2">Â· {a.track}</span>}
          </div>
          <div className="font-display font-semibold text-base text-[hsl(var(--navy-900))] mt-1">
            {a.title}
          </div>
          {a.speaker && (
            <div className="text-xs text-[hsl(var(--neutral-700))] mt-0.5">with {a.speaker}</div>
          )}
        </li>
      ))}
    </ol>
  </section>
);
