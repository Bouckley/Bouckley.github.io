import { TechChip } from "@/components/primitives";
import { skillGroups } from "@/data/portfolio-data";

/**
 * Grouped chips rather than proficiency bars. Self-assigned percentages read as
 * unserious to engineers, and they carry no information a reader can verify.
 */
const SkillsMatrix = () => (
  <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-32">
    <h2 id="skills-heading" className="text-2xl font-semibold sm:text-3xl">
      Technical skills
    </h2>

    <dl className="mt-8 space-y-8">
      {skillGroups.map((group) => (
        <div
          key={group.id}
          data-print="keep"
          className="grid gap-3 border-t border-border pt-6 sm:grid-cols-[180px_1fr] sm:gap-6"
        >
          <dt className="text-sm font-semibold">{group.name}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <TechChip variant={group.primary ? "accent" : "default"}>
                    {skill}
                  </TechChip>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export default SkillsMatrix;
