import { cn } from "@/lib/utils";

/**
 * A single left-rail timeline. Deliberately not the alternating left/right
 * pattern — one vertical scan line means one eye path, which is what makes a
 * work history readable at a glance.
 */
export function Timeline({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <ol
      aria-label={label}
      className={cn(
        "relative space-y-12",
        // The rail itself, drawn behind the markers
        "before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border",
        className,
      )}
    >
      {children}
    </ol>
  );
}

export function TimelineItem({
  children,
  current = false,
  className,
}: {
  children: React.ReactNode;
  /** Fills the marker to flag an ongoing role. */
  current?: boolean;
  className?: string;
}) {
  return (
    <li
      data-print="keep"
      className={cn("relative pl-8 sm:pl-12", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 bg-background",
          current ? "border-primary bg-primary" : "border-border-strong",
        )}
      />
      {current ? <span className="sr-only">Current role. </span> : null}
      {children}
    </li>
  );
}
