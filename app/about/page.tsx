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
          <div className="text-muted max-w-2xl space-y-4 text-lg">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h2 className="mt-12 text-2xl font-semibold">Mission</h2>
          <p className="text-muted mt-2 max-w-2xl text-lg">{about.mission}</p>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="values">
        <Container>
          <SectionHeading id="values" title="Values" />
          <ul className="grid gap-6 sm:grid-cols-2">
            {about.values.map((v) => (
              <li key={v.title} className="border-line rounded-xl border bg-white p-6">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="text-muted mt-1">{v.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="milestones">
        <Container>
          <SectionHeading id="milestones" title={about.milestonesTitle} />
          <ol className="border-line max-w-2xl space-y-8 border-l-2 pl-6">
            {about.milestones.map((m) => (
              <li key={m.title} className="relative">
                <span
                  aria-hidden="true"
                  className="bg-accent absolute top-1.5 -left-[31px] h-3 w-3 rounded-full"
                />
                <p className="text-accent text-sm font-semibold">{m.year}</p>
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
