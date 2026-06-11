"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { PastProgrammesArchive } from "@/components/programmes/PastProgrammesArchive";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { ProgrammesHero } from "@/components/programmes/ProgrammesHero";
import { GuidedDiscovery } from "@/components/programmes/GuidedDiscovery";

import {
  emptyProgrammeFilters,
  type ProgrammeFilters,
} from "@/components/programmes/ProgrammesDiscoveryBar";
import { ProgrammesFilterSidebar } from "@/components/programmes/ProgrammesFilterSidebar";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { ProgrammesEmptyState } from "@/components/programmes/ProgrammesEmptyState";
import { FeaturedProgrammes } from "@/components/programmes/FeaturedProgrammes";
import { ProgrammesImpactStats } from "@/components/programmes/ProgrammesImpactStats";
import {
  programmes,
  programmeTypes,
  type ProgrammeItem,
  type ProgrammeQuickPickId,
  type OutcomeId,
} from "@/data/programmes";
import { toast } from "@/hooks/use-toast";

const quickPickFilter = (p: ProgrammeItem, pick: ProgrammeQuickPickId | null): boolean => {
  if (!pick) return true;
  switch (pick) {
    case "msme-recommended": return p.segment === "MSME" || p.industry === "MSME";
    case "beginner": return p.level === "Beginner" || p.level === "All Levels";
    case "leadership": return p.type === "Leadership";
    case "ai-automation": return /AI|Automation/i.test(p.technology);
    case "sustainability": return /Sustain/i.test(p.technology);
    case "factory-digitization": return /IoT|Industry 4\.0|Lean/i.test(p.technology);
    default: return true;
  }
};

const ProgrammesIndex = () => {
  const [type, setType] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<ProgrammeFilters>(emptyProgrammeFilters);
  const [quickPick, setQuickPick] = useState<ProgrammeQuickPickId | null>(null);
  const [outcome, setOutcome] = useState<OutcomeId | null>(null);
  const gridRef = useRef<HTMLElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programmes.filter((p) => {
      if (type !== "All" && p.type !== type) return false;
      if (q) {
        const hay = `${p.title} ${p.summary} ${p.tagline} ${p.industry} ${p.technology} ${p.tags.join(" ")} ${p.faculty.map((f) => f.name).join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.industry !== "all" && p.industry !== filters.industry) return false;
      if (filters.level !== "all" && p.level !== filters.level) return false;
      if (filters.mode !== "all" && p.mode !== filters.mode) return false;
      if (filters.segment !== "all" && p.segment !== filters.segment) return false;
      if (filters.certification === "yes" && !p.certification) return false;
      if (filters.certification === "no" && p.certification) return false;
      if (!quickPickFilter(p, quickPick)) return false;
      if (outcome && !p.outcomes.includes(outcome)) return false;
      return true;
    });
  }, [type, query, filters, quickPick, outcome]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: programmes.length };
    programmeTypes.slice(1).forEach((t) => {
      c[t] = programmes.filter((p) => p.type === t).length;
    });
    return c;
  }, []);

  const handleRegister = (p: ProgrammeItem) => {
    toast({ title: "Registration started", description: p.title });
  };
  const handleOutcome = (id: OutcomeId | null) => {
    setOutcome(id);
    if (id) setTimeout(() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  };
  const scrollToGrid = () => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToDiscovery = () => document.getElementById("guided-discovery")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const clearAll = () => {
    setQuery(""); setFilters(emptyProgrammeFilters); setQuickPick(null); setType("All"); setOutcome(null);
  };

  useEffect(() => { /Manual scroll-into-view trigger handled in handleOutcome Manual/ }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CII Smart Manufacturing â Programmes & Training",
    itemListElement: programmes.slice(0, 8).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://smartmfgindia-demo4.bluelup.in/programmes/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Programmes & Training â Industry 4.0 Capability Building"
        description="Expert-led programmes, workshops, certifications and bootcamps to build Industry 4.0 capability across India's manufacturing ecosystem."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        <ProgrammesHero
          onExplore={scrollToGrid}
          onFindPath={scrollToDiscovery}
          query={query}
          onQuery={setQuery}
          onTag={setQuery}
        />
        <FeaturedProgrammes />
        <GuidedDiscovery selected={outcome} onSelect={handleOutcome} />
        <section className="py-12 md:py-16" id="programmes-grid" ref={gridRef}>
          <div className="container-cii">
            <div className="mb-8">
              <div className="section-eyebrow mb-2">All Programmes</div>
              <h2 className="font-display font-bold text-[24px] md:text-[28px] text-[hsl(var(--navy-900))] tracking-tight">
                Build the skills the future of manufacturing needs
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              <ProgrammesFilterSidebar
                query={query}
                onQuery={setQuery}
                filters={filters}
                onFilters={setFilters}
                quickPick={quickPick}
                onQuickPick={setQuickPick}
                onClear={clearAll}
                resultCount={filtered.length}
                type={type}
                onType={setType}
                typeCounts={counts}
              />
              <div className="min-w-0">
                {filtered.length === 0 ? (
                  <ProgrammesEmptyState onClear={clearAll} />
                ) : (
                  <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
                    {filtered.map((p) => (
                      <ProgrammeCard
                        key={p.slug}
                        programme={p}
                        onRegister={handleRegister}
                        recommended={!!outcome && p.outcomes.includes(outcome)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <ProgrammesImpactStats />
        <PastProgrammesArchive />
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default ProgrammesIndex;
