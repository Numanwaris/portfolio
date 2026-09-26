import { Section } from "./section";
import { Reveal } from "./reveal";
import { education, honors } from "@/data/resume";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & honors">
      <div className="grid gap-10 sm:grid-cols-2">
        <Reveal>
          <ul className="space-y-6">
            {education.map((item) => (
              <li key={item.degree} className="border-l-2 border-border pl-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-sm font-semibold">{item.degree}</h3>
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-1 text-xs text-accent">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-sm font-semibold text-accent">Honors & Awards</h3>
          <ul className="mt-4 space-y-3">
            {honors.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
