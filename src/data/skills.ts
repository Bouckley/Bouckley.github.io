export type SkillGroup = {
  id: string;
  name: string;
  /** Shown in the sidebar "top skills" rail. */
  primary?: boolean;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    name: "Languages",
    primary: true,
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "C++",
      "C",
      "C#",
      "Bash",
      "HTML/CSS",
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    primary: true,
    skills: [
      "React.js",
      "React Native",
      "Node.js",
      "Flask",
      "Pandas",
      "NumPy",
      "Tailwind CSS",
      "Playwright",
      "Pytest",
    ],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    skills: [
      "AWS (Bedrock)",
      "Docker",
      "Git",
      "PostgreSQL/PostGIS",
      "Supabase",
      "REST APIs",
      "Linux",
      "Power BI",
      "Mapbox",
      "Excel",
      "Jupyter",
      "Postman",
      "Splunk",
    ],
  },
];

/** Surfaced in the resume sidebar — the ones worth leading with. */
export const topSkills = [
  "Python",
  "SQL",
  "TypeScript",
  "React",
  "Pandas",
  "Power BI",
  "PostgreSQL",
  "AWS",
] as const;
