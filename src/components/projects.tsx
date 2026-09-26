import { Section } from "./section";
import { Reveal } from "./reveal";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured"
      accentWord="Projects"
      subtitle="A showcase of things I've built across web, mobile, and backend systems"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <div className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative flex h-28 items-center justify-center bg-gradient-to-br from-accent/80 to-accent-soft/60 px-6">
                <div className="absolute left-4 top-4 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-foreground/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-foreground/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-foreground/40" />
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-black/20 px-2.5 py-1 text-xs font-medium text-white">
                  {project.tag}
                </span>
                <p className="text-center text-sm font-semibold text-accent-foreground/90">
                  {project.title}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
