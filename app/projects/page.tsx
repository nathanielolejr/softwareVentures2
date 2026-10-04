import { ContactCta } from "@/components/ContactCta";
import { Container, Section, SectionHeading } from "@/components/Container";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { getProjects } from "@/lib/github";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Selected client work and open-source projects from Software Ventures.",
  path: "/projects",
});
export const revalidate = 21600;

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            title="Projects"
            subtitle="Selected client work and open-source projects. GitHub stats update automatically."
          />
          <ProjectsExplorer projects={projects} />
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
