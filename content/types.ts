import type {
  CertificationCategoryId,
  LinkId,
  Locale,
  PositionId,
  ProjectId,
  SectionId,
  SkillGroupId,
  SkillLevel,
} from "./site";

export interface SiteContent {
  locale: Locale;
  meta: { title: string; description: string };
  person: { name: string; role: string; tagline: string; location: string; avatar: string | null };
  labels: {
    skipToContent: string;
    menu: string;
    navigation: string;
    theme: string;
    language: string;
    repository: string;
    live: string;
    expandAll: string;
    collapseAll: string;
  };
  nav: Record<SectionId, string>;
  hero: {
    facts: { projects: string; certifications: string; skills: string };
    scroll: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  skills: {
    title: string;
    intro: string;
    levels: Record<SkillLevel, string>;
    groups: Record<SkillGroupId, string>;
  };
  experience: {
    title: string;
    positions: Record<PositionId, { title: string; summary: string; bullets: string[] }>;
  };
  certifications: {
    title: string;
    intro: string;
    categories: Record<CertificationCategoryId, string>;
  };
  projects: {
    title: string;
    entries: Record<ProjectId, { name: string; role: string; description: string }>;
  };
  contact: {
    title: string;
    body: string;
    linkLabels: Record<LinkId, string>;
  };
  footer: { note: string };
}
