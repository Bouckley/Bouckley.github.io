import { Briefcase, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/Badge";
import { experiences, personalInfo } from "@/data/portfolio-data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Experience</h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            <Button variant="outline" asChild className="focus-ring w-fit">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:mr-1/2" : "md:pl-8 md:ml-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0
                      ? "left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  }`}
                />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 bg-card rounded-xl p-6 card-elevated border border-border ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-muted-foreground text-sm ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="text-primary mt-0.5">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.techUsed.map((tech) => (
                      <Badge key={tech} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
