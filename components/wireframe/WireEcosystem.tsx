import { WireSection } from "./WireSection";
import { Factory, Users, Cpu, Building2, GraduationCap, Landmark, ArrowRight } from "lucide-react";

const stakeholders = [
  { icon: Factory, label: "MSMEs", desc: "Centred in the journey" },
  { icon: Users, label: "Domain experts", desc: "Advisory & guidance" },
  { icon: Cpu, label: "Technology providers", desc: "Practical solutions" },
  { icon: Building2, label: "Larger manufacturers", desc: "Anchor partners" },
  { icon: GraduationCap, label: "Academia", desc: "Research & talent" },
  { icon: Landmark, label: "Institutions", desc: "Policy & support" },
];

export const WireEcosystem = () => {
  return (
    <WireSection id="ecosystem" alt>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
        <div>
          <div className="section-eyebrow mb-3">Ecosystem</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            A platform connecting India's smart manufacturing ecosystem
          </h2>
          <p className="mt-5 text-base text-[hsl(var(--neutral-700))] max-w-xl">
            The portal brings together MSMEs, experts, technology providers, larger manufacturers, academia and
            institutions around practical Industry 4.0 adoption.
          </p>
          <div className="mt-7">
            <a href="https://www.smartmfgindia.com/Assesment.aspx#SmartContactus" className="btn-secondary">
              Express interest <ArrowRight className="!h-4 !w-4" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stakeholders.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="cii-card p-5 flex items-start gap-3">
                <div className="h-10 w-10 rounded-md grid place-items-center bg-[hsl(var(--navy-100))] text-navy-700 shrink-0">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-navy-800 text-sm">{s.label}</div>
                  <div className="text-xs text-[hsl(var(--neutral-500))] mt-0.5">{s.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WireSection>
  );
};
