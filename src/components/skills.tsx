"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiApachemaven,
  SiC,
  SiCss,
  SiElectron,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Code2, Database, Monitor, Server, Smartphone, Wrench } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { additionalSkills, skillCategories, skills, type SkillCategory } from "@/data/resume";

const icons: Record<string, IconType> = {
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  C: SiC,
  "React.js": SiReact,
  Angular: SiAngular,
  "Next.js": SiNextdotjs,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Spring Boot": SiSpringboot,
  NestJS: SiNestjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "React Native": SiReact,
  Electron: SiElectron,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Maven: SiApachemaven,
  Postman: SiPostman,
};

const categoryIcons: Record<SkillCategory, typeof Code2> = {
  Languages: Code2,
  Frontend: Monitor,
  Backend: Server,
  "Mobile/Desktop": Smartphone,
  Database: Database,
  Tools: Wrench,
};

const filters = ["All", ...skillCategories] as const;

export function Skills() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const grouped = skillCategories
    .map((category) => ({
      category,
      items: skills.filter((s) => s.category === category),
    }))
    .filter((group) => active === "All" || group.category === active)
    .filter((group) => group.items.length > 0);

  return (
    <Section
      id="skills"
      title="Technical"
      accentWord="Skills"
      subtitle="Technologies and tools I use to build modern applications"
    >
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === filter
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-8">
        {grouped.map((group, i) => {
          const CategoryIcon = categoryIcons[group.category];
          return (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="card-hover rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CategoryIcon size={16} />
                  </span>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-5">
                  {group.items.map((item) => {
                    const Icon = icons[item.name];
                    return (
                      <div key={item.name} className="flex w-20 flex-col items-center gap-2 text-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-2xl text-foreground">
                          {Icon ? <Icon /> : item.name.slice(0, 2)}
                        </span>
                        <span className="text-xs text-muted">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {additionalSkills.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
