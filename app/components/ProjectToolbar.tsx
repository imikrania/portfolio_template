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
        className="hover:border-accent hover:text-accent rounded-full border border-gray-300 px-3 py-1 text-xs transition-colors dark:border-gray-700"
      >
        {labels.expandAll}
      </button>
      <button
        type="button"
        onClick={() => setAll(false)}
        className="hover:border-accent hover:text-accent rounded-full border border-gray-300 px-3 py-1 text-xs transition-colors dark:border-gray-700"
      >
        {labels.collapseAll}
      </button>
    </div>
  );
}
