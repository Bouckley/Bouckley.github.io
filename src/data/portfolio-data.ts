// ============================================
// PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
// Edit all your content here!
// ============================================

export const personalInfo = {
  name: "Jordan Bouckley",
  headline: "Computer Science Student @ Queen's University",
  subtext: "Passionate about software development, data engineering, security, and AI/ML. Building things that matter.",
  email: "jordan.bouckley@queensu.ca",
  github: "https://github.com/jordanbouckley",
  linkedin: "https://linkedin.com/in/jordanbouckley",
  resumeUrl: "/resume.pdf", // Add your resume to public folder
  location: "Kingston, ON",
  expectedGrad: "2027",
};

export const quickStats = [
  { label: "Projects", value: "12+" },
  { label: "Languages", value: "8" },
  { label: "Years Coding", value: "4+" },
];

export const aboutBio = {
  intro: `I'm a Computer Science student at Queen's University (expected graduation ${personalInfo.expectedGrad}) with a deep passion for building impactful software. I love diving into complex systems, whether that's designing efficient data pipelines, exploring security vulnerabilities, or training machine learning models.`,
  interests: [
    "Full-stack web development",
    "Data engineering & analytics",
    "Cybersecurity fundamentals",
    "Machine learning & AI applications",
    "Open source contributions",
  ],
  hobbies: [
    "Playing competitive hockey 🏒",
    "Skiing (8+ years on the slopes) ⛷️",
    "Building side projects",
    "Learning about systems & infrastructure",
  ],
};

