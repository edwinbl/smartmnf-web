import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export const ProgrammesFinalCta = () => (
  <section className="relative overflow-hidden text-white">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(120deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--orange-500)) 140%)",
      }}
      aria-hidden
    />
    <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
    <div className="container-cii relative py-20 md:py-28 text-center">
      <h2 className="font-display font-bold text-[30px] md:text-[44px] leading-tight tracking-tight max-w-3xl mx-auto">
        Build the capabilities for Industry 4.0 transformation
      </h2>
      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
        Join expert-led programmes designed to accelerate manufacturing innovation and operational excellence.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href="#programmes-grid" className="btn-primary">
          Explore Programmes <ArrowRight className="h-4 w-4" />
        </a>
        <Link href="/contact" className="btn-ghost">
          <Compass className="h-4 w-4" /> Start Your Assessment
        </Link>
      </div>
    </div>
  </section>
);
