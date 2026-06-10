"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { events, type EventItem } from "@/data/events";
import type { MockUser } from "@/lib/mockAuth";
import { accentSoft } from "@/lib/eventsStorage";

interface Props {
  user: MockUser;
  onRegister: (e: EventItem) => void;
}

export const PersonalizedEventsShelf = ({ user, onRegister }: Props) => {
  // Pick 4 simple recommendations â mix of segments
  const recs = events
    .filter((e) => e.status !== "completed")
    .slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-cii">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--red-600))]">
              <Sparkles className="h-3.5 w-3.5" /> Recommended for you
            </div>
            <h2 className="font-display font-bold text-[24px] md:text-[28px] text-[hsl(var(--navy-900))] tracking-tight mt-1">
              Personalized event picks{user?.name ? `, ${user.name.split(" ")[0]}` : ""}
            </h2>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory scrollbar-none">
          {recs.map((e) => (
            <article
              key={e.slug}
              className="cii-card p-4 min-w-[280px] max-w-[300px] snap-start flex flex-col gap-2"
            >
              <span className={`inline-flex w-fit items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold ${accentSoft[e.accent]}`}>
                {e.type}
              </span>
              <h3 className="font-display font-bold text-base leading-snug text-[hsl(var(--navy-900))]">
                <Link href={`/events/${e.slug}`} className="hover:text-[hsl(var(--red-600))]">
                  {e.title}
                </Link>
              </h3>
              <p className="text-xs text-[hsl(var(--neutral-700))] line-clamp-2">{e.tagline}</p>
              <div className="text-[11px] text-[hsl(var(--neutral-500))] mt-auto">{e.date} Â· {e.location}</div>
              <button onClick={() => onRegister(e)} className="btn-outline h-8 text-xs mt-2">
                {e.registrationLabel} <ArrowRight className="h-3 w-3" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
