import type { SiteContent } from "@/content";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">{content.footer.note}</p>
      </div>
    </footer>
  );
}
