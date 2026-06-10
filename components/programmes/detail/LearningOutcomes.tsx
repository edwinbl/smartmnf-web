import { CheckCircle2 } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

export const LearningOutcomes = ({ programme }: { programme: ProgrammeItem }) => (
  <div>
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Learning outcomes</h2>
    <div className="mt-4 grid sm:grid-cols-2 gap-3">
      {programme.learningOutcomes.map((o) => (
        <div key={o} className="cii-card p-4 flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-[hsl(var(--red-600))] shrink-0" />
          <span className="text-sm text-[hsl(var(--navy-800))]">{o}</span>
        </div>
      ))}
    </div>
  </div>
);
