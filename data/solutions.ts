import {
  Gauge,
  ShieldCheck,
  Network,
  Timer,
  Leaf,
  Globe2,
  GraduationCap,
  Eye,
  Cpu,
  Wifi,
  Activity,
  Zap,
  Award,
  Wrench,
  Boxes,
  BarChart3,
  Users,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export type OutcomeId =
  | "productivity"
  | "quality"
  | "traceability"
  | "downtime"
  | "energy"
  | "export"
  | "workforce"
  | "visibility";

export interface Outcome {
  id: OutcomeId;
  title: string;
  desc: string;
  icon: LucideIcon;
  accent: "navy" | "orange" | "green" | "red";
  solutionCount: number;
  caseCount: number;
}

export const outcomes: Outcome[] = [
  { id: "productivity", title: "Improve Productivity", desc: "Increase efficiency and operational throughput.", icon: Gauge, accent: "navy", solutionCount: 6, caseCount: 24 },
  { id: "quality", title: "Improve Quality", desc: "Reduce defects and improve consistency.", icon: ShieldCheck, accent: "green", solutionCount: 4, caseCount: 18 },
  { id: "traceability", title: "Improve Traceability", desc: "Transparency across operations and supply.", icon: Network, accent: "orange", solutionCount: 3, caseCount: 12 },
  { id: "downtime", title: "Reduce Downtime", desc: "Minimize unplanned stoppages and disruptions.", icon: Timer, accent: "red", solutionCount: 4, caseCount: 15 },
  { id: "energy", title: "Improve Energy Efficiency", desc: "Optimize resource utilization and emissions.", icon: Leaf, accent: "green", solutionCount: 3, caseCount: 11 },
  { id: "export", title: "Export Readiness", desc: "Meet evolving global standards and benchmarks.", icon: Globe2, accent: "navy", solutionCount: 5, caseCount: 9 },
  { id: "workforce", title: "Workforce Capability", desc: "Build skills for Industry 4.0 adoption.", icon: GraduationCap, accent: "orange", solutionCount: 4, caseCount: 14 },
  { id: "visibility", title: "Digital Visibility", desc: "Real-time insight into shopfloor operations.", icon: Eye, accent: "navy", solutionCount: 5, caseCount: 20 },
];

export interface SolutionCategory {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  outcomes: OutcomeId[];
  caseCount: number;
  resourceCount: number;
  accent: "navy" | "orange" | "green" | "red";
  problems: { problem: string; solution: string; benefit: string }[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    slug: "industrial-automation",
    name: "Industrial Automation",
    summary: "Automate manual and repetitive operations to unlock consistent output and throughput.",
    description:
      "Robotics, PLCs, motion control and integrated cells that remove manual handovers and stabilize cycle times.",
    icon: Cpu,
    outcomes: ["productivity", "quality", "downtime"],
    caseCount: 22,
    resourceCount: 14,
    accent: "navy",
    problems: [
      { problem: "Manual Processes", solution: "Robotic / cell automation", benefit: "+30% throughput" },
      { problem: "Repetitive Errors", solution: "PLC + vision control", benefit: "â55% defects" },
      { problem: "Low Operational Visibility", solution: "Integrated SCADA", benefit: "Real-time KPIs" },
      { problem: "High Downtime", solution: "Automated changeover", benefit: "â40% setup time" },
    ],
  },
  {
    slug: "iot-connectivity",
    name: "IoT & Connectivity",
    summary: "Connect machines and assets to unlock data-driven decision-making.",
    description: "Edge gateways, sensors and connectivity stacks that bring legacy and modern assets onto one fabric.",
    icon: Wifi,
    outcomes: ["visibility", "productivity", "downtime"],
    caseCount: 18,
    resourceCount: 12,
    accent: "orange",
    problems: [
      { problem: "Isolated Machines", solution: "Edge IoT gateways", benefit: "100% asset coverage" },
      { problem: "Manual Data Capture", solution: "Sensor instrumentation", benefit: "Live data feeds" },
      { problem: "Siloed Systems", solution: "OT/IT integration", benefit: "Unified view" },
    ],
  },
  {
    slug: "mes-production-visibility",
    name: "MES & Production Visibility",
    summary: "Real-time production tracking, scheduling and shopfloor execution.",
    description: "Manufacturing Execution Systems that synchronize planning, execution and reporting in real time.",
    icon: BarChart3,
    outcomes: ["visibility", "productivity", "quality"],
    caseCount: 16,
    resourceCount: 10,
    accent: "navy",
    problems: [
      { problem: "Paper-based reporting", solution: "Digital MES", benefit: "Live OEE" },
      { problem: "Schedule misses", solution: "Dynamic scheduling", benefit: "+22% on-time" },
      { problem: "Lost production data", solution: "Genealogy tracking", benefit: "Full audit trail" },
    ],
  },
  {
    slug: "energy-management",
    name: "Energy Management",
    summary: "Optimize energy use across utilities, processes and plants.",
    description: "Sub-metering, analytics and controls to reduce energy intensity and emissions.",
    icon: Zap,
    outcomes: ["energy", "visibility"],
    caseCount: 9,
    resourceCount: 8,
    accent: "green",
    problems: [
      { problem: "High energy bills", solution: "Sub-metering + analytics", benefit: "â18% energy" },
      { problem: "Peak load spikes", solution: "Load management", benefit: "Lower demand charges" },
    ],
  },
  {
    slug: "quality-management",
    name: "Quality Management",
    summary: "Inline quality, SPC and digital QA to lock in consistent output.",
    description: "Vision systems, SPC and QMS workflows that catch defects at source.",
    icon: Award,
    outcomes: ["quality", "traceability"],
    caseCount: 14,
    resourceCount: 9,
    accent: "green",
    problems: [
      { problem: "Defect rework", solution: "Inline vision QA", benefit: "â45% rework" },
      { problem: "Process drift", solution: "SPC dashboards", benefit: "Stable Cpk" },
    ],
  },
  {
    slug: "predictive-maintenance",
    name: "Predictive Maintenance",
    summary: "Anticipate failures before they cause downtime.",
    description: "Vibration, thermal and ML-driven failure prediction across critical assets.",
    icon: Wrench,
    outcomes: ["downtime", "productivity"],
    caseCount: 12,
    resourceCount: 7,
    accent: "red",
    problems: [
      { problem: "Unplanned breakdowns", solution: "Vibration analytics", benefit: "â35% downtime" },
      { problem: "Reactive maintenance", solution: "Condition-based plans", benefit: "+20% MTBF" },
    ],
  },
  {
    slug: "traceability-systems",
    name: "Traceability Systems",
    summary: "Lot, batch and serial traceability across the value chain.",
    description: "Serialization, barcoding and digital genealogy for regulated and export-driven operations.",
    icon: Boxes,
    outcomes: ["traceability", "quality", "export"],
    caseCount: 10,
    resourceCount: 6,
    accent: "orange",
    problems: [
      { problem: "Recall risk", solution: "Lot genealogy", benefit: "100% traceback" },
      { problem: "Export non-compliance", solution: "Serialization", benefit: "Audit-ready" },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    summary: "Turn shopfloor data into operating decisions.",
    description: "Data lakes, BI and AI/ML use cases tuned to manufacturing problems.",
    icon: Activity,
    outcomes: ["visibility", "productivity", "quality"],
    caseCount: 13,
    resourceCount: 11,
    accent: "navy",
    problems: [
      { problem: "Decisions on intuition", solution: "Plant BI dashboards", benefit: "Data-led ops" },
      { problem: "Untapped process data", solution: "ML for yield / quality", benefit: "+8% yield" },
    ],
  },
  {
    slug: "workforce-enablement",
    name: "Workforce Enablement",
    summary: "Equip your people for connected, digital operations.",
    description: "Digital SOPs, AR-guided work and capability programmes for shopfloor and leadership.",
    icon: Users,
    outcomes: ["workforce", "quality", "productivity"],
    caseCount: 8,
    resourceCount: 9,
    accent: "orange",
    problems: [
      { problem: "Skills gap", solution: "Role-based learning paths", benefit: "Faster ramp-up" },
      { problem: "Tribal knowledge", solution: "Digital SOPs", benefit: "Consistent execution" },
    ],
  },
  {
    slug: "sustainability-solutions",
    name: "Sustainability Solutions",
    summary: "Cut emissions, waste and resource intensity.",
    description: "ESG reporting, circular-economy enablers and emissions tracking.",
    icon: Sprout,
    outcomes: ["energy", "export"],
    caseCount: 7,
    resourceCount: 8,
    accent: "green",
    problems: [
      { problem: "Scope 1/2 visibility", solution: "Emissions tracking", benefit: "Reportable footprint" },
      { problem: "Material waste", solution: "Circular flows", benefit: "â15% scrap" },
    ],
  },
];

export interface SolutionCaseStudy {
  company: string;
  sector: string;
  state: string;
  challenge: string;
  category: string;
  outcome: string;
  metric: string;
}

export const featuredSolutionCases: SolutionCaseStudy[] = [
  {
    company: "Auro Components",
    sector: "Auto",
    state: "Maharashtra",
    challenge: "Frequent unplanned downtime on critical machining lines",
    category: "Predictive Maintenance",
    outcome: "Reduced Downtime",
    metric: "â 18% Downtime",
  },
  {
    company: "Nimara Foods",
    sector: "F&B",
    state: "Karnataka",
    challenge: "Inconsistent product quality across batches",
    category: "Quality Management",
    outcome: "Improved Quality",
    metric: "â 42% Defects",
  },
  {
    company: "Vikram Pharma",
    sector: "Pharma",
    state: "Telangana",
    challenge: "Manual lot tracking blocking export compliance",
    category: "Traceability Systems",
    outcome: "Export Readiness",
    metric: "100% Lot Traceability",
  },
  {
    company: "GreenSteel Works",
    sector: "Steel",
    state: "Odisha",
    challenge: "High energy intensity per tonne",
    category: "Energy Management",
    outcome: "Energy Efficiency",
    metric: "â 22% Energy / Tonne",
  },
];

export interface ExpertInsight {
  name: string;
  role: string;
  initials: string;
  headline: string;
  quote: string;
}

export const expertInsights: ExpertInsight[] = [
  {
    name: "Dr. Anand Krishnan",
    role: "Principal Advisor, Industry 4.0 Â· CII",
    initials: "AK",
    headline: "Start with visibility before automation.",
    quote: "You can't improve what you can't see. Most plants underestimate how much value sits in simply digitizing what's already happening.",
  },
  {
    name: "Priya Menon",
    role: "Smart Manufacturing Lead Â· Bosch India",
    initials: "PM",
    headline: "Focus on measurable outcomes, not technology adoption.",
    quote: "Anchor every initiative to a number on a balance sheet â throughput, defects, energy, OTIF â not the technology name.",
  },
  {
    name: "Suresh Iyer",
    role: "Director, Operations Â· Tata Steel",
    initials: "SI",
    headline: "Data readiness is often the first bottleneck.",
    quote: "Before AI or analytics, invest in clean, time-stamped, structured data. That foundation determines how far you can go.",
  },
];

export interface SolutionResource {
  type: "Report" | "Whitepaper" | "Framework" | "Toolkit" | "Playbook";
  title: string;
  desc: string;
  href: string;
}

export const solutionResources: SolutionResource[] = [
  { type: "Report", title: "Industry 4.0 Readiness Report 2025", desc: "Maturity benchmarks across 1,200+ Indian manufacturers.", href: "/reports" },
  { type: "Framework", title: "Smart Manufacturing Maturity Framework", desc: "A six-dimension model to assess and prioritize transformation.", href: "/reports" },
  { type: "Toolkit", title: "MSME Digital Readiness Toolkit", desc: "Self-paced assessment and quick-win recommendations.", href: "/reports" },
  { type: "Playbook", title: "OEE Improvement Playbook", desc: "Step-by-step approach to lifting OEE in 90 days.", href: "/reports" },
  { type: "Whitepaper", title: "Energy Intensity Reduction Whitepaper", desc: "Patterns from 50+ energy management deployments.", href: "/reports" },
];

export interface SolutionProgramme {
  slug: string;
  name: string;
  duration: string;
  audience: string;
  outcomes: string;
}

export const solutionProgrammes: SolutionProgramme[] = [
  { slug: "industry-4-leadership", name: "Industry 4.0 Leadership Programme", duration: "6 weekends Â· Hybrid", audience: "CXOs, Plant Heads", outcomes: "Build strategic transformation roadmap" },
  { slug: "smart-mfg-practitioner", name: "Smart Manufacturing Practitioner", duration: "8 weeks Â· Online", audience: "Mid-management", outcomes: "Hands-on tools, frameworks and playbooks" },
  { slug: "msme-digital-bootcamp", name: "MSME Digital Bootcamp", duration: "3 days Â· On-site", audience: "MSME owners", outcomes: "Quick-start digital transformation plan" },
];

export const findCategory = (slug: string) =>
  solutionCategories.find((c) => c.slug === slug);

export const outcomeLabel = (id: OutcomeId) =>
  outcomes.find((o) => o.id === id)?.title.replace(/^Improve |^Reduce /, "") ?? id;
