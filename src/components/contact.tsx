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
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <Reveal>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          I&apos;m open to full-stack roles and freelance projects across web, mobile, and
          desktop. Reach out and I&apos;ll get back to you soon.
        </p>

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
