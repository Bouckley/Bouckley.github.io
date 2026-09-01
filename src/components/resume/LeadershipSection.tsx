import {
  DateRange,
  MetricText,
  TechChipList,
  Timeline,
  TimelineItem,
} from "@/components/primitives";
import { leadership } from "@/data/portfolio-data";

const LeadershipSection = () => (
  <section id="leadership" aria-labelledby="leadership-heading" className="scroll-mt-32">
    <h2 id="leadership-heading" className="text-2xl font-semibold sm:text-3xl">
      Leadership &amp; involvement
    </h2>

    <Timeline label="Leadership and volunteer experience" className="mt-8">
      {leadership.map((role) => (
        <TimelineItem key={role.id} current={role.current}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold leading-snug">{role.title}</h3>
            <p className="shrink-0 font-mono text-xs text-muted-foreground">
              <DateRange
                startISO={role.startISO}
                startLabel={role.startDate}
                endISO={role.endISO}
                endLabel={role.endDate}
              />
            </p>
          </div>

          <p className="mt-1 text-sm font-medium text-primary">
            {role.organization}
          </p>

          <ul className="mt-3 space-y-2">
            {role.highlights.map((highlight) => (
              <li
                key={highlight}
                className="prose-measure flex gap-3 text-sm text-muted-foreground"
              >
                <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <MetricText>{highlight}</MetricText>
              </li>
            ))}
          </ul>

          <TechChipList
            items={role.skills}
            className="mt-4"
            label={`${role.title} skills`}
          />
        </TimelineItem>
      ))}
    </Timeline>
  </section>
);

export default LeadershipSection;
