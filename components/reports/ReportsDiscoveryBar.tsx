"use client";

import { Search, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { reportFacets, quickPicks, type QuickPickId } from "@/data/reports";

export interface ReportFilters {
  industry: string;
  domain: string;
  technology: string;
  state: string;
  type: string;
  year: string;
}

export const emptyFilters: ReportFilters = {
  industry: "all",
  domain: "all",
  technology: "all",
  state: "all",
  type: "all",
  year: "all",
};

interface Props {
  query: string;
  onQuery: (v: string) => void;
  filters: ReportFilters;
  onFilters: (f: ReportFilters) => void;
  quickPick: QuickPickId | null;
  onQuickPick: (id: QuickPickId | null) => void;
  onClear: () => void;
  resultCount: number;
}

const facetSelects: { key: keyof ReportFilters; label: string; values: (string | number)[] }[] = [
  { key: "industry", label: "Industry", values: reportFacets.industry },
  { key: "domain", label: "Domain", values: reportFacets.domain },
  { key: "technology", label: "Technology", values: reportFacets.technology },
  { key: "state", label: "State", values: reportFacets.state },
  { key: "type", label: "Type", values: reportFacets.type },
  { key: "year", label: "Year", values: reportFacets.year },
];

export const ReportsDiscoveryBar = ({
  query,
  onQuery,
  filters,
  onFilters,
  quickPick,
  onQuickPick,
  onClear,
  resultCount,
}: Props) => {
  const hasActive =
    query.length > 0 ||
    quickPick !== null ||
    Object.values(filters).some((v) => v !== "all");

  return (
    <div className="sticky top-[72px] z-30 bg-background/95 backdrop-blur border-b" style={{ borderColor: "hsl(var(--neutral-150))" }}>
      <div className="container-cii py-4 space-y-3">
        {/* search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search reports, industries, technologies, themesâ¦"
            className="w-full h-12 pl-11 pr-11 rounded-md border bg-white text-sm text-[hsl(var(--neutral-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-shadow"
            style={{ borderColor: "hsl(var(--neutral-200))" }}
          />
          {query && (
            <button
              type="button"
              onClick={() => onQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 grid place-items-center rounded-full text-[hsl(var(--neutral-500))] hover:bg-[hsl(var(--neutral-100))]"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* filter selects + clear */}
        <div className="flex flex-wrap items-center gap-2">
          {facetSelects.map((f) => (
            <Select
              key={f.key}
              value={filters[f.key]}
              onValueChange={(v) => onFilters({ ...filters, [f.key]: v })}
            >
              <SelectTrigger className="h-9 w-auto min-w-[130px] text-xs font-semibold bg-white">
                <SelectValue placeholder={f.label} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All {f.label}</SelectItem>
                {f.values.map((v) => (
                  <SelectItem key={String(v)} value={String(v)}>
                    {String(v)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}

          {hasActive && (
            <button
              type="button"
              onClick={onClear}
              className="ml-auto text-xs font-semibold text-[hsl(var(--red-600))] hover:underline"
            >
              Clear all Â· {resultCount} results
            </button>
          )}
        </div>

        {/* quick discovery pills â horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 snap-x scrollbar-none">
          {quickPicks.map((p) => {
            const active = quickPick === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onQuickPick(active ? null : p.id)}
                className={`shrink-0 snap-start h-8 px-3.5 rounded-full text-xs font-semibold transition-all border ${
                  active
                    ? "bg-[hsl(var(--navy-800))] text-white border-[hsl(var(--navy-800))]"
                    : "bg-white text-[hsl(var(--navy-700))] border-[hsl(var(--neutral-200))] hover:border-[hsl(var(--navy-600))]"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
