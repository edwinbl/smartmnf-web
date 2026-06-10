export type Sector = string;

export type CompanyType = "MSME" | "Enterprise" | "Supplier" | "Export-focused";

export type ValueProp = string;

export interface KPI {
  label: string;
  value: string;
  direction: "up" | "down" | "flat";
}

export interface SolutionProvider {
  name: string;
  overview: string;
  capabilities: string[];
  industries?: string[];
  technologies?: string[];
}

export interface ManufacturerProfile {
  industry: string;
  footprint: string;
  highlights: string[];
}

export interface DiscoveryStep { title: string; desc: string }
export interface ComplexityStat { value: string; label: string }
export interface TimelineStep { phase: string; title: string; desc: string }
export interface TeamRole { role: string; scope: string }
export interface ChangeAction { challenge: string; actions: string[]; outcome: string }
export interface ArchComponent { name: string; layer: string; desc: string }
export interface SolutionFeature { title: string; desc: string }
export interface ImplementationChallenge { challenge: string; mitigation: string; outcome: string }
export interface OutcomeGroup { operational: KPI[]; business: KPI[]; user: string[] }
export interface ResourceItem { title: string; type: string; href?: string }
export interface Testimonial { quote: string; name: string; role: string; company: string }
export interface ApproachCard { title: string; desc: string }
export interface WorkforceShift { before: string; after: string[] }

export interface CaseStudy {
  slug: string;
  company: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  sector: Sector;
  state: string;
  companyType: CompanyType;
  valueProps: ValueProp[];
  durationMonths: number;
  companySize: string;
  metric: KPI;
  kpis: KPI[];
  challengePoints: string[];
  approachSteps: { title: string; desc: string }[];
  capabilities: string[];
  beforeAfter: { label: string; before: string; after: string }[];
  featured?: boolean;
  categoryTags?: string[];
  executiveSummary?: string;
  solutionProvider?: SolutionProvider;
  manufacturer?: ManufacturerProfile;
  discoveryFlow?: DiscoveryStep[];
  complexity?: ComplexityStat[];
  timeline?: TimelineStep[];
  team?: TeamRole[];
  changeManagement?: ChangeAction;
  architecture?: ArchComponent[];
  solutionFeatures?: SolutionFeature[];
  implementationChallenges?: ImplementationChallenge[];
  outcomes?: OutcomeGroup;
  resources?: ResourceItem[];
  approachCards?: ApproachCard[];
  workforceTransformation?: WorkforceShift;
  testimonial?: Testimonial;
  replicationInsights?: string[];
  // New rich blueprint fields (with synth fallbacks)
  technologies?: string[];
  solutionGroups?: { title: string; points: string[] }[];
  businessChallenges?: { title: string; desc: string }[];
  businessOutcomes?: { title: string; impact: string }[];
  benefitsTable?: { area: string; impact: string }[];
  relatedSolutionAreas?: string[];
}

export const sectors: Sector[] = [
  "Automobile & Ancillaries",
  "Automotive",
  "Automotive Components Manufacturing",
  "Engineering â Capital Goods",
  "Engineering â Industrial Equipment",
  "FMCG",
  "Food & Beverage",
  "Glass Manufacturing",
  "Pharma",
  "Warehouse Automation & Material Handling",
  "Wire & Cable Manufacturing",
];

export const states = [
  "Delhi",
  "Gujarat",
  "Jharkhand",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Uttarakhand",
];

export const companyTypes: CompanyType[] = ["MSME", "Enterprise", "Supplier", "Export-focused"];

export const valueProps: ValueProp[] = [
  "Design & Engineering",
  "Digital Enterprise",
  "Digital Transformation",
  "OEE Improvement",
  "Predictive Maintenance",
  "Process Optimisation",
  "Production & Supply Chain",
  "Smart Factory",
];

