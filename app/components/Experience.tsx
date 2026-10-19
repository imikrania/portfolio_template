import type { SiteContent } from "@/content";
import { positions } from "@/content/site";
import { Section } from "./Section";

export function Experience({ content }: { content: SiteContent }) {
  return (
    <Section id="experience" title={content.experience.title} width="wide">
      <ol className="space-y-10">
        {positions.map((position) => {
          const entry = content.experience.positions[position.id];
          return (
            <li key={position.id} className="grid gap-3 md:grid-cols-[9rem_1fr] md:gap-8">
              <p className="text-sm text-gray-500 md:pt-1 md:text-right dark:text-gray-400">{position.period}</p>
              <div className="relative border-l border-gray-200 pl-6 dark:border-gray-800">
                <span aria-hidden="true" className="bg-accent absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full" />
                <h3 className="text-lg font-medium">{entry.title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {position.company} / {entry.summary}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent">
                        &bull;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
