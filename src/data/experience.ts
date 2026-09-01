export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  /** Machine-readable start, for <time datetime>. */
  startISO: string;
  startDate: string;
  /** Omitted while the role is ongoing. */
  endISO?: string;
  endDate: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "cibc",
    title: "AI & Data Analyst, Risk Asset Management",
    company: "CIBC",
    location: "Toronto, ON",
    startISO: "2026-05",
    startDate: "May 2026",
    endDate: "Present",
    current: true,
    summary:
      "Automating asset-remediation decisions across the enterprise asset inventory and translating risk analysis into stakeholder recommendations.",
    highlights: [
      "Automated asset-remediation decisions at scale with rules-based algorithms, replacing manual review across an inventory of 40,000+ enterprise assets and cutting review time by 50%.",
      "Analyzed the risk profile of 40,000+ enterprise assets to prioritize remediation and reduce security exposure.",
      "Delivered data-driven analysis and recommendations to stakeholders, informing enterprise asset-management decisions.",
    ],
    tech: ["Python", "SQL", "ServiceNow CMDB", "Data Analysis"],
  },
  {
    id: "drt",
    title: "Data Analyst Intern",
    company: "Durham Region Transit",
    location: "Whitby, ON",
    startISO: "2025-05",
    startDate: "May 2025",
    endISO: "2025-08",
    endDate: "Aug 2025",
    summary:
      "Turned a decade of fleet maintenance history into dashboards that drove scheduling and asset-retirement decisions.",
    highlights: [
      "Analyzed 20,000+ work orders across a 200+ vehicle fleet using SQL, Python (Pandas, NumPy), and Excel, resolving data-quality issues that improved reporting workflow efficiency by 50%.",
      "Developed interactive Power BI dashboards giving stakeholders end-to-end visibility into fleet KPIs and cost per service hour, driving data-driven scheduling and asset-retirement decisions.",
    ],
    tech: ["SQL", "Python", "Pandas", "NumPy", "Power BI", "Excel", "Maximo"],
  },
  {
    id: "lifetime",
    title: "Lifeguard & Swim Instructor",
    company: "LifeTime Fitness",
    location: "Ajax, ON",
    startISO: "2021-03",
    startDate: "Mar 2021",
    endISO: "2025-08",
    endDate: "Aug 2025",
    summary:
      "Four years of safety-critical work and instruction alongside school and internships.",
    highlights: [
      "Conducted rescues, administered first aid and CPR, and maintained patron safety across high-traffic aquatic facilities.",
      "Instructed swim lessons for students from infants to adults, building water safety and confidence.",
    ],
    tech: ["First Aid", "CPR-C", "Instruction", "Communication"],
  },
];

export type Leadership = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startISO: string;
  startDate: string;
  endISO?: string;
  endDate: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
};

export const leadership: Leadership[] = [
  {
    id: "qsao",
    title: "Project Manager",
    organization: "Queen's Sports Analytics Organization (QSAO)",
    location: "Kingston, ON",
    startISO: "2025-09",
    startDate: "Sept 2025",
    endDate: "Present",
    current: true,
    highlights: [
      "Led a team of 5 analysts producing performance insights from 10,000+ data points per season, delivering dashboards tracking player KPIs, lineup efficiency, and team trends.",
    ],
    skills: ["Team Leadership", "Data Analytics", "Dashboards", "Technical Writing"],
  },
  {
    id: "compsa",
    title: "Socials Logistics Coordinator",
    organization: "Queen's Computing Students Association (COMPSA)",
    startISO: "2024-06",
    startDate: "Jun 2024",
    endISO: "2025-08",
    endDate: "Aug 2025",
    highlights: [
      "Planned and hosted social events for 1,500+ computing students — booking venues, managing budgets, and coordinating logistics across several faculties.",
    ],
    skills: ["Event Planning", "Budget Management", "Logistics"],
  },
  {
    id: "orientation",
    title: "Faculty of Computing Group Leader",
    organization: "Queen's Computing Orientation",
    startISO: "2024-06",
    startDate: "Jun 2024",
    endISO: "2025-04",
    endDate: "Apr 2025",
    highlights: [
      "Led first-year computing students through Orientation Week, organizing icebreakers, faculty events, and a campus-wide festival.",
      "Supported students through the transition to university with academic direction, resources, and tutoring.",
    ],
    skills: ["Leadership", "Mentoring", "Event Coordination"],
  },
  {
    id: "qdaa",
    title: "Data Analyst / Developer",
    organization: "Queen's Data Analytics Association",
    startISO: "2023-09",
    startDate: "Sept 2023",
    endISO: "2025-04",
    endDate: "Apr 2025",
    highlights: [
      "Built software in a team setting through collaboration between business and computing associates, applying quality-improvement principles throughout.",
      "Partnered with project managers to review software, run project meetings, and pitch functionality to stakeholders.",
    ],
    skills: ["Software Development", "Data Analytics", "Project Management"],
  },
];
