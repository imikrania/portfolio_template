import Image from "next/image";
import type { SiteContent } from "@/content";
import { asset } from "../lib/base-path";
import { Section } from "./Section";

// Two initials for the placeholder circle. Japanese names render their first two characters.
const initials = (name: string): string =>
  name
    .trim()
    .split(/[\s・]+/)
    .map((word) => word[0] ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();

export function About({ content }: { content: SiteContent }) {
  const { person, about } = content;
  return (
    <Section id="about" title={about.title} padding="spacious">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
        {person.avatar ? (
          <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-800">
            <Image
              src={asset(person.avatar)}
              alt={person.name}
              width={192}
              height={192}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="bg-accent/10 flex h-48 w-48 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-lg dark:border-gray-800"
          >
            <span className="text-accent text-4xl font-light tracking-wider">{initials(person.name)}</span>
          </div>
        )}

        <div className="w-full flex-grow">
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            {about.highlights.map((highlight) => (
              <li key={highlight.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="text-accent min-w-[140px] font-medium dark:text-gray-200">{highlight.label}</span>
                <span>{highlight.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
