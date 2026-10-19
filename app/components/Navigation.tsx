"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hrefFor, sectionIds, type Locale, type SectionId, type SiteContent } from "@/content";
import { cn } from "../lib/cn";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation({ content, locale }: { content: SiteContent; locale: Locale }) {
  const [active, setActive] = useState<SectionId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = sectionIds.flatMap((id) => {
      const element = document.getElementById(id);
      return element ? [element] : [];
    });

    // A narrow band across the middle of the viewport decides the current section, so exactly one
    // link stays highlighted while the next section is already partly on screen.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = sectionIds.find((candidate) => candidate === entry.target.id);
          if (id) setActive(id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200/60 bg-white/70 backdrop-blur-sm dark:border-gray-800/60 dark:bg-gray-900/70">
      <nav aria-label={content.person.name} className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* prefetch is off for the same reason as in LanguageSwitcher: a static export cannot answer it. */}
        <Link href={hrefFor(locale)} prefetch={false} className="text-accent text-sm font-medium tracking-wider">
          {content.person.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "text-sm transition-colors",
                  active === id ? "text-accent" : "hover:text-accent text-gray-600 dark:text-gray-300",
                )}
              >
                {content.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle label={content.labels.theme} />
          <LanguageSwitcher current={locale} label={content.labels.language} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={content.labels.menu}
            className="rounded-full p-2 text-gray-600 md:hidden dark:text-gray-300"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
              {menuOpen ? (
                <path d="M4.3 3.3 10 9l5.7-5.7 1.4 1.4L11.4 10l5.7 5.7-1.4 1.4L10 11.4l-5.7 5.7-1.4-1.4L8.6 10 2.9 4.7z" />
              ) : (
                <path d="M3 5h14v2H3zm0 4h14v2H3zm0 4h14v2H3z" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Always rendered, closed with the hidden attribute: the button's aria-controls has to
          resolve to an element even while the menu is shut. */}
      <ul
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-gray-200/60 md:hidden dark:border-gray-800/60"
      >
        {sectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent block px-4 py-3 text-sm text-gray-700 dark:text-gray-200"
            >
              {content.nav[id]}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
