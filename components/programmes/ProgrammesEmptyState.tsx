"use client";

import { GraduationCap } from "lucide-react";

interface Props {
  onClear: () => void;
}

export const ProgrammesEmptyState = ({ onClear }: Props) => (
  <div className="cii-card p-10 text-center">
    <div className="mx-auto h-14 w-14 rounded-full bg-[hsl(var(--neutral-100))] grid place-items-center mb-4">
      <GraduationCap className="h-7 w-7 text-[hsl(var(--neutral-500))]" />
    </div>
    <h3 className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">
      No programmes match your filters
    </h3>
    <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] max-w-md mx-auto">
      Try clearing your filters or browse all upcoming programmes and learning pathways.
    </p>
    <button onClick={onClear} className="btn-outline mt-5 mx-auto">
      Clear filters
    </button>
  </div>
);
