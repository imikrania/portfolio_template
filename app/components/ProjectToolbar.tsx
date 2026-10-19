"use client";

export function ProjectToolbar({ labels }: { labels: { expandAll: string; collapseAll: string } }) {
  const setAll = (open: boolean) => {
    for (const element of document.querySelectorAll<HTMLDetailsElement>("details[data-project]")) {
      element.open = open;
    }
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => setAll(true)}
        className="hover:text-accent px-3 py-1.5 text-sm text-gray-600 transition-colors dark:text-gray-300 dark:hover:text-white"
      >
        {labels.expandAll}
      </button>
      <button
        type="button"
        onClick={() => setAll(false)}
        className="hover:text-accent px-3 py-1.5 text-sm text-gray-600 transition-colors dark:text-gray-300 dark:hover:text-white"
      >
        {labels.collapseAll}
      </button>
    </div>
  );
}
