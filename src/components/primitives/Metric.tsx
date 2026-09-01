import { Fragment, useMemo } from "react";
import { cn } from "@/lib/utils";

/**
 * Matches quantified results only. A bare integer is deliberately excluded so
 * standard names ("SOC 2", "ISO 27001") are not styled as if they were
 * outcomes — a number qualifies only when it carries a magnitude marker:
 * a trailing "+", a percent sign, thousands grouping, or a unit noun.
 */
const METRIC_PATTERN = new RegExp(
  "(" +
    [
      String.raw`\d[\d,]*\+`, // 40,000+   200+   15+
      String.raw`\d[\d,]*(?:\.\d+)?\s?%`, // 50%   100%
      String.raw`\d{1,3}(?:,\d{3})+`, // 40,000
      String.raw`\d+\s?-?\s?(?:page|year|month|week|day|hour|minute|second)s?\b`,
      String.raw`\d+\s(?:analysts?|students?|assets?|frameworks?|vehicles?|buses?|data points?|work orders?)\b`,
    ].join("|") +
    ")",
  "gi",
);

type MetricTextProps = {
  children: string;
  className?: string;
};

/**
 * Renders a sentence with its quantified results emphasised. Jordan's bullets
 * are metric-dense, so this is what makes the value legible before the prose is
 * read. Purely presentational — the underlying text stays intact for screen
 * readers and copy/paste.
 */
export function MetricText({ children, className }: MetricTextProps) {
  const parts = useMemo(() => children.split(METRIC_PATTERN), [children]);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        // split() with a capture group puts matches at odd indices
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-metric">
            {part}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </span>
  );
}

type MetricProps = {
  value: string;
  label: string;
  context?: string;
  className?: string;
};

/** A standalone headline figure — used in the hero and resume sidebar. */
export function Metric({ value, label, context, className }: MetricProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-display text-3xl font-semibold tabular-nums text-metric opsz-lg">
        {value}
      </span>
      <span className="text-sm leading-snug text-muted-foreground">{label}</span>
      {context ? <span className="eyebrow">{context}</span> : null}
    </div>
  );
}
