import { Github } from "lucide-react";
import { MetricText, TechChipList } from "@/components/primitives";
import { categoryLabels, projects } from "@/data/portfolio-data";

const ResumeProjects = () => (
  <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-32">
    <h2 id="projects-heading" className="text-2xl font-semibold sm:text-3xl">
      Projects
    </h2>

    <ul className="mt-8 space-y-6">
      {projects.map((project) => (
        <li key={project.id} data-print="keep" className="card-surface p-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold">
              {project.title}
              <span className="font-sans text-base font-normal text-muted-foreground">
                {" — "}
                {project.tagline}
              </span>
            </h3>
            <p className="shrink-0 font-mono text-xs text-muted-foreground">
              {project.period}
            </p>
          </div>

          <p className="eyebrow mt-2">
            {categoryLabels[project.category]} · {project.role}
          </p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="prose-measure flex gap-3 text-sm text-muted-foreground"
              >
                <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <MetricText>{highlight}</MetricText>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <TechChipList items={project.tech} label={`${project.title} technologies`} />
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-print="expand-link"
                className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-sm text-sm font-medium text-primary hover:underline"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Source
                <span className="sr-only"> code for {project.title}</span>
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ResumeProjects;
