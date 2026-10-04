export const site = {
  name: "Software Ventures",
  tagline: "create for now",
  description:
    "Software Ventures is a small web development team building fast, accessible websites, WordPress builds, automations and DevOps foundations for growing businesses.",
  // Falls back to localhost for local dev. Set NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "venturessoftware609@gmail.com",
  // TODO: Replace with your real GitHub org/username if it differs.
  github: "VenturesSofwares",
  // TODO: Add real social URLs. Leave empty to hide a link.
  socials: [
    { label: "GitHub", href: "https://github.com/VenturesSofwares" },
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
  ],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],
  footerNav: [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  foundedYear: 2025, // TODO: confirm founding year (used for copyright and JSON-LD)
} as const;
