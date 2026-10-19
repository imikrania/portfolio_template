// GitHub Pages serves a project site from /<repository>/, so a file in public/ needs that prefix
// in its URL. next/image does not add basePath to a string src, and a raw <img src> cannot, so every
// reference to a public/ file goes through asset().
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
};

export { basePath };
