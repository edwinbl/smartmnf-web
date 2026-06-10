"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, BookOpen, ArrowRight } from "lucide-react";
import type { MockUser } from "@/lib/mockAuth";
import { programmes, type ProgrammeItem } from "@/data/programmes";
import { programmesStorage } from "@/lib/programmesStorage";

interface Props {
  user: MockUser;
  onRegister: (p: ProgrammeItem) => void;
}

export const PersonalizedProgrammesShelf = ({ user, onRegister }: Props) => {
  const [registered, setRegistered] = useState<string[]>([]);

  useEffect(() => {
    setRegistered(programmesStorage.getRegistered());
    return programmesStorage.subscribe(() => setRegistered(programmesStorage.getRegistered()));
  }, []);

  const registeredItems = programmes.filter((p) => registered.includes(p.slug));
  const recommended = programmes
    .filter((p) => !registered.includes(p.slug) && p.status !== "closed")
    .slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-[hsl(var(--neutral-50))] border-y border-[hsl(var(--neutral-150))]">
      <div className="container-cii space-y-10">
        <div>
          <div className="section-eyebrow mb-2">For you, {user.name.split(" ")[0]}</div>
          <h2 className="font-display font-bold text-[22px] md:text-[28px] text-[hsl(var(--navy-900))]">
            Your learning dashboard
          </h2>
        </div>

        {registeredItems.length > 0 && (
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-[0.14em] text-[hsl(var(--navy-700))] mb-4">
              Registered programmes
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {registeredItems.slice(0, 3).map((p) => (
                <Link key={p.slug}
                  href={`/programmes/${p.slug}`}
                  className="cii-card p-4 block group"
                >
                  <div className="flex items-center gap-2 text-[hsl(180_60%_30%)] text-xs font-semibold">
                    <CheckCircle2 className="h-4 w-4" /> Registered
                  </div>
                  <div className="mt-2 font-display font-bold text-[hsl(var(--navy-900))] group-hover:text-[hsl(var(--red-600))] transition-colors">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs text-[hsl(var(--neutral-500))]">{p.startDate}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-[0.14em] text-[hsl(var(--navy-700))] mb-4">
            Recommended next
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {recommended.map((p) => (
              <div key={p.slug} className="cii-card p-4 flex flex-col">
                <div className="flex items-center gap-2 text-[hsl(var(--orange-600))] text-xs font-semibold">
                  <BookOpen className="h-4 w-4" /> {p.type}
                </div>
                <div className="mt-2 font-display font-bold text-[hsl(var(--navy-900))]">{p.title}</div>
                <div className="mt-1 text-xs text-[hsl(var(--neutral-500))]">{p.duration} Â· {p.level}</div>
                <div className="mt-3 flex items-center justify-between">
                  <Link href={`/programmes/${p.slug}`} className="link-arrow text-xs">
                    Details <ArrowRight className="h-3 w-3" />
                  </Link>
                  <button onClick={() => onRegister(p)} className="btn-primary h-8 px-3 text-[11px]">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
