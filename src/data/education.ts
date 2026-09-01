export type Education = {
  institution: string;
  degree: string;
  location: string;
  startISO: string;
  endISO: string;
  period: string;
  coursework: string[];
};

export const education: Education = {
  institution: "Queen's University",
  degree: "B.S. in Computer Science",
  location: "Kingston, ON",
  startISO: "2023-09",
  endISO: "2028-04",
  period: "2023 – 2028",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Software Quality Assurance",
    "System-Level Programming",
    "Software Specifications",
    "Discrete Structures",
  ],
};

export type Award = {
  name: string;
  issuer: string;
  dateISO: string;
  date: string;
  credentialUrl?: string;
};

export const awards: Award[] = [
  {
    name: "Filipino Most Outstanding Student Award",
    issuer: "Filipino Community Award",
    dateISO: "2024-04",
    date: "Apr 2024",
  },
  {
    name: "Bursary for Visible Minority / Racialized Students",
    issuer: "Queen's University",
    dateISO: "2023-12",
    date: "Dec 2023",
  },
  {
    name: "Whitby Rotary Scholarship",
    issuer: "Whitby Rotary Club",
    dateISO: "2023-06",
    date: "Jun 2023",
  },
  {
    name: "Schulich Leader Scholarship Nominee",
    issuer: "Schulich Foundation",
    dateISO: "2023-01",
    date: "Jan 2023",
  },
  {
    name: "B1 DELF French Certification",
    issuer: "French Ministry of Education",
    dateISO: "2023-03",
    date: "Mar 2023",
  },
  {
    name: "CPR Airway Management",
    issuer: "Certified Training Provider",
    dateISO: "2021-05",
    date: "May 2021",
  },
  {
    name: "CPR-C & Standard First Aid",
    issuer: "Certified Training Provider",
    dateISO: "2020-01",
    date: "Jan 2020",
  },
];
