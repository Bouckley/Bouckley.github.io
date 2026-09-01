import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "primary";
  size?: "sm" | "md";
  className?: string;
}

const Badge = ({ children, variant = "default", size = "sm", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full transition-colors",
        {
          "bg-secondary text-secondary-foreground": variant === "default",
          "border border-border text-muted-foreground": variant === "outline",
          "bg-primary/10 text-primary": variant === "primary",
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
