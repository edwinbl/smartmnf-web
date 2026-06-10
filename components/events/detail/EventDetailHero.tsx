import Link from "next/link";
import { ChevronRight, MapPin, Calendar, Clock, Users } from "lucide-react";
import type { EventItem } from "@/data/events";
import { accentSoft } from "@/lib/eventsStorage";
import { CountdownTimer } from "../CountdownTimer";

interface Props {
  event: EventItem;
}

const statusLabel: Record<EventItem["status"], string> = {
  open: "Registrations Open",
  invite: "Invite Only",
  soon: "Coming Soon",
  live: "Live Now",
  completed: "Completed",
};

export const EventDetailHero = ({ event }: Props) => {
  return (
    <section className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(125deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--navy-600)) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
      <div className="container-cii relative py-10 md:py-14">
        <nav className="text-xs text-white/70 flex items-center gap-1.5 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/events" className="hover:text-white">Events</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/90">{event.type}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold ${accentSoft[event.accent]}`}>
                {event.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-white/10 backdrop-blur-sm border border-white/20">
                {statusLabel[event.status]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-white/10 backdrop-blur-sm border border-white/20">
                {event.mode}
              </span>
            </div>

            <h1 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[1.1] tracking-tight">
              {event.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl">{event.tagline}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80 pt-1">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-white/60" />{event.date}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-white/60" />{event.location}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-white/60" />{event.duration}</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-white/60" />{event.segment}</span>
            </div>
          </div>

          {event.status !== "completed" && (
            <div className="lg:col-span-4">
              <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/15 p-5">
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-white/70 mb-3">
                  Starts in
                </div>
                <CountdownTimer isoDate={event.isoDate} compact />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
