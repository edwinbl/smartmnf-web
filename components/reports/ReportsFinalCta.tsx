import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ReportsFinalCta = () => {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: "hsl(var(--navy-900))" }}>
      <div className="absolute inset-0 blueprint-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 300px at 20% 0%, hsl(var(--orange-500) / 0.18), transparent 60%), radial-gradient(900px 400px at 100% 100%, hsl(var(--red-600) / 0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container-cii relative py-16 md:py-24 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Discover the future of{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
          >
            smart manufacturing
          </span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl mx-auto">
          Access industry intelligence, transformation insights and ecosystem knowledge â all in one hub.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/reports" className="btn-primary group">
            Explore Reports
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a href="https://www.smartmfgindia.com/Assesment.aspx" className="btn-ghost">
            Start Your Assessment
          </a>
        </div>
      </div>
    </section>
  );
};
