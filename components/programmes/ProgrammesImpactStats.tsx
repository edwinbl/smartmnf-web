import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 14500, label: "Leaders trained", suffix: "+" },
  { value: 2800, label: "Certificates issued", suffix: "+" },
  { value: 85, label: "Industry partners", suffix: "" },
  { value: 28, label: "Industries served", suffix: "" },
];

const Stat = ({ value, label, suffix }: (typeof stats)[number]) => {
  const { value: v, ref } = useCountUp(value);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="rounded-lg p-6 bg-white/10 backdrop-blur-sm border border-white/15"
    >
      <div className="font-numeric font-bold text-3xl md:text-4xl text-white">
        {v.toLocaleString("en-IN")}{suffix}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-[0.14em] text-white/70 mt-2 font-bold">
        {label}
      </div>
    </div>
  );
};

export const ProgrammesImpactStats = () => (
  <section
    className="py-16 md:py-20 text-white relative overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)",
    }}
  >
    <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden />
    <div className="container-cii relative">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--orange-500))] mb-3">
          Capability Impact
        </div>
        <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight">
          Capability built across India's manufacturing ecosystem
        </h2>
      </div>
      <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </div>
  </section>
);
