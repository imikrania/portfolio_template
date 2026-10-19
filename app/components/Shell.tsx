import localFont from "next/font/local";
import "../globals.css";

// Self-hosted on purpose. next/font/google downloads the font during the build, and that download
// failed on the GitHub runner with "Cannot resolve '@vercel/turbopack-next/internal/font/google/font'",
// which took the whole deployment down. Local files make the build deterministic and offline-capable.
// Only the weights the stylesheets ask for are here: font-light, the default, and font-medium.
const montserrat = localFont({
  src: [
    { path: "../fonts/montserrat-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/montserrat-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

// Runs before first paint. A visitor whose system prefers dark must not see a light flash, and a
// stored choice must win over the system preference. An unreadable localStorage (private mode,
// disabled storage) falls back to the system preference instead of throwing.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export function Shell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
