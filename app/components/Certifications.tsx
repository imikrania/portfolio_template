import type { SiteContent } from "@/content";
import { certificationCategoryIds, certifications } from "@/content/site";
import { Section } from "./Section";

export function Certifications({ content }: { content: SiteContent }) {
  return (
    <Section id="certifications" title={content.certifications.title} intro={content.certifications.intro}>
      <div className="space-y-8">
        {certificationCategoryIds.map((category) => (
          <div key={category}>
            <h3 className="text-accent text-sm font-medium tracking-wide uppercase">
              {content.certifications.categories[category]}
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications
                .filter((certification) => certification.category === category)
                .map((certification) => (
                  <li
                    key={certification.id}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-800"
                  >
                    <p className="text-sm font-medium">{certification.name}</p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{certification.issuer}</p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
