"use client";

import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Lock, ArrowRight } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  report: Report | null;
}

export const DownloadModal = ({ open, onOpenChange, report }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div
          className="p-6 text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <div className="h-10 w-10 rounded-md bg-white/15 grid place-items-center mb-3">
            <Lock className="h-5 w-5" />
          </div>
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="text-xl font-display font-bold text-white">
              Access this report
            </DialogTitle>
            <DialogDescription className="text-white/80 text-sm">
              {report
                ? `Create a free account to download "${report.title}", save reports and unlock personalized insights.`
                : "Create a free account to download reports, save them and unlock personalized insights."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-3">
          <Link href="/register"
            onClick={() => onOpenChange(false)}
            className="btn-primary w-full group"
          >
            Create free account
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/login"
            onClick={() => onOpenChange(false)}
            className="btn-outline w-full"
          >
            Login to your account
          </Link>

          <div className="flex items-center gap-3 py-2">
            <div className="h-px flex-1" style={{ background: "hsl(var(--neutral-200))" }} />
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))]">
              or continue with
            </span>
            <div className="h-px flex-1" style={{ background: "hsl(var(--neutral-200))" }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link href="/register"
              onClick={() => onOpenChange(false)}
              className="h-10 grid place-items-center text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              Google
            </Link>
            <Link href="/register"
              onClick={() => onOpenChange(false)}
              className="h-10 grid place-items-center text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              LinkedIn
            </Link>
          </div>

          <p className="text-[11px] text-[hsl(var(--neutral-500))] text-center mt-2">
            By continuing, you agree to our Terms &amp; Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
