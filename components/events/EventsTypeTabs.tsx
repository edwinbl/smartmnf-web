"use client";

import { eventTypes } from "@/data/events";

interface Props {
  active: string;
  onChange: (t: string) => void;
  counts: Record<string, number>;
}

export const EventsTypeTabs = ({ active, onChange, counts }: Props) => {
  return (
    <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur border-b border-[hsl(var(--neutral-150))]">
      <div className="container-cii">
        <div className="flex items-center overflow-x-auto snap-x snap-mandatory py-3 -mx-2 px-2 scrollbar-none">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[hsl(var(--neutral-100))] border border-[hsl(var(--neutral-150))]">
            {eventTypes.map((t) => {
              const isActive = active === t;
              const count = counts[t] ?? 0;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onChange(t)}
                  className={`snap-start whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 h-9 rounded-lg text-sm font-semibold font-display transition-all ${
                    isActive
                      ? "bg-white text-[hsl(var(--navy-800))] shadow-sm"
                      : "text-[hsl(var(--neutral-600))] hover:text-[hsl(var(--navy-700))]"
                  }`}
                >
                  {t}
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                      isActive
                        ? "bg-[hsl(var(--navy-800))] text-white"
                        : "bg-[hsl(var(--neutral-200))] text-[hsl(var(--neutral-600))]"
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
    </div>
  );
};
