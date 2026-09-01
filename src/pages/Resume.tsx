import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeNav from "@/components/resume/ResumeNav";
import ResumeSidebar from "@/components/resume/ResumeSidebar";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import ResumeProjects from "@/components/resume/ResumeProjects";
import SkillsMatrix from "@/components/resume/SkillsMatrix";
import EducationSection from "@/components/resume/EducationSection";
import LeadershipSection from "@/components/resume/LeadershipSection";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { personalInfo } from "@/data/portfolio-data";

const Resume = () => {
  useDocumentMeta(
    `Resume | ${personalInfo.name}`,
    `Experience, projects, technical skills, and education for ${personalInfo.name} — ${personalInfo.role}.`,
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main id="main" className="pt-16">
        <div className="section-container">
          <div className="pt-16">
            <ResumeHeader />
          </div>

          <ResumeNav />

          {/*
            Content first in the DOM, sidebar second, so keyboard and screen
            reader users reach the substance before the summary rail. The grid
            order swaps them visually on large viewports.
          */}
          <div className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
            <div className="space-y-16 lg:order-1">
              <ExperienceTimeline />
              <ResumeProjects />
              <SkillsMatrix />
              <EducationSection />
              <LeadershipSection />
            </div>

            <div className="lg:order-2">
              <ResumeSidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
