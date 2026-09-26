"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/resume";

const highlightSkills = ["React.js", "Next.js", "Angular", "NestJS", "React Native", "PostgreSQL"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28">
      <div
        className="glow-orb animate-float h-72 w-72 bg-accent/25 -left-20 top-24 sm:h-96 sm:w-96"
        aria-hidden
      />
      <div
        className="glow-orb animate-float-slow h-72 w-72 bg-accent-2/20 right-0 bottom-10 sm:h-96 sm:w-96"
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-5xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gradient mt-3 text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-muted sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {highlightSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-2.5 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              View projects
            </a>

            <div className="ml-1 flex items-center gap-3 text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="transition-colors hover:text-foreground"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm"
        >
          <div
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent-2 opacity-30 blur-2xl"
            aria-hidden
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border bg-card p-2.5 shadow-2xl sm:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/photo.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 18rem, 14rem"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
