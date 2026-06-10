"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChevronRight,
  Compass,
  Cpu,
  Download,
  FileText,
  Globe2,
  Layers,
  Network,
  Sparkles,
  X,
  Library,
  ShieldCheck,
  Users,
  Lightbulb,
  Briefcase,
  BarChart3,
  ClipboardCheck,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";

import { SEO } from "@/components/SEO";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { toast } from "@/hooks/use-toast";
import indiaCover from "@/assets/directory-india-cover.jpg";
import singaporeCover from "@/assets/directory-singapore-cover.jpg";

/* ---------------------------- Data ---------------------------- */

type Directory = {
  slug: "india" | "singapore";
  title: string;
  edition: string;
  region: string;
  cover: string;
  accent: "navy" | "teal";
  short: string;
  long: string;
  highlights: string[];
  technologies: string[];
  inside: string[];
  metadata: { label: string; value: string }[];
  stats: { label: string; value: string }[];
  pdfUrl: string;
};

const DIRECTORIES: Directory[] = [
  {
    slug: "india",
    title: "India's Industry 4.0 e-Directory",
    edition: "2025 Edition Â· v3.0",
    region: "India Ecosystem",
    cover: indiaCover,
    accent: "navy",
    short:
      "A curated compendium of India's Industry 4.0 ecosystem â technology providers, consultants, manufacturers and digital transformation enablers shaping the country's smart manufacturing journey.",
    long:
      "Published by CII Smart Manufacturing, this directory profiles the organisations powering India's Industry 4.0 movement. From large enterprises to specialised consultants and emerging deep-tech start-ups, the directory is designed for leaders evaluating partners, technologies and reference implementations across sectors.",
    highlights: [
      "300+ Indian organisations profiled",
      "Sector-wise classification across 10+ technology domains",
      "Curated technology provider listings with capability snapshots",
      "Foreword by CII Industry 4.0 leadership",
    ],
    technologies: [
      "Robotics",
      "Industrial IoT",
      "AI & Analytics",
      "Cyber Security",
      "Additive Manufacturing",
      "Blockchain",
    ],
    inside: [
      "Technology Providers",
      "Consultants & Integrators",
      "Manufacturing Organisations",
      "Industry 4.0 Solution Providers",
      "Ecosystem Partners",
    ],
    metadata: [
      { label: "Publisher", value: "CII Smart Manufacturing" },
      { label: "Geography", value: "India" },
      { label: "Focus", value: "Industry 4.0 Technologies" },
      { label: "Relevance", value: "Manufacturing Transformation" },
    ],
    stats: [
      { label: "Organisations", value: "300+" },
      { label: "Technology Domains", value: "10+" },
      { label: "Pages", value: "180" },
    ],
    pdfUrl: "#",
  },
  {
    slug: "singapore",
    title: "Singapore's Industry 4.0 e-Directory",
    edition: "International Edition Â· v1.0",
    region: "Singapore Ecosystem",
    cover: singaporeCover,
    accent: "teal",
    short:
      "An international companion edition profiling Singapore's Industry 4.0 ecosystem â smart manufacturing leaders, automation specialists and digital transformation enablers driving innovation across the region.",
    long:
      "Co-curated with regional partners, this directory offers an executive view into Singapore's advanced manufacturing landscape. It is designed to help Indian manufacturers, policymakers and global investors discover cross-border collaboration opportunities and benchmark best practices.",
    highlights: [
      "200+ Singapore-based organisations profiled",
      "Cross-border collaboration opportunities highlighted",
      "Benchmark insights from a leading Industry 4.0 nation",
      "Curated with international ecosystem partners",
    ],
    technologies: [
      "Smart Manufacturing",
      "Automation",
      "Digital Transformation",
      "AI & Analytics",
      "Industrial IoT",
    ],
    inside: [
      "Technology Providers",
      "Consultants & System Integrators",
      "Manufacturing Organisations",
      "Industry 4.0 Solution Providers",
      "Ecosystem & Innovation Partners",
    ],
    metadata: [
      { label: "Publisher", value: "CII with International Partners" },
      { label: "Geography", value: "Singapore" },
      { label: "Focus", value: "International Industry 4.0 Landscape" },
      { label: "Relevance", value: "Manufacturing Innovation" },
    ],
    stats: [
      { label: "Organisations", value: "200+" },
      { label: "Technology Domains", value: "8+" },
      { label: "Pages", value: "140" },
    ],
    pdfUrl: "#",
  },
];

