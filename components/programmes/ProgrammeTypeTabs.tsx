"use client";

import { programmeTypes } from "@/data/programmes";

interface Props {
  active: string;
  onChange: (t: string) => void;
  counts: Record<string, number>;
}

export const ProgrammeTypeTabs = ({ active, onChange, counts }: Props) => {
  return (
    <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur border-b border-[hsl(var(--neutral-150))]" id="programmes-tabs">
      <div className="container-cii">
        <div className="flex items-center gap-2 overflow-x-auto snap-x snap-mandatory py-3 -mx-2 px-2 scrollbar-none">
          {programmeTypes.map((t) => {
            const isActive = active === t;
            const count = counts[t] ?? 0;
            return (
              <button
                key={t}
                type="button"
                onClick={() => onChange(t)}
                className={`snap-start whitespace-nowrap inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-semibold font-display transition-all border ${
                  isActive
                    ? "bg-[hsl(var(--navy-800))] text-white border-[hsl(var(--navy-800))] shadow-sm"
                    : "bg-white text-[hsl(var(--navy-800))] border-[hsl(var(--neutral-200))] hover:border-[hsl(var(--navy-600))] hover:text-[hsl(var(--navy-700))]"
                }`}
              >
                {t === "All" ? "All Programmes" : t}
                <span
                  className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                    isActive ? "bg-white/15 text-white" : "bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-700))]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
