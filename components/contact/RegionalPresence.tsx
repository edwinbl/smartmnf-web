import { MapPin } from "lucide-react";

const hotspots = [
  { name: "Delhi NCR", x: 42, y: 22, type: "Regional Office" },
  { name: "Mumbai", x: 25, y: 50, type: "Demo Centre" },
  { name: "Bengaluru", x: 40, y: 75, type: "Innovation Hub" },
  { name: "Chennai", x: 50, y: 78, type: "Demo Centre" },
  { name: "Hyderabad", x: 42, y: 62, type: "Academic Cluster" },
  { name: "Pune", x: 30, y: 55, type: "Industry Cluster" },
  { name: "Ahmedabad", x: 25, y: 40, type: "Industry Cluster" },
  { name: "Kolkata", x: 68, y: 42, type: "Regional Office" },
];

const legend = [
  { label: "Demo Centres", color: "hsl(var(--red-600))" },
  { label: "Regional Offices", color: "hsl(var(--navy-700))" },
  { label: "Academic Institutions", color: "hsl(var(--orange-500))" },
  { label: "Industry Clusters", color: "hsl(var(--india-green))" },
  { label: "Partner Organizations", color: "hsl(var(--navy-500))" },
];

export const RegionalPresence = () => {
  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-2xl">
          <span className="section-eyebrow">National Reach</span>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
            A connected ecosystem, across India
          </h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))]">
            Demo centres, academic institutions, regional offices and industry clusters â within reach wherever you are.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 relative aspect-[4/5] sm:aspect-[5/4] max-w-2xl mx-auto w-full">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
              <defs>
                <radialGradient id="indiaFill" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="hsl(var(--navy-100))" />
                  <stop offset="100%" stopColor="hsl(var(--navy-050))" />
                </radialGradient>
              </defs>
              {/* Stylized India outline (abstract) */}
              <path
                d="M40 8 L52 10 L60 14 L66 22 L72 30 L78 38 L74 46 L70 54 L66 62 L60 70 L52 78 L46 86 L40 90 L34 86 L28 80 L24 72 L22 62 L26 54 L24 46 L22 38 L26 30 L30 22 L34 14 Z"
                fill="url(#indiaFill)"
                stroke="hsl(var(--navy-700) / 0.3)"
                strokeWidth="0.4"
              />
            </svg>

            {hotspots.map((h, i) => (
              <div
                key={h.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "hsl(var(--red-600) / 0.4)", animationDelay: `${i * 0.3}s` }}
                />
                <span
                  className="relative block h-2.5 w-2.5 rounded-full ring-2 ring-white"
                  style={{ background: "hsl(var(--red-600))" }}
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap px-2.5 py-1.5 rounded-md bg-[hsl(var(--navy-900))] text-white text-[11px] font-semibold shadow-lg">
                  {h.name}
                  <span className="block text-[10px] text-white/70 font-normal">{h.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">Network legend</h3>
            <ul className="space-y-2.5">
              {legend.map((l) => (
                <li key={l.label} className="flex items-center gap-3 text-sm text-[hsl(var(--neutral-700))]">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color }} />
                  {l.label}
                </li>
              ))}
            </ul>
            <div className="cii-card p-4 mt-6 flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[hsl(var(--red-600))]" />
              <div className="text-xs text-[hsl(var(--neutral-700))]">
                Looking for a centre near you? Mention your city in the form and we'll connect you to the nearest hub.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
