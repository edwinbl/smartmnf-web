import { EventStickyRegister } from "./EventStickyRegister";
import { EventSpeakersGrid } from "./EventSpeakersGrid";
import type { EventItem } from "@/data/events";

interface Props {
  event: EventItem;
  onRegister: () => void;
}

export const ProgrammeDetail = ({ event, onRegister }: Props) => (
  <section className="py-12 md:py-16">
    <div className="container-cii grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10">
        <div>
          <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">About the programme</h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed">{event.summary}</p>
        </div>

        {event.outcomes && (
          <div>
            <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Learning outcomes</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {event.outcomes.map((o, i) => (
                <li key={o} className="cii-card p-4 flex gap-3">
                  <span className="h-7 w-7 rounded-md bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))] grid place-items-center font-numeric font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[hsl(var(--navy-800))]">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Curriculum overview</h2>
          <div className="mt-4 space-y-3">
            {[
              { m: "Module 1", t: "Diagnostics & readiness baseline" },
              { m: "Module 2", t: "Pilot scoping & business case" },
              { m: "Module 3", t: "Technology landscape & vendor choices" },
              { m: "Module 4", t: "Implementation sprints with mentor reviews" },
              { m: "Module 5", t: "Scale plan & 12-month roadmap" },
            ].map((mod) => (
              <div key={mod.m} className="cii-card p-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--orange-600))]">{mod.m}</div>
                  <div className="font-display font-semibold text-[hsl(var(--navy-900))]">{mod.t}</div>
                </div>
                <div className="text-xs text-[hsl(var(--neutral-500))]">~2 weeks</div>
              </div>
            ))}
          </div>
        </div>

        <EventSpeakersGrid speakers={event.speakers} />
      </div>
      <div className="lg:col-span-4">
        <EventStickyRegister event={event} onRegister={onRegister} />
      </div>
    </div>
  </section>
);
