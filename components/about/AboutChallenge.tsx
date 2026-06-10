import { Network, GraduationCap, Compass, Factory, Handshake } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { Icon: Network, title: "Fragmented Adoption", body: "Pockets of progress, but no national playbook for MSMEs to follow." },
  { Icon: GraduationCap, title: "Skill Gaps", body: "Workforce readiness lags behind the pace of digital change." },
  { Icon: Compass, title: "Limited Expertise", body: "Trusted advisors and proven blueprints are hard to find." },
  { Icon: Factory, title: "MSME Constraints", body: "Capital, capacity and confidence stall transformation at scale." },
  { Icon: Handshake, title: "Need for Collaboration", body: "Isolated efforts can't deliver national competitiveness." },
];

export const AboutChallenge = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 lg:py-28 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-3xl">
          <span className="section-eyebrow">The Challenge</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            India&apos;s manufacturing moment â and what stands in the way.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[hsl(var(--neutral-700))]">
            Becoming the world&apos;s factory floor requires more than ambition. It demands a
            shared path â one that turns isolated wins into a national movement.
          </p>
        </div>

        <div
          ref={ref}
          data-revealed="false"
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-700 opacity-0 translate-y-4 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
        >
          {items.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="cii-card p-6 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-10 w-10 grid place-items-center rounded-md bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))] mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm text-[hsl(var(--neutral-500))] leading-relaxed">{body}</p>
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(to right, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
