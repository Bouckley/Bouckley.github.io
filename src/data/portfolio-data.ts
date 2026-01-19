// ============================================
// PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
// Edit all your content here!
// ============================================

export const personalInfo = {
  name: "Jordan Santos-Bouckley",
  headline: "Computer Science Student @ Queen's University",
  subtext: "Focused on data analytics, software development, cybersecurity, and AI applications. Eager to contribute to collaborative teams and ship high-quality outcomes.",
  email: "jordanbouckley@gmail.com",
  phone: "(905)-449-2188",
  github: "https://github.com/Bouckley",
  linkedin: "https://linkedin.com/in/jordan-bouckley",
  resumeUrl: "/resume.pdf",
  location: "Kingston, ON",
  expectedGrad: "2027",
};

export const quickStats = [
  { label: "Projects", value: "4+" },
  { label: "Languages", value: "10" },
  { label: "Years Coding", value: "3+" },
];

export const aboutBio = {
  intro: `Motivated, detail-oriented Computer Science student at Queen's University (B.S., expected ${personalInfo.expectedGrad}) seeking opportunities in data analytics, software development, cybersecurity, and AI applications. Proven ability to analyze large datasets, build full-stack applications, and deliver actionable insights through dashboards and automation.`,
  interests: [
    "Data analytics & visualization",
    "Full-stack software development",
    "Cybersecurity fundamentals",
    "AI/ML applications",
    "Quality assurance & testing",
  ],
  hobbies: [
    "Playing competitive hockey 🏒",
    "Skiing (8+ years on the slopes) ⛷️",
    "Building side projects",
    "Learning about systems & infrastructure",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Software Specifications",
    "System Level Programming",
    "Discrete Structures",
    "Operating Systems",
    "Software Quality Assurance",
    "Computer Networks",
  ],
};

export const linkedinPosts = [
  // Add your LinkedIn posts here
  // {
  //   title: "Post Title",
  //   date: "2024-12-15",
  //   excerpt: "Brief description...",
  //   url: "https://linkedin.com/in/jordan-bouckley/posts/1",
  // },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "software" | "data" | "security" | "ai-ml";
  techStack: string[];
  role: string;
  githubUrl?: string;
  youtubeUrl?: string;
  liveUrl?: string;
  features?: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Fleet Condition Index (FCI)",
    description: "Fleet scoring model analyzing 10 years of work-order data to evaluate bus performance and guide long-term fleet planning.",
    longDescription: "Designed a comprehensive fleet scoring model using 10 years of work-order data including age, mileage, and mechanical history to evaluate bus performance. Achieved 100% accuracy in identifying the 15 best and 15 worst performing buses. Delivered an Excel index and PowerBI dashboard for condition tracking, work order trends, and maintenance cost analysis.",
    category: "data",
    techStack: ["Python", "Excel", "SQL", "PowerBI"],
    role: "Data Analyst",
    features: [
      "Analyzed 10 years of vehicle work-order data",
      "100% accuracy identifying top/bottom performing buses",
      "Interactive PowerBI dashboard for condition tracking",
      "Maintenance cost analysis using Agile methods",
    ],
  },
  {
    id: "2",
    title: "PolicyProof",
    description: "AI-powered compliance auditing platform that analyzes policy PDFs against 15+ regulatory frameworks including GDPR, HIPAA, SOC 2, and ISO 27001.",
    longDescription: "Built an AI-powered compliance auditing platform that automates manual policy reviews by analyzing policy PDFs against 15+ regulatory frameworks. Engineered an AWS Amazon Bedrock (Claude 3.5 Sonnet) pipeline to detect violations, validate compliant sections, and generate page-level citations and remediation recommendations.",
    category: "software",
    techStack: ["React", "TypeScript", "Flask", "AWS Bedrock", "Python"],
    role: "Full-Stack Developer",
    features: [
      "Analyzes policies against 15+ regulatory frameworks",
      "AWS Bedrock integration with Claude 3.5 Sonnet",
      "Automated violation detection and compliance validation",
      "Page-level citations and remediation recommendations",
      "Interactive React UI for policy analysis",
    ],
  },
  {
    id: "3",
    title: "Activize",
    description: "AI-powered personal fitness trainer delivering fitness advice and workout routine improvements using OpenAI API.",
    longDescription: "Developed a full-stack AI-powered fitness trainer application that provides personalized fitness advice and improvements for workout routines. Implemented OpenAI API integration for intelligent, context-aware personal training recommendations.",
    category: "software",
    techStack: ["React.js", "JavaScript", "SQL", "Python", "HTML/CSS"],
    role: "Full-Stack Developer",
    features: [
      "AI-driven personal training recommendations",
      "OpenAI API integration",
      "Personalized workout routine analysis",
      "Full-stack implementation",
    ],
  },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS", "Bash", "C++", "C", "C#", "SQL"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["Node.js", "React.js", "Flask", "Express", "Tailwind CSS", "Pandas", "NumPy", "Playwright", "Pytest"],
  },
  {
    name: "Developer Tools",
    skills: ["VS Code", "GitHub", "Docker", "Eclipse", "AWS", "Jupyter Notebooks", "Git", "VirtualBox", "Splunk", "Linux", "Postman", "Vite", "REST APIs", "PowerBI", "Excel"],
  },
];

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    name: "Filipino Most Outstanding Student Award",
    issuer: "Filipino Community Award",
    date: "Apr 2024",
  },
  {
    name: "Queen's University Bursary for Visible Minority/Racialized Students",
    issuer: "Queen's University",
    date: "Dec 2023",
  },
  {
    name: "Whitby Rotary Scholarship",
    issuer: "Whitby Rotary Club",
    date: "Jun 2023",
  },
  {
    name: "Schulich Leader Scholarship Nominee",
    issuer: "Schulich Foundation",
    date: "Jan 2023",
  },
  {
    name: "B1 DELF French Certification",
    issuer: "French Ministry of Education",
    date: "Mar 2023",
  },
  {
    name: "CPR Airway Management",
    issuer: "Certified Training Provider",
    date: "May 2021",
  },
  {
    name: "CPR-C and Standard First Aid",
    issuer: "Certified Training Provider",
    date: "Jan 2020",
  },
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techUsed: string[];
};

