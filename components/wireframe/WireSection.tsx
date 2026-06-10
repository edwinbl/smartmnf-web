import { ReactNode } from "react";

interface WireSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
  // legacy
  tag?: string;
}

export const WireSection = ({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  alt = false,
  tag,
}: WireSectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alt ? "bg-[hsl(var(--neutral-50))]" : "bg-white"} ${className}`}
    >
      <div className="container-cii">
        {(eyebrow || tag) && (
          <div className="section-eyebrow mb-3">{eyebrow || tag}</div>
        )}
        {title && (
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800 max-w-3xl">
            {title}
          </h2>
        )}
        {intro && (
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-2xl">
            {intro}
          </p>
        )}
        <div className={title || intro || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
};
