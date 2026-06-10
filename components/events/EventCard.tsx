"use client";

import Link from "next/link";
import { MapPin, Clock, Users, ArrowRight, Wifi, Lock, GraduationCap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { accentBar, accentSoft, accentText } from "@/lib/eventsStorage";
import type { EventItem } from "@/data/events";

interface Props {
  event: EventItem;
  onRegister: (e: EventItem) => void;
  className?: string;
}

const TypeBadge = ({ event }: { event: EventItem }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold ${accentSoft[event.accent]}`}
  >
    {event.type}
  </span>
);

const SpeakerStack = ({ event, max = 3 }: { event: EventItem; max?: number }) => (
  <div className="flex items-center -space-x-1.5 sm:-space-x-2">
    {event.speakers.slice(0, max).map((s) => (
      <div
        key={s.name}
        title={`${s.name} Â· ${s.org}`}
        className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-gradient-to-br from-[hsl(var(--navy-700))] to-[hsl(var(--navy-600))] grid place-items-center text-[9px] sm:text-[10px] font-bold text-white"
      >
        {s.initials}
      </div>
    ))}
    {event.speakers.length > max && (
      <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-[hsl(var(--neutral-100))] grid place-items-center text-[9px] sm:text-[10px] font-bold text-[hsl(var(--navy-800))]">
        +{event.speakers.length - max}
      </div>
    )}
  </div>
);

// WEBINAR â compact, learning focus
const WebinarCard = ({ event, onRegister, className }: Props) => (
  <article className={cn("cii-card overflow-hidden flex flex-col", className)}>
    <div className={`h-1 ${accentBar[event.accent]}`} />
    <div className="p-3 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-3">
      <div className="flex items-center justify-between gap-1">
        <TypeBadge event={event} />
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[hsl(180_60%_30%)]">
          <Wifi className="h-3 w-3" /> Virtual
        </span>
      </div>
      <h3 className="font-display font-bold text-sm sm:text-lg leading-snug text-[hsl(var(--navy-900))]">
        <Link href={`/events/${event.slug}`} className="hover:text-[hsl(var(--red-600))] transition-colors">
          {event.title}
        </Link>
      </h3>
      <p className="text-xs sm:text-sm text-[hsl(var(--neutral-700))] line-clamp-2">{event.summary}</p>
      <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs text-[hsl(var(--neutral-500))]">
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{event.duration}</span>
        <span className="hidden sm:inline">{event.date}</span>
      </div>
      {event.speakers[0] && (
        <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
          <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-to-br from-[hsl(180_60%_38%)] to-[hsl(180_60%_28%)] grid place-items-center text-[9px] sm:text-[10px] font-bold text-white">
            {event.speakers[0].initials}
          </div>
          <div className="text-[11px] sm:text-xs min-w-0">
            <div className="font-semibold text-[hsl(var(--navy-800))] truncate">{event.speakers[0].name}</div>
            <div className="text-[hsl(var(--neutral-500))] truncate">{event.speakers[0].org}</div>
          </div>
        </div>
      )}
      <div className="mt-auto pt-2 sm:pt-3 flex items-center justify-between gap-2">
        <Link href={`/events/${event.slug}`} className="link-arrow text-[11px] sm:text-xs">Details <ArrowRight className="h-3 w-3" /></Link>
        <button onClick={() => onRegister(event)} className="btn-primary h-8 px-2.5 sm:h-9 sm:px-4 text-[11px] sm:text-xs">
          {event.registrationLabel}
        </button>
      </div>
    </div>
  </article>
);

// ROUNDTABLE â premium invite
const RoundtableCard = ({ event, onRegister, className }: Props) => (
  <article
    className={cn("cii-card overflow-hidden flex flex-col relative", className)}
    style={{
      borderColor: "hsl(45_70%_82%)",
      background:
        "linear-gradient(180deg, hsl(45_100%_98%) 0%, white 30%)",
    }}
  >
    <div className={`h-1 ${accentBar[event.accent]}`} />
    <div className="p-3 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-3">
      <div className="flex items-center justify-between gap-1">
        <TypeBadge event={event} />
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold bg-[hsl(38_90%_42%)] text-white">
          <Lock className="h-2.5 w-2.5" /> Invite Only
        </span>
      </div>
      <h3 className="font-display font-bold text-sm sm:text-lg leading-snug text-[hsl(var(--navy-900))]">
        <Link href={`/events/${event.slug}`} className="hover:text-[hsl(var(--red-600))] transition-colors">
          {event.title}
        </Link>
      </h3>
      <p className="text-xs sm:text-sm text-[hsl(var(--neutral-700))] line-clamp-2">{event.summary}</p>

      <div className="rounded-md border border-[hsl(45_70%_82%)] bg-white/60 backdrop-blur-sm px-2 sm:px-3 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(38_90%_38%)]">Limited Seats</div>
          <div className="text-xs sm:text-sm font-semibold text-[hsl(var(--navy-800))] truncate">{event.seats ?? "Curated participation"}</div>
        </div>
        <SpeakerStack event={event} />
      </div>

      <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs text-[hsl(var(--neutral-500))]">
        <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{event.location}</span>
        <span className="hidden sm:inline">{event.date}</span>
      </div>

      <div className="mt-auto pt-2 sm:pt-3 flex items-center justify-between gap-2">
        <Link href={`/events/${event.slug}`} className="link-arrow text-[11px] sm:text-xs">Details <ArrowRight className="h-3 w-3" /></Link>
        <button onClick={() => onRegister(event)} className="btn-outline h-8 px-2.5 sm:h-9 sm:px-4 text-[11px] sm:text-xs" style={{ borderColor: "hsl(38_90%_42%)", color: "hsl(38_90%_38%)" }}>
          {event.registrationLabel}
        </button>
      </div>
    </div>
  </article>
);

// SUMMIT / CONFERENCE â large immersive
const SummitCard = ({ event, onRegister, className }: Props) => (
  <article className={cn("cii-card overflow-hidden flex flex-col lg:col-span-2", className)}>
    <div className={`relative h-32 sm:h-40 md:h-48 overflow-hidden`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--red-600)) 130%)",
        }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-between text-white">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {event.flagship && (
            <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-[hsl(var(--red-600))] text-[9px] sm:text-[10px] uppercase tracking-[0.12em] font-bold">
              <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5" /> Flagship
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-bold">
            {event.type}
          </span>
        </div>
        <div>
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/70">{event.date}</div>
          <h3 className="font-display font-bold text-base sm:text-xl md:text-2xl mt-0.5 sm:mt-1 leading-tight">
            <Link href={`/events/${event.slug}`} className="hover:text-white/90">
              {event.title}
            </Link>
          </h3>
        </div>
      </div>
    </div>
    <div className="p-3 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-3">
      <p className="text-xs sm:text-sm text-[hsl(var(--neutral-700))] line-clamp-2">{event.summary}</p>
      <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs text-[hsl(var(--neutral-500))]">
        <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{event.location}</span>
        <span className="hidden sm:inline">{event.duration}</span>
        <span className="hidden sm:inline">{event.mode}</span>
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-3 mt-0.5 sm:mt-1">
        <SpeakerStack event={event} max={4} />
        {event.partners && (
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--neutral-500))] font-bold text-right max-w-[60%]">
            Partners Â· {event.partners.slice(0, 3).join(" Â· ")}
          </div>
        )}
      </div>
      <div className="mt-auto pt-2 sm:pt-3 flex items-center justify-between gap-2">
        <Link href={`/events/${event.slug}`} className="link-arrow text-[11px] sm:text-xs">View agenda <ArrowRight className="h-3 w-3" /></Link>
        <button onClick={() => onRegister(event)} className="btn-primary h-8 px-2.5 sm:h-9 sm:px-4 text-[11px] sm:text-xs">
          {event.registrationLabel}
        </button>
      </div>
    </div>
  </article>
);

// SEMINAR / PROGRAMME â structured learning
const ProgrammeCard = ({ event, onRegister, className }: Props) => (
  <article className={cn("cii-card overflow-hidden flex flex-col", className)}>
    <div className={`h-1 ${accentBar[event.accent]}`} />
    <div className="p-3 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-3">
      <div className="flex items-center justify-between gap-1">
        <TypeBadge event={event} />
        <span className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-bold ${accentText[event.accent]}`}>
          <GraduationCap className="h-3 w-3" /> {event.level}
        </span>
      </div>
      <h3 className="font-display font-bold text-sm sm:text-lg leading-snug text-[hsl(var(--navy-900))]">
        <Link href={`/events/${event.slug}`} className="hover:text-[hsl(var(--red-600))] transition-colors">
          {event.title}
        </Link>
      </h3>
      <p className="text-xs sm:text-sm text-[hsl(var(--neutral-700))] line-clamp-2">{event.summary}</p>

      {event.outcomes && (
        <ul className="hidden sm:flex flex-col gap-1 mt-0.5">
          {event.outcomes.slice(0, 3).map((o) => (
            <li key={o} className="text-xs text-[hsl(var(--navy-800))] flex gap-2">
              <span className={`mt-1.5 h-1 w-1 rounded-full shrink-0 ${accentBar[event.accent]}`} />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs text-[hsl(var(--neutral-500))]">
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{event.duration}</span>
        <span className="hidden sm:inline-flex items-center gap-1"><Users className="h-3 w-3" />{event.segment}</span>
        <span>{event.date}</span>
      </div>

      <div className="mt-auto pt-2 sm:pt-3 flex items-center justify-between gap-2">
        <Link href={`/events/${event.slug}`} className="link-arrow text-[11px] sm:text-xs">Curriculum <ArrowRight className="h-3 w-3" /></Link>
        <button onClick={() => onRegister(event)} className="btn-primary h-8 px-2.5 sm:h-9 sm:px-4 text-[11px] sm:text-xs">
          {event.registrationLabel}
        </button>
      </div>
    </div>
  </article>
);

export const EventCard = ({ event, onRegister, className }: Props) => {
  switch (event.type) {
    case "Workshop":
      return <WebinarCard event={event} onRegister={onRegister} className={className} />;
    case "Roundtable":
      return <RoundtableCard event={event} onRegister={onRegister} className={className} />;
    case "Summit":
      return <SummitCard event={event} onRegister={onRegister} className={className} />;
    case "Seminar":
    case "Programme":
    default:
      return <ProgrammeCard event={event} onRegister={onRegister} className={className} />;
  }
};
