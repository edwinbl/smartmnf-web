"use client";

import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
  onRegister: () => void;
}

export const MobileStickyRegister = ({ programme, onRegister }: Props) => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[hsl(var(--neutral-150))] p-3 flex items-center gap-3 shadow-lg">
    <div className="flex-1 min-w-0">
      <div className="text-[10px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--red-600))]">
        {programme.fee ?? "Open"}
      </div>
      <div className="text-xs text-[hsl(var(--neutral-700))] truncate">{programme.startDate}</div>
    </div>
    <button onClick={onRegister} className="btn-primary h-10 px-5 text-sm">
      {programme.registrationLabel}
    </button>
  </div>
);
