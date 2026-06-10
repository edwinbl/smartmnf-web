import { Mail, Phone, Download, FileText, Users, Building2, CheckCircle2, Sparkles, Image as ImageIcon, Lightbulb, FileDown, Briefcase } from "lucide-react";
import type { EventItem } from "@/data/events";
import { EventAgendaTimeline } from "./EventAgendaTimeline";

interface Props {
  event: EventItem;
}

const SectionHeading = ({ kicker, title, compact = false }: { kicker?: string; title: string; compact?: boolean }) => (
  <div className="space-y-1">
    {kicker && (
      <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--navy-50))] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[hsl(var(--navy-700))]">
        {kicker}
      </div>
    )}
    <h2 className={`font-display font-bold text-[hsl(var(--navy-900))] ${compact ? "text-lg" : "text-xl md:text-2xl"}`}>{title}</h2>
  </div>
);

export const WorkshopPostDetail = ({ event }: Props) => {
  const r = event.report;
  return (
    <section className="py-10 md:py-12">
      <div className="container-cii space-y-8">
        {/* 1. Workshop Summary â compact meta strip + summary */}
        <div>
          <SectionHeading kicker="01 Â· Overview" title={`${event.type} Summary`} />
          <div className="mt-4 grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 cii-card p-5">
              <div className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">{event.title}</div>
              {event.tagline && <div className="mt-0.5 text-sm text-[hsl(var(--neutral-700))]">{event.tagline}</div>}
              <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{event.summary}</p>
            </div>
            <div className="lg:col-span-4 grid gap-3">
              <div className="cii-card p-4">
                <div className="text-[10px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">Date Â· Duration</div>
                <div className="mt-1 font-display font-bold text-sm text-[hsl(var(--navy-900))]">{event.date}</div>
                <div className="text-xs text-[hsl(var(--neutral-700))]">{event.duration} Â· {event.location}</div>
                {event.venue && <div className="text-[11px] text-[hsl(var(--neutral-500))]">{event.venue}</div>}
              </div>
              <div className="cii-card p-4">
                <div className="text-[10px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">Organizers</div>
                <ul className="mt-1 space-y-1">
                  {(event.organizers ?? []).map((o) => (
                    <li key={o} className="flex items-start gap-1.5 text-xs text-[hsl(var(--navy-800))]">
                      <Building2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[hsl(var(--navy-600))]" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Key Insights & Takeaways â single dense block */}
        {r && (
          <div>
            <SectionHeading kicker="02 Â· Insights" title="Key Insights & Takeaways" />
            <div className="mt-4 cii-card p-5 grid lg:grid-cols-12 gap-5">
              <div className="lg:col-span-4 space-y-3">
                <div className="rounded-lg bg-[hsl(var(--navy-50))]/60 border border-[hsl(var(--navy-100))] p-3">
                  <div className="flex items-center gap-2 text-[hsl(var(--navy-700))]">
                    <Users className="h-3.5 w-3.5" />
                    <span className="text-[10px] uppercase tracking-wide font-semibold">Attendees</span>
                  </div>
                  <div className="mt-1 font-display font-bold text-2xl text-[hsl(var(--navy-900))]">{r.attendees}</div>
                </div>
                <div className="rounded-lg bg-[hsl(var(--orange-50))]/60 border border-[hsl(var(--orange-100))] p-3">
                  <div className="text-[10px] uppercase tracking-wide font-semibold text-[hsl(var(--orange-700))]">Clusters covered</div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {r.clustersCovered.map((c) => (
                      <span key={c} className="inline-flex items-center rounded-full bg-white border border-[hsl(var(--orange-200))] px-2 py-0.5 text-[11px] font-semibold text-[hsl(var(--navy-900))]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-[hsl(var(--navy-900))]">
                  <Sparkles className="h-4 w-4 text-[hsl(var(--orange-600))]" />
                  <h3 className="font-display font-bold text-sm">Main takeaways</h3>
                </div>
                <ul className="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {r.mainTakeaways.map((t, i) => (
                    <li key={i} className="flex gap-2 text-xs text-[hsl(var(--navy-800))] leading-snug">
                      <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[hsl(var(--orange-600))]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 3 + 4. Agenda (main) + Speakers (sidebar) */}
        <div className="grid lg:grid-cols-12 gap-6">
          {event.agenda && event.agenda.length > 0 && (
            <div className="lg:col-span-7">
              <SectionHeading kicker="03 Â· Programme" title="Agenda & Sessions" />
              <div className="mt-4">
                <EventAgendaTimeline agenda={event.agenda} />
              </div>
            </div>
          )}

          {event.speakers?.length > 0 && (
            <div className={event.agenda?.length ? "lg:col-span-5" : "lg:col-span-12"}>
              <SectionHeading kicker="04 Â· Speakers" title="Speaker Profiles" />
              <div className={`mt-4 grid gap-3 ${event.agenda?.length ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                {event.speakers.map((s) => (
                  <div key={s.name} className="cii-card p-3">
                    <div className="flex items-center gap-2.5">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[hsl(var(--navy-700))] to-[hsl(var(--navy-600))] grid place-items-center text-xs font-bold text-white shrink-0">
                        {s.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-display font-bold text-sm text-[hsl(var(--navy-900))] truncate">{s.name}</div>
                        <div className="text-[11px] text-[hsl(var(--neutral-700))] truncate">{s.role}</div>
                        <div className="text-[10px] text-[hsl(var(--neutral-500))] truncate">{s.org}</div>
                      </div>
                    </div>
                    {(s.email || s.phone) && (
                      <div className="mt-2 pt-2 border-t border-[hsl(var(--neutral-150))] space-y-1">
                        {s.email && (
                          <a href={`mailto:${s.email}`} className="flex items-center gap-1.5 text-[11px] text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))] break-all">
                            <Mail className="h-3 w-3 shrink-0" /> {s.email}
                          </a>
                        )}
                        {s.phone && (
                          <a href={`tel:${s.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1.5 text-[11px] text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]">
                            <Phone className="h-3 w-3 shrink-0" /> {s.phone}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 5 + 6. Presentation Resources + Industry Learnings (side by side) */}
        {((event.presentations && event.presentations.length > 0) || (event.learnings && event.learnings.length > 0)) && (
          <div className="grid lg:grid-cols-2 gap-6">
            {event.presentations && event.presentations.length > 0 && (
              <div>
                <SectionHeading kicker="05 Â· Materials" title="Presentation Resources" />
                <ul className="mt-4 divide-y divide-[hsl(var(--neutral-150))] cii-card overflow-hidden">
                  {event.presentations.map((d, i) => (
                    <li key={i}>
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 hover:bg-[hsl(var(--neutral-50))] transition group"
                      >
                        <div className="h-8 w-8 shrink-0 rounded-md bg-[hsl(var(--orange-50))] text-[hsl(var(--orange-700))] grid place-items-center">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-xs text-[hsl(var(--navy-900))] group-hover:underline underline-offset-4 truncate">{d.title}</div>
                          {d.speaker && <div className="mt-0.5 text-[11px] text-[hsl(var(--neutral-700))] truncate">{d.speaker}</div>}
                        </div>
                        {d.size && <div className="hidden sm:block text-[10px] uppercase tracking-wide text-[hsl(var(--neutral-500))]">{d.size}</div>}
                        <Download className="h-3.5 w-3.5 text-[hsl(var(--navy-700))] shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.learnings && event.learnings.length > 0 && (
              <div>
                <SectionHeading kicker="06 Â· Learnings" title="Industry Learnings" />
                <ul className="mt-4 cii-card p-2 divide-y divide-[hsl(var(--neutral-150))]">
                  {event.learnings.map((l, i) => (
                    <li key={i} className="p-3 flex items-start gap-2.5 text-xs text-[hsl(var(--navy-800))] leading-relaxed">
                      <Lightbulb className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[hsl(var(--orange-600))]" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 7. Case Studies & Demonstrations */}
        {r && r.successStories?.length > 0 && (
          <div>
            <SectionHeading kicker="07 Â· In Practice" title="Case Studies & Demonstrations" />
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {r.successStories.map((s, i) => (
                <div key={i} className="cii-card p-4 flex items-start gap-2.5">
                  <div className="h-8 w-8 shrink-0 rounded-md bg-[hsl(var(--navy-50))] text-[hsl(var(--navy-700))] grid place-items-center">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <p className="text-xs text-[hsl(var(--navy-800))] leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Photo Gallery â tighter grid */}
        {event.photographs && event.photographs.length > 0 && (
          <div>
            <SectionHeading kicker="08 Â· Gallery" title="Photo Gallery" />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {event.photographs.map((p, i) => (
                <figure key={i} className="cii-card overflow-hidden group">
                  <div className="aspect-[4/3] bg-[hsl(var(--neutral-100))] overflow-hidden">
                    <img
                      src={p.url}
                      alt={p.caption ?? `${event.title} â photograph ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                    />
                  </div>
                  {p.caption && (
                    <figcaption className="px-2 py-1.5 text-[10px] text-[hsl(var(--neutral-700))] flex items-start gap-1 line-clamp-2">
                      <ImageIcon className="h-3 w-3 mt-0.5 shrink-0 text-[hsl(var(--neutral-500))]" />
                      <span>{p.caption}</span>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* 9. Downloads & Related Resources â PDF + resource persons in one row */}
        {(event.reportPdfUrl || (event.resourcePersons && event.resourcePersons.length > 0)) && (
          <div>
            <SectionHeading kicker="09 Â· Downloads" title="Downloads & Related Resources" />
            <div className="mt-4 grid lg:grid-cols-12 gap-4">
              {event.reportPdfUrl && (
                <a
                  href={event.reportPdfUrl}
                  download
                  className="lg:col-span-4 cii-card p-4 flex items-center gap-3 hover:bg-[hsl(var(--neutral-50))] transition group"
                >
                  <div className="h-11 w-11 shrink-0 rounded-lg bg-[hsl(var(--orange-50))] text-[hsl(var(--orange-700))] grid place-items-center">
                    <FileDown className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-sm text-[hsl(var(--navy-900))] group-hover:underline underline-offset-4">
                      {event.type} report (PDF)
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[hsl(var(--neutral-700))]">Full takeaways, clusters & success stories.</p>
                  </div>
                  <Download className="h-4 w-4 text-[hsl(var(--navy-700))] shrink-0" />
                </a>
              )}

              {event.resourcePersons && event.resourcePersons.length > 0 && (
                <div className={event.reportPdfUrl ? "lg:col-span-8" : "lg:col-span-12"}>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {event.resourcePersons.map((p) => (
                      <div key={p.name} className="cii-card p-3">
                        <div className="font-display font-bold text-sm text-[hsl(var(--navy-900))]">{p.name}</div>
                        <div className="text-[10px] text-[hsl(var(--neutral-500))]">{p.org}</div>
                        <p className="mt-1 text-[11px] text-[hsl(var(--neutral-700))] leading-relaxed line-clamp-2">{p.expertise}</p>
                        {(p.email || p.phone) && (
                          <div className="mt-2 pt-2 border-t border-[hsl(var(--neutral-150))] flex flex-wrap gap-x-3 gap-y-1">
                            {p.email && (
                              <a href={`mailto:${p.email}`} className="flex items-center gap-1 text-[10px] text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))] break-all">
                                <Mail className="h-3 w-3 shrink-0" /> {p.email}
                              </a>
                            )}
                            {p.phone && (
                              <a href={`tel:${p.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1 text-[10px] text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]">
                                <Phone className="h-3 w-3 shrink-0" /> {p.phone}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
