import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-ring"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-ring"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-ring"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
