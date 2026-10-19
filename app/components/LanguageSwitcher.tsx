import Link from "next/link";
import { hrefFor, localeNames, locales, type Locale } from "@/content";

// prefetch={false} is deliberate. Under output: "export" the client asks for an RSC payload whose
// filename does not match the file the export writes, so the prefetch 404s and the click falls back
// to a full page load anyway. Prefetching buys nothing here and logs two 404s per page.
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const others = locales.filter((locale) => locale !== current);

  return (
    <ul className="flex items-center gap-1.5" aria-label={label}>
      {others.map((locale) => (
        <li key={locale}>
          <Link
            href={hrefFor(locale)}
            hrefLang={locale}
            prefetch={false}
            className="hover:border-accent hover:text-accent inline-block rounded-full border border-gray-300 px-3 py-1 text-xs transition-colors dark:border-gray-700"
          >
            {localeNames[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
