import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small mono label above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Wire to the parent section's aria-labelledby. */
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  actions?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  as: Heading = "h2",
  className,
  actions,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "text-center")}>
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <Heading id={id} className="text-3xl font-semibold sm:text-4xl">
          {title}
        </Heading>
        {description ? (
          <p className="prose-measure mt-4 text-lg text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
