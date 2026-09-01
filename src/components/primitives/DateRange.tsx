type DateRangeProps = {
  startISO: string;
  startLabel: string;
  endISO?: string;
  endLabel: string;
  className?: string;
};

/**
 * Renders a date span with machine-readable <time> elements, so assistive tech
 * and parsers get real dates rather than "May 2026 – Present" as opaque text.
 */
export function DateRange({
  startISO,
  startLabel,
  endISO,
  endLabel,
  className,
}: DateRangeProps) {
  return (
    <span className={className}>
      <time dateTime={startISO}>{startLabel}</time>
      <span aria-hidden="true"> – </span>
      <span className="sr-only"> to </span>
      {endISO ? <time dateTime={endISO}>{endLabel}</time> : <span>{endLabel}</span>}
    </span>
  );
}
