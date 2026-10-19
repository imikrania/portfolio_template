import { defaultLocale, locales, type Locale } from "./site";
import type { SiteContent } from "./types";
import en from "./en";
import ja from "./ja";

const byLocale: Record<Locale, SiteContent> = { en, ja };

export const getContent = (locale: Locale): SiteContent => byLocale[locale];

// Returns an unprefixed path. next/link applies basePath to it, so adding the prefix here
// would produce /<repo>/<repo>/ja/. The default locale answers on /, which is what makes the
// derived base path work for a project site and a user site alike.
export const hrefFor = (locale: Locale): string => (locale === defaultLocale ? "/" : `/${locale}/`);

export const isLocale = (value: string): value is Locale => locales.some((locale) => locale === value);

export * from "./site";
export type { SiteContent } from "./types";
