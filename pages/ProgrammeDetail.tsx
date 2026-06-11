"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { ProgrammeDetailHero } from "@/components/programmes/detail/ProgrammeDetailHero";
import { StickyActionPanel } from "@/components/programmes/detail/StickyActionPanel";
import { ProgrammeOverview } from "@/components/programmes/detail/ProgrammeOverview";
import { LearningOutcomes } from "@/components/programmes/detail/LearningOutcomes";
import { WhoShouldAttend } from "@/components/programmes/detail/WhoShouldAttend";
import { ProgrammeAgenda } from "@/components/programmes/detail/ProgrammeAgenda";
import { ExpertsFaculty } from "@/components/programmes/detail/ExpertsFaculty";
import { CertificationBlock } from "@/components/programmes/detail/CertificationBlock";
import { ProgrammeObjective } from "@/components/programmes/detail/ProgrammeObjective";
import { KeyHighlights } from "@/components/programmes/detail/KeyHighlights";
import { FocusedDiscussions } from "@/components/programmes/detail/FocusedDiscussions";
import { FeeTable } from "@/components/programmes/detail/FeeTable";
import { ProgrammeContacts } from "@/components/programmes/detail/ProgrammeContacts";
import { ProgrammeBatches } from "@/components/programmes/detail/ProgrammeBatches";
import { ProgrammeGallery } from "@/components/programmes/detail/ProgrammeGallery";
import { ProgrammeTestimonials } from "@/components/programmes/detail/ProgrammeTestimonials";
import { PostProgrammeHighlights } from "@/components/programmes/detail/PostProgrammeHighlights";
import { ProgrammeReports } from "@/components/programmes/detail/ProgrammeReports";
import { ProgrammePresentations } from "@/components/programmes/detail/ProgrammePresentations";
import { ProgrammeRecording } from "@/components/programmes/detail/ProgrammeRecording";
import { RelatedProgrammes } from "@/components/programmes/detail/RelatedProgrammes";
import { MobileStickyRegister } from "@/components/programmes/detail/MobileStickyRegister";
import { getProgrammeBySlug, getRelatedProgrammes } from "@/data/programmes";
import { toast } from "@/hooks/use-toast";

const ProgrammeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const programme = slug ? getProgrammeBySlug(slug) : undefined;
  const [, setSelectedBatchId] = useState<string | undefined>();

  if (!programme) {
    return (
      <div className="min-h-dvh bg-background text-foreground flex flex-col">
        <WireHeader />
        <main className="flex-1 grid place-items-center py-24">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Programme not found</h1>
            <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
              The programme you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/programmes" className="btn-primary mt-6">Back to all programmes</Link>
          </div>
        </main>
        <WireFooter />
      </div>
    );
  }

  const isShort = programme.type === "Webinar" || programme.type === "Industry Session";
  const related = useMemo(() => getRelatedProgrammes(programme.slug), [programme.slug]);
  const hasMultipleBatches = (programme.batches?.length ?? 0) > 1;
  const isClosed = programme.status === "closed";

  const onRegister = useCallback(
    (batchId?: string) => {
      if (!batchId && hasMultipleBatches) {
        const el = document.getElementById("batches");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      setSelectedBatchId(batchId ?? programme.batches?.[0]?.id);
      toast({ title: "Registration started", description: programme.title });
    },
    [hasMultipleBatches, programme.batches, programme.title]
  );

  const metaDescription = useMemo(() => {
    const s = programme.summary;
    if (s.length <= 155) return s;
    const sliced = s.slice(0, 155);
    const lastSpace = sliced.lastIndexOf(" ");
    return (lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).replace(/[.,;:\s]+$/, "") + "â¦";
  }, [programme.summary]);

  const courseJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Course",
      name: programme.title,
      description: programme.summary,
      provider: {
        "@type": "Organization",
        name: "CII Smart Manufacturing",
        sameAs: "https://smartmfgindia-demo4.bluelup.in",
      },
      hasCourseInstance: (programme.batches?.length
        ? programme.batches
        : [{ id: programme.slug, dates: programme.startDate, location: programme.mode }]
      ).map((b) => ({
        "@type": "CourseInstance",
        name: "label" in b ? b.label : programme.title,
        courseMode: programme.mode,
        location: b.location,
        startDate: programme.isoDate,
      })),
    }),
    [programme]
  );

  return (
    <div className="min-h-dvh bg-background text-foreground pb-20 lg:pb-0">
      <SEO
        title={`${programme.title} â Programmes`}
        description={metaDescription}
        type="article"
        jsonLd={courseJsonLd}
      />
      <WireHeader />
      <main>
        <ProgrammeDetailHero programme={programme} onRegister={() => onRegister()} />

        <section className="py-12 md:py-16">
          <div className="container-cii grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-12">
              <ProgrammeOverview programme={programme} />
              <ProgrammeObjective programme={programme} />
              <KeyHighlights programme={programme} />
              <LearningOutcomes programme={programme} />
              <FocusedDiscussions programme={programme} />
              <WhoShouldAttend programme={programme} />
              <ProgrammeAgenda programme={programme} />
              <ExpertsFaculty programme={programme} />
              {programme.certification && !isShort && <CertificationBlock programme={programme} />}
              <FeeTable programme={programme} />
              <ProgrammeBatches programme={programme} onRegister={onRegister} />
              {isClosed && <PostProgrammeHighlights programme={programme} />}
              {isClosed && <ProgrammeGallery programme={programme} />}
              {isClosed && <ProgrammeTestimonials programme={programme} />}
              {isClosed && <ProgrammeReports programme={programme} />}
              {isClosed && <ProgrammePresentations programme={programme} />}
              {isClosed && <ProgrammeRecording programme={programme} />}
              <ProgrammeContacts programme={programme} />
            </div>
            <div className="lg:col-span-4">
              <StickyActionPanel programme={programme} onRegister={() => onRegister()} />
            </div>
          </div>
        </section>

        <RelatedProgrammes programmes={related} />
      </main>
      <WireFooter />
      <WireChatbotFAB />
      <MobileStickyRegister programme={programme} onRegister={() => onRegister()} />
    </div>
  );
};

export default ProgrammeDetail;
