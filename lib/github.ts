import { projects, type Project } from "@/content/projects";

export type RepoStats = {
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
  topics: string[];
  url: string;
};

export type ProjectWithStats = Project & { stats: RepoStats | null };

const REVALIDATE_SECONDS = 60 * 60 * 6;

/** Fetch live repo data. Never throws: returns null on any failure. */
export async function getRepoStats(repo: string): Promise<RepoStats | null> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      stargazers_count: number;
      forks_count: number;
      language: string | null;
      pushed_at: string;
      topics?: string[];
      html_url: string;
    };
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
      updatedAt: data.pushed_at,
      topics: data.topics ?? [],
      url: data.html_url,
    };
  } catch {
    return null;
  }
}

function withStats(project: Project, stats: RepoStats | null): ProjectWithStats {
  return { ...project, stats };
}

export async function getProjects(filter?: (p: Project) => boolean): Promise<ProjectWithStats[]> {
  const list = projects.filter(filter ?? (() => true)).sort((a, b) => a.order - b.order);
  return Promise.all(list.map(async (p) => withStats(p, await getRepoStats(p.repo))));
}

export const getFeaturedProjects = () => getProjects((p) => p.featured);

export async function getProject(slug: string): Promise<ProjectWithStats | null> {
  const project = projects.find((p) => p.slug === slug);
  return project ? withStats(project, await getRepoStats(project.repo)) : null;
}

/** All filter tags: curated tags plus the live primary language. */
export function projectFilterTags(p: ProjectWithStats): string[] {
  const set = new Set(p.tags);
  if (p.stats?.language) set.add(p.stats.language);
  return [...set];
}
