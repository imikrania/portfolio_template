import type { SiteContent } from "@/content";
import { About } from "./About";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

// Section order lives here and nowhere else.
export function PortfolioPage({ content }: { content: SiteContent }) {
  return (
    <>
      <a
        href="#main"
        className="focus:bg-accent sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        {content.labels.skipToContent}
      </a>
      <Navigation content={content} locale={content.locale} />
      <main id="main" tabIndex={-1}>
        <Hero content={content} />
        <About content={content} />
        <Skills content={content} />
        <Experience content={content} />
        <Certifications content={content} />
        <Projects content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
