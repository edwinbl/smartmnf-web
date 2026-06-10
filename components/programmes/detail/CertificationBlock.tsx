import { Award, BadgeCheck, Linkedin } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

export const CertificationBlock = ({ programme }: { programme: ProgrammeItem }) => (
  <div>
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Certification & recognition</h2>
    <div
      className="mt-4 cii-card p-6 grid sm:grid-cols-3 gap-4"
      style={{ background: "linear-gradient(135deg, hsl(var(--navy-050)) 0%, white 60%)" }}
    >
      <div>
        <Award className="h-8 w-8 text-[hsl(var(--red-600))]" />
        <div className="mt-2 font-display font-bold text-[hsl(var(--navy-900))]">Co-branded certificate</div>
        <p className="text-xs text-[hsl(var(--neutral-700))] mt-1">
          Issued on successful completion of {programme.title}.
        </p>
      </div>
      <div>
        <BadgeCheck className="h-8 w-8 text-[hsl(var(--orange-600))]" />
        <div className="mt-2 font-display font-bold text-[hsl(var(--navy-900))]">Industry recognition</div>
        <p className="text-xs text-[hsl(var(--neutral-700))] mt-1">
          Recognised by CII Smart Manufacturing ecosystem partners.
        </p>
      </div>
      <div>
        <Linkedin className="h-8 w-8 text-[hsl(var(--navy-700))]" />
        <div className="mt-2 font-display font-bold text-[hsl(var(--navy-900))]">Shareable digital badge</div>
        <p className="text-xs text-[hsl(var(--neutral-700))] mt-1">
          Add to your LinkedIn profile and verified credential wallet.
        </p>
      </div>
    </div>
  </div>
);
