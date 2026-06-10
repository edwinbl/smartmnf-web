interface StepProgressProps {
  current: number;
  total: number;
  label?: string;
}

export const StepProgress = ({ current, total, label }: StepProgressProps) => {
  const pct = Math.max(0, Math.min(100, (current / total) * 100));
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
          Step {current} of {total}
        </span>
        {label && <span className="text-[hsl(var(--neutral-500))]">{label}</span>}
      </div>
      <div className="h-1.5 w-full rounded-full bg-[hsl(var(--neutral-150))] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
          }}
        />
      </div>
    </div>
  );
};