export const linkedinPosts = [
  {
    title: "My Journey into Software Development",
    date: "2024-12-15",
    excerpt: "Reflecting on my first year of university and how I discovered my passion for coding...",
    url: "https://linkedin.com/in/jordanbouckley/posts/1",
  },
  {
    title: "Why I Love Open Source",
    date: "2024-11-20",
    excerpt: "Contributing to open source taught me more than any class ever could...",
    url: "https://linkedin.com/in/jordanbouckley/posts/2",
  },
  // Add more posts here
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
    title: "SecureChat App",
    description: "End-to-end encrypted messaging application with real-time communication and file sharing.",
    longDescription: "A full-stack encrypted messaging platform built with React and Node.js. Features include end-to-end encryption using the Signal Protocol, real-time messaging via WebSockets, file sharing with client-side encryption, and user authentication with 2FA support.",
    category: "security",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Crypto.js"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/jordanbouckley/securechat",
    youtubeUrl: "https://youtube.com/watch?v=demo1",
    features: [
      "End-to-end encryption using Signal Protocol",
      "Real-time messaging with WebSockets",
      "Secure file sharing",
      "Two-factor authentication",
    ],
  },
  {
    id: "2",
    title: "Data Pipeline Orchestrator",
    description: "Automated ETL pipeline system for processing large-scale datasets with monitoring dashboard.",
    longDescription: "A scalable data pipeline orchestration system that automates ETL workflows. Built to handle terabytes of data with fault tolerance and real-time monitoring capabilities.",
    category: "data",
    techStack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "Redis"],
    role: "Data Engineer",
    githubUrl: "https://github.com/jordanbouckley/pipeline-orchestrator",
    features: [
      "Automated ETL workflows",
      "Real-time monitoring dashboard",
      "Fault-tolerant processing",
      "Horizontal scaling support",
    ],
  },
  {
    id: "3",
    title: "AI Study Assistant",
    description: "ML-powered study tool that generates flashcards and quizzes from uploaded documents.",
    longDescription: "An intelligent study assistant that uses NLP to analyze documents and automatically generate study materials. Features include flashcard generation, quiz creation, and spaced repetition algorithms.",
    category: "ai-ml",
    techStack: ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
    role: "ML Engineer",
    githubUrl: "https://github.com/jordanbouckley/ai-study-assistant",
    youtubeUrl: "https://youtube.com/watch?v=demo2",
    features: [
      "Document analysis with NLP",
      "Automatic flashcard generation",
      "Adaptive quiz creation",
      "Spaced repetition system",
    ],
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern, responsive personal portfolio built with React and TypeScript.",
    category: "software",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer",
    githubUrl: "https://github.com/jordanbouckley/portfolio",
    features: [
      "Responsive design",
      "Dark/light mode",
      "Smooth animations",
      "Accessibility focused",
    ],
  },
  {
    id: "5",
    title: "Network Vulnerability Scanner",
    description: "Automated security tool for identifying common network vulnerabilities and misconfigurations.",
    category: "security",
    techStack: ["Python", "Nmap", "Scapy", "SQLite"],
    role: "Security Researcher",
    githubUrl: "https://github.com/jordanbouckley/vuln-scanner",
    features: [
      "Port scanning & service detection",
      "CVE database integration",
      "Report generation",
      "Scheduled scanning",
    ],
  },
  {
    id: "6",
    title: "Stock Prediction Model",
    description: "LSTM neural network for predicting stock price movements using historical data.",
    category: "ai-ml",
    techStack: ["Python", "PyTorch", "Pandas", "NumPy", "Matplotlib"],
    role: "ML Researcher",
    githubUrl: "https://github.com/jordanbouckley/stock-predictor",
    features: [
      "LSTM architecture",
      "Technical indicator analysis",
      "Backtesting framework",
      "Visualization dashboard",
    ],
  },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "HTML/CSS", "Bash", "SQL"],
  },
  {
    name: "Frameworks & Tools",
    skills: ["React", "Node.js", "Flask", "Django", "Git", "Docker", "Linux", "AWS", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Networking",
      "Security Fundamentals",
      "Machine Learning",
      "Testing & CI/CD",
      "Agile/Scrum",
    ],
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
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    credentialUrl: "https://comptia.org/verify",
  },
  // Add more certificates here
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
    title: "Software Engineering Intern",
    company: "Tech Startup Inc.",
    location: "Toronto, ON",
    startDate: "May 2024",
    endDate: "Aug 2024",
    description: [
      "Developed and deployed 5+ microservices handling 10,000+ daily requests",
      "Reduced API response time by 40% through database query optimization",
      "Collaborated with cross-functional teams using Agile methodologies",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    techUsed: ["Python", "Docker", "PostgreSQL", "AWS", "React"],
  },
  {
    title: "Teaching Assistant - Data Structures",
    company: "Queen's University",
    location: "Kingston, ON",
    startDate: "Sep 2024",
    endDate: "Present",
    description: [
      "Assist 200+ students with understanding complex data structures and algorithms",
      "Hold weekly office hours and review sessions",
      "Grade assignments and provide detailed feedback",
    ],
    techUsed: ["Java", "Python", "Git"],
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
    title: "Coding Workshop Facilitator",
    organization: "Queen's Tech Society",
    startDate: "Sep 2023",
    endDate: "Present",
    description: [
      "Lead bi-weekly coding workshops for 30+ beginner programmers",
      "Designed curriculum covering Python, web development, and Git basics",
      "Mentored 10+ first-year students in their programming journey",
    ],
    skills: ["Teaching", "Curriculum Design", "Mentoring", "Public Speaking"],
  },
  {
    title: "Youth Hockey Coach",
    organization: "Kingston Minor Hockey",
    startDate: "Oct 2022",
    endDate: "Apr 2024",
    description: [
      "Coached U12 hockey team through competitive season",
      "Developed training programs focusing on skill development and teamwork",
      "Organized team events and parent communications",
    ],
    skills: ["Leadership", "Communication", "Team Building", "Event Planning"],
  },
  {
    title: "Hackathon Organizer",
    organization: "QHacks",
    startDate: "Jan 2024",
    endDate: "Present",
    description: [
      "Helped organize Queen's largest hackathon with 500+ participants",
      "Coordinated sponsor relations and managed event logistics",
      "Mentored participants during the 36-hour event",
    ],
    skills: ["Event Management", "Sponsor Relations", "Project Coordination"],
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
