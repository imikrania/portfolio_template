import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repository>/, so every asset URL needs that prefix.
// The workflow sets NEXT_PUBLIC_BASE_PATH from the repository name, which keeps a clone working
// without editing this file. An empty value suits a <user>.github.io user site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
