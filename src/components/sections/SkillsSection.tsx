import { ExternalLink, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/Badge";
import { skillCategories, certificates } from "@/data/portfolio-data";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills & Certificates</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <div
                    key={category.name}
                    className="bg-card rounded-xl p-6 card-elevated border border-border"
                  >
                    <h3 className="font-semibold mb-4 text-lg">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="default" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Certificates */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-xl p-6 card-elevated border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">Certificates & Awards</h3>
                </div>

                {certificates.length > 0 ? (
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-muted/50 border border-border/50"
                      >
                        <h4 className="font-medium mb-1">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {cert.issuer} • {cert.date}
                        </p>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline focus-ring rounded"
                          >
                            Verify credential
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p className="text-sm">No certificates yet.</p>
                    <p className="text-xs mt-1">Add certificates in portfolio-data.ts</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
