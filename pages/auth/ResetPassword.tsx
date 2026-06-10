import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { isValidPassword } from "@/lib/authValidation";
import { toast } from "@/hooks/use-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<{ pw?: string; confirm?: string }>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e: typeof errors = {};
    if (!isValidPassword(pw)) e.pw = "Min 8 chars, 1 uppercase, 1 number";
    if (pw !== confirm) e.confirm = "Passwords don't match";
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setDone(true);
    toast({ title: "Password reset", description: "You can now sign in with your new password." });
    setTimeout(() => navigate("/login", { replace: true }), 1500);
  };

  return (
    <>
      <SEO title="Reset password â Set a new password" />
      <AuthLayout mobileTagline="Set a new password for your account">
        <AuthCard
          eyebrow="Set new password"
          title={done ? "Password updated" : "Reset your password"}
          subtitle={done ? "Redirecting you to sign inâ¦" : "Choose a strong password you haven't used before."}
          footer={
            <Link to="/login" className="font-semibold text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]">
              Back to login
            </Link>
          }
        >
          {done ? (
            <div className="flex flex-col items-center gap-3 py-2">
              <CheckCircle2 className="h-14 w-14 text-[hsl(var(--india-green))]" />
              <p className="text-sm text-[hsl(var(--neutral-500))]">Your password has been successfully reset.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              <PasswordInput
                label="New password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                autoComplete="new-password"
                showStrength
                error={errors.pw}
              />
              <PasswordInput
                label="Confirm password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="new-password"
                error={errors.confirm}
                success={!!confirm && pw === confirm}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full h-12 text-base hover:-translate-y-px disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Reset Password"}
              </button>
            </form>
          )}
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
