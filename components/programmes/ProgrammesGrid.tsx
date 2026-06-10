import { ProgrammeCard } from "./ProgrammeCard";
import { ProgrammesEmptyState } from "./ProgrammesEmptyState";
import type { ProgrammeItem, OutcomeId } from "@/data/programmes";

interface Props {
  programmes: ProgrammeItem[];
  onRegister: (p: ProgrammeItem) => void;
  onClear: () => void;
  recommendOutcome: OutcomeId | null;
}

export const ProgrammesGrid = ({ programmes, onRegister, onClear, recommendOutcome }: Props) => {
  if (programmes.length === 0) {
    return (
      <section className="py-12 md:py-16" id="programmes-grid">
        <div className="container-cii">
          <ProgrammesEmptyState onClear={onClear} />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16" id="programmes-grid">
      <div className="container-cii">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="section-eyebrow mb-2">All Programmes</div>
            <h2 className="font-display font-bold text-[26px] md:text-[32px] text-[hsl(var(--navy-900))] tracking-tight">
              Build the skills the future of manufacturing needs
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programmes.map((p) => (
            <ProgrammeCard
              key={p.slug}
              programme={p}
              onRegister={onRegister}
              recommended={!!recommendOutcome && p.outcomes.includes(recommendOutcome)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
