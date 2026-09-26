import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
