import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = ["", "/services", "/projects", "/team", "/blog", "/about", "/contact"];
  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` })),
    ...getAllPosts().map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