const HERO_STATS = [
  { value: "2", label: "Directory Publications", Icon: BookOpen },
  { value: "500+", label: "Organisations Featured", Icon: Building2 },
  { value: "10+", label: "Technology Domains", Icon: Cpu },
  { value: "India & Intl.", label: "Ecosystems Covered", Icon: Globe2 },
];

const VALUE_PROPS = [
  {
    Icon: Network,
    title: "Discover Ecosystem Players",
    body: "Explore the organisations driving Industry 4.0 adoption across India and Singapore â from large manufacturers to specialised partners.",
    accent: "hsl(var(--navy-700))",
    tint: "hsl(var(--navy-050))",
  },
  {
    Icon: Lightbulb,
    title: "Understand the Technology Landscape",
    body: "Get an executive view of the technologies shaping the future of manufacturing â robotics, IIoT, AI, additive and beyond.",
    accent: "hsl(var(--india-green))",
    tint: "hsl(var(--india-green) / 0.08)",
  },
  {
    Icon: Users,
    title: "Build Industry Connections",
    body: "Identify potential partners, technology providers and ecosystem enablers for your Industry 4.0 transformation journey.",
    accent: "hsl(var(--orange-600))",
    tint: "hsl(var(--orange-100))",
  },
];

const RELATED_MODULES = [
  {
    Icon: Briefcase,
    title: "Case Studies",
    body: "Reference implementations from manufacturers across India.",
    to: "/case-studies",
  },
  {
    Icon: Layers,
    title: "Solutions",
    body: "Curated Industry 4.0 solutions mapped to outcomes.",
    to: "/solutions",
  },
  {
    Icon: BarChart3,
    title: "Reports & Insights",
    body: "Research, playbooks and intelligence for decision makers.",
    to: "/reports",
  },
  {
    Icon: ClipboardCheck,
    title: "Readiness Assessment",
    body: "Benchmark your plant's smart manufacturing maturity.",
    to: "/readiness-assessment",
  },
];

/* ---------------------------- Helpers ---------------------------- */

const accentMap = {
  navy: {
    soft: "hsl(var(--navy-050))",
    border: "hsl(var(--navy-100))",
    text: "hsl(var(--navy-800))",
    chipBg: "hsl(var(--navy-050))",
    chipText: "hsl(var(--navy-700))",
    band: "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))",
    pill: "hsl(var(--saffron))",
  },
  teal: {
    soft: "hsl(var(--india-green) / 0.06)",
    border: "hsl(var(--india-green) / 0.20)",
    text: "hsl(var(--india-green))",
    chipBg: "hsl(var(--india-green) / 0.08)",
    chipText: "hsl(var(--india-green))",
    band: "linear-gradient(135deg, #0b3b3b, hsl(var(--india-green)))",
    pill: "hsl(var(--india-green))",
  },
} as const;

/* ---------------------------- Hero ---------------------------- */

