import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { Tag } from "@/components/Badge";
import { ContactCta } from "@/components/ContactCta";
import { Container, Section } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { mdxComponents } from "@/components/MdxComponents";
import { site } from "@/content/site";
import { getAllPosts, getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.meta.title,
    description: post.meta.summary,
    path: `/blog/${slug}`,
    type: "article",
    image: post.meta.image,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, content } = post;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: meta.title,
          description: meta.summary,
          datePublished: meta.date,
          author: { "@type": "Organization", name: site.name },
          mainEntityOfPage: absoluteUrl(`/blog/${slug}`, site.url),
        }}
      />
      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <Link href="/blog" className="text-accent text-sm underline">
              ← All posts
            </Link>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">{meta.title}</h1>
            <p className="text-muted mt-3 text-sm">
              <time dateTime={meta.date}>{formatDate(meta.date)}</time> · {meta.readingMinutes} min
              read
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
              {meta.tags.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
            <div className="prose prose-slate prose-a:text-accent prose-headings:tracking-tight mt-8 max-w-none">
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      [rehypePrettyCode, { theme: "github-light", keepBackground: true }],
                    ],
                  },
                }}
              />
            </div>
          </article>
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
