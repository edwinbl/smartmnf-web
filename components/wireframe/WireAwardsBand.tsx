import { ArrowRight, Download } from "lucide-react";

const categories = [
  { name: "Discrete Manufacturing", meta: "08 sub-sectors" },
  { name: "Process Manufacturing", meta: "06 sub-sectors" },
  { name: "Continuous Process", meta: "04 sub-sectors" },
  { name: "MSME Special Recognition", meta: "02 categories" },
];

const timeline = [
  { date: "APR 26 Â· NOW", label: "Applications Open", state: "active" },
  { date: "JUN 30", label: "Submissions Close", state: "upcoming" },
  { date: "AUGâSEP", label: "Jury Evaluation & Site Visits", state: "upcoming" },
  { date: "NOV 14", label: "National Awards Ceremony", state: "upcoming" },
];

export const WireAwardsBand = () => {
  return (
    <section
      id="awards"
      className="py-12 md:py-16 bg-[hsl(var(--neutral-50))]"
      style={{
        background:
          "linear-gradient(120deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-800)) 55%, hsl(var(--navy-700)) 100%)",
      }}
      aria-label="CII National Best Practices Award"
    >
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-800)) 55%, hsl(var(--navy-700)) 100%)",
        }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div
          className="absolute -top-32 -left-32 w-[420px] h-[420px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(var(--red-600) / 0.25), hsl(var(--red-600) / 0) 60%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[480px] h-[480px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(var(--orange-500) / 0.22), hsl(var(--orange-500) / 0) 60%)",
          }}
        />

        <div className="container-cii relative py-12 md:py-16 lg:py-20 text-white">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-start">
            {/* Left: title + CTAs */}
            <div>
              <div
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full mb-10 border"
                style={{
                  background: "hsl(var(--red-600) / 0.18)",
                  borderColor: "hsl(var(--red-600) / 0.5)",
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cii-red opacity-90 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cii-red shadow-[0_0_10px_hsl(var(--red-600))] animate-pulse" />
                </span>
                <span className="text-[12px] uppercase tracking-[0.18em] font-bold text-white">FY26 Cycle Open</span>
              </div>

              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight">
                CII National Best Practices Award
              </h2>
              <div className="mt-4 font-display font-light text-2xl md:text-3xl lg:text-[34px] leading-tight text-cii-orange">
                on Future Ready Manufacturing
              </div>

              <p className="mt-7 text-base md:text-[17px] leading-relaxed text-white/70 max-w-xl">
                Recognising and measuring the outcomes achieved by Indian industry in adopting future-ready technologies
                in their manufacturing processes â across discrete, process, and continuous-process sectors.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#" className="btn-primary">
                  Apply for FY26 <ArrowRight className="!h-4 !w-4" />
                </a>
                <a href="#" className="btn-ghost">
                  <Download className="!h-4 !w-4" /> Download Brochure (PDF)
                </a>
              </div>
            </div>

            {/* Right: categories card */}
            <div
              className="rounded-xl border p-7 md:p-9 backdrop-blur-2xl shadow-2xl"
              style={{
                background: "linear-gradient(180deg, hsl(var(--navy-700) / 0.55) 0%, hsl(var(--navy-800) / 0.45) 100%)",
                borderColor: "hsl(var(--navy-500) / 0.5)",
              }}
            >
              <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-cii-orange mb-6">
                Award Categories
              </div>
              <ul className="divide-y divide-white/10">
                {categories.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between py-4">
                    <span className="font-display font-semibold text-[15px] md:text-base">{c.name}</span>
                    <span className="text-[11px] md:text-xs text-white/75 font-numeric">{c.meta}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-7 rounded-md border px-5 py-4 text-sm md:text-[15px]"
                style={{
                  background: "hsl(var(--orange-500) / 0.08)",
                  borderColor: "hsl(var(--orange-500) / 0.35)",
                }}
              >
                <span className="font-bold text-white">20+</span>{" "}
                <span className="text-white/75">categories â every Indian manufacturer can find their fit.</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 pt-8 border-t border-white/15">
            <div className="text-[11px] uppercase tracking-[0.16em] font-bold text-cii-orange mb-6">
              FY26 Award Timeline
            </div>
            <div className="relative">
              {/* connector line */}
              <div className="hidden md:block absolute left-0 right-0 top-3 h-px bg-white/20" />
              <div
                className="hidden md:block absolute left-0 top-3 h-px"
                style={{
                  width: "16%",
                  background: "hsl(var(--red-600))",
                }}
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                {timeline.map((t, i) => (
                  <div key={t.label} className="relative">
                    <div className="flex items-center">
                      {t.state === "active" ? (
                        <span className="relative flex h-6 w-6">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-cii-red opacity-80 animate-ping" />
                          <span className="relative inline-flex h-6 w-6 rounded-full bg-cii-red border-2 border-cii-red shadow-[0_0_16px_hsl(var(--red-600))] animate-pulse" />
                        </span>
                      ) : (
                        <span
                          className="h-6 w-6 rounded-full border-2 border-white/40"
                          style={{ background: "hsl(var(--navy-900))" }}
                        />
                      )}
                    </div>
                    <div className="mt-4 text-[11px] uppercase tracking-[0.14em] font-semibold text-white/80">
                      {t.date}
                    </div>
                    <div className="mt-1.5 font-display font-medium text-sm md:text-base leading-tight text-white/85">
                      {t.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
