import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Youtube, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/Badge";
import { projects, Project } from "@/data/portfolio-data";

const categories = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "data", label: "Data" },
  { id: "security", label: "Security" },
  { id: "ai-ml", label: "AI/ML" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-ring ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus-ring"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-card rounded-xl p-6 card-elevated border border-border flex flex-col"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <Badge variant="primary" size="sm">
                    {categories.find((c) => c.id === project.category)?.label}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Role */}
                <p className="text-xs text-muted-foreground mb-3">
                  Role: {project.role}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" size="sm">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild className="focus-ring">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.youtubeUrl && (
                    <Button variant="ghost" size="sm" asChild className="focus-ring">
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="mr-1.5 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="focus-ring ml-auto"
                  >
                    Read more
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No projects match your filters.</p>
            </div>
          )}
        </AnimatedSection>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 border border-border shadow-xl"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <Badge variant="primary" size="md" className="mb-2">
                      {categories.find((c) => c.id === selectedProject.category)?.label}
                    </Badge>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{selectedProject.role}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-muted transition-colors focus-ring"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" size="md">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  {selectedProject.githubUrl && (
                    <Button asChild className="focus-ring">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.youtubeUrl && (
                    <Button variant="outline" asChild className="focus-ring">
                      <a
                        href={selectedProject.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="mr-2 h-4 w-4" />
                        Watch Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
