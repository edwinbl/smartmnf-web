import { Gauge, Users, GraduationCap, Handshake, Cpu, ArrowUpRight } from "lucide-react";

const groups = [
  { Icon: Gauge, title: "Assessment Experts", desc: "Guide you through readiness assessments and benchmarking." },
  { Icon: Users, title: "Industry Advisors", desc: "Seasoned operators to advise on transformation strategy." },
  { Icon: GraduationCap, title: "Training Teams", desc: "Curate capability-building programmes for your workforce." },
  { Icon: Handshake, title: "Ecosystem Partners", desc: "Connect with the CII network of MSMEs, enterprises and academia." },
  { Icon: Cpu, title: "Technology Experts", desc: "Specialists across IIoT, AI, automation and cybersecurity." },
];

export const EcosystemConnect = () => {
  return (
    <section id="ecosystem" className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Who you'll meet</span>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
            Talk to the right people, faster
          </h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))]">
            Our ecosystem brings together specialists across every stage of your Industry 4.0 journey.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ Icon, title, desc }) => (
            <div key={title} className="cii-card p-6 group">
              <div className="flex items-start justify-between">
                <div
                  className="grid place-items-center h-11 w-11 rounded-md text-[hsl(var(--navy-700))]"
                  style={{ background: "hsl(var(--navy-050))" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-[hsl(var(--neutral-400))] group-hover:text-[hsl(var(--red-600))] transition-colors" />
              </div>
              <h3 className="font-display mt-4 text-base font-bold text-[hsl(var(--navy-900))]">{title}</h3>
              <p className="mt-1.5 text-sm text-[hsl(var(--neutral-500))] leading-relaxed">{desc}</p>
              <div className="mt-4 flex items-center gap-4">
                <a href="#intent" className="link-arrow text-xs">Connect â</a>
                <a href="#intent" className="text-xs font-semibold text-[hsl(var(--neutral-500))] hover:text-[hsl(var(--navy-700))]">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
