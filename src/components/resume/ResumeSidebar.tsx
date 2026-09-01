import { TechChip } from "@/components/primitives";
import {
  education,
  headlineMetrics,
  personalInfo,
  topSkills,
} from "@/data/portfolio-data";

const glanceRows = [
  { label: "Education", value: `${education.institution} · CS ${education.endISO.slice(0, 4)}` },
  { label: "Location", value: personalInfo.location },
  { label: "Focus", value: "Data analytics · Full-stack" },
  { label: "Seeking", value: personalInfo.availability },
];

/**
 * Sticky rail carrying the facts a recruiter scans for first. Stacks above the
 * timeline on narrow viewports, where a sticky element would eat the screen.
 */
const ResumeSidebar = () => (
  <aside
    aria-label="Candidate summary"
    className="space-y-6 lg:sticky lg:top-32 lg:self-start"
  >
    <div className="card-surface p-6" data-print="keep">
      <h2 className="eyebrow mb-4">At a glance</h2>
      <dl className="space-y-4">
        {glanceRows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              {row.label}
            </dt>
            <dd className="mt-1 text-sm font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>

    <div className="card-surface p-6" data-print="hide">
      <h2 className="eyebrow mb-4">Selected impact</h2>
      <dl className="space-y-4">
        {headlineMetrics.map((metric) => (
          <div key={metric.label}>
            <dt className="font-display text-2xl font-semibold tabular-nums text-metric">
              {metric.value}
            </dt>
            <dd className="text-sm leading-snug text-muted-foreground">
              {metric.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>

    <div className="card-surface p-6" data-print="hide">
      <h2 className="eyebrow mb-4">Top skills</h2>
      <ul className="flex flex-wrap gap-2">
        {topSkills.map((skill) => (
          <li key={skill}>
            <TechChip variant="accent">{skill}</TechChip>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default ResumeSidebar;
