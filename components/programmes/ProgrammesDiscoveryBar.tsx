"use client";

import { Search, X, SlidersHorizontal, Users, Sparkles, Cpu, Leaf, Factory, GraduationCap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { ProgrammeQuickPickId } from "@/data/programmes";

export interface ProgrammeFilters {
  industry: string;
  level: string;
  mode: string;
  duration: string;
  certification: string;
  segment: string;
  technology: string;
}

export const emptyProgrammeFilters: ProgrammeFilters = {
  industry: "all",
  level: "all",
  mode: "all",
  duration: "all",
  certification: "all",
  segment: "all",
  technology: "all",
};

interface Props {
  query: string;
  onQuery: (q: string) => void;
  filters: ProgrammeFilters;
  onFilters: (f: ProgrammeFilters) => void;
  quickPick: ProgrammeQuickPickId | null;
  onQuickPick: (q: ProgrammeQuickPickId | null) => void;
  onClear: () => void;
  resultCount: number;
}

const quickPicks: { id: ProgrammeQuickPickId; label: string; Icon: typeof Users }[] = [
  { id: "msme-recommended", label: "MSMEs", Icon: Users },
  { id: "beginner", label: "Beginner", Icon: Sparkles },
  { id: "leadership", label: "Leadership", Icon: GraduationCap },
  { id: "ai-automation", label: "AI & Automation", Icon: Cpu },
  { id: "sustainability", label: "Sustainability", Icon: Leaf },
  { id: "factory-digitization", label: "Factory Digitization", Icon: Factory },
];

export const ProgrammesDiscoveryBar = ({
  query,
  onQuery,
  filters,
  onFilters,
  quickPick,
  onQuickPick,
  onClear,
  resultCount,
}: Props) => {
  const setF = (k: keyof ProgrammeFilters, v: string) => onFilters({ ...filters, [k]: v });
  const activeFilterCount = Object.values(filters).filter((v) => v !== "all").length;
  const hasActive = query.length > 0 || quickPick !== null || activeFilterCount > 0;

  return (
    <section className="bg-[hsl(var(--neutral-50))] border-b border-[hsl(var(--neutral-150))]">
      <div className="container-cii py-3">
        <div className="flex items-center gap-2 flex-wrap lg:flex-nowrap">
          {/* Search */}
          <label className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
            <input
              type="search"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search programmes, topics, facultyâ¦"
              className="w-full h-10 pl-9 pr-3 rounded-sm border bg-white text-sm text-[hsl(var(--navy-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            />
          </label>

          {/* Inline quick picks (horizontal scroll) */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none flex-1 min-w-0">
            {quickPicks.map(({ id, label, Icon }) => {
              const active = quickPick === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onQuickPick(active ? null : id)}
                  className={`whitespace-nowrap inline-flex items-center gap-1.5 px-2.5 h-8 rounded-full text-[11px] font-semibold border transition-all ${
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

          {/* More filters popover */}
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="relative inline-flex items-center gap-1.5 h-10 px-3 rounded-sm border bg-white text-xs font-semibold text-[hsl(var(--navy-800))] hover:border-[hsl(var(--navy-600))]"
                style={{ borderColor: "hsl(var(--neutral-200))" }}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 inline-grid place-items-center h-4 min-w-4 px-1 rounded-full text-[10px] bg-[hsl(var(--red-600))] text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[300px] space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
                Refine results
              </div>
              {[
                { key: "industry" as const, label: "Industry", opts: [["all","All industries"],["MSME","MSME"],["Manufacturing","Manufacturing"],["Cross-industry","Cross-industry"]] },
                { key: "level" as const, label: "Level", opts: [["all","Any level"],["Beginner","Beginner"],["Intermediate","Intermediate"],["Advanced","Advanced"]] },
                { key: "mode" as const, label: "Mode", opts: [["all","Any mode"],["Online","Online"],["Hybrid","Hybrid"],["In-person","In-person"]] },
                { key: "certification" as const, label: "Certification", opts: [["all","Any"],["yes","Certified"],["no","Non-certified"]] },
                { key: "segment" as const, label: "Segment", opts: [["all","Any segment"],["MSME","MSME"],["Enterprise","Enterprise"],["Ecosystem","Ecosystem"]] },
              ].map((row) => (
                <div key={row.key} className="grid grid-cols-[90px_1fr] items-center gap-2">
                  <span className="text-xs font-semibold text-[hsl(var(--neutral-700))]">{row.label}</span>
                  <Select value={filters[row.key]} onValueChange={(v) => setF(row.key, v)}>
                    <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {row.opts.map(([v, l]) => (
                        <SelectItem key={v} value={v}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
              {hasActive && (
                <button
                  type="button"
                  onClick={onClear}
                  className="w-full inline-flex items-center justify-center gap-1 h-9 rounded-sm border text-xs font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
                  style={{ borderColor: "hsl(var(--neutral-200))" }}
                >
                  <X className="h-3 w-3" /> Clear all
                </button>
              )}
            </PopoverContent>
          </Popover>

          {/* Count + clear */}
          <div className="flex items-center gap-2 text-[11px] text-[hsl(var(--neutral-500))] whitespace-nowrap">
            <span className="font-semibold text-[hsl(var(--navy-800))]">{resultCount}</span> results
            {hasActive && (
              <button
                type="button"
                onClick={onClear}
                className="inline-flex items-center gap-1 font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
