"use client";

import { Search, X, Sparkles, Download, Users, Leaf, Factory, Globe2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { reportFacets, type QuickPickId } from "@/data/reports";
import type { ReportFilters } from "./ReportsDiscoveryBar";

interface Props {
  query: string;
  onQuery: (q: string) => void;
  filters: ReportFilters;
  onFilters: (f: ReportFilters) => void;
  quickPick: QuickPickId | null;
  onQuickPick: (q: QuickPickId | null) => void;
  onClear: () => void;
  resultCount: number;
}

const quickPicks: { id: QuickPickId; label: string; Icon: typeof Sparkles }[] = [
  { id: "latest", label: "Latest", Icon: Sparkles },
  { id: "downloaded", label: "Most Downloaded", Icon: Download },
  { id: "msme", label: "MSME", Icon: Users },
  { id: "sustainability", label: "Sustainability", Icon: Leaf },
  { id: "smart", label: "Smart Mfg", Icon: Factory },
  { id: "export", label: "Export", Icon: Globe2 },
];

const facetSelects: { key: keyof ReportFilters; label: string }[] = [
  { key: "industry", label: "Industry" },
  { key: "domain", label: "Domain" },
  { key: "technology", label: "Technology" },
  { key: "state", label: "State" },
  { key: "type", label: "Type" },
  { key: "year", label: "Year" },
];

export const ReportsFilterSidebar = ({
  query,
  onQuery,
  filters,
  onFilters,
  quickPick,
  onQuickPick,
  onClear,
  resultCount,
}: Props) => {
  const setF = (k: keyof ReportFilters, v: string) => onFilters({ ...filters, [k]: v });
  const activeFilterCount = Object.values(filters).filter((v) => v !== "all").length;
  const hasActive = query.length > 0 || quickPick !== null || activeFilterCount > 0;

  return (
    <aside className="lg:sticky lg:top-[140px] lg:self-start">
      <div className="cii-card p-5 space-y-5 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">Refine</div>
            <h3 className="font-display font-bold text-[15px] text-[hsl(var(--navy-900))]">
              {resultCount} report{resultCount === 1 ? "" : "s"}
            </h3>
          </div>
          {hasActive && (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>

        <label className="relative block">
          <span className="sr-only">Search reports</span>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search reportsâ¦"
            className="w-full h-10 pl-9 pr-3 rounded-sm border bg-white text-sm text-[hsl(var(--navy-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            style={{ borderColor: "hsl(var(--neutral-200))" }}
          />
        </label>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-2">
            Quick picks
          </div>
          <div className="flex flex-wrap gap-1.5">
            {quickPicks.map(({ id, label, Icon }) => {
              const active = quickPick === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onQuickPick(active ? null : id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 h-7 rounded-full text-[11px] font-semibold border transition-all ${
                    active
                      ? "bg-[hsl(var(--red-600))] text-white border-[hsl(var(--red-600))]"
                      : "bg-white text-[hsl(var(--navy-800))] border-[hsl(var(--neutral-200))] hover:border-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))]"
                  }`}
                >
                  <Icon className="h-3 w-3" /> {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-[hsl(var(--neutral-150))]">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
            Advanced
          </div>
          {facetSelects.map((row) => (
            <div key={row.key} className="space-y-1">
              <label className="text-[11px] font-semibold text-[hsl(var(--neutral-700))]">{row.label}</label>
              <Select value={filters[row.key]} onValueChange={(v) => setF(row.key, v)}>
                <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All {row.label.toLowerCase()}</SelectItem>
                  {reportFacets[row.key].map((v) => (
                    <SelectItem key={String(v)} value={String(v)}>{String(v)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
