import { Award as AwardIcon, GraduationCap, MapPin } from "lucide-react";
import { DateRange, TechChip } from "@/components/primitives";
import { awards, education } from "@/data/portfolio-data";

const EducationSection = () => (
  <section id="education" aria-labelledby="education-heading" className="scroll-mt-32">
    <h2 id="education-heading" className="text-2xl font-semibold sm:text-3xl">
      Education
    </h2>

    <div className="card-surface mt-8 p-6" data-print="keep">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
          {education.institution}
        </h3>
        <p className="shrink-0 font-mono text-xs text-muted-foreground">
          <DateRange
            startISO={education.startISO}
            startLabel={education.period.split(" – ")[0]}
            endISO={education.endISO}
            endLabel={education.period.split(" – ")[1]}
          />
        </p>
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="font-medium text-primary">{education.degree}</span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          {education.location}
        </span>
      </div>

      <h4 className="eyebrow mt-6 mb-3">Relevant coursework</h4>
      <ul className="flex flex-wrap gap-2">
        {education.coursework.map((course) => (
          <li key={course}>
            <TechChip>{course}</TechChip>
          </li>
        ))}
      </ul>
    </div>

    <h3 className="mt-12 flex items-center gap-2 text-lg font-semibold">
      <AwardIcon className="h-5 w-5 text-primary" aria-hidden="true" />
      Awards &amp; certifications
    </h3>

    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {awards.map((award) => (
        <li
          key={award.name}
          data-print="keep"
          className="card-surface flex flex-col gap-1 p-4"
        >
          <p className="text-sm font-medium leading-snug">{award.name}</p>
          <p className="text-xs text-muted-foreground">
            {award.issuer}
            <span aria-hidden="true"> · </span>
            <time dateTime={award.dateISO}>{award.date}</time>
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export default EducationSection;
