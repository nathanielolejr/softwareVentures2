import { ContactCta } from "@/components/ContactCta";
import { Container, Section, SectionHeading } from "@/components/Container";
import { TeamCard } from "@/components/TeamCard";
import { home } from "@/content/home";
import { team } from "@/content/team";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Team",
  description: home.team.subtitle,
  path: "/team",
});

export default function TeamPage() {
  const members = [...team].sort((a, b) => a.order - b.order);
  return (
    <>
      <Section>
        <Container>
          <SectionHeading as="h1" title="Team" subtitle={home.team.subtitle} />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <li key={m.name}>
                <TeamCard member={m} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
