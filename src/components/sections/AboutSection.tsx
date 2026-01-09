import { ExternalLink, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { aboutBio, linkedinPosts, personalInfo } from "@/data/portfolio-data";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Bio Column */}
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutBio.intro}
              </p>

              {/* What I'm Into */}
              <div>
                <h3 className="text-xl font-semibold mb-3">What I'm Into</h3>
                <ul className="space-y-2">
                  {aboutBio.interests.map((interest, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hobbies */}
              <div>
                <h3 className="text-xl font-semibold mb-3">When I'm Not Coding</h3>
                <ul className="space-y-2">
                  {aboutBio.hobbies.map((hobby, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* LinkedIn Posts Column */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-xl p-6 card-elevated border border-border">
              <h3 className="text-xl font-semibold mb-4">LinkedIn Posts</h3>
              
              {linkedinPosts.length > 0 ? (
                <div className="space-y-4">
                  {linkedinPosts.map((post, index) => (
                    <a
                      key={index}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors focus-ring group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="text-sm">No posts yet.</p>
                  <p className="text-xs mt-1">Add posts in portfolio-data.ts</p>
                </div>
              )}

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline focus-ring rounded"
              >
                View all on LinkedIn
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
