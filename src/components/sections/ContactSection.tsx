import { Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CopyEmailButton from "@/components/CopyEmailButton";
import { SectionHeading } from "@/components/primitives";
import { personalInfo } from "@/data/portfolio-data";

const ContactSection = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="section-padding scroll-mt-24 border-t border-border bg-surface"
  >
    <div className="section-container">
      <AnimatedSection>
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Get in touch"
          description={personalInfo.seeking}
          align="center"
          className="text-center"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mt-12 flex flex-col items-center gap-6">
          <CopyEmailButton size="lg" />

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="ghost">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </Button>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Based in {personalInfo.location}
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
