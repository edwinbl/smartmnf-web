import { Mail, Phone } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

export const ProgrammeContacts = ({ programme }: { programme: ProgrammeItem }) => {
  if (!programme.contacts?.length) return null;
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">For any queries</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        {programme.contacts.map((c) => (
          <div key={c.email} className="cii-card p-4">
            <div className="font-display font-bold text-[hsl(var(--navy-900))]">{c.name}</div>
            <a href={`mailto:${c.email}`} className="mt-2 flex items-center gap-2 text-sm text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]">
              <Mail className="h-4 w-4" /> {c.email}
            </a>
            <a href={`tel:${c.phone.replace(/[^+\d]/g, "")}`} className="mt-1 flex items-center gap-2 text-sm text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]">
              <Phone className="h-4 w-4" /> {c.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
