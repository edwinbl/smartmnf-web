"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ChevronRight,
  ShieldCheck,
  Info,
  Eye,
  Menu,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { SectionAnchors } from "@/components/common/SectionAnchors";

const EFFECTIVE_DATE = "1 January 2026";
const LAST_UPDATED = "15 May 2026";
const VERSION = "v1.0";
const ACCESSIBILITY_EMAIL = "accessibility@smartmfgindia.com";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "introduction", label: "Introduction" },
  { id: "commitment", label: "Our Commitment" },
  { id: "standards", label: "Standards We Follow" },
  { id: "features", label: "Accessibility Features" },
  { id: "assistive-tech", label: "Assistive Technology" },
  { id: "feedback", label: "Feedback & Reporting" },
  { id: "conformance", label: "Conformance Status" },
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
      Icon: Eye,
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
const AccessibilitySection = ({
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
      data-accessibility-section
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
const AccessibilitySidebar = ({ activeId }: { activeId: string }) => (
  <nav aria-label="Accessibility Policy sections" className="text-sm">
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
const Accessibility = () => {
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
    name: "Accessibility Policy",
    description:
      "Accessibility Policy for the CII Smart Manufacturing Platform â our commitment to inclusive design and digital accessibility.",
    url: "https://smartmfgindia-demo4.bluelup.in/accessibility",
    dateModified: "2026-05-15",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground terms-page">
      <SEO
        title="Accessibility Policy â CII Smart Manufacturing Platform"
        description="Our commitment to making the CII Smart Manufacturing Platform accessible to everyone â conformance, features, assistive technology support and how to report issues."
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
                <li className="text-[hsl(var(--neutral-700))] font-medium">Accessibility Policy</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[hsl(var(--navy-900))]">
              Accessibility Policy
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
              We are committed to ensuring that the CII Smart Manufacturing Platform is
              accessible to everyone, including people with disabilities. This policy
              outlines our approach, the standards we follow and how you can reach us with
              feedback.
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
              aria-controls="accessibility-mobile-nav"
            >
              <Menu className="h-4 w-4" /> Sections
            </button>
          </div>
          {mobileOpen && (
            <div
              id="accessibility-mobile-nav"
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="container-cii py-3 max-h-[60vh] overflow-y-auto">
                <AccessibilitySidebar activeId={activeId} />
              </div>
            </div>
          )}
        </div>

        {/* Layout */}
        <div className="container-cii py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <AccessibilitySidebar activeId={activeId} />
            </div>
          </aside>

          {/* Content */}
          <div ref={contentRef} className="max-w-3xl">
            <SectionAnchors sections={SECTIONS} />
            <AccessibilitySection
              id="introduction"
              number={1}
              title="Introduction"
              summary="We believe digital accessibility is a fundamental right. This policy explains how we make our platform usable by people with diverse abilities."
            >
              <p>
                The CII Smart Manufacturing Platform is designed and maintained to be
                perceivable, operable, understandable and robust for all users, including
                those who rely on assistive technologies or have temporary or permanent
                disabilities.
              </p>
              <p>
                We continually review and improve our platform to remove barriers and
                provide an equitable experience for manufacturers, assessors, students and
                partners across India.
              </p>
            </AccessibilitySection>

            <AccessibilitySection
              id="commitment"
              number={2}
              title="Our Commitment"
              summary="We aim for WCAG 2.1 Level AA conformance and embed accessibility into our design, development and content processes."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  We consider accessibility at every stage of design and development â not
                  as an afterthought.
                </li>
                <li>
                  We conduct regular audits using automated tools and manual testing with
                  assistive technologies.
                </li>
                <li>
                  We train our content and development teams on inclusive design
                  practices.
                </li>
                <li>
                  We address reported accessibility issues promptly and keep this policy
                  under continuous review.
                </li>
              </ul>
            </AccessibilitySection>

            <AccessibilitySection
              id="standards"
              number={3}
              title="Standards We Follow"
              summary="We align with international and national accessibility standards to ensure broad compatibility."
            >
              <p>Our platform is built and tested against the following standards:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>WCAG 2.1 Level AA</strong> â Web Content Accessibility Guidelines
                  published by the W3C.
                </li>
                <li>
                  <strong>WAI-ARIA 1.2</strong> â Accessible Rich Internet Applications
                  for dynamic content and custom components.
                </li>
                <li>
                  <strong>EN 301 549</strong> â European standard for accessibility
                  requirements in ICT products and services.
                </li>
                <li>
                  <strong>GIGW 3.0</strong> â Guidelines for Indian Government Websites,
                  where applicable to our public-facing content.
                </li>
              </ul>
            </AccessibilitySection>

            <AccessibilitySection
              id="features"
              number={4}
              title="Accessibility Features"
              summary="Keyboard navigation, screen-reader support, resizable text, colour contrast and consistent structure are built into the platform."
            >
              <p>The platform includes the following accessibility features:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Keyboard navigation</strong> â All interactive elements are
                  reachable and operable using only a keyboard.
                </li>
                <li>
                  <strong>Focus indicators</strong> â Visible focus outlines help users
                  track their position on the page.
                </li>
                <li>
                  <strong>Screen-reader support</strong> â Semantic HTML, ARIA landmarks
                  and labels help assistive technologies interpret the interface.
                </li>
                <li>
                  <strong>Text resizing</strong> â Content remains readable and functional
                  when zoomed up to 200%.
                </li>
                <li>
                  <strong>Colour contrast</strong> â Text and interactive elements meet
                  WCAG AA contrast ratios.
                </li>
                <li>
                  <strong>Alt text</strong> â Meaningful images have descriptive
                  alternatives; decorative images are marked appropriately.
                </li>
                <li>
                  <strong>Consistent navigation</strong> â Menus, breadcrumbs and page
                  structures behave predictably across the site.
                </li>
              </ul>
            </AccessibilitySection>

            <AccessibilitySection
              id="assistive-tech"
              number={5}
              title="Assistive Technology"
              summary="We test with popular screen readers, browsers and operating systems used in India."
            >
              <p>We test the platform with the following combinations:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>NVDA with Mozilla Firefox on Windows</li>
                <li>JAWS with Google Chrome on Windows</li>
                <li>VoiceOver with Safari on macOS and iOS</li>
                <li>TalkBack with Google Chrome on Android</li>
              </ul>
              <Callout kind="info" title="Browser support">
                For the best accessible experience we recommend using the latest version of
                Chrome, Firefox, Safari or Edge with up-to-date assistive technology.
              </Callout>
            </AccessibilitySection>

            <AccessibilitySection
              id="feedback"
              number={6}
              title="Feedback & Reporting"
              summary="Encountered a barrier? Let us know â we take every report seriously and aim to respond within 5 business days."
            >
              <p>
                We welcome feedback on the accessibility of the CII Smart Manufacturing
                Platform. If you encounter any difficulty or have suggestions for
                improvement, please contact us:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${ACCESSIBILITY_EMAIL}`}
                    className="text-[hsl(var(--navy-700))] hover:underline font-medium"
                  >
                    {ACCESSIBILITY_EMAIL}
                  </a>
                </li>
                <li>
                  <strong>Subject line:</strong> Please include "Accessibility Feedback"
                  so we can route your message quickly.
                </li>
              </ul>
              <p>
                When reporting an issue, please include the page URL, a description of the
                problem, the assistive technology or browser you are using, and any steps to
                reproduce it. We aim to acknowledge receipt within 2 business days and
                provide a substantive response within 10 business days.
              </p>
            </AccessibilitySection>

            <AccessibilitySection
              id="conformance"
              number={7}
              title="Conformance Status"
              summary="We target WCAG 2.1 Level AA. Known limitations are documented and actively addressed."
            >
              <p>
                The CII Smart Manufacturing Platform partially conforms to WCAG 2.1 Level
                AA. We are actively working to address the following known limitations:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Some legacy PDF reports may not be fully accessible. Accessible
                  alternatives can be requested via email.
                </li>
                <li>
                  Third-party embedded content (such as external event-registration
                  platforms) may not meet the same standards. We encourage partners to
                  improve their accessibility and provide alternatives where possible.
                </li>
              </ul>
            </AccessibilitySection>

            <AccessibilitySection
              id="contact"
              number={8}
              title="Contact Information"
            >
              <p>
                For questions about this Accessibility Policy, or to request information in
                an alternative format, please reach out:
              </p>
              <div className="mt-4 rounded-lg border border-[hsl(var(--navy-100))] bg-[hsl(var(--navy-050))] p-5">
                <p className="text-sm font-semibold text-[hsl(var(--navy-800))] mb-2">
                  CII Smart Manufacturing â Accessibility
                </p>
                <p className="text-sm text-[hsl(var(--neutral-700))]">
                  <a
                    href={`mailto:${ACCESSIBILITY_EMAIL}`}
                    className="text-[hsl(var(--navy-700))] hover:underline font-medium"
                  >
                    {ACCESSIBILITY_EMAIL}
                  </a>
                </p>
              </div>
            </AccessibilitySection>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm text-[hsl(var(--neutral-600))]">
                This Accessibility Policy is reviewed at least annually. For the latest
                version, please visit this page or contact us directly.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <WireFooter />
        <WireChatbotFAB />
      </div>
      <BackToTopFab />
    </div>
  );
};

export default Accessibility;
