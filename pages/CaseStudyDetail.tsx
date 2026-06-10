"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams, redirect } from "next/navigation";
import {
  ChevronRight,
  Download,
  Bookmark,
  Share2,
  Check,
  Factory,
  Building2,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Workflow,
  Cpu,
  Gauge,
  AlertTriangle,
  Wrench,
  Rocket,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Layers,
} from "lucide-react";

import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { findCaseStudy, type CaseStudy } from "@/data/caseStudies";
import { toast } from "@/hooks/use-toast";

/* ---------------- Fallback synthesis ---------------- */
const synth = (cs: CaseStudy) => {
  const categoryTags =
    cs.categoryTags ?? [cs.sector, cs.companyType, ...cs.valueProps.slice(0, 2)];
  const executiveSummary = cs.executiveSummary ?? cs.summary;

  const solutionProvider =
    cs.solutionProvider ?? {
      name: "Industry 4.0 Solution Partner",
      overview:
        "An accredited Industry 4.0 partner enabling Indian manufacturers across digital engineering, IIoT and smart factory programmes.",
      capabilities: cs.capabilities.slice(0, 5),
      technologies: cs.capabilities,
    };

  const manufacturer = cs.manufacturer ?? {
    industry: `${cs.sector} â manufacturing`,
    footprint: `${cs.companySize} based in ${cs.state}`,
    highlights: [cs.companySize, cs.companyType, cs.state],
  };

  const technologies = cs.technologies ?? cs.capabilities;

  const businessChallenges =
    cs.businessChallenges ??
    cs.challengePoints.map((p) => ({
      title: p,
      desc: "Operational pain point limiting performance prior to the Industry 4.0 intervention.",
    }));

  const solutionGroups =
    cs.solutionGroups ??
    cs.approachSteps.map((s, i) => ({
      title: s.title,
      points: [s.desc, cs.capabilities[i] ?? cs.capabilities[0]].filter(Boolean) as string[],
    }));

  const businessOutcomes =
    cs.businessOutcomes ??
    cs.kpis.map((k) => ({
      title: k.label,
      impact: `${k.value} â measurable improvement delivered by the programme.`,
    }));

  const benefitsTable =
    cs.benefitsTable ??
    cs.beforeAfter.map((b) => ({ area: b.label, impact: `${b.before} â ${b.after}` }));

  const relatedSolutionAreas =
    cs.relatedSolutionAreas ?? Array.from(new Set([...cs.valueProps, ...cs.capabilities]));

  const changeManagement =
    cs.changeManagement ?? {
      challenge:
        "Embedding new digital ways of working across cross-functional teams required structured change management.",
      actions: [
        "Cross-functional steering committee",
        "Agile, iterative rollout with stakeholder reviews",
        "Structured knowledge transfer and enablement",
        "Hands-on training for in-house teams",
      ],
      outcome: "Sustained adoption of the new digital capabilities across the organisation.",
    };

  return {
    categoryTags,
    executiveSummary,
    solutionProvider,
    manufacturer,
    technologies,
    businessChallenges,
    solutionGroups,
    businessOutcomes,
    benefitsTable,
    relatedSolutionAreas,
    changeManagement,
  };
};

/* ---------------- UI primitives ---------------- */
const SectionHead = ({
  eyebrow,
  title,
  intro,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  invert?: boolean;
}) => (
  <div className="max-w-3xl">
    <div className={`section-eyebrow mb-2 ${invert ? "text-white/70" : ""}`}>{eyebrow}</div>
    <h2
      className={`font-display font-bold text-[22px] md:text-[28px] leading-tight tracking-tight ${
        invert ? "text-white" : "text-[hsl(var(--navy-900))]"
      }`}
    >
      {title}
    </h2>
    {intro && (
      <p
        className={`mt-2 text-sm md:text-base ${
          invert ? "text-white/80" : "text-[hsl(var(--neutral-700))]"
        }`}
      >
        {intro}
      </p>
    )}
  </div>
);

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between gap-3">
    <span className="text-[hsl(var(--neutral-500))]">{label}</span>
    <span className="font-semibold text-[hsl(var(--navy-900))] text-right">{value}</span>
  </div>
);

const ChipGroup = ({ label, items }: { label: string; items: string[] }) => (
  <div>
    <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))] mb-2">
      {label}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} className="cii-chip">
          {t}
        </span>
      ))}
    </div>
  </div>
);

