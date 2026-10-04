export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  logo: string;
  placeholder?: boolean;
};

// TODO: Replace with real testimonials and client logos (with permission).
export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder testimonial. They delivered on time, communicated clearly and the site is fast.",
    name: "Casey Morgan",
    title: "Head of Marketing",
    company: "Northwind Co. (placeholder)",
    logo: "/images/logo-1.svg",
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial. Our manual workflows are now automated and we trust the results.",
    name: "Priya Patel",
    title: "Operations Lead",
    company: "Contoso Labs (placeholder)",
    logo: "/images/logo-2.svg",
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial. A small team that behaves like a senior engineering department.",
    name: "Taylor Brooks",
    title: "Founder",
    company: "Fabrikam Studio (placeholder)",
    logo: "/images/logo-3.svg",
    placeholder: true,
  },
];
