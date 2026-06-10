import { UserCircle2 } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

export const WhoShouldAttend = ({ programme }: { programme: ProgrammeItem }) => (
  <div>
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Who should attend</h2>
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {programme.audience.map((a) => (
        <div key={a.persona} className="cii-card p-4">
          <div className="h-9 w-9 rounded-md bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] grid place-items-center mb-3">
            <UserCircle2 className="h-5 w-5" />
          </div>
          <div className="font-display font-bold text-[hsl(var(--navy-900))]">{a.persona}</div>
          <p className="mt-1 text-xs text-[hsl(var(--neutral-700))]">{a.description}</p>
        </div>
      ))}
    </div>
  </div>
);
