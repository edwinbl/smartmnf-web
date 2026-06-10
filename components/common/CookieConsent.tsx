"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cii-cookie-consent";

type Choice = "accepted" | "rejected";

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // small delay so it doesn't pop instantly
        const t = window.setTimeout(() => setVisible(true), 600);
        return () => window.clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (choice: Choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, at: new Date().toISOString() }),
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[70] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md print:hidden"
    >
      <div className="rounded-xl border border-[hsl(var(--neutral-200))] bg-white shadow-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-[hsl(var(--navy-050))] grid place-items-center text-[hsl(var(--navy-700))]">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[hsl(var(--navy-900))]">
              We use cookies
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-[hsl(var(--neutral-700))]">
              We use cookies to improve your experience, analyse traffic and personalise
              content. You can accept all or reject non-essential cookies. Read our{" "}
              <Link href="/cookies"
                className="underline text-[hsl(var(--navy-700))] hover:text-[hsl(var(--navy-900))]"
              >
                Cookie Policy
              </Link>
              .
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => persist("accepted")}
                className="inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-semibold bg-[hsl(var(--navy-800))] text-white hover:bg-[hsl(var(--navy-700))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--navy-600))]"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => persist("rejected")}
                className="inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-semibold border border-[hsl(var(--neutral-200))] text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--navy-600))]"
              >
                Reject non-essential
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => persist("rejected")}
            aria-label="Dismiss cookie banner"
            className="shrink-0 h-8 w-8 grid place-items-center rounded-md text-[hsl(var(--neutral-500))] hover:bg-[hsl(var(--neutral-50))]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
