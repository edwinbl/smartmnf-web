import { Sparkles, ClipboardCheck, Compass, Rocket, Network, Award } from "lucide-react";

export const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b h-[calc(100svh-72px)] flex items-center"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="About hero"
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
            <Sparkles className="h-3.5 w-3.5" /> About the Platform
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Accelerating India's{" "}
            <span className="text-[hsl(var(--red-600))]">
              Smart Manufacturing
            </span>{" "}
            Transformation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Helping manufacturers assess readiness, discover solutions, learn from peers
            and build capabilities for sustainable growth, competitiveness and operational
            excellence.
          </p>
        </div>

        <div className="hidden md:block lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[520px] animate-scale-in overflow-hidden">
          <PillarsViz />
        </div>
      </div>
    </section>
  );
};

const PillarsViz = () => {
  const pillars = [
    { icon: ClipboardCheck, label: "Assess",    color: "var(--navy-700)",   accent: "var(--navy-600)" },
    { icon: Compass,        label: "Guide",     color: "var(--orange-500)", accent: "var(--orange-500)" },
    { icon: Rocket,         label: "Enable",    color: "var(--red-600)",    accent: "var(--red-600)" },
    { icon: Network,        label: "Connect",   color: "var(--india-green)",accent: "var(--india-green)" },
    { icon: Award,          label: "Recognise", color: "var(--navy-800)",   accent: "var(--orange-500)" },
  ];

  // 5 nodes on a circle
  const cx = 50, cy = 52, r = 36;
  const nodes = pillars.map((p, i) => {
    const angle = (-Math.PI / 2) + (i * (2 * Math.PI) / pillars.length);
    return { ...p, x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  return (
    <div className="absolute inset-0">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="pillar-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--navy-600))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--orange-500))" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* glow behind hub */}
        <circle cx={cx} cy={cy} r="22" fill="url(#hub-glow)" />

        {/* orbit ring */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="hsl(var(--neutral-200))"
          strokeWidth="0.25"
          strokeDasharray="0.8 0.8"
          className="origin-center"
          style={{ animation: "spin-slow 60s linear infinite", transformOrigin: "50% 52%" }}
        />

        {/* lines from hub to each pillar */}
        {nodes.map((n, i) => (
          <line
            key={`l-${i}`}
            x1={cx} y1={cy} x2={n.x} y2={n.y}
            stroke="url(#pillar-line)"
            strokeWidth="0.35"
            strokeDasharray="0.9 0.6"
          />
        ))}
      </svg>

      {/* Central hub */}
      <div
        className="absolute h-24 w-24 rounded-full grid place-items-center text-white shadow-xl"
        style={{
          left: `${cx}%`, top: `${cy}%`, transform: "translate(-50%, -50%)",
          background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
        }}
      >
        <div className="text-center px-2">
          <div className="font-display font-extrabold text-base leading-tight">CII</div>
          <div className="text-[8px] uppercase tracking-widest opacity-80">Smart Mfg</div>
        </div>
        <span
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "0 0 0 6px hsl(var(--orange-500) / 0.12), 0 0 0 16px hsl(var(--orange-500) / 0.06)",
            animation: "pulse-ring 3.5s ease-out infinite",
          }}
          aria-hidden
        />
      </div>

      {/* Pillar nodes */}
      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="absolute flex flex-col items-center gap-1.5 group"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              transform: "translate(-50%, -50%)",
              animation: `float-node 6s ease-in-out ${i * 0.6}s infinite`,
            }}
          >
            <div
              className="h-16 w-16 rounded-2xl grid place-items-center shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, hsl(${n.color}), hsl(${n.accent}))`,
                boxShadow: `0 10px 24px -8px hsl(${n.color} / 0.55)`,
              }}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
            <span
              className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/90 backdrop-blur"
              style={{ color: `hsl(${n.color})` }}
            >
              {n.label}
            </span>
          </div>
        );
      })}

      <style>{`
        @keyframes float-node {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50%      { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 hsl(var(--orange-500) / 0.35), 0 0 0 0 hsl(var(--orange-500) / 0.2); }
          70%  { box-shadow: 0 0 0 14px hsl(var(--orange-500) / 0), 0 0 0 28px hsl(var(--orange-500) / 0); }
          100% { box-shadow: 0 0 0 0 hsl(var(--orange-500) / 0), 0 0 0 0 hsl(var(--orange-500) / 0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
