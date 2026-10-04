import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceholderBadge, Tag } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { ContactCta } from "@/components/ContactCta";
import { Container, Section } from "@/components/Container";
import { projects } from "@/content/projects";
import { getProject, projectFilterTags } from "@/lib/github";
import { pageMetadata } from "@/lib/seo";
import { formatCount, formatDate } from "@/lib/utils";

export const revalidate = 21600;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  const { stats } = project;

  return (
    <>
      <Section>
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <Link href="/projects" className="text-accent underline">
              ← All projects
            </Link>
          </nav>
          <h1 className="text-4xl font-semibold tracking-tight">{project.title}</h1>
          {project.placeholder && (
            <p className="mt-2">
              <PlaceholderBadge />
            </p>
          )}
          <p className="text-muted mt-4 max-w-2xl text-lg">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href={stats?.url ?? `https://github.com/${project.repo}`}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View repository
            </ButtonLink>
            {project.liveUrl && (
              <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live demo
              </ButtonLink>
            )}
          </div>

          {stats && (
            <dl className="border-line bg-surface mt-8 grid max-w-xl grid-cols-2 gap-4 rounded-xl border p-5 sm:grid-cols-4">
              <div>
                <dt className="text-muted text-sm">Stars</dt>
                <dd className="text-lg font-semibold">{formatCount(stats.stars)}</dd>
              </div>
              <div>
                <dt className="text-muted text-sm">Forks</dt>
                <dd className="text-lg font-semibold">{formatCount(stats.forks)}</dd>
              </div>
              <div>
                <dt className="text-muted text-sm">Language</dt>
                <dd className="text-lg font-semibold">{stats.language ?? "–"}</dd>
              </div>
              <div>
                <dt className="text-muted text-sm">Updated</dt>
                <dd className="text-lg font-semibold">{formatDate(stats.updatedAt)}</dd>
              </div>
            </dl>
          )}

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section aria-labelledby="problem">
              <h2 id="problem" className="text-xl font-semibold">
                Problem
              </h2>
              <p className="text-muted mt-2">{project.problem}</p>
            </section>
            <section aria-labelledby="solution">
              <h2 id="solution" className="text-xl font-semibold">
                Solution
              </h2>
              <p className="text-muted mt-2">{project.solution}</p>
            </section>
          </div>

          <section aria-labelledby="tech" className="mt-10">
            <h2 id="tech" className="text-xl font-semibold">
              Tech used
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[...projectFilterTags(project), ...(stats?.topics ?? [])]
                .filter((t, i, a) => a.indexOf(t) === i)
                .map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
            </ul>
          </section>

          <section aria-labelledby="shots" className="mt-10">
            <h2 id="shots" className="text-xl font-semibold">
              Screenshots
            </h2>
            <ul className="mt-4 grid gap-6 md:grid-cols-2">
              {project.screenshots.map((s) => (
                <li key={s.src}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={1200}
                    height={750}
                    className="border-line w-full rounded-xl border"
                  />
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
