import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Professional"
      accentWord="Experience"
      subtitle="Where I've worked and what I've built"
    >
      <div className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <div className="card-hover rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-badge/15 px-3 py-1 text-xs font-medium text-badge">
                    {job.type}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Briefcase size={16} />
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Responsibilities</p>
                  <ul className="mt-3 space-y-3">
                    {job.responsibilities.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                    <Sparkles size={13} className="text-accent" />
                    Highlights
                  </p>
                  <div className="mt-3 space-y-2">
                    {job.highlights.map((point) => (
                      <div
                        key={point}
                        className="rounded-lg border border-accent/20 bg-accent/5 p-3 text-sm leading-relaxed text-muted"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
