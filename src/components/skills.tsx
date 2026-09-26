import { Section } from "./section";
import { Reveal } from "./reveal";
import { skillGroups } from "@/data/resume";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-accent">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
