import Link from "next/link";
import { WireSection } from "./WireSection";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const programmes = [
  {
    title: "CII-JICA-AOTS Training Programme on Industry 4.0",
    date: "12â14 Jun 2026",
    format: "In-person Â· Pune",
    audience: "MSME leadership",
    tag: "Bootcamp",
  },
  {
    title: "CII & IITD-AIA FSM Two-Days Masterclass",
    date: "27 Jun 2026",
    format: "Online Â· 4 hrs",
    audience: "Quality & Operations heads",
    tag: "Masterclass",
  },
  {
    title: "CII & RA Two-Day Training Programme on Industry 4.0",
    date: "08â09 Jul 2026",
    format: "Hybrid Â· Bengaluru",
    audience: "Plant heads, Sustainability leads",
    tag: "Programme",
  },
];

export const WireProgrammes = () => {
  return (
    <WireSection id="programmes" alt>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <div className="section-eyebrow mb-3">Programmes & Training</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Upcoming CII programmes
          </h2>
          <p className="mt-4 text-base text-[hsl(var(--neutral-700))] max-w-xl">
            Workshops, masterclasses and structured adoption programmes â designed for MSMEs and mid-market
            manufacturers.
          </p>
        </div>
        <Link href="/programmes" className="link-arrow">
          View all programmes <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programmes.map((p) => (
          <article key={p.title} className="cii-card overflow-hidden flex flex-col">
            <div
              className="h-32 relative"
              style={{
                background: "linear-gradient(135deg, hsl(var(--navy-800)) 0%, hsl(var(--navy-600)) 100%)",
              }}
            >
              <div className="absolute inset-0 blueprint-grid opacity-40" />
              <span className="absolute top-4 left-4 cii-chip cii-chip-orange">{p.tag}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display font-bold text-navy-800 text-[17px] leading-snug">{p.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--neutral-700))]">
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-navy-600" /> {p.date}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-navy-600" /> {p.format}
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-navy-600" /> {p.audience}
                </li>
              </ul>
              <a href="#" className="link-arrow mt-5">
                View details <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
