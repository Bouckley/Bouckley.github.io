import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently in view.
 *
 * Uses IntersectionObserver rather than a scroll handler so it does no work
 * while the page is idle, and picks the entry closest to the top of the
 * viewport when several are visible at once.
 */
export function useScrollSpy(ids: readonly string[], offset = 96) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

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

        setActiveId(topmost.target.id);
      },
      {
        // Shrink the top of the root box past the sticky header so a section
        // only counts as active once it clears it.
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
