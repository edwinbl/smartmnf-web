"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ChevronRight,
  Mail,
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
const LEGAL_EMAIL = "legal@smartmfgindia.com";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "introduction", label: "Introduction" },
  { id: "eligibility", label: "User Eligibility" },
  { id: "platform-usage", label: "Platform Usage" },
  { id: "assessments-reports", label: "Assessments & Reports" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "privacy-data", label: "Privacy & Data Usage" },
  { id: "user-conduct", label: "User Conduct" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
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
const TermsSection = ({
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
      data-terms-section
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
const TermsSidebar = ({ activeId }: { activeId: string }) => (
  <nav aria-label="Terms of Use sections" className="text-sm">
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
const Terms = () => {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll-spy
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
    name: "Terms of Use",
    description:
      "Terms of Use governing access to and use of the CII Smart Manufacturing Platform.",
    url: "https://smartmfgindia-demo4.bluelup.in/terms",
    dateModified: "2026-05-15",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground terms-page">
      <SEO
        title="Terms of Use â CII Smart Manufacturing Platform"
        description="Terms of Use governing access to and use of the CII Smart Manufacturing Platform â eligibility, conduct, IP, privacy and liability."
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
                <li className="text-[hsl(var(--neutral-700))] font-medium">Terms of Use</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[hsl(var(--navy-900))]">
              Terms of Use
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
              These Terms govern your access to and use of the CII Smart Manufacturing
              Platform â including assessments, reports, programmes and community
              features. Please read them carefully before using the platform.
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
              aria-controls="terms-mobile-nav"
            >
              <Menu className="h-4 w-4" /> Sections
            </button>
          </div>
          {mobileOpen && (
            <div
              id="terms-mobile-nav"
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="container-cii py-3 max-h-[60vh] overflow-y-auto">
                <TermsSidebar activeId={activeId} />
              </div>
            </div>
          )}
        </div>

        {/* Layout */}
        <div className="container-cii py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TermsSidebar activeId={activeId} />
            </div>
          </aside>

          {/* Content */}
          <div ref={contentRef} className="max-w-3xl">
            <TermsSection
              id="introduction"
              number={1}
              title="Introduction"
              summary="By using the CII Smart Manufacturing Platform you agree to these Terms. They explain what you can expect from us and what we expect from you."
            >
              <p>
                The CII Smart Manufacturing Platform (the âPlatformâ) is operated by
                the Confederation of Indian Industry (âCIIâ, âweâ, âusâ) to help Indian
                manufacturers assess, learn and adopt Industry 4.0 practices. These
                Terms of Use (âTermsâ) form a binding agreement between you and CII.
              </p>
              <p>
                By accessing or using any part of the Platform â including readiness
                assessments, reports, programmes, events and community features â you
                confirm that you have read, understood and agree to be bound by these
                Terms and our Privacy Policy.
              </p>
            </TermsSection>

            <TermsSection
              id="eligibility"
              number={2}
              title="User Eligibility"
              summary="You must be at least 18 years old and authorised to act on behalf of any organisation you register."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>You must be at least 18 years of age to create an account.</li>
                <li>
                  If you register on behalf of an organisation, you confirm you are
                  authorised to bind that organisation to these Terms.
                </li>
                <li>
                  Account information must be accurate, current and complete, and you
                  are responsible for keeping it that way.
                </li>
                <li>
                  We may decline, suspend or revoke accounts that do not meet these
                  eligibility requirements.
                </li>
              </ul>
            </TermsSection>

            <TermsSection
              id="platform-usage"
              number={3}
              title="Platform Usage"
              summary="Use the Platform for its intended purpose â your own learning, assessment and engagement with the smart-manufacturing ecosystem."
            >
              <p>
                You may use the Platform only for lawful purposes and in accordance
                with these Terms. We grant you a limited, non-exclusive,
                non-transferable, revocable licence to access and use the Platform for
                your internal business or learning purposes.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="acc-1">
                  <AccordionTrigger>Account security</AccordionTrigger>
                  <AccordionContent>
                    You are responsible for safeguarding your credentials and for all
                    activity that occurs under your account. Notify us immediately of
                    any unauthorised use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="acc-2">
                  <AccordionTrigger>Service availability</AccordionTrigger>
                  <AccordionContent>
                    We aim for high availability but do not guarantee uninterrupted
                    access. We may modify, suspend or discontinue features at any time
                    with reasonable notice where practical.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TermsSection>

            <TermsSection
              id="assessments-reports"
              number={4}
              title="Assessments & Reports"
              summary="Assessment scores and reports are diagnostic tools â informative, not prescriptive â and shouldn't replace professional judgement."
            >
              <p>
                Readiness assessments, maturity scores and reports generated on the
                Platform are based on the inputs you provide and on industry-standard
                frameworks. They are intended to support â not replace â independent
                expert advice.
              </p>
              <Callout kind="warning" title="Important disclaimer">
                Outputs are provided âas isâ for informational purposes. CII makes no
                warranty regarding their accuracy, completeness or suitability for any
                particular business decision.
              </Callout>
            </TermsSection>

            <TermsSection
              id="intellectual-property"
              number={5}
              title="Intellectual Property"
              summary="The Platform and its content belong to CII or its licensors. Your data and submissions remain yours."
            >
              <p>
                All content on the Platform â including frameworks, reports, branding,
                logos, software and design â is owned by CII or its licensors and is
                protected by applicable intellectual-property laws. You may not copy,
                redistribute or create derivative works without prior written consent.
              </p>
              <p>
                You retain ownership of the data and content you submit. You grant CII
                a worldwide, royalty-free licence to host, process and aggregate that
                data solely to operate and improve the Platform.
              </p>
            </TermsSection>

            <TermsSection
              id="privacy-data"
              number={6}
              title="Privacy & Data Usage"
              summary="We handle personal and organisational data with care, in line with our Privacy Policy."
            >
              <p>
                Your use of the Platform is also governed by our{" "}
                <a
                  href="#"
                  className="text-[hsl(var(--navy-600))] underline-offset-4 hover:underline font-medium"
                >
                  Privacy Policy
                </a>
                , which explains what we collect, why we collect it and how it is
                processed and stored.
              </p>
              <Callout kind="success" title="Data confidentiality">
                Individual organisational responses are kept confidential. Aggregated,
                anonymised insights may be published to advance the manufacturing
                ecosystem in India.
              </Callout>
            </TermsSection>

            <TermsSection
              id="user-conduct"
              number={7}
              title="User Conduct"
              summary="Engage respectfully and don't try to break, abuse or misuse the Platform."
            >
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Misrepresent your identity, affiliation or organisational role.</li>
                <li>Upload unlawful, infringing, malicious or misleading content.</li>
                <li>
                  Interfere with, probe or attempt to gain unauthorised access to the
                  Platform or its infrastructure.
                </li>
                <li>
                  Use automated tools to scrape, harvest or extract data at scale.
                </li>
                <li>Use the Platform to send spam or unsolicited communications.</li>
              </ul>
            </TermsSection>

            <TermsSection
              id="third-party-links"
              number={8}
              title="Third-Party Links"
              summary="External resources and partner sites are linked for convenience â CII isn't responsible for their content."
            >
              <p>
                The Platform may contain links to third-party websites, tools or
                services. These are provided for convenience only; CII does not endorse
                and is not responsible for their content, policies or practices. Your
                use of third-party services is at your own risk.
              </p>
            </TermsSection>

            <TermsSection
              id="liability"
              number={9}
              title="Limitation of Liability"
              summary="CII's liability is limited to the maximum extent allowed by law."
            >
              <p>
                To the fullest extent permitted by law, CII, its officers, employees
                and partners shall not be liable for any indirect, incidental,
                consequential, special or exemplary damages arising from your use of
                the Platform â including loss of profits, data or goodwill â even if
                advised of the possibility of such damages.
              </p>
              <Callout kind="warning" title="No warranties">
                The Platform is provided on an âas isâ and âas availableâ basis without
                warranties of any kind, whether express, implied or statutory.
              </Callout>
            </TermsSection>

            <TermsSection
              id="termination"
              number={10}
              title="Termination"
              summary="We can suspend or close accounts that breach these Terms; you can stop using the Platform at any time."
            >
              <p>
                We may suspend or terminate your access to the Platform, with or
                without notice, if we believe you have violated these Terms or if
                continued access poses a risk to the Platform or its users.
              </p>
              <p>
                You may discontinue use of the Platform at any time. Provisions that
                by their nature should survive termination â including intellectual
                property, disclaimers, limitation of liability and governing law â
                will continue to apply.
              </p>
            </TermsSection>

            <TermsSection
              id="governing-law"
              number={11}
              title="Governing Law"
              summary="These Terms are governed by Indian law; disputes are subject to the courts of New Delhi."
            >
              <p>
                These Terms are governed by and construed in accordance with the laws
                of India. Any disputes arising out of or in connection with these
                Terms or your use of the Platform shall be subject to the exclusive
                jurisdiction of the competent courts of New Delhi, India.
              </p>
            </TermsSection>

            <TermsSection
              id="contact"
              number={12}
              title="Contact Information"
              summary="Questions about these Terms? Our legal team is here to help."
            >
              <p>
                For any questions, notices or requests regarding these Terms, please
                contact us at:
              </p>
              <ul className="list-none space-y-1 text-[hsl(var(--neutral-700))]">
                <li>
                  <span className="font-semibold text-[hsl(var(--navy-800))]">
                    Legal Team, CII Smart Manufacturing
                  </span>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${LEGAL_EMAIL}`}
                    className="text-[hsl(var(--navy-600))] hover:underline font-medium"
                  >
                    {LEGAL_EMAIL}
                  </a>
                </li>
                <li>The Mantosh Sondhi Centre, 23 Institutional Area, Lodi Road, New Delhi 110 003</li>
              </ul>
            </TermsSection>

            {/* Support footer card */}
            <div className="mt-10 rounded-xl border border-border bg-[hsl(var(--neutral-50))] p-6 md:p-8 print:hidden">
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))] mb-2">
                    Need Help?
                  </p>
                  <h3 className="text-xl font-bold text-[hsl(var(--navy-900))] mb-1">
                    Questions about these Terms?
                  </h3>
                  <p className="text-sm text-[hsl(var(--neutral-700))]">
                    Our team can walk you through any clause or clarify how it applies
                    to your organisation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-secondary">
                    Contact support
                  </Link>
                  <a href={`mailto:${LEGAL_EMAIL}`} className="btn-outline">
                    <Mail className="h-4 w-4" /> Email legal
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href="#"
                  className="text-[hsl(var(--navy-600))] hover:text-[hsl(var(--navy-800))] font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-[hsl(var(--navy-600))] hover:text-[hsl(var(--navy-800))] font-medium"
                >
                  Cookie Policy
                </a>
                <a
                  href={`mailto:${LEGAL_EMAIL}`}
                  className="text-[hsl(var(--neutral-500))] hover:text-[hsl(var(--navy-700))]"
                >
                  {LEGAL_EMAIL}
                </a>
              </div>
            </div>
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

export default Terms;
