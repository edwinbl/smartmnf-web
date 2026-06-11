"use client";

import { useMemo, useState } from "react";
import { ReportCard } from "@/components/reports/ReportCard";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { ReportsHero } from "@/components/reports/ReportsHero";
import { emptyFilters, type ReportFilters } from "@/components/reports/ReportsDiscoveryBar";
import { ReportsFilterSidebar } from "@/components/reports/ReportsFilterSidebar";
import { FeaturedCollections } from "@/components/reports/FeaturedCollections";
import { ReportsThemesExplorer } from "@/components/reports/ReportsThemesExplorer";
import { ReportsSectorExplorer } from "@/components/reports/ReportsSectorExplorer";
import { ReportsEmptyState } from "@/components/reports/ReportsEmptyState";
import { reports, reportFacets, type Report, type QuickPickId } from "@/data/reports";
import { toast } from "@/hooks/use-toast";


const quickPickFilter = (r: Report, pick: QuickPickId | null) => {
  switch (pick) {
    case "latest":
      return r.year >= 2025;
    case "downloaded":
      return r.gated === false; // mock
    case "msme":
      return r.domain === "MSME";
    case "sustainability":
      return r.domain === "Sustainability";
    case "smart":
      return r.domain === "Smart Manufacturing";
    case "export":
      return /export/i.test(r.title) || /Trade/i.test(r.technology);
    default:
      return true;
  }
};

const ReportsIndex = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<ReportFilters>(emptyFilters);
  const [quickPick, setQuickPick] = useState<QuickPickId | null>(null);

  const ciiReports = useMemo(() => reports.filter((r) => r.author.includes("CII")), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter((r) => {
      if (q) {
        const hay = `${r.title} ${r.summary} ${r.tags.join(" ")} ${r.industry} ${r.domain} ${r.technology}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.industry !== "all" && r.industry !== filters.industry) return false;
      if (filters.domain !== "all" && r.domain !== filters.domain) return false;
      if (filters.technology !== "all" && r.technology !== filters.technology) return false;
      if (filters.state !== "all" && r.state !== filters.state) return false;
      if (filters.type !== "all" && r.type !== filters.type) return false;
      if (filters.year !== "all" && String(r.year) !== filters.year) return false;
      if (!quickPickFilter(r, quickPick)) return false;
      return true;
    });
  }, [query, filters, quickPick]);

  const handleDownload = (r: Report) => {
    toast({ title: "Download started", description: r.title });
  };

  const clearAll = () => {
    setQuery("");
    setFilters(emptyFilters);
    setQuickPick(null);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights & Reports â CII Smart Manufacturing",
    description:
      "Industry intelligence, research and transformation insights to accelerate Industry 4.0 adoption in India.",
    url: "https://smartmfgindia-demo4.bluelup.in/reports",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Insights & Reports â Industry 4.0 Intelligence Hub"
        description="Explore curated research, playbooks and transformation insights to accelerate Industry 4.0 adoption across Indian manufacturing."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        <ReportsHero query={query} onQuery={setQuery} onTag={setQuery} />
        
        <FeaturedCollections />

        {/Manual CII Reports Manual/}
        <section id="cii-reports" className="py-14 md:py-20">
          <div className="container-cii">
            <div className="mb-8">
              <div className="section-eyebrow mb-2">Published by CII</div>
              <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Reports from CII
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ciiReports.map((r) => (
                <ReportCard key={r.slug} report={r} onDownload={handleDownload} />
              ))}
            </div>
          </div>
        </section>

        <ReportsThemesExplorer onSelect={(t) => setQuery(t)} />
        <ReportsSectorExplorer
          onSelect={(industry) => {
            if (reportFacets.industry.includes(industry)) {
              setFilters({ ...filters, industry });
            } else {
              setQuery(industry);
            }
          }}
        />

        {/Manual All Reports â sidebar + grid layout Manual/}
        <section id="reports" className="py-12 md:py-16">
          <div className="container-cii">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              <ReportsFilterSidebar
                query={query}
                onQuery={setQuery}
                filters={filters}
                onFilters={setFilters}
                quickPick={quickPick}
                onQuickPick={setQuickPick}
                onClear={clearAll}
                resultCount={filtered.length}
              />
              <div className="min-w-0">
                <div className="mb-6">
                  <div className="section-eyebrow mb-2">All Reports</div>
                  <h2 className="font-display font-bold text-[24px] md:text-[28px] text-[hsl(var(--navy-900))] tracking-tight">
                    {filtered.length} insight{filtered.length === 1 ? "" : "s"} ready to explore
                  </h2>
                </div>
                {filtered.length === 0 ? (
                  <ReportsEmptyState onClear={clearAll} />
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {filtered.map((r) => (
                      <ReportCard key={r.slug} report={r} onDownload={handleDownload} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <CommonFinalCta />

      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default ReportsIndex;
