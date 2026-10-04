import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  const socials = site.socials.filter((s) => s.href);
  return (
    <footer className="border-line bg-surface border-t">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo />
          <p className="text-muted mt-1">{site.tagline}</p>
          <a className="text-accent mt-3 inline-block underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2">
            {site.footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-wrap gap-4 sm:justify-end" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink"
              >
                {s.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <div className="border-line text-muted border-t py-4 text-center text-sm">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
