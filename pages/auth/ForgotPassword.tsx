import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, Mail, MailCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { FloatingInput } from "@/components/auth/FloatingInput";
import { isEmail } from "@/lib/authValidation";
import { toast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!isEmail(email)) { setError("Enter a valid email address"); return; }
    setError(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
  };

  const resend = async () => {
    toast({ title: "Reset link resent", description: `Sent to ${email}` });
  };

  return (
    <>
      <SEO title="Forgot password â Recover your account" />
      <AuthLayout mobileTagline="Recover your account in a few seconds">
        <AuthCard
          eyebrow={sent ? "Check your inbox" : "Account recovery"}
          title={sent ? "Reset link sent" : "Forgot your password?"}
          subtitle={
            sent
              ? `We've sent a password reset link to ${email}. The link expires in 30 minutes.`
              : "Enter the email associated with your account and we'll send you a reset link."
          }
          footer={
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 font-semibold text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          }
        >
          {!sent ? (
            <form onSubmit={submit} noValidate className="space-y-4">
              <FloatingInput
                label="Email address"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(null); }}
                error={error}
                success={isEmail(email) && !error}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full h-12 text-base hover:-translate-y-px disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : (<><Mail className="h-4 w-4" /> Send Reset Link</>)}
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <div className="flex justify-center">
                <div
                  className="grid h-16 w-16 place-items-center rounded-full"
                  style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
                >
                  <MailCheck className="h-7 w-7" />
                </div>
              </div>
              <p className="text-center text-sm text-[hsl(var(--neutral-500))]">
                Didn't receive it? Check your spam folder or resend the link.
              </p>
              <button onClick={resend} className="btn-outline w-full h-12">
                Resend link
              </button>
            </div>
          )}
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
