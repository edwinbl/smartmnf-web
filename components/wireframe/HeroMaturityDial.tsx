"use client";

import { useEffect, useState } from "react";

const SEG_LABELS = ["Initial", "Defined", "Repeatable", "Managed", "Optimised"];
const SEGMENTS = SEG_LABELS.length;
const TARGETS = [42, 58, 64, 71, 55, 68]; // cycles to feel "live"

export const HeroMaturityDial = () => {
  const [maturity, setMaturity] = useState(0);
  const [cycle, setCycle] = useState(0);

  // Animate up to current target, then after a pause move to next
  useEffect(() => {
    const target = TARGETS[cycle % TARGETS.length];
    const from = maturity;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;

    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setMaturity(from + (target - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const next = window.setTimeout(() => setCycle((c) => c + 1), duration + 2200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(next);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

  const activeSeg = Math.min(SEGMENTS - 1, Math.floor(maturity / 20));
  const arcLen = (maturity / 100) * Math.PI * 150;

  return (
    <div className="relative w-full max-w-[480px] ml-auto" style={{ aspectRatio: "1 / 1" }}>
      <svg viewBox="0 0 400 400" className="block w-full h-full">
        <defs>
          <linearGradient id="dialGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--orange-500))" />
            <stop offset="100%" stopColor="hsl(var(--saffron))" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--orange-500) / 0.35)" />
            <stop offset="100%" stopColor="hsl(var(--orange-500) / 0)" />
          </radialGradient>
        </defs>

        {/* outer slow gear */}
        <g className="gear-spin-slow" style={{ transformOrigin: "200px 200px" }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const x1 = 200 + Math.cos(a) * 178;
            const y1 = 200 + Math.sin(a) * 178;
            const x2 = 200 + Math.cos(a) * 188;
            const y2 = 200 + Math.sin(a) * 188;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
            );
          })}
          <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        </g>

        {/* concentric guides */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* maturity gauge */}
        <g transform="translate(200,200)">
          <path d="M -150 0 A 150 150 0 0 1 150 0" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="14" strokeLinecap="round" />
          <path
            d="M -150 0 A 150 150 0 0 1 150 0"
            fill="none"
            stroke="url(#dialGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${arcLen} 9999`}
            style={{ transition: "stroke-dasharray 60ms linear" }}
          />
          {Array.from({ length: SEGMENTS + 1 }).map((_, i) => {
            const a = Math.PI + (i / SEGMENTS) * Math.PI;
            return (
              <line
                key={i}
                x1={Math.cos(a) * 138}
                y1={Math.sin(a) * 138}
                x2={Math.cos(a) * 158}
                y2={Math.sin(a) * 158}
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="2"
              />
            );
          })}
          <circle cx="0" cy="0" r="100" fill="url(#centerGlow)" />
        </g>

        {/* fast inner gear (orbiting dots) */}
        <g className="gear-spin-fast" style={{ transformOrigin: "200px 200px" }} opacity="0.55">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x = 200 + Math.cos(a) * 88;
            const y = 200 + Math.sin(a) * 88;
            return <circle key={i} cx={x} cy={y} r="3" fill="hsl(var(--orange-500))" />;
          })}
        </g>
      </svg>

      {/* center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <div className="eyebrow text-[hsl(var(--orange-100))] mb-2">Industry Maturity</div>
        <div className="font-numeric font-extrabold text-white text-5xl md:text-6xl leading-none">
          {Math.round(maturity)}
          <span className="text-2xl text-white/60 ml-1">/100</span>
        </div>
        <div
          className="mt-3 px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-[0.06em] text-[hsl(var(--orange-100))] border"
          style={{ background: "hsl(var(--orange-500) / 0.18)", borderColor: "hsl(var(--orange-500) / 0.4)" }}
        >
          Stage Â· {SEG_LABELS[activeSeg]}
        </div>
      </div>

      {/* floating tags */}
      <div className="absolute top-[6%] -left-2 md:-left-4 bg-white text-navy-800 rounded-md shadow-xl px-3 py-2 hidden sm:block">
        <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-cii-red flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cii-red animate-pulse" />
          Live
        </div>
        <div className="text-[12px] font-semibold mt-0.5">India avg Â· Auto sector</div>
      </div>
      <div
        className="absolute bottom-[10%] -right-2 md:-right-4 text-white text-[12px] rounded-md px-3 py-2 border border-white/20 hidden sm:block"
        style={{ background: "hsl(var(--navy-900) / 0.4)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
      >
        Benchmark across <strong className="font-semibold">People Â· Process Â· Technology</strong>
      </div>
    </div>
  );
};
