import * as React from "react";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const AuthCard = ({ title, subtitle, eyebrow, children, footer, className }: AuthCardProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[480px] mx-auto bg-card rounded-2xl border border-[hsl(var(--neutral-150))]",
        "shadow-[0_10px_40px_-12px_hsl(var(--navy-800)/0.12)] p-6 sm:p-8 lg:p-10",
        "animate-fade-in",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow text-[hsl(var(--red-600))] mb-3">{eyebrow}</p>
      )}
      <h1 className="font-display text-[26px] sm:text-[30px] font-bold text-[hsl(var(--navy-900))] leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-[15px] text-[hsl(var(--neutral-500))]">{subtitle}</p>
      )}
      <div className="mt-6 sm:mt-7">{children}</div>
      {footer && (
        <div className="mt-6 pt-5 border-t border-[hsl(var(--neutral-150))] text-center text-sm text-[hsl(var(--neutral-500))]">
          {footer}
        </div>
      )}
    </div>
  );
};
