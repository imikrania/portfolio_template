import type { Metadata } from "next";
import { Shell } from "../components/Shell";
import { getContent, defaultLocale } from "@/content";
import { metadataFor } from "../lib/metadata";

const content = getContent(defaultLocale);

export const metadata: Metadata = metadataFor(content);

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang={content.locale}>{children}</Shell>;
}
