import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const types = [
  "Assessment Consultation",
  "Ecosystem Onboarding",
  "Partnership Discussion",
  "Training Consultation",
];

export const BookConsultation = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div
          className="relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16 text-white text-center"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))" }}
        >
          <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
          <div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-50"
            style={{ background: "radial-gradient(circle, hsl(var(--orange-500)/0.6), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative max-w-2xl mx-auto">
            <span className="cii-chip cii-chip-orange">
              <Calendar className="h-3.5 w-3.5" /> 1:1 Consultation
            </span>
            <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Need personalized guidance?
            </h2>
            <p className="mt-4 text-white/75 text-base sm:text-lg">
              Book a consultation with our experts to accelerate your Industry 4.0 journey.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 justify-center">
              {types.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/register" className="btn-primary group">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
