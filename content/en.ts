import type { SiteContent } from "./types";

const content = {
  locale: "en",
  meta: {
    title: "Alex Doe - Software Engineer",
    description: "Alex Doe builds web products with TypeScript, Go, and Rust, and writes about the parts that are hard to change later.",
  },
  person: {
    name: "Alex Doe",
    role: "Software Engineer",
    tagline: "I build web products that stay easy to change.",
    location: "Remote, UTC+9",
    avatar: null,
  },
  labels: {
    skipToContent: "Skip to content",
    menu: "Menu",
    navigation: "Site navigation",
    theme: "Toggle color theme",
    language: "Change language",
    repository: "Repository",
    live: "Live site",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
  },
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact",
  },
  about: {
    title: "About",
    paragraphs: [
      "I have spent six years building web applications, mostly the frontend and the API layer behind it. The parts that are expensive to change later are the parts I like working on, so the data model usually gets more of my attention than the screen.",
      "Outside work I write small tools, read other people's source code, and take long walks to think through problems I could not solve at the desk.",
    ],
    highlights: [
      { label: "Focus", value: "Web platform and developer tooling" },
      { label: "Languages", value: "TypeScript, Go, Rust" },
      { label: "Editor", value: "Neovim" },
      { label: "Timezone", value: "UTC+9" },
    ],
  },
  skills: {
    title: "Skills",
    intro: "These levels are my own reading of where I stand today, not a certification.",
    levels: { expert: "Expert", intermediate: "Intermediate", beginner: "Beginner" },
    groups: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      infrastructure: "Infrastructure",
      tools: "Tools",
    },
  },
  experience: {
    title: "Experience",
    positions: {
      northwind: {
        title: "Senior Software Engineer",
        summary: "Platform team",
        bullets: [
          "Led the migration of a monolith to a modular Next.js frontend, one route at a time.",
          "Cut the production build roughly in half by removing a dependency layer nothing used.",
          "Mentored three engineers through their first production release.",
        ],
      },
      cirrus: {
        title: "Software Engineer",
        summary: "Product team",
        bullets: [
          "Built the billing and subscription flow that the whole product runs on.",
          "Added end-to-end tests that caught two release-blocking regressions before a deploy.",
        ],
      },
      foundry: {
        title: "Junior Developer",
        summary: "Client projects",
        bullets: [
          "Delivered nine client sites on a shared component library.",
          "Wrote the internal guide for the design handoff process.",
        ],
      },
    },
  },
  certifications: {
    title: "Certifications",
    intro: "Credentials I keep current.",
    categories: { aws: "Amazon Web Services", other: "Other" },
  },
  projects: {
    title: "Projects",
    entries: {
      atlas: {
        name: "Atlas",
        role: "Creator",
        description: "A tile server and renderer for custom maps. It streams vector tiles and draws them on the client without pulling in a mapping library.",
      },
      beacon: {
        name: "Beacon",
        role: "Creator",
        description: "An alerting service that groups related incidents before it pages anyone, which cut the overnight page volume on the team roughly in half.",
      },
      lumen: {
        name: "Lumen",
        role: "Creator",
        description: "A static site generator that compiles Markdown to WebAssembly modules, so the same content renders on the server and in the browser.",
      },
      harbor: {
        name: "Harbor",
        role: "Tech lead",
        description: "A deployment dashboard that shows what changed between two releases and who signed off on each step.",
      },
      prism: {
        name: "Prism",
        role: "Creator",
        description: "An image pipeline that normalises uploaded photos and extracts their dominant colors, running as a Lambda function behind a queue.",
      },
      quill: {
        name: "Quill",
        role: "Contributor",
        description: "A Markdown editor with live preview and a plugin API. I maintain the table extension and the documentation.",
      },
    },
  },
  contact: {
    title: "Contact",
    body: "Email is the fastest way to reach me. I answer within a day or two.",
    linkLabels: {
      github: "GitHub",
      x: "X",
      linkedin: "LinkedIn",
      zenn: "Zenn",
      email: "Email",
      rss: "RSS",
    },
  },
  footer: { note: "Built with Next.js and Tailwind CSS. Published by GitHub Pages." },
} satisfies SiteContent;

export default content;
