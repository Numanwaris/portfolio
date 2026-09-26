"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-5xl">
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
          className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl"
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
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
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin size={20} />
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
