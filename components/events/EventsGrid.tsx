import { EventCard } from "./EventCard";
import { EventsEmptyState } from "./EventsEmptyState";
import type { EventItem } from "@/data/events";

interface Props {
  events: EventItem[];
  onRegister: (e: EventItem) => void;
  onClear: () => void;
}

export const EventsGrid = ({ events, onRegister, onClear }: Props) => {
  if (events.length === 0) {
    return (
      <section className="py-12 md:py-16">
        <div className="container-cii">
          <EventsEmptyState onClear={onClear} />
        </div>
      </section>
    );
  }

  const featured = events.filter((e) => e.flagship || e.featured);
  const regular = events.filter((e) => !e.flagship && !e.featured);

  return (
    <section className="py-10 md:py-14">
      <div className="container-cii">
        <div className="mb-6 md:mb-8">
          <div className="section-eyebrow mb-2">Upcoming Events</div>
          <h2 className="font-display font-bold text-[26px] md:text-[32px] text-[hsl(var(--navy-900))] tracking-tight">
            Discover the ecosystem in motion
          </h2>
        </div>

        {featured.length > 0 && (
          <div className="mb-8 md:mb-10">
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((e) => (
                <EventCard key={e.slug} event={e} onRegister={onRegister} className="lg:col-span-1" />
              ))}
            </div>
          </div>
        )}

        {regular.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regular.map((e) => (
              <EventCard key={e.slug} event={e} onRegister={onRegister} className="lg:col-span-1" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
