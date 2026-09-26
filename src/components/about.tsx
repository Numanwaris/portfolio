import { Section } from "./section";
import { Reveal } from "./reveal";
import { profile } from "@/data/resume";

const stats = [
  { label: "Platforms shipped", value: "Web, Mobile & Desktop" },
  { label: "Core stack", value: "React / Next.js / NestJS" },
  { label: "Focus", value: "Warehouse, E-commerce & POS" },
];

export function About() {
  return (
    <Section id="about" title="Who" accentWord="I Am">
      <div className="grid gap-10 sm:grid-cols-3">
        <Reveal className="sm:col-span-2">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-4 text-sm text-muted">
            Based in {profile.location}.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-6 border-l border-border pl-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wide text-muted">{stat.label}</dt>
                <dd className="mt-1 text-sm font-medium">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
