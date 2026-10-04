export type Service = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: "code" | "wordpress" | "automation" | "devops";
};

// TODO: Replace placeholder copy with your real service descriptions.
export const servicesIntro = {
  title: "Services",
  subtitle: "Focused services delivered by a small senior team.",
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web development",
    icon: "code",
    description:
      "Fast, accessible, SEO-ready websites and web applications built with modern frameworks.",
    deliverables: [
      "Marketing sites and web apps",
      "Design system and component library",
      "Performance and accessibility audit",
      "Deployment and handover documentation",
    ],
  },
  {
    slug: "wordpress-development",
    title: "WordPress development",
    icon: "wordpress",
    description:
      "Custom themes, plugins and WooCommerce builds that your team can edit without a developer.",
    deliverables: [
      "Custom theme or block-based build",
      "Plugin development and customization",
      "Migration and performance tuning",
      "Editor training",
    ],
  },
  {
    slug: "automation-integrations",
    title: "Automation & integrations",
    icon: "automation",
    description:
      "Connect CRMs, payments, email and internal tools with reliable, monitored automations.",
    deliverables: [
      "API and webhook integrations",
      "Workflow automation",
      "Data sync pipelines",
      "Error alerting and runbooks",
    ],
  },
  {
    slug: "it-devops-consulting",
    title: "IT / DevOps consulting",
    icon: "devops",
    description:
      "Pragmatic advice and hands-on help with hosting, CI/CD, security basics and cost control.",
    deliverables: [
      "Infrastructure and hosting review",
      "CI/CD pipeline setup",
      "Backups, monitoring and security baseline",
      "Cloud cost review",
    ],
  },
];
