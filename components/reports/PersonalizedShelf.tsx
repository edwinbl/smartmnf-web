"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, Clock, Bookmark, ArrowRight } from "lucide-react";
import { reports, type Report } from "@/data/reports";
import { reportsStorage } from "@/lib/reportsStorage";
import type { MockUser } from "@/lib/mockAuth";

interface Props {
  user: MockUser;
}

const Row = ({ title, icon, list }: { title: string; icon: React.ReactNode; list: Report[] }) => {
  if (list.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[hsl(var(--red-600))]">{icon}</span>
        <h3 className="font-display font-bold text-base text-[hsl(var(--navy-900))]">{title}</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 snap-x pb-2 scrollbar-none">
        {list.map((r) => (
          <Link key={r.slug}
            href={`/reports/${r.slug}`}
            className="snap-start shrink-0 w-[260px] cii-card overflow-hidden group"
          >
            <div className={`h-20 bg-gradient-to-br ${r.coverGradient}`} />
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))]">
                {r.type} Â· {r.year}
              </div>
              <div className="mt-1.5 font-display font-bold text-sm text-[hsl(var(--navy-900))] leading-snug group-hover:text-[hsl(var(--red-600))] transition-colors line-clamp-2">
                {r.title}
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[hsl(var(--navy-700))]">
                Read <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const PersonalizedShelf = ({ user }: Props) => {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => {
      setSavedSlugs(reportsStorage.getSaved());
      setRecentSlugs(reportsStorage.getRecent());
    };
    sync();
    return reportsStorage.subscribe(sync);
  }, []);

  const recommended = reports.slice(0, 3);
  const saved = savedSlugs.map((s) => reports.find((r) => r.slug === s)).filter(Boolean) as Report[];
  const recent = recentSlugs.map((s) => reports.find((r) => r.slug === s)).filter(Boolean) as Report[];

  return (
    <section className="py-12 md:py-14 bg-white border-b" style={{ borderColor: "hsl(var(--neutral-150))" }}>
      <div className="container-cii">
        <div className="mb-8">
          <div className="section-eyebrow mb-2">For you</div>
          <h2 className="font-display font-bold text-[24px] md:text-[28px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            Welcome back, {user.name.split(" ")[0]} â picked for your interests
          </h2>
        </div>

        <div className="space-y-10">
          <Row title="Recommended for you" icon={<Sparkles className="h-4 w-4" />} list={recommended} />
          {recent.length > 0 && (
            <Row title="Recently viewed" icon={<Clock className="h-4 w-4" />} list={recent} />
          )}
          {saved.length > 0 && (
            <Row title="Saved reports" icon={<Bookmark className="h-4 w-4" />} list={saved} />
          )}
        </div>
      </div>
    </section>
  );
};
