import type { ProgrammeItem } from "@/data/programmes";

export const ProgrammeOverview = ({ programme }: { programme: ProgrammeItem }) => (
  <div>
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">About the programme</h2>
    <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed">{programme.summary}</p>
    <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed">
      Designed for India's manufacturing ecosystem, this {programme.type.toLowerCase()} combines expert-led instruction with practical, plant-grade application â so participants leave with capability they can deploy immediately.
    </p>
  </div>
);
