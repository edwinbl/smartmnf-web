import { Quote } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
}

export const ProgrammeTestimonials = ({ programme }: Props) => {
  if (!programme.testimonials?.length) return null;

  return (
    <section>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
        What participants said
      </h2>
      <div className="mt-5 grid md:grid-cols-2 gap-4">
        {programme.testimonials.map((t, i) => (
          <figure key={i} className="cii-card p-5 flex flex-col gap-3">
            <Quote className="h-5 w-5 text-[hsl(var(--orange-600))]" />
            <blockquote className="text-sm text-[hsl(var(--navy-800))] leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-2 border-t border-[hsl(var(--neutral-150))]">
              <div className="h-10 w-10 rounded-full bg-[hsl(var(--navy-100))] text-[hsl(var(--navy-700))] grid place-items-center text-sm font-bold">
                {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="text-xs">
                <div className="font-semibold text-[hsl(var(--navy-900))]">{t.name}</div>
                <div className="text-[hsl(var(--neutral-500))]">{t.role} Â· {t.org}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
