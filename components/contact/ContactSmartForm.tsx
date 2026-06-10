"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { ArrowRight, Upload, Lock } from "lucide-react";
import { FloatingInput } from "@/components/auth/FloatingInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { isEmail, isMobile, required } from "@/lib/authValidation";
import { INTENTS, type IntentKey } from "./ContactIntentGrid";
import { cn } from "@/lib/utils";

interface Props {
  intent: IntentKey | null;
  embedded?: boolean;
}

const CTA_LABEL: Record<IntentKey, string> = {
  journey: "Request Consultation",
  partnership: "Request Consultation",
  training: "Request Consultation",
  solution: "Connect With Team",
  support: "Submit Request",
};

export const ContactSmartForm = ({ intent, embedded = false }: Props) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (intent && formRef.current) {
      const top = formRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setSubmitted(false);
    }
  }, [intent]);

  const setField = (k: string, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((s) => ({ ...s, [k]: null }));
  };

  const validate = () => {
    const e: Record<string, string | null> = {};
    if (!required(values.fullName || "")) e.fullName = "Full name is required";
    if (!required(values.organization || "")) e.organization = "Organization is required";
    if (!isEmail(values.email || "")) e.email = "Enter a valid email";
    if (!isMobile(values.mobile || "")) e.mobile = "Enter a valid 10-digit mobile";
    if (!required(values.message || "")) e.message = "Tell us a bit about your request";
    setErrors(e);
    return Object.values(e).every((v) => !v);
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!intent) {
      toast.error("Please select an intent above first.");
      return;
    }
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    toast.success("Request received â our team will reach out shortly.");
    setSubmitted(true);
    setValues({});
    setFileName(null);
  };

  const activeMeta = intent ? INTENTS.find((i) => i.key === intent) : null;

  const Inner = (
    <div ref={formRef} className={cn("cii-card p-6 sm:p-8", !embedded && "max-w-3xl mx-auto sm:p-10")}>
          <div className="flex items-start gap-4">
            <div
              className="grid place-items-center h-11 w-11 rounded-md text-white shrink-0"
              style={{ background: "hsl(var(--navy-700))" }}
            >
              {activeMeta ? <activeMeta.Icon className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
            </div>
            <div>
              <span className="section-eyebrow">Step 2</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight mt-1">
                {activeMeta ? activeMeta.title : "Tell us about you"}
              </h2>
              <p className="text-sm text-[hsl(var(--neutral-700))] mt-1.5">
                {activeMeta
                  ? "We've tailored the form for your request â fields adapt as you go."
                  : "Pick an intent above to personalize this form."}
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="mt-8 p-6 rounded-md border text-center" style={{ borderColor: "hsl(var(--india-green) / 0.4)", background: "hsl(var(--india-green) / 0.06)" }}>
              <h3 className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">Thanks â your request is in.</h3>
              <p className="text-sm text-[hsl(var(--neutral-700))] mt-1">A member of our team will be in touch within 1â2 business days.</p>
              <button onClick={() => setSubmitted(false)} className="link-arrow mt-4">Submit another request â</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput label="Full Name" value={values.fullName || ""} onChange={(e) => setField("fullName", e.target.value)} error={errors.fullName} />
                <FloatingInput label="Organization Name" value={values.organization || ""} onChange={(e) => setField("organization", e.target.value)} error={errors.organization} />
                <FloatingInput label="Email" type="email" value={values.email || ""} onChange={(e) => setField("email", e.target.value)} error={errors.email} />
                <FloatingInput label="Mobile Number" inputMode="numeric" value={values.mobile || ""} onChange={(e) => setField("mobile", e.target.value)} error={errors.mobile} />
              </div>

              {intent && (
                <div key={intent} className="animate-fade-in space-y-5 pt-2">
                  <div className="h-px w-full" style={{ background: "hsl(var(--neutral-150))" }} />
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
                    {activeMeta?.title} details
                  </p>
                  <IntentFields intent={intent} values={values} setField={setField} fileName={fileName} setFileName={setFileName} />
                </div>
              )}

              <div>
                <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))] block mb-2">Message</label>
                <textarea
                  rows={4}
                  value={values.message || ""}
                  onChange={(e) => setField("message", e.target.value)}
                  placeholder="Share a brief note about what you're looking forâ¦"
                  className={cn(
                    "w-full rounded-md border bg-background px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy-600)/0.15)] focus:border-[hsl(var(--navy-600))] transition-colors",
                    errors.message ? "border-[hsl(var(--red-600))]" : "border-[hsl(var(--neutral-200))]",
                  )}
                />
                {errors.message && <p className="mt-1.5 text-[13px] font-medium text-[hsl(var(--red-600))]" role="alert">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={!intent}
                className="btn-primary w-full sm:w-auto min-h-11 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {intent ? CTA_LABEL[intent] : "Select an intent above"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </button>
              <p className="text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed">By submitting you agree to be contacted by the CII Smart Manufacturing team about your request.</p>
            </form>
          )}
    </div>
  );

  if (embedded) return Inner;

  return (
    <section className="py-12 lg:py-20 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">{Inner}</div>
    </section>
  );
};

