import type { ProgrammeItem } from "@/data/programmes";

export const ExpertsFaculty = ({ programme }: { programme: ProgrammeItem }) => (
  <div>
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Faculty & mentors</h2>
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {programme.faculty.map((f) => (
        <div key={f.name} className="cii-card p-4 flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[hsl(var(--navy-700))] to-[hsl(var(--navy-600))] grid place-items-center text-sm font-bold text-white shrink-0">
            {f.initials}
          </div>
          <div>
            <div className="font-display font-bold text-[hsl(var(--navy-900))] text-sm">{f.name}</div>
            <div className="text-xs text-[hsl(var(--neutral-700))]">{f.role}</div>
            <div className="text-[11px] text-[hsl(var(--neutral-500))]">{f.org}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
