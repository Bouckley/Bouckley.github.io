import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { personalInfo } from "@/data/portfolio-data";

const Index = () => {
  useDocumentMeta(
    `${personalInfo.name} | Data & Software Engineering`,
    personalInfo.summary,
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