const SelectField = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) => (
  <div>
    <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))] block mb-2">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-[52px]">
        <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o} value={o}>{o}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const IntentFields = ({
  intent,
  values,
  setField,
  fileName,
  setFileName,
}: {
  intent: IntentKey;
  values: Record<string, string>;
  setField: (k: string, v: string) => void;
  fileName: string | null;
  setFileName: (n: string | null) => void;
}) => {
  if (intent === "partnership") {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField label="Organization Type" value={values.orgType || ""} onChange={(v) => setField("orgType", v)}
          options={["Enterprise", "MSME", "Academic Institution", "Government Body", "Industry Association", "Technology Provider"]} />
        <SelectField label="Collaboration Interest" value={values.collabInterest || ""} onChange={(v) => setField("collabInterest", v)}
          options={["Research & Innovation", "Co-branded Programmes", "Demo Centre", "Joint Events", "Knowledge Exchange"]} />
        <div className="sm:col-span-2">
          <FloatingInput label="Partnership Goals" value={values.partnershipGoals || ""} onChange={(e) => setField("partnershipGoals", e.target.value)} />
        </div>
      </div>
    );
  }
  if (intent === "training") {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField label="Training Area" value={values.trainingArea || ""} onChange={(v) => setField("trainingArea", v)}
          options={["Industry 4.0 Foundations", "Smart Factory Operations", "Data & Analytics", "Cybersecurity", "Leadership for Digital", "Sustainability"]} />
        <SelectField label="Team Size" value={values.teamSize || ""} onChange={(v) => setField("teamSize", v)}
          options={["1â10", "11â50", "51â200", "201â500", "500+"]} />
        <div className="sm:col-span-2">
          <SelectField label="Preferred Programme Type" value={values.programmeType || ""} onChange={(v) => setField("programmeType", v)}
            options={["Workshop", "Cohort Programme", "Executive Masterclass", "On-site Training", "Self-paced Online"]} />
        </div>
      </div>
    );
  }
  if (intent === "solution") {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField label="Solution Category" value={values.solutionCategory || ""} onChange={(v) => setField("solutionCategory", v)}
          options={["IIoT & Connectivity", "MES / SCADA", "AI / Analytics", "Robotics & Automation", "Cybersecurity", "Sustainability", "ERP / Cloud"]} />
        <SelectField label="Industry Focus" value={values.industryFocus || ""} onChange={(v) => setField("industryFocus", v)}
          options={["Automotive", "Pharma", "FMCG", "Electronics", "Heavy Engineering", "Textiles", "Cross-industry"]} />
        <div className="sm:col-span-2">
          <FloatingInput label="Website URL" type="url" placeholder="https://" value={values.website || ""} onChange={(e) => setField("website", e.target.value)} />
        </div>
      </div>
    );
  }
  if (intent === "support") {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField label="Issue Category" value={values.issueCategory || ""} onChange={(v) => setField("issueCategory", v)}
          options={["Account & Login", "Assessment", "Content / Resources", "Bug Report", "Feature Request", "Other"]} />
        <SelectField label="Priority Level" value={values.priority || ""} onChange={(v) => setField("priority", v)}
          options={["Low", "Medium", "High", "Urgent"]} />
        <div className="sm:col-span-2">
          <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))] block mb-2">
            Screenshot / Attachment (optional)
          </label>
          <label
            htmlFor="support-file"
            className="flex items-center gap-3 px-4 py-4 rounded-md border border-dashed cursor-pointer hover:bg-[hsl(var(--neutral-100))] transition-colors"
            style={{ borderColor: "hsl(var(--neutral-200))" }}
          >
            <Upload className="h-5 w-5 text-[hsl(var(--navy-700))]" />
            <span className="text-sm text-[hsl(var(--neutral-700))]">
              {fileName ? fileName : "Click to upload â PNG, JPG or PDF up to 10MB"}
            </span>
            <input
              id="support-file"
              type="file"
              className="hidden"
              accept="image/*,.pdf"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
        </div>
      </div>
    );
  }
  // journey
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <SelectField label="Industry Sector" value={values.sector || ""} onChange={(v) => setField("sector", v)}
        options={["Automotive", "Pharma", "FMCG", "Electronics", "Heavy Engineering", "Textiles", "Other"]} />
      <SelectField label="Current Digital Maturity" value={values.maturity || ""} onChange={(v) => setField("maturity", v)}
        options={["Just Starting", "Exploring", "Piloting", "Scaling", "Mature"]} />
      <div className="sm:col-span-2">
        <FloatingInput label="Key Business Challenges" value={values.challenges || ""} onChange={(e) => setField("challenges", e.target.value)} />
      </div>
    </div>
  );
};
