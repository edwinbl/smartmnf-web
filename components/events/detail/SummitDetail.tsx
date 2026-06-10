import { EventStickyRegister } from "./EventStickyRegister";
import { EventAgendaTimeline } from "./EventAgendaTimeline";
import { EventSpeakersGrid } from "./EventSpeakersGrid";
import { EventSponsorsBand } from "./EventSponsorsBand";
import { EventFAQ } from "./EventFAQ";
import { MapPin } from "lucide-react";
import type { EventItem } from "@/data/events";

interface Props {
  event: EventItem;
  onRegister: () => void;
}

export const SummitDetail = ({ event, onRegister }: Props) => (
  <section className="py-12 md:py-16">
    <div className="container-cii grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-12">
        <div>
          <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">About the summit</h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed">{event.summary}</p>
        </div>

        {event.tracks && (
          <div>
            <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Tracks</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {event.tracks.map((t, i) => (
                <div key={t} className="cii-card p-4 flex items-center gap-3">
                  <span className="h-7 w-7 rounded-md bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] grid place-items-center font-numeric font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-semibold text-[hsl(var(--navy-900))]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {event.agenda && <EventAgendaTimeline agenda={event.agenda} />}
        {event.speakers.length > 0 && <EventSpeakersGrid speakers={event.speakers} />}
        {event.partners && <EventSponsorsBand partners={event.partners} />}

        {event.venue && (
          <div>
            <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Venue</h2>
            <div className="cii-card p-5 mt-4 flex gap-4 items-start">
              <span className="h-10 w-10 rounded-md bg-[hsl(var(--red-100))] text-[hsl(var(--red-700))] grid place-items-center shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display font-bold text-[hsl(var(--navy-900))]">{event.venue}</div>
                <div className="text-sm text-[hsl(var(--neutral-700))]">{event.location}</div>
                <div className="text-xs text-[hsl(var(--neutral-500))] mt-2">
                  Networking lounges, exhibit hall and partner pavilions onsite.
                </div>
              </div>
            </div>
          </div>
        )}

        {event.faqs && <EventFAQ faqs={event.faqs} />}
      </div>
      <div className="lg:col-span-4">
        <EventStickyRegister event={event} onRegister={onRegister} />
      </div>
    </div>
  </section>
);
