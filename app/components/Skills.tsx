import type { SiteContent } from "@/content";
import { skillGroups, skillLevels, type SkillLevel } from "@/content/site";
import { Section } from "./Section";

const levelStyles: Record<SkillLevel, string> = {
  expert:
    "border-[#8B4343]/30 bg-gradient-to-r from-[#FFE4E4] to-[#FFD7D7] text-[#8B4343] dark:border-[#FFB8B8]/25 dark:from-[#4A2F2F] dark:to-[#5A3F3F] dark:text-[#FFB8B8]",
  intermediate:
    "border-[#437B74]/30 bg-gradient-to-r from-[#E4F5F3] to-[#B8E6E1] text-[#437B74] dark:border-[#95D8D2]/25 dark:from-[#2F4A47] dark:to-[#3F5A57] dark:text-[#95D8D2]",
  beginner:
    "border-gray-300 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] text-gray-600 dark:border-gray-600 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300",
};

export function Skills({ content }: { content: SiteContent }) {
  return (
    <Section id="skills" title={content.skills.title} intro={content.skills.intro} width="wide">
      <ul className="mb-8 flex flex-wrap gap-3">
        {skillLevels.map((level) => (
          <li key={level} className={`rounded-full border px-3 py-1 text-xs font-medium ${levelStyles[level]}`}>
            {content.skills.levels[level]}
          </li>
        ))}
      </ul>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-800">
            <h3 className="text-accent text-sm font-medium tracking-wide uppercase">{content.skills.groups[group.id]}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={`rounded-full border px-3 py-1 text-sm transition-transform hover:scale-105 ${levelStyles[item.level]}`}
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
