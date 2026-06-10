import Link from "next/link";
import {
  Gauge,
  FileText,
  BookOpen,
  Building2,
  GraduationCap,
  Calendar,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const modules = [
  {
    icon: Gauge,
    label: "Readiness Assessments",
    desc: "Benchmark maturity",
    href: "/readiness-assessment",
    color: "hsl(var(--orange-500))",
    tint: "hsl(var(--orange-500) / 0.10)",
  },
  {
    icon: Cpu,
    label: "Solutions Ecosystem",
    desc: "Tech for every stage",
    href: "/solutions",
    color: "hsl(var(--navy-700))",
    tint: "hsl(var(--navy-700) / 0.10)",
  },
  {
    icon: FileText,
    label: "Case Studies",
    desc: "Proven playbooks",
    href: "/case-studies",
    color: "hsl(var(--red-600))",
    tint: "hsl(var(--red-600) / 0.10)",
  },
  {
    icon: BookOpen,
    label: "Reports & Insights",
    desc: "Industry intelligence",
    href: "/reports",
    color: "hsl(var(--navy-700))",
    tint: "hsl(var(--navy-700) / 0.10)",
  },
  {
    icon: Building2,
    label: "E-Directory",
    desc: "Find trusted partners",
    href: "https://www.smartmfgindia.com/e-Directory.aspx",
    color: "hsl(var(--green-600, 142 70% 35%))",
    tint: "hsl(var(--green-600, 142 70% 35%) / 0.10)",
  },
  {
    icon: GraduationCap,
    label: "Programmes & Training",
    desc: "Upskill your teams",
    href: "/programmes",
    color: "hsl(var(--orange-500))",
    tint: "hsl(var(--orange-500) / 0.10)",
  },
  {
    icon: Calendar,
    label: "Events & Webinars",
    desc: "Learn & network",
    href: "/events",
    color: "hsl(var(--red-600))",
    tint: "hsl(var(--red-600) / 0.10)",
  },
];

export const AboutPlatformEcosystem = () => {
  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="container-cii">
        <div className="max-w-3xl mb-8">
          <div className="section-eyebrow mb-3">Platform Ecosystem</div>
          <h2 className="font-display text-3xl md:text-[36px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
            Everything You Need to Support Your Transformation Journey
          </h2>
          <p className="mt-3 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
            Modules working as one â every interaction strengthens the next.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {modules.map((m) => {
            const Icon = m.icon;
            const isExternal = m.href.startsWith("http");
            const cardBody = (
              <>
                <div
                  className="absolute inset-x-0 top-0 h-1 transition-all group-hover:h-1.5"
                  style={{ background: m.color }}
                  aria-hidden
                />
                <div
                  className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: m.tint }}
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-2">
                  <div
                    className="h-10 w-10 rounded-lg grid place-items-center transition-transform group-hover:scale-110"
                    style={{ background: m.tint, color: m.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-[hsl(var(--neutral-400))] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    style={{ color: m.color }}
                  />
                </div>
                <div className="relative mt-3">
                  <div className="font-display font-extrabold text-sm text-[hsl(var(--navy-900))] leading-tight">
                    {m.label}
                  </div>
                  <div className="mt-1 text-xs text-[hsl(var(--neutral-600))] leading-snug">
                    {m.desc}
                  </div>
                </div>
              </>
            );
            const cardClass =
              "group relative overflow-hidden rounded-xl border bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md";
            return isExternal ? (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                style={{ borderColor: "hsl(var(--neutral-150))" }}
              >
                {cardBody}
              </a>
            ) : (
              <Link key={m.label}
                href={m.href}
                className={cardClass}
                style={{ borderColor: "hsl(var(--neutral-150))" }}
              >
                {cardBody}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
