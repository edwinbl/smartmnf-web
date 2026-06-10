import type { ProgrammeItem } from "@/data/programmes";

export const FeeTable = ({ programme }: { programme: ProgrammeItem }) => {
  if (!programme.feeTable?.length) return null;
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Training fee</h2>
      <p className="mt-2 text-xs text-[hsl(var(--neutral-500))]">Per participant</p>
      <div className="mt-4 cii-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[hsl(var(--navy-050))] text-left">
                <th className="px-4 py-3 font-display font-bold text-[hsl(var(--navy-900))]">Category</th>
                <th className="px-4 py-3 font-display font-bold text-[hsl(var(--navy-900))]">Large &amp; Medium Industries / PSUs</th>
                <th className="px-4 py-3 font-display font-bold text-[hsl(var(--navy-900))]">Micro &amp; Small Industries</th>
              </tr>
            </thead>
            <tbody>
              {programme.feeTable.map((row) => (
                <tr key={row.segment} className="border-t border-[hsl(var(--neutral-150))]">
                  <td className="px-4 py-3 font-semibold text-[hsl(var(--navy-900))]">{row.segment}</td>
                  <td className="px-4 py-3 text-[hsl(var(--navy-800))] font-numeric">{row.member}</td>
                  <td className="px-4 py-3 text-[hsl(var(--navy-800))] font-numeric">{row.nonMember}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {programme.feeNote && (
        <p className="mt-3 text-xs text-[hsl(var(--neutral-700))]">{programme.feeNote}</p>
      )}
    </div>
  );
};
