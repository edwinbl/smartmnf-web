import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { collections } from "@/data/reports";

export const FeaturedCollections = () => {
  return (
    <section id="collections" className="py-14 md:py-20 bg-[hsl(var(--neutral-50))] border-y" style={{ borderColor: "hsl(var(--neutral-150))" }}>
      <div className="container-cii">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="section-eyebrow mb-2">Curated Collections</div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
              Hand-picked report packs to guide your journey
            </h2>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 snap-x pb-2 scrollbar-none">
          {collections.map((c) => (
            <article
              key={c.id}
              className="snap-start shrink-0 w-[280px] md:w-[320px] cii-card overflow-hidden group cursor-pointer"
            >
              <div className={`relative h-40 bg-gradient-to-br ${c.gradient} text-white p-5 flex flex-col justify-between`}>
                <BookOpen className="h-6 w-6 opacity-80" />
                <div className="text-[10px] uppercase tracking-[0.14em] font-bold opacity-80">
                  {c.reportCount} reports
                </div>
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug group-hover:text-[hsl(var(--red-600))] transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed">{c.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
                  Explore collection
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
