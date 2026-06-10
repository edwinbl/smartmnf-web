export type EventType =
  | "Summit"
  | "Workshop"
  | "Roundtable"
  | "Seminar"
  | "Programme";

export type EventStatus = "open" | "invite" | "soon" | "live" | "completed";
export type EventMode = "Physical" | "Virtual" | "Hybrid";
export type EventLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface EventSpeaker {
  name: string;
  role: string;
  org: string;
  initials: string;
  email?: string;
  phone?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  track?: string;
  speaker?: string;
}

export interface WorkshopReport {
  mainTakeaways: string[];
  clustersCovered: string[];
  attendees: number;
  successStories: string[];
}

export interface WorkshopPresentation {
  title: string;
  speaker?: string;
  url: string;
  size?: string;
}

export interface ResourcePerson {
  name: string;
  expertise: string;
  org: string;
  email?: string;
  phone?: string;
}

export interface WorkshopPhoto {
  url: string;
  caption?: string;
}


export interface EventItem {
  slug: string;
  type: EventType;
  title: string;
  tagline: string;
  summary: string;
  theme?: string;
  date: string; // human readable
  isoDate: string; // for countdown
  endDate?: string;
  duration: string;
  location: string;
  venue?: string;
  mode: EventMode;
  level: EventLevel;
  industry: string;
  technology: string;
  segment: "MSME" | "Enterprise" | "Ecosystem";
  status: EventStatus;
  featured?: boolean;
  flagship?: boolean;
  seats?: string;
  price?: string;
  registrationLabel: string;
  highlights: { label: string; value: string }[];
  speakers: EventSpeaker[];
  agenda?: AgendaItem[];
  tracks?: string[];
  partners?: string[];
  outcomes?: string[];
  faqs?: { q: string; a: string }[];
  // past event extras
  recordingsUrl?: string;
  proceedingsUrl?: string;
  highlightReelUrl?: string;
  pastStats?: { label: string; value: string }[];
  // workshop post-event extras
  organizers?: string[];
  report?: WorkshopReport;
  reportPdfUrl?: string;
  presentations?: WorkshopPresentation[];
  resourcePersons?: ResourcePerson[];
  photographs?: WorkshopPhoto[];
  learnings?: string[];
  accent: "navy" | "red" | "gold" | "teal" | "orange";
}


// ----- Speakers pool -----
const S = {
  ravi: { name: "Ravi Sankaran", role: "Chairman", org: "CII Smart Mfg.", initials: "RS" },
  meera: { name: "Dr. Meera Iyer", role: "Director, Industry 4.0", org: "IIT Madras", initials: "MI" },
  arjun: { name: "Arjun Bhatia", role: "CTO", org: "Tata Steel", initials: "AB" },
  priya: { name: "Priya Narayanan", role: "Head, Smart Factory", org: "Mahindra", initials: "PN" },
  sundar: { name: "Sundar Pichai R.", role: "VP Operations", org: "Bosch India", initials: "SP" },
  asha: { name: "Asha Krishnan", role: "Sustainability Lead", org: "Wipro", initials: "AK" },
  vikram: { name: "Vikram Joshi", role: "Founder", org: "EdgeAI Labs", initials: "VJ" },
  neha: { name: "Neha Kapoor", role: "Programme Director", org: "MSME Ministry", initials: "NK" },
} as const;

