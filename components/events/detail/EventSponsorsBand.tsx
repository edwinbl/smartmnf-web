interface Props {
  partners: string[];
}

export const EventSponsorsBand = ({ partners }: Props) => (
  <section className="space-y-4">
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Ecosystem Partners</h2>
    <div className="cii-card p-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {partners.map((p) => (
          <div
            key={p}
            className="h-16 rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] grid place-items-center text-sm font-display font-bold text-[hsl(var(--navy-700))]"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);
