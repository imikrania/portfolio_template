import type { SiteContent } from "@/content";
import { certificationCategoryIds, certifications } from "@/content/site";
import { Section } from "./Section";

// The two heading icons are redrawn from lucide-react paths (ISC licence): Cloud and BadgeCheck,
// plus a Check for the list items. They stay inline because two glyphs do not earn a dependency.
export function Certifications({ content }: { content: SiteContent }) {
  return (
    <Section id="certifications" title={content.certifications.title} intro={content.certifications.intro}>
      <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
        <div className="space-y-8">
          {certificationCategoryIds.map((category) => (
            <div key={category}>
              <h3 className="text-accent mb-6 flex items-center gap-3 text-xl font-medium dark:text-gray-200">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={category === "aws" ? "h-6 w-6 shrink-0 text-[#FF9900]" : "h-6 w-6 shrink-0"}
                >
                  {category === "aws" ? (
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  ) : (
                    <>
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </>
                  )}
                </svg>
                {content.certifications.categories[category]}
              </h3>
              <ul className="space-y-3">
                {certifications
                  .filter((certification) => certification.category === category)
                  .map((certification) => (
                    <li key={certification.id} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent mt-1 h-5 w-5 shrink-0 dark:text-gray-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        {certification.name}
                        <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">{certification.issuer}</span>
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
