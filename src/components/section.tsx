import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
