import type { SiteContent } from "@/content";
import { certifications, projects, skillGroups } from "@/content/site";

// The top of the page is one pass, not a loop: the name rises from behind its own edge, then the
// sentence, the numbers and the actions follow at fixed offsets. Everything is built from the same
// tokens as the sections below, so the landing reads as the first section rather than a second site.
export function Hero({ content }: { content: SiteContent }) {
  const { person, hero } = content;
  const skills = skillGroups.reduce(
    (total, group) => total + group.items.length,
    0,
  );
  const facts = [
    { value: String(projects.length), label: hero.facts.projects },
    { value: String(certifications.length), label: hero.facts.certifications },
    { value: String(skills), label: hero.facts.skills },
  ];

  return (
    <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(74,102,112,0.16),transparent_70%)]"
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-3.75rem)] max-w-3xl flex-col items-center justify-center px-4 pt-24 pb-20 text-center">
        <p
          className="hero-rise text-accent text-[0.6875rem] tracking-[0.32em] uppercase dark:text-gray-400"
          style={{ animationDelay: "80ms" }}
        >
          {person.role}
        </p>

        <h1 className="mt-7 -mb-[0.08em] overflow-hidden pb-[0.08em] text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.12] font-light tracking-[0.04em]">
          <span className="hero-mask block" style={{ animationDelay: "140ms" }}>
            {person.name}
          </span>
        </h1>

        {person.tagline ? (
          <p
            className="hero-rise mt-9 max-w-[34rem] text-base leading-[1.8] text-gray-600 [word-break:auto-phrase] md:text-lg dark:text-gray-300"
            style={{ animationDelay: "380ms" }}
          >
            {person.tagline}
          </p>
        ) : null}

        <ul
          className="hero-rise mt-12 grid w-full max-w-md grid-cols-3 items-start gap-x-4"
          style={{ animationDelay: "520ms" }}
        >
          {facts.map((fact) => (
            <li key={fact.label}>
              <span className="block text-2xl font-light text-gray-900 tabular-nums md:text-3xl dark:text-gray-100">
                {fact.value}
              </span>
              <span className="mt-2 block text-[0.6875rem] tracking-[0.16em] text-gray-500 uppercase sm:tracking-[0.28em] dark:text-gray-400">
                {fact.label}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="hero-rise mt-12 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "640ms" }}
        >
          <a
            href="#projects"
            className="border-accent bg-accent rounded-full border px-6 py-3 text-sm text-white transition-colors hover:bg-accent/90"
          >
            {content.nav.projects}
          </a>
          <a
            href="#contact"
            className="border-accent text-accent hover:bg-accent rounded-full border px-6 py-3 text-sm transition-colors hover:text-white dark:border-gray-400 dark:text-gray-200"
          >
            {content.nav.contact}
          </a>
        </div>
        <a
          href="#about"
          className="hero-rise hover:text-accent dark:hover:text-gray-200 mt-14 inline-flex items-center gap-2 text-[0.6875rem] tracking-[0.3em] text-gray-500 uppercase transition-colors dark:text-gray-400"
          style={{ animationDelay: "760ms" }}
        >
          {hero.scroll}
          <svg
            aria-hidden="true"
            viewBox="0 0 12 12"
            className="hero-bob h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2v7M2.5 6.5 6 10l3.5-3.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
