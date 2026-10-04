import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const socials = site.socials.filter((s) => s.href);
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-muted">{site.tagline}</p>
          <a className="mt-3 inline-block text-accent underline" href={`mailto:${site.email}`}>
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
      <div className="border-t border-line py-4 text-center text-sm text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
