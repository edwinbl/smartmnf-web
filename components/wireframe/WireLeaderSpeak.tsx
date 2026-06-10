import { WireSection } from "./WireSection";
import { Quote } from "lucide-react";
import leaderPortraitAsset from "@/assets/dilip-sawhney.webp.asset.json";

export const WireLeaderSpeak = () => {
  return (
    <WireSection id="leader-speak" alt>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
        {/* Portrait */}
        <div className="relative flex justify-center">
          <div className="relative aspect-square w-full max-w-[420px] rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-cii-orange/20">
            <img
              src={leaderPortraitAsset.url}
              alt="CII leadership portrait"
              width={768}
              height={768}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2">
              <span className="cii-chip cii-chip-orange">Leader Message</span>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-full bg-cii-red/10 blur-2xl" />
          <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-cii-orange/10 blur-2xl" />
        </div>

        {/* Copy */}
        <div>
          <div className="section-eyebrow mb-3">Leader Speak</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            A message from CII leadership
          </h2>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
            Hear from CII leadership on the role of smart manufacturing in strengthening
            India's manufacturing competitiveness.
          </p>

          <div className="mt-7 p-5 rounded-md border border-[hsl(var(--neutral-150))] bg-white relative">
            <Quote className="absolute -top-3 left-5 h-6 w-6 text-cii-orange bg-white px-1" />
            <p className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed italic">
              "Industry 4.0 adoption is no longer optional for India's MSMEs â it is the foundation
              for global competitiveness, quality leadership and sustainable growth."
            </p>
            <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))]">
              <div className="font-display font-bold text-navy-800 text-sm">Mr. Dilip Sawhney</div>
              <div className="text-xs text-[hsl(var(--neutral-500))] mt-0.5 leading-relaxed">
                Chairman, CII National Committee on Smart Manufacturing, and Managing Director, Rockwell Automation India Pvt Ltd
              </div>
            </div>
          </div>

        </div>
      </div>
    </WireSection>
  );
};
