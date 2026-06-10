import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

export const EventsFinalCta = () => (
  <section className="relative overflow-hidden text-white">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(120deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--red-600)) 130%)",
      }}
      aria-hidden
    />
    <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
    <div className="container-cii relative py-20 md:py-28 text-center">
      <h2 className="font-display font-bold text-[30px] md:text-[44px] leading-tight tracking-tight max-w-3xl mx-auto">
        Be part of India's smart manufacturing ecosystem
      </h2>
      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
        Join industry leaders, experts, innovators and ecosystem partners driving Industry 4.0 transformation across India.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/events" className="btn-primary">
          Explore upcoming events <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/contact" className="btn-ghost">
          <Handshake className="h-4 w-4" /> Partner with us
        </Link>
      </div>
    </div>
  </section>
);
