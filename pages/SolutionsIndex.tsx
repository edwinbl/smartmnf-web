"use client";

import Link from "next/link";
import {
  ArrowRight,
  Search,
  Sparkles,
  ChevronRight,
  Compass,
  Workflow,
  Quote,
  Download,
  FileText,
  GraduationCap,
  MessageCircle,
  ClipboardCheck,
  Send,
} from "lucide-react";
import { useMemo, useState } from "react";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import {
  outcomes,
  solutionCategories,
  featuredSolutionCases,
  expertInsights,
  solutionResources,
  solutionProgrammes,
  outcomeLabel,
  type OutcomeId,
} from "@/data/solutions";

const accentMap = {
  navy: { bg: "hsl(var(--navy-050))", fg: "hsl(var(--navy-700))", bar: "hsl(var(--navy-600))" },
  orange: { bg: "hsl(var(--orange-100))", fg: "hsl(var(--orange-600))", bar: "hsl(var(--orange-500))" },
  green: { bg: "hsl(var(--india-green) / 0.10)", fg: "hsl(var(--india-green))", bar: "hsl(var(--india-green))" },
  red: { bg: "hsl(var(--red-100))", fg: "hsl(var(--red-600))", bar: "hsl(var(--red-600))" },
} as const;

const SolutionsIndex = () => {
  const [query, setQuery] = useState("");
  const [activeOutcome, setActiveOutcome] = useState<OutcomeId | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return solutionCategories.filter((c) => {
      if (activeOutcome && !c.outcomes.includes(activeOutcome)) return false;
      if (q) {
        const hay = `${c.name} ${c.summary} ${c.outcomes.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, activeOutcome]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Solutions â CII Smart Manufacturing",
    description: "Find practical solution pathways for your manufacturing challenges.",
    url: "https://smartmfgindia-demo4.bluelup.in/solutions",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Solutions â Practical Pathways for Manufacturing Outcomes"
        description="Explore solution areas linked to the outcomes manufacturers care about â productivity, quality, traceability, energy, competitiveness."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        {/* HERO */}
        <SolutionsHero query={query} onQuery={setQuery} />

        {/* OUTCOME EXPLORER */}
        <section id="outcomes" className="py-16 lg:py-24 bg-background">
          <div className="container-cii">
            <div className="max-w-3xl mb-10">
              <div className="section-eyebrow mb-3">Outcome Explorer</div>
              <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
                What Are You Looking To Improve?
              </h2>
              <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
                Start with the business outcome â we'll map it to relevant solution areas
                and real case studies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {outcomes.map((o) => {
                const Icon = o.icon;
                const a = accentMap[o.accent];
                const active = activeOutcome === o.id;
                return (
                  <button
                    key={o.id}
                    onClick={() => {
                      const next = active ? null : o.id;
                      setActiveOutcome(next);
                      if (next) {
                        setTimeout(() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
                      }
                    }}
                    className={`group text-left cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all ${
                      active ? "ring-2 ring-[hsl(var(--red-600))]" : ""
                    }`}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                      style={{ background: a.bar }}
                      aria-hidden
                    />
                    <div
                      className="h-12 w-12 rounded-xl grid place-items-center transition-transform group-hover:scale-110"
                      style={{ background: a.bg, color: a.fg }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                      {o.title}
                    </div>
                    <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                      {o.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                      <span>{o.solutionCount} solutions</span>
                      <span>{o.caseCount} cases</span>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--red-600))] opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Solutions <ArrowRight className="h-3 w-3" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CATEGORIES GRID */}
        <section id="categories" className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <div className="section-eyebrow mb-3">Solution Categories</div>
                <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                  Browse Solution Areas
                </h2>
              </div>
              {activeOutcome && (
                <button
                  onClick={() => setActiveOutcome(null)}
                  className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--red-600))] hover:underline"
                >
                  Clear: {outcomeLabel(activeOutcome)} Ã
                </button>
              )}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((c) => {
                const Icon = c.icon;
                const a = accentMap[c.accent];
                return (
                  <Link key={c.slug}
                    href={`/solutions/${c.slug}`}
                    className="group relative cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden"
                    style={{ background: "linear-gradient(180deg, hsl(var(--neutral-50)), #ffffff 70%)" }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: a.bar }}
                      aria-hidden
                    />
                    <div
                      className="h-12 w-12 rounded-xl grid place-items-center shadow-sm"
                      style={{ background: a.bar, color: "white" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                      {c.name}
                    </div>
                    <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                      {c.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.outcomes.map((id) => (
                        <span
                          key={id}
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                          style={{ background: a.bg, color: a.fg }}
                        >
                          {outcomeLabel(id)}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                      <span>{c.caseCount} cases Â· {c.resourceCount} resources</span>
                      <ChevronRight className="h-3 w-3 text-[hsl(var(--red-600))] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED CASE STUDIES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container-cii">
            <div className="max-w-3xl mb-10">
              <div className="section-eyebrow mb-3">In Practice</div>
              <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
                How Manufacturers Are Applying These Solutions
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {featuredSolutionCases.map((c) => (
                <Link key={c.company}
                  href="/case-studies"
                  className="group cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 flex-wrap text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                    <span>{c.sector}</span>
                    <span className="h-1 w-1 rounded-full bg-[hsl(var(--neutral-200))]" />
                    <span>{c.state}</span>
                  </div>
                  <div className="mt-2 font-display text-xl font-bold text-[hsl(var(--navy-900))]">
                    {c.company}
                  </div>
                  <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                    <span className="font-semibold text-[hsl(var(--navy-900))]">Challenge:</span> {c.challenge}
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-lg p-3" style={{ background: "hsl(var(--navy-050))" }}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">Solution</div>
                      <div className="mt-1 text-xs font-bold text-[hsl(var(--navy-900))] leading-tight">{c.category}</div>
                    </div>
                    <div className="rounded-lg p-3" style={{ background: "hsl(var(--orange-100))" }}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">Outcome</div>
                      <div className="mt-1 text-xs font-bold text-[hsl(var(--orange-600))] leading-tight">{c.outcome}</div>
                    </div>
                    <div className="rounded-lg p-3" style={{ background: "hsl(var(--india-green) / 0.10)" }}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">Impact</div>
                      <div className="mt-1 text-xs font-bold text-[hsl(var(--india-green))] leading-tight font-numeric">{c.metric}</div>
                    </div>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--red-600))]">
                    View Full Case Study <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERT PERSPECTIVES */}
        <ExpertPerspectives />

        {/* RESOURCES */}
        <ResourcesBand />

        {/* PROGRAMMES */}
        <ProgrammesBand />

        {/* NEXT STEP */}
        <CommonFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

/* ---------- Hero ---------- */

const SolutionsHero = ({ query, onQuery }: { query: string; onQuery: (v: string) => void }) => {
  const focus = () => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <section
      className="relative overflow-hidden bg-background border-b h-[calc(100svh-72px)] flex items-center"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 500px at 85% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(900px 600px at 0% 100%, hsl(var(--navy-600) / 0.12), transparent 55%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--neutral-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neutral-200) / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden
      />

      <div className="container-cii relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-10">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="cii-chip">
            <Sparkles className="h-3.5 w-3.5" /> Solutions &amp; Pathways
          </span>

          <h1 className="font-display mt-5 text-[34px] sm:text-5xl lg:text-[52px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Find Practical{" "}
            <span className="text-[hsl(var(--red-600))]">Solution Pathways</span>{" "}
            for Your Manufacturing Challenges
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Explore solution areas linked to the outcomes manufacturers care about â
            productivity, quality, traceability, energy efficiency, competitiveness and
            operational excellence.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); focus(); }}
            className="mt-7 relative max-w-2xl"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--neutral-500))]" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search by outcome, problem or solution areaâ¦"
              className="w-full h-12 sm:h-14 pl-11 sm:pl-14 pr-24 sm:pr-32 rounded-full border bg-white text-sm text-[hsl(var(--neutral-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] shadow-sm"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
            >
              Search
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 relative animate-scale-in flex items-center justify-center">
          <SolutionsHeroViz />
        </div>
      </div>
    </section>
  );
};

const SolutionsHeroViz = () => {
  const size = 520;
  const c = size / 2;
  const rInner = 138;
  const rOuter = 226;

  const categories = [
    { Icon: Workflow, label: "Process" },
    { Icon: ClipboardCheck, label: "Quality" },
    { Icon: Compass, label: "Strategy" },
    { Icon: Send, label: "Logistics" },
    { Icon: Sparkles, label: "Automation" },
    { Icon: GraduationCap, label: "Skills" },
    { Icon: FileText, label: "Standards" },
    { Icon: MessageCircle, label: "Advisory" },
  ];

  const outcomesRing = [
    "Productivity",
    "Quality",
    "Energy",
    "Traceability",
    "Competitiveness",
    "Safety",
    "Sustainability",
  ];

  const polar = (cx: number, cy: number, r: number, deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <radialGradient id="solHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--red-600))" stopOpacity="0.35" />
            <stop offset="60%" stopColor="hsl(var(--orange-500))" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="solRingStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--red-600))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <circle cx={c} cy={c} r={140} fill="url(#solHubGlow)" />
        <circle cx={c} cy={c} r={rInner} fill="none" stroke="hsl(var(--neutral-200))" strokeWidth="1" />
        <circle
          cx={c} cy={c} r={rOuter}
          fill="none" stroke="url(#solRingStroke)" strokeWidth="1" strokeDasharray="3 6"
        >
          <animateTransform attributeName="transform" type="rotate"
            from={`0 ${c} ${c}`} to={`360 ${c} ${c}`} dur="80s" repeatCount="indefinite" />
        </circle>

        {categories.map((_, i) => {
          const p = polar(c, c, rInner, (360 / categories.length) * i);
          return (
            <line key={`s-${i}`} x1={c} y1={c} x2={p.x} y2={p.y}
              stroke="hsl(var(--neutral-200))" strokeWidth="1" />
          );
        })}

        {outcomesRing.map((_, i) => {
          const p = polar(c, c, rOuter, (360 / outcomesRing.length) * i + 25);
          const pIn = polar(c, c, rInner, (360 / outcomesRing.length) * i + 25);
          return (
            <line key={`e-${i}`}
              x1={pIn.x} y1={pIn.y} x2={p.x} y2={p.y}
              stroke="hsl(var(--red-600))" strokeOpacity="0.35"
              strokeWidth="1" strokeDasharray="4 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="2.4s" repeatCount="indefinite" />
            </line>
          );
        })}

        {categories.map((_, i) => {
          const p = polar(c, c, rInner, (360 / categories.length) * i);
          return (
            <circle key={`d-${i}`} r="2.4" fill="hsl(var(--red-600))">
              <animate attributeName="cx" values={`${c};${p.x}`} dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="cy" values={`${c};${p.y}`} dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </svg>

      {/* Center hub */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   h-[118px] w-[118px] rounded-full grid place-items-center text-center
                   border border-white text-white shadow-xl"
        style={{
          background: "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
          boxShadow: "0 10px 40px hsl(var(--red-600) / 0.35)",
        }}
      >
        <div>
          <div className="font-display text-[10px] font-bold tracking-[0.18em] text-white/80 uppercase">
            Solution
          </div>
          <div className="font-display text-[14px] font-extrabold leading-tight mt-0.5">
            Pathways<br/>Hub
          </div>
        </div>
      </div>

      {/* Inner ring: category nodes */}
      {categories.map(({ Icon, label }, i) => {
        const p = polar(c, c, rInner, (360 / categories.length) * i);
        const xPct = (p.x / size) * 100;
        const yPct = (p.y / size) * 100;
        return (
          <div key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${xPct}%`, top: `${yPct}%` }}>
            <div className="h-11 w-11 rounded-full grid place-items-center border bg-white shadow-md
                            transition-all duration-300 group-hover:scale-110"
              style={{ borderColor: "hsl(var(--neutral-200))" }}>
              <Icon className="h-4 w-4 text-[hsl(var(--red-600))]" strokeWidth={2} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap
                            text-[9.5px] font-semibold tracking-wide uppercase text-[hsl(var(--navy-700))]
                            opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </div>
          </div>
        );
      })}

      {/* Outer ring: outcome chips */}
      {outcomesRing.map((label, i) => {
        const p = polar(c, c, rOuter, (360 / outcomesRing.length) * i + 25);
        const xPct = (p.x / size) * 100;
        const yPct = (p.y / size) * 100;
        return (
          <div key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${xPct}%`, top: `${yPct}%` }}>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border bg-white shadow-sm"
              style={{ borderColor: "hsl(var(--orange-500) / 0.4)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--orange-500))]" />
              <span className="font-display text-[10.5px] font-semibold tracking-wide whitespace-nowrap text-[hsl(var(--navy-800))]">
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ---------- Shared bands ---------- */

export const ExpertPerspectives = () => (
  <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
    <div className="container-cii">
      <div className="max-w-3xl mb-10">
        <div className="section-eyebrow mb-3">Expert Perspectives</div>
        <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
          Advisory guidance from manufacturing leaders.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {expertInsights.map((e, i) => {
          const palettes = [
            { bg: "hsl(var(--navy-050))", bar: "hsl(var(--navy-600))", grad: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" },
            { bg: "hsl(var(--orange-100))", bar: "hsl(var(--orange-500))", grad: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" },
            { bg: "hsl(var(--india-green) / 0.10)", bar: "hsl(var(--india-green))", grad: "linear-gradient(135deg, hsl(var(--india-green)), hsl(var(--navy-700)))" },
          ];
          const pal = palettes[i % palettes.length];
          return (
            <div key={e.name} className="relative cii-card p-7 overflow-hidden"
              style={{ background: "linear-gradient(180deg, hsl(var(--neutral-50)), #ffffff 70%)" }}>
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: pal.bar }} />
              <Quote className="h-8 w-8 opacity-40 absolute top-5 right-5" style={{ color: pal.bar }} />
              <div className="font-display text-lg font-bold text-[hsl(var(--navy-900))] leading-snug">
                "{e.headline}"
              </div>
              <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                {e.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-[hsl(var(--neutral-150))] flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center text-xs font-bold text-white shadow-sm"
                  style={{ background: pal.grad }}
                >
                  {e.initials}
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[hsl(var(--navy-900))]">{e.name}</div>
                  <div className="text-[hsl(var(--neutral-500))]">{e.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const ResourcesBand = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container-cii">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <div className="section-eyebrow mb-3">Knowledge Resources</div>
          <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            Related Resources &amp; Downloads
          </h2>
        </div>
        <Link href="/reports" className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--red-600))] hover:underline inline-flex items-center gap-1">
          Browse all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutionResources.map((r, i) => {
          const palettes = [
            { bg: "hsl(var(--navy-050))", fg: "hsl(var(--navy-700))", bar: "hsl(var(--navy-600))" },
            { bg: "hsl(var(--orange-100))", fg: "hsl(var(--orange-600))", bar: "hsl(var(--orange-500))" },
            { bg: "hsl(var(--india-green) / 0.10)", fg: "hsl(var(--india-green))", bar: "hsl(var(--india-green))" },
            { bg: "hsl(var(--red-100))", fg: "hsl(var(--red-600))", bar: "hsl(var(--red-600))" },
          ];
          const pal = palettes[i % palettes.length];
          return (
            <Link key={r.title} href={r.href} className="group cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all relative overflow-hidden"
              style={{ background: "linear-gradient(180deg, hsl(var(--neutral-50)), #ffffff 70%)" }}>
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: pal.bar }} />
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: pal.bar, color: "white" }}
                >
                  <FileText className="h-3 w-3" /> {r.type}
                </span>
                <Download className="h-4 w-4 text-[hsl(var(--neutral-500))] group-hover:text-[hsl(var(--red-600))] transition-colors" />
              </div>
              <div className="mt-4 font-display text-base font-bold text-[hsl(var(--navy-900))] leading-snug">
                {r.title}
              </div>
              <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                {r.desc}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export const ProgrammesBand = () => (
  <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
    <div className="container-cii">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <div className="section-eyebrow mb-3">Capability Building</div>
          <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            Related Programmes &amp; Training
          </h2>
        </div>
        <Link href="/programmes" className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--red-600))] hover:underline inline-flex items-center gap-1">
          Browse all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {solutionProgrammes.map((p, i) => {
          const palettes = [
            { bg: "hsl(var(--orange-100))", bar: "hsl(var(--orange-500))" },
            { bg: "hsl(var(--navy-050))", bar: "hsl(var(--navy-600))" },
            { bg: "hsl(var(--india-green) / 0.10)", bar: "hsl(var(--india-green))" },
            { bg: "hsl(var(--red-100))", bar: "hsl(var(--red-600))" },
          ];
          const pal = palettes[i % palettes.length];
          return (
            <div key={p.slug} className="cii-card p-6 relative overflow-hidden"
              style={{ background: "linear-gradient(180deg, hsl(var(--neutral-50)), #ffffff 70%)" }}>
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: pal.bar }} />
              <div
                className="h-11 w-11 rounded-xl grid place-items-center text-white shadow-sm"
                style={{ background: pal.bar }}
              >
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-bold text-[hsl(var(--navy-900))] leading-snug">
                {p.name}
              </div>
              <div className="mt-3 space-y-1.5 text-xs text-[hsl(var(--neutral-700))]">
                <div><span className="font-bold text-[hsl(var(--navy-900))]">Duration:</span> {p.duration}</div>
                <div><span className="font-bold text-[hsl(var(--navy-900))]">For:</span> {p.audience}</div>
                <div><span className="font-bold text-[hsl(var(--navy-900))]">Outcomes:</span> {p.outcomes}</div>
              </div>
              <Link href="/programmes" className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--red-600))] hover:underline">
                View Programme <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const NextStepCta = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container-cii">
      <div
        className="relative overflow-hidden rounded-3xl text-white p-10 md:p-14"
        style={{ background: "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))" }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
        <div
          className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, hsl(var(--orange-500) / 0.6), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/70">Next Step</div>
            <h2 className="mt-3 font-display text-3xl md:text-[40px] font-extrabold leading-[1.05] tracking-tight">
              Not Sure Where To Start?
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
              Understand your current readiness and discover the most relevant pathways
              for your organization.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/readiness-assessment"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
              >
                <ClipboardCheck className="h-4 w-4" /> Take Readiness Assessment
              </Link>
              <Link href="/programmes" className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white border border-white/30 bg-white/10 hover:bg-white/15 backdrop-blur transition-colors">
                <GraduationCap className="h-4 w-4" /> Explore Programmes
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-semibold text-white/90 hover:text-white">
                <Send className="h-4 w-4" /> Submit Enquiry
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6">
              <div className="flex items-center gap-3">
                <div
                  className="h-12 w-12 rounded-xl grid place-items-center text-white"
                  style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
                >
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-white/70">AI Assistant</div>
                  <div className="font-bold text-white">Ask the Smart Manufacturing Assistant</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                Get instant guidance on solution areas, outcomes and next steps â
                personalized to your context.
              </p>
              <button className="mt-5 w-full inline-flex items-center justify-center gap-2 h-11 rounded-md bg-white text-[hsl(var(--navy-900))] font-bold text-sm hover:bg-white/90 transition-colors">
                Open Assistant <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionsIndex;
