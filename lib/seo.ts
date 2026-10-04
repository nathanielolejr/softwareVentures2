import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata({
  title,
  description = site.description,
  path = "/",
  type = "website",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} – ${site.tagline}`;
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
