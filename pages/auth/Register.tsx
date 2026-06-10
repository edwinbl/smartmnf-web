import { useState, FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { FloatingInput } from "@/components/auth/FloatingInput";
import { StepProgress } from "@/components/auth/StepProgress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { isEmail, isMobile, required } from "@/lib/authValidation";
import { setReturnTo, getReturnTo } from "@/lib/authReturn";
import { toast } from "@/hooks/use-toast";
import { mockAuth } from "@/lib/mockAuth";
import { cn } from "@/lib/utils";

interface StepOneData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}
interface StepTwoData {
  company: string;
  designation: string;
  sector: string;
  category: string;
  source: string;
}

const titles = ["Mr.", "Ms.", "Mrs.", "Dr.", "Other"];
const sectors = [
  "Automotive", "Aerospace & Defence", "Chemicals", "Electronics", "Food & Beverage",
  "Heavy Engineering", "Pharmaceuticals", "Textiles", "Steel & Metals", "Other",
];
const categories = ["MSME", "Large Enterprise", "Startup", "Academia", "Government", "Solution Provider", "Consultant"];
const sources = ["CII Event", "Search Engine", "LinkedIn", "Referral", "Newsletter", "Partner", "Other"];

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = (location.state as { from?: string } | null)?.from || getReturnTo("/");

  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [one, setOne] = useState<StepOneData>({ title: "", firstName: "", lastName: "", email: "", mobile: "" });
  const [two, setTwo] = useState<StepTwoData>({ company: "", designation: "", sector: "", category: "", source: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update1 = (k: keyof StepOneData, v: string) => setOne((p) => ({ ...p, [k]: v }));
  const update2 = (k: keyof StepTwoData, v: string) => setTwo((p) => ({ ...p, [k]: v }));

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!required(one.title)) e.title = "Required";
    if (!required(one.firstName)) e.firstName = "Required";
    if (!required(one.lastName)) e.lastName = "Required";
    if (!isEmail(one.email)) e.email = "Enter a valid email address";
    if (!isMobile(one.mobile)) e.mobile = "Enter a 10-digit mobile number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!required(two.company)) e.company = "Required";
    if (!required(two.designation)) e.designation = "Required";
    if (!required(two.sector)) e.sector = "Required";
    if (!required(two.category)) e.category = "Required";
    if (!required(two.source)) e.source = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onContinue = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validateStep1()) return;
    setErrors({});
    setStep(2);
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validateStep2()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    mockAuth.signIn(one.email);
    setLoading(false);
    setReturnTo(from);
    navigate("/welcome", { state: { from, firstName: one.firstName } });
  };

  return (
    <>
      <SEO title="Create account â Join the Industry 4.0 ecosystem" />
      <AuthLayout>
        <AuthCard
          eyebrow={step === 1 ? "Get started" : "Almost there"}
          title={step === 1 ? "Create Your Account" : "Tell Us About Your Organization"}
          subtitle={step === 1 ? "Let's start with your basic information" : "This helps personalize your experience"}
          footer={
            <>
              Already have an account?{" "}
              <Link
                to="/login"
                state={{ from }}
                className="font-semibold text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))] transition-colors"
              >
                Sign in
              </Link>
            </>
          }
        >
          <div className="mb-6">
            <StepProgress current={step} total={2} label={step === 1 ? "Personal" : "Professional"} />
          </div>

          <div className="relative overflow-hidden">
            <div
              className={cn("transition-all duration-300", step === 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 absolute inset-0 pointer-events-none")}
            >
              {step === 1 && (
                <form onSubmit={onContinue} noValidate className="space-y-4">
                  <div>
                    <Select value={one.title} onValueChange={(v) => update1("title", v)}>
                      <SelectTrigger
                        className={cn(
                          "h-[52px] text-[15px] rounded-md border-[hsl(var(--neutral-200))]",
                          errors.title && "border-[hsl(var(--red-600))]",
                        )}
                      >
                        <SelectValue placeholder="Title *" />
                      </SelectTrigger>
                      <SelectContent>
                        {titles.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    {errors.title && <p className="mt-1.5 text-xs text-[hsl(var(--red-600))] font-medium">{errors.title}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingInput
                      label="First name *"
                      autoComplete="given-name"
                      value={one.firstName}
                      onChange={(e) => update1("firstName", e.target.value)}
                      error={errors.firstName}
                    />
                    <FloatingInput
                      label="Last name *"
                      autoComplete="family-name"
                      value={one.lastName}
                      onChange={(e) => update1("lastName", e.target.value)}
                      error={errors.lastName}
                    />
                  </div>

                  <FloatingInput
                    label="Email address *"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={one.email}
                    onChange={(e) => update1("email", e.target.value)}
                    error={errors.email}
                    success={!errors.email && isEmail(one.email)}
                  />

                  <FloatingInput
                    label="Mobile number *"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={10}
                    value={one.mobile}
                    onChange={(e) => update1("mobile", e.target.value.replace(/\D/g, ""))}
                    error={errors.mobile}
                    success={!errors.mobile && isMobile(one.mobile)}
                  />

                  <button type="submit" className="btn-primary w-full h-12 text-base hover:-translate-y-px">
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            <div
              className={cn("transition-all duration-300", step === 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 absolute inset-0 pointer-events-none")}
            >
              {step === 2 && (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <FloatingInput
                    label="Company name *"
                    autoComplete="organization"
                    value={two.company}
                    onChange={(e) => update2("company", e.target.value)}
                    error={errors.company}
                  />
                  <FloatingInput
                    label="Designation *"
                    autoComplete="organization-title"
                    value={two.designation}
                    onChange={(e) => update2("designation", e.target.value)}
                    error={errors.designation}
                  />

                  {([
                    { key: "sector", label: "Sector *", opts: sectors },
                    { key: "category", label: "Category *", opts: categories },
                    { key: "source", label: "How did you hear about us? *", opts: sources },
                  ] as const).map(({ key, label, opts }) => (
                    <div key={key}>
                      <Select value={two[key]} onValueChange={(v) => update2(key, v)}>
                        <SelectTrigger
                          className={cn(
                            "h-[52px] text-[15px] rounded-md border-[hsl(var(--neutral-200))]",
                            errors[key] && "border-[hsl(var(--red-600))]",
                          )}
                        >
                          <SelectValue placeholder={label} />
                        </SelectTrigger>
                        <SelectContent>
                          {opts.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {errors[key] && <p className="mt-1.5 text-xs text-[hsl(var(--red-600))] font-medium">{errors[key]}</p>}
                    </div>
                  ))}

                  <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => { setErrors({}); setStep(1); }}
                      className="btn-outline h-12 sm:flex-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary h-12 sm:flex-[2] text-base hover:-translate-y-px disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create Account"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default Register;
