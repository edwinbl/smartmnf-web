const pillars = [
  { n: "01", t: "MSME Empowerment", d: "Lifting the foundation of Indian manufacturing." },
  { n: "02", t: "Competitiveness", d: "World-class quality, productivity and agility." },
  { n: "03", t: "Export Readiness", d: "Global supply chain participation, by design." },
  { n: "04", t: "Future-ready Industries", d: "Sustainable, intelligent, human-centric." },
  { n: "05", t: "Digital at Scale", d: "From experiments to enterprise-wide impact." },
];

export const AboutVision = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 text-white" style={{ background: "hsl(var(--navy-800))" }}>
      <div
        className="absolute -top-20 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--saffron)/0.7), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--india-green)/0.6), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-cii relative">
        <span className="cii-chip cii-chip-orange">National Vision</span>
        <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.05]">
          A national movement for <span style={{ color: "hsl(var(--saffron))" }}>manufacturing competitiveness</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl">
          The platform is more than a service â it&apos;s the connective tissue of India&apos;s
          Industry 4.0 ambitions.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 border-t border-white/10 pt-10">
          {pillars.map((p) => (
            <div key={p.n} className="group">
              <div className="font-numeric text-xs font-bold text-[hsl(var(--saffron))]">{p.n}</div>
              <div className="mt-3 font-display text-lg font-bold">{p.t}</div>
              <div className="mt-2 text-sm text-white/60">{p.d}</div>
              <div className="mt-4 h-px w-10 bg-white/30 group-hover:w-full group-hover:bg-[hsl(var(--saffron))] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
