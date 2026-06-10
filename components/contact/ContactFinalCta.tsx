import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

export const ContactFinalCta = () => {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: "hsl(var(--navy-900))" }}>
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
      <div
        className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-500)/0.5), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--navy-500)/0.8), transparent 70%)" }}
        aria-hidden
      />
      <div className="container-cii relative py-20 lg:py-28 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Let's build India's digital manufacturing ecosystem{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--saffron)))" }}
          >
            together
          </span>
        </h2>
        <p className="mt-5 text-white/75 max-w-xl mx-auto text-base sm:text-lg">
          Whether you're starting your Industry 4.0 journey or scaling it nationally â we'd love to walk with you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://www.smartmfgindia.com/Assesment.aspx" target="_blank" rel="noopener noreferrer" className="btn-primary group">
            Start Assessment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link href="/register" className="btn-ghost">
            <Handshake className="h-4 w-4" />
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
};
