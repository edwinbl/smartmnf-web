import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AuthBrandPanel } from "./AuthBrandPanel";
import logoSrc from "@/assets/cii-smart-mfg-logo.png";

interface AuthLayoutProps {
  children: React.ReactNode;
  /** Mobile compact tagline shown above the card */
  mobileTagline?: string;
}

export const AuthLayout = ({ children, mobileTagline = "Accelerate Your Industry 4.0 Journey" }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-[hsl(var(--neutral-50))] lg:grid lg:grid-cols-[40%_60%]">
      {/* Mobile header band */}
      <div
        className="lg:hidden relative overflow-hidden text-white px-6 pt-5 pb-7"
        style={{ background: "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)" }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-16 h-56 w-56 rounded-full opacity-25 blur-3xl"
          style={{ background: "hsl(var(--orange-500))" }}
        />
        <div className="relative flex items-center justify-between">
          <Link to="/" aria-label="Home" className="inline-flex items-center">
            <img src={logoSrc} alt="CII Smart Manufacturing" className="h-9 w-auto brightness-0 invert" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
        </div>
        <p className="relative mt-3 text-[13px] text-white/80 leading-snug max-w-[24ch]">
          {mobileTagline}
        </p>
      </div>

      {/* Brand panel â desktop */}
      <aside className="hidden lg:block sticky top-0 h-screen">
        <AuthBrandPanel />
      </aside>

      {/* Form column */}
      <main className="flex flex-col">
        <div className="hidden lg:flex h-16 items-center justify-end px-10">
          <Link to="/" className="text-sm font-semibold text-[hsl(var(--neutral-500))] hover:text-[hsl(var(--navy-800))] inline-flex items-center gap-1.5">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8 lg:py-6">
          {children}
        </div>
      </main>
    </div>
  );
};
