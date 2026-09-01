import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Metric } from "@/components/primitives";
import { education, headlineMetrics, personalInfo } from "@/data/portfolio-data";

const glance = [
  { label: "Studying", value: "B.S. Computer Science" },
  { label: "University", value: education.institution },
  { label: "Graduating", value: education.period.split(" – ")[1] },
  { label: "Currently", value: "AI & Data Analyst, CIBC" },
];

const HeroSection = () => (
  <section id="home" className="section-padding pt-32">
    <div className="section-container">
      <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <AnimatedSection>
          <p className="inline-flex items-center gap-2 rounded-sm border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
            {personalInfo.availability}
          </p>

          <h1 className="mt-6 text-5xl font-semibold sm:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mt-4 font-display text-2xl text-muted-foreground">
            {personalInfo.headline}
          </p>

          <p className="prose-measure mt-6 text-lg text-muted-foreground">
            {personalInfo.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/resume">
                View resume
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">See projects</a>
            </Button>
            <div className="flex items-center gap-1">
              <Button asChild variant="ghost" size="icon" className="rounded-sm">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-sm">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="card-surface p-6">
            <h2 className="eyebrow mb-4">At a glance</h2>
            <dl className="space-y-4">
              {glance.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="text-right text-sm font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.2}>
        <div className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
          {headlineMetrics.map((metric) => (
            <Metric
              key={metric.label}
              value={metric.value}
              label={metric.label}
              context={metric.context}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
