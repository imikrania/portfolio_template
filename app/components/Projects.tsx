import type { SiteContent } from "@/content";
import { projects } from "@/content/site";
import { Section } from "./Section";
import { ProjectToolbar } from "./ProjectToolbar";

export function Projects({ content }: { content: SiteContent }) {
  return (
    <Section id="projects" title={content.projects.title} width="wide">
      <div className="mb-5 flex justify-end">
        <ProjectToolbar labels={{ expandAll: content.labels.expandAll, collapseAll: content.labels.collapseAll }} />
      </div>
      <div className="space-y-3">
        {projects.map((project) => {
          const entry = content.projects.entries[project.id];
          return (
            <details
              key={project.id}
              data-project
              className="group rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
            >
              <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-2 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="w-20 shrink-0 text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
                  <span className="text-lg font-medium">{entry.name}</span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{entry.role}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    fill="currentColor"
                  >
                    <path d="M8 11.5 2.5 6l1.06-1.06L8 9.38l4.44-4.44L13.5 6z" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-gray-200 px-5 py-4 dark:border-gray-800">
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
                      <a
                        className="text-accent hover:underline"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.labels.repository}
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        className="text-accent hover:underline"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
