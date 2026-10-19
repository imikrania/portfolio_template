import type { Metadata } from "next";
import type { SiteContent } from "@/content";

// No canonical or og:url, because a template cannot know the host it will be published on.
export const metadataFor = (content: SiteContent): Metadata => ({
  title: content.meta.title,
  description: content.meta.description,
  openGraph: {
    type: "website",
    title: content.meta.title,
    description: content.meta.description,
  },
  twitter: {
    card: "summary",
    title: content.meta.title,
    description: content.meta.description,
  },
});
