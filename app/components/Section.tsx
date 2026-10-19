import type { SectionId } from "@/content/site";
import { cn } from "../lib/cn";

export function Section({
  id,
  title,
  intro,
  width = "readable",
  children,
}: {
  id: SectionId;
  title: string;
  intro?: string;
  width?: "readable" | "wide";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-gray-200 py-16 md:py-24 dark:border-gray-800">
      <div className={cn("mx-auto px-4", width === "wide" ? "max-w-6xl" : "max-w-4xl")}>
        <h2 className="text-accent text-2xl font-light tracking-wider md:text-3xl">{title}</h2>
        {intro ? <p className="mt-3 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{intro}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
