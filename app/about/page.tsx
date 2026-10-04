import { ContactCta } from "@/components/ContactCta";
import { Container, Section, SectionHeading } from "@/components/Container";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: about.subtitle,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading as="h1" title={about.title} subtitle={about.subtitle} />
          <div className="max-w-2xl space-y-4 text-lg text-muted">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h2 className="mt-12 text-2xl font-semibold">Mission</h2>
          <p className="mt-2 max-w-2xl text-lg text-muted">{about.mission}</p>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="values">
        <Container>
          <SectionHeading id="values" title="Values" />
          <ul className="grid gap-6 sm:grid-cols-2">
            {about.values.map((v) => (
              <li key={v.title} className="rounded-xl border border-line bg-white p-6">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="milestones">
        <Container>
          <SectionHeading id="milestones" title={about.milestonesTitle} />
          <ol className="max-w-2xl space-y-8 border-l-2 border-line pl-6">
            {about.milestones.map((m) => (
              <li key={m.title} className="relative">
                <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                <p className="text-sm font-semibold text-accent">{m.year}</p>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="text-muted">{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