/* ---------------- Sidebar ---------------- */
const CaseSummaryPanel = ({
  cs,
  technologies,
  onDownload,
}: {
  cs: CaseStudy;
  technologies: string[];
  onDownload: () => void;
}) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({ title: "Link copied" });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast({ title: "Unable to copy link" });
    }
  };

  return (
    <aside className="lg:sticky lg:top-[88px] self-start">
      <div className="cii-card overflow-hidden">
        <div className="relative h-56 bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))] text-white p-6 flex flex-col justify-between">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur w-fit">
            Case Study
          </span>
          <div>
            <div className="font-numeric text-4xl font-extrabold leading-none">
              {cs.metric.value}
            </div>
            <div className="text-[11px] uppercase tracking-[0.14em] font-bold opacity-90 mt-1.5">
              {cs.metric.label}
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden
          />
        </div>

        <div className="p-5 space-y-3">
          <button type="button" onClick={onDownload} className="btn-primary w-full">
            <Download className="h-4 w-4" />
            Explore report
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setSaved((s) => !s);
                toast({ title: !saved ? "Saved" : "Removed" });
              }}
              className="h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              <Bookmark className="h-3.5 w-3.5" fill={saved ? "currentColor" : "none"} />
              {saved ? "Saved" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[hsl(var(--india-green))]" /> : <Share2 className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Share"}
            </button>
          </div>
        </div>

        <div
          className="px-5 pb-5 pt-2 space-y-3 text-sm border-t"
          style={{ borderColor: "hsl(var(--neutral-150))" }}
        >
          <Meta label="Company" value={cs.company} />
          <Meta label="Industry" value={cs.sector} />
          <Meta label="Location" value={cs.state} />
          <Meta label="Size" value={cs.companySize} />
          <Meta label="Duration" value={`${cs.durationMonths} months`} />
        </div>

        <div className="px-5 pb-5 space-y-4">
          <ChipGroup label="Value Proposition" items={cs.valueProps} />
          <ChipGroup label="Technologies" items={technologies} />
        </div>
      </div>
    </aside>
  );
};