const DirectoriesHero = ({ onBrowse }: { onBrowse: () => void }) => (
  <section className="relative overflow-hidden border-b border-[hsl(var(--neutral-150))] bg-background">
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(1100px 500px at 85% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(900px 600px at 0% 100%, hsl(var(--navy-600) / 0.12), transparent 55%)",
      }}
      aria-hidden
    />
    <div
      className="absolute inset-0 -z-10 opacity-[0.30]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--neutral-200) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neutral-200) / 0.6) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }}
      aria-hidden
    />
    <div className="container-cii relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-14 lg:py-20">
      <div className="lg:col-span-7">
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
            <li className="text-[hsl(var(--neutral-700))] font-medium">Directories</li>
          </ol>
        </nav>
        <span className="cii-chip">
          <Library className="h-3.5 w-3.5" /> Publication Library
        </span>
        <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
          Industry 4.0 Directories &{" "}
          <span className="text-[hsl(var(--red-600))]">Ecosystem Publications</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-2xl leading-relaxed">
          Explore curated Industry 4.0 ecosystem directories published by CII and its global
          partners â showcasing technology providers, consultants, manufacturers and digital
          transformation enablers.
        </p>
      </div>

      {/* Editorial collage */}
      <div className="lg:col-span-5">
        <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] overflow-hidden">
          <div
            className="absolute right-6 top-2 w-[58%] aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden rotate-[6deg] border border-white"
            style={{ background: "hsl(var(--navy-900))" }}
          >
            <img
              src={singaporeCover}
              alt="Singapore Industry 4.0 e-Directory cover"
              className="w-full h-full object-cover"
              loading="eager"
              width={768}
              height={1024}
            />
          </div>
          <div className="absolute left-2 bottom-0 w-[60%] aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden -rotate-[5deg] border border-white">
            <img
              src={indiaCover}
              alt="India Industry 4.0 e-Directory cover"
              className="w-full h-full object-cover"
              loading="eager"
              width={768}
              height={1024}
            />
          </div>
          <div className="absolute -top-3 left-8 inline-flex items-center gap-2 rounded-full bg-white shadow-lg border border-[hsl(var(--neutral-150))] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-800))]">
            <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--india-green))]" /> Curated by CII
          </div>
          <div className="absolute bottom-4 right-0 inline-flex items-center gap-2 rounded-full bg-white shadow-lg border border-[hsl(var(--neutral-150))] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-800))]">
            <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--orange-500))]" /> 2 Editions
          </div>
        </div>
      </div>
    </div>

    {/* Stats strip */}
    <div className="border-t border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))]">
      <div className="container-cii py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {HERO_STATS.map(({ value, label, Icon }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg grid place-items-center text-[hsl(var(--navy-700))] bg-white border border-[hsl(var(--neutral-150))]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-xl font-extrabold text-[hsl(var(--navy-900))] leading-none font-numeric">
                {value}
              </div>
              <div className="text-[12px] text-[hsl(var(--neutral-600))] mt-1">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------------------- Directory Card ---------------------------- */