export const experiences: Experience[] = [
  {
    title: "Data Analyst Intern",
    company: "Durham Region Transit",
    location: "Whitby, ON",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Analyzed 20K+ work orders and maintenance records for 200+ transit vehicles using SQL, Python (pandas, NumPy), Maximo, and Excel",
      "Identified data quality issues to streamline the database, improving data workflows by 50%",
      "Built interactive PowerBI dashboards to visualize KPIs, bus fleet conditions, and cost per service hour",
      "Partnered with maintenance and operations teams to support bus scheduling decisions and fleet retirement recommendations",
    ],
    techUsed: ["SQL", "Python", "Pandas", "NumPy", "PowerBI", "Excel", "Maximo"],
  },
  {
    title: "Project Manager",
    company: "Queen's Sports Analytics Organization (QSAO)",
    location: "Kingston, ON",
    startDate: "Sept 2025",
    endDate: "Present",
    description: [
      "Led a team of 5 analysts delivering performance insights from 10K+ data points per season",
      "Produced articles and dashboards tracking player KPIs, lineup efficiency, and team trends",
    ],
    techUsed: ["Data Analytics", "Dashboard Development", "Team Leadership"],
  },
  {
    title: "Lifeguard and Swim Instructor",
    company: "LifeTime Fitness",
    location: "Ajax, ON",
    startDate: "Mar 2021",
    endDate: "Aug 2025",
    description: [
      "Conducted rescues, administered first aid/CPR, and ensured patron safety",
      "Instructed swim lessons for infants to adults, improving safety and confidence in the water",
    ],
    techUsed: ["First Aid", "CPR", "Communication", "Teaching"],
  },
];

export type VolunteerExperience = {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
};

export const volunteerExperiences: VolunteerExperience[] = [
  {
    title: "Socials Logistics Coordinator",
    organization: "Queen's Computing Students Association (COMPSA)",
    startDate: "Jun 2024",
    endDate: "Aug 2025",
    description: [
      "Planned and hosted social events for over 1500 students in computing, booked venues, managed budgets, and coordinated event logistics for several faculties",
      "Collaborated on a socials team to collectively plan socials for computing students",
    ],
    skills: ["Event Planning", "Budget Management", "Logistics", "Team Collaboration"],
  },
  {
    title: "Faculty of Computing Group Leader",
    organization: "Queen's Computing Orientation",
    startDate: "Jun 2024",
    endDate: "Apr 2025",
    description: [
      "Led Queen's computing first-year students through Orientation Week activities and organized icebreakers, faculty events, and a campus-wide festival; facilitated bonding and eased transition to university",
      "Directed first-year students through the adjustment to university by providing resources and academic direction, while promoting strong student habits and tutoring, resulting in high morale, focus, and academic success",
    ],
    skills: ["Leadership", "Mentoring", "Event Coordination", "Student Support"],
  },
  {
    title: "Data Analyst/Developer",
    organization: "Queen's Data Analytics Association",
    startDate: "Sept 2023",
    endDate: "Apr 2025",
    description: [
      "Developed critical insight and applied quality improvement principles to create software in a team setting through interactions between business/computing associates in professional settings",
      "Collaborated with project managers and coordinators to critique softwares, conduct project meetings, and deliver a pitch of software functions; enhanced awareness of key challenges and the need to keep improving software",
    ],
    skills: ["Software Development", "Data Analytics", "Team Collaboration", "Project Management"],
  },
  {
    title: "Project Manager",
    organization: "Queen's Sports Analytics Organization (QSAO)",
    startDate: "Sept 2025",
    endDate: "Present",
    description: [
      "Led a team of 5 analysts delivering performance insights from 10K+ data points per season",
      "Produced articles and dashboards tracking player KPIs, lineup efficiency, and team trends",
    ],
    skills: ["Leadership", "Data Analytics", "Team Management", "Technical Writing"],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Volunteer", href: "#volunteer" },
  { name: "Contact", href: "#contact" },
];
