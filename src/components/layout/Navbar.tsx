import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, personalInfo } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const HOME_SECTION_IDS = ["about", "projects", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isHome = location.pathname === "/";
  const isResume = location.pathname === "/resume";

  // rAF-throttled so the scroll handler never runs more than once per frame.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 16);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the section currently in view, but only on the homepage.
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const elements = HOME_SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top
            ? entry
            : closest,
        );
        setActiveSection(topmost.target.id);
      },
      { rootMargin: "-96px 0px -55% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  // Close the mobile sheet on route change.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Trap focus inside the open sheet and restore it to the trigger on close.
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const selector = "a[href], button:not([disabled])";
      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(selector);
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  /**
   * Hash links must work from any route. When we are already on the target
   * page, scroll in place rather than pushing a history entry per section
   * click; otherwise let react-router perform the cross-route navigation and
   * let ScrollToTop resolve the hash on arrival.
   */
  const handleHashNav = (event: React.MouseEvent, href: string) => {
    const [path, hash] = href.split("#");
    if (!hash) return;
    if (location.pathname !== (path || "/")) return;

    event.preventDefault();
    setIsMenuOpen(false);
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = (event: React.MouseEvent) => {
    if (!isHome) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      data-print="hide"
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-brand",
        isScrolled || isMenuOpen
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only rounded-sm bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        Skip to content
      </a>

      <nav className="section-container" aria-label="Main">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={goHome}
            className="focus-ring rounded-sm font-display text-lg font-semibold tracking-tight opsz-sm"
          >
            {personalInfo.monogram}
            <span className="sr-only"> — {personalInfo.name}, home</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.split("#")[1];
              const isActive = isHome && activeSection === sectionId;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(event) => handleHashNav(event, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "focus-ring relative rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </Link>
              );
            })}

            <Link
              to="/resume"
              aria-current={isResume ? "page" : undefined}
              className={cn(
                "focus-ring rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                isResume
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Resume
            </Link>

            <span className="mx-2 h-5 w-px bg-border" aria-hidden="true" />
            <ThemeToggle />

            <Button asChild size="sm" className="ml-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              ref={menuButtonRef}
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="rounded-sm"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="border-t border-border py-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(event) => handleHashNav(event, link.href)}
                    className="focus-ring block rounded-sm px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/resume"
                  className="focus-ring block rounded-sm px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Resume
                </Link>
              </li>
              <li className="pt-2">
                <Button asChild className="w-full">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
