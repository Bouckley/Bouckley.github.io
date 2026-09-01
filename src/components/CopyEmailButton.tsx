import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolio-data";

type CopyEmailButtonProps = {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
};

/**
 * Copies the address to the clipboard, falling back to a mailto: link if the
 * Clipboard API is unavailable (non-secure context, older Safari) so the
 * control is never a dead end.
 */
const CopyEmailButton = ({
  variant = "outline",
  size = "lg",
  className,
}: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <div className={cn("inline-flex flex-col items-start gap-2", className)}>
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={handleCopy}
        className="font-mono"
      >
        {copied ? (
          <Check className="mr-2 h-4 w-4 text-metric" aria-hidden="true" />
        ) : (
          <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
        )}
        {personalInfo.email}
      </Button>
      {/* Announced on change without stealing focus */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "text-xs text-metric transition-opacity duration-200",
          copied ? "opacity-100" : "opacity-0",
        )}
      >
        Copied to clipboard
      </span>
    </div>
  );
};

export default CopyEmailButton;
