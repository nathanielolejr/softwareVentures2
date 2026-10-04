import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  img: ({ src, alt }) =>
    typeof src === "string" ? (
      <Image
        src={src}
        alt={alt ?? ""}
        width={1200}
        height={630}
        className="border-line rounded-xl border"
      />
    ) : null,
  a: ({ href = "", children }) => {
    const external = /^https?:\/\//.test(href);
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  },
};
