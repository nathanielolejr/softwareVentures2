import { ContactCta } from "@/components/ContactCta";
import { Container, Section, SectionHeading } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { services, servicesIntro } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: servicesIntro.subtitle,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading as="h1" title={servicesIntro.title} subtitle={servicesIntro.subtitle} />
          <ul className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
