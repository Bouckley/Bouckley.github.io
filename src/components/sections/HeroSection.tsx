import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, quickStats } from "@/data/portfolio-data";
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="section-container section-padding">
        <AnimatedSection>
          <div className="max-w-3xl">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-mono text-sm sm:text-base mb-4"
            >
              Hi, my name is
            </motion.p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              {personalInfo.name}
            </h1>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6">
              {personalInfo.headline}
            </h2>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              {personalInfo.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Button
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="focus-ring"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("#contact")}
                className="focus-ring"
              >
                Contact Me
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="focus-ring"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="focus-ring"
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <button
            onClick={() => handleScroll("#about")}
            className="p-2 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-full animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
