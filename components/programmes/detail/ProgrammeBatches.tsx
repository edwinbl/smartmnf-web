"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
  onRegister: (batchId?: string) => void;
}

const statusBadge: Record<string, { label: string; cls: string }> = {
  open: { label: "Registrations Open", cls: "bg-[hsl(180_55%_94%)] text-[hsl(180_60%_28%)]" },
  soon: { label: "Coming Soon", cls: "bg-[hsl(var(--neutral-100))] text-[hsl(var(--navy-700))]" },
  waitlist: { label: "Waitlist", cls: "bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]" },
  closed: { label: "Closed", cls: "bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-500))]" },
};

export const ProgrammeBatches = ({ programme, onRegister }: Props) => {
  if (!programme.batches?.length) return null;

  const isSingle = programme.batches.length === 1;

  return (
    <section id="batches">
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
        {isSingle ? "Programme batch" : "Programme batches"}
      </h2>
      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
        {isSingle
          ? "Register for this batch below."
          : "Choose the batch that fits your schedule and location."}
      </p>
      <div className={`mt-5 grid gap-4 ${isSingle ? "" : "md:grid-cols-2"}`}>
        {programme.batches.map((b) => {
          const status = b.status ?? programme.status;
          const badge = statusBadge[status];
          const disabled = status === "closed";
          return (
            <div key={b.id} className="cii-card p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--orange-600))]">
                    {b.label}
                  </div>
                  <div className="font-display font-semibold text-[hsl(var(--navy-900))] mt-1">
                    {b.dates}
                  </div>
                </div>
                <span className={`shrink-0 px-2 py-1 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold ${badge.cls}`}>
                  {badge.label}
                </span>
              </div>
              <div className="space-y-1.5 text-sm text-[hsl(var(--neutral-700))]">
                <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[hsl(var(--neutral-500))]" />{b.location}</div>
                <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-[hsl(var(--neutral-500))]" />{b.dates}</div>
                {b.seats && <div className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-[hsl(var(--neutral-500))]" />{b.seats}</div>}
              </div>
              <button
                onClick={() => onRegister(b.id)}
                disabled={disabled}
                aria-label={disabled ? `Registration closed for ${b.label}` : `Register for ${b.label}`}
                className="btn-primary mt-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {disabled ? "Registration closed" : (
                  <>
                    Register
                    <span className="sr-only"> for {b.label}</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
