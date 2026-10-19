"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);

  // The pre-hydration script in Shell has already decided the class; this only syncs the button
  // state to it, which is why the server renders the light icon first.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable in private mode; the class change still applies for this visit.
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200/70 dark:text-gray-300 dark:hover:bg-gray-700/70"
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
        {dark ? (
          <path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M4.22 4.22a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.41 1 1 0 1 1-1.42-1.41m10.14 10.14a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42 1 1 0 1 1-1.42-1.42M2 10a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m13-1a1 1 0 1 1 0 2h-1a1 1 0 1 0 0-2zM4.22 15.78a1 1 0 0 1 0-1.42 1 1 0 1 1 1.42 1.42 1 1 0 0 1-1.42 0M14.36 5.64a1 1 0 0 1 0-1.42 1 1 0 1 1 1.42 1.42 1 1 0 0 1-1.42 0" />
        ) : (
          <path d="M17.29 12.44A7.5 7.5 0 0 1 7.56 2.71a8 8 0 1 0 9.73 9.73" />
        )}
      </svg>
    </button>
  );
}
