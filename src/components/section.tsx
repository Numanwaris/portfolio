import type { ReactNode } from "react";

export function Section({
  id,
  title,
  accentWord,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  accentWord: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title} <span className="text-accent">{accentWord}</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
          {subtitle ? <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p> : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
