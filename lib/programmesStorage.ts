const SAVED_KEY = "programmes_saved";
const REGISTERED_KEY = "programmes_registered";
const DRAFT_PREFIX = "programmes_draft_";

export const PROGRAMMES_STORAGE_EVENT = "programmes-storage-change";

const read = (key: string): string[] => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v): v is string => typeof v === "string");
  } catch {
    return [];
  }
};

const emit = () => {
  try {
    window.dispatchEvent(new Event(PROGRAMMES_STORAGE_EVENT));
  } catch {
    /* noop */
  }
};

const write = (key: string, value: string[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    emit();
  } catch {
    /* noop */
  }
};

export interface RegistrationDraft {
  name?: string;
  organization?: string;
  email?: string;
  mobile?: string;
  industry?: string;
  role?: string;
  orgSize?: string;
  objectives?: string;
  step?: number;
}

export const programmesStorage = {
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
  getDraft: (slug: string): RegistrationDraft => {
    try {
      const raw = localStorage.getItem(DRAFT_PREFIX + slug);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? (parsed as RegistrationDraft) : {};
    } catch {
      return {};
    }
  },
  saveDraft: (slug: string, draft: RegistrationDraft) => {
    try {
      localStorage.setItem(DRAFT_PREFIX + slug, JSON.stringify(draft));
      emit();
    } catch {
      /* noop */
    }
  },
  clearDraft: (slug: string) => {
    try {
      localStorage.removeItem(DRAFT_PREFIX + slug);
      emit();
    } catch {
      /* noop */
    }
  },
  subscribe: (cb: () => void) => {
    const handler = () => cb();
    window.addEventListener(PROGRAMMES_STORAGE_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(PROGRAMMES_STORAGE_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  },
};

// Re-export accent maps for backwards compatibility. New code should import
// from "@/lib/programmeAccents" directly.
export { accentBar, accentText, accentSoft } from "./programmeAccents";
