import type { SectionId } from "@/content/site";
import { cn } from "../lib/cn";

export function Section({
  id,
  title,
  intro,
  width = "readable",
  padding = "default",
  children,
}: {
  id: SectionId;
  title: string;
  intro?: string;
  width?: "readable" | "wide" | "wider";
  padding?: "default" | "compact" | "spacious";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-gray-200 dark:border-gray-800",
        padding === "spacious" ? "py-32" : padding === "compact" ? "py-16" : "py-20",
      )}
    >
      <div className={cn("mx-auto px-4", width === "wide" ? "max-w-6xl" : width === "wider" ? "max-w-7xl" : "max-w-4xl")}>
        <header className="text-center">
          <h2 className="text-accent text-2xl font-light tracking-wider md:text-3xl">{title}</h2>
          {intro ? (
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{intro}</p>
          ) : null}
        </header>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
