import { ButtonLink } from "@/components/Button";
import { Container, Section } from "@/components/Container";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <p className="text-accent text-sm font-semibold tracking-wide uppercase">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-muted mt-3 text-lg">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/" variant="secondary">
            Back home
          </ButtonLink>
          <ButtonLink href="/contact">Contact us</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
