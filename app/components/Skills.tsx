import type { SiteContent } from "@/content";
import { skillGroups, skillLevels, type SkillLevel } from "@/content/site";
import { cn } from "../lib/cn";
import { Section } from "./Section";

// Same treatment as reference 1's SkillButton: small, medium weight, and the gradient deepens
// on hover, which is what makes a pill read as a button. The pills stay list items because they
// do nothing on click, and a button that does nothing lies to assistive technology.
const levelStyles: Record<SkillLevel, string> = {
  expert:
    "rounded-full border border-opacity-20 border-[#8B4343] bg-gradient-to-r from-[#FFE4E4] to-[#FFD7D7] px-3 py-1.5 text-xs font-medium text-[#8B4343] transition-all duration-300 hover:scale-105 hover:from-[#FFD7D7] hover:to-[#FFC8C8] dark:border-[#FFB8B8] dark:from-[#4A2F2F] dark:to-[#5A3F3F] dark:text-[#FFB8B8] dark:hover:from-[#5A3F3F] dark:hover:to-[#6A4F4F]",
  intermediate:
    "rounded-full border border-opacity-20 border-[#437B74] bg-gradient-to-r from-[#E4F5F3] to-[#B8E6E1] px-3 py-1.5 text-xs font-medium text-[#437B74] transition-all duration-300 hover:scale-105 hover:from-[#B8E6E1] hover:to-[#95D8D2] dark:border-[#95D8D2] dark:from-[#2F4A47] dark:to-[#3F5A57] dark:text-[#95D8D2] dark:hover:from-[#3F5A57] dark:hover:to-[#4F6A67]",
  beginner:
    "rounded-full border border-opacity-20 border-gray-400 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] px-3 py-1.5 text-xs font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:from-[#E9ECEF] hover:to-[#DEE2E6] dark:border-gray-500 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600",
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
                <li key={item.name} className={levelStyles[item.level]}>
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
