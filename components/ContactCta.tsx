import { home } from "@/content/home";
import { ButtonLink } from "./Button";
import { Container, Section } from "./Container";

export function ContactCta() {
  const { title, text, cta } = home.finalCta;
  return (
    <Section aria-labelledby="cta-title">
      <Container>
        <div className="bg-accent rounded-2xl px-6 py-14 text-center sm:px-12">
          <h2 id="cta-title" className="text-3xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-indigo-100">{text}</p>
          <ButtonLink href={cta.href} variant="secondary" className="mt-8">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
