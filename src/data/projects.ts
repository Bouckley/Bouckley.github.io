export type ProjectCategory = "software" | "data" | "ai-ml";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  role: string;
  startISO: string;
  period: string;
  tech: string[];
  highlights: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  software: "Software",
  data: "Data",
  "ai-ml": "AI / ML",
};

export const projects: Project[] = [
  {
    id: "roamer",
    title: "Roamer",
    tagline: "Location-Based Social App",
    description:
      "A geo-social mobile app that renders friends' posts as GPS-pinned landmarks on a live Mapbox map, with privacy enforced at the database layer.",
    longDescription:
      "Built a full-stack geo-social mobile app rendering friends' posts as GPS-pinned landmarks on a live Mapbox GL map, backed by Supabase PostgreSQL/PostGIS with GIST-indexed geography. Row-level security enforces location fuzzing (ST_SnapToGrid) and privacy controls at the database layer rather than in application code, so a client bug cannot leak a precise location.",
    category: "software",
    role: "Full-Stack Developer",
    startISO: "2026-06",
    period: "Jun 2026 – Present",
    tech: ["React Native", "TypeScript", "Mapbox GL", "Supabase", "PostGIS", "PostgreSQL"],
    highlights: [
      "Live Mapbox GL map rendering friends' posts as GPS-pinned landmarks",
      "GIST-indexed PostGIS geography for fast proximity queries",
      "Row-level security enforcing privacy controls at the database layer",
      "Location fuzzing via ST_SnapToGrid so precise coordinates never leave the DB",
    ],
    featured: true,
  },
  {
    id: "policyproof",
    title: "PolicyProof",
    tagline: "AI Policy Compliance Platform",
    description:
      "An AI compliance-auditing platform that checks policy PDFs against 15+ regulatory frameworks and generates page-level citations automatically.",
    longDescription:
      "Engineered an AI compliance-auditing platform using an Amazon Bedrock pipeline that checks policy PDFs against 15+ frameworks including GDPR, HIPAA, SOC 2, and ISO 27001. The system detects violations, validates compliant sections, and generates page-level citations with remediation steps — processing a 10-page policy document in under 5 seconds.",
    category: "ai-ml",
    role: "Full-Stack Developer",
    startISO: "2026-01",
    period: "Jan 2026",
    tech: ["React", "TypeScript", "Flask", "AWS Bedrock", "Python"],
    highlights: [
      "Audits policies against 15+ regulatory frameworks (GDPR, HIPAA, SOC 2, ISO 27001)",
      "Amazon Bedrock pipeline for violation detection and compliance validation",
      "Automatic page-level citations and remediation steps",
      "Processes a 10-page policy document in under 5 seconds",
    ],
    featured: true,
    githubUrl: "https://github.com/Queens-Dev-Den/PolicyProof",
  },
  {
    id: "fci",
    title: "Fleet Condition Index",
    tagline: "Predictive Fleet Scoring Model",
    description:
      "A fleet-scoring model built on 10 years of work-order data that identifies the best and worst performing buses with 100% accuracy.",
    longDescription:
      "Designed a fleet-scoring model on 10 years of work-order data — weighting age, mileage, and mechanical history — reaching 100% accuracy in identifying the 15 best- and 15 worst-performing buses. Delivered an Excel index and Power BI dashboard for maintenance-cost tracking that guides long-term fleet-planning decisions at Durham Region Transit.",
    category: "data",
    role: "Data Analyst",
    startISO: "2025-05",
    period: "May 2025 – Aug 2025",
    tech: ["Python", "SQL", "Power BI", "Excel"],
    highlights: [
      "Scoring model weighting age, mileage, and mechanical history",
      "100% accuracy identifying the 15 best- and worst-performing buses",
      "Power BI dashboard for condition and maintenance-cost tracking",
      "Guides long-term fleet-planning and retirement decisions",
    ],
    featured: true,
  },
  {
    id: "fuzzy-matching",
    title: "Asset Fuzzy Matching",
    tagline: "Risk Detection at Scale",
    description:
      "A fuzzy-matching system that flags enterprise assets whose manufacturer names, dates, or versions have drifted, across 25,000+ records.",
    longDescription:
      "Built a fuzzy-matching system that assesses asset risk by detecting manufacturers and components with changed names, dates, or versions. String-similarity algorithms flag records for audit across an inventory of 25,000+ assets, surfacing drift that exact-match reconciliation misses entirely.",
    category: "data",
    role: "Data Analyst",
    startISO: "2026-06",
    period: "Jun 2026 – Present",
    tech: ["Python", "SQL", "ServiceNow CMDB"],
    highlights: [
      "String-similarity matching across 25,000+ enterprise assets",
      "Detects manufacturer, date, and version drift that exact matching misses",
      "Flags records for audit and downstream risk assessment",
    ],
    featured: false,
  },
  {
    id: "activize",
    title: "Activize",
    tagline: "AI Personal Fitness Trainer",
    description:
      "A full-stack AI fitness trainer delivering personalized workout advice and routine improvements via the OpenAI API.",
    longDescription:
      "Developed a full-stack AI-powered fitness trainer providing personalized fitness advice and improvements to workout routines, with OpenAI API integration for context-aware training recommendations. Built during QHacks.",
    category: "ai-ml",
    role: "Full-Stack Developer",
    startISO: "2024-01",
    period: "Jan 2024",
    tech: ["React", "JavaScript", "Python", "SQL", "OpenAI API"],
    highlights: [
      "Context-aware personal training recommendations",
      "OpenAI API integration for routine analysis",
      "Full-stack implementation built during QHacks",
    ],
    featured: false,
    githubUrl: "https://github.com/Queens-Dev-Den/QHacks",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
