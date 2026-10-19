import type { SiteContent } from "@/content";
import { projects } from "@/content/site";
import { Section } from "./Section";
import { ProjectToolbar } from "./ProjectToolbar";

export function Projects({ content }: { content: SiteContent }) {
  return (
    <Section id="projects" title={content.projects.title} width="wide" padding="compact">
      <div className="mb-4 flex justify-end">
        <ProjectToolbar labels={{ expandAll: content.labels.expandAll, collapseAll: content.labels.collapseAll }} />
      </div>
      <div className="space-y-3">
        {projects.map((project) => {
          const entry = content.projects.entries[project.id];
          return (
            <details
              key={project.id}
              data-project
              className="group rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <summary className="cursor-pointer list-none px-4 py-4 [&::-webkit-details-marker]:hidden">
                <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[140px_1fr_160px]">
                  <div className="text-sm text-gray-500 dark:text-gray-400">{project.period}</div>
                  <h3 className="text-accent text-base font-light tracking-wide dark:text-gray-200">{entry.name}</h3>
                  <div className="flex items-center gap-1.5 md:justify-end">
                    <span className="text-sm text-gray-600 whitespace-nowrap dark:text-gray-300">{entry.role}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent h-4 w-4 shrink-0 transition-transform group-open:rotate-180 dark:text-gray-400"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="border-t border-gray-100 px-4 pt-4 pb-4 dark:border-gray-700">
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">{entry.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs dark:border-gray-700">
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.repoUrl || project.liveUrl ? (
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    {project.repoUrl ? (
                      <a className="text-accent hover:underline" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        {content.labels.repository}
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a className="text-accent hover:underline" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {content.labels.live}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </details>
          );
        })}
      </div>
    </Section>
  );
}
