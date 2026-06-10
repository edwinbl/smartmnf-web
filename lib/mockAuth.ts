// Lightweight mock auth state persisted in localStorage.
// Replace with real auth (Supabase) when backend is enabled.

export type MockUser = {
  email: string;
  name: string;
  initials: string;
};

const KEY = "mock_auth_user";
const EVENT = "mock-auth-change";

function deriveName(email: string): { name: string; initials: string } {
  const handle = email.split("@")[0] || "User";
  const parts = handle.replace(/[._-]+/g, " ").split(" ").filter(Boolean);
  const name = parts
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
  const initials =
    (parts[0]?.[0] || "U").toUpperCase() +
    (parts[1]?.[0] || "").toUpperCase();
  return { name: name || "User", initials };
}

export const mockAuth = {
  getUser(): MockUser | null {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as MockUser) : null;
    } catch {
      return null;
    }
  },
  signIn(email: string): MockUser {
    const { name, initials } = deriveName(email);
    const user: MockUser = { email, name, initials };
    localStorage.setItem(KEY, JSON.stringify(user));
    window.dispatchEvent(new Event(EVENT));
    return user;
  },
  signOut() {
    localStorage.removeItem(KEY);
    window.dispatchEvent(new Event(EVENT));
  },
  subscribe(cb: () => void) {
    const handler = () => cb();
    window.addEventListener(EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  },
};
