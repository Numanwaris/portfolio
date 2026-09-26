import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { profile } from "@/data/resume";

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: `tel:${profile.phone}`, label: profile.phone, icon: Phone },
  { href: profile.github, label: "github.com/Numanwaris", icon: GithubIcon },
  { href: profile.linkedin, label: "linkedin.com/in/numan-waris-khan", icon: LinkedinIcon },
];

export function Contact() {
  return (
    <Section id="contact" title="Get In" accentWord="Touch">
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold">Let&apos;s Create Something Amazing Together</h3>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            I&apos;m always excited to work on new projects and collaborate with passionate
            people. Whether you have a specific project in mind or just want to chat about
            technology, I&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-accent to-accent-soft px-8 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="card-hover flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm hover:text-accent"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
