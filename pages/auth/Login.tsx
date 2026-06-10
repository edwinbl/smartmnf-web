import { useState, FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { FloatingInput } from "@/components/auth/FloatingInput";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { SocialButton } from "@/components/auth/SocialButton";
import { isEmail } from "@/lib/authValidation";
import { getReturnTo } from "@/lib/authReturn";
import { toast } from "@/hooks/use-toast";
import { mockAuth } from "@/lib/mockAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = (location.state as { from?: string } | null)?.from || getReturnTo("/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!isEmail(email)) e.email = "Enter a valid email address";
    if (password.length < 8) e.password = "Password must be at least 8 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    mockAuth.signIn(email);
    setLoading(false);
    toast({ title: "Welcome back", description: "Signed in successfully." });
    navigate(from, { replace: true });
  };

  return (
    <>
      <SEO title="Login â Continue your Industry 4.0 journey" />
      <AuthLayout>
        <AuthCard
          eyebrow="Sign in"
          title="Welcome Back"
          subtitle="Continue your Industry 4.0 journey"
          footer={
            <>
              New here?{" "}
              <Link
                to="/register"
                state={{ from }}
                className="font-semibold text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))] transition-colors"
              >
                Create an account
              </Link>
            </>
          }
        >
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <FloatingInput
              label="Email address"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => email && !isEmail(email) && setErrors((p) => ({ ...p, email: "Enter a valid email address" }))}
              error={errors.email}
              success={isEmail(email)}
            />
            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              error={errors.password}
            />

            <div className="flex items-center justify-between -mt-1">
              <label className="inline-flex items-center gap-2 text-sm text-[hsl(var(--neutral-500))] cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[hsl(var(--neutral-200))] accent-[hsl(var(--navy-700))]"
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))] transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full h-12 text-base hover:-translate-y-px disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Login"}
            </button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[hsl(var(--neutral-150))]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-3 text-xs uppercase tracking-wider text-[hsl(var(--neutral-500))] font-semibold">
                  or
                </span>
              </div>
            </div>

            <SocialButton
              provider="google"
              onClick={() => toast({ title: "Coming soon", description: "Google sign-in will be enabled shortly." })}
            />
          </form>
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default Login;
