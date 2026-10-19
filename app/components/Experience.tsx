import type { SiteContent } from "@/content";
import { positions } from "@/content/site";
import { cn } from "../lib/cn";
import { Section } from "./Section";

export function Experience({ content }: { content: SiteContent }) {
  return (
    <Section id="experience" title={content.experience.title} width="wider">
      <ol className="relative space-y-6 md:space-y-12">
        <div
          aria-hidden="true"
          className="from-accent/0 via-accent/20 to-accent/0 absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b md:block dark:from-gray-200/0 dark:via-gray-200/20 dark:to-gray-200/0"
        />
        {positions.map((position, index) => {
          const entry = content.experience.positions[position.id];
          const onLeft = index % 2 === 0;
          return (
            <li key={position.id} className="relative md:grid md:grid-cols-2 md:gap-40">
              <span className="bg-accent/10 text-accent absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap backdrop-blur-sm md:block dark:bg-gray-200/10 dark:text-gray-200">
                {position.period}
              </span>
              <div className={cn("md:row-start-1", onLeft ? "md:col-start-1" : "md:col-start-2")}>
                <div className="rounded-xl border border-gray-100 bg-white/60 p-6 shadow-lg shadow-gray-200/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/60 dark:shadow-gray-900/50">
                  <div className="flex items-center gap-3">
                    <span className="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap md:hidden dark:bg-gray-200/10 dark:text-gray-200">
                      {position.period}
                    </span>
                    <h3 className="text-accent text-base font-medium md:text-lg dark:text-gray-200">{entry.title}</h3>
                  </div>
                  <p className="text-accent mt-3 text-base font-medium dark:text-gray-200">{entry.summary}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{position.company}</p>
                  <ul className="mt-3 space-y-2.5">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="pl-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
