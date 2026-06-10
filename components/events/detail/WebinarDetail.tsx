import { EventStickyRegister } from "./EventStickyRegister";
import type { EventItem } from "@/data/events";

interface Props {
  event: EventItem;
  onRegister: () => void;
}

export const WebinarDetail = ({ event, onRegister }: Props) => (
  <section className="py-12 md:py-16">
    <div className="container-cii grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10">
        <div>
          <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">About this webinar</h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed">{event.summary}</p>
        </div>

        {event.outcomes && (
          <div>
            <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">What you'll learn</h2>
            <ul className="mt-4 space-y-3">
              {event.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-[hsl(var(--navy-800))]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(180_60%_38%)] shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.speakers[0] && (
          <div className="cii-card p-5 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[hsl(180_60%_38%)] to-[hsl(180_60%_25%)] grid place-items-center text-base font-bold text-white shrink-0">
              {event.speakers[0].initials}
            </div>
            <div>
              <div className="font-display font-bold text-[hsl(var(--navy-900))]">{event.speakers[0].name}</div>
              <div className="text-sm text-[hsl(var(--neutral-700))]">{event.speakers[0].role} Â· {event.speakers[0].org}</div>
            </div>
          </div>
        )}
      </div>
      <div className="lg:col-span-4">
        <EventStickyRegister event={event} onRegister={onRegister} />
      </div>
    </div>
  </section>
);
