import type { SiteContent } from "@/content";
import { links } from "@/content/site";
import { Icon } from "./Icon";
import { Section } from "./Section";

export function Contact({ content }: { content: SiteContent }) {
  return (
    <Section id="contact" title={content.contact.title} intro={content.contact.body}>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="hover:border-accent hover:text-accent flex h-full items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-colors dark:border-gray-800 dark:bg-gray-800"
            >
              <Icon name={link.icon} className="h-4 w-4 shrink-0" />
              {content.contact.linkLabels[link.id]}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
