import { MessagesSquare } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

export const FocusedDiscussions = ({ programme }: { programme: ProgrammeItem }) => {
  if (!programme.focusedDiscussions?.length) return null;
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Focused discussions</h2>
      <div className="mt-4 space-y-2">
        {programme.focusedDiscussions.map((d, i) => (
          <div key={d} className="cii-card p-4 flex gap-3">
            <span className="h-6 w-6 rounded-full bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] grid place-items-center text-[11px] font-numeric font-bold shrink-0">
              {i + 1}
            </span>
            <span className="text-sm text-[hsl(var(--navy-800))]">{d}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 inline-flex items-center gap-2 text-xs text-[hsl(var(--neutral-500))]">
        <MessagesSquare className="h-4 w-4" /> Interactive group exercises and case-driven discussions
      </div>
    </div>
  );
};
