import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MetricText,
  SectionHeading,
  TechChip,
  TechChipList,
} from "@/components/primitives";
import {
  categoryLabels,
  featuredProjects,
  type Project,
} from "@/data/portfolio-data";

const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding scroll-mt-24 border-t border-border"
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected work"
            title="Projects"
            description="Three builds that best show how I work — from a geospatial mobile app to an AI compliance pipeline to a predictive fleet model."
            actions={
              <Button asChild variant="outline">
                <Link to="/resume#projects">
                  All projects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            }
          />
        </AnimatedSection>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection as="li" key={project.id} delay={index * 0.05}>
              <article className="card-interactive flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <TechChip variant="accent">
                    {categoryLabels[project.category]}
                  </TechChip>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.tagline}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <TechChipList
                  items={project.tech}
                  max={4}
                  className="mt-6"
                  label={`${project.title} technologies`}
                />

                <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setOpenProject(project)}
                  >
                    Details
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only"> about {project.title}</span>
                  </Button>
                  {project.githubUrl ? (
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 h-4 w-4" aria-hidden="true" />
                        Code
                        <span className="sr-only"> for {project.title}</span>
                      </a>
                    </Button>
                  ) : null}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </ul>
      </div>

      {/*
        Radix Dialog gives us the focus trap, Escape handling, scroll lock and
        aria wiring that the previous hand-rolled modal was missing.
      */}
      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => !open && setOpenProject(null)}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {openProject ? (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <TechChip variant="accent">
                    {categoryLabels[openProject.category]}
                  </TechChip>
                  <span className="font-mono text-xs text-muted-foreground">
                    {openProject.period}
                  </span>
                </div>
                <DialogTitle className="mt-3 text-2xl">
                  {openProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {openProject.tagline} · {openProject.role}
                </DialogDescription>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {openProject.longDescription}
              </p>

              <div>
                <h4 className="eyebrow mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {openProject.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      <MetricText>{highlight}</MetricText>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="eyebrow mb-3">Stack</h4>
                <TechChipList items={openProject.tech} />
              </div>

              {openProject.githubUrl ? (
                <div className="border-t border-border pt-4">
                  <Button asChild>
                    <a
                      href={openProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                      View source
                    </a>
                  </Button>
                </div>
              ) : null}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
