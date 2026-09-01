import { cn } from "@/lib/utils";

type TechChipProps = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
};

export function TechChip({
  children,
  variant = "default",
  className,
}: TechChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-1 font-mono text-xs leading-none",
        variant === "default" && "border-border bg-muted text-muted-foreground",
        variant === "accent" && "border-primary/25 bg-primary/10 text-primary",
        variant === "outline" && "border-border text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

type TechChipListProps = {
  items: readonly string[];
  variant?: TechChipProps["variant"];
  /** Collapse the tail into a "+N" chip. */
  max?: number;
  className?: string;
  label?: string;
};

export function TechChipList({
  items,
  variant,
  max,
  className,
  label = "Technologies",
}: TechChipListProps) {
  const visible = max ? items.slice(0, max) : items;
  const overflow = max ? items.length - visible.length : 0;

  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {visible.map((item) => (
        <li key={item}>
          <TechChip variant={variant}>{item}</TechChip>
        </li>
      ))}
      {overflow > 0 ? (
        <li>
          <TechChip variant="outline">{`+${overflow}`}</TechChip>
        </li>
      ) : null}
    </ul>
  );
}
