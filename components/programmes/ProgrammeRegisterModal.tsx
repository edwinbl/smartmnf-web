"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StepProgress } from "@/components/auth/StepProgress";
import { CheckCircle2, ArrowRight, ArrowLeft, CalendarPlus, X } from "lucide-react";
import { programmesStorage, type RegistrationDraft } from "@/lib/programmesStorage";
import { downloadIcs } from "@/lib/ics";
import { toast } from "@/hooks/use-toast";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  programme: ProgrammeItem | null;
  batchId?: string;
}

export const ProgrammeRegisterModal = ({ open, onOpenChange, programme, batchId }: Props) => {
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<RegistrationDraft>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open && programme) {
      setStep(1);
      setSubmitted(false);
      setDraft(programmesStorage.getDraft(programme.slug));
    }
  }, [open, programme]);

  useEffect(() => {
    if (programme && open) programmesStorage.saveDraft(programme.slug, draft);
  }, [draft, programme, open]);

  if (!programme) return null;
  const batch = batchId ? programme.batches?.find((b) => b.id === batchId) : undefined;

  const set = <K extends keyof RegistrationDraft>(k: K, v: RegistrationDraft[K]) =>
    setDraft((d) => ({ ...d, [k]: v }));

  const validStep1 = !!(draft.name && draft.email && draft.organization && draft.mobile);
  const validStep2 = !!(draft.industry && draft.role && draft.orgSize);

  const submit = () => {
    programmesStorage.addRegistered(programme.slug);
    programmesStorage.clearDraft(programme.slug);
    setSubmitted(true);
    toast({ title: "Seat reserved", description: programme.title });
  };

  const addToCalendar = () => downloadIcs(programme, batch);


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <div
          className="p-6 text-white relative"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
        >
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 h-8 w-8 rounded-full grid place-items-center hover:bg-white/10"
            aria-label="Close registration dialog"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-white/70">
            {programme.type}
          </div>
          <h2 className="font-display font-bold text-xl mt-1">{programme.title}</h2>
          <div className="text-xs text-white/70 mt-1">
            {batch ? `${batch.label} Â· ${batch.dates}` : `${programme.startDate} Â· ${programme.duration}`}
          </div>
        </div>

        <div className="p-6 space-y-5">
          {!submitted && (
            <StepProgress
              current={step}
              total={3}
              label={step === 1 ? "Basic info" : step === 2 ? "Professional context" : "Confirm"}
            />
          )}

          {submitted ? (
            <div className="text-center py-4 animate-fade-in">
              <div className="mx-auto h-14 w-14 rounded-full bg-[hsl(180_55%_94%)] grid place-items-center text-[hsl(180_60%_30%)] mb-3">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">Your seat is reserved</h3>
              <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
                We've sent a confirmation to <span className="font-semibold">{draft.email}</span>. The programme team will reach out shortly.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-2 justify-center">
                <button onClick={addToCalendar} className="btn-outline">
                  <CalendarPlus className="h-4 w-4" /> Add to calendar
                </button>
                <button onClick={() => onOpenChange(false)} className="btn-primary">
                  Done
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-1.5">
                <Label htmlFor="reg-name">Full name<span aria-hidden className="text-[hsl(var(--red-600))]"> *</span></Label>
                <Input
                  id="reg-name"
                  placeholder="e.g. Priya Sharma"
                  aria-required="true"
                  value={draft.name ?? ""}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-org">Organization<span aria-hidden className="text-[hsl(var(--red-600))]"> *</span></Label>
                <Input
                  id="reg-org"
                  placeholder="Company or institution"
                  aria-required="true"
                  value={draft.organization ?? ""}
                  onChange={(e) => set("organization", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-email">Work email<span aria-hidden className="text-[hsl(var(--red-600))]"> *</span></Label>
                <Input
                  id="reg-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  aria-required="true"
                  value={draft.email ?? ""}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-mobile">Mobile number<span aria-hidden className="text-[hsl(var(--red-600))]"> *</span></Label>
                <Input
                  id="reg-mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  aria-required="true"
                  value={draft.mobile ?? ""}
                  onChange={(e) => set("mobile", e.target.value)}
                />
              </div>
            </div>
          ) : step === 2 ? (
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-1.5">
                <Label htmlFor="reg-industry">Industry<span aria-hidden className="text-[hsl(var(--red-600))]"> *</span></Label>
                <Input
                  id="reg-industry"
                  placeholder="e.g. Automotive"
                  aria-required="true"
                  value={draft.industry ?? ""}
                  onChange={(e) => set("industry", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-role">Role / Designation<span aria-hidden className="text-[hsl(var(--red-600))]"> *</span></Label>
                <Input
                  id="reg-role"
                  placeholder="e.g. Plant Head"
                  aria-required="true"
                  value={draft.role ?? ""}
                  onChange={(e) => set("role", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-orgsize">Organization size<span aria-hidden className="text-[hsl(var(--red-600))]"> *</span></Label>
                <Select
                  value={draft.orgSize ?? ""}
                  onValueChange={(v) => set("orgSize", v)}
                >
                  <SelectTrigger id="reg-orgsize" aria-required="true">
                    <SelectValue placeholder="Select organization size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1â50">1â50</SelectItem>
                    <SelectItem value="51â250">51â250</SelectItem>
                    <SelectItem value="251â1,000">251â1,000</SelectItem>
                    <SelectItem value="1,000+">1,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-objectives">What do you want to take away? <span className="text-[hsl(var(--neutral-500))] font-normal">(optional)</span></Label>
                <Textarea
                  id="reg-objectives"
                  className="min-h-[88px]"
                  placeholder="Share your goals for this programme"
                  value={draft.objectives ?? ""}
                  onChange={(e) => set("objectives", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <div className="cii-card p-4 bg-[hsl(var(--neutral-50))]">
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--navy-700))] mb-2">
                  Summary
                </div>
                <dl className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Programme</dt><dd className="font-semibold text-[hsl(var(--navy-900))] text-right">{programme.title}</dd></div>
                  {batch && (
                    <>
                      <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Batch</dt><dd className="font-semibold text-[hsl(var(--navy-900))] text-right">{batch.label}</dd></div>
                      <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Dates</dt><dd className="font-semibold text-[hsl(var(--navy-900))]">{batch.dates}</dd></div>
                      <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Location</dt><dd className="font-semibold text-[hsl(var(--navy-900))] text-right">{batch.location}</dd></div>
                    </>
                  )}
                  {!batch && <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Starts</dt><dd className="font-semibold text-[hsl(var(--navy-900))]">{programme.startDate}</dd></div>}
                  <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Duration</dt><dd className="font-semibold text-[hsl(var(--navy-900))]">{programme.duration}</dd></div>
                  <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Mode</dt><dd className="font-semibold text-[hsl(var(--navy-900))]">{programme.mode}</dd></div>
                  {programme.fee && <div className="flex justify-between"><dt className="text-[hsl(var(--neutral-500))]">Fee</dt><dd className="font-semibold text-[hsl(var(--navy-900))]">{programme.fee}</dd></div>}
                </dl>
              </div>
              <div className="cii-card p-4 border-[hsl(var(--orange-500))]" style={{ background: "hsl(var(--orange-100))" }}>
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--orange-600))]">
                  Programme fit
                </div>
                <p className="text-sm text-[hsl(var(--navy-800))] mt-1">
                  Recommended for your current maturity level based on your role and industry.
                </p>
              </div>
            </div>
          )}

          {!submitted && (
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={(step === 1 && !validStep1) || (step === 2 && !validStep2)}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button type="button" onClick={submit} className="btn-primary">
                  Confirm registration <CheckCircle2 className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
