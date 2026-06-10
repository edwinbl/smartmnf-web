"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { EventDetailHero } from "@/components/events/detail/EventDetailHero";
import { WebinarDetail } from "@/components/events/detail/WebinarDetail";
import { WorkshopPostDetail } from "@/components/events/detail/WorkshopPostDetail";

import { SummitDetail } from "@/components/events/detail/SummitDetail";
import { RoundtableDetail } from "@/components/events/detail/RoundtableDetail";
import { ProgrammeDetail } from "@/components/events/detail/ProgrammeDetail";
import { RegisterEventModal } from "@/components/events/RegisterEventModal";
import { getEventBySlug, getRelatedEvents } from "@/data/events";
import { useMockAuth } from "@/hooks/useMockAuth";
import { toast } from "@/hooks/use-toast";
import { eventsStorage } from "@/lib/eventsStorage";
import { EventCard } from "@/components/events/EventCard";

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;
  const user = useMockAuth();
  const [modalOpen, setModalOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-dvh bg-background text-foreground flex flex-col">
        <WireHeader />
        <main className="flex-1 grid place-items-center py-24">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Event not found</h1>
            <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
              The event you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/events" className="btn-primary mt-6">Back to all events</Link>
          </div>
        </main>
        <WireFooter />
      </div>
    );
  }

  const handleRegister = () => {
    if (!user) {
      setModalOpen(true);
      return;
    }
    eventsStorage.addRegistered(event.slug);
    toast({ title: "You're registered", description: event.title });
  };

  const related = getRelatedEvents(event.slug);

  const Detail = () => {
    if (event.status === "completed") {
      return <WorkshopPostDetail event={event} />;
    }
    switch (event.type) {
      case "Workshop":
        return <WebinarDetail event={event} onRegister={handleRegister} />;
      case "Summit":
        return <SummitDetail event={event} onRegister={handleRegister} />;
      case "Roundtable":
        return <RoundtableDetail event={event} onRegister={handleRegister} />;
      case "Programme":
      case "Seminar":
      default:
        return <ProgrammeDetail event={event} onRegister={handleRegister} />;
    }
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title={`${event.title} â Events`}
        description={event.summary.slice(0, 155)}
      />
      <WireHeader />
      <main>
        <EventDetailHero event={event} />
        <Detail />

        {related.length > 0 && (
          <section className="py-12 md:py-16 bg-[hsl(var(--neutral-50))]">
            <div className="container-cii">
              <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))] mb-6">
                Related events
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((e) => (
                  <EventCard key={e.slug} event={e} onRegister={() => setModalOpen(true)} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <WireFooter />
      <WireChatbotFAB />
      <RegisterEventModal open={modalOpen} onOpenChange={setModalOpen} event={event} />
    </div>
  );
};

export default EventDetail;
