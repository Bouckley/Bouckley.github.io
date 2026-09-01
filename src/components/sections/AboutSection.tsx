import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { aboutBio, linkedinPosts, personalInfo } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

const LinkedInPostsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? linkedinPosts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === linkedinPosts.length - 1 ? 0 : prev + 1));
  };

  if (linkedinPosts.length === 0) {
    return (
      <div className="bg-card rounded-xl p-6 card-elevated border border-border">
        <h3 className="text-xl font-semibold mb-4">LinkedIn Posts</h3>
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-sm">No posts yet.</p>
          <p className="text-xs mt-1">Add posts in portfolio-data.ts</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 card-elevated border border-border">
      <h3 className="text-xl font-semibold mb-4">LinkedIn Posts</h3>
      
      {/* Post Display */}
      <div className="relative overflow-hidden rounded-lg">
        <iframe
          src={linkedinPosts[currentIndex].embedUrl}
          height={linkedinPosts[currentIndex].height}
          width="100%"
          frameBorder="0"
          allowFullScreen
          title={`LinkedIn post ${currentIndex + 1}`}
          className="bg-muted/50"
        />
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="h-8 w-8"
          aria-label="Previous post"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {linkedinPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to post ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="h-8 w-8"
          aria-label="Next post"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Post Counter */}
      <p className="text-center text-xs text-muted-foreground mt-2">
        {currentIndex + 1} of {linkedinPosts.length}
      </p>

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
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Bio Column */}
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
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
          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <LinkedInPostsCarousel />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
