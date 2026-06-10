const SAVED_KEY = "events_saved";
const REGISTERED_KEY = "events_registered";

const read = (key: string): string[] => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

const write = (key: string, value: string[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("events-storage-change"));
  } catch {
    /* noop */
  }
};

export const eventsStorage = {
  getSaved: () => read(SAVED_KEY),
  isSaved: (slug: string) => read(SAVED_KEY).includes(slug),
  toggleSaved: (slug: string) => {
    const list = read(SAVED_KEY);
    const next = list.includes(slug) ? list.filter((s) => s !== slug) : [slug, ...list];
    write(SAVED_KEY, next);
    return next.includes(slug);
  },
  getRegistered: () => read(REGISTERED_KEY),
  isRegistered: (slug: string) => read(REGISTERED_KEY).includes(slug),
  addRegistered: (slug: string) => {
    const list = read(REGISTERED_KEY);
    if (!list.includes(slug)) write(REGISTERED_KEY, [slug, ...list]);
  },
  subscribe: (cb: () => void) => {
    const handler = () => cb();
    window.addEventListener("events-storage-change", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("events-storage-change", handler);
      window.removeEventListener("storage", handler);
    };
  },
};

// Accent â tailwind class helpers
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
