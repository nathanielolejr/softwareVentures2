export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  order: number;
  placeholder?: boolean;
};

// TODO: Replace placeholder members with real team details and photos (square, 600x600+).
export const team: TeamMember[] = [
  {
    name: "Alex Rivera (placeholder)",
    role: "Co-founder, Engineering",
    bio: "Placeholder bio. Full-stack engineer focused on performance, accessibility and clean architecture.",
    photo: "/images/team-1.svg",
    skills: ["TypeScript", "React", "Next.js", "Node.js"],
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    order: 1,
    placeholder: true,
  },
  {
    name: "Sam Chen (placeholder)",
    role: "Co-founder, Product & Design",
    bio: "Placeholder bio. Turns fuzzy requirements into clear, usable interfaces and shippable scope.",
    photo: "/images/team-2.svg",
    skills: ["UX", "Figma", "Tailwind CSS", "WordPress"],
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    order: 2,
    placeholder: true,
  },
  {
    name: "Jordan Lee (placeholder)",
    role: "DevOps & Integrations",
    bio: "Placeholder bio. Builds reliable pipelines, hosting and integrations that stay out of the way.",
    photo: "/images/team-3.svg",
    skills: ["CI/CD", "AWS", "Docker", "Automation"],
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    order: 3,
    placeholder: true,
  },
];
