"use client";

import { useState } from "react";
import type { ProjectWithStats } from "@/lib/github";
import { projectFilterTags } from "@/lib/github";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExplorer({ projects }: { projects: ProjectWithStats[] }) {
  const [active, setActive] = useState<string>("All");
  const tags = ["All", ...[...new Set(projects.flatMap(projectFilterTags))].sort()];
  const visible =
    active === "All" ? projects : projects.filter((p) => projectFilterTags(p).includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter projects by tag" className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={active === tag}
            onClick={() => setActive(tag)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              active === tag
                ? "border-accent bg-accent text-white"
                : "border-line bg-white text-ink hover:bg-surface",
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} project{visible.length === 1 ? "" : "s"}
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
