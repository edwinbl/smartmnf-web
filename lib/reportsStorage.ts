const SAVED_KEY = "reports_saved";
const RECENT_KEY = "reports_recent";
const MAX_RECENT = 6;

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
    window.dispatchEvent(new Event("reports-storage-change"));
  } catch {
    /* noop */
  }
};

export const reportsStorage = {
  getSaved: () => read(SAVED_KEY),
  isSaved: (slug: string) => read(SAVED_KEY).includes(slug),
  toggleSaved: (slug: string) => {
    const list = read(SAVED_KEY);
    const next = list.includes(slug) ? list.filter((s) => s !== slug) : [slug, ...list];
    write(SAVED_KEY, next);
    return next.includes(slug);
  },
  getRecent: () => read(RECENT_KEY),
  pushRecent: (slug: string) => {
    const list = read(RECENT_KEY).filter((s) => s !== slug);
    list.unshift(slug);
    write(RECENT_KEY, list.slice(0, MAX_RECENT));
  },
  subscribe: (cb: () => void) => {
    const handler = () => cb();
    window.addEventListener("reports-storage-change", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("reports-storage-change", handler);
      window.removeEventListener("storage", handler);
    };
  },
};
