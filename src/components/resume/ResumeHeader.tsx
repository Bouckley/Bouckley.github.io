import { Download, Github, Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const contactItems = [
  { icon: MapPin, label: personalInfo.location, href: undefined },
  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: personalInfo.phone, href: `tel:+19054492188` },
  { icon: Github, label: personalInfo.githubHandle, href: personalInfo.github },
  { icon: Linkedin, label: personalInfo.linkedinHandle, href: personalInfo.linkedin },
];

const ResumeHeader = () => (
  <header className="border-b border-border pb-12">
    <p className="eyebrow mb-4">Resume</p>

    <h1 className="text-4xl font-semibold sm:text-5xl">{personalInfo.name}</h1>
    <p className="mt-3 text-xl text-muted-foreground">{personalInfo.role}</p>

    <p className="prose-measure mt-6 text-base text-muted-foreground">
      {personalInfo.summary}
    </p>

    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
      {contactItems.map(({ icon: Icon, label, href }) => (
        <li key={label} className="flex items-center gap-2 text-muted-foreground">
          <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
          {href ? (
            <a
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="focus-ring rounded-sm font-mono text-xs hover:text-foreground hover:underline"
            >
              {label}
            </a>
          ) : (
            <span className="font-mono text-xs">{label}</span>
          )}
        </li>
      ))}
    </ul>

    <div data-print="hide" className="mt-8 flex flex-wrap gap-3">
      <Button asChild>
        <a href={personalInfo.resumeUrl} download>
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          Download PDF
        </a>
      </Button>
      <Button variant="outline" onClick={() => window.print()}>
        <Printer className="mr-2 h-4 w-4" aria-hidden="true" />
        Print this page
      </Button>
    </div>
  </header>
);

export default ResumeHeader;