export const quickChips: ValueProp[] = [
  "Process Optimisation",
  "Production & Supply Chain",
  "Design & Engineering",
  "Predictive Maintenance",
  "Smart Factory",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "plastech-adding-smart-to-factories",
    company: "Plastech Solutions (B&R Industrial Automation)",
    headline: "Adding âSMARTâ to Factories",
    summary:
      "Plastech Solutions implemented a smart factory platform with machine monitoring, centralized dashboards, and OEE tracking. The initiative improved plant efficiency, visibility, and resource utilization across production operations.",
    challenge:
      "Limited shop-floor visibility and inconsistent OEE tracking constrained Plastech's ability to optimise production and resource utilisation.",
    approach:
      "Deployed a smart factory platform combining machine monitoring, centralised dashboards and OEE tracking across critical production lines.",
    sector: "Automotive Components Manufacturing",
    state: "Maharashtra",
    companyType: "MSME",
    valueProps: ["Process Optimisation", "OEE Improvement"],
    durationMonths: 8,
    companySize: "250 employees",
    metric: { label: "OEE", value: "+14 pts", direction: "up" },
    kpis: [
      { label: "OEE", value: "+14 pts", direction: "up" },
      { label: "Downtime", value: "-22%", direction: "down" },
      { label: "Resource utilisation", value: "+18%", direction: "up" },
      { label: "Reporting lag", value: "Live", direction: "down" },
    ],
    challengePoints: [
      "Manual machine performance tracking",
      "Limited real-time plant visibility",
      "Inconsistent OEE measurement across lines",
    ],
    approachSteps: [
      { title: "Connect", desc: "Instrumented critical machines with edge connectivity." },
      { title: "Visualise", desc: "Centralised dashboards for live plant performance." },
      { title: "Improve", desc: "OEE-led daily reviews to drive structured improvement." },
    ],
    capabilities: ["Machine monitoring", "Centralised dashboards", "OEE tracking", "Resource optimisation"],
    beforeAfter: [
      { label: "Plant visibility", before: "Shift-end reports", after: "Live dashboards" },
      { label: "OEE", before: "55%", after: "69%" },
    ],
    featured: true,
  },
  {
    slug: "bosch-collaboration-revision-connection-innovation",
    company: "Bosch India",
    headline: "Collaboration, Re-vision, Connection and Innovation",
    summary:
      "Bosch leveraged Industry 4.0 and IoT technologies to improve manufacturing productivity, process visibility, and operational flexibility across its Indian operations.",
    challenge:
      "Scaling productivity and flexibility across distributed Indian plants required deeper digital connectivity and process visibility.",
    approach:
      "Adopted Industry 4.0 and IoT platforms to connect plants, harmonise processes and enable data-driven decisioning across operations.",
    sector: "Automobile & Ancillaries",
    state: "Karnataka",
    companyType: "Enterprise",
    valueProps: ["Production & Supply Chain"],
    durationMonths: 14,
    companySize: "5000+ employees",
    metric: { label: "Productivity", value: "+20%", direction: "up" },
    kpis: [
      { label: "Productivity", value: "+20%", direction: "up" },
      { label: "Process visibility", value: "Plant-wide", direction: "up" },
      { label: "Operational flexibility", value: "+25%", direction: "up" },
      { label: "Cycle time", value: "-15%", direction: "down" },
    ],
    challengePoints: [
      "Siloed plant systems limiting visibility",
      "Rigid production set-ups",
      "Slow cross-plant collaboration",
    ],
    approachSteps: [
      { title: "Connect", desc: "IoT-enabled assets across Indian plants." },
      { title: "Re-vision", desc: "Reimagined processes around live data." },
      { title: "Innovate", desc: "Embedded Industry 4.0 across operations." },
    ],
    capabilities: ["Industry 4.0 platform", "IoT connectivity", "Process visibility", "Operational flexibility"],
    beforeAfter: [
      { label: "Productivity index", before: "100", after: "120" },
      { label: "Plant connectivity", before: "Partial", after: "Unified" },
    ],
    featured: true,
  },
  {
    slug: "setco-teamcenter-real-time-collaboration",
    company: "Setco Automotive",
    headline:
      "Clutch Manufacturer Achieves Real-Time Collaboration Between U.K. and India Teams Through Teamcenter",
    summary:
      "Setco Automotive digitized engineering collaboration and product development workflows using Teamcenter, enabling secure data sharing and faster development cycles.",
    challenge:
      "Distributed engineering teams in the U.K. and India needed secure, real-time collaboration to compress product development cycles.",
    approach:
      "Implemented Teamcenter as a unified PLM backbone for engineering data, change management and global collaboration.",
    sector: "Automobile & Ancillaries",
    state: "Maharashtra",
    companyType: "MSME",
    valueProps: ["Design & Engineering", "Production & Supply Chain"],
    durationMonths: 10,
    companySize: "1200 employees",
    metric: { label: "Development cycle", value: "-30%", direction: "down" },
    kpis: [
      { label: "Development cycle", value: "-30%", direction: "down" },
      { label: "Engineering rework", value: "-25%", direction: "down" },
      { label: "Global collaboration", value: "Real-time", direction: "up" },
      { label: "Data integrity", value: "+40%", direction: "up" },
    ],
    challengePoints: [
      "Disconnected design data across geographies",
      "Manual engineering change processes",
      "Slow product development cycles",
    ],
    approachSteps: [
      { title: "Centralise", desc: "Single source of truth for engineering data on Teamcenter." },
      { title: "Collaborate", desc: "Real-time U.K.âIndia engineering collaboration." },
      { title: "Accelerate", desc: "Structured workflows to compress development cycles." },
    ],
    capabilities: ["PLM (Teamcenter)", "Secure data sharing", "Engineering change management", "Global collaboration"],
    beforeAfter: [
      { label: "Cross-site collaboration", before: "Email & files", after: "Live on Teamcenter" },
      { label: "Cycle time", before: "Baseline", after: "-30%" },
    ],
    featured: true,
  },
  {
    slug: "grind-master-solid-edge-machine-design",
    company: "Grind Master Machines Pvt. Ltd.",
    headline: "Grind Master Engineers Complex Machinery with Solid Edge",
    summary:
      "Grind Master adopted digital engineering tools to accelerate machine design, streamline development processes, and support innovation in industrial automation equipment.",
    challenge:
      "Designing increasingly complex automation machinery on legacy tools slowed innovation and time-to-market.",
    approach:
      "Adopted Solid Edge as a modern digital engineering platform to streamline design and development workflows.",
    sector: "Engineering â Industrial Equipment",
    state: "Maharashtra",
    companyType: "MSME",
    valueProps: ["Design & Engineering"],
    durationMonths: 9,
    companySize: "450 employees",
    metric: { label: "Design cycle", value: "-35%", direction: "down" },
    kpis: [
      { label: "Design cycle", value: "-35%", direction: "down" },
      { label: "Engineering productivity", value: "+28%", direction: "up" },
      { label: "Design rework", value: "-30%", direction: "down" },
      { label: "Time to market", value: "-22%", direction: "down" },
    ],
    challengePoints: [
      "Legacy CAD limiting complex machinery design",
      "Slow design iteration cycles",
      "Fragmented development workflows",
    ],
    approachSteps: [
      { title: "Modernise CAD", desc: "Adopted Solid Edge across engineering teams." },
      { title: "Streamline", desc: "Standardised digital design workflows." },
      { title: "Innovate", desc: "Enabled rapid iteration on complex assemblies." },
    ],
    capabilities: ["Digital engineering", "3D modelling (Solid Edge)", "Workflow standardisation", "Innovation enablement"],
    beforeAfter: [
      { label: "Design iteration", before: "Weeks", after: "Days" },
      { label: "Engineering productivity", before: "100", after: "128" },
    ],
  },
  {
    slug: "piramal-glass-azure-iot-microsoft-ai",
    company: "Piramal Glass",
    headline: "Piramal Glass Unbottles Smart Manufacturing with Azure IoT and Microsoft AI",
    summary:
      "Piramal Glass implemented Azure IoT and AI technologies to enhance manufacturing visibility, improve operational performance, and support digital transformation initiatives.",
    challenge:
      "Limited real-time visibility across glass manufacturing operations constrained performance and digital transformation ambitions.",
    approach:
      "Deployed Azure IoT and Microsoft AI to connect plants, surface operational insights and drive performance improvement.",
    sector: "Glass Manufacturing",
    state: "Gujarat",
    companyType: "Enterprise",
    valueProps: ["Process Optimisation"],
    durationMonths: 12,
    companySize: "3000 employees",
    metric: { label: "Operational performance", value: "+18%", direction: "up" },
    kpis: [
      { label: "Operational performance", value: "+18%", direction: "up" },
      { label: "Manufacturing visibility", value: "Plant-wide", direction: "up" },
      { label: "Energy efficiency", value: "+12%", direction: "up" },
      { label: "Defects", value: "-20%", direction: "down" },
    ],
    challengePoints: [
      "Limited real-time process visibility",
      "Reactive operational decisions",
      "Fragmented digital initiatives",
    ],
    approachSteps: [
      { title: "Connect", desc: "Plants instrumented with Azure IoT." },
      { title: "Analyse", desc: "Microsoft AI surfaced performance insights." },
      { title: "Transform", desc: "Insights embedded into daily operations." },
    ],
    capabilities: ["Azure IoT", "Microsoft AI", "Manufacturing visibility", "Performance analytics"],
    beforeAfter: [
      { label: "Operational visibility", before: "Manual reports", after: "Real-time" },
      { label: "Performance index", before: "100", after: "118" },
    ],
  },
  {
    slug: "blue-star-i-factory-digital-manufacturing",
    company: "Blue Star Ltd.",
    headline: "i-Factory: Digital Manufacturing",
    summary:
      "Blue Star deployed IoT-enabled production monitoring, intelligent maintenance, and energy management systems to create a connected and data-driven manufacturing environment.",
    challenge:
      "Connecting production, maintenance and energy systems was essential to move from siloed operations to a data-driven manufacturing environment.",
    approach:
      "Built the i-Factory programme around IoT-enabled production monitoring, intelligent maintenance and energy management.",
    sector: "Engineering â Capital Goods",
    state: "Maharashtra",
    companyType: "Enterprise",
    valueProps: ["Production & Supply Chain"],
    durationMonths: 12,
    companySize: "2800 employees",
    metric: { label: "Production efficiency", value: "+22%", direction: "up" },
    kpis: [
      { label: "Production efficiency", value: "+22%", direction: "up" },
      { label: "Unplanned downtime", value: "-30%", direction: "down" },
      { label: "Energy consumption", value: "-15%", direction: "down" },
      { label: "Maintenance cost", value: "-20%", direction: "down" },
    ],
    challengePoints: [
      "Siloed production and maintenance systems",
      "Reactive maintenance practices",
      "Limited energy visibility",
    ],
    approachSteps: [
      { title: "Monitor", desc: "IoT-enabled production monitoring." },
      { title: "Maintain", desc: "Intelligent, condition-based maintenance." },
      { title: "Optimise", desc: "Energy management embedded into operations." },
    ],
    capabilities: ["IoT production monitoring", "Intelligent maintenance", "Energy management", "Connected operations"],
    beforeAfter: [
      { label: "Maintenance model", before: "Reactive", after: "Predictive" },
      { label: "Energy index", before: "100", after: "85" },
    ],
  },
  {
    slug: "omron-fmcg-digitalization-smarter-factories",
    company: "Leading FMCG Company (via OMRON)",
    headline:
      "Digitalization: Paving the Way for Smarter, Interactive and Transparent Factories and Supply Chains",
    summary:
      "OMRON enabled warehouse automation and IIoT-based monitoring to reduce downtime, improve reliability, and create greater visibility across operations.",
    challenge:
      "Manual warehouse operations and limited equipment visibility were causing downtime and reliability issues across the supply chain.",
    approach:
      "Implemented warehouse automation and IIoT-based monitoring to drive transparency and reliability across factories and supply chains.",
    sector: "FMCG",
    state: "Uttarakhand",
    companyType: "Enterprise",
    valueProps: ["Production & Supply Chain"],
    durationMonths: 10,
    companySize: "1500 employees",
    metric: { label: "Downtime", value: "-28%", direction: "down" },
    kpis: [
      { label: "Downtime", value: "-28%", direction: "down" },
      { label: "Equipment reliability", value: "+22%", direction: "up" },
      { label: "Warehouse throughput", value: "+30%", direction: "up" },
      { label: "Supply chain visibility", value: "End-to-end", direction: "up" },
    ],
    challengePoints: [
      "Manual warehouse operations",
      "Frequent unplanned downtime",
      "Limited cross-supply-chain visibility",
    ],
    approachSteps: [
      { title: "Automate", desc: "Warehouse automation across critical flows." },
      { title: "Monitor", desc: "IIoT-based monitoring of key assets." },
      { title: "Connect", desc: "Transparent factory-to-supply-chain data." },
    ],
    capabilities: ["Warehouse automation", "IIoT monitoring", "Reliability engineering", "Supply chain visibility"],
    beforeAfter: [
      { label: "Warehouse throughput", before: "100", after: "130" },
      { label: "Downtime", before: "Baseline", after: "-28%" },
    ],
  },
  {
    slug: "omron-coffee-iiot-predictive-maintenance",
    company: "FMCG / Coffee Processing Manufacturer (via OMRON)",
    headline: "IIoT Based Predictive Maintenance Solution",
    summary:
      "The implementation of an IIoT-enabled predictive maintenance system improved equipment monitoring, reduced manual inspections, and minimized unplanned production stoppages.",
    challenge:
      "Manual inspections and reactive maintenance were leading to unplanned production stoppages on critical equipment.",
    approach:
      "Deployed an IIoT-enabled predictive maintenance solution to monitor equipment health and pre-empt failures.",
    sector: "Food & Beverage",
    state: "Karnataka",
    companyType: "Enterprise",
    valueProps: ["Predictive Maintenance"],
    durationMonths: 8,
    companySize: "900 employees",
    metric: { label: "Unplanned stoppages", value: "-35%", direction: "down" },
    kpis: [
      { label: "Unplanned stoppages", value: "-35%", direction: "down" },
      { label: "Manual inspections", value: "-60%", direction: "down" },
      { label: "Equipment availability", value: "+18%", direction: "up" },
      { label: "Maintenance cost", value: "-22%", direction: "down" },
    ],
    challengePoints: [
      "Reactive maintenance culture",
      "Manual inspection overheads",
      "Frequent production stoppages",
    ],
    approachSteps: [
      { title: "Sense", desc: "IIoT sensors on critical equipment." },
      { title: "Predict", desc: "Analytics flagging anomalies early." },
      { title: "Act", desc: "Planned interventions replacing breakdowns." },
    ],
    capabilities: ["IIoT sensing", "Predictive analytics", "Condition monitoring", "Maintenance workflows"],
    beforeAfter: [
      { label: "Maintenance model", before: "Reactive", after: "Predictive" },
      { label: "Stoppages", before: "Baseline", after: "-35%" },
    ],
  },
  {
    slug: "rockwell-automotive-control-system-upgrade",
    company: "Automotive Manufacturer (via Rockwell Automation)",
    headline: "Automotive Company Upgrades Control System to Improve Production",
    summary:
      "The company modernized its control systems to improve productivity, simplify troubleshooting, reduce downtime, and accelerate production processes.",
    challenge:
      "Ageing control systems were limiting productivity and making troubleshooting slow and disruptive.",
    approach:
      "Modernised the plant's control system architecture to improve reliability, simplify diagnostics and accelerate production.",
    sector: "Automotive",
    state: "Tamil Nadu",
    companyType: "Enterprise",
    valueProps: ["Design & Engineering"],
    durationMonths: 9,
    companySize: "1800 employees",
    metric: { label: "Production speed", value: "+20%", direction: "up" },
    kpis: [
      { label: "Production speed", value: "+20%", direction: "up" },
      { label: "Downtime", value: "-25%", direction: "down" },
      { label: "Troubleshooting time", value: "-40%", direction: "down" },
      { label: "Productivity", value: "+18%", direction: "up" },
    ],
    challengePoints: [
      "Legacy control system limitations",
      "Slow troubleshooting cycles",
      "Recurring unplanned downtime",
    ],
    approachSteps: [
      { title: "Assess", desc: "Mapped legacy control architecture and gaps." },
      { title: "Upgrade", desc: "Modernised control hardware and software." },
      { title: "Optimise", desc: "Simplified diagnostics and operator workflows." },
    ],
    capabilities: ["Modern control systems", "Diagnostics & troubleshooting", "Production acceleration", "Reliability engineering"],
    beforeAfter: [
      { label: "Production speed", before: "100", after: "120" },
      { label: "Troubleshooting", before: "Hours", after: "Minutes" },
    ],
  },
  {
    slug: "pharma-paperless-manufacturing-analytics",
    company: "Global Pharmaceutical Manufacturer",
    headline: "Paperless Manufacturing and Data Analytics for Pharma Industry",
    summary:
      "The organization adopted paperless manufacturing and advanced analytics to improve compliance, enhance operational visibility, and optimize production performance.",
    challenge:
      "Paper-based manufacturing records and limited analytics constrained compliance, visibility and production performance.",
    approach:
      "Adopted paperless manufacturing and advanced data analytics to digitise records and surface performance insights.",
    sector: "Pharma",
    state: "Maharashtra",
    companyType: "Enterprise",
    valueProps: ["Process Optimisation"],
    durationMonths: 12,
    companySize: "2500 employees",
    metric: { label: "Compliance findings", value: "-55%", direction: "down" },
    kpis: [
      { label: "Compliance findings", value: "-55%", direction: "down" },
      { label: "Operational visibility", value: "+40%", direction: "up" },
      { label: "Batch release time", value: "-30%", direction: "down" },
      { label: "Production performance", value: "+18%", direction: "up" },
    ],
    challengePoints: [
      "Paper-heavy manufacturing records",
      "Limited operational visibility",
      "Slow batch release and review cycles",
    ],
    approachSteps: [
      { title: "Digitise", desc: "Replaced paper records with digital workflows." },
      { title: "Analyse", desc: "Advanced analytics on manufacturing data." },
      { title: "Comply", desc: "Audit-ready, real-time compliance posture." },
    ],
    capabilities: ["Paperless manufacturing", "Advanced analytics", "Compliance digitisation", "Performance optimisation"],
    beforeAfter: [
      { label: "Batch release", before: "Days", after: "Hours" },
      { label: "Compliance findings", before: "Baseline", after: "-55%" },
    ],
  },
  {
    slug: "siemens-wire-cable-oem-digitalization",
    company: "Leading Wire & Cable OEM",
    headline: "Digitalizing Wire and Cable Industry OEMs for Industry 4.0",
    summary:
      "Siemens supported the digital transformation of a wire and cable machinery manufacturer through Industry 4.0 technologies, improving operational intelligence and production visibility.",
    challenge:
      "A wire and cable OEM needed to embed Industry 4.0 capabilities to lift operational intelligence and stay ahead of customer expectations.",
    approach:
      "Partnered with Siemens to roll out Industry 4.0 technologies across machinery and production processes.",
    sector: "Wire & Cable Manufacturing",
    state: "Delhi",
    companyType: "Enterprise",
    valueProps: ["Smart Factory", "Digital Enterprise"],
    durationMonths: 14,
    companySize: "1600 employees",
    metric: { label: "Operational intelligence", value: "+30%", direction: "up" },
    kpis: [
      { label: "Operational intelligence", value: "+30%", direction: "up" },
      { label: "Production visibility", value: "Plant-wide", direction: "up" },
      { label: "OEE", value: "+12 pts", direction: "up" },
      { label: "Customer responsiveness", value: "+25%", direction: "up" },
    ],
    challengePoints: [
      "Limited digital capability on machinery",
      "Constrained production visibility",
      "Customer demand for smarter machines",
    ],
    approachSteps: [
      { title: "Digitise", desc: "Embedded Industry 4.0 building blocks on machines." },
      { title: "Connect", desc: "Plant-wide visibility across production." },
      { title: "Differentiate", desc: "Smarter machines as a customer advantage." },
    ],
    capabilities: ["Industry 4.0 platform", "Smart factory enablement", "Digital enterprise", "Operational intelligence"],
    beforeAfter: [
      { label: "Production visibility", before: "Partial", after: "Plant-wide" },
      { label: "OEE", before: "Baseline", after: "+12 pts" },
    ],
  },
  {
    slug: "new-engineering-works-collaborative-robots",
    company: "New Engineering Works",
    headline:
      "Collaborative Robots Deliver 40% Growth and 24x7 Manufacturing at New Engineering Works",
    summary:
      "Universal Robots deployed collaborative robots to automate repetitive tasks, increase productivity, and enable round-the-clock manufacturing operations.",
    challenge:
      "Manual, repetitive operations capped productivity and prevented round-the-clock manufacturing.",
    approach:
      "Deployed Universal Robots' collaborative robots to automate repetitive tasks alongside human operators.",
    sector: "Automobile & Ancillaries",
    state: "Jharkhand",
    companyType: "MSME",
    valueProps: ["Production & Supply Chain", "Process Optimisation", "Design & Engineering"],
    durationMonths: 7,
    companySize: "180 employees",
    metric: { label: "Growth", value: "+40%", direction: "up" },
    kpis: [
      { label: "Growth", value: "+40%", direction: "up" },
      { label: "Productivity", value: "+35%", direction: "up" },
      { label: "Operating hours", value: "24x7", direction: "up" },
      { label: "Operator strain", value: "-50%", direction: "down" },
    ],
    challengePoints: [
      "Repetitive manual tasks limiting output",
      "Limited capacity for round-the-clock running",
      "Productivity constraints on growth",
    ],
    approachSteps: [
      { title: "Identify", desc: "Targeted repetitive, high-volume tasks." },
      { title: "Deploy", desc: "Collaborative robots alongside operators." },
      { title: "Scale", desc: "Enabled 24x7 manufacturing operations." },
    ],
    capabilities: ["Collaborative robotics", "Task automation", "24x7 operations", "Workforce augmentation"],
    beforeAfter: [
      { label: "Operating model", before: "Single-shift", after: "24x7" },
      { label: "Growth", before: "Baseline", after: "+40%" },
    ],
  },
  {
    slug: "narayan-powertech-digital-transformation",
    company: "Narayan Powertech Pvt. Ltd.",
    headline: "Narayan Powertech Digital Transformation",
    summary:
      "Narayan Powertech leveraged digital engineering and manufacturing technologies to enhance product development, strengthen customer collaboration, and support global growth.",
    challenge:
      "Global growth ambitions demanded stronger digital engineering capability and tighter customer collaboration.",
    approach:
      "Adopted digital engineering and manufacturing technologies to modernise product development and collaboration workflows.",
    sector: "Engineering â Industrial Equipment",
    state: "Gujarat",
    companyType: "MSME",
    valueProps: ["Production & Supply Chain"],
    durationMonths: 11,
    companySize: "320 employees",
    metric: { label: "Product development", value: "-25%", direction: "down" },
    kpis: [
      { label: "Product development time", value: "-25%", direction: "down" },
      { label: "Customer collaboration", value: "+30%", direction: "up" },
      { label: "Manufacturing productivity", value: "+20%", direction: "up" },
      { label: "Global readiness", value: "Strengthened", direction: "up" },
    ],
    challengePoints: [
      "Legacy product development workflows",
      "Limited digital customer collaboration",
      "Manufacturing capability gaps for global growth",
    ],
    approachSteps: [
      { title: "Engineer", desc: "Modernised digital engineering platform." },
      { title: "Collaborate", desc: "Digital workflows with global customers." },
      { title: "Grow", desc: "Manufacturing capability aligned to global demand." },
    ],
    capabilities: ["Digital engineering", "Manufacturing technologies", "Customer collaboration", "Global growth enablement"],
    beforeAfter: [
      { label: "Development cycle", before: "Baseline", after: "-25%" },
      { label: "Customer collaboration", before: "Email", after: "Digital workflows" },
    ],
  },
  {
    slug: "siemens-warehouse-digital-enterprise",
    company: "Siemens India",
    headline:
      "Transforming the Warehouse & Material Handling Industry with Siemens Digital Enterprise",
    summary:
      "A leading Indian warehouse and robotics automation company partnered with Siemens to digitally transform its manufacturing operations using the Siemens Digital Enterprise Suite â connecting design, engineering, production, commissioning, and service into a single digital ecosystem.",
    challenge:
      "The customer's own manufacturing facilities had limited digital integration, disconnected engineering systems, long commissioning cycles and no remote connectivity to deployed equipment.",
    approach:
      "Siemens implemented an end-to-end Digital Enterprise approach connecting the entire manufacturing and engineering value chain â from design and digital twin through virtual commissioning, MES, cloud connectivity and remote service.",
    sector: "Warehouse Automation & Material Handling",
    state: "Delhi",
    companyType: "Enterprise",
    valueProps: [
      "Digital Transformation",
      "Design & Engineering",
      "Production & Supply Chain",
      "Process Optimisation",
    ],
    durationMonths: 18,
    companySize: "Enterprise customer of Siemens India",
    metric: { label: "Time-to-Market", value: "Faster", direction: "up" },
    kpis: [
      { label: "Time-to-Market", value: "Faster", direction: "up" },
      { label: "Development Cost", value: "Lower", direction: "down" },
      { label: "Productivity", value: "Higher", direction: "up" },
      { label: "Product Quality", value: "Improved", direction: "up" },
    ],
    challengePoints: [
      "Lack of Factory Digitalization",
      "Disconnected Engineering Systems",
      "Long Commissioning Cycles",
      "Cross-Functional Collaboration Gaps",
      "Limited Field Data Visibility",
      "Downtime & Performance Tracking Challenges",
      "No Remote Connectivity",
    ],
    approachSteps: [
      { title: "Digital Enterprise", desc: "End-to-end Siemens Digital Enterprise Suite rollout." },
      { title: "Connect", desc: "Cloud connectivity from deployed equipment back to engineering." },
      { title: "Service", desc: "Remote monitoring, diagnostics and lifecycle support." },
    ],
    capabilities: [
      "Digital Twin",
      "Virtual Commissioning",
      "MES",
      "Cloud Connectivity",
      "Industrial IoT",
      "Product Lifecycle Management (PLM)",
      "Remote Monitoring",
      "Digital Enterprise Suite",
    ],
    beforeAfter: [
      { label: "Engineering systems", before: "Disconnected", after: "Unified digital ecosystem" },
      { label: "Equipment monitoring", before: "On-site only", after: "Remote & continuous" },
    ],
    featured: true,
    categoryTags: ["Digital Enterprise", "Warehouse Automation", "Industry 4.0"],
    executiveSummary:
      "A leading Indian warehouse and robotics automation company partnered with Siemens to digitally transform its manufacturing operations using the Siemens Digital Enterprise Suite. The initiative connected design, engineering, production, commissioning, and service functions into a single digital ecosystem, reducing development time, improving collaboration, and enabling remote monitoring of deployed systems.",
    solutionProvider: {
      name: "Siemens India",
      overview:
        "Siemens India is a leading technology provider in industrial automation, digitalization, smart infrastructure, mobility, energy management, and manufacturing solutions. With decades of experience across multiple industries, Siemens enables organizations to accelerate their Industry 4.0 journey through integrated digital enterprise technologies.",
      capabilities: ["Industrial Automation", "Digitalization", "Smart Infrastructure", "Energy Management", "Manufacturing Solutions"],
      industries: ["Manufacturing", "Mobility", "Energy", "Infrastructure"],
      technologies: ["Digital Enterprise Suite", "Digital Twin", "MES", "PLM", "Industrial IoT"],
    },
    manufacturer: {
      industry: "Warehouse Automation & Material Handling",
      footprint: "Leading Indian provider of warehouse automation and robotic solutions serving manufacturing and warehousing customers",
      highlights: [
        "Conveyor systems",
        "Automated shuttle storage",
        "Robotics & vision automation",
        "Conveyor tracking systems",
        "Autonomous Mobile Robots (AMRs)",
        "Automated Guided Vehicles (AGVs)",
      ],
    },
    technologies: [
      "Siemens Digital Enterprise Suite",
      "Digital Twin",
      "Virtual Commissioning",
      "MES",
      "Cloud Connectivity",
      "Business Intelligence Analytics",
      "Industrial IoT",
      "Remote Monitoring Systems",
      "Product Lifecycle Management (PLM)",
    ],
    businessChallenges: [
      { title: "Lack of Factory Digitalization", desc: "Own manufacturing facilities had limited digital integration, making it difficult to showcase a digital factory model to customers." },
      { title: "Disconnected Engineering Systems", desc: "Multiple design software platforms operated independently without a common database â slowing development, limiting collaboration and creating data silos across the product lifecycle." },
      { title: "Long Commissioning Cycles", desc: "Complex warehouse automation systems required significant trial-and-error during commissioning, increasing deployment timelines." },
      { title: "Cross-Functional Collaboration Gaps", desc: "Sales, design, procurement and project teams lacked a unified platform for collaboration and project visibility." },
      { title: "Limited Field Data Visibility", desc: "No mechanism to collect performance data from installed customer equipment for continuous product improvement." },
      { title: "Downtime & Performance Tracking Challenges", desc: "Rental and usage-based customer models made monitoring uptime, OEE and productivity increasingly important." },
      { title: "No Remote Connectivity", desc: "Machines installed at customer sites could not be remotely monitored or diagnosed." },
    ],
    solutionGroups: [
      { title: "Product Design & Engineering", points: ["Unified engineering environment", "Centralized product data management", "Faster prototype development"] },
      { title: "Digital Twin Implementation", points: ["Creation of virtual machine models", "Simulation of plant and process behavior", "Validation before physical deployment"] },
      { title: "Virtual Commissioning", points: ["Testing machine logic digitally", "Reduced commissioning risks", "Faster deployment timelines"] },
      { title: "Production & Project Management Integration", points: ["Improved collaboration between departments", "Connected workflows across engineering, procurement and manufacturing"] },
      { title: "Cloud Connectivity", points: ["Collection of operational data from deployed equipment", "Remote monitoring and diagnostics capabilities"] },
      { title: "Customer Service Enablement", points: ["Remote troubleshooting", "Improved service responsiveness", "Better lifecycle support for customers"] },
      { title: "Future Analytics Foundation", points: ["Historical data collection", "Business Intelligence integration", "Advanced operational insights and optimization"] },
    ],
    businessOutcomes: [
      { title: "Faster Time-to-Market", impact: "Centralized data management accelerated product development and engineering processes." },
      { title: "Lower Product Development Costs", impact: "Collaborative design reduced material waste and manufacturing costs while improving engineering efficiency." },
      { title: "Higher Productivity", impact: "Integrated project management improved coordination across departments and stakeholders." },
      { title: "Increased Innovation", impact: "Digital Twin technology enabled rapid experimentation and innovation without impacting production operations." },
      { title: "Improved Product Quality", impact: "Standardized processes and digital workflows strengthened quality control and customer satisfaction." },
    ],
    benefitsTable: [
      { area: "Product Development", impact: "Faster prototyping and design cycles" },
      { area: "Cost Optimization", impact: "Reduced engineering and production costs" },
      { area: "Collaboration", impact: "Better coordination across teams" },
      { area: "Innovation", impact: "Digital Twin-based simulation and testing" },
      { area: "Customer Service", impact: "Remote monitoring and diagnostics" },
      { area: "Quality", impact: "Improved process consistency and product quality" },
    ],
    changeManagement: {
      challenge: "Embedding Industry 4.0 across engineering, production, project management and digital transformation functions required a cross-functional change effort.",
      actions: [
        "Established a cross-functional team across engineering, production, project management and digital transformation",
        "Agile, iterative implementation with stakeholder reviews",
        "Structured knowledge transfer from Siemens specialists",
        "Hands-on enablement of in-house teams on the Digital Enterprise stack",
      ],
      outcome: "Successful adoption of Industry 4.0 technologies throughout the organization, with sustained internal capability.",
    },
    relatedSolutionAreas: [
      "Smart Factory",
      "Warehouse Automation",
      "Digital Twin",
      "Industrial IoT",
      "Production Planning",
      "Manufacturing Execution Systems",
      "Predictive Analytics",
      "Remote Monitoring",
      "Digital Enterprise",
    ],
  },
];

export const findCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const relatedCaseStudies = (slug: string, limit = 4) => {
  const current = findCaseStudy(slug);
  if (!current) return [];
  return caseStudies
    .filter((c) => c.slug !== slug)
    .map((c) => {
      let score = 0;
      if (c.sector === current.sector) score += 3;
      if (c.state === current.state) score += 1;
      if (c.companyType === current.companyType) score += 1;
      score += c.valueProps.filter((v) => current.valueProps.includes(v)).length;
      return { c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.c);
};
