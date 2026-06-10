"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Mail, Phone, MessageCircle, Bot, Zap, Sparkle } from "lucide-react";

export const ContactHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b h-[calc(100svh-72px)] flex items-center"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 500px at 85% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(900px 600px at 0% 100%, hsl(var(--navy-600) / 0.12), transparent 55%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--neutral-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neutral-200) / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden
      />

      <div className="container-cii relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-10">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="cii-chip">
            <Sparkles className="h-3.5 w-3.5" /> We reply within a few hours
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Let's start a{" "}
            <span className="text-[hsl(var(--red-600))]">conversation</span>{" "}
            that moves manufacturing forward.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Tell us what you're working on â readiness, partnerships, training or platform
            help â and we'll route you to the right people in the ecosystem.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#intent" className="btn-primary group">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a href="mailto:smartmfg@cii.in" className="inline-flex items-center gap-2 text-[hsl(var(--neutral-700))] hover:text-[hsl(var(--red-600))] transition-colors">
              <Mail className="h-4 w-4" />
              smartmfg@cii.in
            </a>
            <a href="tel:+911141502301" className="inline-flex items-center gap-2 text-[hsl(var(--neutral-700))] hover:text-[hsl(var(--red-600))] transition-colors">
              <Phone className="h-4 w-4" />
              +91 11 4150 2301
            </a>
            <span className="inline-flex items-center gap-2 text-[hsl(var(--neutral-500))]">
              <Zap className="h-4 w-4 text-[hsl(var(--india-green))]" />
              Avg response &lt; 4 hrs
            </span>
          </div>
        </div>

        <div className="hidden md:block lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in overflow-hidden">
          <ContactCollage />
        </div>
      </div>
    </section>
  );
};

const QA_PAIRS: { q: string; a: string; chips?: string[] }[] = [
  {
    q: "How do I assess my plant's Industry 4.0 readiness?",
    a: "Take our 15-min readiness assessment â you'll get a maturity score and roadmap.",
    chips: ["Start Assessment", "See Sample Report"],
  },
  {
    q: "Can CII help us pilot a smart factory use case?",
    a: "Yes â our demo centres run guided pilots across IIoT, AI and robotics.",
    chips: ["Book a Visit", "View Demo Centres"],
  },
  {
    q: "What training programmes are available for our team?",
    a: "Cohort programmes, executive masterclasses and on-site workshops.",
    chips: ["Explore Programmes"],
  },
  {
    q: "How do I become a solution partner?",
    a: "Submit a partner enquiry â we'll match you to manufacturer demand.",
    chips: ["Partner Enquiry"],
  },
  {
    q: "Do you support MSMEs with funding pathways?",
    a: "Yes â we connect MSMEs to schemes, mentors and adoption grants.",
    chips: ["MSME Support"],
  },
];

const ContactCollage = () => {
  const [idx, setIdx] = useState(0);
  const [stage, setStage] = useState<"q" | "typing" | "a">("q");

  useEffect(() => {
    if (stage === "q") {
      const t = setTimeout(() => setStage("typing"), 1800);
      return () => clearTimeout(t);
    }
    if (stage === "typing") {
      const t = setTimeout(() => setStage("a"), 1400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % QA_PAIRS.length);
      setStage("q");
    }, 3800);
    return () => clearTimeout(t);
  }, [stage]);

  const current = QA_PAIRS[idx];

  return (
    <div className="absolute inset-0">
      {/* Floating accents */}
      <div
        className="absolute -top-2 right-6 h-10 w-10 rounded-full grid place-items-center text-white shadow-lg z-10"
        style={{
          background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          animation: "ch-float 6s ease-in-out infinite",
        }}
        aria-hidden
      >
        <Sparkle className="h-4 w-4" />
      </div>
      <div
        className="absolute top-1/2 -left-3 h-8 w-8 rounded-full grid place-items-center text-white shadow-md z-10"
        style={{
          background: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--navy-500)))",
          animation: "ch-float 7s ease-in-out infinite 1s",
        }}
        aria-hidden
      >
        <MessageCircle className="h-4 w-4" />
      </div>

      {/* Main chatbot window â straight, no rotation */}
      <div className="absolute inset-x-2 top-4 bottom-4 cii-card overflow-hidden flex flex-col">
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b"
          style={{
            borderColor: "hsl(var(--neutral-150))",
            background: "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))",
          }}
        >
          <div
            className="relative h-9 w-9 rounded-full grid place-items-center text-white"
            style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
          >
            <Bot className="h-4 w-4" />
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full"
              style={{ background: "hsl(var(--india-green))", boxShadow: "0 0 0 2px hsl(var(--navy-900))" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-white truncate">CII Assistant</div>
            <div className="text-[10px] text-white/70 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(var(--india-green))" }} />
              Online Â· replies instantly
            </div>
          </div>
          <Sparkles className="h-4 w-4 text-white/80" />
        </div>

        {/* Messages â rotating Q&A */}
        <div
          className="flex-1 px-4 py-4 space-y-3 overflow-hidden"
          style={{ background: "hsl(var(--neutral-050))" }}
        >
          {/* User question */}
          <div key={`q-${idx}`} className="flex justify-end ch-msg">
            <div
              className="max-w-[80%] px-3 py-2 rounded-2xl rounded-br-sm text-xs leading-relaxed text-white shadow-sm"
              style={{ background: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--navy-500)))" }}
            >
              {current.q}
            </div>
          </div>

          {/* Typing indicator */}
          {stage === "typing" && (
            <div className="flex items-end gap-2 ch-msg">
              <div
                className="h-6 w-6 rounded-full grid place-items-center text-white shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
              >
                <Bot className="h-3 w-3" />
              </div>
              <div
                className="px-3 py-2.5 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1"
                style={{ background: "white" }}
              >
                <span className="ch-dot" style={{ animationDelay: "0s" }} />
                <span className="ch-dot" style={{ animationDelay: "0.15s" }} />
                <span className="ch-dot" style={{ animationDelay: "0.3s" }} />
              </div>
            </div>
          )}

          {/* Bot answer */}
          {stage === "a" && (
            <div key={`a-${idx}`} className="flex items-end gap-2 ch-msg">
              <div
                className="h-6 w-6 rounded-full grid place-items-center text-white shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
              >
                <Bot className="h-3 w-3" />
              </div>
              <div
                className="max-w-[82%] px-3 py-2 rounded-2xl rounded-bl-sm text-xs leading-relaxed shadow-sm"
                style={{ background: "white", color: "hsl(var(--navy-900))" }}
              >
                {current.a}
                {current.chips && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {current.chips.map((c, i) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                        style={
                          i % 2 === 0
                            ? { background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }
                            : { background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }
                        }
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Composer */}
        <div
          className="px-3 py-2.5 border-t flex items-center gap-2"
          style={{ borderColor: "hsl(var(--neutral-150))", background: "white" }}
        >
          <div
            className="flex-1 h-8 rounded-full px-3 flex items-center text-[11px]"
            style={{ background: "hsl(var(--neutral-100))", color: "hsl(var(--neutral-500))" }}
          >
            Ask anythingâ¦
          </div>
          <button
            type="button"
            className="h-8 w-8 rounded-full grid place-items-center text-white shadow-sm"
            style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
            aria-label="Send"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ch-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ch-msg-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .ch-msg {
          opacity: 0;
          animation: ch-msg-in 0.45s ease-out forwards;
        }
        @keyframes ch-dot-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .ch-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: hsl(var(--navy-500));
          display: inline-block;
          animation: ch-dot-bounce 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
