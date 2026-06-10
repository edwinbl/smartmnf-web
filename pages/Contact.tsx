"use client";

import { useState } from "react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactIntentGrid, type IntentKey } from "@/components/contact/ContactIntentGrid";
import { ContactSmartForm } from "@/components/contact/ContactSmartForm";
import { RegionalPresence } from "@/components/contact/RegionalPresence";
import { SupportChannels } from "@/components/contact/SupportChannels";
import { ContactFAQ, faqs } from "@/components/contact/ContactFAQ";
import { MobileStickyCta } from "@/components/contact/MobileStickyCta";

const Contact = () => {
  const [intent, setIntent] = useState<IntentKey | null>(null);

  const contactPageLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact CII Smart Manufacturing",
    description:
      "Connect with CII Smart Manufacturing for assessments, partnerships, training, solution provider enquiries and platform support.",
    url: "https://smartmfgindia-demo4.bluelup.in/contact",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CII Smart Manufacturing",
    description:
      "National platform from the Confederation of Indian Industry supporting Indian manufacturers on their Industry 4.0 journey through regional demo centres, academic partners and industry clusters.",
    url: "https://smartmfgindia-demo4.bluelup.in/contact",
    areaServed: [
      { "@type": "AdministrativeArea", name: "North India" },
      { "@type": "AdministrativeArea", name: "South India" },
      { "@type": "AdministrativeArea", name: "East India" },
      { "@type": "AdministrativeArea", name: "West India" },
    ],
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    parentOrganization: {
      "@type": "Organization",
      name: "Confederation of Indian Industry (CII)",
    },
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Contact Us â Connect with the Industry 4.0 Ecosystem"
        description="Reach the right CII Smart Manufacturing team â readiness assessments, partnerships, training, solution providers and platform support."
        jsonLd={[contactPageLd, faqLd, localBusinessLd]}
      />
      <WireHeader />
      <main>
        <ContactHero />
        <section id="intent" className="py-14 lg:py-20 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12 items-start">
              <div className="lg:sticky lg:top-24">
                <ContactIntentGrid active={intent} onSelect={setIntent} embedded />
              </div>
              <ContactSmartForm intent={intent} embedded />
            </div>
          </div>
        </section>
        <RegionalPresence />
        <SupportChannels />
        <ContactFAQ />
      </main>
      <WireFooter />
      <WireChatbotFAB />
      <MobileStickyCta />
    </div>
  );
};

export default Contact;
