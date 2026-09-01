// ============================================
// PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
// Edit all your content here!
// ============================================

export const personalInfo = {
  name: "Jordan Santos-Bouckley",
  headline: "AI & Data Analyst @ CIBC | Computer Science @ Queen's University",
  subtext: "I like taking messy operational data and turning it into something a team can actually decide on. Right now I'm at CIBC, where I build the analytics and automation behind an inventory of over 40,000 enterprise assets.",
  email: "jordanbouckley@gmail.com",
  phone: "(905)-449-2188",
  github: "https://github.com/Bouckley",
  linkedin: "https://linkedin.com/in/jordan-bouckley",
  resumeUrl: "/resume.pdf",
  location: "Kingston, ON",
  expectedGrad: "2028",
};

export const quickStats = [
  { label: "Enterprise assets automated", value: "40K+" },
  { label: "Work orders analyzed", value: "20K+" },
  { label: "Manual review time cut", value: "50%" },
];

export const aboutBio = {
  intro: `I'm a Computer Science student at Queen's University, graduating in ${personalInfo.expectedGrad}. Most of what I build starts with a dataset nobody has had time to clean and ends with a dashboard, a scoring model, or a script that saves someone a few hundred hours of manual work. My favourite part is the moment a pile of records finally says something useful. Outside of that I spend a lot of time on side projects, usually as an excuse to learn a new piece of the stack properly.`,
  interests: [
    "Digging through data and making it make sense",
    "Full-stack development, front to back",
    "Putting AI to work on real problems",
    "Security fundamentals",
    "Testing, and the bugs it catches early",
  ],
  hobbies: [
    "Playing competitive hockey 🏒",
    "Skiing, going on eight years now ⛷️",
    "Building side projects that start as a what-if",
    "Falling down systems and infrastructure rabbit holes",
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
  {
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7418085486541361152?collapsed=1",
    height: 450,
  },
  {
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7370224689153200128?collapsed=1",
    height: 500,
  },
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
    id: "4",
    title: "Roamer",
    description: "A social app that pins your friends' posts to the spot they happened, so your feed turns into a map you can wander through instead of a list you scroll.",
    longDescription: "Roamer drops your friends' posts onto a live Mapbox map as landmarks you can explore. Supabase and PostGIS handle the geography underneath, with GIST indexes keeping proximity queries fast as the map fills up. The part I'm proudest of is the privacy model: location fuzzing and access rules live in the database itself through row-level security, so even a bug in the app can't hand out someone's exact coordinates.",
    category: "software",
    techStack: ["React Native", "TypeScript", "Mapbox GL", "Supabase", "PostGIS", "PostgreSQL"],
    role: "Full-Stack Developer",
    features: [
      "Friends' posts appear as landmarks on a live map",
      "PostGIS with GIST indexing keeps nearby-post lookups quick",
      "Privacy rules enforced in the database, not just the app",
      "Coordinates get fuzzed before they ever leave the server",
    ],
  },
  {
    id: "1",
    title: "Fleet Condition Index (FCI)",
    description: "A scoring model built on ten years of work orders that tells Durham Region Transit which buses are quietly costing them the most.",
    longDescription: "Durham Region Transit had a decade of work-order history and no straightforward way to compare one bus against another. I built a scoring model that weighs age, mileage, and mechanical history into a single number per vehicle. When we checked it against what the maintenance team already knew, it picked out the 15 best and 15 worst performers with 100% accuracy. It now feeds a Power BI dashboard the team uses for maintenance costs and retirement planning.",
    category: "data",
    techStack: ["Python", "Excel", "SQL", "PowerBI"],
    role: "Data Analyst",
    features: [
      "Ten years of work-order history behind every score",
      "Matched the maintenance team's own top and bottom 15 exactly",
      "Power BI dashboard for tracking fleet condition over time",
      "Maintenance costs broken out per vehicle and per service hour",
    ],
  },
  {
    id: "2",
    title: "PolicyProof",
    description: "Upload a policy PDF and get back the specific pages that fall short of GDPR, HIPAA, SOC 2, and a dozen other frameworks, in about five seconds.",
    longDescription: "Compliance reviews usually mean somebody reading a policy line by line against a framework. PolicyProof does that pass automatically. An Amazon Bedrock pipeline reads the document, checks it against more than 15 frameworks, and flags both the gaps and the sections that already hold up. Every finding cites the page it came from and suggests what to change, so the output is something you can act on rather than another report to read.",
    category: "software",
    techStack: ["React", "TypeScript", "Flask", "AWS Bedrock", "Python"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/Queens-Dev-Den/PolicyProof",
    features: [
      "Checks a policy against more than 15 frameworks in one pass",
      "Runs on an Amazon Bedrock pipeline",
      "Flags the gaps and confirms the parts that already pass",
      "Every finding cites its page and suggests a fix",
      "Handles a 10-page document in under 5 seconds",
    ],
  },
  {
    id: "3",
    title: "Activize",
    description: "A fitness app that looks at the routine you're already running and tells you what to change, built over a weekend at QHacks.",
    longDescription: "Activize started at QHacks as a simple question: could an app give you the kind of feedback a trainer would, based on the routine you already follow? It takes your workout history and returns specific adjustments rather than a generic plan, using the OpenAI API to keep the advice tied to what you've actually been doing.",
    category: "software",
    techStack: ["React.js", "JavaScript", "SQL", "Python", "HTML/CSS"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/Queens-Dev-Den/QHacks",
    features: [
      "Advice based on the routine you're already doing",
      "Built on the OpenAI API",
      "Suggests specific changes instead of a stock plan",
      "Full-stack build, front end through database",
    ],
  },
  {
    id: "5",
    title: "Asset Fuzzy Matching",
    description: "Catches the enterprise assets whose records have quietly drifted, the ones an exact-match check walks straight past.",
    longDescription: "Asset records go stale in small ways. A manufacturer renames itself, a version number shifts, a date gets entered differently. Exact matching misses all of it. This system uses string similarity to spot those near-misses across an inventory of more than 25,000 assets and flags them for audit, which turns a class of risk that used to be invisible into a list somebody can work through.",
    category: "data",
    techStack: ["Python", "SQL", "ServiceNow CMDB"],
    role: "Data Analyst",
    features: [
      "String similarity across more than 25,000 assets",
      "Catches renamed manufacturers and shifted version numbers",
      "Turns invisible record drift into an audit queue",
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
    title: "AI & Data Analyst, Risk Asset Management",
    company: "CIBC",
    location: "Toronto, ON",
    startDate: "May 2026",
    endDate: "Present",
    description: [
      "Replaced manual asset-remediation review with rules-based algorithms covering 40,000+ enterprise assets, cutting the time that review takes in half",
      "Mapped the risk profile across those 40,000+ assets so the team could fix the riskiest things first",
      "Brought the analysis to stakeholders in a form they could decide on, which is where most of it ends up mattering",
    ],
    techUsed: ["Python", "SQL", "ServiceNow CMDB", "Data Analysis"],
  },
  {
    title: "Data Analyst Intern",
    company: "Durham Region Transit",
    location: "Whitby, ON",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Worked through 20,000+ work orders across a 200+ vehicle fleet with SQL, Python (Pandas, NumPy), Maximo, and Excel",
      "Tracked down the data-quality problems clogging the maintenance database and made reporting 50% faster",
      "Built Power BI dashboards that finally gave the team a clear read on fleet KPIs and cost per service hour",
      "Sat with maintenance and operations to turn those numbers into real scheduling and retirement calls",
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
      "Lead a team of 5 analysts working through 10,000+ data points a season",
      "Publish articles and dashboards on player KPIs, lineup efficiency, and how teams trend over a year",
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
      "Ran rescues and administered first aid and CPR while keeping the pool deck safe",
      "Taught swim lessons to everyone from infants to adults, mostly working on confidence in the water",
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
      "Planned and hosted events for over 1,500 computing students, which meant venues, budgets, and a lot of logistics across several faculties",
      "Worked on a socials team where the planning was genuinely collaborative, and better for it",
    ],
    skills: ["Event Planning", "Budget Management", "Logistics", "Team Collaboration"],
  },
  {
    title: "Faculty of Computing Group Leader",
    organization: "Queen's Computing Orientation",
    startDate: "Jun 2024",
    endDate: "Apr 2025",
    description: [
      "Led first-year computing students through Orientation Week, running icebreakers, faculty events, and a campus-wide festival",
      "Kept helping after the week ended, pointing students toward resources, study habits, and tutoring as they found their footing",
    ],
    skills: ["Leadership", "Mentoring", "Event Coordination", "Student Support"],
  },
  {
    title: "Data Analyst/Developer",
    organization: "Queen's Data Analytics Association",
    startDate: "Sept 2023",
    endDate: "Apr 2025",
    description: [
      "Built software alongside business and computing associates, which taught me a lot about writing code other people have to live with",
      "Ran project meetings, reviewed each other's work, and pitched what we had built to the wider group",
    ],
    skills: ["Software Development", "Data Analytics", "Team Collaboration", "Project Management"],
  },
  {
    title: "Project Manager",
    organization: "Queen's Sports Analytics Organization (QSAO)",
    startDate: "Sept 2025",
    endDate: "Present",
    description: [
      "Lead a team of 5 analysts working through 10,000+ data points a season",
      "Publish articles and dashboards on player KPIs, lineup efficiency, and how teams trend over a year",
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
