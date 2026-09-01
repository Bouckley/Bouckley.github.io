import { Heart, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/Badge";
import { volunteerExperiences } from "@/data/portfolio-data";

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="section-padding bg-muted/30">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Volunteer Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerExperiences.map((vol, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div className="bg-card rounded-xl p-6 card-elevated border border-border h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{vol.title}</h3>
                    <p className="text-muted-foreground text-sm">{vol.organization}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3" />
                  {vol.startDate} - {vol.endDate}
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4 flex-1">
                  {vol.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {vol.skills.map((skill) => (
                    <Badge key={skill} variant="primary" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