const DirectoryCard = ({
  directory,
  onView,
  onDownload,
}: {
  directory: Directory;
  onView: () => void;
  onDownload: () => void;
}) => {
  const a = accentMap[directory.accent];
  return (
    <article
      className="group relative overflow-hidden rounded-3xl bg-white border border-[hsl(var(--neutral-150))] shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="grid md:grid-cols-12">
        {/* Cover */}
        <div
          className="md:col-span-5 relative aspect-[3/4] md:aspect-auto md:min-h-[440px] overflow-hidden"
          style={{ background: a.band }}
        >
          <img
            src={directory.cover}
            alt={`${directory.title} cover`}
            loading="lazy"
            width={768}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
            style={{ color: a.text }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: a.pill }}
              aria-hidden
            />
            {directory.region}
          </div>
        </div>

        {/* Body */}
        <div className="md:col-span-7 p-7 md:p-9 flex flex-col">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
            {directory.edition}
          </div>
          <h3 className="mt-2 font-display text-2xl md:text-[28px] font-extrabold tracking-tight text-[hsl(var(--navy-900))] leading-tight">
            {directory.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--neutral-700))]">
            {directory.short}
          </p>

          {/* Highlights */}
          <ul className="mt-5 space-y-2">
            {directory.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-[hsl(var(--neutral-700))]">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ background: a.pill }}
                  aria-hidden
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="mt-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-2">
              Focus Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {directory.technologies.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center h-7 px-2.5 rounded-full text-[12px] font-medium"
                  style={{ background: a.chipBg, color: a.chipText }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Meta */}
          <dl className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-[hsl(var(--neutral-150))]">
            {directory.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
                  {s.label}
                </dt>
                <dd className="font-display text-lg font-extrabold text-[hsl(var(--navy-900))] font-numeric">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onView}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md font-semibold text-white"
              style={{ background: "hsl(var(--navy-800))" }}
            >
              View Details <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onDownload}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md font-semibold text-[hsl(var(--navy-800))] border border-[hsl(var(--neutral-200))] bg-white hover:bg-[hsl(var(--neutral-50))]"
            >
              <Download className="h-4 w-4" /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ---------------------------- Detail Sheet ---------------------------- */

const DirectoryDetailPanel = ({
  directory,
  open,
  onClose,
  onDownload,
}: {
  directory: Directory | null;
  open: boolean;
  onClose: () => void;
  onDownload: (d: Directory) => void;
}) => {
  if (!directory) return null;
  const a = accentMap[directory.accent];
  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl p-0 overflow-y-auto bg-background"
      >
        {/* Header band */}
        <div
          className="relative p-6 md:p-8 text-white"
          style={{ background: a.band }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
            {directory.region} Â· {directory.edition}
          </div>
          <h2 className="mt-2 font-display text-2xl md:text-[28px] font-extrabold leading-tight">
            {directory.title}
          </h2>
        </div>

        {/* Cover + overview */}
        <div className="px-6 md:px-8 -mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white bg-[hsl(var(--navy-900))] aspect-[3/2]">
            <img
              src={directory.cover}
              alt={`${directory.title} cover`}
              className="h-full w-full object-cover"
              loading="lazy"
              width={768}
              height={1024}
            />
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-7">
          <section>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-2">
              Directory Overview
            </h3>
            <p className="text-[15px] leading-relaxed text-[hsl(var(--neutral-700))]">
              {directory.long}
            </p>
          </section>

          <section>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-3">
              What you'll find inside
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {directory.inside.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[hsl(var(--navy-800))] bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))] rounded-lg px-3 py-2.5"
                >
                  <Compass className="h-4 w-4 mt-0.5 shrink-0" style={{ color: a.text }} />
                  <span className="font-medium">{i}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-3">
              Technology categories covered
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {directory.technologies.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center h-7 px-2.5 rounded-full text-[12px] font-medium"
                  style={{ background: a.chipBg, color: a.chipText }}
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-3">
              Publication information
            </h3>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {directory.metadata.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
                    {m.label}
                  </dt>
                  <dd className="font-semibold text-[hsl(var(--navy-800))]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {/* Sticky CTA */}
        <div className="sticky bottom-0 border-t border-[hsl(var(--neutral-150))] bg-white/95 backdrop-blur p-4 md:p-5">
          <button
            type="button"
            onClick={() => onDownload(directory)}
            className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-md font-semibold text-white"
            style={{ background: "hsl(var(--red-600))" }}
          >
            <Download className="h-4 w-4" /> Download PDF
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

/* ---------------------------- Page ---------------------------- */

const Directories = () => {
  const [openSlug, setOpenSlug] = useState<Directory["slug"] | null>(null);

  const openDirectory = useMemo(
    () => DIRECTORIES.find((d) => d.slug === openSlug) ?? null,
    [openSlug],
  );

  const handleDownload = (d: Directory) => {
    toast({
      title: "Download started",
      description: `${d.title} (PDF)`,
    });
  };

  const scrollToShowcase = () => {
    document
      .getElementById("directories-showcase")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industry 4.0 Directories â CII Smart Manufacturing",
    description:
      "Curated Industry 4.0 ecosystem directories published by CII and its global partners â featuring technology providers, consultants, manufacturers and digital transformation enablers.",
    url: "https://smartmfgindia-demo4.bluelup.in/directories",
    hasPart: DIRECTORIES.map((d) => ({
      "@type": "Book",
      name: d.title,
      bookEdition: d.edition,
      inLanguage: "en",
    })),
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Industry 4.0 Directories â Ecosystem Publications | CII Smart Manufacturing"
        description="Explore curated Industry 4.0 ecosystem directories from India and Singapore â discover technology providers, consultants, manufacturers and digital transformation enablers."
        jsonLd={jsonLd}
      />
      <WireHeader />

      <main>
        <DirectoriesHero onBrowse={scrollToShowcase} />

        {/* Showcase */}
        <section id="directories-showcase" className="py-14 md:py-20">
          <div className="container-cii">
            <div className="mb-10 max-w-2xl">
              <div className="section-eyebrow mb-2">Available Directories</div>
              <h2 className="font-display font-extrabold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Two curated editions of the Industry 4.0 ecosystem
              </h2>
              <p className="mt-3 text-[15px] md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
                Each edition is a publication-grade compendium â designed for executives,
                policymakers and transformation leaders evaluating partners and benchmarking
                ecosystems.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {DIRECTORIES.map((d) => (
                <DirectoryCard
                  key={d.slug}
                  directory={d}
                  onView={() => setOpenSlug(d.slug)}
                  onDownload={() => handleDownload(d)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why explore */}
        <section className="py-14 md:py-20 bg-[hsl(var(--neutral-50))] border-y border-[hsl(var(--neutral-150))]">
          <div className="container-cii">
            <div className="mb-10 max-w-2xl">
              <div className="section-eyebrow mb-2">Why these directories</div>
              <h2 className="font-display font-extrabold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Why explore these directories?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALUE_PROPS.map(({ Icon, title, body, accent, tint }) => (
                <div
                  key={title}
                  className="group rounded-2xl bg-white border border-[hsl(var(--neutral-150))] p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="h-12 w-12 rounded-xl grid place-items-center mb-5"
                    style={{ background: tint, color: accent }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[hsl(var(--navy-900))] tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--neutral-700))]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related modules */}
        <section className="py-14 md:py-20">
          <div className="container-cii">
            <div className="mb-10 max-w-2xl">
              <div className="section-eyebrow mb-2">Continue exploring</div>
              <h2 className="font-display font-extrabold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Related platform modules
              </h2>
              <p className="mt-3 text-[15px] md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">
                Move beyond publications and continue exploring the CII Smart Manufacturing
                ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_MODULES.map(({ Icon, title, body, to }) => (
                <Link key={title}
                  href={to}
                  className="group rounded-2xl bg-white border border-[hsl(var(--neutral-150))] p-6 hover:shadow-lg hover:border-[hsl(var(--navy-200))] transition-all"
                >
                  <div className="h-11 w-11 rounded-xl grid place-items-center mb-4 bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] group-hover:bg-[hsl(var(--navy-800))] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[hsl(var(--navy-900))] tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[hsl(var(--neutral-700))]">
                    {body}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[hsl(var(--red-600))]">
                    Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA â local, page-specific */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container-cii">
            <div
              className="relative overflow-hidden rounded-3xl text-white p-10 md:p-14"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))",
              }}
            >
              <div
                className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--orange-500) / 0.6), transparent 65%)",
                }}
                aria-hidden
              />
              <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/70">
                    Participate
                  </div>
                  <h2 className="mt-3 font-display text-3xl md:text-[40px] font-extrabold leading-[1.05] tracking-tight">
                    Looking to participate in future industry directories?
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                    Connect with CII Smart Manufacturing to explore future publication
                    opportunities, ecosystem participation and collaboration initiatives.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-semibold text-white"
                    style={{ background: "hsl(var(--red-600))" }}
                  >
                    Contact CII <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-semibold text-white border border-white/30 hover:bg-white/10"
                  >
                    <FileText className="h-4 w-4" /> Submit Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>

      <WireFooter />
      <WireChatbotFAB />

      <DirectoryDetailPanel
        directory={openDirectory}
        open={openSlug !== null}
        onClose={() => setOpenSlug(null)}
        onDownload={(d) => {
          handleDownload(d);
        }}
      />
    </div>
  );
};

export default Directories;
