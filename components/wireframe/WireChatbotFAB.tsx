"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useState } from "react";

const prompts = [
  "How do I apply for the Future Ready Manufacturing Award?",
  "Show me automotive case studies from Maharashtra",
  "Where is the nearest demo center?",
];

export const WireChatbotFAB = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-assistant", handler);
    return () => window.removeEventListener("open-assistant", handler);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Smart Manufacturing Assistant"
        className="fixed bottom-24 sm:bottom-6 right-6 z-50 flex items-center gap-2 h-12 px-5 rounded-full text-white font-semibold text-sm shadow-2xl transition-transform hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--navy-800)) 0%, hsl(var(--navy-600)) 100%)",
          boxShadow: "0 14px 36px hsl(var(--navy-900) / 0.35)",
        }}
      >
        <span className="relative grid place-items-center h-7 w-7 rounded-full bg-cii-orange">
          <MessageCircle className="h-4 w-4 text-white" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cii-red border-2 border-white" />
        </span>
        <span className="hidden sm:inline">Ask the Assistant</span>
      </button>

      {open && (
        <>
          {/* Mobile backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/40 sm:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            role="dialog"
            aria-label="Smart Manufacturing Assistant"
            className="fixed z-50 flex flex-col bg-white shadow-2xl overflow-hidden
                       inset-x-3 bottom-3 top-16 rounded-xl
                       sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto sm:w-[400px] sm:h-[640px] sm:max-h-[85vh] sm:rounded-2xl
                       border border-[hsl(var(--neutral-200))]"
          >
            {/* Header */}
            <div
              className="relative px-5 py-4 text-white"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)",
              }}
            >
              <div className="absolute inset-0 blueprint-grid opacity-30" />
              <div className="relative flex items-center gap-3">
                <span className="grid place-items-center h-11 w-11 rounded-full bg-cii-orange shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-base leading-tight">
                    Smart Mfg Assistant
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/80 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Grounded in CII content
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="grid place-items-center h-8 w-8 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[hsl(var(--neutral-50))]">
              <div className="bg-white border border-[hsl(var(--neutral-200))] rounded-lg p-4 text-sm text-navy-800 leading-relaxed shadow-sm">
                Namaste â I'm the CII Smart Manufacturing assistant. I answer
                from CII's published content only. Ask me about programmes,
                awards, demo centers, or case studies.
              </div>
              {prompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  className="w-full text-left text-sm font-medium px-4 py-3 rounded-lg border border-[hsl(var(--neutral-200))] bg-white text-navy-800 hover:border-navy-600 transition-colors shadow-sm"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[hsl(var(--neutral-200))] bg-white p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about programmes, awards, case studiesâ¦"
                  className="flex-1 h-11 px-4 text-sm border border-[hsl(var(--neutral-200))] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600"
                />
                <button
                  className="grid place-items-center h-11 w-11 rounded-md bg-cii-red text-white hover:opacity-90 transition-opacity"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-[11px] text-[hsl(var(--neutral-500))] text-center mt-2">
                AI may make errors. Verify with official CII publications. â¤30 queries/hr.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
