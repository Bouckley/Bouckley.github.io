import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * react-router preserves scroll position across navigations, which is wrong for
 * a document-style site. Reset to the top on a new path, or scroll to the
 * target element when the URL carries a hash.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the destination route has committed to the DOM.
      const frame = requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      });
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
