"use client";

import { FileSearch } from "lucide-react";

interface Props {
  onClear: () => void;
}

export const ReportsEmptyState = ({ onClear }: Props) => {
  return (
    <div className="text-center py-16 px-6">
      <div
        className="mx-auto h-16 w-16 rounded-full grid place-items-center mb-5"
        style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
      >
        <FileSearch className="h-7 w-7" />
      </div>
      <h3 className="font-display font-bold text-xl text-[hsl(var(--navy-900))]">No matching reports found</h3>
      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] max-w-md mx-auto">
        Try removing some filters, exploring trending insights, or browsing one of our curated collections.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <button type="button" onClick={onClear} className="btn-primary">
          Clear all filters
        </button>
        <a href="#collections" className="btn-outline">
          Browse collections
        </a>
      </div>
    </div>
  );
};