// ----- Events dataset -----
export const events: EventItem[] = [
  // FLAGSHIP
  {
    slug: "smart-mfg-summit-2026",
    type: "Summit",
    title: "Smart Manufacturing Summit 2026",
    tagline: "India's flagship Industry 4.0 leadership convening",
    summary:
      "Three days of strategy, breakthroughs and ecosystem deal-making with India's top manufacturing CEOs, CTOs, policymakers and technology leaders.",
    theme: "Made Smart in India â Scaling Industry 4.0 Beyond Pilots",
    date: "12â14 February 2026",
    isoDate: "2026-02-12T09:30:00+05:30",
    endDate: "2026-02-14T18:00:00+05:30",
    duration: "3 days",
    location: "Bengaluru, India",
    venue: "Bangalore International Exhibition Centre",
    mode: "Hybrid",
    level: "All Levels",
    industry: "Cross-industry",
    technology: "Industry 4.0",
    segment: "Ecosystem",
    status: "open",
    featured: true,
    flagship: true,
    registrationLabel: "Register Now",
    highlights: [
      { label: "Industry leaders", value: "120+" },
      { label: "Sessions & tracks", value: "60+" },
      { label: "Ecosystem partners", value: "85" },
      { label: "Expected delegates", value: "3,500" },
    ],
    speakers: [S.ravi, S.arjun, S.priya, S.meera, S.sundar, S.asha],
    tracks: [
      "Smart Factory & Operations",
      "AI & Industrial Data",
      "Sustainability & Energy",
      "MSME Transformation",
      "Workforce 4.0",
      "Policy & Ecosystem",
    ],
    agenda: [
      { time: "Day 1 Â· 09:30", title: "Opening Keynote: India's Industry 4.0 Decade", speaker: "Ravi Sankaran", track: "Plenary" },
      { time: "Day 1 Â· 11:00", title: "CEO Panel â Scaling Beyond Pilots", track: "Leadership" },
      { time: "Day 1 Â· 14:30", title: "Track Sessions begin (6 parallel halls)", track: "Tracks" },
      { time: "Day 2 Â· 09:30", title: "AI on the Shop Floor â Live Demos", speaker: "Vikram Joshi", track: "Technology" },
      { time: "Day 2 Â· 15:00", title: "MSME Transformation Showcase", track: "MSME" },
      { time: "Day 3 Â· 11:00", title: "Sustainability & Net-Zero Manufacturing", speaker: "Asha Krishnan", track: "Sustainability" },
      { time: "Day 3 Â· 17:00", title: "Closing Plenary + Smart Mfg. Awards", track: "Plenary" },
    ],
    partners: ["Tata Steel", "Mahindra", "Bosch", "Siemens", "Microsoft", "AWS", "Wipro", "TCS"],
    faqs: [
      { q: "Is virtual access included?", a: "Yes. Hybrid pass includes live streams of all plenaries and select tracks." },
      { q: "Are there MSME-only seats?", a: "Yes. 600 subsidized seats reserved for MSME delegates via the readiness assessment portal." },
      { q: "Can my organisation become a partner?", a: "Absolutely â view the Partner With Us page to explore brand, knowledge and innovation tiers." },
    ],
    accent: "red",
  },

  // CONFERENCE
  {
    slug: "industry40-leaders-conference",
    type: "Workshop",
    title: "Industry 4.0 Leaders Conference",
    tagline: "Scaling digital transformation in Indian manufacturing",
    summary:
      "Two-day conference bringing together transformation leaders to share blueprints, case studies and live shop-floor demonstrations.",
    date: "18â19 March 2026",
    isoDate: "2026-03-18T09:30:00+05:30",
    duration: "2 days",
    location: "Pune, India",
    venue: "JW Marriott, Pune",
    mode: "Physical",
    level: "Intermediate",
    industry: "Automotive",
    technology: "IoT & Analytics",
    segment: "Enterprise",
    status: "open",
    featured: true,
    registrationLabel: "Explore Event",
    highlights: [
      { label: "Sessions", value: "32" },
      { label: "Speakers", value: "45" },
      { label: "Live demos", value: "12" },
    ],
    speakers: [S.arjun, S.priya, S.sundar, S.vikram],
    partners: ["Mahindra", "Bosch", "Siemens", "Tata Technologies"],
    tracks: ["Connected Operations", "Predictive Quality", "Supply Chain 4.0", "Workforce Enablement"],
    accent: "navy",
  },

  // ROUNDTABLES
  {
    slug: "ceo-roundtable-ai-operations",
    type: "Roundtable",
    title: "CEO Roundtable: AI in Operations",
    tagline: "Invitation-only discussion with manufacturing CEOs",
    summary:
      "A curated executive dialogue on deploying generative and industrial AI across operations â Chatham House rules, 20 seats only.",
    date: "24 January 2026",
    isoDate: "2026-01-24T15:00:00+05:30",
    duration: "3 hours",
    location: "Mumbai, India",
    venue: "Taj Lands End â Private Boardroom",
    mode: "Physical",
    level: "Advanced",
    industry: "Cross-industry",
    technology: "AI & Automation",
    segment: "Enterprise",
    status: "invite",
    featured: true,
    seats: "20 seats Â· Invite only",
    registrationLabel: "Request Invite",
    highlights: [
      { label: "Format", value: "Chatham House" },
      { label: "Seats", value: "20" },
      { label: "Hosted by", value: "CII Smart Mfg." },
    ],
    speakers: [S.ravi, S.arjun, S.priya],
    outcomes: [
      "Shared playbook on AI deployment across operations",
      "Cross-industry benchmark on AI maturity",
      "Curated peer network for ongoing exchange",
    ],
    accent: "gold",
  },
  {
    slug: "msme-leaders-roundtable",
    type: "Roundtable",
    title: "MSME Leaders Roundtable: Cost of Digital",
    tagline: "Frank conversations on what really works for MSMEs",
    summary:
      "An invite-only roundtable for MSME promoters and CEOs to debate cost, ROI and ecosystem support for Industry 4.0 adoption.",
    date: "07 February 2026",
    isoDate: "2026-02-07T11:00:00+05:30",
    duration: "Half day",
    location: "Coimbatore, India",
    venue: "CII Southern Region HQ",
    mode: "Physical",
    level: "Intermediate",
    industry: "MSME",
    technology: "Industry 4.0",
    segment: "MSME",
    status: "invite",
    seats: "25 seats Â· Invite only",
    registrationLabel: "Request Invite",
    highlights: [
      { label: "Seats", value: "25" },
      { label: "Format", value: "Closed door" },
    ],
    speakers: [S.neha, S.priya, S.ravi],
    accent: "gold",
  },

  // WEBINARS
  {
    slug: "webinar-predictive-maintenance",
    type: "Workshop",
    title: "Predictive Maintenance in 90 Days",
    tagline: "A practical roadmap for MSMEs",
    summary:
      "Hands-on webinar walking through a 90-day plan to deploy predictive maintenance on a single shop-floor asset.",
    date: "09 January 2026 Â· 4:00 PM IST",
    isoDate: "2026-01-09T16:00:00+05:30",
    duration: "60 min",
    location: "Online",
    mode: "Virtual",
    level: "Beginner",
    industry: "Manufacturing",
    technology: "IoT & Analytics",
    segment: "MSME",
    status: "open",
    price: "Free",
    registrationLabel: "Register Free",
    highlights: [
      { label: "Duration", value: "60 min" },
      { label: "Format", value: "Live + Q&A" },
      { label: "Cost", value: "Free" },
    ],
    speakers: [S.vikram],
    outcomes: [
      "Identify the right pilot asset",
      "Choose sensors, gateways and platform",
      "Build the business case for scale",
    ],
    accent: "teal",
  },
  {
    slug: "webinar-energy-monitoring",
    type: "Workshop",
    title: "Energy Monitoring for Net-Zero",
    tagline: "From metering to insights",
    summary:
      "Learn how leading plants are wiring up energy data to drive both cost and carbon reduction.",
    date: "22 January 2026 Â· 3:30 PM IST",
    isoDate: "2026-01-22T15:30:00+05:30",
    duration: "45 min",
    location: "Online",
    mode: "Virtual",
    level: "Beginner",
    industry: "Cross-industry",
    technology: "Sustainability",
    segment: "Enterprise",
    status: "open",
    price: "Free",
    registrationLabel: "Register Free",
    highlights: [
      { label: "Duration", value: "45 min" },
      { label: "Cost", value: "Free" },
    ],
    speakers: [S.asha],
    accent: "teal",
  },
  {
    slug: "webinar-cybersecurity-ot",
    type: "Workshop",
    title: "Cybersecurity for OT Environments",
    tagline: "Protecting connected shop floors",
    summary:
      "What every plant manager should know about securing connected OT â common attack patterns and a starter checklist.",
    date: "05 February 2026 Â· 4:00 PM IST",
    isoDate: "2026-02-05T16:00:00+05:30",
    duration: "60 min",
    location: "Online",
    mode: "Virtual",
    level: "Intermediate",
    industry: "Cross-industry",
    technology: "Cybersecurity",
    segment: "Enterprise",
    status: "open",
    price: "Free",
    registrationLabel: "Register Free",
    highlights: [
      { label: "Duration", value: "60 min" },
      { label: "Cost", value: "Free" },
    ],
    speakers: [S.sundar],
    accent: "teal",
  },



  // PAST
  {
    slug: "past-smart-mfg-summit-2025",
    type: "Summit",
    title: "Smart Manufacturing Summit 2025",
    tagline: "Made Smart in India â 2025 edition",
    summary:
      "The 2025 edition convened 3,100+ delegates, 110 speakers and 70 ecosystem partners across three days in Hyderabad.",
    date: "13â15 February 2025",
    isoDate: "2025-02-13T09:30:00+05:30",
    duration: "3 days",
    location: "Hyderabad, India",
    mode: "Hybrid",
    level: "All Levels",
    industry: "Cross-industry",
    technology: "Industry 4.0",
    segment: "Ecosystem",
    status: "completed",
    registrationLabel: "View Highlights",
    highlights: [
      { label: "Delegates", value: "3,100" },
      { label: "Speakers", value: "110" },
      { label: "Sessions", value: "58" },
    ],
    pastStats: [
      { label: "Delegates", value: "3,100+" },
      { label: "Industries", value: "22" },
      { label: "States represented", value: "27" },
      { label: "MSMEs participated", value: "640" },
    ],
    speakers: [S.ravi, S.arjun, S.meera, S.asha, S.priya],
    highlightReelUrl: "https://www.youtube.com/",
    recordingsUrl: "https://www.youtube.com/",
    proceedingsUrl: "#",
    organizers: [
      "Confederation of Indian Industry (CII)",
      "CII Smart Manufacturing Council",
      "Government of Telangana â Industries & Commerce",
    ],
    agenda: [
      { time: "Day 1 Â· 09:30", title: "Opening Plenary â State of Indian Manufacturing", speaker: "Ravi Sankaran", track: "Plenary" },
      { time: "Day 1 Â· 11:00", title: "CEO Forum: Scaling Industry 4.0 Beyond Pilots", track: "Leadership" },
      { time: "Day 1 Â· 14:30", title: "Track sessions across 6 parallel halls", track: "Tracks" },
      { time: "Day 2 Â· 10:00", title: "AI on the Shop Floor â Live Demos", track: "Technology" },
      { time: "Day 2 Â· 15:00", title: "MSME Transformation Showcase", track: "MSME" },
      { time: "Day 3 Â· 11:00", title: "Sustainability & Net-Zero Manufacturing", speaker: "Asha Krishnan", track: "Sustainability" },
      { time: "Day 3 Â· 17:00", title: "Closing Plenary + Smart Manufacturing Awards", track: "Plenary" },
    ],
    report: {
      attendees: 3100,
      clustersCovered: ["Automotive", "Capital Goods", "Electronics", "Pharma", "Textiles", "Steel"],
      mainTakeaways: [
        "Indian manufacturers have moved from pilots to scale â over 40% of large enterprises now report enterprise-wide digital roadmaps.",
        "Data foundations and unified namespaces emerged as the top investment priority for the next 24 months.",
        "Workforce 4.0 is the binding constraint â reskilling programmes must triple capacity by 2027.",
        "MSMEs need shared infrastructure, financing instruments and cluster-led adoption support.",
        "Sustainability and Industry 4.0 are converging â energy data is the next high-ROI use case.",
      ],
      successStories: [
        "Tata Steel Kalinganagar â connected plant generating 2.1B data points/day driving predictive quality.",
        "Bosch Bidadi â AI-driven OEE programme delivering 11% throughput uplift across 9 lines.",
        "Mahindra Chakan â digital twin reducing changeover time by 38%.",
      ],
    },
    reportPdfUrl: "/__l5e/assets-v1/a38bc383-057c-4461-aae3-3874b0a3a028/workshop_report_industry40_2019.pdf",
    presentations: [
      { title: "State of Indian Manufacturing 2025 â Plenary", speaker: "Ravi Sankaran", url: "#", size: "4.6 MB" },
      { title: "Scaling AI on the Shop Floor", speaker: "Arjun Bhatia", url: "#", size: "5.2 MB" },
      { title: "MSME Transformation â Cluster Playbook", speaker: "Neha Kapoor", url: "#", size: "3.9 MB" },
      { title: "Sustainability & Net-Zero Manufacturing", speaker: "Asha Krishnan", url: "#", size: "3.1 MB" },
    ],
    resourcePersons: [
      { name: "Ravi Sankaran", expertise: "Industry 4.0 strategy, ecosystem orchestration", org: "CII Smart Manufacturing", email: "ravi.sankaran@cii.in" },
      { name: "Dr. Meera Iyer", expertise: "Digital twins, smart factory architecture", org: "IIT Madras", email: "meera.iyer@iitm.ac.in" },
      { name: "Asha Krishnan", expertise: "Sustainable manufacturing, energy management", org: "Wipro", email: "asha.k@wipro.com" },
    ],
    photographs: [
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", caption: "Opening plenary at Smart Manufacturing Summit 2025" },
      { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", caption: "CEO Forum â scaling beyond pilots" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "Exhibit hall and partner pavilions" },
      { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", caption: "Delegate networking lounge" },
    ],
    learnings: [
      "Boardroom commitment to digital transformation has crossed a tipping point in large Indian manufacturing.",
      "Data interoperability between OT and IT remains the #1 technical barrier to scaling.",
      "Public-private skilling partnerships are essential to keep up with demand for Industry 4.0 talent.",
      "Sustainability metrics should be integrated into every smart manufacturing programme by default.",
    ],
    accent: "navy",
  },
  {
    slug: "past-msme-conclave-2025",
    type: "Workshop",
    title: "MSME Industry 4.0 Conclave 2025",
    tagline: "Bringing digital to India's MSME backbone",
    summary:
      "A two-day conclave focused entirely on MSME transformation pathways, with 70+ case studies showcased.",
    date: "08â09 August 2025",
    isoDate: "2025-08-08T09:30:00+05:30",
    duration: "2 days",
    location: "Ahmedabad, India",
    mode: "Physical",
    level: "Beginner",
    industry: "MSME",
    technology: "Industry 4.0",
    segment: "MSME",
    status: "completed",
    registrationLabel: "Download Proceedings",
    highlights: [
      { label: "Delegates", value: "1,400" },
      { label: "Case studies", value: "70" },
      { label: "States", value: "18" },
    ],
    pastStats: [
      { label: "Delegates", value: "1,400" },
      { label: "Case studies", value: "70" },
      { label: "Mentors engaged", value: "55" },
    ],
    speakers: [S.neha, S.priya, S.vikram, S.ravi],
    proceedingsUrl: "#",
    recordingsUrl: "https://www.youtube.com/",
    organizers: [
      "Confederation of Indian Industry (CII)",
      "Ministry of MSME, Government of India",
      "CII Smart Manufacturing Council â Western Region",
    ],
    agenda: [
      { time: "Day 1 Â· 09:30", title: "Inaugural â MSMEs as the Backbone of Smart India", speaker: "Neha Kapoor", track: "Plenary" },
      { time: "Day 1 Â· 11:00", title: "Affordable Automation for MSMEs â Vendor Showcase", track: "Showcase" },
      { time: "Day 1 Â· 14:30", title: "Cluster Case Studies â Rajkot, Coimbatore, Pune", track: "Cluster" },
      { time: "Day 2 Â· 10:00", title: "Financing Digital Adoption â Banks & Schemes", track: "Finance" },
      { time: "Day 2 Â· 14:00", title: "Mentor Connect â 55 mentors, 200+ MSMEs", track: "Mentorship" },
      { time: "Day 2 Â· 16:30", title: "Closing â Cluster Pledges & Next Steps", track: "Plenary" },
    ],
    report: {
      attendees: 1400,
      clustersCovered: ["Auto components", "Textiles", "Foundry", "Light engineering", "Food processing"],
      mainTakeaways: [
        "Affordable, modular digital solutions designed for MSME shop floors are now widely available.",
        "Cluster-led adoption â anchored by a tier-1 OEM â accelerates MSME maturity 2â3x faster than standalone efforts.",
        "Working capital and CapEx subsidy access remain the most-cited barriers to adoption.",
        "Workforce upskilling at the operator level produces the highest ROI in the first 12 months.",
      ],
      successStories: [
        "Rajkot foundry cluster â IoT-based melt monitoring rolled out across 22 MSMEs.",
        "Coimbatore pumps cluster â predictive quality programme yielding 18% rework reduction.",
        "Pune auto-components â shared MES platform onboarding 35 Tier-2/3 suppliers.",
      ],
    },
    reportPdfUrl: "/__l5e/assets-v1/a38bc383-057c-4461-aae3-3874b0a3a028/workshop_report_industry40_2019.pdf",
    presentations: [
      { title: "MSMEs as the Backbone of Smart India â Inaugural", speaker: "Neha Kapoor", url: "#", size: "3.4 MB" },
      { title: "Affordable Automation Playbook for MSMEs", speaker: "Priya Narayanan", url: "#", size: "4.1 MB" },
      { title: "Financing Digital Adoption â Schemes & Instruments", url: "#", size: "2.7 MB" },
      { title: "Cluster Case Studies â Rajkot, Coimbatore, Pune", url: "#", size: "5.0 MB" },
    ],
    resourcePersons: [
      { name: "Neha Kapoor", expertise: "MSME policy, cluster programmes, scheme access", org: "MSME Ministry", email: "neha.kapoor@msme.gov.in" },
      { name: "Priya Narayanan", expertise: "Smart factory rollouts, affordable automation", org: "Mahindra", email: "priya.n@mahindra.com" },
      { name: "Vikram Joshi", expertise: "Edge AI, predictive maintenance for MSMEs", org: "EdgeAI Labs", email: "vikram@edgeai.io" },
    ],
    photographs: [
      { url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80", caption: "MSME promoters at the inaugural session" },
      { url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80", caption: "Vendor showcase â affordable automation" },
      { url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", caption: "Mentor connect â one-on-one sessions" },
      { url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80", caption: "Cluster pledges â closing ceremony" },
    ],
    learnings: [
      "MSME adoption rises sharply when peers in the same cluster share live, measurable results.",
      "Affordable plug-and-play kits (under â¹2 lakh) drive faster first-asset deployments.",
      "Mentor pools must be regional and language-localised to be effective.",
      "Scheme awareness is uneven â single-window digital access is needed at the cluster level.",
    ],
    accent: "orange",
  },
  {
    slug: "past-sustainability-roundtable-2025",
    type: "Roundtable",
    title: "Sustainable Manufacturing Roundtable",
    tagline: "CXO dialogue on the path to net-zero",
    summary:
      "Closed-door roundtable convening sustainability and operations leaders from 18 large manufacturers.",
    date: "20 October 2025",
    isoDate: "2025-10-20T15:00:00+05:30",
    duration: "Half day",
    location: "New Delhi, India",
    mode: "Physical",
    level: "Advanced",
    industry: "Cross-industry",
    technology: "Sustainability",
    segment: "Enterprise",
    status: "completed",
    registrationLabel: "Download Brief",
    highlights: [
      { label: "Participants", value: "18 CXOs" },
      { label: "Industries", value: "9" },
    ],
    pastStats: [
      { label: "CXOs", value: "18" },
      { label: "Recommendations", value: "12" },
    ],
    speakers: [S.asha, S.ravi, S.arjun],
    proceedingsUrl: "#",
    organizers: [
      "Confederation of Indian Industry (CII)",
      "CII Centre of Excellence for Sustainability",
    ],
    agenda: [
      { time: "15:00 â 15:15", title: "Welcome & Framing", speaker: "Ravi Sankaran" },
      { time: "15:15 â 16:00", title: "State of Net-Zero Manufacturing in India", speaker: "Asha Krishnan" },
      { time: "16:00 â 17:00", title: "Roundtable â Capital, Carbon & Compliance", track: "Closed door" },
      { time: "17:00 â 17:45", title: "Working session â 12 ecosystem recommendations" },
      { time: "17:45 â 18:00", title: "Closing & next steps" },
    ],
    report: {
      attendees: 18,
      clustersCovered: ["Steel", "Cement", "Chemicals", "Auto", "Capital goods"],
      mainTakeaways: [
        "Scope 3 emissions visibility across supply chains is the largest unsolved challenge for Indian manufacturers.",
        "Carbon pricing and CBAM readiness must become board-level agenda items within 12 months.",
        "Energy data infrastructure should be treated as a foundational Industry 4.0 layer.",
        "Green financing instruments are emerging but require pre-validated decarbonisation roadmaps to access.",
      ],
      successStories: [
        "Cement major â 28% reduction in specific energy through digital twin of kiln operations.",
        "Steel producer â green-hydrogen pilot integrated with real-time emissions dashboarding.",
        "Auto OEM â supplier scope-3 disclosure portal live across 140 Tier-1s.",
      ],
    },
    reportPdfUrl: "/__l5e/assets-v1/a38bc383-057c-4461-aae3-3874b0a3a028/workshop_report_industry40_2019.pdf",
    presentations: [
      { title: "State of Net-Zero Manufacturing in India", speaker: "Asha Krishnan", url: "#", size: "3.6 MB" },
      { title: "CBAM Readiness â A Practical Checklist", url: "#", size: "1.9 MB" },
      { title: "Energy Data Infrastructure for Decarbonisation", url: "#", size: "2.8 MB" },
    ],
    resourcePersons: [
      { name: "Asha Krishnan", expertise: "Sustainability strategy, Scope 1/2/3 accounting", org: "Wipro", email: "asha.k@wipro.com" },
      { name: "Arjun Bhatia", expertise: "Decarbonisation of heavy industry, green hydrogen", org: "Tata Steel", email: "arjun.b@tatasteel.com" },
    ],
    photographs: [
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", caption: "CXO roundtable in session" },
      { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", caption: "Working session â recommendations" },
      { url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80", caption: "Industry leaders â closing dialogue" },
    ],
    learnings: [
      "Net-zero programmes succeed when paired with measurable, plant-level digital data flows.",
      "CXO-level peer dialogue accelerates cross-industry adoption of decarbonisation tooling.",
      "Policy clarity on carbon disclosure will unlock green capital at scale.",
      "Ecosystem coordination is needed across OEM-supplier chains for credible Scope 3 progress.",
    ],
    accent: "gold",
  },
  {
    slug: "past-awareness-workshop-industry40-2019",
    type: "Workshop",
    title: "Awareness Workshop on Industry 4.0",
    tagline: "The Indian Perspective",
    summary:
      "A one-day awareness workshop unpacking the Indian perspective on Industry 4.0 â covering smart automation, IIoT layers, additive manufacturing, AR/ML and digital deployment, with live case studies from industry leaders.",
    theme: "Industry 4.0 â The Indian Perspective",
    date: "27 February 2019",
    isoDate: "2019-02-27T10:30:00+05:30",
    duration: "1 day (10:30 AM â 4:00 PM)",
    location: "Gurugram, Haryana",
    venue: "CII Office, Plot No. 249F, Phase IV, Udyog Vihar, Sector 18, Gurugram",
    mode: "Physical",
    level: "Beginner",
    industry: "Cross-industry",
    technology: "Industry 4.0",
    segment: "Enterprise",
    status: "completed",
    registrationLabel: "Download Proceedings",
    highlights: [
      { label: "Sessions", value: "9" },
      { label: "Speakers", value: "6" },
      { label: "Duration", value: "1 day" },
    ],
    pastStats: [
      { label: "Sessions", value: "9" },
      { label: "Speakers", value: "6" },
      { label: "Format", value: "In-person workshop" },
    ],
    speakers: [
      { name: "Satendra Singh", role: "Head â Manufacturing & Strategy", org: "Nokia Solutions and Networks India Pvt. Ltd.", initials: "SS", email: "satendra.singh@nokia.com", phone: "+91 124 4500 100" },
      { name: "Ravi Agarwal", role: "MD & President, Automation Industry Association", org: "Pepperl+Fuchs Factory Automation", initials: "RA", email: "ravi.agarwal@pepperl-fuchs.com", phone: "+91 80 6788 1000" },
      { name: "Dr Sunil Jha", role: "Director, FSM & Lead Facilitator FSM Technology Team", org: "IIT Delhi", initials: "SJ", email: "suniljha@mech.iitd.ac.in", phone: "+91 11 2659 1135" },
      { name: "Sandeep Singh", role: "Director", org: "Reckers Mechatronics Pvt Ltd", initials: "SS", email: "sandeep@reckers.in", phone: "+91 124 4032 900" },
      { name: "Saroop Chand", role: "Managing Director", org: "Adroitec Information Systems", initials: "SC", email: "saroop.chand@adroitec.com", phone: "+91 124 4309 200" },
      { name: "Anup Wadhwa", role: "Director", org: "Automation Industry Association", initials: "AW", email: "director@aia-india.org", phone: "+91 124 4014 444" },
    ],

    agenda: [
      { time: "10:00 â 10:30", title: "Registration" },
      { time: "10:30 â 10:40", title: "Welcome Address", speaker: "Satendra Singh â Member, CII Smart Manufacturing Council" },
      { time: "10:40 â 10:50", title: "Special Address", speaker: "Ms Sukriti Likhi, Joint Secretary, Department of Heavy Industry (DHI)" },
      { time: "10:50 â 11:10", title: "Business Disruptions and Opportunities for Smart Manufacturing in India", speaker: "Ravi Agarwal" },
      { time: "11:10 â 11:20", title: "Tea Break" },
      { time: "11:20 â 12:25", title: "Getting started with Smart Automation and IIoT Layers â Case Study of Pilot Cyber Physical Line", speaker: "Dr Sunil Jha" },
      { time: "12:25 â 12:50", title: "Challenges in Automated Tracking, Tracing and Remote Supervision", speaker: "Sandeep Singh" },
      { time: "12:50 â 13:10", title: "Relevance of Additive Manufacturing beyond Prototyping", speaker: "Saroop Chand" },
      { time: "13:10 â 13:15", title: "Q&A" },
      { time: "13:15 â 14:00", title: "Lunch Break" },
      { time: "14:00 â 15:05", title: "Preparing for the next level of Digital Journey with Augmented Reality and Machine Learning", speaker: "Dr Sunil Jha" },
      { time: "15:05 â 15:35", title: "Business Value Creation through Automation and Digital Deployment â Open House Facilitation", speaker: "Pravin Purang" },
      { time: "15:35 â 15:50", title: "Leveraging the Common Engineering & Cyber Physical Facilities Centre", speaker: "Anup Wadhwa" },
      { time: "15:50 â 16:00", title: "Summing up" },
    ],
    partners: ["CII Smart Manufacturing Council", "Automation Industry Association", "Department of Heavy Industry"],
    proceedingsUrl: "#",
    organizers: [
      "Confederation of Indian Industry (CII)",
      "CII Smart Manufacturing Council",
      "Automation Industry Association (AIA)",
    ],
    report: {
      attendees: 45,
      clustersCovered: ["Automotive", "General Engineering"],
      mainTakeaways: [
        "Indian manufacturers need a phased adoption path â start with connected assets, then layer analytics and AI.",
        "IIoT readiness depends as much on workforce reskilling and OT-IT governance as on technology investment.",
        "Additive manufacturing has moved well beyond prototyping and is now production-relevant for tooling and spares.",
        "AR and ML on the shop floor deliver measurable gains in first-time-right and operator productivity.",
        "Shared cyber-physical facility centres can dramatically lower the entry cost for MSMEs.",
      ],
      successStories: [
        "Pilot cyber-physical line at IIT Delhi demonstrating end-to-end IIoT stack â compile a case write-up.",
        "Pepperl+Fuchs deployment of smart sensors enabling predictive quality at an automotive Tier-1.",
        "Reckers Mechatronics remote supervision rollout across multi-site operations.",
        "Adroitec additive manufacturing applications in jigs, fixtures and low-volume spares.",
      ],
    },
    reportPdfUrl: "/__l5e/assets-v1/a38bc383-057c-4461-aae3-3874b0a3a028/workshop_report_industry40_2019.pdf",
    presentations: [
      { title: "Business Disruptions & Opportunities for Smart Manufacturing in India", speaker: "Ravi Agarwal", url: "#", size: "3.2 MB" },
      { title: "Getting started with Smart Automation & IIoT Layers â Pilot Cyber Physical Line", speaker: "Dr Sunil Jha", url: "#", size: "5.8 MB" },
      { title: "Challenges in Automated Tracking, Tracing & Remote Supervision", speaker: "Sandeep Singh", url: "#", size: "2.4 MB" },
      { title: "Additive Manufacturing beyond Prototyping", speaker: "Saroop Chand", url: "#", size: "2.9 MB" },
      { title: "AR & Machine Learning â The Next Digital Journey", speaker: "Dr Sunil Jha", url: "#", size: "4.1 MB" },
      { title: "Common Engineering & Cyber Physical Facilities Centre â Overview", speaker: "Anup Wadhwa", url: "#", size: "1.8 MB" },
    ],
    resourcePersons: [
      { name: "Dr Sunil Jha", expertise: "Cyber-physical systems, IIoT architecture, AR/ML on shop floor", org: "IIT Delhi", email: "suniljha@mech.iitd.ac.in", phone: "+91 11 2659 1135" },
      { name: "Ravi Agarwal", expertise: "Industrial automation, smart sensors, factory automation strategy", org: "Pepperl+Fuchs / AIA", email: "ravi.agarwal@pepperl-fuchs.com", phone: "+91 80 6788 1000" },
      { name: "Anup Wadhwa", expertise: "Shared facility centres, automation skilling, policy advocacy", org: "Automation Industry Association", email: "director@aia-india.org", phone: "+91 124 4014 444" },
      { name: "Saroop Chand", expertise: "Additive manufacturing, digital design, PLM consultancy", org: "Adroitec Information Systems", email: "saroop.chand@adroitec.com", phone: "+91 124 4309 200" },
    ],
    photographs: [
      { url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80", caption: "Opening session with CII Smart Manufacturing Council members" },
      { url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80", caption: "Delegates from automotive and general engineering clusters" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", caption: "Panel on IIoT layers and pilot cyber-physical line" },
      { url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80", caption: "Live demonstration of smart automation sensors" },
      { url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80", caption: "Additive manufacturing case studies showcase" },
      { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", caption: "Networking break â cross-cluster knowledge exchange" },
    ],
    learnings: [
      "Awareness on Industry 4.0 is high in pockets but uneven across clusters â sustained engagement is needed for MSMEs.",
      "Adoption is constrained more by skill gaps and change management than by technology cost.",
      "A reference architecture for IIoT layers (sensors â connectivity â analytics â AI) helps demystify deployment for industry leaders.",
      "Shared cyber-physical facility centres should be expanded regionally to give MSMEs a hands-on testbed.",
      "Future workshops should be cluster-specific (automotive, capital goods, electronics) with focused success stories.",
      "Follow-up actions: publish proceedings, build a directory of resource persons, and seed a benchmark study on Indian smart-manufacturing maturity.",
    ],
    accent: "navy",
  },
];


export const eventTypes: ("All" | EventType)[] = [
  "All",
  "Summit",
  "Workshop",
  "Roundtable",
];

export type QuickPickId =
  | "this-month"
  | "msme"
  | "sustainability"
  | "ai"
  | "networking";

export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);
export const getFlagship = () => events.find((e) => e.flagship) ?? events[0];
export const getUpcoming = () => events.filter((e) => e.status !== "completed");
export const getPast = () => events.filter((e) => e.status === "completed");
export const getRelatedEvents = (slug: string, count = 3) => {
  const cur = getEventBySlug(slug);
  if (!cur) return [];
  return events
    .filter((e) => e.slug !== slug && e.status !== "completed")
    .sort((a, b) => (a.type === cur.type ? -1 : 1) - (b.type === cur.type ? -1 : 1))
    .slice(0, count);
};
