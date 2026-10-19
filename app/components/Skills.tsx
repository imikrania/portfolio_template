import type { SiteContent } from "@/content";
import { skillGroups, skillLevels, type SkillLevel } from "@/content/site";
import { cn } from "../lib/cn";
import { Section } from "./Section";

const levelStyles: Record<SkillLevel, string> = {
  expert:
    "border-[#8B4343]/30 bg-gradient-to-r from-[#FFE4E4] to-[#FFD7D7] text-[#8B4343] dark:border-[#FFB8B8]/25 dark:from-[#4A2F2F] dark:to-[#5A3F3F] dark:text-[#FFB8B8]",
  intermediate:
    "border-[#437B74]/30 bg-gradient-to-r from-[#E4F5F3] to-[#B8E6E1] text-[#437B74] dark:border-[#95D8D2]/25 dark:from-[#2F4A47] dark:to-[#3F5A57] dark:text-[#95D8D2]",
  beginner:
    "border-gray-300 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] text-gray-600 dark:border-gray-600 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300",
};

const levelDots: Record<SkillLevel, string> = {
  expert:
    "bg-gradient-to-r from-[#FFE4E4] to-[#FFD7D7] ring-2 ring-[#FFD7D7] ring-opacity-30 dark:from-[#4A2F2F] dark:to-[#5A3F3F] dark:ring-[#5A3F3F]",
  intermediate:
    "bg-gradient-to-r from-[#E4F5F3] to-[#B8E6E1] ring-2 ring-[#B8E6E1] ring-opacity-30 dark:from-[#2F4A47] dark:to-[#3F5A57] dark:ring-[#3F5A57]",
  beginner:
    "bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] ring-2 ring-gray-300 ring-opacity-30 dark:from-gray-800 dark:to-gray-700 dark:ring-gray-600",
};

export function Skills({ content }: { content: SiteContent }) {
  return (
    <Section id="skills" title={content.skills.title} intro={content.skills.intro} width="wide" padding="compact">
      <ul className="mb-8 flex flex-wrap justify-center gap-4 text-xs">
        {skillLevels.map((level) => (
          <li key={level} className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm dark:bg-gray-800">
            <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", levelDots[level])} />
            <span className="text-gray-600 dark:text-gray-300">{content.skills.levels[level]}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id} className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
            <h3 className="text-accent mb-3 flex items-center gap-2 text-lg dark:text-gray-200">
              <span className="whitespace-nowrap">{content.skills.groups[group.id]}</span>
              <span
                aria-hidden="true"
                className="h-px flex-grow bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
              />
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={cn("rounded-full border px-3 py-1 text-sm transition-transform hover:scale-105", levelStyles[item.level])}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
