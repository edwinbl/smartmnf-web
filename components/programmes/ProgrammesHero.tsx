"use client";

import { ArrowRight, Sparkles, GraduationCap, Award, Users, BookOpen, PlayCircle, Trophy, CheckCircle2, TrendingUp } from "lucide-react";

interface Props {
  onExplore: () => void;
  onFindPath: () => void;
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}

export const ProgrammesHero = ({ onExplore, onFindPath }: Props) => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b h-[calc(100svh-72px)] flex items-center"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="Programmes & Training"
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
            <Sparkles className="h-3.5 w-3.5" /> Capability Building Hub
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Programmes, Training &amp;{" "}
            <span className="text-[hsl(var(--red-600))]">Capability Building</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Build Industry 4.0 capabilities through expert-led programmes, workshops and
            transformation learning pathways designed for industrial leaders.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-bold uppercase tracking-wider text-white"
              style={{
                background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
              }}
            >
              Explore Programmes <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onFindPath}
              className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full text-sm font-semibold text-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))] transition-colors"
            >
              Find learning path <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in">
          <ProgrammesCollage />
        </div>
      </div>
    </section>
  );
};

const ProgrammesCollage = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* Soft halo */}
      <div
        className="absolute h-[360px] w-[360px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.22), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Back programme brochure */}
      <div
        className="absolute left-[8%] top-[10%] w-[58%] h-[78%] rounded-xl shadow-xl border border-[hsl(var(--neutral-150))] overflow-hidden -rotate-[8deg] bg-white"
        style={{ animation: "float 7s ease-in-out infinite" }}
      >
        <div
          className="h-[42%] w-full p-4 flex flex-col justify-between text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] opacity-90">
            <GraduationCap className="h-3 w-3" /> Live Cohort
          </div>
          <div>
            <div className="text-[10px] opacity-80">Cohort 12 Â· 2025</div>
            <div className="text-sm font-extrabold leading-snug">
              Industry 4.0 Leadership Programme
            </div>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div className="text-[9px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
            Modules
          </div>
          {[
            { label: "Foundations", icon: PlayCircle, done: true },
            { label: "Smart Factory Design", icon: BookOpen, done: true },
            { label: "Capstone & Certification", icon: Trophy, done: false },
          ].map((m, i) => {
            const Ico = m.done ? CheckCircle2 : m.icon;
            return (
              <div key={i} className="flex items-center gap-2">
                <Ico
                  className="h-3.5 w-3.5"
                  style={{
                    color: m.done
                      ? "hsl(var(--india-green))"
                      : "hsl(var(--neutral-500))",
                  }}
                />
                <div className="text-[10px] font-semibold text-[hsl(var(--navy-900))]">
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Front programme card with progress + cohort */}
      <div
        className="absolute right-[6%] top-[18%] w-[62%] h-[74%] rounded-xl shadow-2xl border border-[hsl(var(--neutral-150))] overflow-hidden rotate-[4deg] bg-white"
        style={{ animation: "float 6s ease-in-out infinite 0.4s" }}
      >
        <div
          className="h-[36%] w-full p-4 flex items-start justify-between text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
          }}
        >
          <div>
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] opacity-90">
              <Sparkles className="h-3 w-3" /> Learning Path
            </div>
            <div className="mt-2 text-sm font-extrabold leading-snug max-w-[80%]">
              Smart Manufacturing Leader
            </div>
          </div>
          <div className="h-9 w-9 rounded-lg bg-white/15 backdrop-blur grid place-items-center">
            <Trophy className="h-5 w-5" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
              Cohort Progress
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[hsl(var(--india-green))]">
              <TrendingUp className="h-3 w-3" /> 65%
            </span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-[hsl(var(--neutral-100))] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "65%",
                background:
                  "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
              }}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center -space-x-2">
              {["AR", "PK", "SM", "JV"].map((t, i) => (
                <span
                  key={t}
                  className="h-7 w-7 rounded-full grid place-items-center text-[9px] font-bold text-white border-2 border-white"
                  style={{ background: `hsl(var(--navy-${800 - i * 100}))` }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="text-[10px] font-semibold text-[hsl(var(--neutral-700))]">
              +42 enrolled
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-[hsl(var(--neutral-500))]">
            <span>Week 1</span><span>Week 12</span>
          </div>
        </div>
      </div>

      {/* Floating learners badge */}
      <div
        className="absolute bottom-2 left-2 cii-card px-3 py-2 flex items-center gap-2 -rotate-[3deg] bg-white"
        style={{ animation: "float 7.5s ease-in-out infinite 1s" }}
      >
        <div
          className="h-8 w-8 rounded-lg grid place-items-center text-white"
          style={{
            background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <Users className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Leaders Trained
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--navy-900))] font-numeric">
            14.5K+
          </div>
        </div>
      </div>

      {/* Floating certificate chip */}
      <div
        className="absolute top-2 right-4 cii-card px-3 py-2 flex items-center gap-2 rotate-[4deg] bg-white"
        style={{ animation: "float 8s ease-in-out infinite 0.7s" }}
      >
        <Award className="h-4 w-4 text-[hsl(var(--red-600))]" />
        <div className="text-[10px] font-bold text-[hsl(var(--navy-900))]">
          120+ Programmes Â· CII Certified
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--r, 0deg)); }
        }
      `}</style>
    </div>
  );
};
