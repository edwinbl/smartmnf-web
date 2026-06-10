"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ChevronRight,
  ShieldCheck,
  Info,
  AlertTriangle,
  Menu,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EFFECTIVE_DATE = "1 January 2026";
const LAST_UPDATED = "15 May 2026";
const VERSION = "v2.4";
const PRIVACY_EMAIL = "privacy@smartmfgindia.com";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Information" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "sharing-disclosure", label: "Sharing & Disclosure" },
  { id: "cookies-tracking", label: "Cookies & Tracking" },
  { id: "data-retention", label: "Data Retention" },
  { id: "data-security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights & Choices" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "children-privacy", label: "Children's Privacy" },
  { id: "policy-changes", label: "Changes to this Policy" },
  { id: "contact", label: "Contact Information" },
];

/* ---------------------- Reading progress bar ---------------------- */
const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const total = h.scrollHeight - h.clientHeight;
        setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent print:hidden"
      aria-hidden
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: "hsl(var(--navy-600))" }}
      />
    </div>
  );
};

/* ---------------------- Back to top FAB ---------------------- */
const BackToTopFab = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-5 z-40 h-11 w-11 rounded-full bg-[hsl(var(--navy-800))] text-white shadow-lg grid place-items-center hover:bg-[hsl(var(--navy-700))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--navy-600))] print:hidden"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

