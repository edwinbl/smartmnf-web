"use client";

import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireHero } from "@/components/wireframe/WireHero";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import { WirePathwayCards } from "@/components/wireframe/WirePathwayCards";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { SEO } from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";
import { WireLeaderSpeak } from "@/components/wireframe/WireLeaderSpeak";
import { WireAssessmentTeaser } from "@/components/wireframe/WireAssessmentTeaser";
import { WireSolutionsTeaser } from "@/components/wireframe/WireSolutionsTeaser";
import { WireResources } from "@/components/wireframe/WireResources";
import { WireProgrammes } from "@/components/wireframe/WireProgrammes";
import { WireAwardsBand } from "@/components/wireframe/WireAwardsBand";
import { WirePartners } from "@/components/wireframe/WirePartners";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CII Smart Manufacturing",
      url: "https://smartmfgindia.lovable.app/",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Confederation of Indian Industry â Smart Manufacturing",
      url: "https://smartmfgindia.lovable.app/",
      logo: "https://www.smartmfgindia.com/img/Logo-final.png",
    },
  ];

  return (
    <div
      className="min-h-dvh bg-background text-foreground"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a, button");
        if (!link) return;
        const label = link.getAttribute("aria-label") || link.textContent?.trim().slice(0, 60) || "unknown";
        const href = (link as HTMLAnchorElement).href;
        trackEvent("cta_click", { label, href });
      }}
    >
      <SEO
        title="Home"
        description="CII Smart Manufacturing helps Indian MSMEs assess, learn and adopt Industry 4.0 â readiness assessments, case studies, training and partner ecosystem."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        <WireHero />
        <WirePathwayCards />
        <WireLeaderSpeak />
        <WireAssessmentTeaser />
        <WireSolutionsTeaser />
        <WireResources />
        <WireProgrammes />
        <WireAwardsBand />
        <WirePartners />
        <CommonFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default Index;
