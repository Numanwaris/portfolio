import { Section } from "./section";
import { Reveal } from "./reveal";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">
                {job.company} · {job.location}
              </p>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
