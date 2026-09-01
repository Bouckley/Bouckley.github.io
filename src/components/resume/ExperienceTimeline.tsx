import { MapPin } from "lucide-react";
import {
  DateRange,
  MetricText,
  TechChipList,
  Timeline,
  TimelineItem,
} from "@/components/primitives";
import { experiences } from "@/data/portfolio-data";

const ExperienceTimeline = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="scroll-mt-32"
  >
    <h2 id="experience-heading" className="text-2xl font-semibold sm:text-3xl">
      Experience
    </h2>

    <Timeline label="Work experience" className="mt-8">
      {experiences.map((role) => (
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

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-medium text-primary">{role.company}</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {role.location}
            </span>
          </div>

          <p className="prose-measure mt-3 text-sm text-muted-foreground">
            {role.summary}
          </p>

          <ul className="mt-4 space-y-2">
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

          <TechChipList items={role.tech} className="mt-4" label={`${role.title} technologies`} />
        </TimelineItem>
      ))}
    </Timeline>
  </section>
);

export default ExperienceTimeline;