/* ---------------- Page ---------------- */
const CaseStudyDetail = () => {
  const { slug = "" } = useParams();
  const cs = findCaseStudy(slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const x = useMemo(() => synth(cs), [cs]);

  const handleDownload = () => {
    toast({ title: "Download started", description: cs.headline });
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title={`${cs.company} â ${cs.headline} | Case Study`}
        description={cs.summary}
        url={`/case-studies/${cs.slug}`}
        type="article"
      />
      <WireHeader />

      <main>
        {/* ============ HERO ============ */}
        <section className="relative text-white overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(125deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--navy-600)) 100%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
          <div className="container-cii relative py-10 md:py-14">
            <nav
              className="text-xs text-white/70 flex items-center gap-1.5 mb-5 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/90 truncate max-w-[60vw]">{cs.company}</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                {x.categoryTags.slice(0, 3).map((t, i) => (
                  <span
                    key={t}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold ${
                      i === 0
                        ? "bg-[hsl(var(--orange-500))] text-white"
                        : "bg-white/10 backdrop-blur-sm border border-white/20"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Case Study
              </div>
              <h1 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[1.1] tracking-tight">
                {cs.headline}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/85">
                {cs.summary}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80 pt-1">
                <span className="inline-flex items-center gap-2">
                  <Factory className="h-4 w-4 text-white/60" /> {cs.sector}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-white/60" /> {cs.companySize}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white/60" /> {cs.state}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/60" /> {cs.durationMonths} months
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Sidebar + Main ============ */}
        <section className="py-12 md:py-16">
          <div className="container-cii grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <CaseSummaryPanel cs={cs} technologies={x.technologies} onDownload={handleDownload} />
            </div>

            <div className="lg:col-span-8 space-y-14">
              {/* Executive Summary */}
              <div>
                <SectionHead eyebrow="Executive Summary" title="At a glance" />
                <p className="mt-4 text-[15px] md:text-base leading-relaxed text-[hsl(var(--neutral-800))]">
                  {x.executiveSummary}
                </p>
              </div>

              {/* About Solution Provider */}
              <div className="rounded-3xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-7 md:p-8">
                <SectionHead
                  eyebrow={`About ${x.solutionProvider.name}`}
                  title={x.solutionProvider.name}
                  intro={x.solutionProvider.overview}
                />
                {x.solutionProvider.capabilities?.length ? (
                  <div className="mt-5">
                    <ChipGroup label="Capabilities" items={x.solutionProvider.capabilities} />
                  </div>
                ) : null}
              </div>

              {/* About the Company */}
              <div>
                <SectionHead
                  eyebrow="About the Company"
                  title={cs.company}
                  intro={`${x.manufacturer.industry}. ${x.manufacturer.footprint}.`}
                />
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {x.manufacturer.highlights.map((h) => (
                    <div
                      key={h}
                      className="rounded-xl bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))] p-3 text-sm font-semibold text-[hsl(var(--navy-900))]"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Challenges */}
              <div>
                <SectionHead
                  eyebrow="Business Challenges"
                  title="The challenges before the programme"
                  intro={cs.challenge}
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {x.businessChallenges.map((p, i) => (
                    <div
                      key={p.title}
                      className="rounded-2xl border border-[hsl(var(--red-100))] bg-white p-5 hover:shadow-md transition-all"
                    >
                      <div className="h-9 w-9 rounded-xl bg-[hsl(var(--red-100))] text-[hsl(var(--red-600))] grid place-items-center">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">
                        Challenge {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-1 font-display font-semibold text-[hsl(var(--navy-900))]">
                        {p.title}
                      </div>
                      {p.desc && (
                        <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{p.desc}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry 4.0 Solution */}
              <div className="rounded-3xl bg-[hsl(var(--navy-900))] text-white p-7 md:p-9">
                <SectionHead
                  eyebrow="Industry 4.0 Solution"
                  title="How the solution was deployed"
                  intro={cs.approach}
                  invert
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {x.solutionGroups.map((g, i) => {
                    const icons = [Workflow, Cpu, Rocket, Layers, Gauge, Wrench, Sparkles];
                    const Icon = icons[i % icons.length];
                    return (
                      <div
                        key={g.title}
                        className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur"
                      >
                        <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="mt-3 font-display font-semibold">{g.title}</div>
                        <ul className="mt-2 space-y-1.5">
                          {g.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-start gap-2 text-sm text-white/85"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-white/70 shrink-0 mt-1" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Business Outcomes */}
              <div>
                <SectionHead
                  eyebrow="Business Outcomes"
                  title="Outcomes delivered"
                  intro="The measurable business impact of the Industry 4.0 programme."
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {x.businessOutcomes.map((o, i) => {
                    const icons = [TrendingUp, ShieldCheck, Briefcase, Sparkles, Gauge];
                    const Icon = icons[i % icons.length];
                    return (
                      <div
                        key={o.title}
                        className="rounded-2xl border border-[hsl(var(--india-green)/0.25)] bg-white p-5 hover:shadow-md transition-all"
                      >
                        <div className="h-9 w-9 rounded-xl bg-[hsl(var(--india-green)/0.10)] text-[hsl(var(--india-green))] grid place-items-center">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">
                          {o.title}
                        </div>
                        <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{o.impact}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Benefits at a Glance */}
              <div>
                <SectionHead
                  eyebrow="Key Benefits at a Glance"
                  title="Benefits across the value chain"
                />
                <div className="mt-6 overflow-hidden rounded-2xl border border-[hsl(var(--neutral-150))] bg-white">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[hsl(var(--neutral-50))] text-left">
                        <th className="px-5 py-3 font-display font-semibold text-[hsl(var(--navy-900))]">
                          Benefit Area
                        </th>
                        <th className="px-5 py-3 font-display font-semibold text-[hsl(var(--navy-900))]">
                          Impact
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {x.benefitsTable.map((b, i) => (
                        <tr
                          key={b.area}
                          className={i % 2 === 0 ? "bg-white" : "bg-[hsl(var(--neutral-50))/0.5]"}
                          style={{ borderTop: "1px solid hsl(var(--neutral-150))" }}
                        >
                          <td className="px-5 py-3 font-semibold text-[hsl(var(--navy-900))]">
                            {b.area}
                          </td>
                          <td className="px-5 py-3 text-[hsl(var(--neutral-700))]">{b.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <SectionHead
                  eyebrow="Technology Stack"
                  title="Technologies used"
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {x.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border border-[hsl(var(--neutral-200))] bg-white text-[hsl(var(--navy-900))] hover:border-[hsl(var(--navy-600))] transition-colors"
                    >
                      <Cpu className="h-3.5 w-3.5 text-[hsl(var(--navy-600))]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Change Management Approach */}
              <div>
                <SectionHead
                  eyebrow="Change Management Approach"
                  title="How adoption was driven"
                  intro={x.changeManagement.challenge}
                />
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {x.changeManagement.actions.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2 rounded-xl border border-[hsl(var(--neutral-150))] bg-white p-4 text-sm text-[hsl(var(--navy-900))]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                {x.changeManagement.outcome && (
                  <div className="mt-4 rounded-xl bg-[hsl(var(--india-green)/0.06)] border border-[hsl(var(--india-green)/0.25)] p-4 text-sm text-[hsl(var(--navy-900))]">
                    <span className="font-semibold">Outcome: </span>
                    {x.changeManagement.outcome}
                  </div>
                )}
              </div>

              {/* Related Solution Areas */}
              <div>
                <SectionHead
                  eyebrow="Related Solution Areas"
                  title="Explore related capabilities"
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {x.relatedSolutionAreas.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] border border-[hsl(var(--navy-100))]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default CaseStudyDetail;
