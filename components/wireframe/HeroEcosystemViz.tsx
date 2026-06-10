import {
  Cpu, Bot, Cloud, Database, ShieldCheck, Boxes, Glasses, Network, Wifi,
  Factory, GraduationCap, Users, Building2, Wrench,
  Layers, Radio, Activity, Rocket, Landmark,
} from "lucide-react";

const pillars = [
  { Icon: Wifi, label: "IoT" },
  { Icon: Bot, label: "AI / ML" },
  { Icon: Cpu, label: "Robotics" },
  { Icon: Boxes, label: "Additive Mfg" },
  { Icon: Glasses, label: "AR / VR" },
  { Icon: Cloud, label: "Cloud" },
  { Icon: Database, label: "Big Data" },
  { Icon: ShieldCheck, label: "Cybersecurity" },
  { Icon: Network, label: "Integration" },
  { Icon: Layers, label: "Digital Twin" },
  { Icon: Radio, label: "5G / Edge" },
  { Icon: Activity, label: "Predictive Mx" },
];

const ecosystem = [
  { Icon: Factory, label: "MSMEs" },
  { Icon: Wrench, label: "Solution Providers" },
  { Icon: GraduationCap, label: "Academia" },
  { Icon: Users, label: "Experts" },
  { Icon: Building2, label: "Industry" },
  { Icon: Rocket, label: "Startups" },
  { Icon: Landmark, label: "Govt / Policy" },
];

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

export const HeroEcosystemViz = () => {
  const size = 520;
  const c = size / 2;
  const rInner = 138;
  const rOuter = 232;

  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--orange-500))" stopOpacity="0.55" />
            <stop offset="60%" stopColor="hsl(var(--orange-500))" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--orange-500))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--saffron))" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Hub glow */}
        <circle cx={c} cy={c} r={120} fill="url(#hubGlow)" />

        {/* Concentric rings */}
        <circle cx={c} cy={c} r={rInner} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <circle
          cx={c} cy={c} r={rOuter}
          fill="none" stroke="url(#ringStroke)" strokeWidth="1" strokeDasharray="3 6"
        >
          <animateTransform
            attributeName="transform" type="rotate"
            from={`0 ${c} ${c}`} to={`360 ${c} ${c}`} dur="80s" repeatCount="indefinite"
          />
        </circle>

        {/* Spokes: hub -> pillars */}
        {pillars.map((_, i) => {
          const p = polar(c, c, rInner, (360 / pillars.length) * i);
          return (
            <line
              key={`s-${i}`} x1={c} y1={c} x2={p.x} y2={p.y}
              stroke="rgba(255,255,255,0.12)" strokeWidth="1"
            />
          );
        })}

        {/* Pillar -> nearest ecosystem connectors (dashed, animated) */}
        {ecosystem.map((_, i) => {
          const p = polar(c, c, rOuter, (360 / ecosystem.length) * i + 36);
          const pIn = polar(c, c, rInner, (360 / ecosystem.length) * i + 36);
          return (
            <line
              key={`e-${i}`}
              x1={pIn.x} y1={pIn.y} x2={p.x} y2={p.y}
              stroke="hsl(var(--orange-500))" strokeOpacity="0.45"
              strokeWidth="1" strokeDasharray="4 5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0" to="-18" dur="2.4s" repeatCount="indefinite"
              />
            </line>
          );
        })}

        {/* Pulse dots traveling on spokes */}
        {pillars.map((_, i) => {
          const p = polar(c, c, rInner, (360 / pillars.length) * i);
          return (
            <circle key={`d-${i}`} r="2.2" fill="hsl(var(--orange-500))">
              <animate
                attributeName="cx" values={`${c};${p.x}`}
                dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite"
              />
              <animate
                attributeName="cy" values={`${c};${p.y}`}
                dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite"
              />
              <animate
                attributeName="opacity" values="0;1;0"
                dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>

      {/* Center hub */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   h-[112px] w-[112px] rounded-full grid place-items-center text-center
                   border border-white/25 backdrop-blur-sm"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, hsl(var(--orange-500) / 0.55), hsl(var(--navy-900)) 75%)",
          boxShadow: "0 0 40px hsl(var(--orange-500) / 0.35)",
        }}
      >
        <div>
          <div className="font-display text-[11px] font-semibold tracking-[0.18em] text-white/70 uppercase">
            CII
          </div>
          <div className="font-display text-[13px] font-bold text-white leading-tight mt-0.5">
            Smart<br />Manufacturing
          </div>
        </div>
      </div>

      {/* Inner ring: I4.0 pillar nodes */}
      {pillars.map(({ Icon, label }, i) => {
        const p = polar(c, c, rInner, (360 / pillars.length) * i);
        const xPct = (p.x / size) * 100;
        const yPct = (p.y / size) * 100;
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${xPct}%`, top: `${yPct}%` }}
          >
            <div
              className="h-10 w-10 rounded-full grid place-items-center border border-white/20
                         bg-[hsl(var(--navy-800))]/80 backdrop-blur-sm
                         transition-all duration-300 group-hover:border-cii-orange group-hover:scale-110"
            >
              <Icon className="h-4 w-4 text-cii-orange" strokeWidth={2} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap
                            text-[9.5px] font-semibold tracking-wide text-white/85 uppercase
                            opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </div>
          </div>
        );
      })}

      {/* Outer ring: ecosystem chips */}
      {ecosystem.map(({ Icon, label }, i) => {
        const p = polar(c, c, rOuter, (360 / ecosystem.length) * i + 36);
        const xPct = (p.x / size) * 100;
        const yPct = (p.y / size) * 100;
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${xPct}%`, top: `${yPct}%` }}
          >
            <div
              className="inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full
                         border border-white/25 bg-white/[0.06] backdrop-blur-md"
            >
              <span className="grid place-items-center h-5 w-5 rounded-full bg-cii-orange/20">
                <Icon className="h-3 w-3 text-cii-orange" strokeWidth={2.2} />
              </span>
              <span className="font-display text-[10.5px] font-semibold tracking-wide text-white/85 whitespace-nowrap">
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
