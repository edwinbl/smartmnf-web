import { Gauge, Layers, Users, Network } from "lucide-react";
import { Link } from "react-router-dom";
import logoSrc from "@/assets/cii-smart-mfg-logo.png";

const benefits = [
  { Icon: Gauge, label: "Assess maturity", desc: "Benchmark your Industry 4.0 readiness" },
  { Icon: Layers, label: "Access solutions", desc: "Curated tools, partners and playbooks" },
  { Icon: Users, label: "Connect with experts", desc: "1:1 guidance from industry leaders" },
  { Icon: Network, label: "Join the ecosystem", desc: "Government, OEMs, academia and MSMEs" },
];

export const AuthBrandPanel = () => {
  return (
    <div className="relative h-full w-full overflow-hidden text-white blueprint-grid"
      style={{ background: "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)" }}
    >
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "hsl(var(--orange-500))" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "hsl(var(--navy-500))" }}
      />

      {/* Animated orbital lines */}
      <svg
        aria-hidden
        className="absolute inset-0 m-auto opacity-30"
        width="640" height="640" viewBox="0 0 640 640" fill="none"
      >
        <g stroke="white" strokeWidth="0.6">
          <circle cx="320" cy="320" r="120" className="gear-spin-slow" style={{ transformOrigin: "320px 320px" }} />
          <circle cx="320" cy="320" r="200" strokeDasharray="2 6" />
          <circle cx="320" cy="320" r="280" strokeDasharray="1 9" className="gear-spin-fast" style={{ transformOrigin: "320px 320px" }} />
        </g>
        <g fill="white">
          <circle cx="320" cy="200" r="4" />
          <circle cx="440" cy="320" r="4" />
          <circle cx="320" cy="440" r="4" />
          <circle cx="200" cy="320" r="4" />
        </g>
      </svg>

      <div className="relative z-10 h-full flex flex-col p-10 lg:p-12 xl:p-16">
        <Link to="/" className="inline-flex items-center self-start" aria-label="Home">
          <img
            src={logoSrc}
            alt="CII Smart Manufacturing"
            className="h-11 w-auto brightness-0 invert"
          />
        </Link>

        <div className="mt-auto">
          <p className="eyebrow text-white/70 mb-4">Industry 4.0 Platform</p>
          <h2 className="font-display text-[34px] xl:text-[40px] font-bold leading-[1.1]">
            Accelerate Your Industry 4.0 Journey
          </h2>
          <p className="mt-4 text-white/75 text-[15px] max-w-md leading-relaxed">
            India's guided ecosystem for smart manufacturing â from readiness assessment to solutions, training and a curated partner network.
          </p>

          <ul className="mt-8 space-y-4 max-w-md">
            {benefits.map(({ Icon, label, desc }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10 border border-white/15 shrink-0">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-white/65">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-xs text-white/75">
          Convened by the Confederation of Indian Industry
        </p>
      </div>
    </div>
  );
};
