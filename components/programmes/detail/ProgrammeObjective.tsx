import { Target } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

export const ProgrammeObjective = ({ programme }: { programme: ProgrammeItem }) => {
  if (!programme.objective?.length) return null;
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Objective</h2>
      <div className="mt-4 space-y-3">
        {programme.objective.map((o) => (
          <div key={o} className="cii-card p-4 flex gap-3">
            <Target className="h-5 w-5 text-[hsl(var(--navy-700))] shrink-0 mt-0.5" />
            <p className="text-sm text-[hsl(var(--navy-800))] leading-relaxed">{o}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
