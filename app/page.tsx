import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ContactCta } from "@/components/ContactCta";
import { Container, Section, SectionHeading } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { TeamCard } from "@/components/TeamCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { home } from "@/content/home";
import { team } from "@/content/team";
import { testimonials } from "@/content/testimonials";
import { getFeaturedProjects } from "@/lib/github";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({});
export const revalidate = 21600;

export default async function HomePage() {
  const featured = (await getFeaturedProjects()).slice(0, 3);
  const members = [...team].sort((a, b) => a.order - b.order);
  const { hero, whatWeDo } = home;

  return (
    <>
      <Section className="pt-16 pb-12 sm:pt-28">
        <Container>
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="text-ink mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {hero.title}
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg sm:text-xl">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href} variant="secondary">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href}>{hero.secondaryCta.label}</ButtonLink>
          </div>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="what-we-do" className="py-12 sm:py-16">
        <Container>
          <h2 id="what-we-do" className="sr-only">
            {whatWeDo.title}
          </h2>
          <ul className="grid gap-8 sm:grid-cols-3">
            {whatWeDo.items.map((item) => (
              <li key={item.title}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted mt-1">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="featured">
        <Container>
          <SectionHeading
            id="featured"
            title={home.featuredProjects.title}
            subtitle={home.featuredProjects.subtitle}
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/projects" className="text-accent font-medium underline">
              View all projects
            </Link>
          </p>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="team">
        <Container>
          <SectionHeading id="team" title={home.team.title} subtitle={home.team.subtitle} />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <li key={m.name}>
                <TeamCard member={m} />
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/team" className="text-accent font-medium underline">
              Meet the team
            </Link>
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="testimonials">
        <Container>
          <SectionHeading id="testimonials" title={home.testimonials.title} />
          <ul className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name}>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
