import type { Service } from "@/content/services";

const icons: Record<Service["icon"], string> = {
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  wordpress: "M4 6h16M4 12h16M4 18h10",
  automation: "M13 3L5 14h6l-1 7 8-11h-6l1-7z",
  devops: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M18 6l-2.5 2.5m-7 7L6 18",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="border-line flex h-full flex-col rounded-xl border bg-white p-6">
      <span className="bg-accent-soft text-accent flex h-10 w-10 items-center justify-center rounded-lg">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={icons[service.icon]} />
        </svg>
      </span>
      <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
      <p className="text-muted mt-2">{service.description}</p>
      <h4 className="text-ink mt-5 text-sm font-semibold tracking-wide uppercase">
        Typical deliverables
      </h4>
      <ul className="text-muted mt-2 space-y-1.5">
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-2">
            <span aria-hidden="true" className="text-accent">
              ✓
            </span>
            {d}
          </li>
        ))}
      </ul>
    </article>
  );
}
