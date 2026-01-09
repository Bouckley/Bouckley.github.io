import { useState, useEffect } from "react";
import IntroSplash from "@/components/IntroSplash";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import VolunteerSection from "@/components/sections/VolunteerSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);

  useEffect(() => {
    // Check session storage on mount
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShowSplash(false);
    }
    setHasCheckedSession(true);
  }, []);

  // Don't render anything until we've checked session storage
  if (!hasCheckedSession) {
    return null;
  }

  if (showSplash) {
    return <IntroSplash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <VolunteerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
