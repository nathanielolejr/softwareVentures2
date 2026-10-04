import { ContactForm } from "@/components/ContactForm";
import { Container, Section, SectionHeading } from "@/components/Container";
import { contactCopy } from "@/content/contact";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: contactCopy.subtitle,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <SectionHeading as="h1" title={contactCopy.title} subtitle={contactCopy.subtitle} />
          <ContactForm />
        </div>
        <aside className="border-line bg-surface h-fit rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Prefer email?</h2>
          <p className="text-muted mt-2">
            Write to{" "}
            <a className="text-accent underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </aside>
      </Container>
    </Section>
  );
}
