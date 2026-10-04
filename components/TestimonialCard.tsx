import Image from "next/image";
import type { Testimonial } from "@/content/testimonials";
import { PlaceholderBadge } from "./Badge";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-6">
      <Image src={t.logo} alt={`${t.company} logo`} width={160} height={48} className="h-8 w-auto self-start" />
      <blockquote className="mt-4 flex-1 text-lg text-ink">“{t.quote}”</blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold">{t.name}</span>
        <span className="text-muted">
          {" "}
          · {t.title}, {t.company}
        </span>
        {t.placeholder && (
          <span className="ml-2">
            <PlaceholderBadge />
          </span>
        )}
      </figcaption>
    </figure>
  );
}
