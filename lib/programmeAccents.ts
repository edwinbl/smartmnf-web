// Accent style maps for programme cards / pills.
// Kept separate from programmesStorage so visual concerns don't ride along
// with the persistence layer.

export const accentBar = {
  navy: "bg-[hsl(var(--navy-700))]",
  red: "bg-[hsl(var(--red-600))]",
  gold: "bg-[hsl(var(--saffron))]",
  teal: "bg-[hsl(180_60%_38%)]",
  orange: "bg-[hsl(var(--orange-500))]",
} as const;

export const accentText = {
  navy: "text-[hsl(var(--navy-700))]",
  red: "text-[hsl(var(--red-600))]",
  gold: "text-[hsl(38_90%_42%)]",
  teal: "text-[hsl(180_60%_30%)]",
  orange: "text-[hsl(var(--orange-600))]",
} as const;

export const accentSoft = {
  navy: "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]",
  red: "bg-[hsl(var(--red-100))] text-[hsl(var(--red-700))]",
  gold: "bg-[hsl(45_100%_94%)] text-[hsl(38_90%_38%)]",
  teal: "bg-[hsl(180_55%_94%)] text-[hsl(180_60%_28%)]",
  orange: "bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]",
} as const;
