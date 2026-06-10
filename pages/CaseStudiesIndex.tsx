"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import {
  X,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Factory,
  MapPin,
  Building2,
  Filter,
  Gauge,
  ShieldCheck,
  Leaf,
  Network,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { CaseStudiesHero } from "@/components/casestudies/CaseStudiesHero";
import {
  caseStudies,
  sectors,
  states,
  companyTypes,
  valueProps,
  quickChips,
  type CaseStudy,
  type CompanyType,
  type ValueProp,
} from "@/data/caseStudies";

const outcomeTiles = [
  { vp: "Productivity Improvement" as ValueProp, icon: Gauge, label: "Improve Productivity", tone: "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]" },
  { vp: "Quality Improvement" as ValueProp, icon: ShieldCheck, label: "Improve Quality", tone: "bg-[hsl(var(--india-green)/0.08)] text-[hsl(var(--india-green))]" },
  { vp: "Energy Efficiency" as ValueProp, icon: Leaf, label: "Reduce Energy Usage", tone: "bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]" },
  { vp: "Traceability" as ValueProp, icon: Network, label: "Improve Traceability", tone: "bg-[hsl(var(--navy-100))] text-[hsl(var(--navy-700))]" },
];

const MetricPill = ({ value, direction }: { value: string; direction: "up" | "down" | "flat" }) => {
  const Icon = direction === "down" ? TrendingDown : TrendingUp;
  const color = direction === "down"
    ? "text-[hsl(var(--india-green))] bg-[hsl(var(--india-green)/0.08)]"
    : "text-[hsl(var(--navy-700))] bg-[hsl(var(--navy-050))]";
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold font-numeric ${color}`}>
      <Icon className="h-3.5 w-3.5" />
      {value}
    </span>
  );
};

const cardPalettes = [
  {
    header: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--navy-900)))",
    tint: "linear-gradient(180deg, hsl(var(--navy-050)), white 70%)",
    bar: "hsl(var(--navy-700))",
  },
  {
    header: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
    tint: "linear-gradient(180deg, hsl(var(--orange-100)), white 70%)",
    bar: "hsl(var(--orange-500))",
  },
  {
    header: "linear-gradient(135deg, hsl(var(--india-green)), hsl(var(--navy-700)))",
    tint: "linear-gradient(180deg, hsl(var(--india-green) / 0.10), white 70%)",
    bar: "hsl(var(--india-green))",
  },
  {
    header: "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--navy-800)))",
    tint: "linear-gradient(180deg, hsl(var(--red-600) / 0.08), white 70%)",
    bar: "hsl(var(--red-600))",
  },
];

const CaseCard = ({ c, index = 0 }: { c: CaseStudy; index?: number }) => {
  const pal = cardPalettes[index % cardPalettes.length];
  return (
    <Link href={`/case-studies/${c.slug}`}
      className="group flex flex-col rounded-2xl border border-[hsl(var(--neutral-150))] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden"
      style={{ background: pal.tint }}
    >
      <div className="h-1.5 w-full" style={{ background: pal.bar }} />
      <div className="relative h-44 overflow-hidden" style={{ background: pal.header }}>
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-semibold">
              <Factory className="h-3 w-3" /> {c.sector}
            </span>
            <MetricPill value={c.metric.value} direction={c.metric.direction} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-white/70">{c.company}</div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-white/80">
              <MapPin className="h-3 w-3" /> {c.state}
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <Building2 className="h-3 w-3" /> {c.companyType}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-[17px] leading-snug text-[hsl(var(--navy-900))] group-hover:text-[hsl(var(--red-600))] transition-colors">
          {c.headline}
        </h3>
        <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] line-clamp-2">{c.challenge}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {c.valueProps.slice(0, 3).map((v) => (
            <span key={v} className="cii-chip text-[11px] px-2 py-0.5">{v}</span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between text-sm">
          <span className="text-[hsl(var(--neutral-500))]">{c.durationMonths} mo Â· {c.companySize}</span>
          <span className="font-semibold inline-flex items-center gap-1 group-hover:text-[hsl(var(--red-600))]" style={{ color: pal.bar }}>
            View Case Study <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const CaseStudiesIndex = () => {
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState<ValueProp | null>(null);
  const [sector, setSector] = useState<string>("all");
  const [state, setState] = useState<string>("all");
  const [companyType, setCompanyType] = useState<CompanyType | "all">("all");
  const [vp, setVp] = useState<ValueProp | "all">("all");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return caseStudies.filter((c) => {
      if (sector !== "all" && c.sector !== sector) return false;
      if (state !== "all" && c.state !== state) return false;
      if (companyType !== "all" && c.companyType !== companyType) return false;
      if (vp !== "all" && !c.valueProps.includes(vp)) return false;
      if (chip && !c.valueProps.includes(chip)) return false;
      if (q) {
        const hay = `${c.company} ${c.headline} ${c.sector} ${c.state} ${c.valueProps.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, chip, sector, state, companyType, vp]);

  const featured = caseStudies.filter((c) => c.featured);

  const clearAll = () => {
    setQuery(""); setChip(null); setSector("all"); setState("all"); setCompanyType("all"); setVp("all");
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Manufacturing Case Studies | CII Smart Manufacturing"
        description="Explore real manufacturing transformation stories from MSMEs and enterprises across India â productivity, quality, traceability, sustainability and exports."
        url="/case-studies"
      />
      <WireHeader />

      {/* HERO */}
      <CaseStudiesHero query={query} onQuery={setQuery} onTag={setQuery} />

      {/* FEATURED */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="section-eyebrow mb-2">Featured</div>
              <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Spotlight transformations
              </h2>
            </div>
            <a href="#all" className="hidden md:inline-flex link-arrow">Browse all <ArrowRight className="h-4 w-4" /></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME EXPLORER */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">Discover by Outcome</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
            Find stories based on the business outcome you care about
          </h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {outcomeTiles.map(({ vp: v, icon: Icon, label, tone }, i) => {
              const count = caseStudies.filter((c) => c.valueProps.includes(v)).length;
              const pal = cardPalettes[i % cardPalettes.length];
              return (
                <button
                  key={label}
                  onClick={() => { setVp(v); setChip(null); document.getElementById("all")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="group text-left rounded-2xl border border-[hsl(var(--neutral-150))] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden relative"
                  style={{ background: "linear-gradient(180deg, hsl(var(--neutral-50)), #ffffff 70%)" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: pal.bar }} />
                  <div className={`h-12 w-12 rounded-xl grid place-items-center ${tone}`}><Icon className="h-6 w-6" /></div>
                  <div className="mt-5 font-display font-bold text-lg text-[hsl(var(--navy-900))]">{label}</div>
                  <div className="mt-1 text-xs text-[hsl(var(--neutral-500))]">{count} case stud{count === 1 ? "y" : "ies"}</div>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-[hsl(var(--red-600))]" style={{ color: pal.bar }}>
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SMART FILTERS + GRID */}
      <section id="all" className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">All Case Studies</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            Browse by sector, state or value proposition
          </h2>

          {/* Mobile filter trigger */}
          <div className="mt-6 md:hidden flex items-center justify-between">
            <button onClick={() => setDrawerOpen(true)} className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] text-sm font-semibold border border-[hsl(var(--navy-100))]">
              <Filter className="h-4 w-4" /> Filters
            </button>
            <span className="text-xs text-[hsl(var(--neutral-500))]">{filtered.length} results</span>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-[96px] space-y-6">
                <FilterGroup title="Sector" value={sector} setValue={(v) => setSector(v)} options={sectors} />
                <FilterGroup title="State" value={state} setValue={setState} options={states} />
                <FilterGroup title="Company type" value={companyType} setValue={(v) => setCompanyType(v as CompanyType | "all")} options={companyTypes} />
                <FilterGroup title="Value proposition" value={vp} setValue={(v) => setVp(v as ValueProp | "all")} options={valueProps} />
                <button onClick={clearAll} className="text-xs font-semibold text-[hsl(var(--red-600))] hover:underline">Clear all filters</button>
              </div>
            </aside>

            {/* Grid */}
            <div>
              <div className="hidden md:flex items-center justify-between mb-4">
                <span className="text-sm text-[hsl(var(--neutral-500))]">{filtered.length} case stud{filtered.length === 1 ? "y" : "ies"}</span>
              </div>
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[hsl(var(--neutral-200))] p-12 text-center">
                  <p className="text-sm text-[hsl(var(--neutral-700))]">No matching case studies. Try clearing filters.</p>
                  <button onClick={clearAll} className="mt-4 btn-primary">Clear filters</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filtered.map((c, i) => <CaseCard key={c.slug} c={c} index={i} />)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">Filters</span>
                <button onClick={() => setDrawerOpen(false)} aria-label="Close" className="h-9 w-9 grid place-items-center rounded-full hover:bg-[hsl(var(--neutral-100))]"><X className="h-4 w-4" /></button>
              </div>
              <div className="space-y-6">
                <FilterGroup title="Sector" value={sector} setValue={(v) => setSector(v)} options={sectors} />
                <FilterGroup title="State" value={state} setValue={setState} options={states} />
                <FilterGroup title="Company type" value={companyType} setValue={(v) => setCompanyType(v as CompanyType | "all")} options={companyTypes} />
                <FilterGroup title="Value proposition" value={vp} setValue={(v) => setVp(v as ValueProp | "all")} options={valueProps} />
              </div>
              <div className="mt-8 flex gap-3">
                <button onClick={clearAll} className="flex-1 btn-outline h-11">Clear</button>
                <button onClick={() => setDrawerOpen(false)} className="flex-1 btn-secondary h-11">Apply</button>
              </div>
            </div>
          </div>
        )}
      </section>

      <CommonFinalCta />
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

const FilterGroup = ({
  title, value, setValue, options,
}: { title: string; value: string; setValue: (v: string) => void; options: readonly string[] }) => (
  <div>
    <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))] mb-2">{title}</div>
    <div className="space-y-1">
      <FilterRadio label="All" active={value === "all"} onClick={() => setValue("all")} />
      {options.map((o) => (
        <FilterRadio key={o} label={o} active={value === o} onClick={() => setValue(o)} />
      ))}
    </div>
  </div>
);

const FilterRadio = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
      active
        ? "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] font-semibold"
        : "text-[hsl(var(--neutral-700))] hover:bg-[hsl(var(--neutral-50))]"
    }`}
  >
    {label}
  </button>
);

export default CaseStudiesIndex;
