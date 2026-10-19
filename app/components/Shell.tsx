import { Montserrat } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
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
