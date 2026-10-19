import type { SiteContent } from "@/content";
import { Section } from "./Section";

export function About({ content }: { content: SiteContent }) {
  return (
    <Section id="about" title={content.about.title}>
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="space-y-3">
          {content.about.highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800">
              <dt className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">{highlight.label}</dt>
              <dd className="mt-1 text-sm">{highlight.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
