import { useEffect } from "react";

function setMeta(selector: string, attribute: string, content: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, content);
}

/**
 * Per-route title and description. The app is a Vite SPA with no SSR, so this
 * is enough for browser tabs, history, and crawlers that execute JS.
 */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    setMeta('meta[property="og:title"]', "content", title);

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
