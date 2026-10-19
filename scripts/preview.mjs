// Serves out/ under the same prefix GitHub Pages uses, so a local check matches production.
// Run "npm run build" first, then "npm run preview".
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, resolve } from "node:path";

const OUT = resolve("out");
const PORT = Number(process.env.PORT ?? 4321);

// A user site is served from the domain root, and the workflow expresses that as an empty
// NEXT_PUBLIC_BASE_PATH. An environment variable set to empty does not reliably reach a child
// process on Windows, so "/" is accepted as the same instruction.
const configured = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio_template";
const PREFIX = configured === "/" ? "" : configured;

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
};

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);

  if (PREFIX && !pathname.startsWith(PREFIX)) {
    response.writeHead(404, { "content-type": "text/plain" }).end("Not under " + PREFIX);
    return;
  }

  const relative = pathname.slice(PREFIX.length) || "/";
  let file = join(OUT, relative);

  try {
    const stats = await stat(file);
    if (stats.isDirectory()) file = join(file, "index.html");
  } catch {
    response.writeHead(404, { "content-type": "text/plain" }).end("Not found");
    return;
  }

  try {
    const body = await readFile(file);
    response.writeHead(200, { "content-type": CONTENT_TYPES[extname(file)] ?? "application/octet-stream" }).end(body);
  } catch {
    response.writeHead(404, { "content-type": "text/plain" }).end("Not found");
  }
});

server.listen(PORT, () => {
  console.log("Serving " + OUT + " at http://localhost:" + PORT + PREFIX + "/");
});
