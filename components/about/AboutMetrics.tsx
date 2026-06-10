import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { label: "MSMEs Engaged", value: 5200, suffix: "+" },
  { label: "Assessments Completed", value: 3400, suffix: "+" },
  { label: "Ecosystem Partners", value: 250, suffix: "+" },
  { label: "States Reached", value: 28, suffix: "" },
  { label: "Training Programmes", value: 180, suffix: "+" },
];

const Stat = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const { value: v, ref } = useCountUp(value);
  return (
    <div className="text-center sm:text-left">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="font-numeric text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none"
        style={{
          backgroundImage: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {v.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
};

export const AboutMetrics = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden text-white" style={{ background: "hsl(var(--navy-900))" }}>
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <div className="container-cii relative">
        <div className="max-w-3xl">
          <span className="cii-chip cii-chip-orange">Impact</span>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            A movement measured in momentum.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">Numbers that tell the story of India&apos;s rising digital factories.</p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};
