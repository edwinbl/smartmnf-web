import { WireSection } from "./WireSection";
import { ExternalLink } from "lucide-react";

type Logo = { name: string; svg: JSX.Element };

const logos: Logo[] = [
  {
    name: "Siemens",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <text x="100" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="32" fill="#009999">SIEMENS</text>
      </svg>
    ),
  },
  {
    name: "Bosch",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <circle cx="30" cy="30" r="22" fill="none" stroke="#E20015" strokeWidth="4" />
        <text x="110" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#E20015">BOSCH</text>
      </svg>
    ),
  },
  {
    name: "Tata",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <text x="100" y="42" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="34" fill="#486AAE">TATA</text>
      </svg>
    ),
  },
  {
    name: "Infosys",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <text x="100" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="30" fill="#007CC3">Infosys</text>
      </svg>
    ),
  },
  {
    name: "Mahindra",
    svg: (
      <svg viewBox="0 0 220 60" className="h-10 w-auto">
        <text x="110" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" fill="#E31E24">MAHINDRA</text>
      </svg>
    ),
  },
  {
    name: "L&T",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <rect x="40" y="12" width="120" height="36" fill="#0066B3" />
        <text x="100" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill="#fff">L&amp;T</text>
      </svg>
    ),
  },
  {
    name: "Wipro",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <text x="100" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="30" fill="#341F65">wipro</text>
      </svg>
    ),
  },
  {
    name: "Godrej",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <text x="100" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#00833E">GODREJ</text>
      </svg>
    ),
  },
  {
    name: "Ashok Leyland",
    svg: (
      <svg viewBox="0 0 240 60" className="h-10 w-auto">
        <text x="120" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#D71921">ASHOK LEYLAND</text>
      </svg>
    ),
  },
  {
    name: "JSW",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <text x="100" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="34" fill="#003DA5">JSW</text>
      </svg>
    ),
  },
  {
    name: "Hero",
    svg: (
      <svg viewBox="0 0 200 60" className="h-10 w-auto">
        <text x="100" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontStyle="italic" fontSize="32" fill="#ED1C24">HERO</text>
      </svg>
    ),
  },
  {
    name: "Reliance",
    svg: (
      <svg viewBox="0 0 220 60" className="h-10 w-auto">
        <text x="110" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" fill="#0033A0">RELIANCE</text>
      </svg>
    ),
  },
];

export const WirePartners = () => {
  const loop = [...logos, ...logos];

  return (
    <WireSection id="partners">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <div className="section-eyebrow mb-3">Partners & Knowledge Linkages</div>
          <h2 className="font-display font-bold text-[24px] md:text-[28px] leading-tight tracking-tight text-navy-800">
            Partners and Knowledge Linkages
          </h2>
          <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl">
            Institutional partners, knowledge collaborators and ecosystem linkages supporting
            the CII Smart Manufacturing portal.
          </p>
        </div>
        <a href="#" className="link-arrow">
          View all partners <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 w-44 h-24 rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] grid place-items-center px-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:border-navy-600 hover:bg-white transition-all"
              title={logo.name}
              aria-label={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </WireSection>
  );
};
