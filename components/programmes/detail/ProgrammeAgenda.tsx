import type { ProgrammeItem } from "@/data/programmes";

export const ProgrammeAgenda = ({ programme }: { programme: ProgrammeItem }) => (
  <div>
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Schedule & modules</h2>
    <div className="mt-4 relative pl-6 border-l-2 border-[hsl(var(--neutral-150))] space-y-4">
      {programme.modules.map((m, i) => (
        <div key={m.label} className="relative">
          <span className="absolute -left-[31px] top-1 h-5 w-5 rounded-full bg-white border-2 border-[hsl(var(--red-600))] grid place-items-center text-[10px] font-numeric font-bold text-[hsl(var(--red-600))]">
            {i + 1}
          </span>
          <div className="cii-card p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--orange-600))]">
                {m.label}
              </div>
              <div className="text-xs text-[hsl(var(--neutral-500))]">{m.duration}</div>
            </div>
            <div className="mt-1 font-display font-semibold text-[hsl(var(--navy-900))]">{m.title}</div>
            {m.topics && (
              <ul className="mt-2 text-xs text-[hsl(var(--neutral-700))] space-y-1 list-disc pl-4">
                {m.topics.map((t) => <li key={t}>{t}</li>)}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
