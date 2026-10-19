import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repository>/, so every asset URL needs that prefix.
// The workflow sets NEXT_PUBLIC_BASE_PATH from the repository name, which keeps a clone working
// without editing this file.
//
// "/" is accepted as a spelling of the empty string, meaning the site root, which is what a
// <you>.github.io repository wants. It exists because an environment variable set to empty does not
// reliably reach a child process on Windows, and because Next rejects "/" as a basePath value.
const configured = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = configured === "/" ? "" : configured;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
