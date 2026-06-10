"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { ReportDetailHero } from "@/components/reports/ReportDetailHero";
import { ReportSummaryPanel } from "@/components/reports/ReportSummaryPanel";
import { ReportKeyInsightsSnapshot } from "@/components/reports/ReportKeyInsightsSnapshot";
import { ReportKeyHighlights } from "@/components/reports/ReportKeyHighlights";
import { ReportThemes } from "@/components/reports/ReportThemes";
import { ReportPreview } from "@/components/reports/ReportPreview";
import { ReportDownloadModule } from "@/components/reports/ReportDownloadModule";
import { ReportRelated } from "@/components/reports/ReportRelated";
import { ReportEcosystemRecommendations } from "@/components/reports/ReportEcosystemRecommendations";
import { DownloadModal } from "@/components/reports/DownloadModal";
import { getReportBySlug, getRelated } from "@/data/reports";
import { reportsStorage } from "@/lib/reportsStorage";
import { useMockAuth } from "@/hooks/useMockAuth";
import { toast } from "@/hooks/use-toast";

const ReportDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const report = slug ? getReportBySlug(slug) : undefined;
  const user = useMockAuth();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (slug) reportsStorage.pushRecent(slug);
  }, [slug]);

  if (!report) {
    return (
      <div className="min-h-dvh bg-background text-foreground flex flex-col">
        <WireHeader />
        <main className="flex-1 grid place-items-center py-24">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Report not found</h1>
            <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
              The report you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/reports" className="btn-primary mt-6">Back to all reports</Link>
          </div>
        </main>
        <WireFooter />
      </div>
    );
  }

  const handleDownload = () => {
    if (report.gated && !user) {
      setModalOpen(true);
      return;
    }
    toast({ title: "Download started", description: report.title });
  };

  const related = getRelated(report.slug);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title={`${report.title} â Insights`}
        description={report.summary.slice(0, 155)}
      />
      <WireHeader />
      <main>
        <ReportDetailHero report={report} />
        <section className="py-12 md:py-16">
          <div className="container-cii grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <ReportSummaryPanel report={report} onDownload={handleDownload} />
            </div>
            <div className="lg:col-span-8">
              <ReportKeyInsightsSnapshot report={report} />
              <ReportKeyHighlights report={report} />
              <ReportThemes />
              <ReportPreview report={report} onUnlock={handleDownload} />
              <ReportDownloadModule report={report} onDownload={handleDownload} />
              <ReportRelated related={related} />
              <ReportEcosystemRecommendations />
            </div>
          </div>
        </section>
      </main>
      <WireFooter />
      <WireChatbotFAB />
      <DownloadModal open={modalOpen} onOpenChange={setModalOpen} report={report} />
    </div>
  );
};

export default ReportDetail;
