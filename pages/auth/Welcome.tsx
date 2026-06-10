import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Compass, Gauge, Layers, Network, Trophy } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { getReturnTo, clearReturnTo } from "@/lib/authReturn";

const steps = [
  { Icon: Gauge, label: "Assess" },
  { Icon: Compass, label: "Guide" },
  { Icon: Layers, label: "Enable" },
  { Icon: Network, label: "Connect" },
  { Icon: Trophy, label: "Recognise" },
];

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { from?: string; firstName?: string } | null;
  const from = state?.from || getReturnTo("/");
  const firstName = state?.firstName;

  const handleStart = () => {
    clearReturnTo();
    // Decorative: send users to the assessment teaser anchor on the page they came from (or home)
    navigate(from, { replace: true });
  };

  const handleExplore = () => {
    clearReturnTo();
    navigate(from, { replace: true });
  };

  return (
    <>
      <SEO title="Welcome â Your Industry 4.0 Journey Starts Here" />
      <AuthLayout mobileTagline="Your Industry 4.0 Journey Starts Here">
        <AuthCard
          eyebrow="Welcome aboard"
          title={firstName ? `Welcome, ${firstName}` : "Your Industry 4.0 Journey Starts Here"}
          subtitle="We'll guide you through a personalized path â from a maturity assessment to curated solutions and a partner network ready to help you transform."
        >
          {/* Journey graphic */}
          <div className="my-2 mb-6 rounded-xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-5">
            <div className="flex items-center justify-between gap-2">
              {steps.map(({ Icon, label }, i) => {
                const tints = ["--navy-700", "--navy-700", "--navy-800", "--navy-800", "--red-600"];
                return (
                  <div key={label} className="flex-1 flex flex-col items-center gap-2 relative">
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="absolute top-5 right-1/2 w-full h-px"
                        style={{ background: "linear-gradient(90deg, hsl(var(--navy-100)), hsl(var(--red-600)/0.5))" }}
                      />
                    )}
                    <span
                      className="relative grid h-10 w-10 place-items-center rounded-full text-white shadow-sm"
                      style={{ background: `hsl(var(${tints[i]}))` }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-[hsl(var(--navy-800))]">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <button onClick={handleStart} className="btn-primary w-full h-12 text-base hover:-translate-y-px">
              Start Assessment
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={handleExplore} className="btn-outline w-full h-12 text-base">
              Explore Platform
            </button>
          </div>

          <p className="mt-5 text-center text-xs text-[hsl(var(--neutral-500))]">
            You can always return here from your dashboard.{" "}
            <Link to="/" className="font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]">
              Go home
            </Link>
          </p>
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default Welcome;
