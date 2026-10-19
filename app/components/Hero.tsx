import type { SiteContent } from "@/content";

export function Hero({ content }: { content: SiteContent }) {
  const { person } = content;
  return (
    <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(74,102,112,0.16),transparent_70%)]"
      />
      <div className="relative mx-auto flex min-h-[65vh] max-w-4xl flex-col justify-center px-4 pt-32 pb-24">
        <p className="animate-fade-in text-accent text-xs tracking-[0.25em] uppercase">{person.role}</p>
        <h1 className="animate-fade-in mt-5 text-4xl font-light tracking-wider md:text-6xl" style={{ animationDelay: "120ms" }}>
          {person.name}
        </h1>
        <p className="animate-fade-in mt-6 max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300" style={{ animationDelay: "240ms" }}>
          {person.tagline}
        </p>
        <p className="animate-fade-in mt-3 text-sm text-gray-500 dark:text-gray-400" style={{ animationDelay: "300ms" }}>
          {person.location}
        </p>
        <div className="animate-fade-in mt-10 flex flex-wrap gap-3" style={{ animationDelay: "380ms" }}>
          <a href="#projects" className="border-accent bg-accent rounded-full border px-5 py-2 text-sm text-white transition-colors hover:opacity-90">
            {content.nav.projects}
          </a>
          <a href="#contact" className="border-accent text-accent hover:bg-accent rounded-full border px-5 py-2 text-sm transition-colors hover:text-white">
            {content.nav.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
