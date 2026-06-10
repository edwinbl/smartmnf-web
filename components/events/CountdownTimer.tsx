"use client";

import { useEffect, useState } from "react";

interface Props {
  isoDate: string;
  compact?: boolean;
}

const pad = (n: number) => String(n).padStart(2, "0");

export const CountdownTimer = ({ isoDate, compact }: Props) => {
  const target = new Date(isoDate).getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86_400_000);
  const hrs = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);

  const cellCls = compact
    ? "min-w-[52px] px-2 py-1.5 text-center"
    : "min-w-[72px] px-3 py-2.5 text-center";
  const numCls = compact
    ? "font-numeric text-xl md:text-2xl font-bold text-white"
    : "font-numeric text-3xl md:text-4xl font-bold text-white";
  const labelCls = "text-[10px] uppercase tracking-[0.14em] text-white/70 mt-0.5";

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div className={`${cellCls} rounded-md bg-white/10 backdrop-blur-sm border border-white/15`}>
      <div className={numCls}>{pad(value)}</div>
      <div className={labelCls}>{label}</div>
    </div>
  );

  return (
    <div className="flex items-center gap-2" aria-label="Time until event starts">
      <Cell value={days} label="Days" />
      <Cell value={hrs} label="Hrs" />
      <Cell value={mins} label="Min" />
      <Cell value={secs} label="Sec" />
    </div>
  );
};
