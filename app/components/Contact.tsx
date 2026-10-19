import type { SiteContent } from "@/content";
import { links } from "@/content/site";
import { Icon } from "./Icon";
import { Section } from "./Section";

export function Contact({ content }: { content: SiteContent }) {
  return (
    <Section id="contact" title={content.contact.title} intro={content.contact.body}>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex flex-col items-center gap-3 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="text-gray-600 transition-colors group-hover:text-accent dark:text-gray-400 dark:group-hover:text-white">
                <Icon name={link.icon} className="h-6 w-6" />
              </span>
              <span className="text-sm text-gray-600 transition-colors group-hover:text-accent dark:text-gray-300 dark:group-hover:text-white">
                {content.contact.linkLabels[link.id]}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
