import { WireSection } from "./WireSection";
import { Send, Sparkles } from "lucide-react";

const prompts = [
  "What is the readiness assessment?",
  "Show me programmes for MSMEs",
  "Find resources on traceability",
  "What smart manufacturing case studies are available?",
];

export const WireChatbotBlock = () => {
  return (
    <WireSection id="chatbot">
      <div
        className="rounded-xl overflow-hidden relative text-white p-8 md:p-14"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)",
        }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--orange-500) / 0.25), hsl(var(--orange-500) / 0) 60%)",
          }}
        />

        <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border"
                 style={{ background: "hsl(0 0% 100% / 0.08)", borderColor: "hsl(0 0% 100% / 0.2)" }}>
              <Sparkles className="h-3.5 w-3.5 text-cii-orange" />
              <span className="eyebrow text-white/80">Smart Manufacturing Assistant</span>
            </div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight">
              Ask the Smart Manufacturing Assistant
            </h2>
            <p className="mt-4 text-base text-white/75 max-w-lg">
              Use the assistant to find approved CII Smart Manufacturing content across assessments,
              programmes, events, solutions and resources.
            </p>
          </div>

          <div className="bg-white text-navy-800 rounded-lg p-5 shadow-2xl">
            <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-cii-red mb-3">
              Try a prompt
            </div>
            <ul className="space-y-2">
              {prompts.map((p) => (
                <li key={p}>
                  <button className="w-full text-left text-sm font-medium px-4 py-3 rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] hover:border-navy-600 hover:bg-white transition-colors">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Ask a questionâ¦"
                className="flex-1 h-11 px-4 text-sm border border-[hsl(var(--neutral-200))] bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
              />
              <button className="btn-primary !px-4" aria-label="Ask">
                <Send className="!h-4 !w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </WireSection>
  );
};
