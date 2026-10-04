export type Project = {
  slug: string;
  /** GitHub "owner/name" */
  repo: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  screenshots: { src: string; alt: string }[];
  liveUrl?: string;
  featured: boolean;
  order: number;
  /** Shows a "Placeholder" badge. Remove when you replace with real work. */
  placeholder?: boolean;
};

// TODO: Replace these placeholder entries with your real repositories.
// The repos below are well-known public repos used only so live GitHub stats can be reviewed.
export const projects: Project[] = [
  {
    slug: "sample-web-platform",
    repo: "vercel/next.js",
    title: "Sample Web Platform",
    summary: "Placeholder: a production web platform built with a modern React framework.",
    description:
      "Placeholder project. Replace with a real description of what the project does and who uses it.",
    problem:
      "Placeholder: the client needed a faster site that marketing could update on their own.",
    solution:
      "Placeholder: we shipped a statically generated site backed by a headless CMS, cutting load times by half.",
    tags: ["TypeScript", "Next.js", "Web"],
    screenshots: [
      {
        src: "/images/screenshot-1.svg",
        alt: "Placeholder screenshot of the Sample Web Platform dashboard",
      },
      {
        src: "/images/screenshot-2.svg",
        alt: "Placeholder screenshot of the Sample Web Platform landing page",
      },
    ],
    liveUrl: "https://nextjs.org",
    featured: true,
    order: 1,
    placeholder: true,
  },
  {
    slug: "sample-design-system",
    repo: "tailwindlabs/tailwindcss",
    title: "Sample Design System",
    summary: "Placeholder: a reusable component library with accessible defaults.",
    description:
      "Placeholder project. Replace with a real description of the open-source library or tool.",
    problem: "Placeholder: several products shared inconsistent UI and duplicated work.",
    solution: "Placeholder: a typed, themeable component library published to npm and documented.",
    tags: ["CSS", "Design System", "Open Source"],
    screenshots: [
      {
        src: "/images/screenshot-2.svg",
        alt: "Placeholder screenshot of the Sample Design System docs",
      },
    ],
    liveUrl: "https://tailwindcss.com",
    featured: true,
    order: 2,
    placeholder: true,
  },
  {
    slug: "sample-automation-toolkit",
    repo: "colinhacks/zod",
    title: "Sample Automation Toolkit",
    summary: "Placeholder: validated integrations and workflows between business tools.",
    description:
      "Placeholder project. Replace with a real description of the integration or automation work.",
    problem: "Placeholder: data was copied by hand between a CRM and billing system.",
    solution: "Placeholder: schema-validated webhooks and retries now keep both systems in sync.",
    tags: ["TypeScript", "Automation", "Open Source"],
    screenshots: [
      {
        src: "/images/screenshot-3.svg",
        alt: "Placeholder screenshot of the Sample Automation Toolkit run log",
      },
    ],
    liveUrl: "https://zod.dev",
    featured: true,
    order: 3,
    placeholder: true,
  },
  {
    slug: "sample-wordpress-theme",
    repo: "WordPress/gutenberg",
    title: "Sample WordPress Theme",
    summary: "Placeholder: a block-based WordPress theme for a content-heavy site.",
    description: "Placeholder project. Replace with a real WordPress theme or plugin you maintain.",
    problem: "Placeholder: the legacy theme was slow and hard for editors to use.",
    solution:
      "Placeholder: a lean block theme with reusable patterns and a clean editing experience.",
    tags: ["PHP", "WordPress"],
    screenshots: [
      {
        src: "/images/screenshot-1.svg",
        alt: "Placeholder screenshot of the Sample WordPress Theme",
      },
    ],
    featured: false,
    order: 4,
    placeholder: true,
  },
];
