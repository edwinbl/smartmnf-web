import { WireSection } from "./WireSection";
import { ArrowRight } from "lucide-react";
import autoVision from "@/assets/spotlight-auto-vision.jpg";
import textile from "@/assets/spotlight-textile.jpg";
import traceability from "@/assets/spotlight-traceability.jpg";

const resources = [
  {
    image: autoVision,
    sector: "FMCG",
    type: "Case Study",
    title: "B&R Industrial Automation Pvt. Ltd.",
    summary:
      "B&R combines cutting-edge automation technology with engineering expertise to deliver intelligent solutions for modern manufacturing.",
    cta: "Read case study",
  },
  {
    image: traceability,
    sector: "Engineering - Industrial Equipments",
    type: "Case Study",
    title: "Siemens PLM Software",
    summary:
      "Transformer device manufacturer uses SIMATIC IT Preactor to increase capacity utilization and improve response to customers.",
    cta: "Read case study",
  },
  {
    image: textile,
    sector: "Industry 4.0",
    type: "Report",
    title: "Industry 4.0 Adoption and Strategic Roadmap for Indian Manufacturing",
    summary:
      "Explore how digital technologies are reshaping Indiaâs manufacturing landscape through Industry 4.0.",
    cta: "Explore report",
  },

];

export const WireResources = () => {
  return (
    <WireSection id="resources" alt>
      <div className="mb-6">
        <div className="section-eyebrow mb-2">Solutions Spotlight</div>
        <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
          Learn from practical examples and resources
        </h2>
        <p className="mt-2 text-base text-[hsl(var(--neutral-700))] max-w-2xl">
          Case studies, reports and e-directories from manufacturers who have implemented Industry 4.0 solutions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <article
            key={r.title}
            className="cii-card overflow-hidden flex flex-col bg-white"
          >
            <div className="h-40 w-full overflow-hidden bg-[hsl(var(--neutral-150))]">
              <img
                src={r.image}
                alt={r.title}
                loading="lazy"
                width={800}
                height={576}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-sm font-semibold text-navy-700">
                {r.sector} <span className="text-[hsl(var(--neutral-400))] mx-1">Â·</span> {r.type}
              </div>
              <h3 className="mt-3 font-display font-bold text-navy-800 text-[18px] leading-snug">
                {r.title}
              </h3>
              <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] flex-1">
                {r.summary}
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cii-orange hover:underline"
              >
                {r.cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