/* ---------------------- Callouts ---------------------- */
type CalloutKind = "info" | "success" | "warning";
const Callout = ({
  kind = "info",
  title,
  children,
}: {
  kind?: CalloutKind;
  title: string;
  children: React.ReactNode;
}) => {
  const map = {
    info: {
      Icon: Info,
      bg: "bg-[hsl(var(--navy-050))]",
      border: "border-[hsl(var(--navy-100))]",
      color: "text-[hsl(var(--navy-700))]",
    },
    success: {
      Icon: ShieldCheck,
      bg: "bg-[hsl(var(--india-green)/0.08)]",
      border: "border-[hsl(var(--india-green)/0.25)]",
      color: "text-[hsl(var(--india-green))]",
    },
    warning: {
      Icon: AlertTriangle,
      bg: "bg-[hsl(var(--orange-100))]",
      border: "border-[hsl(var(--orange-100))]",
      color: "text-[hsl(var(--orange-600))]",
    },
  }[kind];
  const { Icon } = map;
  return (
    <div
      className={`rounded-lg border ${map.border} ${map.bg} p-4 md:p-5 flex gap-3`}
    >
      <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${map.color}`} />
      <div>
        <p className={`text-sm font-semibold ${map.color} mb-1`}>{title}</p>
        <div className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

/* ---------------------- Section wrapper ---------------------- */
const PrivacySection = ({
  id,
  number,
  title,
  summary,
  children,
}: {
  id: string;
  number: number;
  title: string;
  summary?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      data-privacy-section
      data-label={title}
      className="scroll-mt-28 py-8 md:py-10 border-b border-border last:border-b-0"
    >
      <h2 className="text-2xl md:text-[28px] font-bold tracking-tight text-[hsl(var(--navy-900))] mb-4">
        <span className="text-[hsl(var(--navy-500))] font-numeric mr-2">
          {String(number).padStart(2, "0")}.
        </span>
        {title}
      </h2>
      {summary && (
        <div className="mb-5 rounded-lg border border-[hsl(var(--navy-100))] bg-[hsl(var(--navy-050))] p-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-600))] mb-1">
            In Simple Terms
          </p>
          <p className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
            {summary}
          </p>
        </div>
      )}
      <div className="space-y-4 text-[15px] leading-relaxed text-[hsl(var(--neutral-700))]">
        {children}
      </div>
    </section>
  );
};

/* ---------------------- Sidebar (desktop) + dropdown (mobile) ---------------------- */
const PrivacySidebar = ({ activeId }: { activeId: string }) => (
  <nav aria-label="Privacy Policy sections" className="text-sm">
    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-3">
      On this page
    </p>
    <ul className="space-y-1">
      {SECTIONS.map((s, i) => {
        const isActive = activeId === s.id;
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`group flex items-center gap-2 rounded-md px-3 py-2 border-l-2 transition-colors ${
                isActive
                  ? "border-[hsl(var(--navy-600))] bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] font-semibold"
                  : "border-transparent text-[hsl(var(--neutral-700))] hover:bg-[hsl(var(--neutral-50))] hover:text-[hsl(var(--navy-800))]"
              }`}
            >
              <span className="font-numeric text-xs text-[hsl(var(--neutral-500))] w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{s.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

/* ---------------------- Page ---------------------- */
const Privacy = () => {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "Privacy Policy describing how the CII Smart Manufacturing Platform collects, uses, shares and protects personal information.",
    url: "https://smartmfgindia-demo4.bluelup.in/privacy",
    dateModified: "2026-05-15",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground terms-page">
      <SEO
        title="Privacy Policy â CII Smart Manufacturing Platform"
        description="How the CII Smart Manufacturing Platform collects, uses, shares and safeguards your personal information â and the rights you have over your data."
        type="article"
        jsonLd={jsonLd}
      />
      <ReadingProgressBar />
      <div className="print:hidden">
        <WireHeader />
      </div>

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-[hsl(var(--neutral-50))]">
          <div className="container-cii py-10 md:py-14">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-[hsl(var(--neutral-500))]">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-[hsl(var(--navy-700))]">
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-[hsl(var(--neutral-700))] font-medium">Privacy Policy</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[hsl(var(--navy-900))]">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
              This Privacy Policy explains what information we collect when you use
              the CII Smart Manufacturing Platform, how we use and protect it, and the
              choices you have over your data.
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
                  Effective Date
                </dt>
                <dd className="font-semibold text-[hsl(var(--navy-800))] font-numeric">
                  {EFFECTIVE_DATE}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
                  Last Updated
                </dt>
                <dd className="font-semibold text-[hsl(var(--navy-800))] font-numeric">
                  {LAST_UPDATED}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
                  Version
                </dt>
                <dd className="font-semibold text-[hsl(var(--navy-800))] font-numeric">
                  {VERSION}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Mobile nav toggle */}
        <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur print:hidden">
          <div className="container-cii py-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center gap-1.5 h-10 px-3 text-sm font-semibold rounded-md border border-border text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))]"
              aria-expanded={mobileOpen}
              aria-controls="privacy-mobile-nav"
            >
              <Menu className="h-4 w-4" /> Sections
            </button>
          </div>
          {mobileOpen && (
            <div
              id="privacy-mobile-nav"
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="container-cii py-3 max-h-[60vh] overflow-y-auto">
                <PrivacySidebar activeId={activeId} />
              </div>
            </div>
          )}
        </div>

        {/* Layout */}
        <div className="container-cii py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <PrivacySidebar activeId={activeId} />
            </div>
          </aside>

          <div ref={contentRef} className="max-w-3xl">
            <PrivacySection
              id="introduction"
              number={1}
              title="Introduction"
              summary="We respect your privacy. This policy explains what data we collect, why we collect it, and how we keep it safe."
            >
              <p>
                The Confederation of Indian Industry (âCIIâ, âweâ, âusâ) operates the
                CII Smart Manufacturing Platform (the âPlatformâ). We are committed to
                protecting the privacy of every visitor, member, assessor and partner
                who uses the Platform.
              </p>
              <p>
                This Privacy Policy applies to all personal information collected
                through the Platform, including websites, assessments, programmes,
                events and related communications.
              </p>
            </PrivacySection>

            <PrivacySection
              id="information-we-collect"
              number={2}
              title="Information We Collect"
              summary="We collect the details you give us when you register, take an assessment or contact us â plus basic usage data to keep the Platform working well."
            >
              <p>We collect personal information in the following categories:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account data</strong> â name, email, phone, organisation,
                  role and password.
                </li>
                <li>
                  <strong>Assessment inputs</strong> â operational, technological and
                  workforce details you provide while completing readiness
                  assessments.
                </li>
                <li>
                  <strong>Programme &amp; event data</strong> â registrations,
                  attendance and feedback for workshops, certifications and events.
                </li>
                <li>
                  <strong>Communications</strong> â messages you send us through forms,
                  email or support chat.
                </li>
                <li>
                  <strong>Technical data</strong> â IP address, browser, device type,
                  pages visited and timestamps.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection
              id="how-we-use"
              number={3}
              title="How We Use Information"
              summary="We use your information to deliver the Platform, personalise your experience, and improve our programmes."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide and personalise access to assessments, reports and programmes.</li>
                <li>Process registrations, payments and event participation.</li>
                <li>Generate aggregated, de-identified industry benchmarks and research.</li>
                <li>Send service updates, programme invitations and relevant newsletters.</li>
                <li>Detect, prevent and respond to fraud, abuse or security incidents.</li>
                <li>Comply with legal, regulatory and reporting obligations.</li>
              </ul>
            </PrivacySection>

            <PrivacySection
              id="legal-basis"
              number={4}
              title="Legal Basis for Processing"
              summary="We rely on consent, contract performance, legitimate interests and legal obligations as the basis for processing your data."
            >
              <p>
                Depending on the activity, we process personal information based on
                your consent, our contract with you, our legitimate interests in
                operating the Platform, or to meet a legal obligation.
              </p>
              <Callout kind="info" title="Withdrawing consent">
                Where we rely on consent, you may withdraw it at any time by writing to
                us. Withdrawal does not affect the lawfulness of processing carried out
                before withdrawal.
              </Callout>
            </PrivacySection>

            <PrivacySection
              id="sharing-disclosure"
              number={5}
              title="Sharing & Disclosure"
              summary="We do not sell your data. We share it only with trusted partners who help us run the Platform, or when required by law."
            >
              <p>We may share personal information with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Programme partners</strong> â academic, government and
                  industry collaborators delivering joint programmes.
                </li>
                <li>
                  <strong>Service providers</strong> â hosting, analytics, email,
                  payment and support vendors bound by confidentiality terms.
                </li>
                <li>
                  <strong>Regulators &amp; authorities</strong> â when required by
                  applicable law, court order or to protect rights and safety.
                </li>
              </ul>
              <Callout kind="success" title="No sale of personal data">
                We do not sell, rent or trade your personal information for commercial
                gain.
              </Callout>
            </PrivacySection>

            <PrivacySection
              id="cookies-tracking"
              number={6}
              title="Cookies & Tracking"
              summary="We use cookies to keep you signed in, remember preferences and understand how the Platform is used."
            >
              <p>
                Cookies and similar technologies help us operate and improve the
                Platform. You can control cookies through your browser settings;
                disabling some may affect functionality.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="ck-1">
                  <AccordionTrigger>Strictly necessary</AccordionTrigger>
                  <AccordionContent>
                    Required for core functionality such as authentication, session
                    management and security. These cannot be turned off.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ck-2">
                  <AccordionTrigger>Analytics</AccordionTrigger>
                  <AccordionContent>
                    Help us understand how visitors use the Platform so we can improve
                    performance and content. Data is aggregated and de-identified
                    wherever possible.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ck-3">
                  <AccordionTrigger>Preferences</AccordionTrigger>
                  <AccordionContent>
                    Remember your choices such as language, region and recently viewed
                    programmes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </PrivacySection>

            <PrivacySection
              id="data-retention"
              number={7}
              title="Data Retention"
              summary="We keep personal data only as long as needed for the purposes described, or as required by law."
            >
              <p>
                Retention periods vary by data type. Account data is retained while
                your account is active and for a reasonable period afterwards to
                comply with legal, accounting and reporting obligations. Aggregated
                and de-identified data may be retained indefinitely for research and
                benchmarking.
              </p>
            </PrivacySection>

            <PrivacySection
              id="data-security"
              number={8}
              title="Data Security"
              summary="We use industry-standard safeguards to protect your data from unauthorised access, alteration or disclosure."
            >
              <p>
                We implement appropriate technical and organisational measures â
                including encryption in transit, access controls, monitoring and
                regular reviews. No system is completely secure; we encourage you to
                use strong, unique passwords and to notify us of any suspected
                compromise.
              </p>
              <Callout kind="warning" title="Report a security concern">
                If you believe your account or our Platform has been compromised, write
                to us at{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="font-semibold text-[hsl(var(--navy-700))] underline"
                >
                  {PRIVACY_EMAIL}
                </a>
                .
              </Callout>
            </PrivacySection>

            <PrivacySection
              id="your-rights"
              number={9}
              title="Your Rights & Choices"
              summary="You have rights to access, correct, delete and object to certain uses of your personal data."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of data we no longer need to retain.</li>
                <li>Object to or restrict certain processing activities.</li>
                <li>Request a portable copy of data you have provided to us.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="font-semibold text-[hsl(var(--navy-700))] underline"
                >
                  {PRIVACY_EMAIL}
                </a>
                . We may need to verify your identity before acting on a request.
              </p>
            </PrivacySection>

            <PrivacySection
              id="international-transfers"
              number={10}
              title="International Transfers"
              summary="Where data crosses borders, we use appropriate safeguards in line with applicable law."
            >
              <p>
                Personal information may be processed or stored outside the country in
                which it was collected. When we transfer data internationally, we put
                appropriate safeguards in place â such as contractual commitments â
                consistent with applicable data protection law.
              </p>
            </PrivacySection>

            <PrivacySection
              id="children-privacy"
              number={11}
              title="Children's Privacy"
              summary="The Platform is intended for adults; we do not knowingly collect data from children."
            >
              <p>
                The Platform is not directed to children under 18, and we do not
                knowingly collect personal information from them. If you believe a
                child has provided us with personal information, please contact us so
                we can delete it.
              </p>
            </PrivacySection>

            <PrivacySection
              id="policy-changes"
              number={12}
              title="Changes to this Policy"
              summary="We will update this policy as needed. Material changes will be highlighted on the Platform."
            >
              <p>
                We may revise this Privacy Policy from time to time. The âLast Updatedâ
                date at the top of this page reflects the most recent version.
                Material changes will be communicated through the Platform or by email
                where appropriate.
              </p>
            </PrivacySection>

            <PrivacySection
              id="contact"
              number={13}
              title="Contact Information"
              summary="Reach out with any privacy question, concern or request."
            >
              <p>
                For any questions about this Privacy Policy or how we handle your
                personal information, please contact our Data Protection team:
              </p>
              <div className="rounded-lg border border-border bg-[hsl(var(--neutral-50))] p-5">
                <p className="text-sm font-semibold text-[hsl(var(--navy-800))]">
                  Confederation of Indian Industry â Smart Manufacturing
                </p>
                <p className="text-sm text-[hsl(var(--neutral-700))] mt-1">
                  Email:{" "}
                  <a
                    href={`mailto:${PRIVACY_EMAIL}`}
                    className="font-semibold text-[hsl(var(--navy-700))] underline"
                  >
                    {PRIVACY_EMAIL}
                  </a>
                </p>
              </div>
            </PrivacySection>
          </div>
        </div>
      </main>

      <BackToTopFab />
      <div className="print:hidden">
            <WireFooter />
        <WireChatbotFAB />
      </div>
    </div>
  );
};

export default Privacy;
