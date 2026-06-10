export type ReportType = string;

export interface Report {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  domain: string;
  technology: string;
  state: string;
  type: ReportType;
  year: number;
  pages: number;
  readingTime: string;
  author: string;
  publishedOn: string;
  gated: boolean;
  tags: string[];
  highlightStat: { value: string; label: string };
  coverGradient: string; // tailwind classes
  collectionIds: string[];
  keyFindings: { title: string; description: string }[];
  metrics: { label: string; value: number }[]; // for chart
  executiveSummary: string[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  reportCount: number;
  gradient: string;
}

export const collections: Collection[] = [
  {
    id: "smart-mfg-starter",
    title: "Smart Manufacturing Starter Pack",
    description: "Foundational reports to begin your Industry 4.0 journey.",
    reportCount: 5,
    gradient: "from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]",
  },
  {
    id: "msme-readiness",
    title: "MSME Readiness Reports",
    description: "Benchmark studies and adoption pathways for Indian MSMEs.",
    reportCount: 7,
    gradient: "from-[hsl(var(--red-600))] to-[hsl(var(--orange-500))]",
  },
  {
    id: "sustainability",
    title: "Sustainability Insights",
    description: "Decarbonisation, energy and circular manufacturing.",
    reportCount: 4,
    gradient: "from-[hsl(var(--india-green))] to-[hsl(var(--navy-700))]",
  },
  {
    id: "automotive-transformation",
    title: "Automotive Transformation",
    description: "EV transition, supply chain, and connected mobility.",
    reportCount: 6,
    gradient: "from-[hsl(var(--navy-900))] to-[hsl(var(--orange-500))]",
  },
  {
    id: "digital-factory",
    title: "Digital Factory Playbooks",
    description: "Step-by-step playbooks for shop-floor digitalisation.",
    reportCount: 5,
    gradient: "from-[hsl(var(--orange-500))] to-[hsl(var(--red-600))]",
  },
];

const baseFindings = [
  { title: "Adoption accelerating", description: "67% of surveyed MSMEs now run at least one connected pilot." },
  { title: "Skills are the gap", description: "Workforce readiness ranks as the #1 reported barrier." },
  { title: "ROI within 18 months", description: "Most digital pilots break even in 12â18 months." },
  { title: "Ecosystem matters", description: "Partner-led journeys are 2.3Ã more likely to scale." },
];

const baseMetrics = [
  { label: "2020", value: 18 },
  { label: "2021", value: 28 },
  { label: "2022", value: 41 },
  { label: "2023", value: 55 },
  { label: "2024", value: 67 },
  { label: "2025", value: 78 },
];

const baseSummary = [
  "Indian manufacturing is entering a structural inflection point where digital, sustainability and skills converge.",
  "MSMEs that anchor their transformation in assessment-led pathways outperform peers on both productivity and resilience.",
  "Ecosystem orchestration â connecting solution providers, training partners and policy enablers â is the single largest unlock.",
];

const gradients = [
  "from-[hsl(var(--navy-800))] via-[hsl(var(--navy-600))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--orange-500))] to-[hsl(var(--red-600))]",
  "from-[hsl(var(--india-green))] to-[hsl(var(--navy-700))]",
  "from-[hsl(var(--navy-700))] via-[hsl(var(--navy-600))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--navy-900))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--red-600))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]",
  "from-[hsl(var(--navy-700))] to-[hsl(var(--navy-900))]",
  "from-[hsl(var(--red-600))] to-[hsl(var(--navy-700))]",
  "from-[hsl(var(--navy-800))] to-[hsl(var(--orange-500))]",
];

type Seed = {
  slug: string;
  title: string;
  summary: string;
  type: ReportType;
  industry: string;
  domain: string;
  technology: string;
  state?: string;
  year?: number;
  pages?: number;
  readingTime?: string;
  author?: string;
  publishedOn?: string;
  gated?: boolean;
  tags: string[];
  highlightStat: { value: string; label: string };
  collectionIds?: string[];
};

const seeds: Seed[] = [
  {
    slug: "industry-40-adoption-strategic-roadmap-indian-manufacturing",
    title: "Industry 4.0 Adoption and Strategic Roadmap for Indian Manufacturing",
    summary:
      "A comprehensive report exploring how Industry 4.0 technologies such as IoT, AI, robotics, and advanced analytics can transform Indian manufacturing. The report outlines adoption challenges, readiness levels, and strategic recommendations for accelerating digital transformation.",
    type: "Industry Report",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "Industry 4.0",
    year: 2025,
    pages: 72,
    readingTime: "24 min",
    author: "CII Smart Manufacturing",
    publishedOn: "Mar 2025",
    gated: true,
    tags: ["Industry 4.0", "Roadmap", "Adoption"],
    highlightStat: { value: "67%", label: "Enterprises piloting Industry 4.0" },
    collectionIds: ["smart-mfg-starter"],
  },
  {
    slug: "transforming-india-chemical-sector-digital-analytics",
    title: "Transforming Indiaâs Chemical Sector Through Digital and Analytics",
    summary:
      "Examines how digital technologies, data analytics, and intelligent operations can improve efficiency, sustainability, and competitiveness within Indiaâs chemical manufacturing sector.",
    type: "Industry Report",
    industry: "Chemicals",
    domain: "Smart Manufacturing",
    technology: "Analytics",
    year: 2024,
    pages: 58,
    readingTime: "20 min",
    author: "CII Chemical Vertical",
    publishedOn: "Nov 2024",
    gated: true,
    tags: ["Chemicals", "Analytics", "Digital"],
    highlightStat: { value: "28%", label: "Avg productivity uplift" },
  },
  {
    slug: "manufacturing-in-india-creating-a-smarter-future",
    title: "Manufacturing in India: Creating a Smarter Future",
    summary:
      "A collection of successful smart manufacturing implementations across Indian industries, showcasing practical applications, measurable outcomes, and lessons learned from digital transformation initiatives.",
    type: "Case Study Compendium",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "Industry 4.0",
    year: 2024,
    pages: 96,
    readingTime: "30 min",
    author: "CII Ã Industry Partners",
    publishedOn: "Sep 2024",
    gated: false,
    tags: ["Case Studies", "Smart Manufacturing", "India"],
    highlightStat: { value: "40+", label: "Implementations profiled" },
    collectionIds: ["smart-mfg-starter"],
  },
  {
    slug: "action-plan-fostering-adoption-smart-manufacturing",
    title: "Action Plan for Fostering Adoption of Smart Manufacturing",
    summary:
      "Presents research findings, global benchmarks, and policy recommendations aimed at driving widespread adoption of smart manufacturing technologies among Indian enterprises.",
    type: "Strategic Roadmap",
    industry: "Manufacturing",
    domain: "Policy",
    technology: "Industry 4.0",
    year: 2024,
    pages: 64,
    readingTime: "22 min",
    author: "CII Centre of Excellence",
    publishedOn: "Jul 2024",
    gated: true,
    tags: ["Policy", "Roadmap", "Benchmarks"],
    highlightStat: { value: "12", label: "Policy levers identified" },
  },
  {
    slug: "predictive-maintenance-for-oil-and-gas",
    title: "Predictive Maintenance for Oil & Gas",
    summary:
      "Explores how Industrial IoT, AI, and predictive analytics can improve asset reliability, reduce downtime, and optimize maintenance strategies in the oil and gas industry.",
    type: "Whitepaper",
    industry: "Oil & Gas",
    domain: "Smart Manufacturing",
    technology: "IIoT",
    year: 2024,
    pages: 32,
    readingTime: "12 min",
    author: "CII Energy Vertical",
    publishedOn: "Aug 2024",
    gated: false,
    tags: ["Predictive Maintenance", "IIoT", "Oil & Gas"],
    highlightStat: { value: "35%", label: "Unplanned downtime reduced" },
  },
  {
    slug: "reimagining-a-resilient-and-sustainable-future",
    title: "Reimagining a Resilient and Sustainable Future",
    summary:
      "Discusses how organizations can build resilience and sustainability through cloud technologies, digital innovation, and data-driven decision-making.",
    type: "Digital Transformation Insight",
    industry: "Cross-sector",
    domain: "Sustainability",
    technology: "Cloud",
    year: 2024,
    pages: 28,
    readingTime: "10 min",
    author: "CII Digital Council",
    publishedOn: "Jun 2024",
    gated: false,
    tags: ["Resilience", "Sustainability", "Cloud"],
    highlightStat: { value: "3Ã", label: "Faster recovery for cloud-native ops" },
    collectionIds: ["sustainability"],
  },
  {
    slug: "enabled-by-iot-in-the-cloud-and-edge",
    title: "Enabled by IoT in the Cloud and Edge",
    summary:
      "Highlights the role of cloud computing, edge intelligence, and connected devices in enabling scalable smart manufacturing and real-time operational visibility.",
    type: "Technology Insight",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "Edge & Cloud",
    year: 2024,
    pages: 30,
    readingTime: "11 min",
    author: "CII Tech Working Group",
    publishedOn: "May 2024",
    gated: false,
    tags: ["IoT", "Edge", "Cloud"],
    highlightStat: { value: "Real-time", label: "Shop-floor visibility" },
  },
  {
    slug: "heres-how-ai-can-help-keep-them-safe",
    title: "Hereâs How AI Can Help Keep Them Safe",
    summary:
      "Explores the use of AI-powered monitoring and analytics solutions to improve workplace safety, compliance, and operational risk management.",
    type: "AI & Workplace Safety",
    industry: "Cross-sector",
    domain: "Safety",
    technology: "AI / ML",
    year: 2024,
    pages: 24,
    readingTime: "9 min",
    author: "CII Ã Industry Partners",
    publishedOn: "Apr 2024",
    gated: false,
    tags: ["AI", "Safety", "Compliance"],
    highlightStat: { value: "50%", label: "Incident detection improvement" },
  },
  {
    slug: "smart-manufacturing-reducing-costs-virtual-simulation",
    title: "Smart Manufacturing: Reducing Costs Through Virtual Simulation",
    summary:
      "Demonstrates how virtual simulation and digital twins can reduce development costs, improve quality, and accelerate manufacturing innovation.",
    type: "Advanced Manufacturing",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "Digital Twin",
    year: 2024,
    pages: 36,
    readingTime: "13 min",
    author: "CII Centre of Excellence",
    publishedOn: "Mar 2024",
    gated: true,
    tags: ["Digital Twin", "Simulation", "Cost"],
    highlightStat: { value: "30%", label: "Dev-cost reduction" },
  },
  {
    slug: "additive-manufacturing-2020",
    title: "Additive Manufacturing 2020",
    summary:
      "Provides insights into additive manufacturing, generative design, and next-generation production technologies that are reshaping industrial product development.",
    type: "Emerging Technologies",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "Additive Manufacturing",
    year: 2020,
    pages: 48,
    readingTime: "16 min",
    author: "CII Tech Working Group",
    publishedOn: "Dec 2020",
    gated: false,
    tags: ["Additive", "3D Printing", "Generative Design"],
    highlightStat: { value: "Next-gen", label: "Production technologies" },
  },
  {
    slug: "7-habits-of-highly-effective-generative-design",
    title: "The 7 Habits of Highly Effective Generative Design",
    summary:
      "A practical guide outlining best practices for leveraging generative design tools to accelerate innovation, optimize product performance, and reduce engineering effort.",
    type: "Design & Engineering",
    industry: "Engineering",
    domain: "Design",
    technology: "Generative Design",
    year: 2023,
    pages: 26,
    readingTime: "9 min",
    author: "CII Ã Design Partners",
    publishedOn: "Oct 2023",
    gated: false,
    tags: ["Generative Design", "Engineering", "Best Practices"],
    highlightStat: { value: "7", label: "Habits to operationalise" },
  },
  {
    slug: "ai-ml-trimmed-body-ntf-global-modes-odyssee-cae",
    title: "AI/ML-Based Trimmed Body NTF & Global Modes Prediction and Optimization Using ODYSSEE CAE",
    summary:
      "Showcases the application of AI and machine learning in engineering simulation, enabling faster and more accurate vehicle body performance analysis.",
    type: "AI in Engineering",
    industry: "Automotive",
    domain: "Engineering",
    technology: "AI / ML",
    year: 2024,
    pages: 22,
    readingTime: "8 min",
    author: "CII Ã ODYSSEE CAE",
    publishedOn: "Feb 2024",
    gated: true,
    tags: ["AI/ML", "CAE", "NVH"],
    highlightStat: { value: "10Ã", label: "Faster NTF prediction" },
  },
  {
    slug: "ai-ml-crash-parameters-prediction-odyssee-cae",
    title: "AI/ML-Based Prediction of Crash Parameters Using ODYSSEE CAE",
    summary:
      "Illustrates how machine learning can enhance crash analysis and simulation processes, reducing development cycles and improving product safety outcomes.",
    type: "AI in Engineering",
    industry: "Automotive",
    domain: "Engineering",
    technology: "AI / ML",
    year: 2024,
    pages: 24,
    readingTime: "9 min",
    author: "CII Ã ODYSSEE CAE",
    publishedOn: "Feb 2024",
    gated: true,
    tags: ["AI/ML", "Crash", "Simulation"],
    highlightStat: { value: "40%", label: "Dev-cycle reduction" },
  },
];

export const reports: Report[] = seeds.map((s, i) => ({
  slug: s.slug,
  title: s.title,
  summary: s.summary,
  industry: s.industry,
  domain: s.domain,
  technology: s.technology,
  state: s.state ?? "Pan-India",
  type: s.type,
  year: s.year ?? 2024,
  pages: s.pages ?? 32,
  readingTime: s.readingTime ?? "12 min",
  author: s.author ?? "CII Smart Manufacturing",
  publishedOn: s.publishedOn ?? "2024",
  gated: s.gated ?? false,
  tags: s.tags,
  highlightStat: s.highlightStat,
  coverGradient: gradients[i % gradients.length],
  collectionIds: s.collectionIds ?? ["smart-mfg-starter"],
  keyFindings: baseFindings,
  metrics: baseMetrics,
  executiveSummary: baseSummary,
}));


export const reportFacets = {
  industry: Array.from(new Set(reports.map((r) => r.industry))).sort(),
  domain: Array.from(new Set(reports.map((r) => r.domain))).sort(),
  technology: Array.from(new Set(reports.map((r) => r.technology))).sort(),
  state: Array.from(new Set(reports.map((r) => r.state))).sort(),
  type: Array.from(new Set(reports.map((r) => r.type))).sort(),
  year: Array.from(new Set(reports.map((r) => r.year))).sort((a, b) => b - a),
};

export const quickPicks = [
  { id: "latest", label: "Latest Reports" },
  { id: "downloaded", label: "Most Downloaded" },
  { id: "msme", label: "MSME Insights" },
  { id: "sustainability", label: "Sustainability" },
  { id: "smart", label: "Smart Manufacturing" },
  { id: "export", label: "Export Readiness" },
] as const;

export type QuickPickId = (typeof quickPicks)[number]["id"];

export const getReportBySlug = (slug: string) => reports.find((r) => r.slug === slug);
export const getRelated = (slug: string, n = 3) => {
  const current = getReportBySlug(slug);
  if (!current) return [];
  return reports
    .filter((r) => r.slug !== slug)
    .map((r) => ({
      r,
      score:
        (r.industry === current.industry ? 2 : 0) +
        (r.domain === current.domain ? 2 : 0) +
        (r.technology === current.technology ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.r);
};
