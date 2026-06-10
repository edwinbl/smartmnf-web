import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  BookOpen,
  GraduationCap,
  Layers,
} from "lucide-react";

const recos = [
  {
    title: "Take the Readiness Assessment",
    description:
      "Discover where your operations stand on smart manufacturing readiness.",
    Icon: Gauge,
    to: "/readiness-assessment",
    cta: "Assess readiness",
    accent: "hsl(var(--navy-800))",
  },
  {
    title: "Explore Case Studies",
    description:
      "See how Indian manufacturers have unlocked measurable transformation outcomes.",
    Icon: BookOpen,
    to: "/case-studies",
    cta: "Browse stories",
    accent: "hsl(var(--orange-500))",
  },
  {
    title: "Discover Solutions",
    description:
      "Connect with ecosystem partners delivering the capabilities you need.",
    Icon: Layers,
    to: "/about",
    cta: "View solutions",
    accent: "hsl(var(--india-green))",
  },
  {
    title: "Programmes & Training",
    description:
      "Build leadership and workforce capability through CII's flagship programmes.",
    Icon: GraduationCap,
    to: "/programmes",
    cta: "Explore programmes",
    accent: "hsl(var(--red-600))",
  },
];

export const ReportEcosystemRecommendations = () => {
  return (
    <section className="mt-14">
      <div className="section-eyebrow mb-2">Take the next step</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Turn these insights into action
      </h2>
      <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl leading-relaxed">
        Move from reading to doing â connect with assessments, success stories,
        solutions and programmes that operationalise the ideas in this report.
      </p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recos.map((r) => {
          const Icon = r.Icon;
          return (
            <Link key={r.title}
              href={r.to}
              className="group cii-card p-6 flex items-start gap-4 transition-all hover:-translate-y-0.5"
            >
              <div
                className="h-12 w-12 rounded-lg grid place-items-center text-white shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${r.accent}, hsl(var(--navy-700)))`,
                }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug group-hover:text-[hsl(var(--red-600))] transition-colors">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed">
                  {r.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
                  {r.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
