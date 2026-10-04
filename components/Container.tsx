import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props} />
  );
}

export function Section({
  className,
  tone = "white",
  ...props
}: React.ComponentProps<"section"> & { tone?: "white" | "surface" }) {
  return (
    <section
      className={cn("py-16 sm:py-24", tone === "surface" && "bg-surface", className)}
      {...props}
    />
  );
}

export function SectionHeading({
  title,
  subtitle,
  id,
  as: Tag = "h2",
}: {
  title: string;
  subtitle?: string;
  id?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <Tag id={id} className="text-ink text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </Tag>
      {subtitle && <p className="text-muted mt-3 text-lg">{subtitle}</p>}
    </div>
  );
}
