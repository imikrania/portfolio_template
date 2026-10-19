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

// Runs before first paint so a stored dark choice never flashes light, and vice versa. The system
// preference is deliberately not consulted: the site's default is light, and a first visitor should
// see the owner's intended look, which is how reference 1 behaves.
const themeScript = `(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;

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
