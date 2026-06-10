import { Sparkles } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

export const KeyHighlights = ({ programme }: { programme: ProgrammeItem }) => {
  if (!programme.keyHighlights?.length) return null;
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Key highlights</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        {programme.keyHighlights.map((h) => (
          <div key={h} className="cii-card p-4 flex gap-3">
            <Sparkles className="h-5 w-5 text-[hsl(var(--orange-600))] shrink-0 mt-0.5" />
            <span className="text-sm text-[hsl(var(--navy-800))]">{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
