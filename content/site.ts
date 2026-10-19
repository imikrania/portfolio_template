// Language-independent facts. Everything with an identifier, a date, a URL, or a proper noun lives
// here once. The locale files hold prose only, and their keys are derived from the id lists below,
// so a translation that misses an entry fails the type check instead of rendering blank.

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

// Each language named in itself, so a switcher does not need a translation of every language name.
export const localeNames: Record<Locale, string> = { en: "English", ja: "日本語" };

export const sectionIds = ["about", "skills", "experience", "certifications", "projects", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

export const projectIds = ["atlas", "beacon", "lumen", "harbor", "prism", "quill"] as const;
export type ProjectId = (typeof projectIds)[number];

export interface Project {
  id: ProjectId;
  period: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  { id: "atlas", period: "2024", tech: ["TypeScript", "Next.js", "PostgreSQL"], repoUrl: "https://example.com/alexdoe/atlas", liveUrl: "https://example.com/atlas" },
  { id: "beacon", period: "2023", tech: ["Go", "PostgreSQL", "Docker"], repoUrl: "https://example.com/alexdoe/beacon" },
  { id: "lumen", period: "2023", tech: ["Rust", "WebAssembly"], repoUrl: "https://example.com/alexdoe/lumen" },
  { id: "harbor", period: "2022", tech: ["TypeScript", "React", "Kubernetes"], repoUrl: "https://example.com/alexdoe/harbor" },
  { id: "prism", period: "2022", tech: ["Python", "OpenCV", "AWS Lambda"], repoUrl: "https://example.com/alexdoe/prism" },
  { id: "quill", period: "2021", tech: ["TypeScript", "CodeMirror"], repoUrl: "https://example.com/alexdoe/quill" },
];

export const positionIds = ["northwind", "cirrus", "foundry"] as const;
export type PositionId = (typeof positionIds)[number];

export interface Position {
  id: PositionId;
  period: string;
  company: string;
}

export const positions: Position[] = [
  { id: "northwind", period: "2022 - Present", company: "Northwind Systems" },
  { id: "cirrus", period: "2020 - 2022", company: "Cirrus Labs" },
  { id: "foundry", period: "2018 - 2020", company: "Foundry Digital" },
];

export const skillGroupIds = ["languages", "frontend", "backend", "infrastructure", "tools"] as const;
export type SkillGroupId = (typeof skillGroupIds)[number];

export const skillLevels = ["expert", "intermediate", "beginner"] as const;
export type SkillLevel = (typeof skillLevels)[number];

export interface SkillGroup {
  id: SkillGroupId;
  items: { name: string; level: SkillLevel }[];
}

export const skillGroups: SkillGroup[] = [
  { id: "languages", items: [{ name: "TypeScript", level: "expert" }, { name: "Go", level: "intermediate" }, { name: "Python", level: "intermediate" }, { name: "Rust", level: "beginner" }] },
  { id: "frontend", items: [{ name: "React", level: "expert" }, { name: "Next.js", level: "expert" }, { name: "Tailwind CSS", level: "expert" }, { name: "Astro", level: "intermediate" }] },
  { id: "backend", items: [{ name: "Node.js", level: "expert" }, { name: "PostgreSQL", level: "intermediate" }, { name: "GraphQL", level: "intermediate" }, { name: "Redis", level: "beginner" }] },
  { id: "infrastructure", items: [{ name: "Docker", level: "expert" }, { name: "GitHub Actions", level: "expert" }, { name: "Terraform", level: "intermediate" }, { name: "Kubernetes", level: "beginner" }] },
  { id: "tools", items: [{ name: "Git", level: "expert" }, { name: "Playwright", level: "intermediate" }, { name: "Figma", level: "intermediate" }, { name: "Neovim", level: "intermediate" }] },
];

export const certificationIds = ["aws-saa", "aws-dva", "cka", "psm1"] as const;
export type CertificationId = (typeof certificationIds)[number];

export const certificationCategoryIds = ["aws", "other"] as const;
export type CertificationCategoryId = (typeof certificationCategoryIds)[number];

export interface Certification {
  id: CertificationId;
  name: string;
  issuer: string;
  category: CertificationCategoryId;
}

export const certifications: Certification[] = [
  { id: "aws-saa", name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", category: "aws" },
  { id: "aws-dva", name: "AWS Certified Developer - Associate", issuer: "Amazon Web Services", category: "aws" },
  { id: "cka", name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", category: "other" },
  { id: "psm1", name: "Professional Scrum Master I", issuer: "Scrum.org", category: "other" },
];

export const iconNames = ["github", "x", "linkedin", "zenn", "mail", "rss"] as const;
export type IconName = (typeof iconNames)[number];

export const linkIds = ["github", "x", "linkedin", "zenn", "email", "rss"] as const;
export type LinkId = (typeof linkIds)[number];

export interface Link {
  id: LinkId;
  url: string;
  icon: IconName;
}

export const links: Link[] = [
  { id: "github", url: "https://example.com/alexdoe", icon: "github" },
  { id: "x", url: "https://example.com/alexdoe", icon: "x" },
  { id: "linkedin", url: "https://example.com/in/alexdoe", icon: "linkedin" },
  { id: "zenn", url: "https://example.com/alexdoe", icon: "zenn" },
  { id: "email", url: "mailto:alex@example.com", icon: "mail" },
  { id: "rss", url: "https://example.com/alexdoe/feed", icon: "rss" },
];
