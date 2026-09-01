export const personalInfo = {
  name: "Jordan Santos-Bouckley",
  shortName: "Jordan Bouckley",
  monogram: "JB",
  role: "Computer Science @ Queen's University",
  headline: "I turn operational data into decisions.",
  summary:
    "Computer Science student with hands-on experience building analytics, BI dashboards, and decision-automation tools on large real-world datasets. I pair a data-analytics focus with full-stack and AI-assisted development to ship end-to-end solutions.",
  seeking:
    "Seeking a data and technology internship supporting the digitalization of global supply chains through data-driven insight, automation, and measurable operational impact.",
  availability: "Open to Summer 2027 internships",
  email: "jordanbouckley@gmail.com",
  phone: "(905) 449-2188",
  github: "https://github.com/Bouckley",
  githubHandle: "github.com/Bouckley",
  linkedin: "https://linkedin.com/in/jordan-bouckley",
  linkedinHandle: "linkedin.com/in/jordan-bouckley",
  resumeUrl: "/resume.pdf",
  location: "Kingston, ON",
} as const;

/**
 * Headline numbers for the hero. Sourced from real resume outcomes rather than
 * self-reported vanity counts.
 */
export const headlineMetrics = [
  { value: "40,000+", label: "enterprise assets automated", context: "CIBC" },
  { value: "20,000+", label: "work orders analysed", context: "Durham Region Transit" },
  { value: "50%", label: "manual review time cut", context: "CIBC" },
] as const;

export const aboutBio = {
  paragraphs: [
    "I'm a Computer Science student at Queen's University working at the seam between data and software. Most of what I build starts with a messy real-world dataset — 40,000 enterprise assets, a decade of transit work orders — and ends with something a team can actually make a decision from.",
    "At CIBC I automate asset-remediation decisions with rules-based algorithms, replacing manual review across the enterprise inventory. Before that I spent a summer at Durham Region Transit turning a decade of fleet maintenance history into Power BI dashboards that shaped scheduling and retirement calls.",
    "Outside of work I build side projects that let me learn systems properly — geospatial databases, AI pipelines, mobile clients — and I play a lot of hockey.",
  ],
  interests: [
    "Data analytics & visualization",
    "Full-stack software development",
    "AI/ML applications & LLM pipelines",
    "Cybersecurity fundamentals",
    "Quality assurance & test automation",
  ],
  hobbies: [
    "Competitive hockey",
    "Skiing — 8+ years on the slopes",
    "Building side projects",
    "Systems & infrastructure rabbit holes",
  ],
} as const;

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
] as const;
