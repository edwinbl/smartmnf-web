import Link from "next/link";
import { useParams, redirect } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  ClipboardCheck,
  Send,
  MessageCircle,
  Quote,
  Workflow,
  Target,
  Rocket,
  BarChart3,
  Layers,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";

import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import {
  findCategory,
  featuredSolutionCases,
  expertInsights,
  outcomeLabel,
} from "@/data/solutions";
import {
  ResourcesBand,
  ProgrammesBand,
} from "./SolutionsIndex";

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? findCategory(slug) : undefined;

  if (!category) return <Navigate to="/solutions" replace />;

  const Icon = category.icon;
  const relatedCases = featuredSolutionCases.slice(0, 3);

  const stages = [
    { icon: ClipboardCheck, title: "Assess", desc: "Baseline current state" },
    { icon: Target, title: "Prioritize", desc: "Sequence highest-value moves" },
    { icon: Workflow, title: "Implement", desc: "Deploy in focused phases" },
    { icon: BarChart3, title: "Measure", desc: "Track outcome KPIs" },
    { icon: Rocket, title: "Scale", desc: "Replicate across operations" },
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title={`${category.name} â Solutions`}
        description={category.summary}
      />
      <WireHeader />
      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden bg-background border-b"
          style={{ borderColor: "hsl(var(--neutral-150))" }}
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(900px 400px at 90% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(700px 400px at 0% 100%, hsl(var(--navy-600) / 0.10), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="container-cii py-10 lg:py-16">
            <nav className="flex items-center gap-1.5 text-xs text-[hsl(var(--neutral-500))] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[hsl(var(--red-600))]">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/solutions" className="hover:text-[hsl(var(--red-600))]">Solutions</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[hsl(var(--neutral-700))]">{category.name}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-2xl grid place-items-center"
                    style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="cii-chip">Solution Area</span>
                </div>
                <h1 className="font-display mt-5 text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
                  {category.name}
                </h1>
                <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed max-w-3xl">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.outcomes.map((id) => (
                    <span
                      key={id}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }}
                    >
                      {outcomeLabel(id)}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/readiness-assessment" className="btn-primary group">
                    Take Assessment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/contact" className="btn-outline">Submit Enquiry</Link>
                  <Link href="/contact" className="btn-ghost">Talk to Expert</Link>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="cii-card p-6">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
                    At a Glance
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-numeric text-2xl font-extrabold text-[hsl(var(--navy-900))]">
                        {category.caseCount}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))] mt-1">
                        Case Studies
                      </div>
                    </div>
                    <div>
                      <div className="font-numeric text-2xl font-extrabold text-[hsl(var(--navy-900))]">
                        {category.resourceCount}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))] mt-1">
                        Resources
                      </div>
                    </div>
                    <div>
                      <div className="font-numeric text-2xl font-extrabold text-[hsl(var(--navy-900))]">
                        {category.outcomes.length}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))] mt-1">
                        Outcomes
                      </div>
                    </div>
                    <div>
                      <div className="font-numeric text-2xl font-extrabold text-[hsl(var(--navy-900))]">
                        {category.problems.length}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))] mt-1">
                        Problem Areas
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* PROBLEM AREAS SOLVED */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container-cii">
            <div className="max-w-3xl mb-10">
              <div className="section-eyebrow mb-3">Problem â Solution â Benefit</div>
              <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Problem Areas Solved
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {category.problems.map((p) => (
                <div key={p.problem} className="cii-card p-6">
                  <div className="grid grid-cols-3 gap-3 items-stretch">
                    <div className="rounded-lg p-4" style={{ background: "hsl(var(--red-100))" }}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">Problem</div>
                      <div className="mt-1.5 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug">{p.problem}</div>
                    </div>
                    <div className="rounded-lg p-4" style={{ background: "hsl(var(--navy-050))" }}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--navy-700))]">Solution</div>
                      <div className="mt-1.5 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug">{p.solution}</div>
                    </div>
                    <div className="rounded-lg p-4" style={{ background: "hsl(var(--india-green) / 0.10)" }}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">Benefit</div>
                      <div className="mt-1.5 text-sm font-bold text-[hsl(var(--india-green))] leading-snug font-numeric">{p.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS OUTCOMES */}
        <section className="py-16 lg:py-20 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="max-w-3xl mb-10">
              <div className="section-eyebrow mb-3">Business Outcomes Enabled</div>
              <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Measurable impact, not feature lists.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.outcomes.concat("export" as any, "energy" as any).slice(0, 4).map((id, i) => (
                <div key={`${id}-${i}`} className="cii-card p-6">
                  <div
                    className="h-11 w-11 rounded-xl grid place-items-center"
                    style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
                  >
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                    {outcomeLabel(id)}
                  </div>
                  <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                    Tangible improvements measured at the operating level.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION OVERVIEW */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container-cii">
            <div className="max-w-3xl mb-12">
              <div className="section-eyebrow mb-3">Implementation Overview</div>
              <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                A staged path from assessment to scale.
              </h2>
            </div>

            {/* Desktop horizontal */}
            <div className="hidden lg:block relative">
              <div
                className="absolute top-7 left-[10%] right-[10%] h-0.5"
                style={{
                  background:
                    "linear-gradient(to right, hsl(var(--navy-600)), hsl(var(--orange-500)), hsl(var(--red-600)))",
                }}
                aria-hidden
              />
              <div className="grid grid-cols-5 gap-4">
                {stages.map((s, i) => {
                  const SIcon = s.icon;
                  return (
                    <div key={s.title} className="relative flex flex-col items-center text-center">
                      <div
                        className="relative h-14 w-14 rounded-full grid place-items-center text-white shadow-lg z-10"
                        style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
                      >
                        <SIcon className="h-6 w-6" />
                        <span
                          className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full grid place-items-center text-[10px] font-bold text-white border-2 border-white"
                          style={{ background: "hsl(var(--red-600))" }}
                        >
                          {i + 1}
                        </span>
                      </div>
                      <div className="mt-5 font-display text-lg font-bold text-[hsl(var(--navy-900))]">
                        {s.title}
                      </div>
                      <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))]">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile vertical */}
            <div className="lg:hidden space-y-4">
              {stages.map((s, i) => {
                const SIcon = s.icon;
                return (
                  <div key={s.title} className="relative flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="h-12 w-12 rounded-full grid place-items-center text-white shadow-md flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
                      >
                        <SIcon className="h-5 w-5" />
                      </div>
                      {i < stages.length - 1 && (
                        <div className="w-px flex-1 my-2" style={{ background: "hsl(var(--neutral-200))" }} />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="text-[10px] font-bold text-[hsl(var(--red-600))]">Stage {i + 1}</div>
                      <div className="mt-0.5 font-display text-lg font-bold text-[hsl(var(--navy-900))]">{s.title}</div>
                      <p className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RELATED CASE STUDIES */}
        <section className="py-16 lg:py-20 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="max-w-3xl mb-10">
              <div className="section-eyebrow mb-3">In Practice</div>
              <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Related Case Studies
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
              {relatedCases.map((c) => (
                <Link key={c.company} href="/case-studies" className="group cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                    <span>{c.sector}</span>
                    <span className="h-1 w-1 rounded-full bg-[hsl(var(--neutral-200))]" />
                    <span>{c.state}</span>
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-[hsl(var(--navy-900))]">{c.company}</div>
                  <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                    <span className="font-semibold text-[hsl(var(--navy-900))]">Challenge:</span> {c.challenge}
                  </p>
                  <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
                    <span className="font-semibold text-[hsl(var(--navy-900))]">Solution:</span> {c.category}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "hsl(var(--india-green) / 0.10)" }}>
                    <span className="text-xs font-bold text-[hsl(var(--india-green))] font-numeric">{c.metric}</span>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--red-600))]">
                    View Full Case Study <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERT ADVISORY NOTE */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container-cii">
            <div className="max-w-3xl mb-10">
              <div className="section-eyebrow mb-3">Advisory Note</div>
              <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Expert recommendations for this solution area.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {expertInsights.slice(0, 2).map((e) => (
                <div key={e.name} className="relative cii-card p-7">
                  <Quote className="h-8 w-8 text-[hsl(var(--orange-500))] opacity-30 absolute top-5 right-5" />
                  <div className="font-display text-lg font-bold text-[hsl(var(--navy-900))] leading-snug">"{e.headline}"</div>
                  <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{e.quote}</p>
                  <div className="mt-6 pt-5 border-t border-[hsl(var(--neutral-150))] flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-full grid place-items-center text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
                    >
                      {e.initials}
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-[hsl(var(--navy-900))]">{e.name}</div>
                      <div className="text-[hsl(var(--neutral-500))]">{e.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ResourcesBand />
        <ProgrammesBand />

        {/* FINAL CTA */}
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
              <div className="relative max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/70">Take Action</div>
                <h2 className="mt-3 font-display text-3xl md:text-[40px] font-extrabold leading-[1.05] tracking-tight">
                  Ready To Explore {category.name}?
                </h2>
                <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
                  Get a personalized pathway based on your current readiness and priorities.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/readiness-assessment"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white shadow-lg"
                    style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
                  >
                    <ClipboardCheck className="h-4 w-4" /> Take Readiness Assessment
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white border border-white/30 bg-white/10 hover:bg-white/15 backdrop-blur transition-colors">
                    <Sparkles className="h-4 w-4" /> Speak With Expert
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-semibold text-white/90 hover:text-white">
                    <Send className="h-4 w-4" /> Submit Enquiry
                  </Link>
                  <button className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-semibold text-white/90 hover:text-white">
                    <MessageCircle className="h-4 w-4" /> Open Assistant
                  </button>
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

export default SolutionDetail;
