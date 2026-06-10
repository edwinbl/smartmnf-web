"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ChevronRight,
  ShieldCheck,
  Info,
  Cookie,
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
const COOKIES_EMAIL = "privacy@smartmfgindia.com";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-are-cookies", label: "What Are Cookies" },
  { id: "types-we-use", label: "Types We Use" },
  { id: "third-party", label: "Third-Party Cookies" },
  { id: "managing-cookies", label: "Managing Cookies" },
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
      Icon: Cookie,
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
const CookiesSection = ({
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
      data-cookies-section
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
const CookiesSidebar = ({ activeId }: { activeId: string }) => (
  <nav aria-label="Cookie Policy sections" className="text-sm">
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
const Cookies = () => {
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
    name: "Cookie Policy",
    description:
      "Cookie Policy for the CII Smart Manufacturing Platform â what cookies we use, why we use them and how you can manage your preferences.",
    url: "https://smartmfgindia-demo4.bluelup.in/cookies",
    dateModified: "2026-05-15",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground terms-page">
      <SEO
        title="Cookie Policy â CII Smart Manufacturing Platform"
        description="Learn how the CII Smart Manufacturing Platform uses cookies and similar technologies â what we track, why we do it, and how to control your preferences."
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
                <li className="text-[hsl(var(--neutral-700))] font-medium">Cookie Policy</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[hsl(var(--navy-900))]">
              Cookie Policy
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
              This policy explains what cookies are, how the CII Smart Manufacturing
              Platform uses them, and the choices you have over their use.
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
              aria-controls="cookies-mobile-nav"
            >
              <Menu className="h-4 w-4" /> Sections
            </button>
          </div>
          {mobileOpen && (
            <div
              id="cookies-mobile-nav"
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="container-cii py-3 max-h-[60vh] overflow-y-auto">
                <CookiesSidebar activeId={activeId} />
              </div>
            </div>
          )}
        </div>

        {/* Layout */}
        <div className="container-cii py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <CookiesSidebar activeId={activeId} />
            </div>
          </aside>

          {/* Content */}
          <div ref={contentRef} className="max-w-3xl">
            <SectionAnchors sections={SECTIONS} />
            <CookiesSection
              id="introduction"
              number={1}
              title="Introduction"
              summary="This Cookie Policy is part of our Privacy Policy. It explains the types of cookies and tracking technologies we use and why."
            >
              <p>
                The CII Smart Manufacturing Platform (the âPlatformâ) uses cookies and
                similar technologies to provide, protect and improve our services. This
                policy describes what these technologies are, how we use them and what
                choices you have regarding their use.
              </p>
              <p>
                By continuing to use the Platform, you consent to the use of cookies as
                described in this policy, unless you have adjusted your browser settings to
                refuse them.
              </p>
            </CookiesSection>

            <CookiesSection
              id="what-are-cookies"
              number={2}
              title="What Are Cookies"
              summary="Cookies are small text files stored on your device that help websites remember you and function properly."
            >
              <p>
                A cookie is a small file of letters and numbers that we store on your
                browser or the hard drive of your device. Cookies contain information that
                is transferred to your device and help us recognise you when you return to
                the Platform.
              </p>
              <p>
                We also use other tracking technologies such as web beacons, pixels and
                local storage that serve similar purposes. For simplicity, we refer to all
                of these as âcookiesâ in this policy.
              </p>
            </CookiesSection>

            <CookiesSection
              id="types-we-use"
              number={3}
              title="Types We Use"
              summary="We use strictly necessary, functional, analytical and marketing cookies â each serving a different purpose."
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[hsl(var(--navy-800))] mb-2">
                    Strictly Necessary Cookies
                  </h3>
                  <p>
                    These cookies are essential for the Platform to function. They enable
                    core features such as security, network management and account access.
                    You cannot opt out of these cookies.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[hsl(var(--navy-800))] mb-2">
                    Functional Cookies
                  </h3>
                  <p>
                    These cookies allow us to remember choices you make (such as your
                    username, language or region) and provide enhanced, personalised
                    features.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[hsl(var(--navy-800))] mb-2">
                    Analytical / Performance Cookies
                  </h3>
                  <p>
                    These cookies help us understand how visitors interact with the
                    Platform by collecting and reporting information anonymously. We use
                    this data to improve site performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[hsl(var(--navy-800))] mb-2">
                    Marketing Cookies
                  </h3>
                  <p>
                    These cookies track your visit to the Platform, the pages you visit and
                    the links you follow. We may use this information to make the Platform
                    and the advertising displayed on it more relevant to your interests.
                  </p>
                </div>
              </div>
            </CookiesSection>

            <CookiesSection
              id="third-party"
              number={4}
              title="Third-Party Cookies"
              summary="Some cookies are set by trusted third-party partners who provide services on our behalf."
            >
              <p>
                We work with carefully selected third parties who may also set cookies when
                you use the Platform. These partners include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Analytics providers</strong> â to help us understand traffic and
                  usage patterns.
                </li>
                <li>
                  <strong>Social media platforms</strong> â to enable sharing and social
                  features.
                </li>
                <li>
                  <strong>Embedded content providers</strong> â such as video or map
                  services that may set their own cookies.
                </li>
              </ul>
              <Callout kind="info" title="Privacy of third parties">
                Third-party cookie use is governed by the respective provider's privacy
                policy, not by CII. We encourage you to review those policies.
              </Callout>
            </CookiesSection>

            <CookiesSection
              id="managing-cookies"
              number={5}
              title="Managing Cookies"
              summary="You can control or delete cookies through your browser settings at any time."
            >
              <p>
                Most web browsers allow you to manage cookies through their settings. You
                can:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>View cookies stored on your device and delete them.</li>
                <li>
                  Block third-party cookies or cookies from particular sites.
                </li>
                <li>Block all cookies from being set.</li>
                <li>Clear all cookies when you close your browser.</li>
              </ul>
              <p className="mt-4">
                Please note that if you choose to block or delete cookies, some features
                of the Platform may not function correctly and your experience may be
                degraded.
              </p>
              <p>
                For guidance on managing cookies in popular browsers, visit{" "}
                <a
                  href="https://www.aboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--navy-700))] hover:underline font-medium"
                >
                  aboutcookies.org
                </a>
                .
              </p>
            </CookiesSection>

            <CookiesSection
              id="policy-changes"
              number={6}
              title="Changes to this Policy"
              summary="We may update this Cookie Policy to reflect changes in technology, law or our practices."
            >
              <p>
                We may update this Cookie Policy from time to time to reflect changes in
                the cookies we use, or for operational, legal or regulatory reasons.
                Please revisit this page regularly to stay informed.
              </p>
              <p>
                The date at the top of this policy indicates when it was last updated.
                Material changes will be communicated through a notice on the Platform or
                via email where appropriate.
              </p>
            </CookiesSection>

            <CookiesSection
              id="contact"
              number={7}
              title="Contact Information"
            >
              <p>
                If you have any questions about this Cookie Policy or how we use cookies,
                please contact us:
              </p>
              <div className="mt-4 rounded-lg border border-[hsl(var(--navy-100))] bg-[hsl(var(--navy-050))] p-5">
                <p className="text-sm font-semibold text-[hsl(var(--navy-800))] mb-2">
                  CII Smart Manufacturing â Privacy & Cookies
                </p>
                <p className="text-sm text-[hsl(var(--neutral-700))]">
                  <a
                    href={`mailto:${COOKIES_EMAIL}`}
                    className="text-[hsl(var(--navy-700))] hover:underline font-medium"
                  >
                    {COOKIES_EMAIL}
                  </a>
                </p>
              </div>
            </CookiesSection>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm text-[hsl(var(--neutral-600))]">
                This Cookie Policy is reviewed at least annually. For the latest version,
                please visit this page.
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

export default Cookies;
