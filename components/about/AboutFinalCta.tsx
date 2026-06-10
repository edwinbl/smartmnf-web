import Link from "next/link";
import { ArrowRight, Gauge, GraduationCap, FileText } from "lucide-react";

export const AboutFinalCta = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div
          className="relative overflow-hidden rounded-3xl text-white p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)",
          }}
        >
          <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
          <div
            className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--orange-500) / 0.6), transparent 65%)",
            }}
            aria-hidden
          />

          <div className="relative max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/70">
              Start the Journey
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] font-extrabold leading-[1.05] tracking-tight">
              Start Your Smart Manufacturing Journey
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              Whether you're beginning with a readiness assessment or looking to build new
              capabilities, the platform provides practical pathways to progress.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/readiness-assessment"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
                }}
              >
                <Gauge className="h-4 w-4" />
                Take Readiness Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/programmes"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white border border-white/30 bg-white/10 hover:bg-white/15 backdrop-blur transition-colors"
              >
                <GraduationCap className="h-4 w-4" />
                Explore Programmes &amp; Training
              </Link>
              <Link href="/case-studies"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-semibold text-white/90 hover:text-white transition-colors"
              >
                <FileText className="h-4 w-4" />
                Browse Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
