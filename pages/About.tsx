import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutPillars } from "@/components/about/AboutPillars";
import { AboutWhyMatters } from "@/components/about/AboutWhyMatters";
import { WireLeaderSpeak } from "@/components/wireframe/WireLeaderSpeak";
import { AboutWhoServes } from "@/components/about/AboutWhoServes";
import { AboutPlatformEcosystem } from "@/components/about/AboutPlatformEcosystem";

import { AboutProgress } from "@/components/about/AboutProgress";

const About = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About CII Smart Manufacturing",
    description:
      "CII Smart Manufacturing is a national, industry-led platform helping Indian manufacturers assess, adopt and scale Industry 4.0 transformation.",
    url: "https://smartmfgindia-demo4.bluelup.in/about",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="About â Accelerating India's Smart Manufacturing Transformation"
        description="A mission-driven platform helping manufacturers assess readiness, discover solutions, learn from peers and build capabilities for sustainable growth."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <AboutProgress />
      <main>
        <AboutHero />
        <AboutPillars />
        <AboutWhyMatters />
        <WireLeaderSpeak />
        <AboutWhoServes />
        <AboutPlatformEcosystem />
        
        <CommonFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default About;
