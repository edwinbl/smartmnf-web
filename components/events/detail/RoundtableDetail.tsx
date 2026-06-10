import { EventStickyRegister } from "./EventStickyRegister";
import { EventSpeakersGrid } from "./EventSpeakersGrid";
import { Lock } from "lucide-react";
import type { EventItem } from "@/data/events";

interface Props {
  event: EventItem;
  onRegister: () => void;
}

export const RoundtableDetail = ({ event, onRegister }: Props) => (
  <section className="py-12 md:py-16">
    <div className="container-cii grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10">
        <div className="cii-card p-5 flex items-start gap-3" style={{ borderColor: "hsl(45 70% 82%)", background: "linear-gradient(180deg, hsl(45 100% 98%), white)" }}>
          <Lock className="h-5 w-5 text-[hsl(38_90%_42%)] mt-0.5" />
          <div>
            <div className="font-display font-bold text-[hsl(var(--navy-900))]">By invitation only</div>
            <div className="text-sm text-[hsl(var(--neutral-700))]">
              This roundtable convenes a curated group of leaders under Chatham House rules.
              Request an invitation and our team will be in touch within 3 business days.
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Discussion themes</h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed">{event.summary}</p>
        </div>

        {event.outcomes && (
          <div>
            <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Expected outcomes</h2>
            <ul className="mt-4 space-y-3">
              {event.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-[hsl(var(--navy-800))]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(38_90%_42%)] shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <EventSpeakersGrid speakers={event.speakers} />

        <div className="cii-card p-5">
          <h3 className="font-display font-bold text-[hsl(var(--navy-900))]">Invitation process</h3>
          <ol className="mt-3 space-y-2 text-sm text-[hsl(var(--neutral-700))] list-decimal pl-5">
            <li>Submit your participation request with role and organisation context.</li>
            <li>Our curation team reviews fit within 3 business days.</li>
            <li>Confirmed participants receive a briefing pack 7 days before the roundtable.</li>
          </ol>
        </div>
      </div>
      <div className="lg:col-span-4">
        <EventStickyRegister event={event} onRegister={onRegister} />
      </div>
    </div>
  </section>
);
