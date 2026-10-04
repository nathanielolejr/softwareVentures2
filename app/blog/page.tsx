import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { Tag } from "@/components/Badge";
import { Container, Section, SectionHeading } from "@/components/Container";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Notes on building for the web from the Software Ventures team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <Section>
        <Container>
          <SectionHeading as="h1" title="Blog" subtitle="Notes on building for the web." />
          <ul className="divide-line border-line divide-y border-y">
            {posts.map((post) => (
              <li key={post.slug} className="relative py-6">
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent after:absolute after:inset-0"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted mt-1 text-sm">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes}{" "}
                  min read
                </p>
                <p className="text-muted mt-2">{post.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                  {post.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
