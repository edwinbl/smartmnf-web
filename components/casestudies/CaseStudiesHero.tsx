import { Sparkles, TrendingUp, Factory, Leaf, ShieldCheck, Quote, Award, BarChart3 } from "lucide-react";

interface Props {
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}

export const CaseStudiesHero = (_props: Props) => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b h-[calc(100svh-72px)] flex items-center"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="Case Studies hero"
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
            <Sparkles className="h-3.5 w-3.5" /> Real Manufacturer Stories
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Case Studies &amp;{" "}
            <span className="text-[hsl(var(--red-600))]">Proof in Practice</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Discover how manufacturers across sectors are improving productivity, quality,
            traceability, sustainability and competitiveness.
          </p>
        </div>

        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in">
          <CaseStudiesCollage />
        </div>
      </div>
    </section>
  );
};

const CaseStudiesCollage = () => {
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

      {/* Back card â manufacturer story */}
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
            <Factory className="h-3 w-3" /> Pune Â· Automotive
          </div>
          <div>
            <div className="text-[10px] opacity-80">Case Study Â· 2025</div>
            <div className="text-sm font-extrabold leading-snug">
              Connected Shop-floor Transformation
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-1.5">
            <Quote className="h-3 w-3 text-[hsl(var(--red-600))] mt-0.5 shrink-0" />
            <div className="text-[10px] leading-snug text-[hsl(var(--neutral-700))] italic">
              "OEE jumped from 58% to 80% in nine months."
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { l: "OEE", v: "+38%" },
              { l: "Scrap", v: "-22%" },
              { l: "MTTR", v: "-31%" },
            ].map((k) => (
              <div key={k.l} className="rounded-md bg-[hsl(var(--neutral-50))] p-2">
                <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
                  {k.l}
                </div>
                <div className="text-sm font-extrabold font-numeric text-[hsl(var(--navy-900))]">
                  {k.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Front card â before/after impact */}
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
              <Award className="h-3 w-3" /> Impact Story
            </div>
            <div className="mt-2 text-sm font-extrabold leading-snug max-w-[80%]">
              Chennai Auto Plant Â· Quality Turnaround
            </div>
          </div>
          <div className="h-9 w-9 rounded-lg bg-white/15 backdrop-blur grid place-items-center">
            <BarChart3 className="h-5 w-5" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
              Before vs After
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[hsl(var(--india-green))]">
              <TrendingUp className="h-3 w-3" /> +32% OEE
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { l: "First Pass Yield", b: 45, a: 88 },
              { l: "On-time Delivery", b: 62, a: 95 },
              { l: "Energy / Unit", b: 80, a: 58 },
            ].map((row) => (
              <div key={row.l}>
                <div className="flex items-center justify-between text-[9px] font-semibold text-[hsl(var(--neutral-600))]">
                  <span>{row.l}</span>
                  <span className="font-numeric text-[hsl(var(--navy-900))]">
                    {row.b}% â {row.a}%
                  </span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-[hsl(var(--neutral-100))] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${row.a}%`,
                      background:
                        "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge â sustainability win */}
      <div
        className="absolute bottom-2 left-2 cii-card px-3 py-2 flex items-center gap-2 -rotate-[3deg] bg-white"
        style={{ animation: "float 7.5s ease-in-out infinite 1s" }}
      >
        <div
          className="h-8 w-8 rounded-lg grid place-items-center text-white"
          style={{ background: "hsl(var(--india-green))" }}
        >
          <Leaf className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Ahmedabad Â· Pharma
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--india-green))] font-numeric">
            -22% Energy
          </div>
        </div>
      </div>

      {/* Floating chip â stories count */}
      <div
        className="absolute top-2 right-4 cii-card px-3 py-2 flex items-center gap-2 rotate-[4deg] bg-white"
        style={{ animation: "float 8s ease-in-out infinite 0.7s" }}
      >
        <ShieldCheck className="h-4 w-4 text-[hsl(var(--red-600))]" />
        <div className="text-[10px] font-bold text-[hsl(var(--navy-900))]">
          220+ Stories Â· 18 States
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
