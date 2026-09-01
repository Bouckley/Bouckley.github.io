import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const socials = [
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail, external: false },
  { label: "GitHub", href: personalInfo.github, icon: Github, external: true },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin, external: true },
];

const Footer = () => (
  <footer data-print="hide" className="border-t border-border bg-surface">
    <div className="section-container py-16">
      <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">{personalInfo.name}</p>
          <p className="prose-measure mt-3 text-sm text-muted-foreground">
            {personalInfo.headline} Currently building analytics and automation
            tooling at CIBC.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {personalInfo.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow mb-4">Site</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="focus-ring rounded-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#projects" className="focus-ring rounded-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" className="focus-ring rounded-sm text-muted-foreground hover:text-foreground">
                Resume
              </Link>
            </li>
            <li>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-sm text-muted-foreground hover:text-foreground"
              >
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow mb-4">Elsewhere</h2>
          <ul className="space-y-3 text-sm">
            {socials.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="focus-ring inline-flex items-center gap-2 rounded-sm text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React,
          TypeScript, and Tailwind CSS.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
