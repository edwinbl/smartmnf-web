"use client";

import Link from "next/link";
// TODO(migration): map [useLocation] to the App Router file structure
import { ArrowRight, ClipboardCheck, GraduationCap, Send, MessageCircle, BookOpen, Lightbulb, LucideIcon } from "lucide-react";

type CtaAction = {
  label: string;
  to?: string;
  href?: string;
  icon: LucideIcon;
  variant: "primary" | "secondary" | "ghost";
};

type CtaContent = {
  eyebrow: string;
  title: string;
  description: string;
  actions: CtaAction[];
  assistant: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

const DEFAULT_CONTENT: CtaContent = {
  eyebrow: "Next Step",
  title: "Not Sure Where To Start?",
  description:
    "Understand your current readiness and discover the most relevant pathways for your organization.",
  actions: [
    { label: "Take Readiness Assessment", to: "/readiness-assessment", icon: ClipboardCheck, variant: "primary" },
    { label: "Explore Programmes", to: "/programmes", icon: GraduationCap, variant: "secondary" },
    { label: "Submit Enquiry", to: "/contact", icon: Send, variant: "ghost" },
  ],
  assistant: {
    eyebrow: "AI Assistant",
    title: "Ask the Smart Manufacturing Assistant",
    description:
      "Get instant guidance on solution areas, outcomes and next steps â personalized to your context.",
  },
};

const ROUTE_CONTENT: { match: (path: string) => boolean; content: CtaContent }[] = [
  {
    match: (p) => p.startsWith("/solutions"),
    content: DEFAULT_CONTENT,
  },
  {
    match: (p) => p.startsWith("/case-studies"),
    content: {
      eyebrow: "Inspired By These Stories?",
      title: "Ready to write your own transformation story?",
      description:
        "Benchmark your manufacturing maturity and discover the pathways that helped these leaders succeed.",
      actions: [
        { label: "Take Readiness Assessment", to: "/readiness-assessment", icon: ClipboardCheck, variant: "primary" },
        { label: "Browse Solutions", to: "/solutions", icon: GraduationCap, variant: "secondary" },
        { label: "Talk to an Expert", to: "/contact", icon: Send, variant: "ghost" },
      ],
      assistant: {
        eyebrow: "AI Assistant",
        title: "Find a case study like yours",
        description:
          "Ask for case studies by sector, state or technology â and get tailored next steps for your plant.",
      },
    },
  },
  {
    match: (p) => p.startsWith("/programmes"),
    content: {
      eyebrow: "Next Step",
      title: "Turn insights into action with CII reports",
      description:
        "Access research-backed reports to benchmark, plan and accelerate your Industry 4.0 transformation journey.",
      actions: [
        { label: "Explore All Reports", to: "/reports", icon: BookOpen, variant: "primary" },
        { label: "Take Readiness Assessment", to: "/readiness-assessment", icon: ClipboardCheck, variant: "secondary" },
        { label: "Request Custom Insights", to: "/contact", icon: Send, variant: "ghost" },
      ],
      assistant: {
        eyebrow: "AI Assistant",
        title: "Ask for insights from CII reports",
        description:
          "Ask questions grounded in CII's published research and get the relevant reports and excerpts.",
      },
    },
  },
  {
    match: (p) => p.startsWith("/events"),
    content: {
      eyebrow: "Join The Movement",
      title: "Be part of India's smart manufacturing ecosystem",
      description:
        "Engage with industry leaders, experts and innovators driving Industry 4.0 transformation across India.",
      actions: [
        { label: "Browse Upcoming Events", to: "/events", icon: GraduationCap, variant: "primary" },
        { label: "Partner With Us", to: "/contact", icon: Send, variant: "secondary" },
        { label: "Take Readiness Assessment", to: "/readiness-assessment", icon: ClipboardCheck, variant: "ghost" },
      ],
      assistant: {
        eyebrow: "AI Assistant",
        title: "Find the right event for you",
        description:
          "Ask about summits, roundtables or webinars near you â and get tailored event recommendations.",
      },
    },
  },
  {
    match: (p) => p.startsWith("/reports"),
    content: {
      eyebrow: "Go Deeper",
      title: "Turn insights into action",
      description:
        "Use these reports to benchmark, plan and accelerate your Industry 4.0 transformation journey.",
      actions: [
        { label: "Take Readiness Assessment", to: "/readiness-assessment", icon: ClipboardCheck, variant: "primary" },
        { label: "Explore Solutions", to: "/solutions", icon: GraduationCap, variant: "secondary" },
        { label: "Request Custom Insights", to: "/contact", icon: Send, variant: "ghost" },
      ],
      assistant: {
        eyebrow: "AI Assistant",
        title: "Ask for insights from CII reports",
        description:
          "Ask questions grounded in CII's published research and get the relevant reports and excerpts.",
      },
    },
  },
  {
    match: (p) => p.startsWith("/readiness-assessment") || p.startsWith("/assessment"),
    content: {
      eyebrow: "See It In Action",
      title: "Learn from manufacturers who've transformed",
      description:
        "Explore real-world case studies of Indian manufacturers using Industry 4.0 to drive measurable outcomes â and discover what's possible for your plant.",
      actions: [
        { label: "Browse Case Studies", to: "/case-studies", icon: BookOpen, variant: "primary" },
        { label: "Explore Solutions", to: "/solutions", icon: Lightbulb, variant: "secondary" },
        { label: "Talk to an Expert", to: "/contact", icon: Send, variant: "ghost" },
      ],
      assistant: {
        eyebrow: "AI Assistant",
        title: "Find case studies relevant to you",
        description:
          "Ask about case studies by sector, plant size or technology â and get matched examples to inspire your roadmap.",
      },
    },
  },
  {
    match: (p) => p.startsWith("/about"),
    content: {
      eyebrow: "Join The Mission",
      title: "Help build India's smart manufacturing future",
      description:
        "Partner with CII to accelerate Industry 4.0 adoption across Indian manufacturing â from MSMEs to large enterprises.",
      actions: [
        { label: "Take Readiness Assessment", to: "/readiness-assessment", icon: ClipboardCheck, variant: "primary" },
        { label: "Explore Programmes", to: "/programmes", icon: GraduationCap, variant: "secondary" },
        { label: "Partner With Us", to: "/contact", icon: Send, variant: "ghost" },
      ],
      assistant: {
        eyebrow: "AI Assistant",
        title: "Ask about CII Smart Manufacturing",
        description:
          "Learn about our platform, programmes and ecosystem â grounded in CII's published content.",
      },
    },
  },
  {
    match: (p) => p.startsWith("/contact"),
    content: {
      eyebrow: "While You're Here",
      title: "Explore what you can do next",
      description:
        "Benchmark your readiness, browse solutions and discover programmes while our team gets back to you.",
      actions: [
        { label: "Take Readiness Assessment", to: "/readiness-assessment", icon: ClipboardCheck, variant: "primary" },
        { label: "Explore Solutions", to: "/solutions", icon: GraduationCap, variant: "secondary" },
        { label: "Browse Programmes", to: "/programmes", icon: Send, variant: "ghost" },
      ],
      assistant: {
        eyebrow: "AI Assistant",
        title: "Get instant answers",
        description:
          "The assistant can answer most questions about programmes, awards, demo centers and case studies.",
      },
    },
  },
];

const openAssistant = () => {
  window.dispatchEvent(new Event("open-assistant"));
};

const buttonClassFor = (variant: CtaAction["variant"]) => {
  if (variant === "primary") {
    return "inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white shadow-lg";
  }
  if (variant === "secondary") {
    return "inline-flex items-center gap-2 h-12 px-6 rounded-md font-bold text-white border border-white/30 bg-white/10 hover:bg-white/15 backdrop-blur transition-colors";
  }
  return "inline-flex items-center gap-2 h-12 px-6 rounded-md font-semibold text-white/90 hover:text-white";
};

const primaryStyle = {
  background: "hsl(var(--red-600))",
};

export const CommonFinalCta = () => {
  const { pathname } = useLocation();
  const matched = ROUTE_CONTENT.find((r) => r.match(pathname));
  const content = matched?.content ?? DEFAULT_CONTENT;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div
          className="relative overflow-hidden rounded-3xl text-white p-10 md:p-14"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))" }}
        >
          <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
          <div
            className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, hsl(var(--orange-500) / 0.6), transparent 65%)" }}
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/70">
                {content.eyebrow}
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-[40px] font-extrabold leading-[1.05] tracking-tight">
                {content.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
                {content.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {content.actions.map((a) => {
                  const Icon = a.icon;
                  const className = buttonClassFor(a.variant);
                  const style = a.variant === "primary" ? primaryStyle : undefined;
                  const inner = (
                    <>
                      <Icon className="h-4 w-4" /> {a.label}
                    </>
                  );
                  if (a.href) {
                    return (
                      <a key={a.label} href={a.href} className={className} style={style}>
                        {inner}
                      </a>
                    );
                  }
                  return (
                    <Link key={a.label} href={a.to ?? "/"} className={className} style={style}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="h-12 w-12 rounded-xl grid place-items-center text-white"
                    style={primaryStyle}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-white/70">
                      {content.assistant.eyebrow}
                    </div>
                    <div className="font-bold text-white">{content.assistant.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  {content.assistant.description}
                </p>
                <button
                  type="button"
                  onClick={openAssistant}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 h-11 rounded-md bg-white text-[hsl(var(--navy-900))] font-bold text-sm hover:bg-white/90 transition-colors"
                >
                  Open Assistant <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonFinalCta;
