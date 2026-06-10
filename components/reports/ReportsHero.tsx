"use client";

import { Search, BarChart3, TrendingUp, FileText, Sparkles, PieChart, Download, BookOpen } from "lucide-react";

interface Props {
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}


export const ReportsHero = ({ query = "", onQuery, onTag }: Props) => {
  const focusResults = () => {
    const el = document.getElementById("reports");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            <Sparkles className="h-3.5 w-3.5" /> Manufacturing Intelligence Hub
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Insights, Research &amp;{" "}
            <span className="text-[hsl(var(--red-600))]">Manufacturing Intelligence</span>
          </h1>


          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Explore reports, research and industry insights focused on smart manufacturing,
            operational readiness and business transformation.
          </p>

          {/* Smart search bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              focusResults();
            }}
            className="mt-7 relative max-w-2xl"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--neutral-500))]" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQuery?.(e.target.value)}
              placeholder="Search by sector, topic, business challenge or report titleâ¦"
              className="w-full h-14 pl-14 pr-32 rounded-full border bg-white text-sm text-[hsl(var(--neutral-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] shadow-sm transition-shadow"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
              aria-label="Search reports"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
              }}
            >
              Search
            </button>
          </form>


        </div>

        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in">
          <DashboardCollage />
        </div>
      </div>
    </section>
  );
};

const DashboardCollage = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* Soft halo */}
      <div
        className="absolute h-[360px] w-[360px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.22), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Back report cover */}
      <div
        className="absolute left-[8%] top-[10%] w-[58%] h-[78%] rounded-xl shadow-xl border border-[hsl(var(--neutral-150))] overflow-hidden -rotate-[8deg] bg-white"
        style={{ animation: "float 7s ease-in-out infinite" }}
      >
        <div
          className="h-[42%] w-full p-4 flex flex-col justify-between text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] opacity-90">
            <BookOpen className="h-3 w-3" /> Sector Report
          </div>
          <div>
            <div className="text-[10px] opacity-80">Vol. 04 Â· 2025</div>
            <div className="text-sm font-extrabold leading-snug">
              Smart Manufacturing Outlook
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <div className="h-2 w-full rounded-full bg-[hsl(var(--neutral-100))]" />
          <div className="h-2 w-[88%] rounded-full bg-[hsl(var(--neutral-100))]" />
          <div className="h-2 w-[72%] rounded-full bg-[hsl(var(--neutral-100))]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[60, 82, 45].map((v, i) => (
              <div key={i} className="rounded-md bg-[hsl(var(--neutral-50))] p-2">
                <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
                  KPI
                </div>
                <div className="text-sm font-extrabold font-numeric text-[hsl(var(--navy-900))]">
                  {v}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Front report cover with chart */}
      <div
        className="absolute right-[6%] top-[18%] w-[62%] h-[74%] rounded-xl shadow-2xl border border-[hsl(var(--neutral-150))] overflow-hidden rotate-[4deg] bg-white"
        style={{ animation: "float 6s ease-in-out infinite 0.4s" }}
      >
        <div
          className="h-[36%] w-full p-4 flex items-start justify-between text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
          }}
        >
          <div>
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] opacity-90">
              <FileText className="h-3 w-3" /> Research Brief
            </div>
            <div className="mt-2 text-sm font-extrabold leading-snug max-w-[80%]">
              Industry 4.0 Readiness Index 2025
            </div>
          </div>
          <div className="h-9 w-9 rounded-lg bg-white/15 backdrop-blur grid place-items-center">
            <PieChart className="h-5 w-5" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
              Readiness Trend
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[hsl(var(--india-green))]">
              <TrendingUp className="h-3 w-3" /> +12%
            </span>
          </div>
          <div className="mt-3 flex items-end gap-1.5 h-20">
            {[22, 34, 46, 58, 70, 84].map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${v}%`,
                  background:
                    i === 5
                      ? "linear-gradient(180deg, hsl(var(--orange-500)), hsl(var(--red-600)))"
                      : "hsl(var(--navy-600) / 0.85)",
                }}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-[hsl(var(--neutral-500))]">
            <span>2020</span><span>2025</span>
          </div>
        </div>
      </div>

      {/* Floating download badge */}
      <div
        className="absolute bottom-2 left-2 cii-card px-3 py-2 flex items-center gap-2 -rotate-[3deg] bg-white"
        style={{ animation: "float 7.5s ease-in-out infinite 1s" }}
      >
        <div
          className="h-8 w-8 rounded-lg grid place-items-center text-white"
          style={{
            background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <Download className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Downloads
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--navy-900))] font-numeric">
            48K+
          </div>
        </div>
      </div>

      {/* Floating insight chip */}
      <div
        className="absolute top-2 right-4 cii-card px-3 py-2 flex items-center gap-2 rotate-[4deg] bg-white"
        style={{ animation: "float 8s ease-in-out infinite 0.7s" }}
      >
        <BarChart3 className="h-4 w-4 text-[hsl(var(--red-600))]" />
        <div className="text-[10px] font-bold text-[hsl(var(--navy-900))]">
          80+ Reports Â· 25 Sectors
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--r, 0deg)); }
        }
      `}</style>
    </div>
  );
};

