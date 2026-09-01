import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

export const RESUME_SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
];

const SECTION_IDS = RESUME_SECTIONS.map((section) => section.id);

/**
 * Sticky segmented control with scroll-spy. On a long document the reader
 * should always be able to see where they are and jump elsewhere.
 */
const ResumeNav = () => {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <nav
      data-print="hide"
      aria-label="Resume sections"
      className="sticky top-16 z-30 -mx-5 border-b border-border bg-background/85 px-5 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
    >
      <ul className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {RESUME_SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "focus-ring block whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ResumeNav;
