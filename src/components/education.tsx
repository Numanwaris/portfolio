import { Award, GraduationCap } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { education, honors } from "@/data/resume";

export function Education() {
  return (
    <Section id="education" title="Education &" accentWord="Honors">
      <div className="grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="card-hover h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap size={16} />
              </span>
              <h3 className="font-semibold">Education</h3>
            </div>
            <ul className="mt-6 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l-2 border-border pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-sm font-semibold">{item.degree}</h4>
                    <span className="font-mono text-xs text-muted">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-1 text-xs text-accent">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-hover h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Award size={16} />
              </span>
              <h3 className="font-semibold">Honors & Awards</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {honors.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
