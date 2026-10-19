import type { Metadata } from "next";
import { Shell } from "../components/Shell";
import { getContent, defaultLocale, isLocale, locales } from "@/content";
import { metadataFor } from "../../app/lib/metadata";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? metadataFor(getContent(locale)) : {};
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  return <Shell lang={locale}>{children}</Shell>;
}
