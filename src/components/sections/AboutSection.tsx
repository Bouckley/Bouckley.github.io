import AnimatedSection from "@/components/AnimatedSection";
import { SectionHeading, TechChip } from "@/components/primitives";
import { aboutBio, education } from "@/data/portfolio-data";

const AboutSection = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="section-padding scroll-mt-24 border-t border-border bg-surface"
  >
    <div className="section-container">
      <AnimatedSection>
        <SectionHeading id="about-heading" eyebrow="About" title="Background" />
      </AnimatedSection>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <AnimatedSection delay={0.05}>
          <div className="space-y-6">
            {aboutBio.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="prose-measure text-lg text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div>
              <h3 className="eyebrow mb-4">What I work on</h3>
              <ul className="space-y-2">
                {aboutBio.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-4">Coursework</h3>
              <ul className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li key={course}>
                    <TechChip>{course}</TechChip>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-4">Away from the keyboard</h3>
              <ul className="space-y-2">
                {aboutBio.hobbies.map((hobby) => (
                  <li
                    key={hobby}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
