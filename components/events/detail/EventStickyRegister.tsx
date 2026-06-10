"use client";

import { CalendarPlus, Share2, Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { eventsStorage } from "@/lib/eventsStorage";
import { toast } from "@/hooks/use-toast";
import type { EventItem } from "@/data/events";

interface Props {
  event: EventItem;
  onRegister: () => void;
}

export const EventStickyRegister = ({ event, onRegister }: Props) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(eventsStorage.isSaved(event.slug));
    return eventsStorage.subscribe(() => setSaved(eventsStorage.isSaved(event.slug)));
  }, [event.slug]);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: event.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        toast({ title: "Link copied", description: "Event URL copied to clipboard." });
      }
    } catch { /* noop */ }
  };

  const addToCalendar = () => {
    const dt = (s: string) => s.replace(/[-:]/g, "").replace(/\.\d+/, "");
    const dtStart = dt(new Date(event.isoDate).toISOString());
    const dtEnd = dt(new Date(event.endDate ?? new Date(new Date(event.isoDate).getTime() + 3600000).toISOString()).toISOString());
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:${event.slug}@smartmfgindia\nDTSTAMP:${dtStart}\nDTSTART:${dtStart}\nDTEND:${dtEnd}\nSUMMARY:${event.title}\nLOCATION:${event.location}\nDESCRIPTION:${event.summary}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${event.slug}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <aside className="cii-card p-5 lg:sticky lg:top-[88px] space-y-3">
      <div>
        <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--red-600))]">
          {event.status === "invite" ? "Invitation" : event.status === "completed" ? "Archive Access" : "Registration"}
        </div>
        <div className="font-display font-bold text-lg text-[hsl(var(--navy-900))] mt-1">
          {event.price ?? (event.status === "invite" ? "By invitation" : event.status === "completed" ? "On demand" : "Open")}
        </div>
        {event.seats && <div className="text-xs text-[hsl(var(--neutral-500))]">{event.seats}</div>}
      </div>
      <button onClick={onRegister} className="btn-primary w-full">
        {event.registrationLabel}
      </button>
      <div className="grid grid-cols-3 gap-1.5">
        <button
          onClick={addToCalendar}
          className="inline-flex items-center justify-center gap-1 h-10 px-1 rounded-sm border border-[hsl(var(--neutral-200))] text-[11px] sm:text-xs font-semibold text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))]"
        >
          <CalendarPlus className="h-4 w-4 shrink-0" /> <span className="truncate">Calendar</span>
        </button>
        <button
          onClick={() => {
            const next = eventsStorage.toggleSaved(event.slug);
            toast({ title: next ? "Saved" : "Removed", description: event.title });
          }}
          className="inline-flex items-center justify-center gap-1 h-10 px-1 rounded-sm border border-[hsl(var(--neutral-200))] text-[11px] sm:text-xs font-semibold text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))]"
        >
          {saved ? <BookmarkCheck className="h-4 w-4 shrink-0" /> : <Bookmark className="h-4 w-4 shrink-0" />}
          <span className="truncate">{saved ? "Saved" : "Save"}</span>
        </button>
        <button
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-1 h-10 px-1 rounded-sm border border-[hsl(var(--neutral-200))] text-[11px] sm:text-xs font-semibold text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))]"
        >
          <Share2 className="h-4 w-4 shrink-0" /> <span className="truncate">Share</span>
        </button>
      </div>

      <div className="pt-3 border-t border-[hsl(var(--neutral-150))] space-y-2 text-xs">
        {event.highlights.map((h) => (
          <div key={h.label} className="flex items-center justify-between">
            <span className="text-[hsl(var(--neutral-500))] uppercase tracking-[0.12em] font-bold text-[10px]">{h.label}</span>
            <span className="font-semibold text-[hsl(var(--navy-900))]">{h.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};
