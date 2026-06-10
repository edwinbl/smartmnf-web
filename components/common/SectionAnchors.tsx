"use client";

import { ListOrdered } from "lucide-react";

type Anchor = { id: string; label: string };

export const SectionAnchors = ({
  sections,
  title = "Jump to section",
}: {
  sections: Anchor[];
  title?: string;
}) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
      // Move keyboard focus to the target so screen reader / Tab order continues from the section.
      const prevTabIndex = el.getAttribute("tabindex");
      if (prevTabIndex === null) el.setAttribute("tabindex", "-1");
      (el as HTMLElement).focus({ preventScroll: true });
    }
  };

  return (
    <nav
      aria-label={title}
      className="mb-8 rounded-xl border border-[hsl(var(--navy-100))] bg-[hsl(var(--navy-050))] p-4 md:p-5"
    >
      <div className="flex items-center gap-2 mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
        <ListOrdered className="h-3.5 w-3.5" />
        {title}
      </div>
      <ul className="flex flex-wrap gap-2">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => onClick(e, s.id)}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-[hsl(var(--navy-100))] bg-white text-[13px] font-medium text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--navy-800))] hover:text-white hover:border-[hsl(var(--navy-800))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--navy-600))] transition-colors"
            >
              <span className="font-numeric text-[11px] text-[hsl(var(--neutral-500))] group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
