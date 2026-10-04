import Image from "next/image";
import Link from "next/link";
import type { ProjectWithStats } from "@/lib/github";
import { projectFilterTags } from "@/lib/github";
import { formatCount } from "@/lib/utils";
import { PlaceholderBadge, Tag } from "./Badge";

export function ProjectCard({ project }: { project: ProjectWithStats }) {
  const { stats } = project;
  const shot = project.screenshots[0];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-md">
      {shot && (
        <Image src={shot.src} alt={shot.alt} width={1200} height={750} className="aspect-[16/10] w-full border-b border-line object-cover" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        {project.placeholder && (
          <p className="mt-1">
            <PlaceholderBadge />
          </p>
        )}
        <p className="mt-2 text-muted">{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {projectFilterTags(project).map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        {stats && (
          <p className="mt-auto pt-4 text-sm text-muted">
            <span aria-label={`${stats.stars} stars`}>★ {formatCount(stats.stars)}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span aria-label={`${stats.forks} forks`}>⑂ {formatCount(stats.forks)}</span>
            {stats.language && (
              <>
                <span className="mx-2" aria-hidden="true">·</span>
                {stats.language}
              </>
            )}
          </p>
        )}
      </div>
    </article>
  );
}
